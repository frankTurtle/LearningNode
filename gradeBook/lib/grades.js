var gradeBook = {
    _grades: [],

    addGrade: function( newGrade ){
        this._grades.push( newGrade );
    },

    getCountOfGrades: function(){
        return this._grades.length;
    },

    getAverage: function(){
        var sum = 0;

        for( index in this._grades ){
            sum += this._grades[ index ];
        }

        return sum / this.getCountOfGrades();
    },

    reset: function(){
        this._grades = [];
    }
    
};

exports.book = gradeBook;