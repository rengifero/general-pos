/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const config_1 = __webpack_require__(5);
const app_controller_1 = __webpack_require__(6);
const app_service_1 = __webpack_require__(7);
const graphql_1 = __webpack_require__(8);
const apollo_1 = __webpack_require__(9);
const path_1 = __webpack_require__(10);
const products_module_1 = __webpack_require__(11);
const prisma_module_1 = __webpack_require__(24);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            // 1. Configurar variables de entorno globalmente
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'backend/dist/schema.gql'),
                sortSchema: true,
                introspection: true,
            }),
            products_module_1.ProductsModule,
            prisma_module_1.PrismaModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(7);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello mundo cruel API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const products_service_1 = __webpack_require__(12);
const products_resolver_1 = __webpack_require__(20);
const prisma_module_1 = __webpack_require__(24);
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [products_resolver_1.ProductsResolver, products_service_1.ProductsService,],
        imports: [prisma_module_1.PrismaModule],
    })
], ProductsModule);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(13);
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProductInput) {
        return 'This action adds a new product';
    }
    findAll() {
        return this.prisma.product.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} product`;
    }
    update(id, updateProductInput) {
        return `This action updates a #${id} product`;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], ProductsService);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(14);
const adapter_mariadb_1 = __webpack_require__(19);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    constructor() {
        // Ensure process.env.DATABASE_URL is a non-empty string
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined');
        }
        // Pass the adapter instance to the super constructor
        const adapter = new adapter_mariadb_1.PrismaMariaDb(connectionString);
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(app) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], PrismaService);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 * If you're looking for something you can import in the client-side of your application, please refer to the `browser.ts` file instead.
 *
 * 🟢 You can import this file directly.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Prisma = exports.PrismaClient = exports.$Enums = void 0;
const tslib_1 = __webpack_require__(4);
const $Class = tslib_1.__importStar(__webpack_require__(15));
const Prisma = tslib_1.__importStar(__webpack_require__(17));
exports.Prisma = Prisma;
exports.$Enums = tslib_1.__importStar(__webpack_require__(18));
tslib_1.__exportStar(__webpack_require__(18), exports);
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
exports.PrismaClient = $Class.getPrismaClientClass();


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * Please import the `PrismaClient` class from the `client.ts` file instead.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPrismaClientClass = getPrismaClientClass;
const tslib_1 = __webpack_require__(4);
const runtime = tslib_1.__importStar(__webpack_require__(16));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.3.0",
    "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
    "activeProvider": "mysql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider     = \"mysql\"\n  relationMode = \"prisma\"\n}\n\nmodel Product {\n  id            String   @id @default(uuid())\n  name          String\n  description   String\n  price         Float\n  image         String\n  stripePriceId String\n  isFeatured    Boolean  @default(false)\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n}\n\nmodel Order {\n  id          String      @id @default(uuid())\n  userId      String?\n  status      OrderStatus @default(PENDING)\n  totalAmount Float\n  paymentId   String?\n  createdAt   DateTime    @default(now())\n  updatedAt   DateTime    @updatedAt\n}\n\nmodel OrderItem {\n  id        String @id @default(uuid())\n  orderId   String\n  productId String\n  quantity  Int\n  price     Float\n\n  @@index([orderId], map: \"OrderItem_orderId_fkey\")\n  @@index([productId], map: \"OrderItem_productId_fkey\")\n}\n\nenum OrderStatus {\n  PENDING\n  STARTED_DELIVERY\n  DELIVERED\n  RECHAZADO\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Product\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"stripePriceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Order\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"paymentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"OrderItem\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"productId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Float\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 25, 23));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 26, 23)),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 27, 23));
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/client");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
 * WARNING: This is an internal file that is subject to change!
 *
 * 🛑 Under no circumstances should you import this file directly! 🛑
 *
 * All exports from this file are wrapped under a `Prisma` namespace object in the client.ts file.
 * While this enables partial backward compatibility, it is not part of the stable public API.
 *
 * If you are looking for your Models, Enums, and Input Types, please import them from the respective
 * model files in the `model` directory!
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defineExtension = exports.OrderItemOrderByRelevanceFieldEnum = exports.OrderOrderByRelevanceFieldEnum = exports.NullsOrder = exports.ProductOrderByRelevanceFieldEnum = exports.SortOrder = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.ProductScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const tslib_1 = __webpack_require__(4);
const runtime = tslib_1.__importStar(__webpack_require__(16));
/**
 * Prisma Errors
 */
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
/**
 * Decimal.js
 */
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
/**
 * Prisma Client JS version: 7.3.0
 * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
 */
exports.prismaVersion = {
    client: "7.3.0",
    engine: "9d6ad21cbbceab97458517b147a6a09ff43aa735"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
exports.DbNull = runtime.DbNull;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
exports.JsonNull = runtime.JsonNull;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Product: 'Product',
    Order: 'Order',
    OrderItem: 'OrderItem'
};
/**
 * Enums
 */
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    image: 'image',
    stripePriceId: 'stripePriceId',
    isFeatured: 'isFeatured',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    status: 'status',
    totalAmount: 'totalAmount',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.ProductOrderByRelevanceFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    stripePriceId: 'stripePriceId'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.OrderOrderByRelevanceFieldEnum = {
    id: 'id',
    userId: 'userId',
    paymentId: 'paymentId'
};
exports.OrderItemOrderByRelevanceFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId'
};
exports.defineExtension = runtime.Extensions.defineExtension;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


