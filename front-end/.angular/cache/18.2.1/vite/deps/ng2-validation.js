import {
  forms_exports,
  init_forms
} from "./chunk-OQ7YCJ62.js";
import "./chunk-Q6W6E42G.js";
import {
  core_exports,
  init_core
} from "./chunk-46GGANTG.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM
} from "./chunk-JNUQLAAP.js";

// node_modules/ng2-validation/dist/base64/directive.js
var require_directive = __commonJS({
  "node_modules/ng2-validation/dist/base64/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_base64();
    var BASE64_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return Base64Validator;
      }),
      multi: true
    };
    var Base64Validator = function() {
      function Base64Validator2() {
      }
      Base64Validator2.prototype.validate = function(c) {
        return _1.base64(c);
      };
      return Base64Validator2;
    }();
    Base64Validator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[base64][formControlName],[base64][formControl],[base64][ngModel]",
        providers: [BASE64_VALIDATOR]
      }]
    }];
    Base64Validator.ctorParameters = function() {
      return [];
    };
    exports.Base64Validator = Base64Validator;
  }
});

// node_modules/ng2-validation/dist/util/lang.js
var require_lang = __commonJS({
  "node_modules/ng2-validation/dist/util/lang.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function isPresent(obj) {
      return obj !== void 0 && obj !== null;
    }
    exports.isPresent = isPresent;
    function isDate(obj) {
      return !/Invalid|NaN/.test(new Date(obj).toString());
    }
    exports.isDate = isDate;
  }
});

// node_modules/ng2-validation/dist/base64/validator.js
var require_validator = __commonJS({
  "node_modules/ng2-validation/dist/base64/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.base64 = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
        "base64": true
      };
    };
  }
});

// node_modules/ng2-validation/dist/base64/index.js
var require_base64 = __commonJS({
  "node_modules/ng2-validation/dist/base64/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive());
    __export2(require_validator());
  }
});

// node_modules/ng2-validation/dist/credit-card/directive.js
var require_directive2 = __commonJS({
  "node_modules/ng2-validation/dist/credit-card/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_credit_card();
    var CREDIT_CARD_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return CreditCardValidator;
      }),
      multi: true
    };
    var CreditCardValidator = function() {
      function CreditCardValidator2() {
      }
      CreditCardValidator2.prototype.validate = function(c) {
        return _1.creditCard(c);
      };
      return CreditCardValidator2;
    }();
    CreditCardValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]",
        providers: [CREDIT_CARD_VALIDATOR]
      }]
    }];
    CreditCardValidator.ctorParameters = function() {
      return [];
    };
    exports.CreditCardValidator = CreditCardValidator;
  }
});

// node_modules/ng2-validation/dist/credit-card/validator.js
var require_validator2 = __commonJS({
  "node_modules/ng2-validation/dist/credit-card/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.creditCard = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      var sanitized = v.replace(/[^0-9]+/g, "");
      if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized)) {
        return {
          creditCard: true
        };
      }
      var sum = 0;
      var digit;
      var tmpNum;
      var shouldDouble;
      for (var i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, i + 1);
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
          tmpNum *= 2;
          if (tmpNum >= 10) {
            sum += tmpNum % 10 + 1;
          } else {
            sum += tmpNum;
          }
        } else {
          sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
      }
      if (Boolean(sum % 10 === 0 ? sanitized : false)) {
        return null;
      }
      return {
        creditCard: true
      };
    };
  }
});

// node_modules/ng2-validation/dist/credit-card/index.js
var require_credit_card = __commonJS({
  "node_modules/ng2-validation/dist/credit-card/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive2());
    __export2(require_validator2());
  }
});

// node_modules/ng2-validation/dist/date/directive.js
var require_directive3 = __commonJS({
  "node_modules/ng2-validation/dist/date/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_date();
    var DATE_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return DateValidator;
      }),
      multi: true
    };
    var DateValidator = function() {
      function DateValidator2() {
      }
      DateValidator2.prototype.validate = function(c) {
        return _1.date(c);
      };
      return DateValidator2;
    }();
    DateValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[date][formControlName],[date][formControl],[date][ngModel]",
        providers: [DATE_VALIDATOR]
      }]
    }];
    DateValidator.ctorParameters = function() {
      return [];
    };
    exports.DateValidator = DateValidator;
  }
});

// node_modules/ng2-validation/dist/date/validator.js
var require_validator3 = __commonJS({
  "node_modules/ng2-validation/dist/date/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.date = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return lang_1.isDate(v) ? null : {
        date: true
      };
    };
  }
});

// node_modules/ng2-validation/dist/date/index.js
var require_date = __commonJS({
  "node_modules/ng2-validation/dist/date/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive3());
    __export2(require_validator3());
  }
});

// node_modules/ng2-validation/dist/date-ios/directive.js
var require_directive4 = __commonJS({
  "node_modules/ng2-validation/dist/date-ios/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_date_ios();
    var DATE_ISO_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return DateISOValidator;
      }),
      multi: true
    };
    var DateISOValidator = function() {
      function DateISOValidator2() {
      }
      DateISOValidator2.prototype.validate = function(c) {
        return _1.dateISO(c);
      };
      return DateISOValidator2;
    }();
    DateISOValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]",
        providers: [DATE_ISO_VALIDATOR]
      }]
    }];
    DateISOValidator.ctorParameters = function() {
      return [];
    };
    exports.DateISOValidator = DateISOValidator;
  }
});

// node_modules/ng2-validation/dist/date-ios/validator.js
var require_validator4 = __commonJS({
  "node_modules/ng2-validation/dist/date-ios/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.dateISO = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
        dateISO: true
      };
    };
  }
});

// node_modules/ng2-validation/dist/date-ios/index.js
var require_date_ios = __commonJS({
  "node_modules/ng2-validation/dist/date-ios/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive4());
    __export2(require_validator4());
  }
});

// node_modules/ng2-validation/dist/digits/directive.js
var require_directive5 = __commonJS({
  "node_modules/ng2-validation/dist/digits/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_digits();
    var DIGITS_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return DigitsValidator;
      }),
      multi: true
    };
    var DigitsValidator = function() {
      function DigitsValidator2() {
      }
      DigitsValidator2.prototype.validate = function(c) {
        return _1.digits(c);
      };
      return DigitsValidator2;
    }();
    DigitsValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[digits][formControlName],[digits][formControl],[digits][ngModel]",
        providers: [DIGITS_VALIDATOR]
      }]
    }];
    DigitsValidator.ctorParameters = function() {
      return [];
    };
    exports.DigitsValidator = DigitsValidator;
  }
});

// node_modules/ng2-validation/dist/digits/validator.js
var require_validator5 = __commonJS({
  "node_modules/ng2-validation/dist/digits/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.digits = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^\d+$/.test(v) ? null : {
        digits: true
      };
    };
  }
});

// node_modules/ng2-validation/dist/digits/index.js
var require_digits = __commonJS({
  "node_modules/ng2-validation/dist/digits/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive5());
    __export2(require_validator5());
  }
});

// node_modules/ng2-validation/dist/email/directive.js
var require_directive6 = __commonJS({
  "node_modules/ng2-validation/dist/email/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var index_1 = require_email();
    var EMAIL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return EmailValidator;
      }),
      multi: true
    };
    var EmailValidator = function() {
      function EmailValidator2() {
      }
      EmailValidator2.prototype.validate = function(c) {
        return index_1.email(c);
      };
      return EmailValidator2;
    }();
    EmailValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[email][formControlName],[email][formControl],[email][ngModel]",
        providers: [EMAIL_VALIDATOR]
      }]
    }];
    EmailValidator.ctorParameters = function() {
      return [];
    };
    exports.EmailValidator = EmailValidator;
  }
});

// node_modules/ng2-validation/dist/email/validator.js
var require_validator6 = __commonJS({
  "node_modules/ng2-validation/dist/email/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.email = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
        "email": true
      };
    };
  }
});

// node_modules/ng2-validation/dist/email/index.js
var require_email = __commonJS({
  "node_modules/ng2-validation/dist/email/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive6());
    __export2(require_validator6());
  }
});

// node_modules/ng2-validation/dist/equal/directive.js
var require_directive7 = __commonJS({
  "node_modules/ng2-validation/dist/equal/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var index_1 = require_equal();
    var EQUAL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return EqualValidator;
      }),
      multi: true
    };
    var EqualValidator = function() {
      function EqualValidator2() {
      }
      EqualValidator2.prototype.ngOnInit = function() {
        this.validator = index_1.equal(this.equal);
      };
      EqualValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "equal") {
            this.validator = index_1.equal(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      EqualValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      EqualValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return EqualValidator2;
    }();
    EqualValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[equal][formControlName],[equal][formControl],[equal][ngModel]",
        providers: [EQUAL_VALIDATOR]
      }]
    }];
    EqualValidator.ctorParameters = function() {
      return [];
    };
    EqualValidator.propDecorators = {
      "equal": [{
        type: core_1.Input
      }]
    };
    exports.EqualValidator = EqualValidator;
  }
});

// node_modules/ng2-validation/dist/equal/validator.js
var require_validator7 = __commonJS({
  "node_modules/ng2-validation/dist/equal/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.equal = function(val) {
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return val === v ? null : {
          equal: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/equal/index.js
var require_equal = __commonJS({
  "node_modules/ng2-validation/dist/equal/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive7());
    __export2(require_validator7());
  }
});

// node_modules/ng2-validation/dist/equal-to/directive.js
var require_directive8 = __commonJS({
  "node_modules/ng2-validation/dist/equal-to/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_equal_to();
    var EQUAL_TO_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return EqualToValidator;
      }),
      multi: true
    };
    var EqualToValidator = function() {
      function EqualToValidator2() {
      }
      EqualToValidator2.prototype.ngOnInit = function() {
        this.validator = _1.equalTo(this.equalTo);
      };
      EqualToValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      return EqualToValidator2;
    }();
    EqualToValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]",
        providers: [EQUAL_TO_VALIDATOR]
      }]
    }];
    EqualToValidator.ctorParameters = function() {
      return [];
    };
    EqualToValidator.propDecorators = {
      "equalTo": [{
        type: core_1.Input
      }]
    };
    exports.EqualToValidator = EqualToValidator;
  }
});

// node_modules/ng2-validation/dist/equal-to/validator.js
var require_validator8 = __commonJS({
  "node_modules/ng2-validation/dist/equal-to/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.equalTo = function(equalControl) {
      var subscribe = false;
      return function(control) {
        if (!subscribe) {
          subscribe = true;
          equalControl.valueChanges.subscribe(function() {
            control.updateValueAndValidity();
          });
        }
        var v = control.value;
        return equalControl.value === v ? null : {
          equalTo: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/equal-to/index.js
var require_equal_to = __commonJS({
  "node_modules/ng2-validation/dist/equal-to/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive8());
    __export2(require_validator8());
  }
});

// node_modules/ng2-validation/dist/greater-than/directive.js
var require_directive9 = __commonJS({
  "node_modules/ng2-validation/dist/greater-than/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_greater_than();
    var GREATER_THAN_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return GreaterThanValidator;
      }),
      multi: true
    };
    var GreaterThanValidator = function() {
      function GreaterThanValidator2() {
      }
      GreaterThanValidator2.prototype.ngOnInit = function() {
        this.validator = _1.gt(this.gt);
      };
      GreaterThanValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "gt") {
            this.validator = _1.gt(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      GreaterThanValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      GreaterThanValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return GreaterThanValidator2;
    }();
    GreaterThanValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[gt][formControlName],[gt][formControl],[gt][ngModel]",
        providers: [GREATER_THAN_VALIDATOR]
      }]
    }];
    GreaterThanValidator.ctorParameters = function() {
      return [];
    };
    GreaterThanValidator.propDecorators = {
      "gt": [{
        type: core_1.Input
      }]
    };
    exports.GreaterThanValidator = GreaterThanValidator;
  }
});

// node_modules/ng2-validation/dist/greater-than/validator.js
var require_validator9 = __commonJS({
  "node_modules/ng2-validation/dist/greater-than/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.gt = function(gt) {
      return function(control) {
        if (!lang_1.isPresent(gt)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v > +gt ? null : {
          gt: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/greater-than/index.js
var require_greater_than = __commonJS({
  "node_modules/ng2-validation/dist/greater-than/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive9());
    __export2(require_validator9());
  }
});

// node_modules/ng2-validation/dist/greater-than-equal/directive.js
var require_directive10 = __commonJS({
  "node_modules/ng2-validation/dist/greater-than-equal/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_greater_than_equal();
    var GREATER_THAN_EQUAL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return GreaterThanEqualValidator;
      }),
      multi: true
    };
    var GreaterThanEqualValidator = function() {
      function GreaterThanEqualValidator2() {
      }
      GreaterThanEqualValidator2.prototype.ngOnInit = function() {
        this.validator = _1.gte(this.gte);
      };
      GreaterThanEqualValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "gte") {
            this.validator = _1.gte(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      GreaterThanEqualValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      GreaterThanEqualValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return GreaterThanEqualValidator2;
    }();
    GreaterThanEqualValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[gte][formControlName],[gte][formControl],[gte][ngModel]",
        providers: [GREATER_THAN_EQUAL_VALIDATOR]
      }]
    }];
    GreaterThanEqualValidator.ctorParameters = function() {
      return [];
    };
    GreaterThanEqualValidator.propDecorators = {
      "gte": [{
        type: core_1.Input
      }]
    };
    exports.GreaterThanEqualValidator = GreaterThanEqualValidator;
  }
});

// node_modules/ng2-validation/dist/greater-than-equal/validator.js
var require_validator10 = __commonJS({
  "node_modules/ng2-validation/dist/greater-than-equal/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.gte = function(gte) {
      return function(control) {
        if (!lang_1.isPresent(gte)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v >= +gte ? null : {
          gte: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/greater-than-equal/index.js
var require_greater_than_equal = __commonJS({
  "node_modules/ng2-validation/dist/greater-than-equal/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive10());
    __export2(require_validator10());
  }
});

// node_modules/ng2-validation/dist/json/directive.js
var require_directive11 = __commonJS({
  "node_modules/ng2-validation/dist/json/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_json();
    var JSON_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return JSONValidator;
      }),
      multi: true
    };
    var JSONValidator = function() {
      function JSONValidator2() {
      }
      JSONValidator2.prototype.validate = function(c) {
        return _1.json(c);
      };
      return JSONValidator2;
    }();
    JSONValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[json][formControlName],[json][formControl],[json][ngModel]",
        providers: [JSON_VALIDATOR]
      }]
    }];
    JSONValidator.ctorParameters = function() {
      return [];
    };
    exports.JSONValidator = JSONValidator;
  }
});

// node_modules/ng2-validation/dist/json/validator.js
var require_validator11 = __commonJS({
  "node_modules/ng2-validation/dist/json/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.json = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      try {
        var obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === "object") {
          return null;
        }
      } catch (e) {
      }
      return {
        json: true
      };
    };
  }
});

// node_modules/ng2-validation/dist/json/index.js
var require_json = __commonJS({
  "node_modules/ng2-validation/dist/json/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive11());
    __export2(require_validator11());
  }
});

// node_modules/ng2-validation/dist/less-than/directive.js
var require_directive12 = __commonJS({
  "node_modules/ng2-validation/dist/less-than/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_less_than();
    var LESS_THAN_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return LessThanValidator;
      }),
      multi: true
    };
    var LessThanValidator = function() {
      function LessThanValidator2() {
      }
      LessThanValidator2.prototype.ngOnInit = function() {
        this.validator = _1.lt(this.lt);
      };
      LessThanValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "lt") {
            this.validator = _1.lt(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      LessThanValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      LessThanValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return LessThanValidator2;
    }();
    LessThanValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[lt][formControlName],[lt][formControl],[lt][ngModel]",
        providers: [LESS_THAN_VALIDATOR]
      }]
    }];
    LessThanValidator.ctorParameters = function() {
      return [];
    };
    LessThanValidator.propDecorators = {
      "lt": [{
        type: core_1.Input
      }]
    };
    exports.LessThanValidator = LessThanValidator;
  }
});

// node_modules/ng2-validation/dist/less-than/validator.js
var require_validator12 = __commonJS({
  "node_modules/ng2-validation/dist/less-than/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.lt = function(lt) {
      return function(control) {
        if (!lang_1.isPresent(lt)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v < +lt ? null : {
          lt: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/less-than/index.js
var require_less_than = __commonJS({
  "node_modules/ng2-validation/dist/less-than/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive12());
    __export2(require_validator12());
  }
});

// node_modules/ng2-validation/dist/less-than-equal/directive.js
var require_directive13 = __commonJS({
  "node_modules/ng2-validation/dist/less-than-equal/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_less_than_equal();
    var LESS_THAN_EQUAL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return LessThanEqualValidator;
      }),
      multi: true
    };
    var LessThanEqualValidator = function() {
      function LessThanEqualValidator2() {
      }
      LessThanEqualValidator2.prototype.ngOnInit = function() {
        this.validator = _1.lte(this.lte);
      };
      LessThanEqualValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "lte") {
            this.validator = _1.lte(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      LessThanEqualValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      LessThanEqualValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return LessThanEqualValidator2;
    }();
    LessThanEqualValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[lte][formControlName],[lte][formControl],[lte][ngModel]",
        providers: [LESS_THAN_EQUAL_VALIDATOR]
      }]
    }];
    LessThanEqualValidator.ctorParameters = function() {
      return [];
    };
    LessThanEqualValidator.propDecorators = {
      "lte": [{
        type: core_1.Input
      }]
    };
    exports.LessThanEqualValidator = LessThanEqualValidator;
  }
});

// node_modules/ng2-validation/dist/less-than-equal/validator.js
var require_validator13 = __commonJS({
  "node_modules/ng2-validation/dist/less-than-equal/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.lte = function(lte) {
      return function(control) {
        if (!lang_1.isPresent(lte)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v <= +lte ? null : {
          lte: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/less-than-equal/index.js
var require_less_than_equal = __commonJS({
  "node_modules/ng2-validation/dist/less-than-equal/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive13());
    __export2(require_validator13());
  }
});

// node_modules/ng2-validation/dist/max/directive.js
var require_directive14 = __commonJS({
  "node_modules/ng2-validation/dist/max/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_max();
    var MAX_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return MaxValidator;
      }),
      multi: true
    };
    var MaxValidator = function() {
      function MaxValidator2() {
      }
      MaxValidator2.prototype.ngOnInit = function() {
        this.validator = _1.max(this.max);
      };
      MaxValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "max") {
            this.validator = _1.max(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      MaxValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      MaxValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return MaxValidator2;
    }();
    MaxValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[max][formControlName],[max][formControl],[max][ngModel]",
        providers: [MAX_VALIDATOR]
      }]
    }];
    MaxValidator.ctorParameters = function() {
      return [];
    };
    MaxValidator.propDecorators = {
      "max": [{
        type: core_1.Input
      }]
    };
    exports.MaxValidator = MaxValidator;
  }
});

// node_modules/ng2-validation/dist/max/validator.js
var require_validator14 = __commonJS({
  "node_modules/ng2-validation/dist/max/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.max = function(max) {
      return function(control) {
        if (!lang_1.isPresent(max)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v <= +max ? null : {
          actualValue: v,
          requiredValue: +max,
          max: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/max/index.js
var require_max = __commonJS({
  "node_modules/ng2-validation/dist/max/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive14());
    __export2(require_validator14());
  }
});

// node_modules/ng2-validation/dist/max-date/directive.js
var require_directive15 = __commonJS({
  "node_modules/ng2-validation/dist/max-date/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_max_date();
    var MAX_DATE_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return MaxDateValidator;
      }),
      multi: true
    };
    var MaxDateValidator = function() {
      function MaxDateValidator2() {
      }
      MaxDateValidator2.prototype.ngOnInit = function() {
        this.validator = _1.maxDate(this.maxDate);
      };
      MaxDateValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "maxDate") {
            this.validator = _1.maxDate(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      MaxDateValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      MaxDateValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return MaxDateValidator2;
    }();
    MaxDateValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]",
        providers: [MAX_DATE_VALIDATOR]
      }]
    }];
    MaxDateValidator.ctorParameters = function() {
      return [];
    };
    MaxDateValidator.propDecorators = {
      "maxDate": [{
        type: core_1.Input
      }]
    };
    exports.MaxDateValidator = MaxDateValidator;
  }
});

// node_modules/ng2-validation/dist/max-date/validator.js
var require_validator15 = __commonJS({
  "node_modules/ng2-validation/dist/max-date/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.maxDate = function(maxDate) {
      if (!lang_1.isDate(maxDate) && !(maxDate instanceof Function)) {
        throw Error("maxDate value must be or return a formatted date");
      }
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d)) return {
          maxDate: true
        };
        if (maxDate instanceof Function) maxDate = maxDate();
        return d <= new Date(maxDate) ? null : {
          maxDate: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/max-date/index.js
var require_max_date = __commonJS({
  "node_modules/ng2-validation/dist/max-date/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive15());
    __export2(require_validator15());
  }
});

// node_modules/ng2-validation/dist/min/directive.js
var require_directive16 = __commonJS({
  "node_modules/ng2-validation/dist/min/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_min();
    var MIN_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return MinValidator;
      }),
      multi: true
    };
    var MinValidator = function() {
      function MinValidator2() {
      }
      MinValidator2.prototype.ngOnInit = function() {
        this.validator = _1.min(this.min);
      };
      MinValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "min") {
            this.validator = _1.min(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      MinValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      MinValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return MinValidator2;
    }();
    MinValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[min][formControlName],[min][formControl],[min][ngModel]",
        providers: [MIN_VALIDATOR]
      }]
    }];
    MinValidator.ctorParameters = function() {
      return [];
    };
    MinValidator.propDecorators = {
      "min": [{
        type: core_1.Input
      }]
    };
    exports.MinValidator = MinValidator;
  }
});

