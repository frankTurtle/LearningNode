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

    getLetterGrade: function(){
        var average = this.getAverage();

        if ( average >= 90 ) return 'A';
        if ( average >= 80 && average < 89 ) return 'B';
        if ( average >= 70 && average < 79 ) return 'C';
        if ( average >= 60 && average < 69 ) return 'D';
        
        return 'F';
    },

    reset: function(){
        this._grades = [];
    }
    
};

exports.book = gradeBook;