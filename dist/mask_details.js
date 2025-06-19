"use strict";
class PersonalInfoMasker {
    maskPII(s) {
        if (s.includes('@')) {
            return this.maskEmail(s);
        }
        else {
            return this.maskPhone(s);
        }
    }
    maskEmail(email) {
        const [name, domain] = email.toLowerCase().split('@');
        const maskedName = name[0] + '*****' + name[name.length - 1];
        return `${maskedName}@${domain}`;
    }
    maskPhone(phone) {
        const digits = phone.replace(/\D/g, '');
        const local = digits.slice(-10);
        const countryCodeLength = digits.length - 10;
        let countryPrefix = '';
        if (countryCodeLength > 0) {
            countryPrefix = '+' + '*'.repeat(countryCodeLength) + '-';
        }
        return `${countryPrefix}***-***-${local.slice(-4)}`;
    }
}
const masker = new PersonalInfoMasker();
console.log(masker.maskPII("LeetCode@LeetCode.com"));
console.log(masker.maskPII("AB@qq.com"));
console.log(masker.maskPII("1(234)567-890"));
console.log(masker.maskPII("+86-(10)12345678"));
