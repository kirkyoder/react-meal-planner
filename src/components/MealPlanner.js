import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import List from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenuIcon from 'material-ui/svg-icons/navigation/menu';
import NavigationMoreIcon from 'material-ui/svg-icons/navigation/more-vert';
import ReaderIcon from 'material-ui/svg-icons/action/chrome-reader-mode';
import RestaurantIcon from 'material-ui/svg-icons/maps/restaurant';
import AddIcon from 'material-ui/svg-icons/content/add-box';
import Subheader from 'material-ui/Subheader';
import { white } from 'material-ui/styles/colors';

import MealItemEnumerator from './MealItemEnumerator';
import MealItemModel from '../models/MealItemModel';
import NutritionLog from './NutritionLog';

import MealItemMaker from './MealItemMaker';

var _mealPlannerEntryId = 0;

class MealPlanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            availableMeals: props.meals || [],
            plannedMeals: [],
            mealItemMakerOpen: false,
            visiblePane: 0
        }

        this.handleMealAdded = this.handleMealAdded.bind(this);
        this.handleMealRemoved = this.handleMealRemoved.bind(this);

        this.openMealItemMaker = this.openMealItemMaker.bind(this);
        this.onMealItemMakerClosed = this.onMealItemMakerClosed.bind(this);

        this._addMealItem = this._addMealItem.bind(this);
    }

    handleMealAdded(e, meal) {
        this.setState(function(prevState, props) {
            return {
                plannedMeals: prevState.plannedMeals.concat({
                    id: _mealPlannerEntryId++,
                    meal: meal
                })
            }
        });
    }

    handleMealRemoved(index) {
        this.setState({
            plannedMeals: this.state.plannedMeals.filter(function(meal) {
                return meal.id !== index;
            })
        });
    }

    _addMealItem(mealItem) {
        this.setState(function(prevState, props) {
            return {
                availableMeals: prevState.availableMeals.concat(mealItem)
            }
        });
    }

    openMealItemMaker() {
        this.setState({ mealItemMakerOpen: true });
    }

    onMealItemMakerClosed(data) {
        if (data) {
            this._addMealItem(new MealItemModel({
                name: data.name,
                calories: data.calories,
                protein: data.protein,
                carbs: data.carbs,
                fat: data.fat
            }));
        }

        // close the meal item maker
        this.setState({ mealItemMakerOpen: false });
    }

    showNutritionLog = () => {
        this.setState({ visiblePane: 0 })
    }

    showMealList = () => {
        this.setState({ visiblePane: 1 })
    }

    getNutritionLogPane() {
        const pane = (
            <div className="nutrition-log-container">
                <NutritionLog mealItems={this.state.plannedMeals} onClick={this.handleMealRemoved} />
            </div>
        );

        return { pane: pane }
    }

    getMealListPane() {
        const pane = (
            <div>
                <MealItemMaker
                    open={this.state.mealItemMakerOpen}
                    onClose={this.onMealItemMakerClosed} />

                <div className="meals-list-container">
                    <List>
                        <Subheader>Meals</Subheader>
                        <MealItemEnumerator
                            meals={this.state.availableMeals}
                            onItemClicked={this.handleMealAdded} />
                    </List>
                </div>
            </div>
        );

        const menu = (
            <IconMenu
                iconButtonElement={<IconButton><NavigationMoreIcon color={white} /></IconButton>}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <MenuItem primaryText="Add Meal Item" leftIcon={<AddIcon />} onClick={this.openMealItemMaker} />
            </IconMenu>
        );

        return { pane: pane, appMenuRight: menu };
    }

    getVisiblePane() {
        switch (this.state.visiblePane) {
            case 1:
                return this.getMealListPane();
            case 0:
            default:
                return this.getNutritionLogPane();
        }
    }

    render() {
        const appBarMenuLeft = (
            <IconMenu iconButtonElement={<IconButton><NavigationMenuIcon color={white} /></IconButton>}>
                <MenuItem primaryText="Nutrition Log" leftIcon={<ReaderIcon />} onClick={this.showNutritionLog} />
                <MenuItem primaryText="Meal List" leftIcon={<RestaurantIcon />} onClick={this.showMealList} />
            </IconMenu>
        );

        const visiblePane = this.getVisiblePane()

        return (
            <div className="outer-container">
                <AppBar
                    title="Meal Planner"
                    iconElementLeft={appBarMenuLeft}
                    iconElementRight={visiblePane.appMenuRight} />

                {visiblePane.pane}
            </div>
        );
    }
}

export default MealPlanner;
