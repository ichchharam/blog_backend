"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
console.log(process.env.MONGO_URL);
exports.default = (0, config_1.registerAs)('config', () => ({
    mongoURL: process.env.MONGO_URL,
}));
//# sourceMappingURL=keys.js.map