// node_modules/ng2-validation/dist/min/validator.js
var require_validator16 = __commonJS({
  "node_modules/ng2-validation/dist/min/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.min = function(min) {
      return function(control) {
        if (!lang_1.isPresent(min)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v >= +min ? null : {
          actualValue: v,
          requiredValue: +min,
          min: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/min/index.js
var require_min = __commonJS({
  "node_modules/ng2-validation/dist/min/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive16());
    __export2(require_validator16());
  }
});

// node_modules/ng2-validation/dist/min-date/directive.js
var require_directive17 = __commonJS({
  "node_modules/ng2-validation/dist/min-date/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_min_date();
    var MIN_DATE_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return MinDateValidator;
      }),
      multi: true
    };
    var MinDateValidator = function() {
      function MinDateValidator2() {
      }
      MinDateValidator2.prototype.ngOnInit = function() {
        this.validator = _1.minDate(this.minDate);
      };
      MinDateValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "minDate") {
            this.validator = _1.minDate(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      MinDateValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      MinDateValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return MinDateValidator2;
    }();
    MinDateValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]",
        providers: [MIN_DATE_VALIDATOR]
      }]
    }];
    MinDateValidator.ctorParameters = function() {
      return [];
    };
    MinDateValidator.propDecorators = {
      "minDate": [{
        type: core_1.Input
      }]
    };
    exports.MinDateValidator = MinDateValidator;
  }
});

// node_modules/ng2-validation/dist/min-date/validator.js
var require_validator17 = __commonJS({
  "node_modules/ng2-validation/dist/min-date/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.minDate = function(minDate) {
      if (!lang_1.isDate(minDate) && !(minDate instanceof Function)) {
        throw Error("minDate value must be or return a formatted date");
      }
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var d = new Date(control.value);
        if (!lang_1.isDate(d)) return {
          minDate: true
        };
        if (minDate instanceof Function) minDate = minDate();
        return d >= new Date(minDate) ? null : {
          minDate: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/min-date/index.js
var require_min_date = __commonJS({
  "node_modules/ng2-validation/dist/min-date/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive17());
    __export2(require_validator17());
  }
});

// node_modules/ng2-validation/dist/not-equal/directive.js
var require_directive18 = __commonJS({
  "node_modules/ng2-validation/dist/not-equal/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var index_1 = require_not_equal();
    var NOT_EQUAL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return NotEqualValidator;
      }),
      multi: true
    };
    var NotEqualValidator = function() {
      function NotEqualValidator2() {
      }
      NotEqualValidator2.prototype.ngOnInit = function() {
        this.validator = index_1.notEqual(this.notEqual);
      };
      NotEqualValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "notEqual") {
            this.validator = index_1.notEqual(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      NotEqualValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      NotEqualValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return NotEqualValidator2;
    }();
    NotEqualValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]",
        providers: [NOT_EQUAL_VALIDATOR]
      }]
    }];
    NotEqualValidator.ctorParameters = function() {
      return [];
    };
    NotEqualValidator.propDecorators = {
      "notEqual": [{
        type: core_1.Input
      }]
    };
    exports.NotEqualValidator = NotEqualValidator;
  }
});

// node_modules/ng2-validation/dist/not-equal/validator.js
var require_validator18 = __commonJS({
  "node_modules/ng2-validation/dist/not-equal/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.notEqual = function(val) {
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return val !== v ? null : {
          notEqual: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/not-equal/index.js
var require_not_equal = __commonJS({
  "node_modules/ng2-validation/dist/not-equal/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive18());
    __export2(require_validator18());
  }
});

// node_modules/ng2-validation/dist/not-equal-to/directive.js
var require_directive19 = __commonJS({
  "node_modules/ng2-validation/dist/not-equal-to/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_not_equal_to();
    var NOT_EQUAL_TO_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return NotEqualToValidator;
      }),
      multi: true
    };
    var NotEqualToValidator = function() {
      function NotEqualToValidator2() {
      }
      NotEqualToValidator2.prototype.ngOnInit = function() {
        this.validator = _1.notEqualTo(this.notEqualTo);
      };
      NotEqualToValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      return NotEqualToValidator2;
    }();
    NotEqualToValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]",
        providers: [NOT_EQUAL_TO_VALIDATOR]
      }]
    }];
    NotEqualToValidator.ctorParameters = function() {
      return [];
    };
    NotEqualToValidator.propDecorators = {
      "notEqualTo": [{
        type: core_1.Input
      }]
    };
    exports.NotEqualToValidator = NotEqualToValidator;
  }
});

// node_modules/ng2-validation/dist/not-equal-to/validator.js
var require_validator19 = __commonJS({
  "node_modules/ng2-validation/dist/not-equal-to/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.notEqualTo = function(notEqualControl) {
      var subscribe = false;
      return function(control) {
        if (!subscribe) {
          subscribe = true;
          notEqualControl.valueChanges.subscribe(function() {
            control.updateValueAndValidity();
          });
        }
        var v = control.value;
        return notEqualControl.value !== v ? null : {
          notEqualTo: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/not-equal-to/index.js
var require_not_equal_to = __commonJS({
  "node_modules/ng2-validation/dist/not-equal-to/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive19());
    __export2(require_validator19());
  }
});

// node_modules/ng2-validation/dist/number/directive.js
var require_directive20 = __commonJS({
  "node_modules/ng2-validation/dist/number/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_number();
    var NUMBER_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return NumberValidator;
      }),
      multi: true
    };
    var NumberValidator = function() {
      function NumberValidator2() {
      }
      NumberValidator2.prototype.validate = function(c) {
        return _1.number(c);
      };
      return NumberValidator2;
    }();
    NumberValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[number][formControlName],[number][formControl],[number][ngModel]",
        providers: [NUMBER_VALIDATOR]
      }]
    }];
    NumberValidator.ctorParameters = function() {
      return [];
    };
    exports.NumberValidator = NumberValidator;
  }
});

// node_modules/ng2-validation/dist/number/validator.js
var require_validator20 = __commonJS({
  "node_modules/ng2-validation/dist/number/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.number = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
        "number": true
      };
    };
  }
});

// node_modules/ng2-validation/dist/number/index.js
var require_number = __commonJS({
  "node_modules/ng2-validation/dist/number/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive20());
    __export2(require_validator20());
  }
});

// node_modules/ng2-validation/dist/phone/directive.js
var require_directive21 = __commonJS({
  "node_modules/ng2-validation/dist/phone/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_phone();
    var PHONE_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return PhoneValidator;
      }),
      multi: true
    };
    var PhoneValidator = function() {
      function PhoneValidator2() {
      }
      PhoneValidator2.prototype.ngOnInit = function() {
        this.validator = _1.phone(this.phone);
      };
      PhoneValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "phone") {
            this.validator = _1.phone(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      PhoneValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      PhoneValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return PhoneValidator2;
    }();
    PhoneValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[phone][formControlName],[phone][formControl],[phone][ngModel]",
        providers: [PHONE_VALIDATOR]
      }]
    }];
    PhoneValidator.ctorParameters = function() {
      return [];
    };
    PhoneValidator.propDecorators = {
      "phone": [{
        type: core_1.Input
      }]
    };
    exports.PhoneValidator = PhoneValidator;
  }
});

