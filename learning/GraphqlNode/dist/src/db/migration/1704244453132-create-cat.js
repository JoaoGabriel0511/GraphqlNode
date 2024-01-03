"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCat1704244453132 = void 0;
const tslib_1 = require("tslib");
class CreateCat1704244453132 {
    constructor() {
        this.name = 'CreateCat1704244453132';
    }
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."cat_color_enum" AS ENUM('Laranja', 'Preto', 'Branco', 'Cinza')`);
            yield queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "color" "public"."cat_color_enum" NOT NULL, "age" integer NOT NULL, "weith_in_kg" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")); COMMENT ON COLUMN "cat"."id" IS 'Cat id'; COMMENT ON COLUMN "cat"."name" IS 'Cat''s name'; COMMENT ON COLUMN "cat"."color" IS 'Cat''s color'; COMMENT ON COLUMN "cat"."age" IS 'Cat''s age'; COMMENT ON COLUMN "cat"."weith_in_kg" IS 'Cat''s weith in Kilogramas'`);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "cat"`);
            yield queryRunner.query(`DROP TYPE "public"."cat_color_enum"`);
        });
    }
}
exports.CreateCat1704244453132 = CreateCat1704244453132;
//# sourceMappingURL=1704244453132-create-cat.js.map