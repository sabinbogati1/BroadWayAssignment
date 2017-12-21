module.exports = function() {

    function salaryDay(amount, cb) {

        var salary = "Today is mom's salary day. Her salary is =" + amount;

        cb(salary);



    }
    return {

        salaryDay: salaryDay

    }

}