// node_modules/libphonenumber-js/metadata.min.json
var metadata_min_default;
var init_metadata_min = __esm({
  "node_modules/libphonenumber-js/metadata.min.json"() {
    metadata_min_default = { country_phone_code_to_countries: { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "800": ["001"], "808": ["001"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "870": ["001"], "878": ["001"], "880": ["BD"], "881": ["001"], "882": ["001"], "883": ["001"], "886": ["TW"], "888": ["001"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "979": ["001"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, countries: { AC: ["247", "[46]\\d{4}|[01589]\\d{5}"], AD: ["376", "[16]\\d{5,8}|[37-9]\\d{5}", [["(\\d{3})(\\d{3})", "$1 $2", ["[137-9]|6[0-8]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["180", "180[02]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["690"]]]], AE: ["971", "[2-79]\\d{7,8}|800\\d{2,9}", [["([2-4679])(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-4679][2-8]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["([479]00)(\\d)(\\d{5})", "$1 $2 $3", ["[479]00"], "$1"], ["([68]00)(\\d{2,9})", "$1 $2", ["[68]00"], "$1"]], "0", "0$1"], AF: ["93", "[2-7]\\d{8}", [["([2-7]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"]]], "0", "0$1"], AG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "268"], AI: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "264"], AL: ["355", "[2-57]\\d{7}|6\\d{8}|8\\d{5,7}|9\\d{5}", [["(4)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[0-6]"]], ["(6\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4[7-9]"]], ["(\\d{3})(\\d{3,5})", "$1 $2", ["[235][16-9]|[79]|8[016-9]"]]], "0", "0$1"], AM: ["374", "[1-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2", ["1|47"]], ["(\\d{2})(\\d{6})", "$1 $2", ["4[1349]|[5-7]|88|9[1-9]"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8|90"], "0 $1"]], "0", "(0$1)"], AO: ["244", "[29]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3"]]], AR: ["54", "11\\d{8}|[2368]\\d{9}|9\\d{10}", [["([68]\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"]], ["(9)(11)(\\d{4})(\\d{4})", "$2 15-$3-$4", ["911"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-4689]|3[3-8])", "9(?:2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578]))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))", "9(?:2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45])))"], null, null, "$1 $2 $3-$4"], ["(9)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9[23]"], null, null, "$1 $2 $3-$4"], ["(11)(\\d{4})(\\d{4})", "$1 $2-$3", ["11"], null, "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["2(?:2[013]|3[067]|49|6[01346]|8|9[147-9])|3(?:36|4[1-358]|5[138]|6|7[069]|8[013578])", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3[4-6]|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))", "2(?:2(?:0[013-9]|[13])|3(?:0[013-9]|[67])|49|6(?:[0136]|4[0-59])|8|9(?:[19]|44|7[013-9]|8[14]))|3(?:36|4(?:[12]|3(?:4|5[014]|6[1-39])|[58]4)|5(?:1|3[0-24-689]|8[46])|6|7[069]|8(?:[01]|34|[578][45]))"], null, "true"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["[23]"], null, "true"]], "0", "0$1", "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))?15)?", "9$1"], AS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "684"], AT: ["43", "[1-9]\\d{3,12}", [["(116\\d{3})", "$1", ["116"], "$1"], ["(1)(\\d{3,12})", "$1 $2", ["1"]], ["(5\\d)(\\d{3,5})", "$1 $2", ["5[079]"]], ["(5\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5[079]"]], ["(5\\d)(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5[079]"]], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:[28]0|32)|[89]"]], ["(\\d{4})(\\d{3,9})", "$1 $2", ["2|3(?:1[1-578]|[3-8])|4[2378]|5[2-6]|6(?:[12]|4[1-9]|5[468])|7(?:[24][1-8]|35|[5-79])"]]], "0", "0$1"], AU: ["61", "1\\d{4,9}|[2-578]\\d{8}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["[237]\\d{8}|8(?:51(?:0(?:0[03-9]|[1247]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-6])|1(?:1[69]|[23]\\d|4[0-4]))|[6-8]\\d{4}|9(?:[02-9]\\d{3}|1(?:[0-57-9]\\d{2}|6[0135-9]\\d)))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12457-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, "16\\d{3,7}", "550\\d{6}", "13(?:00\\d{3}|45[0-4]|\\d)\\d{3}"]], AW: ["297", "[25-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], AX: ["358", "1\\d{5,11}|[35]\\d{5,9}|2\\d{4,9}|4\\d{5,10}|6\\d{7,9}|7\\d{4,9}|8\\d{6,9}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", null, null, null, null, null, ["18[1-8]\\d{3,9}", "4\\d{5,10}|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{2,7})"]], AZ: ["994", "[1-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2(?:[0-36]|[45]2)|365"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[4-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"]], "0", "(0$1)"], BA: ["387", "[3-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-356]|[7-9]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6[047]"]]], "0", "0$1"], BB: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "246"], BD: ["880", "[2-79]\\d{5,9}|1\\d{9}|8[0-7]\\d{4,8}", [["(2)(\\d{7,8})", "$1-$2", ["2"]], ["(\\d{2})(\\d{4,6})", "$1-$2", ["[3-79]1"]], ["(\\d{4})(\\d{3,6})", "$1-$2", ["1|3(?:0|[2-58]2)|4(?:0|[25]2|3[23]|[4689][25])|5(?:[02-578]2|6[25])|6(?:[0347-9]2|[26][25])|7[02-9]2|8(?:[023][23]|[4-7]2)|9(?:[02][23]|[458]2|6[016])"]], ["(\\d{3})(\\d{3,7})", "$1-$2", ["[3-79][2-9]|8"]]], "0", "0$1"], BE: ["32", "[1-9]\\d{7,8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[6-9]"]], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4[23]|9[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[156]|7[018]|8(?:0[1-9]|[1-79])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"]]], "0", "0$1"], BF: ["226", "[25-7]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], BG: ["359", "[23567]\\d{5,7}|[489]\\d{6,8}", [["(2)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"]], ["(2)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{4})", "$1 $2", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[124-7]|70[1-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[78]00"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["99[69]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["48|8[7-9]|9[08]"]]], "0", "0$1"], BH: ["973", "[136-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], BI: ["257", "[267]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], BJ: ["229", "[2689]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"]]]], BL: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:2[7-9]|5[12]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], BM: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "441"], BN: ["673", "[2-578]\\d{6}", [["([2-578]\\d{2})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "[23467]\\d{7}|8\\d{8}", [["([234])(\\d{7})", "$1 $2", ["[2-4]"]], ["([67]\\d{7})", "$1", ["[67]"]], ["(800)(\\d{2})(\\d{4})", "$1 $2 $3", ["800"]]], "0", null, "0(1\\d)?"], BQ: ["599", "[347]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["(?:318[023]|41(?:6[023]|70)|7(?:1[578]|50)\\d)\\d{3}", "(?:31(?:8[14-8]|9[14578])|416[145-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}"]], BR: ["55", "[1-46-9]\\d{7,10}|5(?:[0-4]\\d{7,9}|5(?:[2-8]\\d{7}|9\\d{7,8}))", [["(\\d{4})(\\d{4})", "$1-$2", ["300|40[02]", "300|40(?:0|20)"]], ["([3589]00)(\\d{2,3})(\\d{4})", "$1 $2 $3", ["[3589]00"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[1-9][1-9]9"], "($1)"]], "0", null, "0(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "242"], BT: ["975", "[1-8]\\d{6,7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1|77"]], ["([2-8])(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]]]], BW: ["267", "[2-79]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-6]"]], ["(7\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(90)(\\d{5})", "$1 $2", ["90"]]]], BY: ["375", "[1-4]\\d{8}|8(?:0(?:0\\d{3,7}|[13]\\d{7})|(?:10|20\\d)\\d{7})|9\\d{9,10}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["17[0-3589]|2[4-9]|[34]", "17(?:[02358]|1[0-2]|9[0189])|2[4-9]|[34]"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:5[24]|6[235]|7[467])|2(?:1[246]|2[25]|3[26])", "1(?:5[24]|6(?:2|3[04-9]|5[0346-9])|7(?:[46]|7[37-9]))|2(?:1[246]|2[25]|3[26])"], "8 0$1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["([89]\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8[01]|9"], "8 $1"], ["(82\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["82"], "8 $1"], ["(800)(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(800)(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"]], "8", null, "8?0?"], BZ: ["501", "[2-8]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(0)(800)(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["080", "0800"]]]], CA: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, null, ["(?:2(?:04|[23]6|[48]9|50)|3(?:06|43|65)|4(?:03|1[68]|3[178]|50)|5(?:06|1[49]|48|79|8[17])|6(?:0[04]|13|22|39|47)|7(?:0[59]|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]], CC: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:02|31|60)|118)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:08|22|68)|4[29]8|62\\d|70[23]|959))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]], CD: ["243", "[2-6]\\d{6}|[18]\\d{6,8}|9\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["12"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[0-2459]|9"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"]], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"]]], "0", "0$1"], CF: ["236", "[278]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], CG: ["242", "[028]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["801"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["800"]]]], CH: ["41", "[2-9]\\d{8}|860\\d{9}", [["([2-9]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]|[89]1"]], ["([89]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["860"]]], "0", "0$1"], CI: ["225", "[02-8]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], CK: ["682", "[2-8]\\d{4}", [["(\\d{2})(\\d{3})", "$1 $2"]]], CL: ["56", "1230\\d{7}|[2-46-9]\\d{8,10}|5[1-3578]\\d{7}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[23]"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[357]|4[1-35]|6[13-57]"], "($1)"], ["(9)(\\d{4})(\\d{4})", "$1 $2 $3", ["9"]], ["(44)(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["([68]00)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[68]00"], "$1"], ["(600)(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["600"], "$1"], ["(1230)(\\d{3})(\\d{4})", "$1 $2 $3", ["123", "1230"], "$1"], ["(\\d{5})(\\d{4})", "$1 $2", ["219"], "($1)"]], "0", "0$1", "0|(1(?:1[0-69]|2[0-57]|5[13-58]|69|7[0167]|8[018]))"], CM: ["237", "[2368]\\d{7,8}", [["([26])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|88"]]]], CN: ["86", "[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}", [["([48]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["[48]00"]], ["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2\\d)[19]", "(?:10|2\\d)(?:10|9[56])", "(?:10|2\\d)(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[3-9]", "[3-9]\\d\\d[19]", "[3-9]\\d\\d(?:10|9[56])"], "0$1"], ["(21)(\\d{4})(\\d{4,6})", "$1 $2 $3", ["21"], "0$1", "true"], ["([12]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["10[1-9]|2[02-9]", "10[1-9]|2[02-9]", "10(?:[1-79]|8(?:0[1-9]|[1-9]))|2[02-9]"], "0$1", "true"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[47-9]|7|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[457]|6[09])|8(?:[57]1|98)"], "0$1", "true"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["807", "8078"], "0$1", "true"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1(?:[3-57-9]|66)"]], ["(10800)(\\d{3})(\\d{4})", "$1 $2 $3", ["108", "1080", "10800"]], ["(\\d{3})(\\d{7,8})", "$1 $2", ["950"]]], "0", null, "(1(?:[129]\\d{3}|79\\d{2}))|0"], CO: ["57", "(?:[13]\\d{0,3}|[24-8])\\d{7}", [["(\\d)(\\d{7})", "$1 $2", ["1(?:[2-7]|8[2-9]|9[0-3])|[24-8]", "1(?:[2-7]|8[2-9]|9(?:09|[1-3]))|[24-8]"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"]], ["(1)(\\d{3})(\\d{7})", "$1-$2-$3", ["1(?:80|9[04])", "1(?:800|9(?:0[01]|4[78]))"], "0$1", null, "$1 $2 $3"]], "0", null, "0([3579]|4(?:44|56))?"], CR: ["506", "[24-9]\\d{7,9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]0"]]], null, null, "(19(?:0[012468]|1[09]|20|66|77|99))"], CU: ["53", "[2-57]\\d{5,7}", [["(\\d)(\\d{6,7})", "$1 $2", ["7"]], ["(\\d{2})(\\d{4,6})", "$1 $2", ["[2-4]"]], ["(\\d)(\\d{7})", "$1 $2", ["5"], "0$1"]], "0", "(0$1)"], CV: ["238", "[259]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]], CW: ["599", "[134679]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-7]"]], ["(9)(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], null, null, null, null, null, null, ["9(?:[48]\\d{2}|50\\d|7(?:2[0-24]|[34]\\d|6[35-7]|77|8[7-9]))\\d{4}", "9(?:5(?:[12467]\\d|3[01])|6(?:[15-9]\\d|3[01]))\\d{4}", null, null, null, null, null, "955\\d{5}", null, "60[0-2]\\d{4}"]], CX: ["61", "[1458]\\d{5,9}", [["([2378])(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|[45]"], "0$1"], ["(16)(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(16)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(1[389]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[389]0", "1(?:[38]0|9)0"]], ["(180)(2\\d{3})", "$1 $2", ["180", "1802"]], ["(19\\d)(\\d{3})", "$1 $2", ["19[13]"]], ["(19\\d{2})(\\d{4})", "$1 $2", ["19[679]"]], ["(13)(\\d{2})(\\d{2})", "$1 $2 $3", ["13[1-9]"]]], "0", null, null, null, null, null, ["8(?:51(?:0(?:01|30|59)|117)|91(?:00[6-9]|1(?:21|49|78|81)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", "14(?:5\\d|71)\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[6-9]|7[02-9]|8[12547-9]|9[017-9])\\d{6}", "180(?:0\\d{3}|2)\\d{3}", "19(?:0[0126]\\d|[679])\\d{5}", "500\\d{6}", null, null, null, "550\\d{6}", "13(?:00\\d{2})?\\d{4}"]], CY: ["357", "[257-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]]], CZ: ["420", "[2-8]\\d{8}|9\\d{8,11}", [["([2-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(96\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["96"]], ["(9\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9[36]"]]]], DE: ["49", "[1-35-9]\\d{3,14}|4(?:[0-8]\\d{3,12}|9(?:[0-37]\\d|4(?:[1-35-8]|4\\d?)|5\\d{1,2}|6[1-8]\\d?)\\d{2,8})", [["(1\\d{2})(\\d{7,8})", "$1 $2", ["1[67]"]], ["(15\\d{3})(\\d{6})", "$1 $2", ["15[0568]"]], ["(1\\d{3})(\\d{7})", "$1 $2", ["15"]], ["(\\d{2})(\\d{3,11})", "$1 $2", ["3[02]|40|[68]9"]], ["(\\d{3})(\\d{3,11})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14]|[4-9]1)|3(?:[35-9][15]|4[015])|[4-8][1-9]1|9(?:06|[1-9]1)"]], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|[7-9](?:0[1-9]|[1-9])", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|[46][1246]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|3[1357]|4[13578]|6[1246]|7[1356]|9[1346])|5(?:0[14]|2[1-3589]|3[1357]|[49][1246]|6[1-4]|7[1346]|8[13568])|6(?:0[356]|2[1-489]|3[124-6]|4[1347]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|3[1357]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|4[1347]|6[0135-9]|7[1467]|8[136])|9(?:0[12479]|2[1358]|3[1357]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|[7-9](?:0[1-9]|[1-9])"]], ["(3\\d{4})(\\d{1,10})", "$1 $2", ["3"]], ["(800)(\\d{7,12})", "$1 $2", ["800"]], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:37|80)|900", "1(?:37|80)|900[1359]"]], ["(1\\d{2})(\\d{5,11})", "$1 $2", ["181"]], ["(18\\d{3})(\\d{6})", "$1 $2", ["185", "1850", "18500"]], ["(18\\d{2})(\\d{7})", "$1 $2", ["18[68]"]], ["(18\\d)(\\d{8})", "$1 $2", ["18[2-579]"]], ["(700)(\\d{4})(\\d{4})", "$1 $2 $3", ["700"]], ["(138)(\\d{4})", "$1 $2", ["138"]], ["(15[013-68])(\\d{2})(\\d{8})", "$1 $2 $3", ["15[013-68]"]], ["(15[279]\\d)(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"]], ["(1[67]\\d)(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"]]], "0", "0$1"], DJ: ["253", "[27]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], DK: ["45", "[2-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], DM: ["1", "[57-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "767"], DO: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "8[024]9"], DZ: ["213", "(?:[1-4]|[5-9]\\d)\\d{7}", [["([1-4]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"]], ["([5-8]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"]], ["(9\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"]]], "0", "0$1"], EC: ["593", "1\\d{9,10}|[2-8]\\d{7}|9\\d{8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[247]|[356][2-8]"], null, null, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(1800)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["180", "1800"], "$1"]], "0", "(0$1)"], EE: ["372", "[3-9]\\d{6,7}|800\\d{6,7}", [["([3-79]\\d{2})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]"]], ["(70)(\\d{2})(\\d{4})", "$1 $2 $3", ["70"]], ["(8000)(\\d{3})(\\d{3})", "$1 $2 $3", ["800", "8000"]], ["([458]\\d{3})(\\d{3,4})", "$1 $2", ["40|5|8(?:00|[1-5])", "40|5|8(?:00[1-9]|[1-5])"]]]], EG: ["20", "1\\d{4,9}|[24-6]\\d{8}|3\\d{7}|[89]\\d{8,9}", [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"]], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1(?:3|5[239])|[4-6]|[89][2-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1[0-25]|[89]00"]]], "0", "0$1"], EH: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", null, null, null, null, "528[89]"], ER: ["291", "[178]\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3"]], "0", "0$1"], ES: ["34", "[5-9]\\d{8}", [["([89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["([5-9]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[568]|[79][0-8]"]]]], ET: ["251", "[1-59]\\d{8}", [["([1-59]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-59]"]]], "0", "0$1"], FI: ["358", "1\\d{4,11}|[2-9]\\d{4,10}", [["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[6-8])0"]], ["(75\\d{3})", "$1", ["75[12]"]], ["(116\\d{3})", "$1", ["116"], "$1"], ["(\\d{2})(\\d{4,10})", "$1 $2", ["[14]|2[09]|50|7[135]"]], ["(\\d)(\\d{4,11})", "$1 $2", ["[25689][1-8]|3"]]], "0", "0$1", null, null, null, null, ["1(?:[3569][1-8]\\d{3,9}|[47]\\d{5,10})|2[1-8]\\d{3,9}|3(?:[1-8]\\d{3,9}|9\\d{4,8})|[5689][1-8]\\d{3,9}", "4(?:[0-8]\\d{4,9}|9\\d{3,8})|50\\d{4,8}", "800\\d{4,7}", "[67]00\\d{5,6}", null, null, "[13]0\\d{4,8}|2(?:0(?:[016-8]\\d{3,7}|[2-59]\\d{2,7})|9\\d{4,8})|60(?:[12]\\d{5,6}|6\\d{7})|7(?:1\\d{7}|3\\d{8}|5[03-9]\\d{3,7})"]], FJ: ["679", "[2-9]\\d{6}|0\\d{10}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]]], FK: ["500", "[2-7]\\d{4}"], FM: ["691", "[39]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], FO: ["298", "[2-9]\\d{5}", [["(\\d{6})", "$1"]], null, null, "(10(?:01|[12]0|88))"], FR: ["33", "[1-9]\\d{8}", [["([1-79])(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"]], ["(8\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"]], "0", "0$1"], GA: ["241", "0?\\d{7}", [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]]], GB: ["44", "\\d{7,10}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", "0$1", null, null, null, null, ["2(?:0[01378]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{7}|1(?:1(?:3[0-48]|[46][0-4]|5[0-26-9]|[78][0-49])|21[0-7]|31[0-8]|[4-69]1\\d)\\d{6}|1(?:2(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)|3(?:0\\d|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[28][02-57-9]|[37]\\d|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|2[024-9]|3[015689]|4[02-9]|5[03-9]|6\\d|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0124578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|8\\d|9[2-57]))\\d{6}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[345])))|3(?:638[2-5]|647[23]|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[123]))|5(?:24(?:3[2-79]|6\\d)|276\\d|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[567]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|955[0-4])|7(?:26(?:6[13-9]|7[0-7])|442\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|84(?:3[2-58]))|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}|176888[2-46-8]\\d{2}|16977[23]\\d{3}", "7(?:[1-3]\\d{3}|4(?:[0-46-9]\\d{2}|5(?:[0-689]\\d|7[0-57-9]))|5(?:0[0-8]|[13-9]\\d|2[0-35-9])\\d|7(?:0(?:0[01]|[1-9]\\d)|[1-7]\\d{2}|8[02-9]\\d|9[0-689]\\d)|8(?:[014-9]\\d|[23][0-8])\\d|9(?:[024-9]\\d{2}|1(?:[02-9]\\d|1[028])|3[0-689]\\d))\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[2349]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]], GD: ["1", "[4589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "473"], GE: ["995", "[34578]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5"]]], "0"], GF: ["594", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"], GG: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1481[25-9]\\d{5}", "7(?:781\\d|839\\d|911[17])\\d{5}", "80(?:0(?:1111|\\d{6,7})|8\\d{7})", "(?:87[123]|9(?:[01]\\d|8[0-3]))\\d{7}", "70\\d{8}", null, "(?:3[0347]|55)\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:5464\\d|[2-5]\\d{7})|70\\d{7})"]], GH: ["233", "[235]\\d{8}|8\\d{7}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["8"]]], "0", "0$1"], GI: ["350", "[256]\\d{7}", [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "[1-689]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]], GM: ["220", "[2-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], GN: ["224", "[367]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", "0$1", null, null, null, null, ["590(?:0[1-68]|1[0-2]|2[0-68]|3[1289]|4[0-24-9]|5[3-579]|6[0189]|7[08]|8[0-689]|9\\d)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], GQ: ["240", "[23589]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "[26-9]\\d{9}", [["([27]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[2-9]1|[689]"]], ["(2\\d{3})(\\d{6})", "$1 $2", ["2[2-9][02-9]"]]]], GT: ["502", "[2-7]\\d{7}|1[89]\\d{9}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "671"], GW: ["245", "(?:4(?:0\\d{5}|4\\d{7})|9\\d{8})", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["44|9[5-7]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["40"]]]], GY: ["592", "[2-46-9]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], HK: ["852", "[2-7]\\d{7}|8[0-3]\\d{6,7}|9\\d{4,10}", [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|[89](?:0[1-9]|[1-9])"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]], ["(900)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["900"]], ["(900)(\\d{2,5})", "$1 $2", ["900"]]]], HN: ["504", "[237-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1-$2"]]], HR: ["385", "[1-7]\\d{5,8}|[89]\\d{6,8}", [["(1)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"]], ["([2-5]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"]], ["(9\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]], ["(6[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"]], ["([67]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"]], ["(80[01])(\\d{2})(\\d{2,3})", "$1 $2 $3", ["80[01]"]], ["(80[01])(\\d{3})(\\d{3})", "$1 $2 $3", ["80[01]"]]], "0", "0$1"], HT: ["509", "[2-489]\\d{7}", [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3"]]], HU: ["36", "[1-9]\\d{7,8}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"]]], "06", "($1)"], ID: ["62", "(?:[1-79]\\d{6,10}|8\\d{7,11})", [["(\\d{2})(\\d{5,8})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["2[035-9]|[36][02-9]|[4579]"], "(0$1)"], ["(8\\d{2})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"]], ["(8\\d{2})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8[1-35-9]"]], ["(1)(500)(\\d{3})", "$1 $2 $3", ["150", "1500"], "$1"], ["(177)(\\d{6,8})", "$1 $2", ["177"]], ["(800)(\\d{5,7})", "$1 $2", ["800"]], ["(804)(\\d{3})(\\d{4})", "$1 $2 $3", ["804"]], ["(80\\d)(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80[79]"]]], "0", "0$1"], IE: ["353", "[124-9]\\d{6,9}", [["(1)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["40[24]|50[45]"]], ["(48)(\\d{4})(\\d{4})", "$1 $2 $3", ["48"]], ["(818)(\\d{3})(\\d{3})", "$1 $2 $3", ["818"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[24-69]|7[14]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["76|8[35-9]"], "0$1"], ["(8\\d)(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8[35-9]5"], "0$1"], ["(700)(\\d{3})(\\d{3})", "$1 $2 $3", ["700"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:5|8[059])", "1(?:5|8[059]0)"], "$1"]], "0", "(0$1)"], IL: ["972", "1\\d{6,11}|[2-589]\\d{3}(?:\\d{3,6})?|6\\d{3}|7\\d{6,9}", [["([2-489])(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["([57]\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(153)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["153"]], ["(1)([7-9]\\d{2})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(1255)(\\d{3})", "$1-$2", ["125", "1255"]], ["(1200)(\\d{3})(\\d{3})", "$1-$2-$3", ["120", "1200"]], ["(1212)(\\d{2})(\\d{2})", "$1-$2-$3", ["121", "1212"]], ["(1599)(\\d{6})", "$1-$2", ["159", "1599"]], ["(151)(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["151"]], ["(\\d{4})", "*$1", ["[2-689]"]]], "0"], IM: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1624[5-8]\\d{5}", "7(?:4576|[59]24\\d|624[0-4689])\\d{5}", "808162\\d{4}", "(?:872299|90[0167]624)\\d{4}", "70\\d{8}", null, "3(?:08162\\d|3\\d{5}|4(?:40[49]06|5624\\d)|7(?:0624\\d|2299\\d))\\d{3}|55\\d{8}", null, "56\\d{8}", "8(?:4(?:40[49]06|5624\\d)|70624\\d)\\d{3}"]], IN: ["91", "008\\d{9}|1\\d{7,12}|[2-9]\\d{9,10}", [["(\\d{8})", "$1", ["561", "5616", "56161"], "$1"], ["(\\d{5})(\\d{5})", "$1 $2", ["6(?:[09]0|2[03689]|3[05-9])|7(?:[02-8]|19|9[037-9])|8(?:0[015-9]|[1-9])|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:[07]|19[0-5]|2(?:[0235-9]|[14][017-9])|3(?:[025-9]|[134][017-9])|4(?:[0-35689]|[47][017-9])|5(?:[02-46-9]|[15][017-9])|6(?:[02-9]|1[0-257-9])|8(?:[0-79]|8[0189])|9(?:[089]|31|7[02-9]))|8(?:0(?:[01589]|6[67]|7[02-9])|1(?:[0-57-9]|6[07-9])|2(?:[014][07-9]|[235-9])|3(?:[03-57-9]|[126][07-9])|[45]|6(?:[02457-9]|[136][07-9])|7(?:[078][07-9]|[1-69])|8(?:[0-25-9]|3[07-9]|4[047-9])|9(?:[02-9]|1[027-9]))|9", "6(?:[09]0|2(?:0[01]|39|60|8[0-2]|9[04])|3(?:0[01]|5[0-2]|60|7[05]|81|9[03-5]))|7(?:0|19[0-5]|2(?:[0235-79]|[14][017-9]|8(?:[0-69]|[78][089]))|3(?:[05-8]|1(?:[0189]|7[5-9])|2(?:[0-49][089]|[5-8])|3[017-9]|4(?:[07-9]|11)|9(?:[01689]|[2-5][089]|7[0189]))|4(?:[056]|1(?:[0135-9]|[24][089])|[29](?:[0-7][089]|[89])|3(?:[0-8][089]|9)|[47](?:[089]|11|7[02-8])|8(?:[0-24-7][089]|[389]))|5(?:[0346-9]|[15][017-9]|2(?:[03-9]|[12][089]))|6(?:[0346-9]|1[0-257-9]|2(?:[0-4]|[5-9][089])|5(?:[0-367][089]|[4589]))|7(?:0(?:[02-9]|1[089])|[1-9])|8(?:[0-79]|8(?:0[0189]|11|8[013-9]|9))|9(?:[089]|313|7(?:[02-8]|9[07-9])))|8(?:0(?:[01589]|6[67]|7(?:[02-8]|9[05-9]))|1(?:[02-57-9]|1(?:[0-35-9]|4[0-46-9])|6(?:[089]|7[02-8]))|2(?:0(?:[089]|7[02])|[14](?:[089]|7[02-8])|[235-9])|3(?:[03-57-9]|1(?:[089]|7[02-6])|2(?:[09]|77|8[0-689])|6(?:[089]|7[02-7]))|[45]|6(?:[02457-9]|[136](?:[089]|7[02-8]))|7(?:0[07-9]|[1-69]|[78](?:[089]|7[02-8]))|8(?:[0-25-9]|3(?:[089]|7[02-8])|4(?:[0489]|7[02-68]))|9(?:[02-9]|1(?:[0289]|7[2-6])))|9"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-9]|80[2-46]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[59][14]|[68][1-9]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1|9[15])|6(?:12|[2-4]1|5[17]|6[13]|7[14]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[23579]|[468][1-9])|[2-8]"]], ["(\\d{2})(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3 $4", ["008"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], "$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["160", "1600"], "$1"], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], "$1"], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["180", "1800"], "$1"], ["(\\d{4})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["186", "1860"], "$1"], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18[06]"], "$1"]], "0", "0$1", null, null, true], IO: ["246", "3\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], IQ: ["964", "[1-7]\\d{7,9}", [["(1)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["([2-6]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], IR: ["98", "[1-8]\\d{5,9}|9(?:[0-4]\\d{8}|9\\d{8})", [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"]], ["(\\d{2})(\\d{4,5})", "$1 $2", ["[1-8]"]], ["(\\d{4,5})", "$1", ["96"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"]]], "0", "0$1"], IS: ["354", "[4-9]\\d{6}|38\\d{7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(3\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]]], IT: ["39", "[01589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9})", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["0(?:[26]\\d{4,9}|(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2346]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[34578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7})", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]], JE: ["44", "[135789]\\d{6,9}", [["(7\\d{3})(\\d{6})", "$1 $2", ["7(?:[1-57-9]|62)", "7(?:[1-57-9]|624)"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2|5[56]|7[06]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[02-9]1|1)|3|9[018]"]], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"]], ["(1\\d{3})(\\d{5,6})", "$1 $2", ["1"]], ["(800)(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"]], ["(845)(46)(4\\d)", "$1 $2 $3", ["845", "8454", "84546", "845464"]], ["(8\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8(?:4[2-5]|7[0-3])"]], ["(80\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["80"]], ["(800)(\\d{6})", "$1 $2", ["800"]]], "0", null, null, null, null, null, ["1534[0-24-8]\\d{5}", "7(?:509\\d|7(?:00[378]|97[7-9])|829\\d|937\\d)\\d{5}", "80(?:07(?:35|81)|8901)\\d{4}", "(?:871206|90(?:066[59]|1810|71(?:07|55)))\\d{4}", "701511\\d{4}", null, "3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))\\d{4}|55\\d{8}", "76(?:0[012]|2[356]|4[0134]|5[49]|6[0-369]|77|81|9[39])\\d{6}", "56\\d{8}", "8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|70002)\\d{4}"]], JM: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "876"], JO: ["962", "[235-9]\\d{7,8}", [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(7)(\\d{4})(\\d{4})", "$1 $2 $3", ["7[457-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["70"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["8[0158]|9"]]], "0", "0$1"], JP: ["81", "[1-9]\\d{8,9}|00(?:[36]\\d{7,14}|7\\d{5,7}|8\\d{7})", [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[2579]0|80[1-9]"]], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51|63)|9(?:49|80|9[16])", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[78]|96)|477|51[24]|636)|9(?:496|802|9(?:1[23]|69))", "1(?:267|3(?:7[247]|9[278])|4(?:5[67]|66)|5(?:47|58|64|8[67])|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[78]|96[2457-9])|477|51[24]|636[2-57-9])|9(?:496|802|9(?:1[23]|69))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["1(?:2[3-6]|3[3-9]|4[2-6]|5[2-8]|[68][2-7]|7[2-689]|9[1-578])|2(?:2[03-689]|3[3-58]|4[0-468]|5[04-8]|6[013-8]|7[06-9]|8[02-57-9]|9[13])|4(?:2[28]|3[689]|6[035-7]|7[05689]|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9[4-9])|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9[014-9])|8(?:2[49]|3[3-8]|4[5-8]|5[2-9]|6[35-9]|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9[3-7])", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9[2-8])|3(?:[3-6][2-9]|7[2-6]|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5[4-7]|6[2-9]|8[2-8]|9[236-9])|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3[34]|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6[56]))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))", "1(?:2[3-6]|3[3-9]|4[2-6]|5(?:[236-8]|[45][2-69])|[68][2-7]|7[2-689]|9[1-578])|2(?:2(?:[04-689]|3[23])|3[3-58]|4[0-468]|5(?:[0468][2-9]|5[78]|7[2-4])|6(?:[0135-8]|4[2-5])|7(?:[0679]|8[2-7])|8(?:[024578]|3[25-9]|9[6-9])|9(?:11|3[2-4]))|4(?:2(?:2[2-9]|8[237-9])|3[689]|6[035-7]|7(?:[059][2-8]|[68])|80|9[3-5])|5(?:3[1-36-9]|4[4578]|5[013-8]|6[1-9]|7[2-8]|8[14-7]|9(?:[4-7]|[89][2-8]))|7(?:2[15]|3[5-9]|4[02-9]|6[135-8]|7[0-4689]|9(?:[017-9]|4[6-8]|5[2-478]|6[2-589]))|8(?:2(?:4[4-8]|9(?:20|[3578]|4[04-9]|6(?:5[25]|60)))|3(?:[3-6][2-9]|7(?:[2-5]|6[0-59])|8[2-5])|4[5-8]|5[2-9]|6(?:[37]|5(?:[467]|5[014-9])|6(?:[2-8]|9[02-69])|8[2-8]|9(?:[236-8]|9[23]))|7[579]|8[03-579]|9[2-8])|9(?:[23]0|4[02-46-9]|5[024-79]|6[4-9]|7[2-47-9]|8[02-7]|9(?:3(?:3[02-9]|4[0-24689])|4[2-69]|[5-7]))"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1|2(?:2[37]|5[5-9]|64|78|8[39]|91)|4(?:2[2689]|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93)", "1|2(?:2[37]|5(?:[57]|[68]0|9[19])|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93[34])", "1|2(?:2[37]|5(?:[57]|[68]0|9(?:17|99))|64|78|8[39]|917)|4(?:2(?:20|[68]|9[178])|64|7[347])|5[2-589]|60|8(?:2[124589]|3[279]|[46-9])|9(?:[235-8]|93(?:31|4))"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["2(?:[34]7|[56]9|74|9[14-79])|82|993"]], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2479][1-9]"]]], "0", "0$1"], KE: ["254", "20\\d{6,7}|[4-9]\\d{6,9}", [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["7"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"]]], "0", "0$1", "005|0"], KG: ["996", "[235-8]\\d{8,9}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[25-7]|31[25]"]], ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[36]|[2-9])"]], ["(\\d{3})(\\d{3})(\\d)(\\d{3})", "$1 $2 $3 $4", ["8"]]], "0", "0$1"], KH: ["855", "[1-9]\\d{7,9}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1\\d[1-9]|[2-9]"], "0$1"], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"]]], "0"], KI: ["686", "[2458]\\d{4}|3\\d{4,7}|[67]\\d{7}", [], null, null, "0"], KM: ["269", "[3478]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3"]]], KN: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "869"], KP: ["850", "1\\d{9}|[28]\\d{7}", [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], "0", "0$1"], KR: ["82", "00(?:3\\d{8,9}|7\\d{9,11})|[1-7]\\d{4,9}|8\\d{8}", [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"]], ["(\\d{4})(\\d{4})", "$1-$2", ["1(?:5[246-9]|6[046-8]|8[03579])", "1(?:5(?:22|44|66|77|88|99)|6(?:[07]0|44|6[16]|88)|8(?:00|33|55|77|99))"], "$1"], ["(\\d{5})", "$1", ["1[016-9]1", "1[016-9]11", "1[016-9]114"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2[1-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60[2-9]|80"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["1[0-25-9]|(?:3[1-3]|[46][1-4]|5[1-5])[1-9]"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]0"]]], "0", "0$1", "0(8[1-46-8]|85\\d{2})?"], KW: ["965", "[12569]\\d{6,7}", [["(\\d{4})(\\d{3,4})", "$1 $2", ["[16]|2(?:[0-35-9]|4[0-35-9])|52[25]|9[024-9]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["244|5(?:[015]|6[56])"]]]], KY: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "345"], KZ: ["7", "(?:33\\d|7\\d{2}|80[089])\\d{7}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", null, null, null, null, null, ["33622\\d{5}|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9])|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[234]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[234]\\d|5[139])|4(?:2\\d|3[1235-9]|59)|5(?:[23]\\d|4[01246-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59)))\\d{5}", "7(?:0[012578]|47|6[02-4]|7[15-8]|85)\\d{7}", "800\\d{7}", "809\\d{7}", "808\\d{7}", null, null, null, "751\\d{7}"]], LA: ["856", "[2-8]\\d{7,9}", [["(20)(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["([2-8]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"]], ["(30)(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30"]]], "0", "0$1"], LB: ["961", "[13-9]\\d{6,7}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["([7-9]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["7(?:[01]|6[013-9]|8[89]|9[1-3])|[89][01]"]]], "0"], LC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "758"], LI: ["423", "6\\d{8}|[23789]\\d{6}", [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[237-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[56]"]], ["(69)(7\\d{2})(\\d{4})", "$1 $2 $3", ["697"]]], "0", null, "0|10(?:01|20|66)"], LK: ["94", "[1-9]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "0", "0$1"], LR: ["231", "2\\d{7,8}|[378]\\d{8}|4\\d{6}|5\\d{6,8}", [["(2\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([4-5])(\\d{3})(\\d{3})", "$1 $2 $3", ["[45]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"]]], "0", "0$1"], LS: ["266", "[2568]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], LT: ["370", "[3-9]\\d{7}", [["([34]\\d)(\\d{6})", "$1 $2", ["37|4(?:1|5[45]|6[2-4])"]], ["([3-6]\\d{2})(\\d{5})", "$1 $2", ["3[148]|4(?:[24]|6[09])|528|6"]], ["([7-9]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1"], ["(5)(2\\d{2})(\\d{4})", "$1 $2 $3", ["52[0-79]"]]], "8", "(8-$1)", "[08]", null, true], LU: ["352", "[24-9]\\d{3,10}|3(?:[0-46-9]\\d{2,9}|5[013-9]\\d{1,8})", [["(\\d{2})(\\d{3})", "$1 $2", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-5]|7[1-9]|[89](?:0[2-9]|[1-9])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,4})", "$1 $2 $3 $4", ["2(?:[12589]|4[12])|[3-5]|7[1-9]|8(?:0[2-9]|[1-9])|9(?:0[2-46-9]|[1-9])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["70|80[01]|90[015]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], null, null, "(15(?:0[06]|1[12]|35|4[04]|55|6[26]|77|88|99)\\d)"], LV: ["371", "[2689]\\d{7}", [["([2689]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2689]"]]]], LY: ["218", "[25679]\\d{8}", [["([25-79]\\d)(\\d{7})", "$1-$2", ["[25-79]"]]], "0", "0$1"], MA: ["212", "[5-9]\\d{8}", [["([5-7]\\d{2})(\\d{6})", "$1-$2", ["5(?:2[015-7]|3[0-4])|[67]"]], ["([58]\\d{3})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|92)|892", "5(?:2(?:[2-48]|9[0-7])|3(?:[5-79]|8[0-7])|924)|892"]], ["(5\\d{4})(\\d{4})", "$1-$2", ["5(?:29|38)", "5(?:29|38)[89]"]], ["([5]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:4[067]|5[03])"]], ["(8[09])(\\d{7})", "$1-$2", ["8(?:0|9[013-9])"]]], "0", "0$1", null, null, null, null, ["5(?:2(?:[015-79]\\d|2[02-9]|3[2-57]|4[2-8]|8[235-7])\\d|3(?:[0-48]\\d|[57][2-9]|6[2-8]|9[3-9])\\d|4[067]\\d{2}|5[03]\\d{2})\\d{4}", "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:0[067]|6[1267]|7[07]))\\d{6}", "80\\d{7}", "89\\d{7}", null, null, null, null, "5924[01]\\d{4}"]], MC: ["377", "[34689]\\d{7,8}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[39]"], "$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"]], ["(6)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"]], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["8"], "$1"]], "0", "0$1"], MD: ["373", "[235-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"]], ["([25-7]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["2[13-9]|[5-7]"]], ["([89]\\d{2})(\\d{5})", "$1 $2", ["[89]"]]], "0", "0$1"], ME: ["382", "[2-9]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]|6[036-9]"]]], "0", "0$1"], MF: ["590", "[56]\\d{8}", [["([56]\\d{2})(\\d{2})(\\d{4})", "$1 $2-$3", ["590|69[01]"]]], "0", null, null, null, null, null, ["590(?:0[079]|13|2[79]|30|43|5[0-268]|7[79]|87)\\d{4}", "69(?:0\\d{2}|1(?:2[29]|3[0-5]))\\d{4}"]], MG: ["261", "[23]\\d{8}", [["([23]\\d)(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"]]], "0", "0$1"], MH: ["692", "[2-6]\\d{6}", [["(\\d{3})(\\d{4})", "$1-$2"]], "1"], MK: ["389", "[2-578]\\d{7}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([347]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"]], ["([58]\\d{2})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"]]], "0", "0$1"], ML: ["223", "[246-9]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[246-9]"]]]], MM: ["95", "[178]\\d{5,7}|[24-6]\\d{5,8}|9(?:[279]\\d{0,2}|5|[34]\\d{1,2}|6(?:\\d{1,2})?|8(?:\\d{2})?)\\d{6}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1|2[245]"]], ["(2)(\\d{4})(\\d{4})", "$1 $2 $3", ["251"]], ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"]], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["432|67|81"]], ["(\\d{2})(\\d{2})(\\d{3,4})", "$1 $2 $3", ["[4-8]"]], ["(9)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"]], ["(9)([34]\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:3[0-36]|4[0-57-9])"]], ["(9)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92[56]"]], ["(9)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["93"]]], "0", "0$1"], MN: ["976", "[12]\\d{7,9}|[57-9]\\d{7}", [["([12]\\d)(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"]], ["([12]2\\d)(\\d{5,6})", "$1 $2", ["[12]2[1-3]"]], ["([12]\\d{3})(\\d{5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57-9]"], "$1"], ["([12]\\d{4})(\\d{4,5})", "$1 $2", ["[12](?:27|[3-5])", "[12](?:27|[3-5]\\d)[4-9]"]]], "0", "0$1"], MO: ["853", "[268]\\d{7}", [["([268]\\d{3})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "670"], MQ: ["596", "[56]\\d{8}", [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]], "0", "0$1"], MR: ["222", "[2-48]\\d{7}", [["([2-48]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "664"], MT: ["356", "[2357-9]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], MU: ["230", "[2-9]\\d{6,7}", [["([2-46-9]\\d{2})(\\d{4})", "$1 $2", ["[2-46-9]"]], ["(5\\d{3})(\\d{4})", "$1 $2", ["5"]]]], MV: ["960", "[346-8]\\d{6,9}|9(?:00\\d{7}|\\d{6})", [["(\\d{3})(\\d{4})", "$1-$2", ["[3467]|9(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]00"]]]], MW: ["265", "(?:1(?:\\d{2})?|[2789]\\d{2})\\d{6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[17-9]"]]], "0", "0$1"], MX: ["52", "[1-9]\\d{9,10}", [["([358]\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["33|55|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2467]|3[0-2457-9]|5[089]|8[02-9]|9[0-35-9]"]], ["(1)([358]\\d)(\\d{4})(\\d{4})", "044 $2 $3 $4", ["1(?:33|55|81)"], "$1", null, "$1 $2 $3 $4"], ["(1)(\\d{3})(\\d{3})(\\d{4})", "044 $2 $3 $4", ["1(?:[2467]|3[0-2457-9]|5[089]|8[2-9]|9[1-35-9])"], "$1", null, "$1 $2 $3 $4"]], "01", "01 $1", "0[12]|04[45](\\d{10})", "1$1", true], MY: ["60", "[13-9]\\d{7,9}", [["([4-79])(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(3)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["([18]\\d)(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1[02-46-9][1-9]|8"], "0$1"], ["(1)([36-8]00)(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1[36-8]0", "1[36-8]00"]], ["(11)(\\d{4})(\\d{4})", "$1-$2 $3", ["11"], "0$1"], ["(15[49])(\\d{3})(\\d{4})", "$1-$2 $3", ["15[49]"], "0$1"]], "0"], MZ: ["258", "[28]\\d{7,8}", [["([28]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-7]"]], ["(80\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["80"]]]], NA: ["264", "[68]\\d{7,8}", [["(8\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["8[1-35]"]], ["(6\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"]], ["(88)(\\d{3})(\\d{3})", "$1 $2 $3", ["88"]], ["(870)(\\d{3})(\\d{3})", "$1 $2 $3", ["870"]]], "0", "0$1"], NC: ["687", "[2-57-9]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[2-46-9]|5[0-4]"]]]], NE: ["227", "[0289]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["09|[289]"]], ["(08)(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]]]], NF: ["672", "[13]\\d{5}", [["(\\d{2})(\\d{4})", "$1 $2", ["1"]], ["(\\d)(\\d{5})", "$1 $2", ["3"]]]], NG: ["234", "[1-6]\\d{5,8}|9\\d{5,9}|[78]\\d{5,13}", [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[1-9]|[1-79])|8[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["70|8[01]|90[235-9]"]], ["([78]00)(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]00"]], ["([78]00)(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]00"]], ["(78)(\\d{2})(\\d{3})", "$1 $2 $3", ["78"]]], "0", "0$1"], NI: ["505", "[125-8]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2"]]], NL: ["31", "1\\d{4,8}|[2-7]\\d{8}|[89]\\d{6,9}", [["([1-578]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[035]|2[0346]|3[03568]|4[0356]|5[0358]|7|8[4578]"]], ["([1-5]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"]], ["(6)(\\d{8})", "$1 $2", ["6[0-57-9]"]], ["(66)(\\d{7})", "$1 $2", ["66"]], ["(14)(\\d{3,4})", "$1 $2", ["14"], "$1"], ["([89]0\\d)(\\d{4,7})", "$1 $2", ["[89]0"]]], "0", "0$1"], NO: ["47", "0\\d{4}|[2-9]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", "(?:4[015-8]|5[89]|87|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]], NP: ["977", "[1-8]\\d{7}|9(?:[1-69]\\d{6,8}|7[2-6]\\d{5,7}|8\\d{8})", [["(1)(\\d{7})", "$1-$2", ["1[2-6]"]], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-69]|7[15-9])"]], ["(9\\d{2})(\\d{7})", "$1-$2", ["9(?:6[013]|7[245]|8)"], "$1"]], "0", "0$1"], NR: ["674", "[458]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], NU: ["683", "[1-5]\\d{3}"], NZ: ["64", "6[235-9]\\d{6}|[2-57-9]\\d{7,9}", [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["240|[346]|7[2-57-9]|9[1-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["21"]], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:1[1-9]|[69]|7[0-35-9])|70|86"]], ["(2\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["2[028]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["90"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|5|[89]0"]]], "0", "0$1"], OM: ["968", "(?:5|[279]\\d)\\d{6}|800\\d{5,6}", [["(2\\d)(\\d{6})", "$1 $2", ["2"]], ["([79]\\d{3})(\\d{4})", "$1 $2", ["[79]"]], ["([58]00)(\\d{4,6})", "$1 $2", ["[58]00"]]]], PA: ["507", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["6"]]]], PE: ["51", "[14-9]\\d{7,8}", [["(1)(\\d{7})", "$1 $2", ["1"]], ["([4-8]\\d)(\\d{6})", "$1 $2", ["[4-7]|8[2-4]"]], ["(\\d{3})(\\d{5})", "$1 $2", ["80"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "$1"]], "0", "(0$1)"], PF: ["689", "4\\d{5,7}|8\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4[09]|8[79]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]]]], PG: ["675", "[1-9]\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[13-689]|27"]], ["(\\d{4})(\\d{4})", "$1 $2", ["20|7"]]]], PH: ["63", "1\\d{10,12}|2\\d{5,7}|[3-7]\\d{8}|8\\d{7,9}|9\\d{9}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(2)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|5(?:22|44)|642|8(?:62|8[245])", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["([3-8]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["81|9"], "0$1"], ["(1800)(\\d{3})(\\d{4})", "$1 $2 $3", ["180", "1800"]], ["(1800)(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["180", "1800"]]], "0"], PK: ["92", "1\\d{8}|[2-8]\\d{5,11}|9(?:[013-9]\\d{4,10}|2\\d(?:111\\d{6}|\\d{3,7}))", [["([89]00)(\\d{3})(\\d{2})", "$1 $2 $3", ["[89]00"], "0$1"], ["(1\\d{3})(\\d{5})", "$1 $2", ["1"], "$1"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2[349]|45|54|60|72|8[2-5]|9[2-469]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-469])\\d[2-9]"]], ["(58\\d{3})(\\d{5})", "$1 $2", ["58[126]"]], ["(3\\d{2})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)1", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)11", "(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)111"]], ["(\\d{3})(111)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[349]|45|54|60|72|8[2-5]|9[2-9]", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d1", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d11", "(?:2[349]|45|54|60|72|8[2-5]|9[2-9])\\d111"]]], "0", "(0$1)"], PL: ["48", "[1-57-9]\\d{6,8}|6\\d{5,8}", [["(\\d{3})(\\d{3})", "$1 $2", ["11[68]|64"]], ["(\\d{5})", "$1", ["19"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["26|39|45|5[0137]|6[0469]|7[02389]|8[08]"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[14]|2[0-57-9]|3[2-4]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145]"]]]], PM: ["508", "[45]\\d{5}", [["([45]\\d)(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"]]], "0", "0$1"], PR: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "787|939"], PS: ["970", "1\\d{9}|[24589]\\d{7,8}", [["([2489])(2\\d{2})(\\d{4})", "$1 $2 $3", ["[2489]2"]], ["(5[69]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["5[69]"]], ["(1[78]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[78]0", "1[78]00"], "$1"]], "0", "0$1"], PT: ["351", "[2-46-9]\\d{8}", [["(2\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["([2-46-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[3-9]|[346-9]"]]]], PW: ["680", "[2-8]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], PY: ["595", "5[0-5]\\d{4,7}|[2-46-9]\\d{5,8}", [["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["9[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["870", "8700"]], ["(\\d{3})(\\d{4,5})", "$1 $2", ["[2-8][1-9]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8][1-9]"], "0$1"]], "0"], QA: ["974", "[2-8]\\d{6,7}", [["([28]\\d{2})(\\d{4})", "$1 $2", ["[28]"]], ["([3-7]\\d{3})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", "0$1", null, null, null, "262|69|8"], RO: ["40", "[23]\\d{5,8}|[7-9]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"]], ["(\\d{2})(\\d{4})", "$1 $2", ["[23]1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23][3-7]|[7-9]"]], ["(2\\d{2})(\\d{3})", "$1 $2", ["2[3-6]"]]], "0", "0$1"], RS: ["381", "[126-9]\\d{4,11}|3(?:[0-79]\\d{3,10}|8[2-9]\\d{2,9})", [["([23]\\d{2})(\\d{4,9})", "$1 $2", ["(?:2[389]|39)0"]], ["([1-3]\\d)(\\d{5,10})", "$1 $2", ["1|2(?:[0-24-7]|[389][1-9])|3(?:[0-8]|9[1-9])"]], ["(6\\d)(\\d{6,8})", "$1 $2", ["6"]], ["([89]\\d{2})(\\d{3,9})", "$1 $2", ["[89]"]], ["(7[26])(\\d{4,9})", "$1 $2", ["7[26]"]], ["(7[08]\\d)(\\d{4,9})", "$1 $2", ["7[08]"]]], "0", "0$1"], RU: ["7", "[347-9]\\d{9}", [["([3489]\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[3489]"]], ["(7\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]]], "8", "8 ($1)", null, null, true, null, ["(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}", "9\\d{9}", "80[04]\\d{7}", "80[39]\\d{7}", "808\\d{7}"]], RW: ["250", "[027-9]\\d{7,8}", [["(2\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["([7-9]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(0\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]]], "0"], SA: ["966", "1\\d{7,8}|(?:[2-467]|92)\\d{7}|5\\d{8}|8\\d{9}", [["([1-467])(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-467]"]], ["(1\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[1-467]"]], ["(5\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["5"]], ["(92\\d{2})(\\d{5})", "$1 $2", ["92"], "$1"], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"], "$1"], ["(811)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["811"]]], "0", "0$1"], SB: ["677", "[1-9]\\d{4,6}", [["(\\d{2})(\\d{5})", "$1 $2", ["[7-9]"]]]], SC: ["248", "[24689]\\d{5,6}", [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]"]]]], SD: ["249", "[19]\\d{8}", [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3"]], "0", "0$1"], SE: ["46", "[1-35-9]\\d{5,11}|4\\d{6,8}", [["(8)(\\d{2,3})(\\d{2,3})(\\d{2})", "$1-$2 $3 $4", ["8"], null, null, "$1 $2 $3 $4"], ["([1-69]\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[013689]|2[0136]|3[1356]|4[0246]|54|6[03]|90"], null, null, "$1 $2 $3 $4"], ["([1-469]\\d)(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90"], null, null, "$1 $2 $3"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[0-5]|4[0-3])"], null, null, "$1 $2 $3"], ["(7\\d)(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["7"], null, null, "$1 $2 $3 $4"], ["(77)(\\d{2})(\\d{2})", "$1-$2$3", ["77"], null, null, "$1 $2 $3"], ["(20)(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], null, null, "$1 $2 $3"], ["(9[034]\\d)(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9[034]"], null, null, "$1 $2 $3 $4"], ["(9[034]\\d)(\\d{4})", "$1-$2", ["9[034]"], null, null, "$1 $2"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["25[245]|67[3-6]"], null, null, "$1 $2 $3 $4 $5"]], "0", "0$1"], SG: ["65", "[36]\\d{7}|[17-9]\\d{7,10}", [["([3689]\\d{3})(\\d{4})", "$1 $2", ["[369]|8[1-9]"]], ["(1[89]00)(\\d{3})(\\d{4})", "$1 $2 $3", ["1[89]0", "1[89]00"]], ["(7000)(\\d{4})(\\d{3})", "$1 $2 $3", ["700", "7000"]], ["(800)(\\d{3})(\\d{4})", "$1 $2 $3", ["800"]]]], SH: ["290", "[256]\\d{4}|8\\d{3}", [], null, null, null, null, null, null, ["2(?:[0-57-9]\\d|6[4-9])\\d{2}", "[56]\\d{4}", null, null, null, null, null, null, "262\\d{2}"]], SI: ["386", "[1-7]\\d{6,7}|[89]\\d{4,7}", [["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[12]|[34][24-8]|5[2-8]|7[3-8]"], "(0$1)"], ["([3-7]\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"]], ["([89][09])(\\d{3,6})", "$1 $2", ["[89][09]"]], ["([58]\\d{2})(\\d{5})", "$1 $2", ["59|8[1-3]"]]], "0", "0$1"], SJ: ["47", "0\\d{4}|[45789]\\d{7}", [["([489]\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[489]"]], ["([235-7]\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-7]"]]], null, null, null, null, null, null, ["79\\d{6}", "(?:4[015-8]|5[89]|9\\d)\\d{6}", "80[01]\\d{5}", "82[09]\\d{5}", "880\\d{5}", null, "0\\d{4}|81(?:0(?:0[7-9]|1\\d)|5\\d{2})\\d{3}", null, "85[0-5]\\d{5}", "810(?:0[0-6]|[2-8]\\d)\\d{3}"]], SK: ["421", "(?:[2-68]\\d{5,8}|9\\d{6,8})", [["(2)(1[67])(\\d{3,4})", "$1 $2 $3", ["21[67]"]], ["([3-5]\\d)(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5]"]], ["(2)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"]], ["([3-5]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"]], ["([689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"]], ["(9090)(\\d{3})", "$1 $2", ["909", "9090"]]], "0", "0$1"], SL: ["232", "[2-9]\\d{7}", [["(\\d{2})(\\d{6})", "$1 $2"]], "0", "(0$1)"], SM: ["378", "[05-7]\\d{7,9}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(0549)(\\d{6})", "$1 $2", ["054", "0549"], null, null, "($1) $2"], ["(\\d{6})", "0549 $1", ["[89]"], null, null, "(0549) $1"]], null, null, "([89]\\d{5})", "0549$1"], SN: ["221", "[3789]\\d{8}", [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], SO: ["252", "[1-9]\\d{5,8}", [["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[13-5]|2[0-79]"]], ["(\\d)(\\d{7})", "$1 $2", ["24|[67]"]], ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["15|28|6[1-35-9]|799|9[2-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3[59]|4[89]|6[24-6]|79|8[08]|90"]]], "0"], SR: ["597", "[2-8]\\d{5,6}", [["(\\d{3})(\\d{3})", "$1-$2", ["[2-4]|5[2-58]"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "[19]\\d{8}", [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", null, "0$1"]], "0"], ST: ["239", "[29]\\d{6}", [["(\\d{3})(\\d{4})", "$1 $2"]]], SV: ["503", "[267]\\d{7}|[89]\\d{6}(?:\\d{4})?", [["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "721"], SY: ["963", "[1-59]\\d{7,8}", [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", "0$1", null, null, true], SZ: ["268", "[027]\\d{7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[027]"]]]], TA: ["290", "8\\d{3}", [], null, null, null, null, null, null, ["8\\d{3}"]], TC: ["1", "[5689]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "649"], TD: ["235", "[2679]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4"]]], TG: ["228", "[279]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "1\\d{8,9}|[2-9]\\d{7,8}", [["(2)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"]], ["([13-9]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["14|[3-9]"]], ["(1[89]00)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1"], TJ: ["992", "[3-57-9]\\d{8}", [["([349]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[34]7|91[78]"]], ["([457-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[148]|[578]|9(?:[0235-9]|1[59])"]], ["(331700)(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317", "33170", "331700"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]", "3(?:[1245]|3(?:[02-9]|1[0-589]))"]]], "8", null, null, null, true], TK: ["690", "[2-47]\\d{3,6}"], TL: ["670", "[2-489]\\d{6}|7\\d{6,7}", [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7[3-8]"]]]], TM: ["993", "[1-6]\\d{7}", [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"]], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["13|[2-5]"]]], "8", "(8 $1)"], TN: ["216", "[2-57-9]\\d{7}", [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3"]]], TO: ["676", "[02-8]\\d{4,6}", [["(\\d{2})(\\d{3})", "$1-$2", ["[1-6]|7[0-4]|8[05]"]], ["(\\d{3})(\\d{4})", "$1 $2", ["7[5-9]|8[47-9]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]]]], TR: ["90", "[2-589]\\d{9}|444\\d{4}", [["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[23]|4(?:[0-35-9]|4[0-35-9])"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[02-69]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["51|[89]"], "0$1"], ["(444)(\\d{1})(\\d{3})", "$1 $2 $3", ["444"]]], "0", null, null, null, true], TT: ["1", "[589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "868"], TV: ["688", "[279]\\d{4,6}"], TW: ["886", "2\\d{6,8}|[3-689]\\d{7,8}|7\\d{7,9}", [["(20)(\\d)(\\d{4})", "$1 $2 $3", ["202"]], ["([258]0)(\\d{3})(\\d{4})", "$1 $2 $3", ["20[013-9]|50[0-46-9]|80[0-79]"]], ["([2-8])(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[25][2-8]|[346]|[78][1-9]"]], ["(9\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]], ["(70)(\\d{4})(\\d{4})", "$1 $2 $3", ["70"]]], "0", "0$1"], TZ: ["255", "\\d{9}", [["([24]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"]], ["([67]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"]], ["([89]\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"]]], "0", "0$1"], UA: ["380", "[3-9]\\d{8}", [["([3-9]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[38]9|4(?:[45][0-5]|87)|5(?:0|[67][37])|6[36-8]|7|9[1-9]", "[38]9|4(?:[45][0-5]|87)|5(?:0|6(?:3[14-7]|7)|7[37])|6[36-8]|7|9[1-9]"]], ["([3-689]\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["(?:3[1-8]|4[136-8])2|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90", "3(?:[1-46-8]2[013-9]|52)|4(?:[1378]2|62[013-9])|5(?:[12457]2|6[24])|6(?:[12][29]|[49]2|5[24])|8[0-8]|90"]], ["([3-6]\\d{3})(\\d{5})", "$1 $2", ["3(?:[1-46-8]|5[013-9])|4(?:[137][013-9]|[45][6-9]|6|8[4-6])|5(?:[1245][013-9]|3|6[0135689]|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])", "3(?:[1-46-8](?:[013-9]|22)|5[013-9])|4(?:[137][013-9]|[45][6-9]|6(?:[013-9]|22)|8[4-6])|5(?:[1245][013-9]|3|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][13-8]|[49][013-9]|5[0135-9])"]]], "0", "0$1"], UG: ["256", "\\d{9}", [["(\\d{3})(\\d{6})", "$1 $2", ["20[0-8]|4(?:6[45]|[7-9])|[7-9]", "20(?:[013-8]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"]], ["(\\d{2})(\\d{7})", "$1 $2", ["3|4(?:[1-5]|6[0-36-9])"]], ["(2024)(\\d{5})", "$1 $2", ["202", "2024"]]], "0", "0$1"], US: ["1", "[2-9]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, true, null, ["(?:2(?:0[1-35-9]|1[02-9]|2[03-589]|3[149]|4[08]|5[1-46]|6[0279]|7[026]|8[13])|3(?:0[1-57-9]|1[02-9]|2[0135]|3[0-24679]|4[67]|5[12]|6[014]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[0235]|58|6[39]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[19]|6[1-47]|7[013-5]|8[056])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[16]|5[017]|6[0-279]|78|8[012])|7(?:0[1-46-8]|1[02-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[02-59]|8[156])|8(?:0[1-68]|1[02-8]|28|3[0-258]|4[3578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[014678]|4[0179]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}", null, "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", "900[2-9]\\d{6}", "5(?:(?:00|22|33|44|66|77|88)[2-9]|21[23])\\d{6}"]], UY: ["598", "[2489]\\d{6,7}", [["(\\d{4})(\\d{4})", "$1 $2", ["[24]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9[1-9]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["[89]0"], "0$1"]], "0"], UZ: ["998", "[679]\\d{8}", [["([679]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[679]"]]], "8", "8 $1"], VA: ["39", "(?:0(?:878\\d{5}|6698\\d{5})|[1589]\\d{5,10}|3(?:[12457-9]\\d{8}|[36]\\d{7,9}))", [["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|55"]], ["(0[26])(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(0[26])(\\d{4,6})", "$1 $2", ["0[26]"]], ["(0\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[245])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|[45][0-4]))"]], ["(0\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["0[13-57-9][2-46-8]"]], ["(0\\d{3})(\\d{2,6})", "$1 $2", ["0[13-57-9][2-46-8]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13]|8(?:00|4[08]|9[59])", "[13]|8(?:00|4[08]|9(?:5[5-9]|9))"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894", "894[5-9]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["3"]]], null, null, null, null, null, null, ["06698\\d{5}", "3(?:[12457-9]\\d{8}|6\\d{7,8}|3\\d{7,9})", "80(?:0\\d{6}|3\\d{3})", "0878\\d{5}|1(?:44|6[346])\\d{6}|89(?:2\\d{3}|4(?:[0-4]\\d{2}|[5-9]\\d{4})|5(?:[0-4]\\d{2}|[5-9]\\d{6})|9\\d{6})", "1(?:78\\d|99)\\d{6}", null, null, null, "55\\d{8}", "84(?:[08]\\d{6}|[17]\\d{3})"]], VC: ["1", "[5789]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "784"], VE: ["58", "[24589]\\d{9}", [["(\\d{3})(\\d{7})", "$1-$2"]], "0", "0$1"], VG: ["1", "[2589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "284"], VI: ["1", "[3589]\\d{9}", [["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", null, null, null, "$1-$2-$3"]], "1", null, null, null, null, "340"], VN: ["84", "1\\d{6,9}|2\\d{9}|6\\d{6,7}|7\\d{6}|8\\d{6,8}|9\\d{8}", [["([17]99)(\\d{4})", "$1 $2", ["[17]99"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"]], ["(80)(\\d{5})", "$1 $2", ["80"]], ["(69\\d)(\\d{4,5})", "$1 $2", ["69"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2[0-35-79]"]], ["([89]\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8(?:8|9[89])|9"]], ["(1[2689]\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:[26]|8[68]|99)"]], ["(86[89])(\\d{3})(\\d{3})", "$1 $2 $3", ["86[89]"]], ["(1[89]00)(\\d{4,6})", "$1 $2", ["1[89]0", "1[89]00"], "$1"]], "0", "0$1", null, null, true], VU: ["678", "[2-57-9]\\d{4,6}", [["(\\d{3})(\\d{4})", "$1 $2", ["[579]"]]]], WF: ["681", "[4-8]\\d{5}", [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3"]]], WS: ["685", "[2-8]\\d{4,6}", [["(8\\d{2})(\\d{3,4})", "$1 $2", ["8"]], ["(7\\d)(\\d{5})", "$1 $2", ["7"]], ["(\\d{5})", "$1", ["[2-6]"]]]], YE: ["967", "[1-7]\\d{6,8}", [["([1-7])(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7[24-68]"]], ["(7\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["7[0137]"]]], "0", "0$1"], YT: ["262", "[268]\\d{8}", [["([268]\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[268]"]]], "0", null, null, null, null, "269|63"], ZA: ["27", "[1-79]\\d{8}|8\\d{4,8}", [["(860)(\\d{3})(\\d{3})", "$1 $2 $3", ["860"]], ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-79]|8(?:[0-57]|6[1-9])"]]], "0", "0$1"], ZM: ["260", "[289]\\d{8}", [["(\\d{2})(\\d{4})", "$1 $2", null, "$1"], ["([1-8])(\\d{2})(\\d{4})", "$1 $2 $3", ["[1-8]"], "$1"], ["([29]\\d)(\\d{7})", "$1 $2", ["[29]"]], ["(800)(\\d{3})(\\d{3})", "$1 $2 $3", ["800"]]], "0", "0$1"], ZW: ["263", "2(?:[0-57-9]\\d{3,8}|6(?:[14]\\d{7}|\\d{4}))|[13-69]\\d{4,9}|7\\d{8}|8[06]\\d{5,8}", [["([49])(\\d{3})(\\d{2,4})", "$1 $2 $3", ["4|9[2-9]"]], ["(7\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["7"]], ["(86\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["86[24]"]], ["([2356]\\d{2})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8|[78])|3(?:[09]8|17|3[78]|7[1569]|8[37])|5[15][78]|6(?:[29]8|37|[68][78]|75)"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|31|[56][14]|7[35]|84)|329"]], ["([1-356]\\d)(\\d{3,5})", "$1 $2", ["1[3-9]|2[02569]|3[0-69]|5[05689]|6"]], ["([235]\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[23]9|54"]], ["([25]\\d{3})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258[23]|5483"]], ["(8\\d{3})(\\d{6})", "$1 $2", ["86"]], ["(80\\d)(\\d{4})", "$1 $2", ["80"]]], "0", "0$1"], "001": ["979", "\\d{9}", [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3"]]] } };
  }
});

