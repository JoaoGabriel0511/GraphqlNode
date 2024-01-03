"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat1704243914819 = void 0;
const tslib_1 = require("tslib");
class Cat1704243914819 {
    constructor() {
        this.name = 'Cat1704243914819';
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")); COMMENT ON COLUMN "test"."id" IS 'ID'`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "test"`);
        });
    }
}
exports.Cat1704243914819 = Cat1704243914819;
//# sourceMappingURL=1704243914819-cat.js.map