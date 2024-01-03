"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cat_1 = require("../enums/cat");
const typeorm_1 = require("typeorm");
let Cat = class Cat {
};
Cat.count = 0;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: 'int',
        name: 'id',
        comment: 'Cat id',
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        comment: "Cat's name",
        length: 100,
    }),
    tslib_1.__metadata("design:type", String)
], Cat.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'color',
        comment: "Cat's color",
        enum: cat_1.ECatColor
    }),
    tslib_1.__metadata("design:type", String)
], Cat.prototype, "color", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'age',
        comment: "Cat's age",
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "age", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'weith_in_kg',
        comment: "Cat's weith in Kilogramas",
    }),
    tslib_1.__metadata("design:type", Number)
], Cat.prototype, "weith", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
    }),
    tslib_1.__metadata("design:type", Date)
], Cat.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
    }),
    tslib_1.__metadata("design:type", Date)
], Cat.prototype, "updatedAt", void 0);
Cat = tslib_1.__decorate([
    (0, typeorm_1.Entity)('cat', { schema: 'public' })
], Cat);
exports.default = Cat;
//# sourceMappingURL=cat.js.map