// node_modules/core-js/library/modules/_global.js
var require_global = __commonJS({
  "node_modules/core-js/library/modules/_global.js"(exports, module) {
    var global = module.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
    if (typeof __g == "number") __g = global;
  }
});

// node_modules/core-js/library/modules/_core.js
var require_core = __commonJS({
  "node_modules/core-js/library/modules/_core.js"(exports, module) {
    var core = module.exports = {
      version: "2.6.12"
    };
    if (typeof __e == "number") __e = core;
  }
});

// node_modules/core-js/library/modules/_a-function.js
var require_a_function = __commonJS({
  "node_modules/core-js/library/modules/_a-function.js"(exports, module) {
    module.exports = function(it) {
      if (typeof it != "function") throw TypeError(it + " is not a function!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_ctx.js
var require_ctx = __commonJS({
  "node_modules/core-js/library/modules/_ctx.js"(exports, module) {
    var aFunction = require_a_function();
    module.exports = function(fn, that, length) {
      aFunction(fn);
      if (that === void 0) return fn;
      switch (length) {
        case 1:
          return function(a) {
            return fn.call(that, a);
          };
        case 2:
          return function(a, b) {
            return fn.call(that, a, b);
          };
        case 3:
          return function(a, b, c) {
            return fn.call(that, a, b, c);
          };
      }
      return function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/library/modules/_is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/library/modules/_is-object.js"(exports, module) {
    module.exports = function(it) {
      return typeof it === "object" ? it !== null : typeof it === "function";
    };
  }
});

// node_modules/core-js/library/modules/_an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/library/modules/_an-object.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it) {
      if (!isObject(it)) throw TypeError(it + " is not an object!");
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_fails.js
var require_fails = __commonJS({
  "node_modules/core-js/library/modules/_fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
  }
});

// node_modules/core-js/library/modules/_descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/library/modules/_descriptors.js"(exports, module) {
    module.exports = !require_fails()(function() {
      return Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_dom-create.js
var require_dom_create = __commonJS({
  "node_modules/core-js/library/modules/_dom-create.js"(exports, module) {
    var isObject = require_is_object();
    var document = require_global().document;
    var is = isObject(document) && isObject(document.createElement);
    module.exports = function(it) {
      return is ? document.createElement(it) : {};
    };
  }
});

// node_modules/core-js/library/modules/_ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/library/modules/_ie8-dom-define.js"(exports, module) {
    module.exports = !require_descriptors() && !require_fails()(function() {
      return Object.defineProperty(require_dom_create()("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/library/modules/_to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/library/modules/_to-primitive.js"(exports, module) {
    var isObject = require_is_object();
    module.exports = function(it, S) {
      if (!isObject(it)) return it;
      var fn, val;
      if (S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) == "function" && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) == "function" && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/library/modules/_object-dp.js
var require_object_dp = __commonJS({
  "node_modules/core-js/library/modules/_object-dp.js"(exports) {
    var anObject = require_an_object();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var toPrimitive = require_to_primitive();
    var dP = Object.defineProperty;
    exports.f = require_descriptors() ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return dP(O, P, Attributes);
      } catch (e) {
      }
      if ("get" in Attributes || "set" in Attributes) throw TypeError("Accessors not supported!");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_property-desc.js
var require_property_desc = __commonJS({
  "node_modules/core-js/library/modules/_property-desc.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/library/modules/_hide.js
var require_hide = __commonJS({
  "node_modules/core-js/library/modules/_hide.js"(exports, module) {
    var dP = require_object_dp();
    var createDesc = require_property_desc();
    module.exports = require_descriptors() ? function(object, key, value) {
      return dP.f(object, key, createDesc(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/library/modules/_has.js
var require_has = __commonJS({
  "node_modules/core-js/library/modules/_has.js"(exports, module) {
    var hasOwnProperty = {}.hasOwnProperty;
    module.exports = function(it, key) {
      return hasOwnProperty.call(it, key);
    };
  }
});

// node_modules/core-js/library/modules/_export.js
var require_export = __commonJS({
  "node_modules/core-js/library/modules/_export.js"(exports, module) {
    var global = require_global();
    var core = require_core();
    var ctx = require_ctx();
    var hide = require_hide();
    var has = require_has();
    var PROTOTYPE = "prototype";
    var $export = function(type, name, source) {
      var IS_FORCED = type & $export.F;
      var IS_GLOBAL = type & $export.G;
      var IS_STATIC = type & $export.S;
      var IS_PROTO = type & $export.P;
      var IS_BIND = type & $export.B;
      var IS_WRAP = type & $export.W;
      var exports2 = IS_GLOBAL ? core : core[name] || (core[name] = {});
      var expProto = exports2[PROTOTYPE];
      var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
      var key, own, out;
      if (IS_GLOBAL) source = name;
      for (key in source) {
        own = !IS_FORCED && target && target[key] !== void 0;
        if (own && has(exports2, key)) continue;
        out = own ? target[key] : source[key];
        exports2[key] = IS_GLOBAL && typeof target[key] != "function" ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function(C) {
          var F = function(a, b, c) {
            if (this instanceof C) {
              switch (arguments.length) {
                case 0:
                  return new C();
                case 1:
                  return new C(a);
                case 2:
                  return new C(a, b);
              }
              return new C(a, b, c);
            }
            return C.apply(this, arguments);
          };
          F[PROTOTYPE] = C[PROTOTYPE];
          return F;
        }(out) : IS_PROTO && typeof out == "function" ? ctx(Function.call, out) : out;
        if (IS_PROTO) {
          (exports2.virtual || (exports2.virtual = {}))[key] = out;
          if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
        }
      }
    };
    $export.F = 1;
    $export.G = 2;
    $export.S = 4;
    $export.P = 8;
    $export.B = 16;
    $export.W = 32;
    $export.U = 64;
    $export.R = 128;
    module.exports = $export;
  }
});

// node_modules/core-js/library/modules/_cof.js
var require_cof = __commonJS({
  "node_modules/core-js/library/modules/_cof.js"(exports, module) {
    var toString = {}.toString;
    module.exports = function(it) {
      return toString.call(it).slice(8, -1);
    };
  }
});

// node_modules/core-js/library/modules/_iobject.js
var require_iobject = __commonJS({
  "node_modules/core-js/library/modules/_iobject.js"(exports, module) {
    var cof = require_cof();
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(it) {
      return cof(it) == "String" ? it.split("") : Object(it);
    };
  }
});

// node_modules/core-js/library/modules/_defined.js
var require_defined = __commonJS({
  "node_modules/core-js/library/modules/_defined.js"(exports, module) {
    module.exports = function(it) {
      if (it == void 0) throw TypeError("Can't call method on  " + it);
      return it;
    };
  }
});

// node_modules/core-js/library/modules/_to-iobject.js
var require_to_iobject = __commonJS({
  "node_modules/core-js/library/modules/_to-iobject.js"(exports, module) {
    var IObject = require_iobject();
    var defined = require_defined();
    module.exports = function(it) {
      return IObject(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_to-integer.js
var require_to_integer = __commonJS({
  "node_modules/core-js/library/modules/_to-integer.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = function(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
    };
  }
});

// node_modules/core-js/library/modules/_to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/library/modules/_to-length.js"(exports, module) {
    var toInteger = require_to_integer();
    var min = Math.min;
    module.exports = function(it) {
      return it > 0 ? min(toInteger(it), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/library/modules/_to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/library/modules/_to-absolute-index.js"(exports, module) {
    var toInteger = require_to_integer();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      index = toInteger(index);
      return index < 0 ? max(index + length, 0) : min(index, length);
    };
  }
});

// node_modules/core-js/library/modules/_array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/library/modules/_array-includes.js"(exports, module) {
    var toIObject = require_to_iobject();
    var toLength = require_to_length();
    var toAbsoluteIndex = require_to_absolute_index();
    module.exports = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++];
          if (value != value) return true;
        }
        else for (; length > index; index++) if (IS_INCLUDES || index in O) {
          if (O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
  }
});

// node_modules/core-js/library/modules/_library.js
var require_library = __commonJS({
  "node_modules/core-js/library/modules/_library.js"(exports, module) {
    module.exports = true;
  }
});

// node_modules/core-js/library/modules/_shared.js
var require_shared = __commonJS({
  "node_modules/core-js/library/modules/_shared.js"(exports, module) {
    var core = require_core();
    var global = require_global();
    var SHARED = "__core-js_shared__";
    var store = global[SHARED] || (global[SHARED] = {});
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: core.version,
      mode: require_library() ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
  }
});

// node_modules/core-js/library/modules/_uid.js
var require_uid = __commonJS({
  "node_modules/core-js/library/modules/_uid.js"(exports, module) {
    var id = 0;
    var px = Math.random();
    module.exports = function(key) {
      return "Symbol(".concat(key === void 0 ? "" : key, ")_", (++id + px).toString(36));
    };
  }
});

// node_modules/core-js/library/modules/_shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/library/modules/_shared-key.js"(exports, module) {
    var shared = require_shared()("keys");
    var uid = require_uid();
    module.exports = function(key) {
      return shared[key] || (shared[key] = uid(key));
    };
  }
});

// node_modules/core-js/library/modules/_object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/library/modules/_object-keys-internal.js"(exports, module) {
    var has = require_has();
    var toIObject = require_to_iobject();
    var arrayIndexOf = require_array_includes()(false);
    var IE_PROTO = require_shared_key()("IE_PROTO");
    module.exports = function(object, names) {
      var O = toIObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
      while (names.length > i) if (has(O, key = names[i++])) {
        ~arrayIndexOf(result, key) || result.push(key);
      }
      return result;
    };
  }
});

// node_modules/core-js/library/modules/_enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/library/modules/_enum-bug-keys.js"(exports, module) {
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }
});

// node_modules/core-js/library/modules/_object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/library/modules/_object-keys.js"(exports, module) {
    var $keys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return $keys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/library/modules/_object-gops.js
var require_object_gops = __commonJS({
  "node_modules/core-js/library/modules/_object-gops.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/library/modules/_object-pie.js
var require_object_pie = __commonJS({
  "node_modules/core-js/library/modules/_object-pie.js"(exports) {
    exports.f = {}.propertyIsEnumerable;
  }
});

// node_modules/core-js/library/modules/_to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/library/modules/_to-object.js"(exports, module) {
    var defined = require_defined();
    module.exports = function(it) {
      return Object(defined(it));
    };
  }
});

// node_modules/core-js/library/modules/_object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/library/modules/_object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var getKeys = require_object_keys();
    var gOPS = require_object_gops();
    var pIE = require_object_pie();
    var toObject = require_to_object();
    var IObject = require_iobject();
    var $assign = Object.assign;
    module.exports = !$assign || require_fails()(function() {
      var A = {};
      var B = {};
      var S = Symbol();
      var K = "abcdefghijklmnopqrst";
      A[S] = 7;
      K.split("").forEach(function(k) {
        B[k] = k;
      });
      return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join("") != K;
    }) ? function assign(target, source) {
      var T = toObject(target);
      var aLen = arguments.length;
      var index = 1;
      var getSymbols = gOPS.f;
      var isEnum = pIE.f;
      while (aLen > index) {
        var S = IObject(arguments[index++]);
        var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/library/modules/es6.object.assign.js
var require_es6_object_assign = __commonJS({
  "node_modules/core-js/library/modules/es6.object.assign.js"() {
    var $export = require_export();
    $export($export.S + $export.F, "Object", {
      assign: require_object_assign()
    });
  }
});

// node_modules/core-js/library/fn/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/library/fn/object/assign.js"(exports, module) {
    require_es6_object_assign();
    module.exports = require_core().Object.assign;
  }
});

// node_modules/babel-runtime/core-js/object/assign.js
var require_assign2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/assign.js"(exports, module) {
    module.exports = {
      "default": require_assign(),
      __esModule: true
    };
  }
});

// node_modules/babel-runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/babel-runtime/helpers/extends.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _assign = require_assign2();
    var _assign2 = _interopRequireDefault(_assign);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = _assign2.default || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  }
});

// node_modules/core-js/library/modules/_add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/library/modules/_add-to-unscopables.js"(exports, module) {
    module.exports = function() {
    };
  }
});

