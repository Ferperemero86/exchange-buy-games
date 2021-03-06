module.exports = {
    userReducer: (state, action) => {
        switch(action.type) {
            case "USER_LOGGED_IN" :
                return {...state, userLogged: true}

            case "USER_LOGGED_OUT" :
                return {...state, userLogged: false}

            case "UPDATE_USER_ID" :
                return {...state, userId: action.payload}

            case "UPDATE_COMPONENT_MOUNT_STATUS" :
                return {...state, hasMounted: action.payload}
        }
    },
    registerReducer: (state, action) => {
        switch(action.type) {
            case "ADD_USERNAMEINPUT_VALUE" :
                return {...state, usernameInputValue: action.payload}

            case "ADD_PASSWORDINPUT_VALUE" :
                return {...state, passwordInputValue: action.payload}

            case "SELECT_IMAGE" :
                return {...state, selectedImage: action.payload}

            case "UPDATE_SELECTED_COUNTRY_NAME" :
                return {...state, selectedCountryName: action.payload} 

            case "UPDATE_SELECTED_COUNTRY_CODE" :
                return {...state, selectedCountryCode: action.payload}

            case "UPDATE_SELECTED_CITY" :
                return {...state, selectedCityName: action.payload}

            case "UPDATE_CITIES" :
                return {...state, cities: action.payload}

            case "UPDATE_COUNTRY_NAMES" :
                return {...state, countryNames: action.payload}

            case "UPDATE_COUNTRIES" :
                return {...state, countries: action.payload}

            case "UPDATE_NICK_NAME_VALUE" : 
                return {...state, nickName: action.payload}

            case "UPDATE_MESSAGE" :
                return {...state, messages: action.payload}
        }
    },
    loginReducer: (state, action) => {
        switch(action.type) {
            case "ADD_USERNAMEINPUT_VALUE" :
                return {...state, usernameInputValue: action.payload}

            case "ADD_PASSWORDINPUT_VALUE" :
                return {...state, passwordInputValue: action.payload}

            case "UPDATE_MESSAGE" :
                return {...state, messages: action.payload}
        }
    },
    exploreGamesReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_GAMES" :
                return {...state, games: action.payload}

            case "UPDATE_PAGE" :
                return {...state, page: action.payload}
        }
    },
    gamesListReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_GAMES" :
                return {...state, games: action.payload}

            case "SHOW_GAME_MENU" :
                return {...state, showGameMenu: action.payload}

            case "SHOW_DELETE_LIST_QUESTION" :
                return {...state, showDeleteListQuestion: action.payload}

            case "SHOW_DELETE_GAME_QUESTION" :
                return {...state, showDeleteGameQuestion: action.payload}

            case "UPDATE_GAME_STATUS" :
                return {...state, gameStatus: action.payload}

            case "UPDATE_LIST_EXISTS" :
                return {...state, listExists: action.payload}

            case "SHOW_CREATE_LIST_INPUT" :
                return {...state, createListInput: true}

            case "HIDE_CREATE_LIST_INPUT" :
                return {...state, createListInput: false}

            case "SHOW_EDIT_LIST_ACTIVE_MENU" :
                return {...state, editListMenuActive: true}

            case "HIDE_EDIT_LIST_NAME" :
                return {...state, createListInput: false}

            case "SHOW_EDIT_LIST_NAME" :
                return {...state, editListMenuActive: true}

            case "HIDE_EDIT_LIST_ACTIVE_MENU" :
                return {...state, editListMenuActive: false}

            case "UPDATE_CREATE_LIST_INPUT_VALUE" :
                return {...state, createListInputValue: action.payload}

            case "UPDATE_LIST_NAME" :
                return {...state, listName: action.payload}

            case "HIDE_EDIT_LIST" :
                return {...state, editList: false}
            
            case "SHOW_EDIT_LIST" :
                return {...state, editList: true}

            case "SET_GAME_TO_DELETE" :
                return {...state, gameToDelete: action.payload}

            case "SET_ELEMENT_TO_DELETE" :
                return {...state, elementToDelete: action.payload}

            case "EDIT_NAME" :
                return {...state, editName: action.payload}
            
            case "UPDATE_USER_ID" :
                return {...state, userId: action.payload}
        }
    },
    transactionsReducer: (state, action) => {
        switch(action.type) {
            case "SET_GAME_FROM_LIST_TO_EXCHANGE" :
                return {...state, gameFromListToExchange: action.payload}

            case "SET_GAME_TO_EXCHANGE" :
                return {...state, gameToExchange: action.payload}

            case "SET_GAME_TO_FIND" :
                return {...state, gameToFind: action.payload}

            case "SHOW_EXCHANGE_SEARCH_WINDOW" :
                return {...state, showGameExchangeWindow: action.payload}

            case "SET_EXCHANGE_GAMES_SEARCH" :
                return {...state, exchangeGamesSearch: action.payload}
            
            case "SET_SEARCH_GAME_TO_EXCHANGE_INPUT_VALUE" :
                return {...state, searchGameToExchangeInputValue: action.payload}

            case "UPDATE_SELECTED_PLATFORM" :
                return {...state, platformSelected: action.payload}
        }
    },
    sellGameReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_GAME_PRICE" :
                return {...state, gamePrice: action.payload}

            case "UPDATE_GAME_DESCRIPTION" :
                return {...state, gameDescription: action.payload}
            
            case "UPDATE_GAME_CONDITION" :
                return {...state, gameCondition: action.payload}

            case "UPDATE_GAME_CURRENCY" :
                return {...state, gameCurrency: action.payload}
        }
    },
    usersGamesReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_GAMES" :
                return {...state, games: action.payload}

            case "UPDATE_SELECTED_COUNTRY" :
                return {...state, countrySelected: action.payload}

            case "UPDATE_SELECTED_COUNTRY_NAME" :
                return {...state, selectedCountryName: action.payload}

            case "UPDATE_SELECTED_CITY" :
                return {...state, citySelected: action.payload}

            case "UPDATE_SELECTED_STATE" :
                return {...state, stateSelected: action.payload}

            case "UPDATE_STATES" :
                return {...state, states: action.payload}

            case "UPDATE_COUNTRIES" :
                return {...state, countries: action.payload}

            case "UPDATE_CITIES" :
                return {...state, cities: action.payload}

            case "UPDATE_MESSAGES" :
                return {...state, messages: action.payload}

            case "UPDATE_SEARCH_INPUT_VALUE" :
                return {...state, searchInputValue: action.payload}

            case "SHOW_GAMES_LIST" :
                return {...state, showGamesList: action.payload}

            case "UPDATE_GAMES_LIST" :
                return {...state, gamesList: action.payload}
            
            case "GAME_FROM_LIST_TO_EXCHANGE" :
                return {...state, gameFromListToExchange: action.payload}

            case "SHOW_MESSAGE_FORM" :
                return {...state, messageForm: action.payload}

            case "UPDATE_GAME_SELLING_PRICE" :
                return {...state, gameSellingPrice: action.payload}

            case "SHOW_NEW_OFFER_FORM" :
                return {...state, newOfferForm: action.payload}
        }
    },
    messagesReducer: (state, action) => {
        switch(action.type) {
            case "SHOW_CONFIRM_QUESTION" : 
                return {...state, confirmQuestion: action.payload}

            case "UPDATE_CONFIRMATION_MESSAGE" : 
                return {...state, confirmMessage: action.payload}
        }
    },
    usersMessagesReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_CURRENT_CONVERSATION" :
                return {...state, currentConversation: action.payload}
            
            case "UPDATE_CURRENT_RECIPIENT" :
                return {...state, currentRecipient: action.payload}

            case "UPDATE_CONVERSATIONS" :
                return {...state, conversations: action.payload}

            case "UPDATE_CHAT_TEXT_INPUT" :
                return {...state, chatTextInput: action.payload}
        }
    },
    userProfileReducer: (state, action) => {
        switch(action.type) {
            case "SHOW_MESSAGE_FORM" :
                return {...state, messageForm: action.payload}

            case "SHOW_EDIT_PROFILE_FIELD" :
                return {...state, editProfileField: action.payload}

            case "UPDATE_FIELD_VALUE" :
                return {...state, fieldValue: action.payload}
            
            case "UPDATE_COUNTRY" :
                return {...state, country: action.payload}

            case "UPDATE_COUNTRY_CODE" :
                return {...state, countryCode: action.payload}

            case "UPDATE_NICKNAME" :
                return {...state, nickName: action.payload}

            case "UPDATE_CITIES" :
                return {...state, cities: action.payload}

            case "UPDATE_CITY" :
                return {...state, city: action.payload}

            case "UPDATE_PROFILE_IMAGE" :
                return {...state, profileImage: action.payload}

            case "UPDATE_PROFILE_IMAGE_URL" :
                return {...state, profileImageUrl: action.payload}
        }
    },
    proposalsReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_PROPOSALS" :
                return {...state, proposalsData: action.payload}
        }
    },
    settingsReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_PASSWORD_INPUT" :
                return {...state, passwordInput: action.payload}

            case "SHOW_DELETE_QUESTION" :
                return {...state, deleteQuestion: action.payload}
        }
    },
    mainSearchReducer: (state, action) => {
        switch(action.type) {
            case "UPDATE_TEXT_SEARCH_INPUT" :
                return {...state, textSearchInput: action.payload}

            case "UPDATE_GAMES_SEARCH" :
                return {...state, games: action.payload}
        }
    },
    adminReducer: (state, action) => {
        switch(action.type) {
            case "SHOW_DELETE_QUESTION" :
                return {...state, deleteQuestion: action.payload};
            
            case "UPDATE_USERS" :
                return {...state, users: action.payload}
        }
    }
}