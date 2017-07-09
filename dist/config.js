"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    server: {
        port: 3000
    },
    database: {
        path: '~/mongodb',
        host: 'localhost',
        name: 'myapp',
        port: 42069,
        getUrl: function () {
            return `mongodb://${this.host}:${this.port}/${this.name}`;
        }
    }
};
