"use strict";
var validation_context_1 = require("../src/validation-context");
var PropertyValidatorTester = (function () {
    function PropertyValidatorTester(validator) {
        this.validator = validator;
    }
    PropertyValidatorTester.prototype.test = function (description, testCases) {
        var _this = this;
        describe(description, function () {
            testCases.forEach(function (testCase) {
                var validationContext = new validation_context_1.ValidationContext();
                validationContext.propertyValue = testCase.value;
                it(_this.getExpectation(testCase), function () {
                    expect(_this.validator.isValid(validationContext)).toBe(testCase.pass);
                });
            });
        });
    };
    PropertyValidatorTester.prototype.valueToString = function (value) {
        if (value === undefined) {
            return "undefined";
        }
        if (value === null) {
            return "null";
        }
        return value.toString();
    };
    PropertyValidatorTester.prototype.getExpectation = function (testCase) {
        var valueText = "'" + this.valueToString(testCase.value) + "'";
        if (testCase.valueDescription) {
            valueText += " (" + testCase.valueDescription + ")";
        }
        return "When value is " + valueText + " validator should " + (testCase.pass ? "pass" : "fail") + ".";
    };
    return PropertyValidatorTester;
}());
exports.PropertyValidatorTester = PropertyValidatorTester;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMvcHJvcGVydHktdmFsaWRhdG9yLXRlc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsbUNBQWtDLDJCQUEyQixDQUFDLENBQUE7QUFFOUQ7SUFHSSxpQ0FBWSxTQUE0QjtRQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sc0NBQUksR0FBWCxVQUFZLFdBQW1CLEVBQUUsU0FBc0M7UUFBdkUsaUJBV0M7UUFWRyxRQUFRLENBQUMsV0FBVyxFQUFFO1lBQ2xCLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dCQUN2QixJQUFJLGlCQUFpQixHQUFHLElBQUksc0NBQWlCLEVBQUUsQ0FBQztnQkFDaEQsaUJBQWlCLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBRWpELEVBQUUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM5QixNQUFNLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFFLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywrQ0FBYSxHQUFyQixVQUFzQixLQUFVO1FBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLGdEQUFjLEdBQXRCLFVBQXVCLFFBQW1DO1FBQ3RELElBQUksU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFL0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUM1QixTQUFTLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7UUFDeEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsb0JBQW9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekcsQ0FBQztJQUNMLDhCQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXpDWSwrQkFBdUIsMEJBeUNuQyxDQUFBIiwiZmlsZSI6InNwZWMvcHJvcGVydHktdmFsaWRhdG9yLXRlc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5VmFsaWRhdG9yIH0gZnJvbSBcIi4uL3NyYy92YWxpZGF0b3JzL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuLi9zcmMvdmFsaWRhdGlvbi1jb250ZXh0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlWYWxpZGF0b3JUZXN0ZXIge1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IFByb3BlcnR5VmFsaWRhdG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbGlkYXRvcjogUHJvcGVydHlWYWxpZGF0b3IpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IHZhbGlkYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdGVzdChkZXNjcmlwdGlvbjogc3RyaW5nLCB0ZXN0Q2FzZXM6IFByb3BlcnR5VmFsaWRhdG9yVGVzdENhc2VbXSk6IHZvaWQge1xyXG4gICAgICAgIGRlc2NyaWJlKGRlc2NyaXB0aW9uLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRlc3RDYXNlcy5mb3JFYWNoKCh0ZXN0Q2FzZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25Db250ZXh0ID0gbmV3IFZhbGlkYXRpb25Db250ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uQ29udGV4dC5wcm9wZXJ0eVZhbHVlID0gdGVzdENhc2UudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaXQodGhpcy5nZXRFeHBlY3RhdGlvbih0ZXN0Q2FzZSksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBleHBlY3QodGhpcy52YWxpZGF0b3IuaXNWYWxpZCh2YWxpZGF0aW9uQ29udGV4dCkpLnRvQmUodGVzdENhc2UucGFzcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWx1ZVRvU3RyaW5nKHZhbHVlOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RXhwZWN0YXRpb24odGVzdENhc2U6IFByb3BlcnR5VmFsaWRhdG9yVGVzdENhc2UpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciB2YWx1ZVRleHQgPSBcIidcIiArIHRoaXMudmFsdWVUb1N0cmluZyh0ZXN0Q2FzZS52YWx1ZSkgKyBcIidcIjtcclxuXHJcbiAgICAgICAgaWYgKHRlc3RDYXNlLnZhbHVlRGVzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdmFsdWVUZXh0ICs9IFwiIChcIiArIHRlc3RDYXNlLnZhbHVlRGVzY3JpcHRpb24gKyBcIilcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBcIldoZW4gdmFsdWUgaXMgXCIgKyB2YWx1ZVRleHQgKyBcIiB2YWxpZGF0b3Igc2hvdWxkIFwiICsgKHRlc3RDYXNlLnBhc3MgPyBcInBhc3NcIiA6IFwiZmFpbFwiKSArIFwiLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5VmFsaWRhdG9yVGVzdENhc2Uge1xyXG4gICAgdmFsdWU6IGFueTtcclxuICAgIHZhbHVlRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICBwYXNzOiBib29sZWFuO1xyXG59Il19
