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
const prisma_module_1 = __webpack_require__(20);
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
                csrfPrevention: false,
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
const products_resolver_1 = __webpack_require__(16);
const prisma_module_1 = __webpack_require__(20);
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
        return this.prisma.product.findFirst({
            where: {
                id,
            },
        });
    }
    async searchProducts(term) {
        const lowercaseTerm = term.toLowerCase();
        return this.prisma.product.findMany({
            where: {
                OR: [
                    { name: { contains: lowercaseTerm, } },
                    { description: { contains: lowercaseTerm, } },
                ],
            },
        });
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


var PrismaService_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const adapter_mariadb_1 = __webpack_require__(14);
const client_1 = __webpack_require__(15);
let PrismaService = PrismaService_1 = class PrismaService extends client_1.PrismaClient {
    constructor() {
        // Ensure process.env.DATABASE_URL is a non-empty string
        const connectionString = process.env.DATABASE_URL;
        if (!connectionString) {
            throw new Error('DATABASE_URL is not defined');
        }
        /* const adapter = new PrismaMariaDb({
          //connectionLimit: Number(configService.getOrThrow('DB_CONNECTION_LIMIT')),
          database: configService.getOrThrow('DB_DATABASE'),
          host: configService.getOrThrow('DB_HOST'),
          password: configService.getOrThrow('DB_PASSWORD'),
          user: configService.getOrThrow('DB_USER'),
          // Prisma adapter logger configuration
          logger: {
            network: (info) => {
              this.logger.log('PrismaAdapterNetwork', info);
            },
            query: (info) => {
              this.logger.log('PrismaAdapterQuery', info);
            },
            error: (error) => {
              this.logger.error('PrismaAdapterError', error);
            },
            warning: (info) => {
              this.logger.warn('PrismaAdapterWarning', info);
            },
          },
        }); */
        const adapter = new adapter_mariadb_1.PrismaMariaDb(connectionString);
        // Prisma client initialization with adapter and full log levels
        super({
            adapter,
            log: ['query', 'info', 'warn', 'error'],
        });
        // Built-in NestJS logger instance for PrismaService
        this.logger = new common_1.Logger(PrismaService_1.name);
    }
    // Connect to database when module is initialized
    async onModuleInit() {
        await this.$connect();
        this.logger.log('Database connection succeeded');
    }
    // Disconnect from database when module is destroyed
    async onModuleDestroy() {
        await this.$disconnect();
        this.logger.log('Database connection disconnected');
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = PrismaService_1 = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], PrismaService);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@prisma/adapter-mariadb");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProductsResolver = void 0;
const tslib_1 = __webpack_require__(4);
const graphql_1 = __webpack_require__(8);
const products_service_1 = __webpack_require__(12);
const product_entity_1 = __webpack_require__(17);
const create_product_input_1 = __webpack_require__(18);
const update_product_input_1 = __webpack_require__(19);
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
    searchProducts(term) {
        return this.productsService.searchProducts(term);
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
    tslib_1.__param(0, (0, graphql_1.Args)('id', { type: () => String })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "findOne", null);
tslib_1.__decorate([
    (0, graphql_1.Query)(() => [product_entity_1.Product], { name: 'searchProducts' }),
    tslib_1.__param(0, (0, graphql_1.Args)('term', { type: () => String })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], ProductsResolver.prototype, "searchProducts", null);
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProductInput = void 0;
const tslib_1 = __webpack_require__(4);
const create_product_input_1 = __webpack_require__(18);
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
/* 20 */
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
        origin: 'http://localhost:4200', // Replace with your client's origin (e.g., your frontend URL)
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        'Content-Type': 'application/json',
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