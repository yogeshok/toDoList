// budget controller
var budgetController = (function() {
	
	/*
	var Expense = function(id , description , value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id , description , value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};
	
	*/
	
})();

// UI controller
var UIController = (function() {
	
	var DOMstrings = {
		inputType : '.add__type',
		inputDescription : '.add__description',
		inputValue : '.add__value',
		inputBtn : '.add__btn'
	};

	return {
		getInput : function() {
			return {
				type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
				description : document.querySelector(DOMstrings.inputDescription).value,
				value : document.querySelector(DOMstrings.inputValue).value
			};			
		},

		getDOMstrings: function() {
			return DOMstrings; 
		}
	};
	
})();

// Global App controller
var controller = (function(budgetCtrl , UICtrl) {
	
	var setupEventListeners = function(){

		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.inputBtn).addEventListener('click' , ctrlAddItem);
	
		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13){
				ctrlAddItem();

			}
		});
	};

	var ctrlAddItem = function() {
		// 1. Get the filled input data
		var input = UICtrl.getInput();
		
		// 2. Add item to budgetController
		// 3. Add item to UI
		// 4. Calculate the budget
		// 5. Display the budget on the UI
	};

	return {
		init : function(){
			console.log('Application has started');
			setupEventListeners();
		}
	};
	
})(budgetController , UIController);

controller.init();