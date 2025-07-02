"use strict";
class IPAddressValidator {
    constructor(queryIP) {
        this.queryIP = queryIP;
    }
    validateIPAddress() {
        if (this.isValidIPv4()) {
            return "IPv4";
        }
        else if (this.isValidIPv6()) {
            return "IPv6";
        }
        else {
            return "Neither";
        }
    }
    isValidIPv4() {
        const parts = this.queryIP.split('.');
        if (parts.length !== 4)
            return false;
        for (const part of parts) {
            if (!/^\d+$/.test(part))
                return false;
            if (part.length > 1 && part[0] === '0')
                return false;
            const num = Number(part);
            if (num < 0 || num > 255)
                return false;
        }
        return true;
    }
    isValidIPv6() {
        const parts = this.queryIP.split(':');
        if (parts.length !== 8)
            return false;
        const hexRegex = /^[0-9a-fA-F]{1,4}$/;
        for (const part of parts) {
            if (!hexRegex.test(part))
                return false;
        }
        return true;
    }
}
const ip1 = new IPAddressValidator("192.168.1.1");
console.log(ip1.validateIPAddress());