// node_modules/core-js/library/modules/_iter-step.js
var require_iter_step = __commonJS({
  "node_modules/core-js/library/modules/_iter-step.js"(exports, module) {
    module.exports = function(done, value) {
      return {
        value,
        done: !!done
      };
    };
  }
});

// node_modules/core-js/library/modules/_iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/library/modules/_iterators.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/library/modules/_redefine.js
var require_redefine = __commonJS({
  "node_modules/core-js/library/modules/_redefine.js"(exports, module) {
    module.exports = require_hide();
  }
});

// node_modules/core-js/library/modules/_object-dps.js
var require_object_dps = __commonJS({
  "node_modules/core-js/library/modules/_object-dps.js"(exports, module) {
    var dP = require_object_dp();
    var anObject = require_an_object();
    var getKeys = require_object_keys();
    module.exports = require_descriptors() ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = getKeys(Properties);
      var length = keys.length;
      var i = 0;
      var P;
      while (length > i) dP.f(O, P = keys[i++], Properties[P]);
      return O;
    };
  }
});

// node_modules/core-js/library/modules/_html.js
var require_html = __commonJS({
  "node_modules/core-js/library/modules/_html.js"(exports, module) {
    var document = require_global().document;
    module.exports = document && document.documentElement;
  }
});

// node_modules/core-js/library/modules/_object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/library/modules/_object-create.js"(exports, module) {
    var anObject = require_an_object();
    var dPs = require_object_dps();
    var enumBugKeys = require_enum_bug_keys();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var Empty = function() {
    };
    var PROTOTYPE = "prototype";
    var createDict = function() {
      var iframe = require_dom_create()("iframe");
      var i = enumBugKeys.length;
      var lt = "<";
      var gt = ">";
      var iframeDocument;
      iframe.style.display = "none";
      require_html().appendChild(iframe);
      iframe.src = "javascript:";
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(lt + "script" + gt + "document.F=Object" + lt + "/script" + gt);
      iframeDocument.close();
      createDict = iframeDocument.F;
      while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
      return createDict();
    };
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else result = createDict();
      return Properties === void 0 ? result : dPs(result, Properties);
    };
  }
});

// node_modules/core-js/library/modules/_wks.js
var require_wks = __commonJS({
  "node_modules/core-js/library/modules/_wks.js"(exports, module) {
    var store = require_shared()("wks");
    var uid = require_uid();
    var Symbol2 = require_global().Symbol;
    var USE_SYMBOL = typeof Symbol2 == "function";
    var $exports = module.exports = function(name) {
      return store[name] || (store[name] = USE_SYMBOL && Symbol2[name] || (USE_SYMBOL ? Symbol2 : uid)("Symbol." + name));
    };
    $exports.store = store;
  }
});

// node_modules/core-js/library/modules/_set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/library/modules/_set-to-string-tag.js"(exports, module) {
    var def = require_object_dp().f;
    var has = require_has();
    var TAG = require_wks()("toStringTag");
    module.exports = function(it, tag, stat) {
      if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
        configurable: true,
        value: tag
      });
    };
  }
});

// node_modules/core-js/library/modules/_iter-create.js
var require_iter_create = __commonJS({
  "node_modules/core-js/library/modules/_iter-create.js"(exports, module) {
    "use strict";
    var create = require_object_create();
    var descriptor = require_property_desc();
    var setToStringTag = require_set_to_string_tag();
    var IteratorPrototype = {};
    require_hide()(IteratorPrototype, require_wks()("iterator"), function() {
      return this;
    });
    module.exports = function(Constructor, NAME, next) {
      Constructor.prototype = create(IteratorPrototype, {
        next: descriptor(1, next)
      });
      setToStringTag(Constructor, NAME + " Iterator");
    };
  }
});

