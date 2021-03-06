"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var property_validator_1 = require("./property-validator");
var utils_1 = require("../utils");
var CreditCardValidator = (function (_super) {
    __extends(CreditCardValidator, _super);
    function CreditCardValidator(errorMessage) {
        _super.call(this, errorMessage);
        this.errorMessageResourceName = "creditCard";
    }
    CreditCardValidator.prototype.luhnCheck = function (cardNumber) {
        // https://gist.github.com/DiegoSalazar/4075533
        if (/[^0-9-\s]+/.test(cardNumber))
            return false;
        var nCheck = 0, nDigit = 0, bEven = false;
        cardNumber = cardNumber.replace(/\D/g, "");
        for (var n = cardNumber.length - 1; n >= 0; n--) {
            var cDigit = cardNumber.charAt(n), nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9)
                    nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    };
    CreditCardValidator.prototype.isValid = function (context) {
        var cardNumber = context.propertyValue;
        if (cardNumber == undefined) {
            return true;
        }
        if (typeof cardNumber != "string") {
            return false;
        }
        cardNumber = cardNumber.replace(/-+/g, "");
        cardNumber = cardNumber.replace(/\s+/g, "");
        if (cardNumber.length == 0 || utils_1.countDigits(cardNumber) != cardNumber.length) {
            return false;
        }
        if (cardNumber.length < 12 || cardNumber.length > 19) {
            return false;
        }
        return this.luhnCheck(cardNumber);
    };
    return CreditCardValidator;
}(property_validator_1.PropertyValidator));
exports.CreditCardValidator = CreditCardValidator;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWxpZGF0b3JzL2NyZWRpdC1jYXJkLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBa0Msc0JBQXNCLENBQUMsQ0FBQTtBQUV6RCxzQkFBNEIsVUFBVSxDQUFDLENBQUE7QUFFdkM7SUFBeUMsdUNBQWlCO0lBQ3RELDZCQUFZLFlBQXFCO1FBQzdCLGtCQUFNLFlBQVksQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUM7SUFDakQsQ0FBQztJQUVPLHVDQUFTLEdBQWpCLFVBQWtCLFVBQWtCO1FBQ2hDLCtDQUErQztRQUMvQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVoRCxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzFDLFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUUzQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDN0IsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDO1lBRUQsTUFBTSxJQUFJLE1BQU0sQ0FBQztZQUNqQixLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQztRQUVELE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxPQUEwQjtRQUNyQyxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBdUIsQ0FBQztRQUVqRCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztRQUVELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMzQyxVQUFVLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksbUJBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNMLDBCQUFDO0FBQUQsQ0FyREEsQUFxREMsQ0FyRHdDLHNDQUFpQixHQXFEekQ7QUFyRFksMkJBQW1CLHNCQXFEL0IsQ0FBQSIsImZpbGUiOiJzcmMvdmFsaWRhdG9ycy9jcmVkaXQtY2FyZC52YWxpZGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9wZXJ0eVZhbGlkYXRvciB9IGZyb20gXCIuL3Byb3BlcnR5LXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udGV4dCB9IGZyb20gXCIuLi92YWxpZGF0aW9uLWNvbnRleHRcIjtcclxuaW1wb3J0IHsgY291bnREaWdpdHMgfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkVmFsaWRhdG9yIGV4dGVuZHMgUHJvcGVydHlWYWxpZGF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3JNZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZXJyb3JNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VSZXNvdXJjZU5hbWUgPSBcImNyZWRpdENhcmRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGx1aG5DaGVjayhjYXJkTnVtYmVyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9EaWVnb1NhbGF6YXIvNDA3NTUzM1xyXG4gICAgICAgIGlmICgvW14wLTktXFxzXSsvLnRlc3QoY2FyZE51bWJlcikpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG5DaGVjayA9IDAsIG5EaWdpdCA9IDAsIGJFdmVuID0gZmFsc2U7XHJcbiAgICAgICAgY2FyZE51bWJlciA9IGNhcmROdW1iZXIucmVwbGFjZSgvXFxEL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBuID0gY2FyZE51bWJlci5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICB2YXIgY0RpZ2l0ID0gY2FyZE51bWJlci5jaGFyQXQobiksXHJcbiAgICAgICAgICAgICAgICBuRGlnaXQgPSBwYXJzZUludChjRGlnaXQsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChiRXZlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKChuRGlnaXQgKj0gMikgPiA5KSBuRGlnaXQgLT0gOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbkNoZWNrICs9IG5EaWdpdDtcclxuICAgICAgICAgICAgYkV2ZW4gPSAhYkV2ZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKG5DaGVjayAlIDEwKSA9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKGNvbnRleHQ6IFZhbGlkYXRpb25Db250ZXh0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGNhcmROdW1iZXIgPSBjb250ZXh0LnByb3BlcnR5VmFsdWUgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICBpZiAoY2FyZE51bWJlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNhcmROdW1iZXIgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXJkTnVtYmVyID0gY2FyZE51bWJlci5yZXBsYWNlKC8tKy9nLCBcIlwiKTtcclxuICAgICAgICBjYXJkTnVtYmVyID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG5cclxuICAgICAgICBpZiAoY2FyZE51bWJlci5sZW5ndGggPT0gMCB8fCBjb3VudERpZ2l0cyhjYXJkTnVtYmVyKSAhPSBjYXJkTnVtYmVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2FyZE51bWJlci5sZW5ndGggPCAxMiB8fCBjYXJkTnVtYmVyLmxlbmd0aCA+IDE5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmx1aG5DaGVjayhjYXJkTnVtYmVyKTtcclxuICAgIH1cclxufSJdfQ==