/* !!! This is code generated by Prisma. Do not edit directly. !!! */
/* eslint-disable */
// biome-ignore-all lint: generated file
// @ts-nocheck 
/*
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrderStatus = void 0;
exports.OrderStatus = {
    PENDING: 'PENDING',
    STARTED_DELIVERY: 'STARTED_DELIVERY',
    DELIVERED: 'DELIVERED',
    RECHAZADO: 'RECHAZADO'
};


/***/ }),
/* 19 */
/***/ ((module) => {

module.exports = require("@prisma/adapter-mariadb");

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsResolver = void 0;
const tslib_1 = __webpack_require__(4);
const graphql_1 = __webpack_require__(8);
const products_service_1 = __webpack_require__(12);
const product_entity_1 = __webpack_require__(21);
const create_product_input_1 = __webpack_require__(22);
const update_product_input_1 = __webpack_require__(23);
let ProductsResolver = class ProductsResolver {
    constructor(productsService) {
        this.productsService = productsService;
    }
    createProduct(createProductInput) {
        return this.productsService.create(createProductInput);
    }
    findAll() {
        return this.productsService.findAll();
    }
    findOne(id) {
        return this.productsService.findOne(id);
    }
    updateProduct(updateProductInput) {
        return this.productsService.update(updateProductInput.id, updateProductInput);
    }
    removeProduct(id) {
        return this.productsService.remove(id);
    }
};
exports.ProductsResolver = ProductsResolver;
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    tslib_1.__param(0, (0, graphql_1.Args)('createProductInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_product_input_1.CreateProductInput !== "undefined" && create_product_input_1.CreateProductInput) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "createProduct", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: 'products' }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findAll", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => product_entity_1.Product, { name: 'product' }),
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findOne", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    tslib_1.__param(0, (0, graphql_1.Args)('updateProductInput')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof update_product_input_1.UpdateProductInput !== "undefined" && update_product_input_1.UpdateProductInput) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "updateProduct", null);
tslib_1.__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.Product),
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "removeProduct", null);
exports.ProductsResolver = ProductsResolver = tslib_1.__decorate([
    (0, graphql_1.Resolver)(() => product_entity_1.Product),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof products_service_1.ProductsService !== "undefined" && products_service_1.ProductsService) === "function" ? _a : Object])
], ProductsResolver);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Product = void 0;
const tslib_1 = __webpack_require__(4);
const graphql_1 = __webpack_require__(8);
let Product = class Product {
};
exports.Product = Product;
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'Example field (placeholder)' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "id", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'nombre' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "name", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'description' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "description", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Float, { description: 'price' }),
    tslib_1.__metadata("design:type", Number)
], Product.prototype, "price", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'image' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "image", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => String, { description: 'strip price id' }),
    tslib_1.__metadata("design:type", String)
], Product.prototype, "stripePriceId", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(() => Boolean),
    tslib_1.__metadata("design:type", Boolean)
], Product.prototype, "isFeatured", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Product.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, graphql_1.Field)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Product.prototype, "updatedAt", void 0);
exports.Product = Product = tslib_1.__decorate([
    (0, graphql_1.ObjectType)()
], Product);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductInput = void 0;
const tslib_1 = __webpack_require__(4);
const graphql_1 = __webpack_require__(8);
let CreateProductInput = class CreateProductInput {
};
exports.CreateProductInput = CreateProductInput;
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { description: 'Example field (placeholder)' }),
    tslib_1.__metadata("design:type", Number)
], CreateProductInput.prototype, "exampleField", void 0);
exports.CreateProductInput = CreateProductInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], CreateProductInput);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductInput = void 0;
const tslib_1 = __webpack_require__(4);
const create_product_input_1 = __webpack_require__(22);
const graphql_1 = __webpack_require__(8);
let UpdateProductInput = class UpdateProductInput extends (0, graphql_1.PartialType)(create_product_input_1.CreateProductInput) {
};
exports.UpdateProductInput = UpdateProductInput;
tslib_1.__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    tslib_1.__metadata("design:type", Number)
], UpdateProductInput.prototype, "id", void 0);
exports.UpdateProductInput = UpdateProductInput = tslib_1.__decorate([
    (0, graphql_1.InputType)()
], UpdateProductInput);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const prisma_service_1 = __webpack_require__(13);
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService]
    })
], PrismaModule);


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),
/* 26 */
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/query_compiler_fast_bg.mysql.js");

/***/ }),
/* 27 */
/***/ ((module) => {

module.exports = require("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.js");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Configure CORS, specifying allowed headers
    app.enableCors({
        origin: 'http://localhost:3000', // Replace with your client's origin (e.g., your frontend URL)
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type, X-Apollo-Operation-Name, Apollo-Require-Preflight', // Include necessary headers
        credentials: true, // If you need to handle cookies/credentials
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map