// node_modules/core-js/library/modules/_object-gpo.js
var require_object_gpo = __commonJS({
  "node_modules/core-js/library/modules/_object-gpo.js"(exports, module) {
    var has = require_has();
    var toObject = require_to_object();
    var IE_PROTO = require_shared_key()("IE_PROTO");
    var ObjectProto = Object.prototype;
    module.exports = Object.getPrototypeOf || function(O) {
      O = toObject(O);
      if (has(O, IE_PROTO)) return O[IE_PROTO];
      if (typeof O.constructor == "function" && O instanceof O.constructor) {
        return O.constructor.prototype;
      }
      return O instanceof Object ? ObjectProto : null;
    };
  }
});

// node_modules/core-js/library/modules/_iter-define.js
var require_iter_define = __commonJS({
  "node_modules/core-js/library/modules/_iter-define.js"(exports, module) {
    "use strict";
    var LIBRARY = require_library();
    var $export = require_export();
    var redefine = require_redefine();
    var hide = require_hide();
    var Iterators = require_iterators();
    var $iterCreate = require_iter_create();
    var setToStringTag = require_set_to_string_tag();
    var getPrototypeOf = require_object_gpo();
    var ITERATOR = require_wks()("iterator");
    var BUGGY = !([].keys && "next" in [].keys());
    var FF_ITERATOR = "@@iterator";
    var KEYS = "keys";
    var VALUES = "values";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
      $iterCreate(Constructor, NAME, next);
      var getMethod = function(kind) {
        if (!BUGGY && kind in proto) return proto[kind];
        switch (kind) {
          case KEYS:
            return function keys() {
              return new Constructor(this, kind);
            };
          case VALUES:
            return function values() {
              return new Constructor(this, kind);
            };
        }
        return function entries() {
          return new Constructor(this, kind);
        };
      };
      var TAG = NAME + " Iterator";
      var DEF_VALUES = DEFAULT == VALUES;
      var VALUES_BUG = false;
      var proto = Base.prototype;
      var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
      var $default = $native || getMethod(DEFAULT);
      var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod("entries") : void 0;
      var $anyNative = NAME == "Array" ? proto.entries || $native : $native;
      var methods, key, IteratorPrototype;
      if ($anyNative) {
        IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
          setToStringTag(IteratorPrototype, TAG, true);
          if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != "function") hide(IteratorPrototype, ITERATOR, returnThis);
        }
      }
      if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
      if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
        hide(proto, ITERATOR, $default);
      }
      Iterators[NAME] = $default;
      Iterators[TAG] = returnThis;
      if (DEFAULT) {
        methods = {
          values: DEF_VALUES ? $default : getMethod(VALUES),
          keys: IS_SET ? $default : getMethod(KEYS),
          entries: $entries
        };
        if (FORCED) for (key in methods) {
          if (!(key in proto)) redefine(proto, key, methods[key]);
        }
        else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
      }
      return methods;
    };
  }
});

// node_modules/core-js/library/modules/es6.array.iterator.js
var require_es6_array_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.array.iterator.js"(exports, module) {
    "use strict";
    var addToUnscopables = require_add_to_unscopables();
    var step = require_iter_step();
    var Iterators = require_iterators();
    var toIObject = require_to_iobject();
    module.exports = require_iter_define()(Array, "Array", function(iterated, kind) {
      this._t = toIObject(iterated);
      this._i = 0;
      this._k = kind;
    }, function() {
      var O = this._t;
      var kind = this._k;
      var index = this._i++;
      if (!O || index >= O.length) {
        this._t = void 0;
        return step(1);
      }
      if (kind == "keys") return step(0, index);
      if (kind == "values") return step(0, O[index]);
      return step(0, [index, O[index]]);
    }, "values");
    Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
  }
});

// node_modules/core-js/library/modules/web.dom.iterable.js
var require_web_dom_iterable = __commonJS({
  "node_modules/core-js/library/modules/web.dom.iterable.js"() {
    require_es6_array_iterator();
    var global = require_global();
    var hide = require_hide();
    var Iterators = require_iterators();
    var TO_STRING_TAG = require_wks()("toStringTag");
    var DOMIterables = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
    for (i = 0; i < DOMIterables.length; i++) {
      NAME = DOMIterables[i];
      Collection = global[NAME];
      proto = Collection && Collection.prototype;
      if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = Iterators.Array;
    }
    var NAME;
    var Collection;
    var proto;
    var i;
  }
});

// node_modules/core-js/library/modules/_string-at.js
var require_string_at = __commonJS({
  "node_modules/core-js/library/modules/_string-at.js"(exports, module) {
    var toInteger = require_to_integer();
    var defined = require_defined();
    module.exports = function(TO_STRING) {
      return function(that, pos) {
        var s = String(defined(that));
        var i = toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l) return TO_STRING ? "" : void 0;
        a = s.charCodeAt(i);
        return a < 55296 || a > 56319 || i + 1 === l || (b = s.charCodeAt(i + 1)) < 56320 || b > 57343 ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 55296 << 10) + (b - 56320) + 65536;
      };
    };
  }
});

// node_modules/core-js/library/modules/es6.string.iterator.js
var require_es6_string_iterator = __commonJS({
  "node_modules/core-js/library/modules/es6.string.iterator.js"() {
    "use strict";
    var $at = require_string_at()(true);
    require_iter_define()(String, "String", function(iterated) {
      this._t = String(iterated);
      this._i = 0;
    }, function() {
      var O = this._t;
      var index = this._i;
      var point;
      if (index >= O.length) return {
        value: void 0,
        done: true
      };
      point = $at(O, index);
      this._i += point.length;
      return {
        value: point,
        done: false
      };
    });
  }
});

// node_modules/core-js/library/modules/_classof.js
var require_classof = __commonJS({
  "node_modules/core-js/library/modules/_classof.js"(exports, module) {
    var cof = require_cof();
    var TAG = require_wks()("toStringTag");
    var ARG = cof(/* @__PURE__ */ function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (e) {
      }
    };
    module.exports = function(it) {
      var O, T, B;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (T = tryGet(O = Object(it), TAG)) == "string" ? T : ARG ? cof(O) : (B = cof(O)) == "Object" && typeof O.callee == "function" ? "Arguments" : B;
    };
  }
});

// node_modules/core-js/library/modules/core.is-iterable.js
var require_core_is_iterable = __commonJS({
  "node_modules/core-js/library/modules/core.is-iterable.js"(exports, module) {
    var classof = require_classof();
    var ITERATOR = require_wks()("iterator");
    var Iterators = require_iterators();
    module.exports = require_core().isIterable = function(it) {
      var O = Object(it);
      return O[ITERATOR] !== void 0 || "@@iterator" in O || Iterators.hasOwnProperty(classof(O));
    };
  }
});

// node_modules/core-js/library/fn/is-iterable.js
var require_is_iterable = __commonJS({
  "node_modules/core-js/library/fn/is-iterable.js"(exports, module) {
    require_web_dom_iterable();
    require_es6_string_iterator();
    module.exports = require_core_is_iterable();
  }
});

// node_modules/babel-runtime/core-js/is-iterable.js
var require_is_iterable2 = __commonJS({
  "node_modules/babel-runtime/core-js/is-iterable.js"(exports, module) {
    module.exports = {
      "default": require_is_iterable(),
      __esModule: true
    };
  }
});

// node_modules/core-js/library/modules/core.get-iterator-method.js
var require_core_get_iterator_method = __commonJS({
  "node_modules/core-js/library/modules/core.get-iterator-method.js"(exports, module) {
    var classof = require_classof();
    var ITERATOR = require_wks()("iterator");
    var Iterators = require_iterators();
    module.exports = require_core().getIteratorMethod = function(it) {
      if (it != void 0) return it[ITERATOR] || it["@@iterator"] || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/library/modules/core.get-iterator.js
var require_core_get_iterator = __commonJS({
  "node_modules/core-js/library/modules/core.get-iterator.js"(exports, module) {
    var anObject = require_an_object();
    var get = require_core_get_iterator_method();
    module.exports = require_core().getIterator = function(it) {
      var iterFn = get(it);
      if (typeof iterFn != "function") throw TypeError(it + " is not iterable!");
      return anObject(iterFn.call(it));
    };
  }
});

// node_modules/core-js/library/fn/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/library/fn/get-iterator.js"(exports, module) {
    require_web_dom_iterable();
    require_es6_string_iterator();
    module.exports = require_core_get_iterator();
  }
});

// node_modules/babel-runtime/core-js/get-iterator.js
var require_get_iterator2 = __commonJS({
  "node_modules/babel-runtime/core-js/get-iterator.js"(exports, module) {
    module.exports = {
      "default": require_get_iterator(),
      __esModule: true
    };
  }
});

// node_modules/babel-runtime/helpers/slicedToArray.js
var require_slicedToArray = __commonJS({
  "node_modules/babel-runtime/helpers/slicedToArray.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _isIterable2 = require_is_iterable2();
    var _isIterable3 = _interopRequireDefault(_isIterable2);
    var _getIterator22 = require_get_iterator2();
    var _getIterator32 = _interopRequireDefault(_getIterator22);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = (0, _getIterator32.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"]) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if ((0, _isIterable3.default)(Object(arr))) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
  }
});

// node_modules/libphonenumber-js/es6/common.js
function matches_entirely() {
  var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var regular_expression = arguments[1];
  if (typeof regular_expression === "string") {
    regular_expression = "^(?:" + regular_expression + ")$";
  }
  var matched_groups = text.match(regular_expression);
  return matched_groups !== null && matched_groups[0].length === text.length;
}
var init_common = __esm({
  "node_modules/libphonenumber-js/es6/common.js"() {
  }
});

// node_modules/libphonenumber-js/es6/metadata.js
function get_phone_code(country_metadata) {
  return country_metadata[0];
}
function get_national_number_pattern(country_metadata) {
  return country_metadata[1];
}
function get_formats(country_metadata) {
  return country_metadata[2] || [];
}
function get_national_prefix(country_metadata) {
  return country_metadata[3];
}
function get_national_prefix_formatting_rule(country_metadata) {
  return country_metadata[4];
}
function get_national_prefix_for_parsing(country_metadata) {
  var national_prefix_for_parsing = country_metadata[5];
  if (!national_prefix_for_parsing) {
    national_prefix_for_parsing = get_national_prefix(country_metadata);
  }
  return national_prefix_for_parsing;
}
function get_national_prefix_transform_rule(country_metadata) {
  return country_metadata[6];
}
function get_national_prefix_is_optional_when_formatting(country_metadata) {
  return country_metadata[7];
}
function get_leading_digits(country_metadata) {
  return country_metadata[8];
}
function get_format_pattern(format_array) {
  return format_array[0];
}
function get_format_format(format_array) {
  return format_array[1];
}
function get_format_leading_digits_patterns(format_array) {
  return format_array[2] || [];
}
function get_format_national_prefix_formatting_rule(format_array, country_metadata) {
  return format_array[3] || get_national_prefix_formatting_rule(country_metadata);
}
function get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata) {
  return format_array[4] || get_national_prefix_is_optional_when_formatting(country_metadata);
}
function get_format_national_prefix_is_mandatory_when_formatting(format_array, country_metadata) {
  var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format_array, country_metadata);
  return national_prefix_formatting_rule && // Check that national prefix formatting rule is not a dummy one.
  // Check that national prefix formatting rule actually has national prefix digit(s).
  get_format_uses_national_prefix(national_prefix_formatting_rule) && // Or maybe national prefix is optional for this format
  !get_format_national_prefix_is_optional_when_formatting(format_array, country_metadata);
}
function get_format_uses_national_prefix(national_prefix_formatting_rule) {
  return national_prefix_formatting_rule !== "$1" && // Check that national prefix formatting rule actually has national prefix digit(s)
  /\d/.test(national_prefix_formatting_rule.replace("$1", ""));
}
function get_format_international_format(format_array) {
  return format_array[5] || get_format_format(format_array);
}
function get_metadata_by_country_phone_code(country_phone_code, metadata) {
  var country_code = metadata.country_phone_code_to_countries[country_phone_code][0];
  return metadata.countries[country_code];
}
function get_types(country_metadata) {
  return country_metadata[9];
}
function get_type(country_metadata, index) {
  return get_types(country_metadata) ? get_types(country_metadata)[index] : void 0;
}
function get_type_fixed_line(country_metadata) {
  return get_type(country_metadata, 0);
}
function get_type_mobile(country_metadata) {
  return get_type(country_metadata, 1);
}
function get_type_toll_free(country_metadata) {
  return get_type(country_metadata, 2);
}
function get_type_premium_rate(country_metadata) {
  return get_type(country_metadata, 3);
}
function get_type_personal_number(country_metadata) {
  return get_type(country_metadata, 4);
}
function get_type_voice_mail(country_metadata) {
  return get_type(country_metadata, 5);
}
function get_type_uan(country_metadata) {
  return get_type(country_metadata, 6);
}
function get_type_pager(country_metadata) {
  return get_type(country_metadata, 7);
}
function get_type_voip(country_metadata) {
  return get_type(country_metadata, 8);
}
function get_type_shared_cost(country_metadata) {
  return get_type(country_metadata, 9);
}
var init_metadata = __esm({
  "node_modules/libphonenumber-js/es6/metadata.js"() {
  }
});

// node_modules/libphonenumber-js/es6/format.js
function format(arg_1, arg_2, arg_3, arg_4, arg_5) {
  var _sort_out_arguments = sort_out_arguments(arg_1, arg_2, arg_3, arg_4, arg_5), input = _sort_out_arguments.input, format_type = _sort_out_arguments.format_type, options = _sort_out_arguments.options, metadata = _sort_out_arguments.metadata;
  var country_metadata = void 0;
  if (input.country) {
    country_metadata = metadata.countries[input.country];
  }
  var _parse_phone_number_a = parse_phone_number_and_country_phone_code(input.phone, metadata), country_phone_code = _parse_phone_number_a.country_phone_code, number = _parse_phone_number_a.number;
  if (country_phone_code) {
    if (input.country && country_metadata && country_phone_code !== get_phone_code(country_metadata)) {
      return input.phone;
    }
    country_metadata = get_metadata_by_country_phone_code(country_phone_code, metadata);
  }
  if (!country_metadata) {
    return input.phone;
  }
  switch (format_type) {
    case "International":
      if (!number) {
        return "+" + get_phone_code(country_metadata);
      }
      var national_number = format_national_number(number, "International", false, country_metadata);
      var international_number = "+" + get_phone_code(country_metadata) + " " + national_number;
      if (input.ext || input.ext === 0) {
        return options.formatExtension(international_number, input.ext);
      }
      return international_number;
    case "E.164":
    case "International_plaintext":
      return "+" + get_phone_code(country_metadata) + input.phone;
    case "RFC3966":
      return "+" + get_phone_code(country_metadata) + input.phone + (input.ext || input.ext === 0 ? ";ext=" + input.ext : "");
    case "National":
      if (!number) {
        return "";
      }
      var _national_number = format_national_number(number, "National", false, country_metadata);
      if (input.ext || input.ext === 0) {
        return options.formatExtension(_national_number, input.ext);
      }
      return _national_number;
  }
}
function format_national_number_using_format(number, format3, international, enforce_national_prefix, country_metadata) {
  var format_pattern_matcher = new RegExp(get_format_pattern(format3));
  var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format3, country_metadata);
  var national_prefix_may_be_omitted = !national_prefix_formatting_rule || national_prefix_formatting_rule && get_format_national_prefix_is_optional_when_formatting(format3, country_metadata) && !enforce_national_prefix;
  if (!international && !national_prefix_may_be_omitted) {
    return number.replace(format_pattern_matcher, get_format_format(format3).replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule));
  }
  var formatted_number = number.replace(format_pattern_matcher, international ? get_format_international_format(format3) : get_format_format(format3));
  if (international) {
    return local_to_international_style(formatted_number);
  }
  return formatted_number;
}
function format_national_number(number, format_as, enforce_national_prefix, country_metadata) {
  var format3 = choose_format_for_number(get_formats(country_metadata), number);
  if (!format3) {
    return number;
  }
  return format_national_number_using_format(number, format3, format_as === "International", enforce_national_prefix, country_metadata);
}
function choose_format_for_number(available_formats, national_number) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = void 0;
  try {
    for (var _iterator = (0, import_get_iterator.default)(available_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _format = _step.value;
      if (get_format_leading_digits_patterns(_format).length > 0) {
        var last_leading_digits_pattern = get_format_leading_digits_patterns(_format)[get_format_leading_digits_patterns(_format).length - 1];
        if (national_number.search(last_leading_digits_pattern) !== 0) {
          continue;
        }
      }
      if (matches_entirely(national_number, new RegExp(get_format_pattern(_format)))) {
        return _format;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function local_to_international_style(local) {
  return local.replace(new RegExp("[" + VALID_PUNCTUATION + "]+", "g"), " ").trim();
}
function sort_out_arguments() {
  var arg_1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var arg_2 = arguments[1];
  var arg_3 = arguments[2];
  var arg_4 = arguments[3];
  var arg_5 = arguments[4];
  var input = void 0;
  var format_type = void 0;
  var options = void 0;
  var metadata = void 0;
  if (typeof arg_1 === "string") {
    if (typeof arg_3 === "string") {
      input = {
        phone: arg_1,
        country: arg_2
      };
      format_type = arg_3;
      if (arg_5) {
        options = arg_4;
        metadata = arg_5;
      } else {
        metadata = arg_4;
      }
    } else {
      input = {
        phone: arg_1
      };
      if (typeof arg_2 !== "string") {
        throw new Error("Format type argument not passed for `format()`");
      }
      format_type = arg_2;
      if (arg_4) {
        options = arg_3;
        metadata = arg_4;
      } else {
        metadata = arg_3;
      }
    }
  } else {
    input = arg_1;
    format_type = arg_2;
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      metadata = arg_3;
    }
  }
  if (!metadata) {
    throw new Error("Metadata is required");
  }
  switch (format_type) {
    case "International":
    case "E.164":
    case "International_plaintext":
    case "National":
    case "RFC3966":
      break;
    default:
      throw new Error('Unknown format type argument passed to "format()": "' + format_type + '"');
  }
  if (options) {
    options = (0, import_extends.default)({}, default_options, options);
  } else {
    options = default_options;
  }
  return {
    input,
    format_type,
    options,
    metadata
  };
}
var import_extends, import_get_iterator, default_options, FIRST_GROUP_PATTERN;
var init_format = __esm({
  "node_modules/libphonenumber-js/es6/format.js"() {
    import_extends = __toESM(require_extends());
    import_get_iterator = __toESM(require_get_iterator2());
    init_common();
    init_parse();
    init_metadata();
    default_options = {
      formatExtension: function formatExtension(number, extension) {
        return number + " ext. " + extension;
      }
      // Formats a phone number
      //
      // Example use cases:
      //
      // ```js
      // format('8005553535', 'RU', 'International')
      // format('8005553535', 'RU', 'International', metadata)
      // format({ phone: '8005553535', country: 'RU' }, 'International')
      // format({ phone: '8005553535', country: 'RU' }, 'International', metadata)
      // format('+78005553535', 'National')
      // format('+78005553535', 'National', metadata)
      // ```
      //
    };
    FIRST_GROUP_PATTERN = /(\$\d)/;
  }
});

// node_modules/libphonenumber-js/es6/types.js
function get_number_type(arg_1, arg_2, arg_3) {
  var _sort_out_arguments = sort_out_arguments2(arg_1, arg_2, arg_3), input = _sort_out_arguments.input, metadata = _sort_out_arguments.metadata;
  if (!input) {
    return;
  }
  if (!input.country) {
    return;
  }
  var national_number = input.phone;
  var country_metadata = metadata.countries[input.country];
  if (!is_of_type(national_number, get_national_number_pattern(country_metadata))) {
    return;
  }
  if (is_of_type(national_number, get_type_premium_rate(country_metadata))) {
    return "PREMIUM_RATE";
  }
  if (is_of_type(national_number, get_type_toll_free(country_metadata))) {
    return "TOLL_FREE";
  }
  if (is_of_type(national_number, get_type_shared_cost(country_metadata))) {
    return "SHARED_COST";
  }
  if (is_of_type(national_number, get_type_voip(country_metadata))) {
    return "VOIP";
  }
  if (is_of_type(national_number, get_type_personal_number(country_metadata))) {
    return "PERSONAL_NUMBER";
  }
  if (is_of_type(national_number, get_type_pager(country_metadata))) {
    return "PAGER";
  }
  if (is_of_type(national_number, get_type_uan(country_metadata))) {
    return "UAN";
  }
  if (is_of_type(national_number, get_type_voice_mail(country_metadata))) {
    return "VOICEMAIL";
  }
  if (is_of_type(national_number, get_type_fixed_line(country_metadata))) {
    if (!get_type_mobile(country_metadata)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (is_of_type(national_number, get_type_mobile(country_metadata))) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  if (is_of_type(national_number, get_type_mobile(country_metadata))) {
    return "MOBILE";
  }
}
function is_of_type(national_number, type) {
  return matches_entirely(national_number, type);
}
function sort_out_arguments2(arg_1, arg_2, arg_3) {
  var input = void 0;
  var metadata = void 0;
  if (typeof arg_1 === "number") {
    arg_1 = String(arg_1);
  }
  if (typeof arg_1 === "string") {
    if (typeof arg_2 === "string" || arg_2 === void 0) {
      metadata = arg_3;
      if (is_viable_phone_number(arg_1)) {
        input = parse(arg_1, arg_2, metadata);
      }
    } else {
      metadata = arg_2;
      if (is_viable_phone_number(arg_1)) {
        input = parse(arg_1, metadata);
      }
    }
  } else {
    if (arg_1 && arg_1.phone && is_viable_phone_number(arg_1.phone)) {
      input = arg_1;
    }
    metadata = arg_2;
  }
  if (!metadata || !metadata.countries) {
    throw new Error("Metadata is required");
  }
  return {
    input,
    metadata
  };
}
var init_types = __esm({
  "node_modules/libphonenumber-js/es6/types.js"() {
    init_parse();
    init_common();
    init_metadata();
  }
});

// node_modules/libphonenumber-js/es6/parse.js
function parse(arg_1, arg_2, arg_3) {
  var _sort_out_arguments = sort_out_arguments3(arg_1, arg_2, arg_3), text = _sort_out_arguments.text, options = _sort_out_arguments.options, metadata = _sort_out_arguments.metadata;
  if (options.country.default && !metadata.countries[options.country.default]) {
    throw new Error("Unknown country code: " + options.country.default);
  }
  if (options.country.restrict && !metadata.countries[options.country.restrict]) {
    throw new Error("Unknown country code: " + options.country.restrict);
  }
  var formatted_phone_number = void 0;
  var extension = void 0;
  if (text && text.indexOf("tel:") === 0) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = void 0;
    try {
      for (var _iterator = (0, import_get_iterator2.default)(text.split(";")), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var part = _step.value;
        var _part$split = part.split(":"), _part$split2 = (0, import_slicedToArray.default)(_part$split, 2), name = _part$split2[0], value = _part$split2[1];
        switch (name) {
          case "tel":
            formatted_phone_number = value;
            break;
          case "ext":
            extension = value;
            break;
          case "phone-context":
            if (value[0] === "+") {
              formatted_phone_number = value + formatted_phone_number;
            }
            break;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    formatted_phone_number = extract_formatted_phone_number(text);
  }
  if (!is_viable_phone_number(formatted_phone_number)) {
    return {};
  }
  var with_extension_stripped = strip_extension(formatted_phone_number);
  if (with_extension_stripped.extension) {
    formatted_phone_number = with_extension_stripped.number, extension = with_extension_stripped.extension;
  }
  var _parse_phone_number_a = parse_phone_number_and_country_phone_code(formatted_phone_number, metadata), country_phone_code = _parse_phone_number_a.country_phone_code, number = _parse_phone_number_a.number;
  if (!number) {
    return {};
  }
  var country = void 0;
  var country_metadata = void 0;
  var is_international = false;
  if (country_phone_code) {
    is_international = true;
    if (options.country.restrict && country_phone_code !== get_phone_code(metadata.countries[options.country.restrict])) {
      return {};
    }
    country_metadata = get_metadata_by_country_phone_code(country_phone_code, metadata);
  } else if (options.country.restrict || options.country.default) {
    country = options.country.restrict || options.country.default;
    country_metadata = metadata.countries[country];
    number = normalize(formatted_phone_number);
  }
  if (!country_metadata) {
    return {};
  }
  var national_number = number;
  if (!is_international) {
    national_number = strip_national_prefix(number, country_metadata);
  }
  var did_have_national_prefix = national_number !== number;
  if (!country) {
    country = find_country_code(country_phone_code, national_number, metadata);
    if (!country) {
      return {};
    }
    country_metadata = metadata.countries[country];
  }
  if (national_number.length > MAX_LENGTH_FOR_NSN) {
    return {};
  }
  var national_number_rule = new RegExp(get_national_number_pattern(country_metadata));
  if (!matches_entirely(national_number, national_number_rule)) {
    return {};
  }
  var result = {
    country,
    phone: national_number
  };
  if (extension) {
    result.ext = extension;
  }
  return result;
}
function normalize(number) {
  return replace_characters(number, DIGIT_MAPPINGS);
}
function replace_characters(text, replacements) {
  var replaced = "";
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = void 0;
  try {
    for (var _iterator2 = (0, import_get_iterator2.default)(text), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var character = _step2.value;
      var replacement = replacements[character.toUpperCase()];
      if (replacement !== void 0) {
        replaced += replacement;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
  return replaced;
}
function is_viable_phone_number(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && matches_entirely(number, VALID_PHONE_NUMBER_PATTERN);
}
function extract_formatted_phone_number(text) {
  if (!text || text.length > MAX_INPUT_STRING_LENGTH) {
    return "";
  }
  var starts_at = text.search(PHONE_NUMBER_START_PATTERN);
  if (starts_at < 0) {
    return "";
  }
  return text.slice(starts_at).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parse_phone_number(number) {
  if (!number) {
    return "";
  }
  var is_international = LEADING_PLUS_CHARS_PATTERN.test(number);
  number = normalize(number);
  if (is_international) {
    return "+" + number;
  }
  return number;
}
function parse_phone_number_and_country_phone_code(number, metadata) {
  number = parse_phone_number(number);
  if (!number) {
    return {};
  }
  if (number[0] !== "+") {
    return {
      number
    };
  }
  number = number.slice(1);
  if (number[0] === "0") {
    return {};
  }
  var i = 1;
  while (i <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var country_phone_code = number.slice(0, i);
    if (metadata.country_phone_code_to_countries[country_phone_code]) {
      return {
        country_phone_code,
        number: number.slice(i)
      };
    }
    i++;
  }
  return {};
}
function strip_national_prefix(number, country_metadata) {
  var national_prefix_for_parsing = get_national_prefix_for_parsing(country_metadata);
  if (!number || !national_prefix_for_parsing) {
    return number;
  }
  var national_prefix_pattern = new RegExp("^(?:" + national_prefix_for_parsing + ")");
  var national_prefix_matcher = national_prefix_pattern.exec(number);
  if (!national_prefix_matcher) {
    return number;
  }
  var national_significant_number = void 0;
  var any_groups_were_captured = national_prefix_matcher[national_prefix_matcher.length - 1];
  var national_prefix_transform_rule = get_national_prefix_transform_rule(country_metadata);
  if (national_prefix_transform_rule && any_groups_were_captured) {
    national_significant_number = number.replace(national_prefix_pattern, national_prefix_transform_rule);
  } else {
    national_significant_number = number.slice(national_prefix_matcher[0].length);
  }
  var national_number_rule = new RegExp(get_national_number_pattern(country_metadata));
  if (matches_entirely(number, national_number_rule) && !matches_entirely(national_significant_number, national_number_rule)) {
    return number;
  }
  return national_significant_number;
}
function find_country_code(country_phone_code, national_phone_number, metadata) {
  var possible_countries = metadata.country_phone_code_to_countries[country_phone_code];
  if (possible_countries.length === 1) {
    return possible_countries[0];
  }
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = void 0;
  try {
    for (var _iterator3 = (0, import_get_iterator2.default)(possible_countries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var country_code = _step3.value;
      var country = metadata.countries[country_code];
      if (get_leading_digits(country)) {
        if (national_phone_number && national_phone_number.search(get_leading_digits(country)) === 0) {
          return country_code;
        }
      } else if (get_number_type({
        phone: national_phone_number,
        country: country_code
      }, metadata)) {
        return country_code;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}
function sort_out_arguments3(arg_1, arg_2, arg_3) {
  var text = void 0;
  var options = void 0;
  var metadata = void 0;
  if (typeof arg_1 === "number") {
    arg_1 = String(arg_1);
  }
  if (typeof arg_1 === "string") {
    text = arg_1;
  }
  if (typeof arg_2 === "string") {
    options = {
      country: {
        restrict: arg_2
      }
    };
    metadata = arg_3;
  } else {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  }
  if (!metadata || !metadata.countries) {
    throw new Error("Metadata is required");
  }
  if (options) {
    options = (0, import_extends2.default)({}, default_options2, options);
  } else {
    options = default_options2;
  }
  return {
    text,
    options,
    metadata
  };
}
function strip_extension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var number_without_extension = number.slice(0, start);
  if (!is_viable_phone_number(number_without_extension)) {
    return {};
  }
  var matches = number.match(EXTN_PATTERN);
  var i = 1;
  while (i < matches.length) {
    if (matches[i] != null && matches[i].length > 0) {
      return {
        number: number_without_extension,
        extension: matches[i]
      };
    }
    i++;
  }
}
var import_extends2, import_slicedToArray, import_get_iterator2, MAX_LENGTH_COUNTRY_CODE, MIN_LENGTH_FOR_NSN, MAX_LENGTH_FOR_NSN, MAX_INPUT_STRING_LENGTH, PLUS_CHARS, VALID_DIGITS, DASHES, SLASHES, DOTS, WHITESPACE, BRACKETS, TILDES, VALID_PUNCTUATION, CAPTURING_EXTN_DIGITS, RFC3966_EXTN_PREFIX, EXTN_PATTERNS_FOR_PARSING, EXTN_PATTERN, MIN_LENGTH_PHONE_NUMBER_PATTERN, VALID_PHONE_NUMBER, VALID_PHONE_NUMBER_PATTERN, PHONE_NUMBER_START_PATTERN, AFTER_PHONE_NUMBER_END_PATTERN, LEADING_PLUS_CHARS_PATTERN, DIGIT_MAPPINGS, default_options2;
var init_parse = __esm({
  "node_modules/libphonenumber-js/es6/parse.js"() {
    import_extends2 = __toESM(require_extends());
    import_slicedToArray = __toESM(require_slicedToArray());
    import_get_iterator2 = __toESM(require_get_iterator2());
    init_common();
    init_metadata();
    init_format();
    init_types();
    MAX_LENGTH_COUNTRY_CODE = 3;
    MIN_LENGTH_FOR_NSN = 2;
    MAX_LENGTH_FOR_NSN = 17;
    MAX_INPUT_STRING_LENGTH = 250;
    PLUS_CHARS = "+＋";
    VALID_DIGITS = "0-9０-９٠-٩۰-۹";
    DASHES = "-‐-―−ー－";
    SLASHES = "／/";
    DOTS = "．.";
    WHITESPACE = "  ­​⁠　";
    BRACKETS = "()（）［］\\[\\]";
    TILDES = "~⁓∼～";
    VALID_PUNCTUATION = "" + DASHES + SLASHES + DOTS + WHITESPACE + BRACKETS + TILDES;
    CAPTURING_EXTN_DIGITS = "([" + VALID_DIGITS + "]{1,7})";
    RFC3966_EXTN_PREFIX = ";ext=";
    EXTN_PATTERNS_FOR_PARSING = RFC3966_EXTN_PREFIX + CAPTURING_EXTN_DIGITS + "|[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|[;,xｘ#＃~～]|int|anexo|ｉｎｔ)[:\\.．]?[  \\t,-]*" + CAPTURING_EXTN_DIGITS + "#?|[- ]+([" + VALID_DIGITS + "]{1,5})#";
    EXTN_PATTERN = new RegExp("(?:" + EXTN_PATTERNS_FOR_PARSING + ")$", "i");
    MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
    VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
    VALID_PHONE_NUMBER_PATTERN = new RegExp(
      // Either a short two-digit-only phone number
      "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER + // Phone number extensions
      "(?:" + EXTN_PATTERNS_FOR_PARSING + ")?$",
      "i"
    );
    PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
    AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "]+$");
    LEADING_PLUS_CHARS_PATTERN = new RegExp("^[" + PLUS_CHARS + "]+");
    DIGIT_MAPPINGS = {
      "0": "0",
      "1": "1",
      "2": "2",
      "3": "3",
      "4": "4",
      "5": "5",
      "6": "6",
      "7": "7",
      "8": "8",
      "9": "9",
      "０": "0",
      // Fullwidth digit 0
      "１": "1",
      // Fullwidth digit 1
      "２": "2",
      // Fullwidth digit 2
      "３": "3",
      // Fullwidth digit 3
      "４": "4",
      // Fullwidth digit 4
      "５": "5",
      // Fullwidth digit 5
      "６": "6",
      // Fullwidth digit 6
      "７": "7",
      // Fullwidth digit 7
      "８": "8",
      // Fullwidth digit 8
      "９": "9",
      // Fullwidth digit 9
      "٠": "0",
      // Arabic-indic digit 0
      "١": "1",
      // Arabic-indic digit 1
      "٢": "2",
      // Arabic-indic digit 2
      "٣": "3",
      // Arabic-indic digit 3
      "٤": "4",
      // Arabic-indic digit 4
      "٥": "5",
      // Arabic-indic digit 5
      "٦": "6",
      // Arabic-indic digit 6
      "٧": "7",
      // Arabic-indic digit 7
      "٨": "8",
      // Arabic-indic digit 8
      "٩": "9",
      // Arabic-indic digit 9
      "۰": "0",
      // Eastern-Arabic digit 0
      "۱": "1",
      // Eastern-Arabic digit 1
      "۲": "2",
      // Eastern-Arabic digit 2
      "۳": "3",
      // Eastern-Arabic digit 3
      "۴": "4",
      // Eastern-Arabic digit 4
      "۵": "5",
      // Eastern-Arabic digit 5
      "۶": "6",
      // Eastern-Arabic digit 6
      "۷": "7",
      // Eastern-Arabic digit 7
      "۸": "8",
      // Eastern-Arabic digit 8
      "۹": "9"
      // Eastern-Arabic digit 9
    };
    default_options2 = {
      country: {}
      // `options`:
      //  {
      //    country:
      //    {
      //      restrict - (a two-letter country code)
      //                 the phone number must be in this country
      //
      //      default - (a two-letter country code)
      //                default country to use for phone number parsing and validation
      //                (if no country code could be derived from the phone number)
      //    }
      //  }
      //
      // Returns `{ country, number }`
      //
      // Example use cases:
      //
      // ```js
      // parse('8 (800) 555-35-35', 'RU')
      // parse('8 (800) 555-35-35', 'RU', metadata)
      // parse('8 (800) 555-35-35', { country: { default: 'RU' } })
      // parse('8 (800) 555-35-35', { country: { default: 'RU' } }, metadata)
      // parse('+7 800 555 35 35')
      // parse('+7 800 555 35 35', metadata)
      // ```
      //
    };
  }
});

// node_modules/libphonenumber-js/es6/validate.js
function is_valid(arg_1, arg_2, arg_3) {
  var _sort_out_arguments = sort_out_arguments2(arg_1, arg_2, arg_3), input = _sort_out_arguments.input, metadata = _sort_out_arguments.metadata;
  if (!input) {
    return false;
  }
  if (!input.country) {
    return false;
  }
  var country_metadata = metadata.countries[input.country];
  if (get_types(country_metadata)) {
    if (!get_number_type(input, metadata)) {
      return false;
    }
  }
  return true;
}
var init_validate = __esm({
  "node_modules/libphonenumber-js/es6/validate.js"() {
    init_parse();
    init_types();
    init_metadata();
  }
});

// node_modules/babel-runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/babel-runtime/helpers/classCallCheck.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }
});

// node_modules/core-js/library/modules/es6.object.define-property.js
var require_es6_object_define_property = __commonJS({
  "node_modules/core-js/library/modules/es6.object.define-property.js"() {
    var $export = require_export();
    $export($export.S + $export.F * !require_descriptors(), "Object", {
      defineProperty: require_object_dp().f
    });
  }
});

// node_modules/core-js/library/fn/object/define-property.js
var require_define_property = __commonJS({
  "node_modules/core-js/library/fn/object/define-property.js"(exports, module) {
    require_es6_object_define_property();
    var $Object = require_core().Object;
    module.exports = function defineProperty(it, key, desc) {
      return $Object.defineProperty(it, key, desc);
    };
  }
});

// node_modules/babel-runtime/core-js/object/define-property.js
var require_define_property2 = __commonJS({
  "node_modules/babel-runtime/core-js/object/define-property.js"(exports, module) {
    module.exports = {
      "default": require_define_property(),
      __esModule: true
    };
  }
});

// node_modules/babel-runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/babel-runtime/helpers/createClass.js"(exports) {
    "use strict";
    exports.__esModule = true;
    var _defineProperty = require_define_property2();
    var _defineProperty2 = _interopRequireDefault(_defineProperty);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    exports.default = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          (0, _defineProperty2.default)(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
  }
});

// node_modules/libphonenumber-js/es6/AsYouType.js
function close_dangling_braces(template, cut_before) {
  var retained_template = template.slice(0, cut_before);
  var opening_braces = count_occurences("(", retained_template);
  var closing_braces = count_occurences(")", retained_template);
  var dangling_braces = opening_braces - closing_braces;
  while (dangling_braces > 0 && cut_before < template.length) {
    if (template[cut_before] === ")") {
      dangling_braces--;
    }
    cut_before++;
  }
  return template.slice(0, cut_before);
}
function count_occurences(symbol, string) {
  var count = 0;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = void 0;
  try {
    for (var _iterator4 = (0, import_get_iterator3.default)(string), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var character = _step4.value;
      if (character === symbol) {
        count++;
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
  return count;
}
function repeat(string, times) {
  if (times < 1) {
    return "";
  }
  var result = "";
  while (times > 1) {
    if (times & 1) {
      result += string;
    }
    times >>= 1;
    string += string;
  }
  return result + string;
}
var import_get_iterator3, import_classCallCheck, import_createClass, DUMMY_DIGIT, DUMMY_DIGIT_MATCHER, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH, LONGEST_DUMMY_PHONE_NUMBER, DIGIT_PLACEHOLDER, DIGIT_PLACEHOLDER_MATCHER, DIGIT_PLACEHOLDER_MATCHER_GLOBAL, CHARACTER_CLASS_PATTERN, STANDALONE_DIGIT_PATTERN, ELIGIBLE_FORMAT_PATTERN, MIN_LEADING_DIGITS_LENGTH, VALID_INCOMPLETE_PHONE_NUMBER, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN, as_you_type, AsYouType_default;
var init_AsYouType = __esm({
  "node_modules/libphonenumber-js/es6/AsYouType.js"() {
    import_get_iterator3 = __toESM(require_get_iterator2());
    import_classCallCheck = __toESM(require_classCallCheck());
    import_createClass = __toESM(require_createClass());
    init_metadata();
    init_parse();
    init_format();
    init_common();
    DUMMY_DIGIT = "9";
    DUMMY_DIGIT_MATCHER = new RegExp(DUMMY_DIGIT, "g");
    LONGEST_NATIONAL_PHONE_NUMBER_LENGTH = 15;
    LONGEST_DUMMY_PHONE_NUMBER = repeat(DUMMY_DIGIT, LONGEST_NATIONAL_PHONE_NUMBER_LENGTH);
    DIGIT_PLACEHOLDER = "x";
    DIGIT_PLACEHOLDER_MATCHER = new RegExp(DIGIT_PLACEHOLDER);
    DIGIT_PLACEHOLDER_MATCHER_GLOBAL = new RegExp(DIGIT_PLACEHOLDER, "g");
    CHARACTER_CLASS_PATTERN = /\[([^\[\]])*\]/g;
    STANDALONE_DIGIT_PATTERN = /\d(?=[^,}][^,}])/g;
    ELIGIBLE_FORMAT_PATTERN = new RegExp("^[" + VALID_PUNCTUATION + "]*(\\$\\d[" + VALID_PUNCTUATION + "]*)+$");
    MIN_LEADING_DIGITS_LENGTH = 3;
    VALID_INCOMPLETE_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
    VALID_INCOMPLETE_PHONE_NUMBER_PATTERN = new RegExp("^" + VALID_INCOMPLETE_PHONE_NUMBER + "$", "i");
    as_you_type = function() {
      function as_you_type3(country_code, metadata) {
        (0, import_classCallCheck.default)(this, as_you_type3);
        if (!metadata || !metadata.countries) {
          throw new Error("Metadata is required");
        }
        if (country_code && metadata.countries[country_code]) {
          this.default_country = country_code;
        }
        this.metadata = metadata;
        this.reset();
      }
      (0, import_createClass.default)(as_you_type3, [{
        key: "input",
        value: function input(text) {
          var extracted_number = extract_formatted_phone_number(text);
          if (!extracted_number) {
            if (text && text.indexOf("+") >= 0) {
              extracted_number = "+";
            }
          }
          if (!matches_entirely(extracted_number, VALID_INCOMPLETE_PHONE_NUMBER_PATTERN)) {
            return this.current_output;
          }
          return this.process_input(parse_phone_number(extracted_number));
        }
      }, {
        key: "process_input",
        value: function process_input(input) {
          if (input[0] === "+") {
            if (!this.parsed_input) {
              this.parsed_input += "+";
              this.reset_countriness();
            }
            input = input.slice(1);
          }
          this.parsed_input += input;
          this.national_number += input;
          if (this.is_international()) {
            if (!this.country_phone_code) {
              if (!this.extract_country_phone_code()) {
                return this.parsed_input;
              }
              this.initialize_phone_number_formats_for_this_country_phone_code();
              this.reset_format();
              this.determine_the_country();
            } else if (!this.country) {
              this.determine_the_country();
            }
          } else {
            var previous_national_prefix = this.national_prefix;
            this.national_number = this.national_prefix + this.national_number;
            this.extract_national_prefix();
            if (this.national_prefix !== previous_national_prefix) {
              this.matching_formats = this.available_formats;
              this.reset_format();
            }
          }
          if (!this.should_format()) {
            return this.format_as_non_formatted_number();
          }
          this.match_formats_by_leading_digits();
          var formatted_national_phone_number = this.format_national_phone_number(input);
          if (formatted_national_phone_number) {
            return this.full_phone_number(formatted_national_phone_number);
          }
          return this.parsed_input;
        }
      }, {
        key: "format_as_non_formatted_number",
        value: function format_as_non_formatted_number() {
          if (this.is_international() && this.country_phone_code) {
            if (this.national_number) {
              this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + " " + repeat(DIGIT_PLACEHOLDER, this.national_number.length);
              return "+" + this.country_phone_code + " " + this.national_number;
            }
            return "+" + this.country_phone_code;
          }
          return this.parsed_input;
        }
      }, {
        key: "format_national_phone_number",
        value: function format_national_phone_number(next_digits) {
          var national_number_formatted_with_previous_format = void 0;
          if (this.chosen_format) {
            national_number_formatted_with_previous_format = this.format_next_national_number_digits(next_digits);
          }
          var formatted_number = this.attempt_to_format_complete_phone_number();
          if (formatted_number) {
            return formatted_number;
          }
          if (this.choose_another_format()) {
            return this.reformat_national_number();
          }
          return national_number_formatted_with_previous_format;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.parsed_input = "";
          this.current_output = "";
          this.national_prefix = "";
          this.national_number = "";
          this.reset_countriness();
          this.reset_format();
          return this;
        }
      }, {
        key: "reset_country",
        value: function reset_country() {
          if (this.default_country && !this.is_international()) {
            this.country = this.default_country;
          } else {
            this.country = void 0;
          }
        }
      }, {
        key: "reset_countriness",
        value: function reset_countriness() {
          this.reset_country();
          if (this.default_country && !this.is_international()) {
            this.country_metadata = this.metadata.countries[this.default_country];
            this.country_phone_code = get_phone_code(this.country_metadata);
            this.initialize_phone_number_formats_for_this_country_phone_code();
          } else {
            this.country_metadata = void 0;
            this.country_phone_code = void 0;
            this.available_formats = [];
            this.matching_formats = this.available_formats;
          }
        }
      }, {
        key: "reset_format",
        value: function reset_format() {
          this.chosen_format = void 0;
          this.template = void 0;
          this.partially_populated_template = void 0;
          this.last_match_position = -1;
        }
        // Format each digit of national phone number (so far)
        // using the newly selected phone number pattern.
      }, {
        key: "reformat_national_number",
        value: function reformat_national_number() {
          return this.format_next_national_number_digits(this.national_number);
        }
      }, {
        key: "initialize_phone_number_formats_for_this_country_phone_code",
        value: function initialize_phone_number_formats_for_this_country_phone_code() {
          this.available_formats = get_formats(this.country_metadata).filter(function(format3) {
            return ELIGIBLE_FORMAT_PATTERN.test(get_format_international_format(format3));
          });
          this.matching_formats = this.available_formats;
        }
      }, {
        key: "match_formats_by_leading_digits",
        value: function match_formats_by_leading_digits() {
          var leading_digits = this.national_number;
          var index_of_leading_digits_pattern = leading_digits.length - MIN_LEADING_DIGITS_LENGTH;
          if (index_of_leading_digits_pattern < 0) {
            index_of_leading_digits_pattern = 0;
          }
          this.matching_formats = this.matching_formats.filter(function(format3) {
            var leading_digits_pattern_count = get_format_leading_digits_patterns(format3).length;
            if (leading_digits_pattern_count === 0) {
              return true;
            }
            var leading_digits_pattern_index = Math.min(index_of_leading_digits_pattern, leading_digits_pattern_count - 1);
            var leading_digits_pattern = get_format_leading_digits_patterns(format3)[leading_digits_pattern_index];
            return new RegExp("^(" + leading_digits_pattern + ")").test(leading_digits);
          });
          if (this.chosen_format && this.matching_formats.indexOf(this.chosen_format) === -1) {
            this.reset_format();
          }
        }
      }, {
        key: "should_format",
        value: function should_format() {
          return this.national_number >= MIN_LEADING_DIGITS_LENGTH;
        }
        // Check to see if there is an exact pattern match for these digits. If so, we
        // should use this instead of any other formatting template whose
        // leadingDigitsPattern also matches the input.
      }, {
        key: "attempt_to_format_complete_phone_number",
        value: function attempt_to_format_complete_phone_number() {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = void 0;
          try {
            for (var _iterator = (0, import_get_iterator3.default)(this.matching_formats), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var format3 = _step.value;
              var matcher = new RegExp("^(?:" + get_format_pattern(format3) + ")$");
              if (!matcher.test(this.national_number)) {
                continue;
              }
              if (!this.validate_format(format3)) {
                continue;
              }
              this.reset_format();
              this.chosen_format = format3;
              var formatted_number = format_national_number_using_format(this.national_number, format3, this.is_international(), this.national_prefix.length > 0, this.country_metadata);
              if (this.create_formatting_template(format3)) {
                this.reformat_national_number();
              } else {
                var full_number = this.full_phone_number(formatted_number);
                this.template = full_number.replace(/[\d\+]/g, DIGIT_PLACEHOLDER);
                this.partially_populated_template = full_number;
              }
              return formatted_number;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        // Prepends `+CountryCode` in case of an international phone number
      }, {
        key: "full_phone_number",
        value: function full_phone_number(formatted_national_number) {
          if (this.is_international()) {
            return "+" + this.country_phone_code + " " + formatted_national_number;
          }
          return formatted_national_number;
        }
        // Extracts the country calling code from the beginning
        // of the entered `national_number` (so far),
        // and places the remaining input into the `national_number`.
      }, {
        key: "extract_country_phone_code",
        value: function extract_country_phone_code() {
          if (!this.national_number) {
            return;
          }
          var _parse_phone_number_a = parse_phone_number_and_country_phone_code(this.parsed_input, this.metadata), country_phone_code = _parse_phone_number_a.country_phone_code, number = _parse_phone_number_a.number;
          if (!country_phone_code) {
            return;
          }
          this.country_phone_code = country_phone_code;
          this.national_number = number;
          return this.country_metadata = get_metadata_by_country_phone_code(country_phone_code, this.metadata);
        }
      }, {
        key: "extract_national_prefix",
        value: function extract_national_prefix() {
          this.national_prefix = "";
          if (!this.country_metadata) {
            return;
          }
          var national_number = strip_national_prefix(this.national_number, this.country_metadata);
          if (national_number !== this.national_number) {
            this.national_prefix = this.national_number.slice(0, this.national_number.length - national_number.length);
            this.national_number = national_number;
          }
          return this.national_prefix;
        }
      }, {
        key: "choose_another_format",
        value: function choose_another_format() {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = void 0;
          try {
            for (var _iterator2 = (0, import_get_iterator3.default)(this.matching_formats), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var format3 = _step2.value;
              if (this.chosen_format === format3) {
                return;
              }
              if (!this.validate_format(format3)) {
                continue;
              }
              if (!this.create_formatting_template(format3)) {
                continue;
              }
              this.chosen_format = format3;
              this.last_match_position = -1;
              return true;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
          this.reset_country();
          this.reset_format();
        }
      }, {
        key: "validate_format",
        value: function validate_format(format3) {
          if (!this.is_international() && !this.national_prefix && get_format_national_prefix_is_mandatory_when_formatting(format3, this.country_metadata)) {
            return;
          }
          return true;
        }
      }, {
        key: "create_formatting_template",
        value: function create_formatting_template(format3) {
          if (get_format_pattern(format3).indexOf("|") >= 0) {
            return;
          }
          var template = this.get_template_for_phone_number_format_pattern(format3);
          if (!template) {
            return;
          }
          this.partially_populated_template = template;
          if (this.is_international()) {
            this.template = DIGIT_PLACEHOLDER + repeat(DIGIT_PLACEHOLDER, this.country_phone_code.length) + " " + template;
          } else {
            this.template = template.replace(/\d/g, DIGIT_PLACEHOLDER);
          }
          return this.template;
        }
        // Generates formatting template for a phone number format
      }, {
        key: "get_template_for_phone_number_format_pattern",
        value: function get_template_for_phone_number_format_pattern(format3) {
          var national_prefix_formatting_rule = get_format_national_prefix_formatting_rule(format3, this.country_metadata);
          var number_pattern = get_format_pattern(format3).replace(CHARACTER_CLASS_PATTERN, "\\d").replace(STANDALONE_DIGIT_PATTERN, "\\d");
          var dummy_phone_number_matching_format_pattern = LONGEST_DUMMY_PHONE_NUMBER.match(number_pattern)[0];
          if (this.national_number.length > dummy_phone_number_matching_format_pattern.length) {
            return;
          }
          var number_format = this.get_format_format(format3, national_prefix_formatting_rule);
          var strict_pattern = new RegExp("^" + number_pattern + "$");
          var national_number_dummy_digits = this.national_number.replace(/\d/g, DUMMY_DIGIT);
          if (strict_pattern.test(national_number_dummy_digits)) {
            dummy_phone_number_matching_format_pattern = national_number_dummy_digits;
          }
          return dummy_phone_number_matching_format_pattern.replace(new RegExp(number_pattern), number_format).replace(DUMMY_DIGIT_MATCHER, DIGIT_PLACEHOLDER);
        }
      }, {
        key: "format_next_national_number_digits",
        value: function format_next_national_number_digits(digits) {
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = void 0;
          try {
            for (var _iterator3 = (0, import_get_iterator3.default)(digits), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var digit = _step3.value;
              if (this.partially_populated_template.slice(this.last_match_position + 1).search(DIGIT_PLACEHOLDER_MATCHER) === -1) {
                this.chosen_format = void 0;
                this.template = void 0;
                this.partially_populated_template = void 0;
                return;
              }
              this.last_match_position = this.partially_populated_template.search(DIGIT_PLACEHOLDER_MATCHER);
              this.partially_populated_template = this.partially_populated_template.replace(DIGIT_PLACEHOLDER_MATCHER, digit);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
          return close_dangling_braces(this.partially_populated_template, this.last_match_position + 1).replace(DIGIT_PLACEHOLDER_MATCHER_GLOBAL, " ");
        }
      }, {
        key: "is_international",
        value: function is_international() {
          return this.parsed_input && this.parsed_input[0] === "+";
        }
      }, {
        key: "get_format_format",
        value: function get_format_format2(format3, national_prefix_formatting_rule) {
          var number_format = this.is_international() ? get_format_international_format(format3) : get_format_format(format3);
          if (national_prefix_formatting_rule) {
            if (this.national_prefix || !get_format_uses_national_prefix(national_prefix_formatting_rule)) {
              number_format = number_format.replace(FIRST_GROUP_PATTERN, national_prefix_formatting_rule);
            }
          }
          if (this.is_international()) {
            return local_to_international_style(number_format);
          }
          return number_format;
        }
        // Determines the country of the phone number
        // entered so far based on the country phone code
        // and the national phone number.
      }, {
        key: "determine_the_country",
        value: function determine_the_country() {
          this.country = find_country_code(this.country_phone_code, this.national_number, this.metadata);
        }
      }]);
      return as_you_type3;
    }();
    AsYouType_default = as_you_type;
  }
});

// node_modules/libphonenumber-js/index.es6.js
var index_es6_exports = {};
__export(index_es6_exports, {
  AsYouType: () => AsYouType,
  AsYouTypeCustom: () => AsYouType_default,
  DIGITS: () => DIGIT_MAPPINGS,
  DIGIT_PLACEHOLDER: () => DIGIT_PLACEHOLDER,
  asYouType: () => asYouType,
  asYouTypeCustom: () => AsYouType_default,
  as_you_type: () => as_you_type2,
  format: () => format2,
  formatCustom: () => format,
  getNumberType: () => getNumberType,
  getNumberTypeCustom: () => get_number_type,
  getPhoneCode: () => getPhoneCode,
  getPhoneCodeCustom: () => getPhoneCodeCustom,
  get_number_type: () => get_number_type2,
  isValidNumber: () => isValidNumber,
  isValidNumberCustom: () => is_valid,
  is_valid_number: () => is_valid_number,
  parse: () => parse2,
  parseCustom: () => parse
});
function parse2() {
  var parameters = Array.prototype.slice.call(arguments);
  parameters.push(metadata_min_default);
  return parse.apply(this, parameters);
}
function format2() {
  var parameters = Array.prototype.slice.call(arguments);
  parameters.push(metadata_min_default);
  return format.apply(this, parameters);
}
function getNumberType() {
  var parameters = Array.prototype.slice.call(arguments);
  parameters.push(metadata_min_default);
  return get_number_type.apply(this, parameters);
}
function get_number_type2() {
  return getNumberType.apply(this, arguments);
}
function isValidNumber() {
  var parameters = Array.prototype.slice.call(arguments);
  parameters.push(metadata_min_default);
  return is_valid.apply(this, parameters);
}
function is_valid_number() {
  return isValidNumber.apply(this, arguments);
}
function AsYouType(country) {
  AsYouType_default.call(this, country, metadata_min_default);
}
function as_you_type2(country) {
  AsYouType_default.call(this, country, metadata_min_default);
}
function asYouType(country) {
  AsYouType_default.call(this, country, metadata_min_default);
}
function getPhoneCode(country) {
  return getPhoneCodeCustom(country, metadata_min_default);
}
function getPhoneCodeCustom(country, metadata) {
  if (!metadata.countries[country]) {
    throw new Error('Unknown country: "' + country + '"');
  }
  return get_phone_code(metadata.countries[country]);
}
var init_index_es6 = __esm({
  "node_modules/libphonenumber-js/index.es6.js"() {
    init_metadata_min();
    init_parse();
    init_types();
    init_format();
    init_validate();
    init_AsYouType();
    init_metadata();
    init_parse();
    init_format();
    init_validate();
    init_types();
    init_AsYouType();
    AsYouType.prototype = Object.create(AsYouType_default.prototype, {});
    AsYouType.prototype.constructor = AsYouType;
    as_you_type2.prototype = Object.create(AsYouType_default.prototype, {});
    as_you_type2.prototype.constructor = as_you_type2;
    asYouType.prototype = Object.create(AsYouType_default.prototype, {});
    asYouType.prototype.constructor = asYouType;
  }
});

// node_modules/ng2-validation/dist/phone/validator.js
var require_validator21 = __commonJS({
  "node_modules/ng2-validation/dist/phone/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var libphonenumber_js_1 = (init_index_es6(), __toCommonJS(index_es6_exports));
    var lang_1 = require_lang();
    exports.phone = function(country) {
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return libphonenumber_js_1.isValidNumber({
          phone: v,
          country
        }) ? null : {
          phone: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/phone/index.js
var require_phone = __commonJS({
  "node_modules/ng2-validation/dist/phone/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive21());
    __export2(require_validator21());
  }
});

// node_modules/ng2-validation/dist/range/directive.js
var require_directive22 = __commonJS({
  "node_modules/ng2-validation/dist/range/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_range();
    var RANGE_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return RangeValidator;
      }),
      multi: true
    };
    var RangeValidator = function() {
      function RangeValidator2() {
      }
      RangeValidator2.prototype.ngOnInit = function() {
        this.validator = _1.range(this.range);
      };
      RangeValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "range") {
            this.validator = _1.range(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      RangeValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      RangeValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return RangeValidator2;
    }();
    RangeValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[range][formControlName],[range][formControl],[range][ngModel]",
        providers: [RANGE_VALIDATOR]
      }]
    }];
    RangeValidator.ctorParameters = function() {
      return [];
    };
    RangeValidator.propDecorators = {
      "range": [{
        type: core_1.Input
      }]
    };
    exports.RangeValidator = RangeValidator;
  }
});

// node_modules/ng2-validation/dist/range/validator.js
var require_validator22 = __commonJS({
  "node_modules/ng2-validation/dist/range/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.range = function(range) {
      return function(control) {
        if (!lang_1.isPresent(range)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = +control.value;
        return v >= range[0] && v <= range[1] ? null : {
          actualValue: v,
          requiredValue: range,
          range: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/range/index.js
var require_range = __commonJS({
  "node_modules/ng2-validation/dist/range/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive22());
    __export2(require_validator22());
  }
});

// node_modules/ng2-validation/dist/range-length/directive.js
var require_directive23 = __commonJS({
  "node_modules/ng2-validation/dist/range-length/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_range_length();
    var RANGE_LENGTH_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return RangeLengthValidator;
      }),
      multi: true
    };
    var RangeLengthValidator = function() {
      function RangeLengthValidator2() {
      }
      RangeLengthValidator2.prototype.ngOnInit = function() {
        this.validator = _1.rangeLength(this.rangeLength);
      };
      RangeLengthValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "rangeLength") {
            this.validator = _1.rangeLength(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      RangeLengthValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      RangeLengthValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return RangeLengthValidator2;
    }();
    RangeLengthValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]",
        providers: [RANGE_LENGTH_VALIDATOR]
      }]
    }];
    RangeLengthValidator.ctorParameters = function() {
      return [];
    };
    RangeLengthValidator.propDecorators = {
      "rangeLength": [{
        type: core_1.Input
      }]
    };
    exports.RangeLengthValidator = RangeLengthValidator;
  }
});

// node_modules/ng2-validation/dist/range-length/validator.js
var require_validator23 = __commonJS({
  "node_modules/ng2-validation/dist/range-length/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.rangeLength = function(rangeLength) {
      return function(control) {
        if (!lang_1.isPresent(rangeLength)) return null;
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {
          rangeLength: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/range-length/index.js
var require_range_length = __commonJS({
  "node_modules/ng2-validation/dist/range-length/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive23());
    __export2(require_validator23());
  }
});

// node_modules/ng2-validation/dist/url/directive.js
var require_directive24 = __commonJS({
  "node_modules/ng2-validation/dist/url/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_url();
    var URL_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return UrlValidator;
      }),
      multi: true
    };
    var UrlValidator = function() {
      function UrlValidator2() {
      }
      UrlValidator2.prototype.validate = function(c) {
        return _1.url(c);
      };
      return UrlValidator2;
    }();
    UrlValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[url][formControlName],[url][formControl],[url][ngModel]",
        providers: [URL_VALIDATOR]
      }]
    }];
    UrlValidator.ctorParameters = function() {
      return [];
    };
    exports.UrlValidator = UrlValidator;
  }
});

// node_modules/ng2-validation/dist/url/validator.js
var require_validator24 = __commonJS({
  "node_modules/ng2-validation/dist/url/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    exports.url = function(control) {
      if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
      var v = control.value;
      return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
        "url": true
      };
    };
  }
});

// node_modules/ng2-validation/dist/url/index.js
var require_url = __commonJS({
  "node_modules/ng2-validation/dist/url/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive24());
    __export2(require_validator24());
  }
});

// node_modules/ng2-validation/dist/uuid/directive.js
var require_directive25 = __commonJS({
  "node_modules/ng2-validation/dist/uuid/directive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var _1 = require_uuid();
    var UUID_VALIDATOR = {
      provide: forms_1.NG_VALIDATORS,
      useExisting: core_1.forwardRef(function() {
        return UUIDValidator;
      }),
      multi: true
    };
    var UUIDValidator = function() {
      function UUIDValidator2() {
      }
      UUIDValidator2.prototype.ngOnInit = function() {
        this.validator = _1.uuid(this.uuid);
      };
      UUIDValidator2.prototype.ngOnChanges = function(changes) {
        for (var key in changes) {
          if (key === "uuid") {
            this.validator = _1.uuid(changes[key].currentValue);
            if (this.onChange) this.onChange();
          }
        }
      };
      UUIDValidator2.prototype.validate = function(c) {
        return this.validator(c);
      };
      UUIDValidator2.prototype.registerOnValidatorChange = function(fn) {
        this.onChange = fn;
      };
      return UUIDValidator2;
    }();
    UUIDValidator.decorators = [{
      type: core_1.Directive,
      args: [{
        selector: "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]",
        providers: [UUID_VALIDATOR]
      }]
    }];
    UUIDValidator.ctorParameters = function() {
      return [];
    };
    UUIDValidator.propDecorators = {
      "uuid": [{
        type: core_1.Input
      }]
    };
    exports.UUIDValidator = UUIDValidator;
  }
});

// node_modules/ng2-validation/dist/uuid/validator.js
var require_validator25 = __commonJS({
  "node_modules/ng2-validation/dist/uuid/validator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var forms_1 = (init_forms(), __toCommonJS(forms_exports));
    var lang_1 = require_lang();
    var uuids = {
      "3": /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
      "4": /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      "5": /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
      "all": /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
    };
    exports.uuid = function(version) {
      return function(control) {
        if (lang_1.isPresent(forms_1.Validators.required(control))) return null;
        var v = control.value;
        var pattern = uuids[version] || uuids.all;
        return new RegExp(pattern).test(v) ? null : {
          uuid: true
        };
      };
    };
  }
});

// node_modules/ng2-validation/dist/uuid/index.js
var require_uuid = __commonJS({
  "node_modules/ng2-validation/dist/uuid/index.js"(exports) {
    "use strict";
    function __export2(m) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    __export2(require_directive25());
    __export2(require_validator25());
  }
});

// node_modules/ng2-validation/dist/index.js
var require_dist = __commonJS({
  "node_modules/ng2-validation/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var core_1 = (init_core(), __toCommonJS(core_exports));
    var base64_1 = require_base64();
    var credit_card_1 = require_credit_card();
    var date_1 = require_date();
    var date_ios_1 = require_date_ios();
    var digits_1 = require_digits();
    var email_1 = require_email();
    var equal_1 = require_equal();
    var equal_to_1 = require_equal_to();
    var greater_than_1 = require_greater_than();
    var greater_than_equal_1 = require_greater_than_equal();
    var json_1 = require_json();
    var less_than_1 = require_less_than();
    var less_than_equal_1 = require_less_than_equal();
    var max_1 = require_max();
    var max_date_1 = require_max_date();
    var min_1 = require_min();
    var min_date_1 = require_min_date();
    var not_equal_1 = require_not_equal();
    var not_equal_to_1 = require_not_equal_to();
    var number_1 = require_number();
    var phone_1 = require_phone();
    var range_1 = require_range();
    var range_length_1 = require_range_length();
    var url_1 = require_url();
    var uuid_1 = require_uuid();
    exports.CustomValidators = {
      base64: base64_1.base64,
      creditCard: credit_card_1.creditCard,
      date: date_1.date,
      dateISO: date_ios_1.dateISO,
      digits: digits_1.digits,
      email: email_1.email,
      equal: equal_1.equal,
      equalTo: equal_to_1.equalTo,
      gt: greater_than_1.gt,
      gte: greater_than_equal_1.gte,
      json: json_1.json,
      lt: less_than_1.lt,
      lte: less_than_equal_1.lte,
      max: max_1.max,
      maxDate: max_date_1.maxDate,
      min: min_1.min,
      minDate: min_date_1.minDate,
      notEqual: not_equal_1.notEqual,
      notEqualTo: not_equal_to_1.notEqualTo,
      number: number_1.number,
      phone: phone_1.phone,
      range: range_1.range,
      rangeLength: range_length_1.rangeLength,
      url: url_1.url,
      uuid: uuid_1.uuid
    };
    var CUSTOM_FORM_DIRECTIVES = [base64_1.Base64Validator, credit_card_1.CreditCardValidator, date_1.DateValidator, date_ios_1.DateISOValidator, digits_1.DigitsValidator, email_1.EmailValidator, equal_1.EqualValidator, equal_to_1.EqualToValidator, greater_than_1.GreaterThanValidator, greater_than_equal_1.GreaterThanEqualValidator, json_1.JSONValidator, less_than_1.LessThanValidator, less_than_equal_1.LessThanEqualValidator, max_1.MaxValidator, max_date_1.MaxDateValidator, min_1.MinValidator, min_date_1.MinDateValidator, not_equal_1.NotEqualValidator, not_equal_to_1.NotEqualToValidator, number_1.NumberValidator, phone_1.PhoneValidator, range_1.RangeValidator, range_length_1.RangeLengthValidator, url_1.UrlValidator, uuid_1.UUIDValidator];
    var CustomFormsModule = /* @__PURE__ */ function() {
      function CustomFormsModule2() {
      }
      return CustomFormsModule2;
    }();
    CustomFormsModule.decorators = [{
      type: core_1.NgModule,
      args: [{
        declarations: [CUSTOM_FORM_DIRECTIVES],
        exports: [CUSTOM_FORM_DIRECTIVES]
      }]
    }];
    CustomFormsModule.ctorParameters = function() {
      return [];
    };
    exports.CustomFormsModule = CustomFormsModule;
  }
});
export default require_dist();
//# sourceMappingURL=ng2-validation.js.map
