
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SEOSettings
 * 
 */
export type SEOSettings = $Result.DefaultSelection<Prisma.$SEOSettingsPayload>
/**
 * Model Page
 * 
 */
export type Page = $Result.DefaultSelection<Prisma.$PagePayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model ExpertiseArea
 * 
 */
export type ExpertiseArea = $Result.DefaultSelection<Prisma.$ExpertiseAreaPayload>
/**
 * Model TreatmentCategory
 * 
 */
export type TreatmentCategory = $Result.DefaultSelection<Prisma.$TreatmentCategoryPayload>
/**
 * Model Procedure
 * 
 */
export type Procedure = $Result.DefaultSelection<Prisma.$ProcedurePayload>
/**
 * Model ProcedureMethod
 * 
 */
export type ProcedureMethod = $Result.DefaultSelection<Prisma.$ProcedureMethodPayload>
/**
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model BlogPost
 * 
 */
export type BlogPost = $Result.DefaultSelection<Prisma.$BlogPostPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PublishStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PublishStatus = $Enums.PublishStatus

export const PublishStatus: typeof $Enums.PublishStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sEOSettings`: Exposes CRUD operations for the **SEOSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SEOSettings
    * const sEOSettings = await prisma.sEOSettings.findMany()
    * ```
    */
  get sEOSettings(): Prisma.SEOSettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.page`: Exposes CRUD operations for the **Page** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pages
    * const pages = await prisma.page.findMany()
    * ```
    */
  get page(): Prisma.PageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expertiseArea`: Exposes CRUD operations for the **ExpertiseArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpertiseAreas
    * const expertiseAreas = await prisma.expertiseArea.findMany()
    * ```
    */
  get expertiseArea(): Prisma.ExpertiseAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treatmentCategory`: Exposes CRUD operations for the **TreatmentCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreatmentCategories
    * const treatmentCategories = await prisma.treatmentCategory.findMany()
    * ```
    */
  get treatmentCategory(): Prisma.TreatmentCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedure`: Exposes CRUD operations for the **Procedure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procedures
    * const procedures = await prisma.procedure.findMany()
    * ```
    */
  get procedure(): Prisma.ProcedureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.procedureMethod`: Exposes CRUD operations for the **ProcedureMethod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcedureMethods
    * const procedureMethods = await prisma.procedureMethod.findMany()
    * ```
    */
  get procedureMethod(): Prisma.ProcedureMethodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogPost`: Exposes CRUD operations for the **BlogPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogPosts
    * const blogPosts = await prisma.blogPost.findMany()
    * ```
    */
  get blogPost(): Prisma.BlogPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SEOSettings: 'SEOSettings',
    Page: 'Page',
    MenuItem: 'MenuItem',
    ExpertiseArea: 'ExpertiseArea',
    TreatmentCategory: 'TreatmentCategory',
    Procedure: 'Procedure',
    ProcedureMethod: 'ProcedureMethod',
    FAQ: 'FAQ',
    BlogPost: 'BlogPost',
    Category: 'Category',
    Media: 'Media'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sEOSettings" | "page" | "menuItem" | "expertiseArea" | "treatmentCategory" | "procedure" | "procedureMethod" | "fAQ" | "blogPost" | "category" | "media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SEOSettings: {
        payload: Prisma.$SEOSettingsPayload<ExtArgs>
        fields: Prisma.SEOSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SEOSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SEOSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          findFirst: {
            args: Prisma.SEOSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SEOSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          findMany: {
            args: Prisma.SEOSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>[]
          }
          create: {
            args: Prisma.SEOSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          createMany: {
            args: Prisma.SEOSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SEOSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>[]
          }
          delete: {
            args: Prisma.SEOSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          update: {
            args: Prisma.SEOSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          deleteMany: {
            args: Prisma.SEOSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SEOSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SEOSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>[]
          }
          upsert: {
            args: Prisma.SEOSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SEOSettingsPayload>
          }
          aggregate: {
            args: Prisma.SEOSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSEOSettings>
          }
          groupBy: {
            args: Prisma.SEOSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SEOSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SEOSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SEOSettingsCountAggregateOutputType> | number
          }
        }
      }
      Page: {
        payload: Prisma.$PagePayload<ExtArgs>
        fields: Prisma.PageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findFirst: {
            args: Prisma.PageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          findMany: {
            args: Prisma.PageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          create: {
            args: Prisma.PageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          createMany: {
            args: Prisma.PageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          delete: {
            args: Prisma.PageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          update: {
            args: Prisma.PageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          deleteMany: {
            args: Prisma.PageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>[]
          }
          upsert: {
            args: Prisma.PageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagePayload>
          }
          aggregate: {
            args: Prisma.PageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePage>
          }
          groupBy: {
            args: Prisma.PageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageCountArgs<ExtArgs>
            result: $Utils.Optional<PageCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MenuItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      ExpertiseArea: {
        payload: Prisma.$ExpertiseAreaPayload<ExtArgs>
        fields: Prisma.ExpertiseAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpertiseAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpertiseAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          findFirst: {
            args: Prisma.ExpertiseAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpertiseAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          findMany: {
            args: Prisma.ExpertiseAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>[]
          }
          create: {
            args: Prisma.ExpertiseAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          createMany: {
            args: Prisma.ExpertiseAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpertiseAreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>[]
          }
          delete: {
            args: Prisma.ExpertiseAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          update: {
            args: Prisma.ExpertiseAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          deleteMany: {
            args: Prisma.ExpertiseAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpertiseAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpertiseAreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>[]
          }
          upsert: {
            args: Prisma.ExpertiseAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpertiseAreaPayload>
          }
          aggregate: {
            args: Prisma.ExpertiseAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpertiseArea>
          }
          groupBy: {
            args: Prisma.ExpertiseAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpertiseAreaCountArgs<ExtArgs>
            result: $Utils.Optional<ExpertiseAreaCountAggregateOutputType> | number
          }
        }
      }
      TreatmentCategory: {
        payload: Prisma.$TreatmentCategoryPayload<ExtArgs>
        fields: Prisma.TreatmentCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreatmentCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreatmentCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          findFirst: {
            args: Prisma.TreatmentCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreatmentCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          findMany: {
            args: Prisma.TreatmentCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>[]
          }
          create: {
            args: Prisma.TreatmentCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          createMany: {
            args: Prisma.TreatmentCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreatmentCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>[]
          }
          delete: {
            args: Prisma.TreatmentCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          update: {
            args: Prisma.TreatmentCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TreatmentCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreatmentCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreatmentCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>[]
          }
          upsert: {
            args: Prisma.TreatmentCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreatmentCategoryPayload>
          }
          aggregate: {
            args: Prisma.TreatmentCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreatmentCategory>
          }
          groupBy: {
            args: Prisma.TreatmentCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreatmentCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TreatmentCategoryCountAggregateOutputType> | number
          }
        }
      }
      Procedure: {
        payload: Prisma.$ProcedurePayload<ExtArgs>
        fields: Prisma.ProcedureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findFirst: {
            args: Prisma.ProcedureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          findMany: {
            args: Prisma.ProcedureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>[]
          }
          create: {
            args: Prisma.ProcedureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          createMany: {
            args: Prisma.ProcedureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcedureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>[]
          }
          delete: {
            args: Prisma.ProcedureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          update: {
            args: Prisma.ProcedureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          deleteMany: {
            args: Prisma.ProcedureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcedureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>[]
          }
          upsert: {
            args: Prisma.ProcedureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedurePayload>
          }
          aggregate: {
            args: Prisma.ProcedureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedure>
          }
          groupBy: {
            args: Prisma.ProcedureGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedureCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedureCountAggregateOutputType> | number
          }
        }
      }
      ProcedureMethod: {
        payload: Prisma.$ProcedureMethodPayload<ExtArgs>
        fields: Prisma.ProcedureMethodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcedureMethodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcedureMethodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          findFirst: {
            args: Prisma.ProcedureMethodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcedureMethodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          findMany: {
            args: Prisma.ProcedureMethodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>[]
          }
          create: {
            args: Prisma.ProcedureMethodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          createMany: {
            args: Prisma.ProcedureMethodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProcedureMethodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>[]
          }
          delete: {
            args: Prisma.ProcedureMethodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          update: {
            args: Prisma.ProcedureMethodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          deleteMany: {
            args: Prisma.ProcedureMethodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcedureMethodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProcedureMethodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>[]
          }
          upsert: {
            args: Prisma.ProcedureMethodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcedureMethodPayload>
          }
          aggregate: {
            args: Prisma.ProcedureMethodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcedureMethod>
          }
          groupBy: {
            args: Prisma.ProcedureMethodGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcedureMethodGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcedureMethodCountArgs<ExtArgs>
            result: $Utils.Optional<ProcedureMethodCountAggregateOutputType> | number
          }
        }
      }
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FAQCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FAQUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      BlogPost: {
        payload: Prisma.$BlogPostPayload<ExtArgs>
        fields: Prisma.BlogPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findFirst: {
            args: Prisma.BlogPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          findMany: {
            args: Prisma.BlogPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          create: {
            args: Prisma.BlogPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          createMany: {
            args: Prisma.BlogPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          delete: {
            args: Prisma.BlogPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          update: {
            args: Prisma.BlogPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          deleteMany: {
            args: Prisma.BlogPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>[]
          }
          upsert: {
            args: Prisma.BlogPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPostPayload>
          }
          aggregate: {
            args: Prisma.BlogPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogPost>
          }
          groupBy: {
            args: Prisma.BlogPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogPostCountArgs<ExtArgs>
            result: $Utils.Optional<BlogPostCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sEOSettings?: SEOSettingsOmit
    page?: PageOmit
    menuItem?: MenuItemOmit
    expertiseArea?: ExpertiseAreaOmit
    treatmentCategory?: TreatmentCategoryOmit
    procedure?: ProcedureOmit
    procedureMethod?: ProcedureMethodOmit
    fAQ?: FAQOmit
    blogPost?: BlogPostOmit
    category?: CategoryOmit
    media?: MediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    children: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MenuItemCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type ExpertiseAreaCountOutputType
   */

  export type ExpertiseAreaCountOutputType = {
    treatments: number
  }

  export type ExpertiseAreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | ExpertiseAreaCountOutputTypeCountTreatmentsArgs
  }

  // Custom InputTypes
  /**
   * ExpertiseAreaCountOutputType without action
   */
  export type ExpertiseAreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseAreaCountOutputType
     */
    select?: ExpertiseAreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExpertiseAreaCountOutputType without action
   */
  export type ExpertiseAreaCountOutputTypeCountTreatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentCategoryWhereInput
  }


  /**
   * Count Type TreatmentCategoryCountOutputType
   */

  export type TreatmentCategoryCountOutputType = {
    procedures: number
  }

  export type TreatmentCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedures?: boolean | TreatmentCategoryCountOutputTypeCountProceduresArgs
  }

  // Custom InputTypes
  /**
   * TreatmentCategoryCountOutputType without action
   */
  export type TreatmentCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategoryCountOutputType
     */
    select?: TreatmentCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreatmentCategoryCountOutputType without action
   */
  export type TreatmentCategoryCountOutputTypeCountProceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureWhereInput
  }


  /**
   * Count Type ProcedureCountOutputType
   */

  export type ProcedureCountOutputType = {
    methods: number
    faqs: number
  }

  export type ProcedureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    methods?: boolean | ProcedureCountOutputTypeCountMethodsArgs
    faqs?: boolean | ProcedureCountOutputTypeCountFaqsArgs
  }

  // Custom InputTypes
  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureCountOutputType
     */
    select?: ProcedureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountMethodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureMethodWhereInput
  }

  /**
   * ProcedureCountOutputType without action
   */
  export type ProcedureCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model SEOSettings
   */

  export type AggregateSEOSettings = {
    _count: SEOSettingsCountAggregateOutputType | null
    _min: SEOSettingsMinAggregateOutputType | null
    _max: SEOSettingsMaxAggregateOutputType | null
  }

  export type SEOSettingsMinAggregateOutputType = {
    id: string | null
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    ogImage: string | null
    noIndex: boolean | null
  }

  export type SEOSettingsMaxAggregateOutputType = {
    id: string | null
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    ogImage: string | null
    noIndex: boolean | null
  }

  export type SEOSettingsCountAggregateOutputType = {
    id: number
    metaTitle: number
    metaDescription: number
    canonicalUrl: number
    ogImage: number
    noIndex: number
    _all: number
  }


  export type SEOSettingsMinAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    ogImage?: true
    noIndex?: true
  }

  export type SEOSettingsMaxAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    ogImage?: true
    noIndex?: true
  }

  export type SEOSettingsCountAggregateInputType = {
    id?: true
    metaTitle?: true
    metaDescription?: true
    canonicalUrl?: true
    ogImage?: true
    noIndex?: true
    _all?: true
  }

  export type SEOSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SEOSettings to aggregate.
     */
    where?: SEOSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOSettings to fetch.
     */
    orderBy?: SEOSettingsOrderByWithRelationInput | SEOSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SEOSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SEOSettings
    **/
    _count?: true | SEOSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SEOSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SEOSettingsMaxAggregateInputType
  }

  export type GetSEOSettingsAggregateType<T extends SEOSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSEOSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSEOSettings[P]>
      : GetScalarType<T[P], AggregateSEOSettings[P]>
  }




  export type SEOSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SEOSettingsWhereInput
    orderBy?: SEOSettingsOrderByWithAggregationInput | SEOSettingsOrderByWithAggregationInput[]
    by: SEOSettingsScalarFieldEnum[] | SEOSettingsScalarFieldEnum
    having?: SEOSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SEOSettingsCountAggregateInputType | true
    _min?: SEOSettingsMinAggregateInputType
    _max?: SEOSettingsMaxAggregateInputType
  }

  export type SEOSettingsGroupByOutputType = {
    id: string
    metaTitle: string | null
    metaDescription: string | null
    canonicalUrl: string | null
    ogImage: string | null
    noIndex: boolean
    _count: SEOSettingsCountAggregateOutputType | null
    _min: SEOSettingsMinAggregateOutputType | null
    _max: SEOSettingsMaxAggregateOutputType | null
  }

  type GetSEOSettingsGroupByPayload<T extends SEOSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SEOSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SEOSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SEOSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SEOSettingsGroupByOutputType[P]>
        }
      >
    >


  export type SEOSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    ogImage?: boolean
    noIndex?: boolean
    page?: boolean | SEOSettings$pageArgs<ExtArgs>
    procedure?: boolean | SEOSettings$procedureArgs<ExtArgs>
    blogPost?: boolean | SEOSettings$blogPostArgs<ExtArgs>
  }, ExtArgs["result"]["sEOSettings"]>

  export type SEOSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    ogImage?: boolean
    noIndex?: boolean
  }, ExtArgs["result"]["sEOSettings"]>

  export type SEOSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    ogImage?: boolean
    noIndex?: boolean
  }, ExtArgs["result"]["sEOSettings"]>

  export type SEOSettingsSelectScalar = {
    id?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    canonicalUrl?: boolean
    ogImage?: boolean
    noIndex?: boolean
  }

  export type SEOSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "metaTitle" | "metaDescription" | "canonicalUrl" | "ogImage" | "noIndex", ExtArgs["result"]["sEOSettings"]>
  export type SEOSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    page?: boolean | SEOSettings$pageArgs<ExtArgs>
    procedure?: boolean | SEOSettings$procedureArgs<ExtArgs>
    blogPost?: boolean | SEOSettings$blogPostArgs<ExtArgs>
  }
  export type SEOSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SEOSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SEOSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SEOSettings"
    objects: {
      page: Prisma.$PagePayload<ExtArgs> | null
      procedure: Prisma.$ProcedurePayload<ExtArgs> | null
      blogPost: Prisma.$BlogPostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      metaTitle: string | null
      metaDescription: string | null
      canonicalUrl: string | null
      ogImage: string | null
      noIndex: boolean
    }, ExtArgs["result"]["sEOSettings"]>
    composites: {}
  }

  type SEOSettingsGetPayload<S extends boolean | null | undefined | SEOSettingsDefaultArgs> = $Result.GetResult<Prisma.$SEOSettingsPayload, S>

  type SEOSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SEOSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SEOSettingsCountAggregateInputType | true
    }

  export interface SEOSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SEOSettings'], meta: { name: 'SEOSettings' } }
    /**
     * Find zero or one SEOSettings that matches the filter.
     * @param {SEOSettingsFindUniqueArgs} args - Arguments to find a SEOSettings
     * @example
     * // Get one SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SEOSettingsFindUniqueArgs>(args: SelectSubset<T, SEOSettingsFindUniqueArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SEOSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SEOSettingsFindUniqueOrThrowArgs} args - Arguments to find a SEOSettings
     * @example
     * // Get one SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SEOSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SEOSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SEOSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsFindFirstArgs} args - Arguments to find a SEOSettings
     * @example
     * // Get one SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SEOSettingsFindFirstArgs>(args?: SelectSubset<T, SEOSettingsFindFirstArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SEOSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsFindFirstOrThrowArgs} args - Arguments to find a SEOSettings
     * @example
     * // Get one SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SEOSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SEOSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SEOSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findMany()
     * 
     * // Get first 10 SEOSettings
     * const sEOSettings = await prisma.sEOSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sEOSettingsWithIdOnly = await prisma.sEOSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SEOSettingsFindManyArgs>(args?: SelectSubset<T, SEOSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SEOSettings.
     * @param {SEOSettingsCreateArgs} args - Arguments to create a SEOSettings.
     * @example
     * // Create one SEOSettings
     * const SEOSettings = await prisma.sEOSettings.create({
     *   data: {
     *     // ... data to create a SEOSettings
     *   }
     * })
     * 
     */
    create<T extends SEOSettingsCreateArgs>(args: SelectSubset<T, SEOSettingsCreateArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SEOSettings.
     * @param {SEOSettingsCreateManyArgs} args - Arguments to create many SEOSettings.
     * @example
     * // Create many SEOSettings
     * const sEOSettings = await prisma.sEOSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SEOSettingsCreateManyArgs>(args?: SelectSubset<T, SEOSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SEOSettings and returns the data saved in the database.
     * @param {SEOSettingsCreateManyAndReturnArgs} args - Arguments to create many SEOSettings.
     * @example
     * // Create many SEOSettings
     * const sEOSettings = await prisma.sEOSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SEOSettings and only return the `id`
     * const sEOSettingsWithIdOnly = await prisma.sEOSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SEOSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SEOSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SEOSettings.
     * @param {SEOSettingsDeleteArgs} args - Arguments to delete one SEOSettings.
     * @example
     * // Delete one SEOSettings
     * const SEOSettings = await prisma.sEOSettings.delete({
     *   where: {
     *     // ... filter to delete one SEOSettings
     *   }
     * })
     * 
     */
    delete<T extends SEOSettingsDeleteArgs>(args: SelectSubset<T, SEOSettingsDeleteArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SEOSettings.
     * @param {SEOSettingsUpdateArgs} args - Arguments to update one SEOSettings.
     * @example
     * // Update one SEOSettings
     * const sEOSettings = await prisma.sEOSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SEOSettingsUpdateArgs>(args: SelectSubset<T, SEOSettingsUpdateArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SEOSettings.
     * @param {SEOSettingsDeleteManyArgs} args - Arguments to filter SEOSettings to delete.
     * @example
     * // Delete a few SEOSettings
     * const { count } = await prisma.sEOSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SEOSettingsDeleteManyArgs>(args?: SelectSubset<T, SEOSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SEOSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SEOSettings
     * const sEOSettings = await prisma.sEOSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SEOSettingsUpdateManyArgs>(args: SelectSubset<T, SEOSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SEOSettings and returns the data updated in the database.
     * @param {SEOSettingsUpdateManyAndReturnArgs} args - Arguments to update many SEOSettings.
     * @example
     * // Update many SEOSettings
     * const sEOSettings = await prisma.sEOSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SEOSettings and only return the `id`
     * const sEOSettingsWithIdOnly = await prisma.sEOSettings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SEOSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SEOSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SEOSettings.
     * @param {SEOSettingsUpsertArgs} args - Arguments to update or create a SEOSettings.
     * @example
     * // Update or create a SEOSettings
     * const sEOSettings = await prisma.sEOSettings.upsert({
     *   create: {
     *     // ... data to create a SEOSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SEOSettings we want to update
     *   }
     * })
     */
    upsert<T extends SEOSettingsUpsertArgs>(args: SelectSubset<T, SEOSettingsUpsertArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SEOSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsCountArgs} args - Arguments to filter SEOSettings to count.
     * @example
     * // Count the number of SEOSettings
     * const count = await prisma.sEOSettings.count({
     *   where: {
     *     // ... the filter for the SEOSettings we want to count
     *   }
     * })
    **/
    count<T extends SEOSettingsCountArgs>(
      args?: Subset<T, SEOSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SEOSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SEOSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SEOSettingsAggregateArgs>(args: Subset<T, SEOSettingsAggregateArgs>): Prisma.PrismaPromise<GetSEOSettingsAggregateType<T>>

    /**
     * Group by SEOSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SEOSettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SEOSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SEOSettingsGroupByArgs['orderBy'] }
        : { orderBy?: SEOSettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SEOSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSEOSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SEOSettings model
   */
  readonly fields: SEOSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SEOSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SEOSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    page<T extends SEOSettings$pageArgs<ExtArgs> = {}>(args?: Subset<T, SEOSettings$pageArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    procedure<T extends SEOSettings$procedureArgs<ExtArgs> = {}>(args?: Subset<T, SEOSettings$procedureArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    blogPost<T extends SEOSettings$blogPostArgs<ExtArgs> = {}>(args?: Subset<T, SEOSettings$blogPostArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SEOSettings model
   */
  interface SEOSettingsFieldRefs {
    readonly id: FieldRef<"SEOSettings", 'String'>
    readonly metaTitle: FieldRef<"SEOSettings", 'String'>
    readonly metaDescription: FieldRef<"SEOSettings", 'String'>
    readonly canonicalUrl: FieldRef<"SEOSettings", 'String'>
    readonly ogImage: FieldRef<"SEOSettings", 'String'>
    readonly noIndex: FieldRef<"SEOSettings", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SEOSettings findUnique
   */
  export type SEOSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SEOSettings to fetch.
     */
    where: SEOSettingsWhereUniqueInput
  }

  /**
   * SEOSettings findUniqueOrThrow
   */
  export type SEOSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SEOSettings to fetch.
     */
    where: SEOSettingsWhereUniqueInput
  }

  /**
   * SEOSettings findFirst
   */
  export type SEOSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SEOSettings to fetch.
     */
    where?: SEOSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOSettings to fetch.
     */
    orderBy?: SEOSettingsOrderByWithRelationInput | SEOSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SEOSettings.
     */
    cursor?: SEOSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SEOSettings.
     */
    distinct?: SEOSettingsScalarFieldEnum | SEOSettingsScalarFieldEnum[]
  }

  /**
   * SEOSettings findFirstOrThrow
   */
  export type SEOSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SEOSettings to fetch.
     */
    where?: SEOSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOSettings to fetch.
     */
    orderBy?: SEOSettingsOrderByWithRelationInput | SEOSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SEOSettings.
     */
    cursor?: SEOSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SEOSettings.
     */
    distinct?: SEOSettingsScalarFieldEnum | SEOSettingsScalarFieldEnum[]
  }

  /**
   * SEOSettings findMany
   */
  export type SEOSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter, which SEOSettings to fetch.
     */
    where?: SEOSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SEOSettings to fetch.
     */
    orderBy?: SEOSettingsOrderByWithRelationInput | SEOSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SEOSettings.
     */
    cursor?: SEOSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SEOSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SEOSettings.
     */
    skip?: number
    distinct?: SEOSettingsScalarFieldEnum | SEOSettingsScalarFieldEnum[]
  }

  /**
   * SEOSettings create
   */
  export type SEOSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a SEOSettings.
     */
    data?: XOR<SEOSettingsCreateInput, SEOSettingsUncheckedCreateInput>
  }

  /**
   * SEOSettings createMany
   */
  export type SEOSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SEOSettings.
     */
    data: SEOSettingsCreateManyInput | SEOSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SEOSettings createManyAndReturn
   */
  export type SEOSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many SEOSettings.
     */
    data: SEOSettingsCreateManyInput | SEOSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SEOSettings update
   */
  export type SEOSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a SEOSettings.
     */
    data: XOR<SEOSettingsUpdateInput, SEOSettingsUncheckedUpdateInput>
    /**
     * Choose, which SEOSettings to update.
     */
    where: SEOSettingsWhereUniqueInput
  }

  /**
   * SEOSettings updateMany
   */
  export type SEOSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SEOSettings.
     */
    data: XOR<SEOSettingsUpdateManyMutationInput, SEOSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SEOSettings to update
     */
    where?: SEOSettingsWhereInput
    /**
     * Limit how many SEOSettings to update.
     */
    limit?: number
  }

  /**
   * SEOSettings updateManyAndReturn
   */
  export type SEOSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * The data used to update SEOSettings.
     */
    data: XOR<SEOSettingsUpdateManyMutationInput, SEOSettingsUncheckedUpdateManyInput>
    /**
     * Filter which SEOSettings to update
     */
    where?: SEOSettingsWhereInput
    /**
     * Limit how many SEOSettings to update.
     */
    limit?: number
  }

  /**
   * SEOSettings upsert
   */
  export type SEOSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the SEOSettings to update in case it exists.
     */
    where: SEOSettingsWhereUniqueInput
    /**
     * In case the SEOSettings found by the `where` argument doesn't exist, create a new SEOSettings with this data.
     */
    create: XOR<SEOSettingsCreateInput, SEOSettingsUncheckedCreateInput>
    /**
     * In case the SEOSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SEOSettingsUpdateInput, SEOSettingsUncheckedUpdateInput>
  }

  /**
   * SEOSettings delete
   */
  export type SEOSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    /**
     * Filter which SEOSettings to delete.
     */
    where: SEOSettingsWhereUniqueInput
  }

  /**
   * SEOSettings deleteMany
   */
  export type SEOSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SEOSettings to delete
     */
    where?: SEOSettingsWhereInput
    /**
     * Limit how many SEOSettings to delete.
     */
    limit?: number
  }

  /**
   * SEOSettings.page
   */
  export type SEOSettings$pageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    where?: PageWhereInput
  }

  /**
   * SEOSettings.procedure
   */
  export type SEOSettings$procedureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    where?: ProcedureWhereInput
  }

  /**
   * SEOSettings.blogPost
   */
  export type SEOSettings$blogPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
  }

  /**
   * SEOSettings without action
   */
  export type SEOSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
  }


  /**
   * Model Page
   */

  export type AggregatePage = {
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  export type PageMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    seoSettingsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    seoSettingsId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    status: number
    publishedAt: number
    seoSettingsId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    status?: true
    publishedAt?: true
    seoSettingsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    status?: true
    publishedAt?: true
    seoSettingsId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    status?: true
    publishedAt?: true
    seoSettingsId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Page to aggregate.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pages
    **/
    _count?: true | PageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageMaxAggregateInputType
  }

  export type GetPageAggregateType<T extends PageAggregateArgs> = {
        [P in keyof T & keyof AggregatePage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePage[P]>
      : GetScalarType<T[P], AggregatePage[P]>
  }




  export type PageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageWhereInput
    orderBy?: PageOrderByWithAggregationInput | PageOrderByWithAggregationInput[]
    by: PageScalarFieldEnum[] | PageScalarFieldEnum
    having?: PageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageCountAggregateInputType | true
    _min?: PageMinAggregateInputType
    _max?: PageMaxAggregateInputType
  }

  export type PageGroupByOutputType = {
    id: string
    slug: string
    title: string
    content: string
    status: $Enums.PublishStatus
    publishedAt: Date | null
    seoSettingsId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PageCountAggregateOutputType | null
    _min: PageMinAggregateOutputType | null
    _max: PageMaxAggregateOutputType | null
  }

  type GetPageGroupByPayload<T extends PageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageGroupByOutputType[P]>
            : GetScalarType<T[P], PageGroupByOutputType[P]>
        }
      >
    >


  export type PageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    publishedAt?: boolean
    seoSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seo?: boolean | Page$seoArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    publishedAt?: boolean
    seoSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seo?: boolean | Page$seoArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    publishedAt?: boolean
    seoSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seo?: boolean | Page$seoArgs<ExtArgs>
  }, ExtArgs["result"]["page"]>

  export type PageSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    publishedAt?: boolean
    seoSettingsId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "content" | "status" | "publishedAt" | "seoSettingsId" | "createdAt" | "updatedAt", ExtArgs["result"]["page"]>
  export type PageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo?: boolean | Page$seoArgs<ExtArgs>
  }
  export type PageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo?: boolean | Page$seoArgs<ExtArgs>
  }
  export type PageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seo?: boolean | Page$seoArgs<ExtArgs>
  }

  export type $PagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Page"
    objects: {
      seo: Prisma.$SEOSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      content: string
      status: $Enums.PublishStatus
      publishedAt: Date | null
      seoSettingsId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["page"]>
    composites: {}
  }

  type PageGetPayload<S extends boolean | null | undefined | PageDefaultArgs> = $Result.GetResult<Prisma.$PagePayload, S>

  type PageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageCountAggregateInputType | true
    }

  export interface PageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Page'], meta: { name: 'Page' } }
    /**
     * Find zero or one Page that matches the filter.
     * @param {PageFindUniqueArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageFindUniqueArgs>(args: SelectSubset<T, PageFindUniqueArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Page that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageFindUniqueOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageFindUniqueOrThrowArgs>(args: SelectSubset<T, PageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageFindFirstArgs>(args?: SelectSubset<T, PageFindFirstArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Page that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindFirstOrThrowArgs} args - Arguments to find a Page
     * @example
     * // Get one Page
     * const page = await prisma.page.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageFindFirstOrThrowArgs>(args?: SelectSubset<T, PageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pages
     * const pages = await prisma.page.findMany()
     * 
     * // Get first 10 Pages
     * const pages = await prisma.page.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageWithIdOnly = await prisma.page.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageFindManyArgs>(args?: SelectSubset<T, PageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Page.
     * @param {PageCreateArgs} args - Arguments to create a Page.
     * @example
     * // Create one Page
     * const Page = await prisma.page.create({
     *   data: {
     *     // ... data to create a Page
     *   }
     * })
     * 
     */
    create<T extends PageCreateArgs>(args: SelectSubset<T, PageCreateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pages.
     * @param {PageCreateManyArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageCreateManyArgs>(args?: SelectSubset<T, PageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pages and returns the data saved in the database.
     * @param {PageCreateManyAndReturnArgs} args - Arguments to create many Pages.
     * @example
     * // Create many Pages
     * const page = await prisma.page.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageCreateManyAndReturnArgs>(args?: SelectSubset<T, PageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Page.
     * @param {PageDeleteArgs} args - Arguments to delete one Page.
     * @example
     * // Delete one Page
     * const Page = await prisma.page.delete({
     *   where: {
     *     // ... filter to delete one Page
     *   }
     * })
     * 
     */
    delete<T extends PageDeleteArgs>(args: SelectSubset<T, PageDeleteArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Page.
     * @param {PageUpdateArgs} args - Arguments to update one Page.
     * @example
     * // Update one Page
     * const page = await prisma.page.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageUpdateArgs>(args: SelectSubset<T, PageUpdateArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pages.
     * @param {PageDeleteManyArgs} args - Arguments to filter Pages to delete.
     * @example
     * // Delete a few Pages
     * const { count } = await prisma.page.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageDeleteManyArgs>(args?: SelectSubset<T, PageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageUpdateManyArgs>(args: SelectSubset<T, PageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pages and returns the data updated in the database.
     * @param {PageUpdateManyAndReturnArgs} args - Arguments to update many Pages.
     * @example
     * // Update many Pages
     * const page = await prisma.page.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pages and only return the `id`
     * const pageWithIdOnly = await prisma.page.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageUpdateManyAndReturnArgs>(args: SelectSubset<T, PageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Page.
     * @param {PageUpsertArgs} args - Arguments to update or create a Page.
     * @example
     * // Update or create a Page
     * const page = await prisma.page.upsert({
     *   create: {
     *     // ... data to create a Page
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Page we want to update
     *   }
     * })
     */
    upsert<T extends PageUpsertArgs>(args: SelectSubset<T, PageUpsertArgs<ExtArgs>>): Prisma__PageClient<$Result.GetResult<Prisma.$PagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageCountArgs} args - Arguments to filter Pages to count.
     * @example
     * // Count the number of Pages
     * const count = await prisma.page.count({
     *   where: {
     *     // ... the filter for the Pages we want to count
     *   }
     * })
    **/
    count<T extends PageCountArgs>(
      args?: Subset<T, PageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageAggregateArgs>(args: Subset<T, PageAggregateArgs>): Prisma.PrismaPromise<GetPageAggregateType<T>>

    /**
     * Group by Page.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageGroupByArgs['orderBy'] }
        : { orderBy?: PageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Page model
   */
  readonly fields: PageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Page.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seo<T extends Page$seoArgs<ExtArgs> = {}>(args?: Subset<T, Page$seoArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Page model
   */
  interface PageFieldRefs {
    readonly id: FieldRef<"Page", 'String'>
    readonly slug: FieldRef<"Page", 'String'>
    readonly title: FieldRef<"Page", 'String'>
    readonly content: FieldRef<"Page", 'String'>
    readonly status: FieldRef<"Page", 'PublishStatus'>
    readonly publishedAt: FieldRef<"Page", 'DateTime'>
    readonly seoSettingsId: FieldRef<"Page", 'String'>
    readonly createdAt: FieldRef<"Page", 'DateTime'>
    readonly updatedAt: FieldRef<"Page", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Page findUnique
   */
  export type PageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findUniqueOrThrow
   */
  export type PageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page findFirst
   */
  export type PageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findFirstOrThrow
   */
  export type PageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Page to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pages.
     */
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page findMany
   */
  export type PageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter, which Pages to fetch.
     */
    where?: PageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pages to fetch.
     */
    orderBy?: PageOrderByWithRelationInput | PageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pages.
     */
    cursor?: PageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pages.
     */
    skip?: number
    distinct?: PageScalarFieldEnum | PageScalarFieldEnum[]
  }

  /**
   * Page create
   */
  export type PageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to create a Page.
     */
    data: XOR<PageCreateInput, PageUncheckedCreateInput>
  }

  /**
   * Page createMany
   */
  export type PageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Page createManyAndReturn
   */
  export type PageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to create many Pages.
     */
    data: PageCreateManyInput | PageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page update
   */
  export type PageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The data needed to update a Page.
     */
    data: XOR<PageUpdateInput, PageUncheckedUpdateInput>
    /**
     * Choose, which Page to update.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page updateMany
   */
  export type PageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
  }

  /**
   * Page updateManyAndReturn
   */
  export type PageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * The data used to update Pages.
     */
    data: XOR<PageUpdateManyMutationInput, PageUncheckedUpdateManyInput>
    /**
     * Filter which Pages to update
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Page upsert
   */
  export type PageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * The filter to search for the Page to update in case it exists.
     */
    where: PageWhereUniqueInput
    /**
     * In case the Page found by the `where` argument doesn't exist, create a new Page with this data.
     */
    create: XOR<PageCreateInput, PageUncheckedCreateInput>
    /**
     * In case the Page was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageUpdateInput, PageUncheckedUpdateInput>
  }

  /**
   * Page delete
   */
  export type PageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
    /**
     * Filter which Page to delete.
     */
    where: PageWhereUniqueInput
  }

  /**
   * Page deleteMany
   */
  export type PageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pages to delete
     */
    where?: PageWhereInput
    /**
     * Limit how many Pages to delete.
     */
    limit?: number
  }

  /**
   * Page.seo
   */
  export type Page$seoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    where?: SEOSettingsWhereInput
  }

  /**
   * Page without action
   */
  export type PageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Page
     */
    select?: PageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Page
     */
    omit?: PageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PageInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    order: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    order: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    label: string | null
    path: string | null
    order: number | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    label: string | null
    path: string | null
    order: number | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    label: number
    path: number
    order: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    order?: true
  }

  export type MenuItemSumAggregateInputType = {
    order?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    label?: true
    path?: true
    order?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    label?: true
    path?: true
    order?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    label?: true
    path?: true
    order?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    label: string
    path: string
    order: number
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    path?: boolean
    order?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
    children?: boolean | MenuItem$childrenArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    path?: boolean
    order?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    path?: boolean
    order?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    label?: boolean
    path?: boolean
    order?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "path" | "order" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["menuItem"]>
  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
    children?: boolean | MenuItem$childrenArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
  }
  export type MenuItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | MenuItem$parentArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      parent: Prisma.$MenuItemPayload<ExtArgs> | null
      children: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      label: string
      path: string
      order: number
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems and returns the data updated in the database.
     * @param {MenuItemUpdateManyAndReturnArgs} args - Arguments to update many MenuItems.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MenuItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MenuItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends MenuItem$parentArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$parentArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends MenuItem$childrenArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuItem model
   */
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly label: FieldRef<"MenuItem", 'String'>
    readonly path: FieldRef<"MenuItem", 'String'>
    readonly order: FieldRef<"MenuItem", 'Int'>
    readonly parentId: FieldRef<"MenuItem", 'String'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
  }

  /**
   * MenuItem updateManyAndReturn
   */
  export type MenuItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
    /**
     * Limit how many MenuItems to delete.
     */
    limit?: number
  }

  /**
   * MenuItem.parent
   */
  export type MenuItem$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem.children
   */
  export type MenuItem$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MenuItem
     */
    omit?: MenuItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model ExpertiseArea
   */

  export type AggregateExpertiseArea = {
    _count: ExpertiseAreaCountAggregateOutputType | null
    _min: ExpertiseAreaMinAggregateOutputType | null
    _max: ExpertiseAreaMaxAggregateOutputType | null
  }

  export type ExpertiseAreaMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpertiseAreaMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpertiseAreaCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExpertiseAreaMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpertiseAreaMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpertiseAreaCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExpertiseAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertiseArea to aggregate.
     */
    where?: ExpertiseAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseAreas to fetch.
     */
    orderBy?: ExpertiseAreaOrderByWithRelationInput | ExpertiseAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpertiseAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpertiseAreas
    **/
    _count?: true | ExpertiseAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpertiseAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpertiseAreaMaxAggregateInputType
  }

  export type GetExpertiseAreaAggregateType<T extends ExpertiseAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateExpertiseArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpertiseArea[P]>
      : GetScalarType<T[P], AggregateExpertiseArea[P]>
  }




  export type ExpertiseAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpertiseAreaWhereInput
    orderBy?: ExpertiseAreaOrderByWithAggregationInput | ExpertiseAreaOrderByWithAggregationInput[]
    by: ExpertiseAreaScalarFieldEnum[] | ExpertiseAreaScalarFieldEnum
    having?: ExpertiseAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpertiseAreaCountAggregateInputType | true
    _min?: ExpertiseAreaMinAggregateInputType
    _max?: ExpertiseAreaMaxAggregateInputType
  }

  export type ExpertiseAreaGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ExpertiseAreaCountAggregateOutputType | null
    _min: ExpertiseAreaMinAggregateOutputType | null
    _max: ExpertiseAreaMaxAggregateOutputType | null
  }

  type GetExpertiseAreaGroupByPayload<T extends ExpertiseAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpertiseAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpertiseAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpertiseAreaGroupByOutputType[P]>
            : GetScalarType<T[P], ExpertiseAreaGroupByOutputType[P]>
        }
      >
    >


  export type ExpertiseAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treatments?: boolean | ExpertiseArea$treatmentsArgs<ExtArgs>
    _count?: boolean | ExpertiseAreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expertiseArea"]>

  export type ExpertiseAreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expertiseArea"]>

  export type ExpertiseAreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["expertiseArea"]>

  export type ExpertiseAreaSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExpertiseAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["expertiseArea"]>
  export type ExpertiseAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatments?: boolean | ExpertiseArea$treatmentsArgs<ExtArgs>
    _count?: boolean | ExpertiseAreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExpertiseAreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExpertiseAreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExpertiseAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpertiseArea"
    objects: {
      treatments: Prisma.$TreatmentCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["expertiseArea"]>
    composites: {}
  }

  type ExpertiseAreaGetPayload<S extends boolean | null | undefined | ExpertiseAreaDefaultArgs> = $Result.GetResult<Prisma.$ExpertiseAreaPayload, S>

  type ExpertiseAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpertiseAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpertiseAreaCountAggregateInputType | true
    }

  export interface ExpertiseAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpertiseArea'], meta: { name: 'ExpertiseArea' } }
    /**
     * Find zero or one ExpertiseArea that matches the filter.
     * @param {ExpertiseAreaFindUniqueArgs} args - Arguments to find a ExpertiseArea
     * @example
     * // Get one ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpertiseAreaFindUniqueArgs>(args: SelectSubset<T, ExpertiseAreaFindUniqueArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpertiseArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpertiseAreaFindUniqueOrThrowArgs} args - Arguments to find a ExpertiseArea
     * @example
     * // Get one ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpertiseAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpertiseAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertiseArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaFindFirstArgs} args - Arguments to find a ExpertiseArea
     * @example
     * // Get one ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpertiseAreaFindFirstArgs>(args?: SelectSubset<T, ExpertiseAreaFindFirstArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpertiseArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaFindFirstOrThrowArgs} args - Arguments to find a ExpertiseArea
     * @example
     * // Get one ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpertiseAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpertiseAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpertiseAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpertiseAreas
     * const expertiseAreas = await prisma.expertiseArea.findMany()
     * 
     * // Get first 10 ExpertiseAreas
     * const expertiseAreas = await prisma.expertiseArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expertiseAreaWithIdOnly = await prisma.expertiseArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpertiseAreaFindManyArgs>(args?: SelectSubset<T, ExpertiseAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpertiseArea.
     * @param {ExpertiseAreaCreateArgs} args - Arguments to create a ExpertiseArea.
     * @example
     * // Create one ExpertiseArea
     * const ExpertiseArea = await prisma.expertiseArea.create({
     *   data: {
     *     // ... data to create a ExpertiseArea
     *   }
     * })
     * 
     */
    create<T extends ExpertiseAreaCreateArgs>(args: SelectSubset<T, ExpertiseAreaCreateArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpertiseAreas.
     * @param {ExpertiseAreaCreateManyArgs} args - Arguments to create many ExpertiseAreas.
     * @example
     * // Create many ExpertiseAreas
     * const expertiseArea = await prisma.expertiseArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpertiseAreaCreateManyArgs>(args?: SelectSubset<T, ExpertiseAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpertiseAreas and returns the data saved in the database.
     * @param {ExpertiseAreaCreateManyAndReturnArgs} args - Arguments to create many ExpertiseAreas.
     * @example
     * // Create many ExpertiseAreas
     * const expertiseArea = await prisma.expertiseArea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpertiseAreas and only return the `id`
     * const expertiseAreaWithIdOnly = await prisma.expertiseArea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpertiseAreaCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpertiseAreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpertiseArea.
     * @param {ExpertiseAreaDeleteArgs} args - Arguments to delete one ExpertiseArea.
     * @example
     * // Delete one ExpertiseArea
     * const ExpertiseArea = await prisma.expertiseArea.delete({
     *   where: {
     *     // ... filter to delete one ExpertiseArea
     *   }
     * })
     * 
     */
    delete<T extends ExpertiseAreaDeleteArgs>(args: SelectSubset<T, ExpertiseAreaDeleteArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpertiseArea.
     * @param {ExpertiseAreaUpdateArgs} args - Arguments to update one ExpertiseArea.
     * @example
     * // Update one ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpertiseAreaUpdateArgs>(args: SelectSubset<T, ExpertiseAreaUpdateArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpertiseAreas.
     * @param {ExpertiseAreaDeleteManyArgs} args - Arguments to filter ExpertiseAreas to delete.
     * @example
     * // Delete a few ExpertiseAreas
     * const { count } = await prisma.expertiseArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpertiseAreaDeleteManyArgs>(args?: SelectSubset<T, ExpertiseAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertiseAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpertiseAreas
     * const expertiseArea = await prisma.expertiseArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpertiseAreaUpdateManyArgs>(args: SelectSubset<T, ExpertiseAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpertiseAreas and returns the data updated in the database.
     * @param {ExpertiseAreaUpdateManyAndReturnArgs} args - Arguments to update many ExpertiseAreas.
     * @example
     * // Update many ExpertiseAreas
     * const expertiseArea = await prisma.expertiseArea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpertiseAreas and only return the `id`
     * const expertiseAreaWithIdOnly = await prisma.expertiseArea.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpertiseAreaUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpertiseAreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpertiseArea.
     * @param {ExpertiseAreaUpsertArgs} args - Arguments to update or create a ExpertiseArea.
     * @example
     * // Update or create a ExpertiseArea
     * const expertiseArea = await prisma.expertiseArea.upsert({
     *   create: {
     *     // ... data to create a ExpertiseArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpertiseArea we want to update
     *   }
     * })
     */
    upsert<T extends ExpertiseAreaUpsertArgs>(args: SelectSubset<T, ExpertiseAreaUpsertArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpertiseAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaCountArgs} args - Arguments to filter ExpertiseAreas to count.
     * @example
     * // Count the number of ExpertiseAreas
     * const count = await prisma.expertiseArea.count({
     *   where: {
     *     // ... the filter for the ExpertiseAreas we want to count
     *   }
     * })
    **/
    count<T extends ExpertiseAreaCountArgs>(
      args?: Subset<T, ExpertiseAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpertiseAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpertiseArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpertiseAreaAggregateArgs>(args: Subset<T, ExpertiseAreaAggregateArgs>): Prisma.PrismaPromise<GetExpertiseAreaAggregateType<T>>

    /**
     * Group by ExpertiseArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpertiseAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpertiseAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpertiseAreaGroupByArgs['orderBy'] }
        : { orderBy?: ExpertiseAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpertiseAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpertiseAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpertiseArea model
   */
  readonly fields: ExpertiseAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpertiseArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpertiseAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatments<T extends ExpertiseArea$treatmentsArgs<ExtArgs> = {}>(args?: Subset<T, ExpertiseArea$treatmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpertiseArea model
   */
  interface ExpertiseAreaFieldRefs {
    readonly id: FieldRef<"ExpertiseArea", 'String'>
    readonly slug: FieldRef<"ExpertiseArea", 'String'>
    readonly name: FieldRef<"ExpertiseArea", 'String'>
    readonly description: FieldRef<"ExpertiseArea", 'String'>
    readonly image: FieldRef<"ExpertiseArea", 'String'>
    readonly createdAt: FieldRef<"ExpertiseArea", 'DateTime'>
    readonly updatedAt: FieldRef<"ExpertiseArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpertiseArea findUnique
   */
  export type ExpertiseAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseArea to fetch.
     */
    where: ExpertiseAreaWhereUniqueInput
  }

  /**
   * ExpertiseArea findUniqueOrThrow
   */
  export type ExpertiseAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseArea to fetch.
     */
    where: ExpertiseAreaWhereUniqueInput
  }

  /**
   * ExpertiseArea findFirst
   */
  export type ExpertiseAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseArea to fetch.
     */
    where?: ExpertiseAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseAreas to fetch.
     */
    orderBy?: ExpertiseAreaOrderByWithRelationInput | ExpertiseAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertiseAreas.
     */
    cursor?: ExpertiseAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertiseAreas.
     */
    distinct?: ExpertiseAreaScalarFieldEnum | ExpertiseAreaScalarFieldEnum[]
  }

  /**
   * ExpertiseArea findFirstOrThrow
   */
  export type ExpertiseAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseArea to fetch.
     */
    where?: ExpertiseAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseAreas to fetch.
     */
    orderBy?: ExpertiseAreaOrderByWithRelationInput | ExpertiseAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpertiseAreas.
     */
    cursor?: ExpertiseAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpertiseAreas.
     */
    distinct?: ExpertiseAreaScalarFieldEnum | ExpertiseAreaScalarFieldEnum[]
  }

  /**
   * ExpertiseArea findMany
   */
  export type ExpertiseAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter, which ExpertiseAreas to fetch.
     */
    where?: ExpertiseAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpertiseAreas to fetch.
     */
    orderBy?: ExpertiseAreaOrderByWithRelationInput | ExpertiseAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpertiseAreas.
     */
    cursor?: ExpertiseAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpertiseAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpertiseAreas.
     */
    skip?: number
    distinct?: ExpertiseAreaScalarFieldEnum | ExpertiseAreaScalarFieldEnum[]
  }

  /**
   * ExpertiseArea create
   */
  export type ExpertiseAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpertiseArea.
     */
    data: XOR<ExpertiseAreaCreateInput, ExpertiseAreaUncheckedCreateInput>
  }

  /**
   * ExpertiseArea createMany
   */
  export type ExpertiseAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpertiseAreas.
     */
    data: ExpertiseAreaCreateManyInput | ExpertiseAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpertiseArea createManyAndReturn
   */
  export type ExpertiseAreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * The data used to create many ExpertiseAreas.
     */
    data: ExpertiseAreaCreateManyInput | ExpertiseAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpertiseArea update
   */
  export type ExpertiseAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpertiseArea.
     */
    data: XOR<ExpertiseAreaUpdateInput, ExpertiseAreaUncheckedUpdateInput>
    /**
     * Choose, which ExpertiseArea to update.
     */
    where: ExpertiseAreaWhereUniqueInput
  }

  /**
   * ExpertiseArea updateMany
   */
  export type ExpertiseAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpertiseAreas.
     */
    data: XOR<ExpertiseAreaUpdateManyMutationInput, ExpertiseAreaUncheckedUpdateManyInput>
    /**
     * Filter which ExpertiseAreas to update
     */
    where?: ExpertiseAreaWhereInput
    /**
     * Limit how many ExpertiseAreas to update.
     */
    limit?: number
  }

  /**
   * ExpertiseArea updateManyAndReturn
   */
  export type ExpertiseAreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * The data used to update ExpertiseAreas.
     */
    data: XOR<ExpertiseAreaUpdateManyMutationInput, ExpertiseAreaUncheckedUpdateManyInput>
    /**
     * Filter which ExpertiseAreas to update
     */
    where?: ExpertiseAreaWhereInput
    /**
     * Limit how many ExpertiseAreas to update.
     */
    limit?: number
  }

  /**
   * ExpertiseArea upsert
   */
  export type ExpertiseAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpertiseArea to update in case it exists.
     */
    where: ExpertiseAreaWhereUniqueInput
    /**
     * In case the ExpertiseArea found by the `where` argument doesn't exist, create a new ExpertiseArea with this data.
     */
    create: XOR<ExpertiseAreaCreateInput, ExpertiseAreaUncheckedCreateInput>
    /**
     * In case the ExpertiseArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpertiseAreaUpdateInput, ExpertiseAreaUncheckedUpdateInput>
  }

  /**
   * ExpertiseArea delete
   */
  export type ExpertiseAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
    /**
     * Filter which ExpertiseArea to delete.
     */
    where: ExpertiseAreaWhereUniqueInput
  }

  /**
   * ExpertiseArea deleteMany
   */
  export type ExpertiseAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpertiseAreas to delete
     */
    where?: ExpertiseAreaWhereInput
    /**
     * Limit how many ExpertiseAreas to delete.
     */
    limit?: number
  }

  /**
   * ExpertiseArea.treatments
   */
  export type ExpertiseArea$treatmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    where?: TreatmentCategoryWhereInput
    orderBy?: TreatmentCategoryOrderByWithRelationInput | TreatmentCategoryOrderByWithRelationInput[]
    cursor?: TreatmentCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreatmentCategoryScalarFieldEnum | TreatmentCategoryScalarFieldEnum[]
  }

  /**
   * ExpertiseArea without action
   */
  export type ExpertiseAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpertiseArea
     */
    select?: ExpertiseAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpertiseArea
     */
    omit?: ExpertiseAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpertiseAreaInclude<ExtArgs> | null
  }


  /**
   * Model TreatmentCategory
   */

  export type AggregateTreatmentCategory = {
    _count: TreatmentCategoryCountAggregateOutputType | null
    _min: TreatmentCategoryMinAggregateOutputType | null
    _max: TreatmentCategoryMaxAggregateOutputType | null
  }

  export type TreatmentCategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    expertiseAreaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentCategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    expertiseAreaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreatmentCategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    expertiseAreaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreatmentCategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    expertiseAreaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentCategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    expertiseAreaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreatmentCategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    expertiseAreaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreatmentCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentCategory to aggregate.
     */
    where?: TreatmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentCategories to fetch.
     */
    orderBy?: TreatmentCategoryOrderByWithRelationInput | TreatmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreatmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreatmentCategories
    **/
    _count?: true | TreatmentCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreatmentCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreatmentCategoryMaxAggregateInputType
  }

  export type GetTreatmentCategoryAggregateType<T extends TreatmentCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTreatmentCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreatmentCategory[P]>
      : GetScalarType<T[P], AggregateTreatmentCategory[P]>
  }




  export type TreatmentCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreatmentCategoryWhereInput
    orderBy?: TreatmentCategoryOrderByWithAggregationInput | TreatmentCategoryOrderByWithAggregationInput[]
    by: TreatmentCategoryScalarFieldEnum[] | TreatmentCategoryScalarFieldEnum
    having?: TreatmentCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreatmentCategoryCountAggregateInputType | true
    _min?: TreatmentCategoryMinAggregateInputType
    _max?: TreatmentCategoryMaxAggregateInputType
  }

  export type TreatmentCategoryGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    expertiseAreaId: string
    createdAt: Date
    updatedAt: Date
    _count: TreatmentCategoryCountAggregateOutputType | null
    _min: TreatmentCategoryMinAggregateOutputType | null
    _max: TreatmentCategoryMaxAggregateOutputType | null
  }

  type GetTreatmentCategoryGroupByPayload<T extends TreatmentCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreatmentCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreatmentCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreatmentCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TreatmentCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TreatmentCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    expertiseAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
    procedures?: boolean | TreatmentCategory$proceduresArgs<ExtArgs>
    _count?: boolean | TreatmentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentCategory"]>

  export type TreatmentCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    expertiseAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentCategory"]>

  export type TreatmentCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    expertiseAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treatmentCategory"]>

  export type TreatmentCategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    expertiseAreaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreatmentCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "expertiseAreaId" | "createdAt" | "updatedAt", ExtArgs["result"]["treatmentCategory"]>
  export type TreatmentCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
    procedures?: boolean | TreatmentCategory$proceduresArgs<ExtArgs>
    _count?: boolean | TreatmentCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreatmentCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
  }
  export type TreatmentCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expertiseArea?: boolean | ExpertiseAreaDefaultArgs<ExtArgs>
  }

  export type $TreatmentCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreatmentCategory"
    objects: {
      expertiseArea: Prisma.$ExpertiseAreaPayload<ExtArgs>
      procedures: Prisma.$ProcedurePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      expertiseAreaId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treatmentCategory"]>
    composites: {}
  }

  type TreatmentCategoryGetPayload<S extends boolean | null | undefined | TreatmentCategoryDefaultArgs> = $Result.GetResult<Prisma.$TreatmentCategoryPayload, S>

  type TreatmentCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreatmentCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreatmentCategoryCountAggregateInputType | true
    }

  export interface TreatmentCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreatmentCategory'], meta: { name: 'TreatmentCategory' } }
    /**
     * Find zero or one TreatmentCategory that matches the filter.
     * @param {TreatmentCategoryFindUniqueArgs} args - Arguments to find a TreatmentCategory
     * @example
     * // Get one TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreatmentCategoryFindUniqueArgs>(args: SelectSubset<T, TreatmentCategoryFindUniqueArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TreatmentCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreatmentCategoryFindUniqueOrThrowArgs} args - Arguments to find a TreatmentCategory
     * @example
     * // Get one TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreatmentCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TreatmentCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryFindFirstArgs} args - Arguments to find a TreatmentCategory
     * @example
     * // Get one TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreatmentCategoryFindFirstArgs>(args?: SelectSubset<T, TreatmentCategoryFindFirstArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TreatmentCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryFindFirstOrThrowArgs} args - Arguments to find a TreatmentCategory
     * @example
     * // Get one TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreatmentCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TreatmentCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TreatmentCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreatmentCategories
     * const treatmentCategories = await prisma.treatmentCategory.findMany()
     * 
     * // Get first 10 TreatmentCategories
     * const treatmentCategories = await prisma.treatmentCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treatmentCategoryWithIdOnly = await prisma.treatmentCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreatmentCategoryFindManyArgs>(args?: SelectSubset<T, TreatmentCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TreatmentCategory.
     * @param {TreatmentCategoryCreateArgs} args - Arguments to create a TreatmentCategory.
     * @example
     * // Create one TreatmentCategory
     * const TreatmentCategory = await prisma.treatmentCategory.create({
     *   data: {
     *     // ... data to create a TreatmentCategory
     *   }
     * })
     * 
     */
    create<T extends TreatmentCategoryCreateArgs>(args: SelectSubset<T, TreatmentCategoryCreateArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TreatmentCategories.
     * @param {TreatmentCategoryCreateManyArgs} args - Arguments to create many TreatmentCategories.
     * @example
     * // Create many TreatmentCategories
     * const treatmentCategory = await prisma.treatmentCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreatmentCategoryCreateManyArgs>(args?: SelectSubset<T, TreatmentCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreatmentCategories and returns the data saved in the database.
     * @param {TreatmentCategoryCreateManyAndReturnArgs} args - Arguments to create many TreatmentCategories.
     * @example
     * // Create many TreatmentCategories
     * const treatmentCategory = await prisma.treatmentCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreatmentCategories and only return the `id`
     * const treatmentCategoryWithIdOnly = await prisma.treatmentCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreatmentCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TreatmentCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TreatmentCategory.
     * @param {TreatmentCategoryDeleteArgs} args - Arguments to delete one TreatmentCategory.
     * @example
     * // Delete one TreatmentCategory
     * const TreatmentCategory = await prisma.treatmentCategory.delete({
     *   where: {
     *     // ... filter to delete one TreatmentCategory
     *   }
     * })
     * 
     */
    delete<T extends TreatmentCategoryDeleteArgs>(args: SelectSubset<T, TreatmentCategoryDeleteArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TreatmentCategory.
     * @param {TreatmentCategoryUpdateArgs} args - Arguments to update one TreatmentCategory.
     * @example
     * // Update one TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreatmentCategoryUpdateArgs>(args: SelectSubset<T, TreatmentCategoryUpdateArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TreatmentCategories.
     * @param {TreatmentCategoryDeleteManyArgs} args - Arguments to filter TreatmentCategories to delete.
     * @example
     * // Delete a few TreatmentCategories
     * const { count } = await prisma.treatmentCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreatmentCategoryDeleteManyArgs>(args?: SelectSubset<T, TreatmentCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreatmentCategories
     * const treatmentCategory = await prisma.treatmentCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreatmentCategoryUpdateManyArgs>(args: SelectSubset<T, TreatmentCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreatmentCategories and returns the data updated in the database.
     * @param {TreatmentCategoryUpdateManyAndReturnArgs} args - Arguments to update many TreatmentCategories.
     * @example
     * // Update many TreatmentCategories
     * const treatmentCategory = await prisma.treatmentCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreatmentCategories and only return the `id`
     * const treatmentCategoryWithIdOnly = await prisma.treatmentCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreatmentCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TreatmentCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TreatmentCategory.
     * @param {TreatmentCategoryUpsertArgs} args - Arguments to update or create a TreatmentCategory.
     * @example
     * // Update or create a TreatmentCategory
     * const treatmentCategory = await prisma.treatmentCategory.upsert({
     *   create: {
     *     // ... data to create a TreatmentCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreatmentCategory we want to update
     *   }
     * })
     */
    upsert<T extends TreatmentCategoryUpsertArgs>(args: SelectSubset<T, TreatmentCategoryUpsertArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TreatmentCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryCountArgs} args - Arguments to filter TreatmentCategories to count.
     * @example
     * // Count the number of TreatmentCategories
     * const count = await prisma.treatmentCategory.count({
     *   where: {
     *     // ... the filter for the TreatmentCategories we want to count
     *   }
     * })
    **/
    count<T extends TreatmentCategoryCountArgs>(
      args?: Subset<T, TreatmentCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreatmentCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreatmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreatmentCategoryAggregateArgs>(args: Subset<T, TreatmentCategoryAggregateArgs>): Prisma.PrismaPromise<GetTreatmentCategoryAggregateType<T>>

    /**
     * Group by TreatmentCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreatmentCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreatmentCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreatmentCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TreatmentCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreatmentCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreatmentCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreatmentCategory model
   */
  readonly fields: TreatmentCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreatmentCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreatmentCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expertiseArea<T extends ExpertiseAreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExpertiseAreaDefaultArgs<ExtArgs>>): Prisma__ExpertiseAreaClient<$Result.GetResult<Prisma.$ExpertiseAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    procedures<T extends TreatmentCategory$proceduresArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentCategory$proceduresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreatmentCategory model
   */
  interface TreatmentCategoryFieldRefs {
    readonly id: FieldRef<"TreatmentCategory", 'String'>
    readonly slug: FieldRef<"TreatmentCategory", 'String'>
    readonly name: FieldRef<"TreatmentCategory", 'String'>
    readonly description: FieldRef<"TreatmentCategory", 'String'>
    readonly expertiseAreaId: FieldRef<"TreatmentCategory", 'String'>
    readonly createdAt: FieldRef<"TreatmentCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"TreatmentCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreatmentCategory findUnique
   */
  export type TreatmentCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentCategory to fetch.
     */
    where: TreatmentCategoryWhereUniqueInput
  }

  /**
   * TreatmentCategory findUniqueOrThrow
   */
  export type TreatmentCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentCategory to fetch.
     */
    where: TreatmentCategoryWhereUniqueInput
  }

  /**
   * TreatmentCategory findFirst
   */
  export type TreatmentCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentCategory to fetch.
     */
    where?: TreatmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentCategories to fetch.
     */
    orderBy?: TreatmentCategoryOrderByWithRelationInput | TreatmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentCategories.
     */
    cursor?: TreatmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentCategories.
     */
    distinct?: TreatmentCategoryScalarFieldEnum | TreatmentCategoryScalarFieldEnum[]
  }

  /**
   * TreatmentCategory findFirstOrThrow
   */
  export type TreatmentCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentCategory to fetch.
     */
    where?: TreatmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentCategories to fetch.
     */
    orderBy?: TreatmentCategoryOrderByWithRelationInput | TreatmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreatmentCategories.
     */
    cursor?: TreatmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreatmentCategories.
     */
    distinct?: TreatmentCategoryScalarFieldEnum | TreatmentCategoryScalarFieldEnum[]
  }

  /**
   * TreatmentCategory findMany
   */
  export type TreatmentCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TreatmentCategories to fetch.
     */
    where?: TreatmentCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreatmentCategories to fetch.
     */
    orderBy?: TreatmentCategoryOrderByWithRelationInput | TreatmentCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreatmentCategories.
     */
    cursor?: TreatmentCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreatmentCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreatmentCategories.
     */
    skip?: number
    distinct?: TreatmentCategoryScalarFieldEnum | TreatmentCategoryScalarFieldEnum[]
  }

  /**
   * TreatmentCategory create
   */
  export type TreatmentCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TreatmentCategory.
     */
    data: XOR<TreatmentCategoryCreateInput, TreatmentCategoryUncheckedCreateInput>
  }

  /**
   * TreatmentCategory createMany
   */
  export type TreatmentCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreatmentCategories.
     */
    data: TreatmentCategoryCreateManyInput | TreatmentCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreatmentCategory createManyAndReturn
   */
  export type TreatmentCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many TreatmentCategories.
     */
    data: TreatmentCategoryCreateManyInput | TreatmentCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentCategory update
   */
  export type TreatmentCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TreatmentCategory.
     */
    data: XOR<TreatmentCategoryUpdateInput, TreatmentCategoryUncheckedUpdateInput>
    /**
     * Choose, which TreatmentCategory to update.
     */
    where: TreatmentCategoryWhereUniqueInput
  }

  /**
   * TreatmentCategory updateMany
   */
  export type TreatmentCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreatmentCategories.
     */
    data: XOR<TreatmentCategoryUpdateManyMutationInput, TreatmentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentCategories to update
     */
    where?: TreatmentCategoryWhereInput
    /**
     * Limit how many TreatmentCategories to update.
     */
    limit?: number
  }

  /**
   * TreatmentCategory updateManyAndReturn
   */
  export type TreatmentCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * The data used to update TreatmentCategories.
     */
    data: XOR<TreatmentCategoryUpdateManyMutationInput, TreatmentCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TreatmentCategories to update
     */
    where?: TreatmentCategoryWhereInput
    /**
     * Limit how many TreatmentCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreatmentCategory upsert
   */
  export type TreatmentCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TreatmentCategory to update in case it exists.
     */
    where: TreatmentCategoryWhereUniqueInput
    /**
     * In case the TreatmentCategory found by the `where` argument doesn't exist, create a new TreatmentCategory with this data.
     */
    create: XOR<TreatmentCategoryCreateInput, TreatmentCategoryUncheckedCreateInput>
    /**
     * In case the TreatmentCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreatmentCategoryUpdateInput, TreatmentCategoryUncheckedUpdateInput>
  }

  /**
   * TreatmentCategory delete
   */
  export type TreatmentCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
    /**
     * Filter which TreatmentCategory to delete.
     */
    where: TreatmentCategoryWhereUniqueInput
  }

  /**
   * TreatmentCategory deleteMany
   */
  export type TreatmentCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreatmentCategories to delete
     */
    where?: TreatmentCategoryWhereInput
    /**
     * Limit how many TreatmentCategories to delete.
     */
    limit?: number
  }

  /**
   * TreatmentCategory.procedures
   */
  export type TreatmentCategory$proceduresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    where?: ProcedureWhereInput
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    cursor?: ProcedureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * TreatmentCategory without action
   */
  export type TreatmentCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreatmentCategory
     */
    select?: TreatmentCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreatmentCategory
     */
    omit?: TreatmentCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreatmentCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Procedure
   */

  export type AggregateProcedure = {
    _count: ProcedureCountAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  export type ProcedureMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    treatmentCategoryId: string | null
    seoSettingsId: string | null
    status: $Enums.PublishStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    treatmentCategoryId: string | null
    seoSettingsId: string | null
    status: $Enums.PublishStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    treatmentCategoryId: number
    seoSettingsId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcedureMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    treatmentCategoryId?: true
    seoSettingsId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    treatmentCategoryId?: true
    seoSettingsId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    treatmentCategoryId?: true
    seoSettingsId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcedureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedure to aggregate.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procedures
    **/
    _count?: true | ProcedureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedureMaxAggregateInputType
  }

  export type GetProcedureAggregateType<T extends ProcedureAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedure[P]>
      : GetScalarType<T[P], AggregateProcedure[P]>
  }




  export type ProcedureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureWhereInput
    orderBy?: ProcedureOrderByWithAggregationInput | ProcedureOrderByWithAggregationInput[]
    by: ProcedureScalarFieldEnum[] | ProcedureScalarFieldEnum
    having?: ProcedureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedureCountAggregateInputType | true
    _min?: ProcedureMinAggregateInputType
    _max?: ProcedureMaxAggregateInputType
  }

  export type ProcedureGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    treatmentCategoryId: string
    seoSettingsId: string | null
    status: $Enums.PublishStatus
    createdAt: Date
    updatedAt: Date
    _count: ProcedureCountAggregateOutputType | null
    _min: ProcedureMinAggregateOutputType | null
    _max: ProcedureMaxAggregateOutputType | null
  }

  type GetProcedureGroupByPayload<T extends ProcedureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedureGroupByOutputType[P]>
        }
      >
    >


  export type ProcedureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    treatmentCategoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    methods?: boolean | Procedure$methodsArgs<ExtArgs>
    faqs?: boolean | Procedure$faqsArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedure"]>

  export type ProcedureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    treatmentCategoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
  }, ExtArgs["result"]["procedure"]>

  export type ProcedureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    treatmentCategoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
  }, ExtArgs["result"]["procedure"]>

  export type ProcedureSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    treatmentCategoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcedureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "treatmentCategoryId" | "seoSettingsId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["procedure"]>
  export type ProcedureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    methods?: boolean | Procedure$methodsArgs<ExtArgs>
    faqs?: boolean | Procedure$faqsArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
    _count?: boolean | ProcedureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProcedureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
  }
  export type ProcedureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    treatmentCategory?: boolean | TreatmentCategoryDefaultArgs<ExtArgs>
    seo?: boolean | Procedure$seoArgs<ExtArgs>
  }

  export type $ProcedurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procedure"
    objects: {
      treatmentCategory: Prisma.$TreatmentCategoryPayload<ExtArgs>
      methods: Prisma.$ProcedureMethodPayload<ExtArgs>[]
      faqs: Prisma.$FAQPayload<ExtArgs>[]
      seo: Prisma.$SEOSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      treatmentCategoryId: string
      seoSettingsId: string | null
      status: $Enums.PublishStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["procedure"]>
    composites: {}
  }

  type ProcedureGetPayload<S extends boolean | null | undefined | ProcedureDefaultArgs> = $Result.GetResult<Prisma.$ProcedurePayload, S>

  type ProcedureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcedureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcedureCountAggregateInputType | true
    }

  export interface ProcedureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procedure'], meta: { name: 'Procedure' } }
    /**
     * Find zero or one Procedure that matches the filter.
     * @param {ProcedureFindUniqueArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedureFindUniqueArgs>(args: SelectSubset<T, ProcedureFindUniqueArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Procedure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcedureFindUniqueOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedureFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedureFindFirstArgs>(args?: SelectSubset<T, ProcedureFindFirstArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Procedure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindFirstOrThrowArgs} args - Arguments to find a Procedure
     * @example
     * // Get one Procedure
     * const procedure = await prisma.procedure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedureFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedureFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Procedures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procedures
     * const procedures = await prisma.procedure.findMany()
     * 
     * // Get first 10 Procedures
     * const procedures = await prisma.procedure.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedureWithIdOnly = await prisma.procedure.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedureFindManyArgs>(args?: SelectSubset<T, ProcedureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Procedure.
     * @param {ProcedureCreateArgs} args - Arguments to create a Procedure.
     * @example
     * // Create one Procedure
     * const Procedure = await prisma.procedure.create({
     *   data: {
     *     // ... data to create a Procedure
     *   }
     * })
     * 
     */
    create<T extends ProcedureCreateArgs>(args: SelectSubset<T, ProcedureCreateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Procedures.
     * @param {ProcedureCreateManyArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedure = await prisma.procedure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedureCreateManyArgs>(args?: SelectSubset<T, ProcedureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Procedures and returns the data saved in the database.
     * @param {ProcedureCreateManyAndReturnArgs} args - Arguments to create many Procedures.
     * @example
     * // Create many Procedures
     * const procedure = await prisma.procedure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Procedures and only return the `id`
     * const procedureWithIdOnly = await prisma.procedure.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcedureCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcedureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Procedure.
     * @param {ProcedureDeleteArgs} args - Arguments to delete one Procedure.
     * @example
     * // Delete one Procedure
     * const Procedure = await prisma.procedure.delete({
     *   where: {
     *     // ... filter to delete one Procedure
     *   }
     * })
     * 
     */
    delete<T extends ProcedureDeleteArgs>(args: SelectSubset<T, ProcedureDeleteArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Procedure.
     * @param {ProcedureUpdateArgs} args - Arguments to update one Procedure.
     * @example
     * // Update one Procedure
     * const procedure = await prisma.procedure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedureUpdateArgs>(args: SelectSubset<T, ProcedureUpdateArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Procedures.
     * @param {ProcedureDeleteManyArgs} args - Arguments to filter Procedures to delete.
     * @example
     * // Delete a few Procedures
     * const { count } = await prisma.procedure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedureDeleteManyArgs>(args?: SelectSubset<T, ProcedureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procedures
     * const procedure = await prisma.procedure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedureUpdateManyArgs>(args: SelectSubset<T, ProcedureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procedures and returns the data updated in the database.
     * @param {ProcedureUpdateManyAndReturnArgs} args - Arguments to update many Procedures.
     * @example
     * // Update many Procedures
     * const procedure = await prisma.procedure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Procedures and only return the `id`
     * const procedureWithIdOnly = await prisma.procedure.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcedureUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcedureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Procedure.
     * @param {ProcedureUpsertArgs} args - Arguments to update or create a Procedure.
     * @example
     * // Update or create a Procedure
     * const procedure = await prisma.procedure.upsert({
     *   create: {
     *     // ... data to create a Procedure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procedure we want to update
     *   }
     * })
     */
    upsert<T extends ProcedureUpsertArgs>(args: SelectSubset<T, ProcedureUpsertArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Procedures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureCountArgs} args - Arguments to filter Procedures to count.
     * @example
     * // Count the number of Procedures
     * const count = await prisma.procedure.count({
     *   where: {
     *     // ... the filter for the Procedures we want to count
     *   }
     * })
    **/
    count<T extends ProcedureCountArgs>(
      args?: Subset<T, ProcedureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcedureAggregateArgs>(args: Subset<T, ProcedureAggregateArgs>): Prisma.PrismaPromise<GetProcedureAggregateType<T>>

    /**
     * Group by Procedure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcedureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedureGroupByArgs['orderBy'] }
        : { orderBy?: ProcedureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcedureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procedure model
   */
  readonly fields: ProcedureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procedure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    treatmentCategory<T extends TreatmentCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TreatmentCategoryDefaultArgs<ExtArgs>>): Prisma__TreatmentCategoryClient<$Result.GetResult<Prisma.$TreatmentCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    methods<T extends Procedure$methodsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$methodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    faqs<T extends Procedure$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seo<T extends Procedure$seoArgs<ExtArgs> = {}>(args?: Subset<T, Procedure$seoArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Procedure model
   */
  interface ProcedureFieldRefs {
    readonly id: FieldRef<"Procedure", 'String'>
    readonly slug: FieldRef<"Procedure", 'String'>
    readonly name: FieldRef<"Procedure", 'String'>
    readonly description: FieldRef<"Procedure", 'String'>
    readonly treatmentCategoryId: FieldRef<"Procedure", 'String'>
    readonly seoSettingsId: FieldRef<"Procedure", 'String'>
    readonly status: FieldRef<"Procedure", 'PublishStatus'>
    readonly createdAt: FieldRef<"Procedure", 'DateTime'>
    readonly updatedAt: FieldRef<"Procedure", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Procedure findUnique
   */
  export type ProcedureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findUniqueOrThrow
   */
  export type ProcedureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure findFirst
   */
  export type ProcedureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findFirstOrThrow
   */
  export type ProcedureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedure to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procedures.
     */
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure findMany
   */
  export type ProcedureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter, which Procedures to fetch.
     */
    where?: ProcedureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procedures to fetch.
     */
    orderBy?: ProcedureOrderByWithRelationInput | ProcedureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procedures.
     */
    cursor?: ProcedureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procedures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procedures.
     */
    skip?: number
    distinct?: ProcedureScalarFieldEnum | ProcedureScalarFieldEnum[]
  }

  /**
   * Procedure create
   */
  export type ProcedureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to create a Procedure.
     */
    data: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
  }

  /**
   * Procedure createMany
   */
  export type ProcedureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procedures.
     */
    data: ProcedureCreateManyInput | ProcedureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procedure createManyAndReturn
   */
  export type ProcedureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * The data used to create many Procedures.
     */
    data: ProcedureCreateManyInput | ProcedureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Procedure update
   */
  export type ProcedureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The data needed to update a Procedure.
     */
    data: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
    /**
     * Choose, which Procedure to update.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure updateMany
   */
  export type ProcedureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProcedureUpdateManyMutationInput, ProcedureUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProcedureWhereInput
    /**
     * Limit how many Procedures to update.
     */
    limit?: number
  }

  /**
   * Procedure updateManyAndReturn
   */
  export type ProcedureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * The data used to update Procedures.
     */
    data: XOR<ProcedureUpdateManyMutationInput, ProcedureUncheckedUpdateManyInput>
    /**
     * Filter which Procedures to update
     */
    where?: ProcedureWhereInput
    /**
     * Limit how many Procedures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Procedure upsert
   */
  export type ProcedureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * The filter to search for the Procedure to update in case it exists.
     */
    where: ProcedureWhereUniqueInput
    /**
     * In case the Procedure found by the `where` argument doesn't exist, create a new Procedure with this data.
     */
    create: XOR<ProcedureCreateInput, ProcedureUncheckedCreateInput>
    /**
     * In case the Procedure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedureUpdateInput, ProcedureUncheckedUpdateInput>
  }

  /**
   * Procedure delete
   */
  export type ProcedureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    /**
     * Filter which Procedure to delete.
     */
    where: ProcedureWhereUniqueInput
  }

  /**
   * Procedure deleteMany
   */
  export type ProcedureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procedures to delete
     */
    where?: ProcedureWhereInput
    /**
     * Limit how many Procedures to delete.
     */
    limit?: number
  }

  /**
   * Procedure.methods
   */
  export type Procedure$methodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    where?: ProcedureMethodWhereInput
    orderBy?: ProcedureMethodOrderByWithRelationInput | ProcedureMethodOrderByWithRelationInput[]
    cursor?: ProcedureMethodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcedureMethodScalarFieldEnum | ProcedureMethodScalarFieldEnum[]
  }

  /**
   * Procedure.faqs
   */
  export type Procedure$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    cursor?: FAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * Procedure.seo
   */
  export type Procedure$seoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    where?: SEOSettingsWhereInput
  }

  /**
   * Procedure without action
   */
  export type ProcedureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
  }


  /**
   * Model ProcedureMethod
   */

  export type AggregateProcedureMethod = {
    _count: ProcedureMethodCountAggregateOutputType | null
    _min: ProcedureMethodMinAggregateOutputType | null
    _max: ProcedureMethodMaxAggregateOutputType | null
  }

  export type ProcedureMethodMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    procedureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureMethodMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    procedureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProcedureMethodCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    procedureId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProcedureMethodMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureMethodMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProcedureMethodCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProcedureMethodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcedureMethod to aggregate.
     */
    where?: ProcedureMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedureMethods to fetch.
     */
    orderBy?: ProcedureMethodOrderByWithRelationInput | ProcedureMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcedureMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedureMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedureMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcedureMethods
    **/
    _count?: true | ProcedureMethodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcedureMethodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcedureMethodMaxAggregateInputType
  }

  export type GetProcedureMethodAggregateType<T extends ProcedureMethodAggregateArgs> = {
        [P in keyof T & keyof AggregateProcedureMethod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcedureMethod[P]>
      : GetScalarType<T[P], AggregateProcedureMethod[P]>
  }




  export type ProcedureMethodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcedureMethodWhereInput
    orderBy?: ProcedureMethodOrderByWithAggregationInput | ProcedureMethodOrderByWithAggregationInput[]
    by: ProcedureMethodScalarFieldEnum[] | ProcedureMethodScalarFieldEnum
    having?: ProcedureMethodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcedureMethodCountAggregateInputType | true
    _min?: ProcedureMethodMinAggregateInputType
    _max?: ProcedureMethodMaxAggregateInputType
  }

  export type ProcedureMethodGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    procedureId: string
    createdAt: Date
    updatedAt: Date
    _count: ProcedureMethodCountAggregateOutputType | null
    _min: ProcedureMethodMinAggregateOutputType | null
    _max: ProcedureMethodMaxAggregateOutputType | null
  }

  type GetProcedureMethodGroupByPayload<T extends ProcedureMethodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcedureMethodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcedureMethodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcedureMethodGroupByOutputType[P]>
            : GetScalarType<T[P], ProcedureMethodGroupByOutputType[P]>
        }
      >
    >


  export type ProcedureMethodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedureMethod"]>

  export type ProcedureMethodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedureMethod"]>

  export type ProcedureMethodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procedureMethod"]>

  export type ProcedureMethodSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProcedureMethodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "procedureId" | "createdAt" | "updatedAt", ExtArgs["result"]["procedureMethod"]>
  export type ProcedureMethodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }
  export type ProcedureMethodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }
  export type ProcedureMethodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | ProcedureDefaultArgs<ExtArgs>
  }

  export type $ProcedureMethodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcedureMethod"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      procedureId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["procedureMethod"]>
    composites: {}
  }

  type ProcedureMethodGetPayload<S extends boolean | null | undefined | ProcedureMethodDefaultArgs> = $Result.GetResult<Prisma.$ProcedureMethodPayload, S>

  type ProcedureMethodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProcedureMethodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProcedureMethodCountAggregateInputType | true
    }

  export interface ProcedureMethodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcedureMethod'], meta: { name: 'ProcedureMethod' } }
    /**
     * Find zero or one ProcedureMethod that matches the filter.
     * @param {ProcedureMethodFindUniqueArgs} args - Arguments to find a ProcedureMethod
     * @example
     * // Get one ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcedureMethodFindUniqueArgs>(args: SelectSubset<T, ProcedureMethodFindUniqueArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProcedureMethod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProcedureMethodFindUniqueOrThrowArgs} args - Arguments to find a ProcedureMethod
     * @example
     * // Get one ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcedureMethodFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcedureMethodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcedureMethod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodFindFirstArgs} args - Arguments to find a ProcedureMethod
     * @example
     * // Get one ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcedureMethodFindFirstArgs>(args?: SelectSubset<T, ProcedureMethodFindFirstArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProcedureMethod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodFindFirstOrThrowArgs} args - Arguments to find a ProcedureMethod
     * @example
     * // Get one ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcedureMethodFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcedureMethodFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProcedureMethods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcedureMethods
     * const procedureMethods = await prisma.procedureMethod.findMany()
     * 
     * // Get first 10 ProcedureMethods
     * const procedureMethods = await prisma.procedureMethod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procedureMethodWithIdOnly = await prisma.procedureMethod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcedureMethodFindManyArgs>(args?: SelectSubset<T, ProcedureMethodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProcedureMethod.
     * @param {ProcedureMethodCreateArgs} args - Arguments to create a ProcedureMethod.
     * @example
     * // Create one ProcedureMethod
     * const ProcedureMethod = await prisma.procedureMethod.create({
     *   data: {
     *     // ... data to create a ProcedureMethod
     *   }
     * })
     * 
     */
    create<T extends ProcedureMethodCreateArgs>(args: SelectSubset<T, ProcedureMethodCreateArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProcedureMethods.
     * @param {ProcedureMethodCreateManyArgs} args - Arguments to create many ProcedureMethods.
     * @example
     * // Create many ProcedureMethods
     * const procedureMethod = await prisma.procedureMethod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcedureMethodCreateManyArgs>(args?: SelectSubset<T, ProcedureMethodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProcedureMethods and returns the data saved in the database.
     * @param {ProcedureMethodCreateManyAndReturnArgs} args - Arguments to create many ProcedureMethods.
     * @example
     * // Create many ProcedureMethods
     * const procedureMethod = await prisma.procedureMethod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProcedureMethods and only return the `id`
     * const procedureMethodWithIdOnly = await prisma.procedureMethod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProcedureMethodCreateManyAndReturnArgs>(args?: SelectSubset<T, ProcedureMethodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProcedureMethod.
     * @param {ProcedureMethodDeleteArgs} args - Arguments to delete one ProcedureMethod.
     * @example
     * // Delete one ProcedureMethod
     * const ProcedureMethod = await prisma.procedureMethod.delete({
     *   where: {
     *     // ... filter to delete one ProcedureMethod
     *   }
     * })
     * 
     */
    delete<T extends ProcedureMethodDeleteArgs>(args: SelectSubset<T, ProcedureMethodDeleteArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProcedureMethod.
     * @param {ProcedureMethodUpdateArgs} args - Arguments to update one ProcedureMethod.
     * @example
     * // Update one ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcedureMethodUpdateArgs>(args: SelectSubset<T, ProcedureMethodUpdateArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProcedureMethods.
     * @param {ProcedureMethodDeleteManyArgs} args - Arguments to filter ProcedureMethods to delete.
     * @example
     * // Delete a few ProcedureMethods
     * const { count } = await prisma.procedureMethod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcedureMethodDeleteManyArgs>(args?: SelectSubset<T, ProcedureMethodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcedureMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcedureMethods
     * const procedureMethod = await prisma.procedureMethod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcedureMethodUpdateManyArgs>(args: SelectSubset<T, ProcedureMethodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcedureMethods and returns the data updated in the database.
     * @param {ProcedureMethodUpdateManyAndReturnArgs} args - Arguments to update many ProcedureMethods.
     * @example
     * // Update many ProcedureMethods
     * const procedureMethod = await prisma.procedureMethod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProcedureMethods and only return the `id`
     * const procedureMethodWithIdOnly = await prisma.procedureMethod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProcedureMethodUpdateManyAndReturnArgs>(args: SelectSubset<T, ProcedureMethodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProcedureMethod.
     * @param {ProcedureMethodUpsertArgs} args - Arguments to update or create a ProcedureMethod.
     * @example
     * // Update or create a ProcedureMethod
     * const procedureMethod = await prisma.procedureMethod.upsert({
     *   create: {
     *     // ... data to create a ProcedureMethod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcedureMethod we want to update
     *   }
     * })
     */
    upsert<T extends ProcedureMethodUpsertArgs>(args: SelectSubset<T, ProcedureMethodUpsertArgs<ExtArgs>>): Prisma__ProcedureMethodClient<$Result.GetResult<Prisma.$ProcedureMethodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProcedureMethods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodCountArgs} args - Arguments to filter ProcedureMethods to count.
     * @example
     * // Count the number of ProcedureMethods
     * const count = await prisma.procedureMethod.count({
     *   where: {
     *     // ... the filter for the ProcedureMethods we want to count
     *   }
     * })
    **/
    count<T extends ProcedureMethodCountArgs>(
      args?: Subset<T, ProcedureMethodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcedureMethodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcedureMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcedureMethodAggregateArgs>(args: Subset<T, ProcedureMethodAggregateArgs>): Prisma.PrismaPromise<GetProcedureMethodAggregateType<T>>

    /**
     * Group by ProcedureMethod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcedureMethodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcedureMethodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcedureMethodGroupByArgs['orderBy'] }
        : { orderBy?: ProcedureMethodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcedureMethodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcedureMethodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcedureMethod model
   */
  readonly fields: ProcedureMethodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcedureMethod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcedureMethodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends ProcedureDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcedureDefaultArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcedureMethod model
   */
  interface ProcedureMethodFieldRefs {
    readonly id: FieldRef<"ProcedureMethod", 'String'>
    readonly slug: FieldRef<"ProcedureMethod", 'String'>
    readonly name: FieldRef<"ProcedureMethod", 'String'>
    readonly description: FieldRef<"ProcedureMethod", 'String'>
    readonly procedureId: FieldRef<"ProcedureMethod", 'String'>
    readonly createdAt: FieldRef<"ProcedureMethod", 'DateTime'>
    readonly updatedAt: FieldRef<"ProcedureMethod", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProcedureMethod findUnique
   */
  export type ProcedureMethodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter, which ProcedureMethod to fetch.
     */
    where: ProcedureMethodWhereUniqueInput
  }

  /**
   * ProcedureMethod findUniqueOrThrow
   */
  export type ProcedureMethodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter, which ProcedureMethod to fetch.
     */
    where: ProcedureMethodWhereUniqueInput
  }

  /**
   * ProcedureMethod findFirst
   */
  export type ProcedureMethodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter, which ProcedureMethod to fetch.
     */
    where?: ProcedureMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedureMethods to fetch.
     */
    orderBy?: ProcedureMethodOrderByWithRelationInput | ProcedureMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcedureMethods.
     */
    cursor?: ProcedureMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedureMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedureMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcedureMethods.
     */
    distinct?: ProcedureMethodScalarFieldEnum | ProcedureMethodScalarFieldEnum[]
  }

  /**
   * ProcedureMethod findFirstOrThrow
   */
  export type ProcedureMethodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter, which ProcedureMethod to fetch.
     */
    where?: ProcedureMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedureMethods to fetch.
     */
    orderBy?: ProcedureMethodOrderByWithRelationInput | ProcedureMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcedureMethods.
     */
    cursor?: ProcedureMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedureMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedureMethods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcedureMethods.
     */
    distinct?: ProcedureMethodScalarFieldEnum | ProcedureMethodScalarFieldEnum[]
  }

  /**
   * ProcedureMethod findMany
   */
  export type ProcedureMethodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter, which ProcedureMethods to fetch.
     */
    where?: ProcedureMethodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcedureMethods to fetch.
     */
    orderBy?: ProcedureMethodOrderByWithRelationInput | ProcedureMethodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcedureMethods.
     */
    cursor?: ProcedureMethodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcedureMethods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcedureMethods.
     */
    skip?: number
    distinct?: ProcedureMethodScalarFieldEnum | ProcedureMethodScalarFieldEnum[]
  }

  /**
   * ProcedureMethod create
   */
  export type ProcedureMethodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcedureMethod.
     */
    data: XOR<ProcedureMethodCreateInput, ProcedureMethodUncheckedCreateInput>
  }

  /**
   * ProcedureMethod createMany
   */
  export type ProcedureMethodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcedureMethods.
     */
    data: ProcedureMethodCreateManyInput | ProcedureMethodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProcedureMethod createManyAndReturn
   */
  export type ProcedureMethodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * The data used to create many ProcedureMethods.
     */
    data: ProcedureMethodCreateManyInput | ProcedureMethodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcedureMethod update
   */
  export type ProcedureMethodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcedureMethod.
     */
    data: XOR<ProcedureMethodUpdateInput, ProcedureMethodUncheckedUpdateInput>
    /**
     * Choose, which ProcedureMethod to update.
     */
    where: ProcedureMethodWhereUniqueInput
  }

  /**
   * ProcedureMethod updateMany
   */
  export type ProcedureMethodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcedureMethods.
     */
    data: XOR<ProcedureMethodUpdateManyMutationInput, ProcedureMethodUncheckedUpdateManyInput>
    /**
     * Filter which ProcedureMethods to update
     */
    where?: ProcedureMethodWhereInput
    /**
     * Limit how many ProcedureMethods to update.
     */
    limit?: number
  }

  /**
   * ProcedureMethod updateManyAndReturn
   */
  export type ProcedureMethodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * The data used to update ProcedureMethods.
     */
    data: XOR<ProcedureMethodUpdateManyMutationInput, ProcedureMethodUncheckedUpdateManyInput>
    /**
     * Filter which ProcedureMethods to update
     */
    where?: ProcedureMethodWhereInput
    /**
     * Limit how many ProcedureMethods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProcedureMethod upsert
   */
  export type ProcedureMethodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcedureMethod to update in case it exists.
     */
    where: ProcedureMethodWhereUniqueInput
    /**
     * In case the ProcedureMethod found by the `where` argument doesn't exist, create a new ProcedureMethod with this data.
     */
    create: XOR<ProcedureMethodCreateInput, ProcedureMethodUncheckedCreateInput>
    /**
     * In case the ProcedureMethod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcedureMethodUpdateInput, ProcedureMethodUncheckedUpdateInput>
  }

  /**
   * ProcedureMethod delete
   */
  export type ProcedureMethodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
    /**
     * Filter which ProcedureMethod to delete.
     */
    where: ProcedureMethodWhereUniqueInput
  }

  /**
   * ProcedureMethod deleteMany
   */
  export type ProcedureMethodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcedureMethods to delete
     */
    where?: ProcedureMethodWhereInput
    /**
     * Limit how many ProcedureMethods to delete.
     */
    limit?: number
  }

  /**
   * ProcedureMethod without action
   */
  export type ProcedureMethodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcedureMethod
     */
    select?: ProcedureMethodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProcedureMethod
     */
    omit?: ProcedureMethodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureMethodInclude<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    isGlobal: boolean | null
    procedureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    isGlobal: boolean | null
    procedureId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    isGlobal: number
    procedureId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    isGlobal?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    isGlobal?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    isGlobal?: true
    procedureId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    question: string
    answer: string
    isGlobal: boolean
    procedureId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    isGlobal?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    isGlobal?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    isGlobal?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>

  export type FAQSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    isGlobal?: boolean
    procedureId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FAQOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "isGlobal" | "procedureId" | "createdAt" | "updatedAt", ExtArgs["result"]["fAQ"]>
  export type FAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }
  export type FAQIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }
  export type FAQIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procedure?: boolean | FAQ$procedureArgs<ExtArgs>
  }

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {
      procedure: Prisma.$ProcedurePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      isGlobal: boolean
      procedureId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FAQS and returns the data saved in the database.
     * @param {FAQCreateManyAndReturnArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FAQCreateManyAndReturnArgs>(args?: SelectSubset<T, FAQCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS and returns the data updated in the database.
     * @param {FAQUpdateManyAndReturnArgs} args - Arguments to update many FAQS.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FAQS and only return the `id`
     * const fAQWithIdOnly = await prisma.fAQ.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FAQUpdateManyAndReturnArgs>(args: SelectSubset<T, FAQUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    procedure<T extends FAQ$procedureArgs<ExtArgs> = {}>(args?: Subset<T, FAQ$procedureArgs<ExtArgs>>): Prisma__ProcedureClient<$Result.GetResult<Prisma.$ProcedurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FAQ model
   */
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answer: FieldRef<"FAQ", 'String'>
    readonly isGlobal: FieldRef<"FAQ", 'Boolean'>
    readonly procedureId: FieldRef<"FAQ", 'String'>
    readonly createdAt: FieldRef<"FAQ", 'DateTime'>
    readonly updatedAt: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FAQ createManyAndReturn
   */
  export type FAQCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
  }

  /**
   * FAQ updateManyAndReturn
   */
  export type FAQUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
    /**
     * Limit how many FAQS to delete.
     */
    limit?: number
  }

  /**
   * FAQ.procedure
   */
  export type FAQ$procedureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procedure
     */
    select?: ProcedureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Procedure
     */
    omit?: ProcedureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcedureInclude<ExtArgs> | null
    where?: ProcedureWhereInput
  }

  /**
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FAQ
     */
    omit?: FAQOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
  }


  /**
   * Model BlogPost
   */

  export type AggregateBlogPost = {
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  export type BlogPostMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    excerpt: string | null
    coverImage: string | null
    categoryId: string | null
    seoSettingsId: string | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    content: string | null
    excerpt: string | null
    coverImage: string | null
    categoryId: string | null
    seoSettingsId: string | null
    status: $Enums.PublishStatus | null
    publishedAt: Date | null
    authorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogPostCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    content: number
    excerpt: number
    coverImage: number
    categoryId: number
    seoSettingsId: number
    status: number
    publishedAt: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogPostMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    excerpt?: true
    coverImage?: true
    categoryId?: true
    seoSettingsId?: true
    status?: true
    publishedAt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    excerpt?: true
    coverImage?: true
    categoryId?: true
    seoSettingsId?: true
    status?: true
    publishedAt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogPostCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    content?: true
    excerpt?: true
    coverImage?: true
    categoryId?: true
    seoSettingsId?: true
    status?: true
    publishedAt?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPost to aggregate.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogPosts
    **/
    _count?: true | BlogPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogPostMaxAggregateInputType
  }

  export type GetBlogPostAggregateType<T extends BlogPostAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogPost[P]>
      : GetScalarType<T[P], AggregateBlogPost[P]>
  }




  export type BlogPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithAggregationInput | BlogPostOrderByWithAggregationInput[]
    by: BlogPostScalarFieldEnum[] | BlogPostScalarFieldEnum
    having?: BlogPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogPostCountAggregateInputType | true
    _min?: BlogPostMinAggregateInputType
    _max?: BlogPostMaxAggregateInputType
  }

  export type BlogPostGroupByOutputType = {
    id: string
    slug: string
    title: string
    content: string
    excerpt: string | null
    coverImage: string | null
    categoryId: string | null
    seoSettingsId: string | null
    status: $Enums.PublishStatus
    publishedAt: Date | null
    authorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: BlogPostCountAggregateOutputType | null
    _min: BlogPostMinAggregateOutputType | null
    _max: BlogPostMaxAggregateOutputType | null
  }

  type GetBlogPostGroupByPayload<T extends BlogPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
            : GetScalarType<T[P], BlogPostGroupByOutputType[P]>
        }
      >
    >


  export type BlogPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    categoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    publishedAt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    categoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    publishedAt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    categoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    publishedAt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }, ExtArgs["result"]["blogPost"]>

  export type BlogPostSelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    content?: boolean
    excerpt?: boolean
    coverImage?: boolean
    categoryId?: boolean
    seoSettingsId?: boolean
    status?: boolean
    publishedAt?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "content" | "excerpt" | "coverImage" | "categoryId" | "seoSettingsId" | "status" | "publishedAt" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["blogPost"]>
  export type BlogPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }
  export type BlogPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }
  export type BlogPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | BlogPost$categoryArgs<ExtArgs>
    seo?: boolean | BlogPost$seoArgs<ExtArgs>
  }

  export type $BlogPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlogPost"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs> | null
      seo: Prisma.$SEOSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      content: string
      excerpt: string | null
      coverImage: string | null
      categoryId: string | null
      seoSettingsId: string | null
      status: $Enums.PublishStatus
      publishedAt: Date | null
      authorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blogPost"]>
    composites: {}
  }

  type BlogPostGetPayload<S extends boolean | null | undefined | BlogPostDefaultArgs> = $Result.GetResult<Prisma.$BlogPostPayload, S>

  type BlogPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogPostCountAggregateInputType | true
    }

  export interface BlogPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlogPost'], meta: { name: 'BlogPost' } }
    /**
     * Find zero or one BlogPost that matches the filter.
     * @param {BlogPostFindUniqueArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogPostFindUniqueArgs>(args: SelectSubset<T, BlogPostFindUniqueArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlogPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogPostFindUniqueOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogPostFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogPostFindFirstArgs>(args?: SelectSubset<T, BlogPostFindFirstArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlogPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindFirstOrThrowArgs} args - Arguments to find a BlogPost
     * @example
     * // Get one BlogPost
     * const blogPost = await prisma.blogPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogPostFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlogPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogPosts
     * const blogPosts = await prisma.blogPost.findMany()
     * 
     * // Get first 10 BlogPosts
     * const blogPosts = await prisma.blogPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogPostFindManyArgs>(args?: SelectSubset<T, BlogPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlogPost.
     * @param {BlogPostCreateArgs} args - Arguments to create a BlogPost.
     * @example
     * // Create one BlogPost
     * const BlogPost = await prisma.blogPost.create({
     *   data: {
     *     // ... data to create a BlogPost
     *   }
     * })
     * 
     */
    create<T extends BlogPostCreateArgs>(args: SelectSubset<T, BlogPostCreateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlogPosts.
     * @param {BlogPostCreateManyArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogPostCreateManyArgs>(args?: SelectSubset<T, BlogPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlogPosts and returns the data saved in the database.
     * @param {BlogPostCreateManyAndReturnArgs} args - Arguments to create many BlogPosts.
     * @example
     * // Create many BlogPosts
     * const blogPost = await prisma.blogPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogPostCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlogPost.
     * @param {BlogPostDeleteArgs} args - Arguments to delete one BlogPost.
     * @example
     * // Delete one BlogPost
     * const BlogPost = await prisma.blogPost.delete({
     *   where: {
     *     // ... filter to delete one BlogPost
     *   }
     * })
     * 
     */
    delete<T extends BlogPostDeleteArgs>(args: SelectSubset<T, BlogPostDeleteArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlogPost.
     * @param {BlogPostUpdateArgs} args - Arguments to update one BlogPost.
     * @example
     * // Update one BlogPost
     * const blogPost = await prisma.blogPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogPostUpdateArgs>(args: SelectSubset<T, BlogPostUpdateArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlogPosts.
     * @param {BlogPostDeleteManyArgs} args - Arguments to filter BlogPosts to delete.
     * @example
     * // Delete a few BlogPosts
     * const { count } = await prisma.blogPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogPostDeleteManyArgs>(args?: SelectSubset<T, BlogPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogPostUpdateManyArgs>(args: SelectSubset<T, BlogPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogPosts and returns the data updated in the database.
     * @param {BlogPostUpdateManyAndReturnArgs} args - Arguments to update many BlogPosts.
     * @example
     * // Update many BlogPosts
     * const blogPost = await prisma.blogPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlogPosts and only return the `id`
     * const blogPostWithIdOnly = await prisma.blogPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogPostUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlogPost.
     * @param {BlogPostUpsertArgs} args - Arguments to update or create a BlogPost.
     * @example
     * // Update or create a BlogPost
     * const blogPost = await prisma.blogPost.upsert({
     *   create: {
     *     // ... data to create a BlogPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogPost we want to update
     *   }
     * })
     */
    upsert<T extends BlogPostUpsertArgs>(args: SelectSubset<T, BlogPostUpsertArgs<ExtArgs>>): Prisma__BlogPostClient<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlogPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostCountArgs} args - Arguments to filter BlogPosts to count.
     * @example
     * // Count the number of BlogPosts
     * const count = await prisma.blogPost.count({
     *   where: {
     *     // ... the filter for the BlogPosts we want to count
     *   }
     * })
    **/
    count<T extends BlogPostCountArgs>(
      args?: Subset<T, BlogPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlogPostAggregateArgs>(args: Subset<T, BlogPostAggregateArgs>): Prisma.PrismaPromise<GetBlogPostAggregateType<T>>

    /**
     * Group by BlogPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlogPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogPostGroupByArgs['orderBy'] }
        : { orderBy?: BlogPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlogPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlogPost model
   */
  readonly fields: BlogPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends BlogPost$categoryArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seo<T extends BlogPost$seoArgs<ExtArgs> = {}>(args?: Subset<T, BlogPost$seoArgs<ExtArgs>>): Prisma__SEOSettingsClient<$Result.GetResult<Prisma.$SEOSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlogPost model
   */
  interface BlogPostFieldRefs {
    readonly id: FieldRef<"BlogPost", 'String'>
    readonly slug: FieldRef<"BlogPost", 'String'>
    readonly title: FieldRef<"BlogPost", 'String'>
    readonly content: FieldRef<"BlogPost", 'String'>
    readonly excerpt: FieldRef<"BlogPost", 'String'>
    readonly coverImage: FieldRef<"BlogPost", 'String'>
    readonly categoryId: FieldRef<"BlogPost", 'String'>
    readonly seoSettingsId: FieldRef<"BlogPost", 'String'>
    readonly status: FieldRef<"BlogPost", 'PublishStatus'>
    readonly publishedAt: FieldRef<"BlogPost", 'DateTime'>
    readonly authorId: FieldRef<"BlogPost", 'String'>
    readonly createdAt: FieldRef<"BlogPost", 'DateTime'>
    readonly updatedAt: FieldRef<"BlogPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlogPost findUnique
   */
  export type BlogPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findUniqueOrThrow
   */
  export type BlogPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost findFirst
   */
  export type BlogPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findFirstOrThrow
   */
  export type BlogPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPost to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogPosts.
     */
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost findMany
   */
  export type BlogPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter, which BlogPosts to fetch.
     */
    where?: BlogPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogPosts to fetch.
     */
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogPosts.
     */
    cursor?: BlogPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogPosts.
     */
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * BlogPost create
   */
  export type BlogPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to create a BlogPost.
     */
    data: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
  }

  /**
   * BlogPost createMany
   */
  export type BlogPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlogPost createManyAndReturn
   */
  export type BlogPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to create many BlogPosts.
     */
    data: BlogPostCreateManyInput | BlogPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost update
   */
  export type BlogPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The data needed to update a BlogPost.
     */
    data: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
    /**
     * Choose, which BlogPost to update.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost updateMany
   */
  export type BlogPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
  }

  /**
   * BlogPost updateManyAndReturn
   */
  export type BlogPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * The data used to update BlogPosts.
     */
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyInput>
    /**
     * Filter which BlogPosts to update
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlogPost upsert
   */
  export type BlogPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * The filter to search for the BlogPost to update in case it exists.
     */
    where: BlogPostWhereUniqueInput
    /**
     * In case the BlogPost found by the `where` argument doesn't exist, create a new BlogPost with this data.
     */
    create: XOR<BlogPostCreateInput, BlogPostUncheckedCreateInput>
    /**
     * In case the BlogPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogPostUpdateInput, BlogPostUncheckedUpdateInput>
  }

  /**
   * BlogPost delete
   */
  export type BlogPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    /**
     * Filter which BlogPost to delete.
     */
    where: BlogPostWhereUniqueInput
  }

  /**
   * BlogPost deleteMany
   */
  export type BlogPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlogPosts to delete
     */
    where?: BlogPostWhereInput
    /**
     * Limit how many BlogPosts to delete.
     */
    limit?: number
  }

  /**
   * BlogPost.category
   */
  export type BlogPost$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * BlogPost.seo
   */
  export type BlogPost$seoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SEOSettings
     */
    select?: SEOSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SEOSettings
     */
    omit?: SEOSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SEOSettingsInclude<ExtArgs> | null
    where?: SEOSettingsWhereInput
  }

  /**
   * BlogPost without action
   */
  export type BlogPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      posts: Prisma.$BlogPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogPost
     */
    select?: BlogPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlogPost
     */
    omit?: BlogPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogPostInclude<ExtArgs> | null
    where?: BlogPostWhereInput
    orderBy?: BlogPostOrderByWithRelationInput | BlogPostOrderByWithRelationInput[]
    cursor?: BlogPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogPostScalarFieldEnum | BlogPostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    url: string
    alt: string | null
    type: string
    createdAt: Date
    updatedAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["media"]>

  export type MediaSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["media"]>

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string | null
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Media and returns the data saved in the database.
     * @param {MediaCreateManyAndReturnArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media and returns the data updated in the database.
     * @param {MediaUpdateManyAndReturnArgs} args - Arguments to update many Media.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Media and only return the `id`
     * const mediaWithIdOnly = await prisma.media.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly alt: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
    readonly updatedAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media createManyAndReturn
   */
  export type MediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media updateManyAndReturn
   */
  export type MediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SEOSettingsScalarFieldEnum: {
    id: 'id',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    canonicalUrl: 'canonicalUrl',
    ogImage: 'ogImage',
    noIndex: 'noIndex'
  };

  export type SEOSettingsScalarFieldEnum = (typeof SEOSettingsScalarFieldEnum)[keyof typeof SEOSettingsScalarFieldEnum]


  export const PageScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    status: 'status',
    publishedAt: 'publishedAt',
    seoSettingsId: 'seoSettingsId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageScalarFieldEnum = (typeof PageScalarFieldEnum)[keyof typeof PageScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    path: 'path',
    order: 'order',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const ExpertiseAreaScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExpertiseAreaScalarFieldEnum = (typeof ExpertiseAreaScalarFieldEnum)[keyof typeof ExpertiseAreaScalarFieldEnum]


  export const TreatmentCategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    expertiseAreaId: 'expertiseAreaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreatmentCategoryScalarFieldEnum = (typeof TreatmentCategoryScalarFieldEnum)[keyof typeof TreatmentCategoryScalarFieldEnum]


  export const ProcedureScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    treatmentCategoryId: 'treatmentCategoryId',
    seoSettingsId: 'seoSettingsId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcedureScalarFieldEnum = (typeof ProcedureScalarFieldEnum)[keyof typeof ProcedureScalarFieldEnum]


  export const ProcedureMethodScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    procedureId: 'procedureId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProcedureMethodScalarFieldEnum = (typeof ProcedureMethodScalarFieldEnum)[keyof typeof ProcedureMethodScalarFieldEnum]


  export const FAQScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    isGlobal: 'isGlobal',
    procedureId: 'procedureId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const BlogPostScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    content: 'content',
    excerpt: 'excerpt',
    coverImage: 'coverImage',
    categoryId: 'categoryId',
    seoSettingsId: 'seoSettingsId',
    status: 'status',
    publishedAt: 'publishedAt',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogPostScalarFieldEnum = (typeof BlogPostScalarFieldEnum)[keyof typeof BlogPostScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PublishStatus'
   */
  export type EnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus'>
    


  /**
   * Reference to a field of type 'PublishStatus[]'
   */
  export type ListEnumPublishStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PublishStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SEOSettingsWhereInput = {
    AND?: SEOSettingsWhereInput | SEOSettingsWhereInput[]
    OR?: SEOSettingsWhereInput[]
    NOT?: SEOSettingsWhereInput | SEOSettingsWhereInput[]
    id?: StringFilter<"SEOSettings"> | string
    metaTitle?: StringNullableFilter<"SEOSettings"> | string | null
    metaDescription?: StringNullableFilter<"SEOSettings"> | string | null
    canonicalUrl?: StringNullableFilter<"SEOSettings"> | string | null
    ogImage?: StringNullableFilter<"SEOSettings"> | string | null
    noIndex?: BoolFilter<"SEOSettings"> | boolean
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    procedure?: XOR<ProcedureNullableScalarRelationFilter, ProcedureWhereInput> | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
  }

  export type SEOSettingsOrderByWithRelationInput = {
    id?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    noIndex?: SortOrder
    page?: PageOrderByWithRelationInput
    procedure?: ProcedureOrderByWithRelationInput
    blogPost?: BlogPostOrderByWithRelationInput
  }

  export type SEOSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SEOSettingsWhereInput | SEOSettingsWhereInput[]
    OR?: SEOSettingsWhereInput[]
    NOT?: SEOSettingsWhereInput | SEOSettingsWhereInput[]
    metaTitle?: StringNullableFilter<"SEOSettings"> | string | null
    metaDescription?: StringNullableFilter<"SEOSettings"> | string | null
    canonicalUrl?: StringNullableFilter<"SEOSettings"> | string | null
    ogImage?: StringNullableFilter<"SEOSettings"> | string | null
    noIndex?: BoolFilter<"SEOSettings"> | boolean
    page?: XOR<PageNullableScalarRelationFilter, PageWhereInput> | null
    procedure?: XOR<ProcedureNullableScalarRelationFilter, ProcedureWhereInput> | null
    blogPost?: XOR<BlogPostNullableScalarRelationFilter, BlogPostWhereInput> | null
  }, "id">

  export type SEOSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    canonicalUrl?: SortOrderInput | SortOrder
    ogImage?: SortOrderInput | SortOrder
    noIndex?: SortOrder
    _count?: SEOSettingsCountOrderByAggregateInput
    _max?: SEOSettingsMaxOrderByAggregateInput
    _min?: SEOSettingsMinOrderByAggregateInput
  }

  export type SEOSettingsScalarWhereWithAggregatesInput = {
    AND?: SEOSettingsScalarWhereWithAggregatesInput | SEOSettingsScalarWhereWithAggregatesInput[]
    OR?: SEOSettingsScalarWhereWithAggregatesInput[]
    NOT?: SEOSettingsScalarWhereWithAggregatesInput | SEOSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SEOSettings"> | string
    metaTitle?: StringNullableWithAggregatesFilter<"SEOSettings"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"SEOSettings"> | string | null
    canonicalUrl?: StringNullableWithAggregatesFilter<"SEOSettings"> | string | null
    ogImage?: StringNullableWithAggregatesFilter<"SEOSettings"> | string | null
    noIndex?: BoolWithAggregatesFilter<"SEOSettings"> | boolean
  }

  export type PageWhereInput = {
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    id?: StringFilter<"Page"> | string
    slug?: StringFilter<"Page"> | string
    title?: StringFilter<"Page"> | string
    content?: StringFilter<"Page"> | string
    status?: EnumPublishStatusFilter<"Page"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    seoSettingsId?: StringNullableFilter<"Page"> | string | null
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }

  export type PageOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seo?: SEOSettingsOrderByWithRelationInput
  }

  export type PageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    seoSettingsId?: string
    AND?: PageWhereInput | PageWhereInput[]
    OR?: PageWhereInput[]
    NOT?: PageWhereInput | PageWhereInput[]
    title?: StringFilter<"Page"> | string
    content?: StringFilter<"Page"> | string
    status?: EnumPublishStatusFilter<"Page"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"Page"> | Date | string | null
    createdAt?: DateTimeFilter<"Page"> | Date | string
    updatedAt?: DateTimeFilter<"Page"> | Date | string
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }, "id" | "slug" | "seoSettingsId">

  export type PageOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageCountOrderByAggregateInput
    _max?: PageMaxOrderByAggregateInput
    _min?: PageMinOrderByAggregateInput
  }

  export type PageScalarWhereWithAggregatesInput = {
    AND?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    OR?: PageScalarWhereWithAggregatesInput[]
    NOT?: PageScalarWhereWithAggregatesInput | PageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Page"> | string
    slug?: StringWithAggregatesFilter<"Page"> | string
    title?: StringWithAggregatesFilter<"Page"> | string
    content?: StringWithAggregatesFilter<"Page"> | string
    status?: EnumPublishStatusWithAggregatesFilter<"Page"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Page"> | Date | string | null
    seoSettingsId?: StringNullableWithAggregatesFilter<"Page"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Page"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    label?: StringFilter<"MenuItem"> | string
    path?: StringFilter<"MenuItem"> | string
    order?: IntFilter<"MenuItem"> | number
    parentId?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    parent?: XOR<MenuItemNullableScalarRelationFilter, MenuItemWhereInput> | null
    children?: MenuItemListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    order?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: MenuItemOrderByWithRelationInput
    children?: MenuItemOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    label?: StringFilter<"MenuItem"> | string
    path?: StringFilter<"MenuItem"> | string
    order?: IntFilter<"MenuItem"> | number
    parentId?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    parent?: XOR<MenuItemNullableScalarRelationFilter, MenuItemWhereInput> | null
    children?: MenuItemListRelationFilter
  }, "id">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    order?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    label?: StringWithAggregatesFilter<"MenuItem"> | string
    path?: StringWithAggregatesFilter<"MenuItem"> | string
    order?: IntWithAggregatesFilter<"MenuItem"> | number
    parentId?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type ExpertiseAreaWhereInput = {
    AND?: ExpertiseAreaWhereInput | ExpertiseAreaWhereInput[]
    OR?: ExpertiseAreaWhereInput[]
    NOT?: ExpertiseAreaWhereInput | ExpertiseAreaWhereInput[]
    id?: StringFilter<"ExpertiseArea"> | string
    slug?: StringFilter<"ExpertiseArea"> | string
    name?: StringFilter<"ExpertiseArea"> | string
    description?: StringNullableFilter<"ExpertiseArea"> | string | null
    image?: StringNullableFilter<"ExpertiseArea"> | string | null
    createdAt?: DateTimeFilter<"ExpertiseArea"> | Date | string
    updatedAt?: DateTimeFilter<"ExpertiseArea"> | Date | string
    treatments?: TreatmentCategoryListRelationFilter
  }

  export type ExpertiseAreaOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    treatments?: TreatmentCategoryOrderByRelationAggregateInput
  }

  export type ExpertiseAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ExpertiseAreaWhereInput | ExpertiseAreaWhereInput[]
    OR?: ExpertiseAreaWhereInput[]
    NOT?: ExpertiseAreaWhereInput | ExpertiseAreaWhereInput[]
    name?: StringFilter<"ExpertiseArea"> | string
    description?: StringNullableFilter<"ExpertiseArea"> | string | null
    image?: StringNullableFilter<"ExpertiseArea"> | string | null
    createdAt?: DateTimeFilter<"ExpertiseArea"> | Date | string
    updatedAt?: DateTimeFilter<"ExpertiseArea"> | Date | string
    treatments?: TreatmentCategoryListRelationFilter
  }, "id" | "slug">

  export type ExpertiseAreaOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExpertiseAreaCountOrderByAggregateInput
    _max?: ExpertiseAreaMaxOrderByAggregateInput
    _min?: ExpertiseAreaMinOrderByAggregateInput
  }

  export type ExpertiseAreaScalarWhereWithAggregatesInput = {
    AND?: ExpertiseAreaScalarWhereWithAggregatesInput | ExpertiseAreaScalarWhereWithAggregatesInput[]
    OR?: ExpertiseAreaScalarWhereWithAggregatesInput[]
    NOT?: ExpertiseAreaScalarWhereWithAggregatesInput | ExpertiseAreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpertiseArea"> | string
    slug?: StringWithAggregatesFilter<"ExpertiseArea"> | string
    name?: StringWithAggregatesFilter<"ExpertiseArea"> | string
    description?: StringNullableWithAggregatesFilter<"ExpertiseArea"> | string | null
    image?: StringNullableWithAggregatesFilter<"ExpertiseArea"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExpertiseArea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExpertiseArea"> | Date | string
  }

  export type TreatmentCategoryWhereInput = {
    AND?: TreatmentCategoryWhereInput | TreatmentCategoryWhereInput[]
    OR?: TreatmentCategoryWhereInput[]
    NOT?: TreatmentCategoryWhereInput | TreatmentCategoryWhereInput[]
    id?: StringFilter<"TreatmentCategory"> | string
    slug?: StringFilter<"TreatmentCategory"> | string
    name?: StringFilter<"TreatmentCategory"> | string
    description?: StringNullableFilter<"TreatmentCategory"> | string | null
    expertiseAreaId?: StringFilter<"TreatmentCategory"> | string
    createdAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
    expertiseArea?: XOR<ExpertiseAreaScalarRelationFilter, ExpertiseAreaWhereInput>
    procedures?: ProcedureListRelationFilter
  }

  export type TreatmentCategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    expertiseAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expertiseArea?: ExpertiseAreaOrderByWithRelationInput
    procedures?: ProcedureOrderByRelationAggregateInput
  }

  export type TreatmentCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TreatmentCategoryWhereInput | TreatmentCategoryWhereInput[]
    OR?: TreatmentCategoryWhereInput[]
    NOT?: TreatmentCategoryWhereInput | TreatmentCategoryWhereInput[]
    name?: StringFilter<"TreatmentCategory"> | string
    description?: StringNullableFilter<"TreatmentCategory"> | string | null
    expertiseAreaId?: StringFilter<"TreatmentCategory"> | string
    createdAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
    expertiseArea?: XOR<ExpertiseAreaScalarRelationFilter, ExpertiseAreaWhereInput>
    procedures?: ProcedureListRelationFilter
  }, "id" | "slug">

  export type TreatmentCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    expertiseAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreatmentCategoryCountOrderByAggregateInput
    _max?: TreatmentCategoryMaxOrderByAggregateInput
    _min?: TreatmentCategoryMinOrderByAggregateInput
  }

  export type TreatmentCategoryScalarWhereWithAggregatesInput = {
    AND?: TreatmentCategoryScalarWhereWithAggregatesInput | TreatmentCategoryScalarWhereWithAggregatesInput[]
    OR?: TreatmentCategoryScalarWhereWithAggregatesInput[]
    NOT?: TreatmentCategoryScalarWhereWithAggregatesInput | TreatmentCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreatmentCategory"> | string
    slug?: StringWithAggregatesFilter<"TreatmentCategory"> | string
    name?: StringWithAggregatesFilter<"TreatmentCategory"> | string
    description?: StringNullableWithAggregatesFilter<"TreatmentCategory"> | string | null
    expertiseAreaId?: StringWithAggregatesFilter<"TreatmentCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TreatmentCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TreatmentCategory"> | Date | string
  }

  export type ProcedureWhereInput = {
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    id?: StringFilter<"Procedure"> | string
    slug?: StringFilter<"Procedure"> | string
    name?: StringFilter<"Procedure"> | string
    description?: StringNullableFilter<"Procedure"> | string | null
    treatmentCategoryId?: StringFilter<"Procedure"> | string
    seoSettingsId?: StringNullableFilter<"Procedure"> | string | null
    status?: EnumPublishStatusFilter<"Procedure"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    treatmentCategory?: XOR<TreatmentCategoryScalarRelationFilter, TreatmentCategoryWhereInput>
    methods?: ProcedureMethodListRelationFilter
    faqs?: FAQListRelationFilter
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }

  export type ProcedureOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    treatmentCategoryId?: SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    treatmentCategory?: TreatmentCategoryOrderByWithRelationInput
    methods?: ProcedureMethodOrderByRelationAggregateInput
    faqs?: FAQOrderByRelationAggregateInput
    seo?: SEOSettingsOrderByWithRelationInput
  }

  export type ProcedureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    seoSettingsId?: string
    AND?: ProcedureWhereInput | ProcedureWhereInput[]
    OR?: ProcedureWhereInput[]
    NOT?: ProcedureWhereInput | ProcedureWhereInput[]
    name?: StringFilter<"Procedure"> | string
    description?: StringNullableFilter<"Procedure"> | string | null
    treatmentCategoryId?: StringFilter<"Procedure"> | string
    status?: EnumPublishStatusFilter<"Procedure"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
    treatmentCategory?: XOR<TreatmentCategoryScalarRelationFilter, TreatmentCategoryWhereInput>
    methods?: ProcedureMethodListRelationFilter
    faqs?: FAQListRelationFilter
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }, "id" | "slug" | "seoSettingsId">

  export type ProcedureOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    treatmentCategoryId?: SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcedureCountOrderByAggregateInput
    _max?: ProcedureMaxOrderByAggregateInput
    _min?: ProcedureMinOrderByAggregateInput
  }

  export type ProcedureScalarWhereWithAggregatesInput = {
    AND?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    OR?: ProcedureScalarWhereWithAggregatesInput[]
    NOT?: ProcedureScalarWhereWithAggregatesInput | ProcedureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Procedure"> | string
    slug?: StringWithAggregatesFilter<"Procedure"> | string
    name?: StringWithAggregatesFilter<"Procedure"> | string
    description?: StringNullableWithAggregatesFilter<"Procedure"> | string | null
    treatmentCategoryId?: StringWithAggregatesFilter<"Procedure"> | string
    seoSettingsId?: StringNullableWithAggregatesFilter<"Procedure"> | string | null
    status?: EnumPublishStatusWithAggregatesFilter<"Procedure"> | $Enums.PublishStatus
    createdAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Procedure"> | Date | string
  }

  export type ProcedureMethodWhereInput = {
    AND?: ProcedureMethodWhereInput | ProcedureMethodWhereInput[]
    OR?: ProcedureMethodWhereInput[]
    NOT?: ProcedureMethodWhereInput | ProcedureMethodWhereInput[]
    id?: StringFilter<"ProcedureMethod"> | string
    slug?: StringFilter<"ProcedureMethod"> | string
    name?: StringFilter<"ProcedureMethod"> | string
    description?: StringNullableFilter<"ProcedureMethod"> | string | null
    procedureId?: StringFilter<"ProcedureMethod"> | string
    createdAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
    updatedAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }

  export type ProcedureMethodOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
  }

  export type ProcedureMethodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProcedureMethodWhereInput | ProcedureMethodWhereInput[]
    OR?: ProcedureMethodWhereInput[]
    NOT?: ProcedureMethodWhereInput | ProcedureMethodWhereInput[]
    name?: StringFilter<"ProcedureMethod"> | string
    description?: StringNullableFilter<"ProcedureMethod"> | string | null
    procedureId?: StringFilter<"ProcedureMethod"> | string
    createdAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
    updatedAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
    procedure?: XOR<ProcedureScalarRelationFilter, ProcedureWhereInput>
  }, "id" | "slug">

  export type ProcedureMethodOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProcedureMethodCountOrderByAggregateInput
    _max?: ProcedureMethodMaxOrderByAggregateInput
    _min?: ProcedureMethodMinOrderByAggregateInput
  }

  export type ProcedureMethodScalarWhereWithAggregatesInput = {
    AND?: ProcedureMethodScalarWhereWithAggregatesInput | ProcedureMethodScalarWhereWithAggregatesInput[]
    OR?: ProcedureMethodScalarWhereWithAggregatesInput[]
    NOT?: ProcedureMethodScalarWhereWithAggregatesInput | ProcedureMethodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcedureMethod"> | string
    slug?: StringWithAggregatesFilter<"ProcedureMethod"> | string
    name?: StringWithAggregatesFilter<"ProcedureMethod"> | string
    description?: StringNullableWithAggregatesFilter<"ProcedureMethod"> | string | null
    procedureId?: StringWithAggregatesFilter<"ProcedureMethod"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcedureMethod"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProcedureMethod"> | Date | string
  }

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    isGlobal?: BoolFilter<"FAQ"> | boolean
    procedureId?: StringNullableFilter<"FAQ"> | string | null
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
    procedure?: XOR<ProcedureNullableScalarRelationFilter, ProcedureWhereInput> | null
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    isGlobal?: SortOrder
    procedureId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    procedure?: ProcedureOrderByWithRelationInput
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    isGlobal?: BoolFilter<"FAQ"> | boolean
    procedureId?: StringNullableFilter<"FAQ"> | string | null
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
    procedure?: XOR<ProcedureNullableScalarRelationFilter, ProcedureWhereInput> | null
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    isGlobal?: SortOrder
    procedureId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    question?: StringWithAggregatesFilter<"FAQ"> | string
    answer?: StringWithAggregatesFilter<"FAQ"> | string
    isGlobal?: BoolWithAggregatesFilter<"FAQ"> | boolean
    procedureId?: StringNullableWithAggregatesFilter<"FAQ"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type BlogPostWhereInput = {
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: StringNullableFilter<"BlogPost"> | string | null
    seoSettingsId?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumPublishStatusFilter<"BlogPost"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }

  export type BlogPostOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoryOrderByWithRelationInput
    seo?: SEOSettingsOrderByWithRelationInput
  }

  export type BlogPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    seoSettingsId?: string
    AND?: BlogPostWhereInput | BlogPostWhereInput[]
    OR?: BlogPostWhereInput[]
    NOT?: BlogPostWhereInput | BlogPostWhereInput[]
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumPublishStatusFilter<"BlogPost"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    seo?: XOR<SEOSettingsNullableScalarRelationFilter, SEOSettingsWhereInput> | null
  }, "id" | "slug" | "seoSettingsId">

  export type BlogPostOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    seoSettingsId?: SortOrderInput | SortOrder
    status?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    authorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogPostCountOrderByAggregateInput
    _max?: BlogPostMaxOrderByAggregateInput
    _min?: BlogPostMinOrderByAggregateInput
  }

  export type BlogPostScalarWhereWithAggregatesInput = {
    AND?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    OR?: BlogPostScalarWhereWithAggregatesInput[]
    NOT?: BlogPostScalarWhereWithAggregatesInput | BlogPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlogPost"> | string
    slug?: StringWithAggregatesFilter<"BlogPost"> | string
    title?: StringWithAggregatesFilter<"BlogPost"> | string
    content?: StringWithAggregatesFilter<"BlogPost"> | string
    excerpt?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    seoSettingsId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    status?: EnumPublishStatusWithAggregatesFilter<"BlogPost"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableWithAggregatesFilter<"BlogPost"> | Date | string | null
    authorId?: StringNullableWithAggregatesFilter<"BlogPost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BlogPost"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: BlogPostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: BlogPostOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    posts?: BlogPostListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    alt?: StringNullableFilter<"Media"> | string | null
    type?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    url?: StringFilter<"Media"> | string
    alt?: StringNullableFilter<"Media"> | string | null
    type?: StringFilter<"Media"> | string
    createdAt?: DateTimeFilter<"Media"> | Date | string
    updatedAt?: DateTimeFilter<"Media"> | Date | string
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    alt?: StringNullableWithAggregatesFilter<"Media"> | string | null
    type?: StringWithAggregatesFilter<"Media"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SEOSettingsCreateInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageCreateNestedOneWithoutSeoInput
    procedure?: ProcedureCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsUncheckedCreateInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageUncheckedCreateNestedOneWithoutSeoInput
    procedure?: ProcedureUncheckedCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostUncheckedCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUpdateOneWithoutSeoNestedInput
    procedure?: ProcedureUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUpdateOneWithoutSeoNestedInput
  }

  export type SEOSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUncheckedUpdateOneWithoutSeoNestedInput
    procedure?: ProcedureUncheckedUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUncheckedUpdateOneWithoutSeoNestedInput
  }

  export type SEOSettingsCreateManyInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
  }

  export type SEOSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SEOSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seo?: SEOSettingsCreateNestedOneWithoutPageInput
  }

  export type PageUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    seoSettingsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seo?: SEOSettingsUpdateOneWithoutPageNestedInput
  }

  export type PageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageCreateManyInput = {
    id?: string
    slug: string
    title: string
    content: string
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    seoSettingsId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    label: string
    path: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: MenuItemCreateNestedOneWithoutChildrenInput
    children?: MenuItemCreateNestedManyWithoutParentInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    label: string
    path: string
    order?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: MenuItemUncheckedCreateNestedManyWithoutParentInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: MenuItemUpdateOneWithoutChildrenNestedInput
    children?: MenuItemUpdateManyWithoutParentNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: MenuItemUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    label: string
    path: string
    order?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseAreaCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentCategoryCreateNestedManyWithoutExpertiseAreaInput
  }

  export type ExpertiseAreaUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    treatments?: TreatmentCategoryUncheckedCreateNestedManyWithoutExpertiseAreaInput
  }

  export type ExpertiseAreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentCategoryUpdateManyWithoutExpertiseAreaNestedInput
  }

  export type ExpertiseAreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatments?: TreatmentCategoryUncheckedUpdateManyWithoutExpertiseAreaNestedInput
  }

  export type ExpertiseAreaCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpertiseAreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseAreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCategoryCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expertiseArea: ExpertiseAreaCreateNestedOneWithoutTreatmentsInput
    procedures?: ProcedureCreateNestedManyWithoutTreatmentCategoryInput
  }

  export type TreatmentCategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    expertiseAreaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    procedures?: ProcedureUncheckedCreateNestedManyWithoutTreatmentCategoryInput
  }

  export type TreatmentCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expertiseArea?: ExpertiseAreaUpdateOneRequiredWithoutTreatmentsNestedInput
    procedures?: ProcedureUpdateManyWithoutTreatmentCategoryNestedInput
  }

  export type TreatmentCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expertiseAreaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedures?: ProcedureUncheckedUpdateManyWithoutTreatmentCategoryNestedInput
  }

  export type TreatmentCategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    expertiseAreaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expertiseAreaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    treatmentCategory: TreatmentCategoryCreateNestedOneWithoutProceduresInput
    methods?: ProcedureMethodCreateNestedManyWithoutProcedureInput
    faqs?: FAQCreateNestedManyWithoutProcedureInput
    seo?: SEOSettingsCreateNestedOneWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    treatmentCategoryId: string
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    methods?: ProcedureMethodUncheckedCreateNestedManyWithoutProcedureInput
    faqs?: FAQUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatmentCategory?: TreatmentCategoryUpdateOneRequiredWithoutProceduresNestedInput
    methods?: ProcedureMethodUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUpdateManyWithoutProcedureNestedInput
    seo?: SEOSettingsUpdateOneWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentCategoryId?: StringFieldUpdateOperationsInput | string
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methods?: ProcedureMethodUncheckedUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    treatmentCategoryId: string
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentCategoryId?: StringFieldUpdateOperationsInput | string
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    procedure: ProcedureCreateNestedOneWithoutMethodsInput
  }

  export type ProcedureMethodUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    procedureId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureMethodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProcedureUpdateOneRequiredWithoutMethodsNestedInput
  }

  export type ProcedureMethodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    procedureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    procedureId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureMethodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    procedureId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    procedure?: ProcedureCreateNestedOneWithoutFaqsInput
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    procedureId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedure?: ProcedureUpdateOneWithoutFaqsNestedInput
  }

  export type FAQUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    procedureId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    procedureId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    procedureId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPostsInput
    seo?: SEOSettingsCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    categoryId?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPostsNestedInput
    seo?: SEOSettingsUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    categoryId?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: BlogPostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: BlogPostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: BlogPostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: BlogPostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    alt?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    url: string
    alt?: string | null
    type?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PageNullableScalarRelationFilter = {
    is?: PageWhereInput | null
    isNot?: PageWhereInput | null
  }

  export type ProcedureNullableScalarRelationFilter = {
    is?: ProcedureWhereInput | null
    isNot?: ProcedureWhereInput | null
  }

  export type BlogPostNullableScalarRelationFilter = {
    is?: BlogPostWhereInput | null
    isNot?: BlogPostWhereInput | null
  }

  export type SEOSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    ogImage?: SortOrder
    noIndex?: SortOrder
  }

  export type SEOSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    ogImage?: SortOrder
    noIndex?: SortOrder
  }

  export type SEOSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    canonicalUrl?: SortOrder
    ogImage?: SortOrder
    noIndex?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SEOSettingsNullableScalarRelationFilter = {
    is?: SEOSettingsWhereInput | null
    isNot?: SEOSettingsWhereInput | null
  }

  export type PageCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    seoSettingsId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MenuItemNullableScalarRelationFilter = {
    is?: MenuItemWhereInput | null
    isNot?: MenuItemWhereInput | null
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    path?: SortOrder
    order?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TreatmentCategoryListRelationFilter = {
    every?: TreatmentCategoryWhereInput
    some?: TreatmentCategoryWhereInput
    none?: TreatmentCategoryWhereInput
  }

  export type TreatmentCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpertiseAreaCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpertiseAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpertiseAreaMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpertiseAreaScalarRelationFilter = {
    is?: ExpertiseAreaWhereInput
    isNot?: ExpertiseAreaWhereInput
  }

  export type ProcedureListRelationFilter = {
    every?: ProcedureWhereInput
    some?: ProcedureWhereInput
    none?: ProcedureWhereInput
  }

  export type ProcedureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreatmentCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expertiseAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expertiseAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    expertiseAreaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreatmentCategoryScalarRelationFilter = {
    is?: TreatmentCategoryWhereInput
    isNot?: TreatmentCategoryWhereInput
  }

  export type ProcedureMethodListRelationFilter = {
    every?: ProcedureMethodWhereInput
    some?: ProcedureMethodWhereInput
    none?: ProcedureMethodWhereInput
  }

  export type FAQListRelationFilter = {
    every?: FAQWhereInput
    some?: FAQWhereInput
    none?: FAQWhereInput
  }

  export type ProcedureMethodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcedureCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    treatmentCategoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    treatmentCategoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    treatmentCategoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureScalarRelationFilter = {
    is?: ProcedureWhereInput
    isNot?: ProcedureWhereInput
  }

  export type ProcedureMethodCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMethodMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProcedureMethodMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    isGlobal?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    isGlobal?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    isGlobal?: SortOrder
    procedureId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type BlogPostCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    categoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    categoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    content?: SortOrder
    excerpt?: SortOrder
    coverImage?: SortOrder
    categoryId?: SortOrder
    seoSettingsId?: SortOrder
    status?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogPostListRelationFilter = {
    every?: BlogPostWhereInput
    some?: BlogPostWhereInput
    none?: BlogPostWhereInput
  }

  export type BlogPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PageCreateNestedOneWithoutSeoInput = {
    create?: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
    connectOrCreate?: PageCreateOrConnectWithoutSeoInput
    connect?: PageWhereUniqueInput
  }

  export type ProcedureCreateNestedOneWithoutSeoInput = {
    create?: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutSeoInput
    connect?: ProcedureWhereUniqueInput
  }

  export type BlogPostCreateNestedOneWithoutSeoInput = {
    create?: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutSeoInput
    connect?: BlogPostWhereUniqueInput
  }

  export type PageUncheckedCreateNestedOneWithoutSeoInput = {
    create?: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
    connectOrCreate?: PageCreateOrConnectWithoutSeoInput
    connect?: PageWhereUniqueInput
  }

  export type ProcedureUncheckedCreateNestedOneWithoutSeoInput = {
    create?: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutSeoInput
    connect?: ProcedureWhereUniqueInput
  }

  export type BlogPostUncheckedCreateNestedOneWithoutSeoInput = {
    create?: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutSeoInput
    connect?: BlogPostWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PageUpdateOneWithoutSeoNestedInput = {
    create?: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
    connectOrCreate?: PageCreateOrConnectWithoutSeoInput
    upsert?: PageUpsertWithoutSeoInput
    disconnect?: PageWhereInput | boolean
    delete?: PageWhereInput | boolean
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutSeoInput, PageUpdateWithoutSeoInput>, PageUncheckedUpdateWithoutSeoInput>
  }

  export type ProcedureUpdateOneWithoutSeoNestedInput = {
    create?: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutSeoInput
    upsert?: ProcedureUpsertWithoutSeoInput
    disconnect?: ProcedureWhereInput | boolean
    delete?: ProcedureWhereInput | boolean
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutSeoInput, ProcedureUpdateWithoutSeoInput>, ProcedureUncheckedUpdateWithoutSeoInput>
  }

  export type BlogPostUpdateOneWithoutSeoNestedInput = {
    create?: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutSeoInput
    upsert?: BlogPostUpsertWithoutSeoInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutSeoInput, BlogPostUpdateWithoutSeoInput>, BlogPostUncheckedUpdateWithoutSeoInput>
  }

  export type PageUncheckedUpdateOneWithoutSeoNestedInput = {
    create?: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
    connectOrCreate?: PageCreateOrConnectWithoutSeoInput
    upsert?: PageUpsertWithoutSeoInput
    disconnect?: PageWhereInput | boolean
    delete?: PageWhereInput | boolean
    connect?: PageWhereUniqueInput
    update?: XOR<XOR<PageUpdateToOneWithWhereWithoutSeoInput, PageUpdateWithoutSeoInput>, PageUncheckedUpdateWithoutSeoInput>
  }

  export type ProcedureUncheckedUpdateOneWithoutSeoNestedInput = {
    create?: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutSeoInput
    upsert?: ProcedureUpsertWithoutSeoInput
    disconnect?: ProcedureWhereInput | boolean
    delete?: ProcedureWhereInput | boolean
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutSeoInput, ProcedureUpdateWithoutSeoInput>, ProcedureUncheckedUpdateWithoutSeoInput>
  }

  export type BlogPostUncheckedUpdateOneWithoutSeoNestedInput = {
    create?: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
    connectOrCreate?: BlogPostCreateOrConnectWithoutSeoInput
    upsert?: BlogPostUpsertWithoutSeoInput
    disconnect?: BlogPostWhereInput | boolean
    delete?: BlogPostWhereInput | boolean
    connect?: BlogPostWhereUniqueInput
    update?: XOR<XOR<BlogPostUpdateToOneWithWhereWithoutSeoInput, BlogPostUpdateWithoutSeoInput>, BlogPostUncheckedUpdateWithoutSeoInput>
  }

  export type SEOSettingsCreateNestedOneWithoutPageInput = {
    create?: XOR<SEOSettingsCreateWithoutPageInput, SEOSettingsUncheckedCreateWithoutPageInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutPageInput
    connect?: SEOSettingsWhereUniqueInput
  }

  export type EnumPublishStatusFieldUpdateOperationsInput = {
    set?: $Enums.PublishStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SEOSettingsUpdateOneWithoutPageNestedInput = {
    create?: XOR<SEOSettingsCreateWithoutPageInput, SEOSettingsUncheckedCreateWithoutPageInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutPageInput
    upsert?: SEOSettingsUpsertWithoutPageInput
    disconnect?: SEOSettingsWhereInput | boolean
    delete?: SEOSettingsWhereInput | boolean
    connect?: SEOSettingsWhereUniqueInput
    update?: XOR<XOR<SEOSettingsUpdateToOneWithWhereWithoutPageInput, SEOSettingsUpdateWithoutPageInput>, SEOSettingsUncheckedUpdateWithoutPageInput>
  }

  export type MenuItemCreateNestedOneWithoutChildrenInput = {
    create?: XOR<MenuItemCreateWithoutChildrenInput, MenuItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutChildrenInput
    connect?: MenuItemWhereUniqueInput
  }

  export type MenuItemCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput> | MenuItemCreateWithoutParentInput[] | MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutParentInput | MenuItemCreateOrConnectWithoutParentInput[]
    createMany?: MenuItemCreateManyParentInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput> | MenuItemCreateWithoutParentInput[] | MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutParentInput | MenuItemCreateOrConnectWithoutParentInput[]
    createMany?: MenuItemCreateManyParentInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuItemUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<MenuItemCreateWithoutChildrenInput, MenuItemUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutChildrenInput
    upsert?: MenuItemUpsertWithoutChildrenInput
    disconnect?: MenuItemWhereInput | boolean
    delete?: MenuItemWhereInput | boolean
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutChildrenInput, MenuItemUpdateWithoutChildrenInput>, MenuItemUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuItemUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput> | MenuItemCreateWithoutParentInput[] | MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutParentInput | MenuItemCreateOrConnectWithoutParentInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutParentInput | MenuItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuItemCreateManyParentInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutParentInput | MenuItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutParentInput | MenuItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput> | MenuItemCreateWithoutParentInput[] | MenuItemUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutParentInput | MenuItemCreateOrConnectWithoutParentInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutParentInput | MenuItemUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuItemCreateManyParentInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutParentInput | MenuItemUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutParentInput | MenuItemUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type TreatmentCategoryCreateNestedManyWithoutExpertiseAreaInput = {
    create?: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput> | TreatmentCategoryCreateWithoutExpertiseAreaInput[] | TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput[]
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput | TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput[]
    createMany?: TreatmentCategoryCreateManyExpertiseAreaInputEnvelope
    connect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
  }

  export type TreatmentCategoryUncheckedCreateNestedManyWithoutExpertiseAreaInput = {
    create?: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput> | TreatmentCategoryCreateWithoutExpertiseAreaInput[] | TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput[]
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput | TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput[]
    createMany?: TreatmentCategoryCreateManyExpertiseAreaInputEnvelope
    connect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
  }

  export type TreatmentCategoryUpdateManyWithoutExpertiseAreaNestedInput = {
    create?: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput> | TreatmentCategoryCreateWithoutExpertiseAreaInput[] | TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput[]
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput | TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput[]
    upsert?: TreatmentCategoryUpsertWithWhereUniqueWithoutExpertiseAreaInput | TreatmentCategoryUpsertWithWhereUniqueWithoutExpertiseAreaInput[]
    createMany?: TreatmentCategoryCreateManyExpertiseAreaInputEnvelope
    set?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    disconnect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    delete?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    connect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    update?: TreatmentCategoryUpdateWithWhereUniqueWithoutExpertiseAreaInput | TreatmentCategoryUpdateWithWhereUniqueWithoutExpertiseAreaInput[]
    updateMany?: TreatmentCategoryUpdateManyWithWhereWithoutExpertiseAreaInput | TreatmentCategoryUpdateManyWithWhereWithoutExpertiseAreaInput[]
    deleteMany?: TreatmentCategoryScalarWhereInput | TreatmentCategoryScalarWhereInput[]
  }

  export type TreatmentCategoryUncheckedUpdateManyWithoutExpertiseAreaNestedInput = {
    create?: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput> | TreatmentCategoryCreateWithoutExpertiseAreaInput[] | TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput[]
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput | TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput[]
    upsert?: TreatmentCategoryUpsertWithWhereUniqueWithoutExpertiseAreaInput | TreatmentCategoryUpsertWithWhereUniqueWithoutExpertiseAreaInput[]
    createMany?: TreatmentCategoryCreateManyExpertiseAreaInputEnvelope
    set?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    disconnect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    delete?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    connect?: TreatmentCategoryWhereUniqueInput | TreatmentCategoryWhereUniqueInput[]
    update?: TreatmentCategoryUpdateWithWhereUniqueWithoutExpertiseAreaInput | TreatmentCategoryUpdateWithWhereUniqueWithoutExpertiseAreaInput[]
    updateMany?: TreatmentCategoryUpdateManyWithWhereWithoutExpertiseAreaInput | TreatmentCategoryUpdateManyWithWhereWithoutExpertiseAreaInput[]
    deleteMany?: TreatmentCategoryScalarWhereInput | TreatmentCategoryScalarWhereInput[]
  }

  export type ExpertiseAreaCreateNestedOneWithoutTreatmentsInput = {
    create?: XOR<ExpertiseAreaCreateWithoutTreatmentsInput, ExpertiseAreaUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: ExpertiseAreaCreateOrConnectWithoutTreatmentsInput
    connect?: ExpertiseAreaWhereUniqueInput
  }

  export type ProcedureCreateNestedManyWithoutTreatmentCategoryInput = {
    create?: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput> | ProcedureCreateWithoutTreatmentCategoryInput[] | ProcedureUncheckedCreateWithoutTreatmentCategoryInput[]
    connectOrCreate?: ProcedureCreateOrConnectWithoutTreatmentCategoryInput | ProcedureCreateOrConnectWithoutTreatmentCategoryInput[]
    createMany?: ProcedureCreateManyTreatmentCategoryInputEnvelope
    connect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
  }

  export type ProcedureUncheckedCreateNestedManyWithoutTreatmentCategoryInput = {
    create?: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput> | ProcedureCreateWithoutTreatmentCategoryInput[] | ProcedureUncheckedCreateWithoutTreatmentCategoryInput[]
    connectOrCreate?: ProcedureCreateOrConnectWithoutTreatmentCategoryInput | ProcedureCreateOrConnectWithoutTreatmentCategoryInput[]
    createMany?: ProcedureCreateManyTreatmentCategoryInputEnvelope
    connect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
  }

  export type ExpertiseAreaUpdateOneRequiredWithoutTreatmentsNestedInput = {
    create?: XOR<ExpertiseAreaCreateWithoutTreatmentsInput, ExpertiseAreaUncheckedCreateWithoutTreatmentsInput>
    connectOrCreate?: ExpertiseAreaCreateOrConnectWithoutTreatmentsInput
    upsert?: ExpertiseAreaUpsertWithoutTreatmentsInput
    connect?: ExpertiseAreaWhereUniqueInput
    update?: XOR<XOR<ExpertiseAreaUpdateToOneWithWhereWithoutTreatmentsInput, ExpertiseAreaUpdateWithoutTreatmentsInput>, ExpertiseAreaUncheckedUpdateWithoutTreatmentsInput>
  }

  export type ProcedureUpdateManyWithoutTreatmentCategoryNestedInput = {
    create?: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput> | ProcedureCreateWithoutTreatmentCategoryInput[] | ProcedureUncheckedCreateWithoutTreatmentCategoryInput[]
    connectOrCreate?: ProcedureCreateOrConnectWithoutTreatmentCategoryInput | ProcedureCreateOrConnectWithoutTreatmentCategoryInput[]
    upsert?: ProcedureUpsertWithWhereUniqueWithoutTreatmentCategoryInput | ProcedureUpsertWithWhereUniqueWithoutTreatmentCategoryInput[]
    createMany?: ProcedureCreateManyTreatmentCategoryInputEnvelope
    set?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    disconnect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    delete?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    connect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    update?: ProcedureUpdateWithWhereUniqueWithoutTreatmentCategoryInput | ProcedureUpdateWithWhereUniqueWithoutTreatmentCategoryInput[]
    updateMany?: ProcedureUpdateManyWithWhereWithoutTreatmentCategoryInput | ProcedureUpdateManyWithWhereWithoutTreatmentCategoryInput[]
    deleteMany?: ProcedureScalarWhereInput | ProcedureScalarWhereInput[]
  }

  export type ProcedureUncheckedUpdateManyWithoutTreatmentCategoryNestedInput = {
    create?: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput> | ProcedureCreateWithoutTreatmentCategoryInput[] | ProcedureUncheckedCreateWithoutTreatmentCategoryInput[]
    connectOrCreate?: ProcedureCreateOrConnectWithoutTreatmentCategoryInput | ProcedureCreateOrConnectWithoutTreatmentCategoryInput[]
    upsert?: ProcedureUpsertWithWhereUniqueWithoutTreatmentCategoryInput | ProcedureUpsertWithWhereUniqueWithoutTreatmentCategoryInput[]
    createMany?: ProcedureCreateManyTreatmentCategoryInputEnvelope
    set?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    disconnect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    delete?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    connect?: ProcedureWhereUniqueInput | ProcedureWhereUniqueInput[]
    update?: ProcedureUpdateWithWhereUniqueWithoutTreatmentCategoryInput | ProcedureUpdateWithWhereUniqueWithoutTreatmentCategoryInput[]
    updateMany?: ProcedureUpdateManyWithWhereWithoutTreatmentCategoryInput | ProcedureUpdateManyWithWhereWithoutTreatmentCategoryInput[]
    deleteMany?: ProcedureScalarWhereInput | ProcedureScalarWhereInput[]
  }

  export type TreatmentCategoryCreateNestedOneWithoutProceduresInput = {
    create?: XOR<TreatmentCategoryCreateWithoutProceduresInput, TreatmentCategoryUncheckedCreateWithoutProceduresInput>
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutProceduresInput
    connect?: TreatmentCategoryWhereUniqueInput
  }

  export type ProcedureMethodCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput> | ProcedureMethodCreateWithoutProcedureInput[] | ProcedureMethodUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedureMethodCreateOrConnectWithoutProcedureInput | ProcedureMethodCreateOrConnectWithoutProcedureInput[]
    createMany?: ProcedureMethodCreateManyProcedureInputEnvelope
    connect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
  }

  export type FAQCreateNestedManyWithoutProcedureInput = {
    create?: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput> | FAQCreateWithoutProcedureInput[] | FAQUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutProcedureInput | FAQCreateOrConnectWithoutProcedureInput[]
    createMany?: FAQCreateManyProcedureInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type SEOSettingsCreateNestedOneWithoutProcedureInput = {
    create?: XOR<SEOSettingsCreateWithoutProcedureInput, SEOSettingsUncheckedCreateWithoutProcedureInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutProcedureInput
    connect?: SEOSettingsWhereUniqueInput
  }

  export type ProcedureMethodUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput> | ProcedureMethodCreateWithoutProcedureInput[] | ProcedureMethodUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedureMethodCreateOrConnectWithoutProcedureInput | ProcedureMethodCreateOrConnectWithoutProcedureInput[]
    createMany?: ProcedureMethodCreateManyProcedureInputEnvelope
    connect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
  }

  export type FAQUncheckedCreateNestedManyWithoutProcedureInput = {
    create?: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput> | FAQCreateWithoutProcedureInput[] | FAQUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutProcedureInput | FAQCreateOrConnectWithoutProcedureInput[]
    createMany?: FAQCreateManyProcedureInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type TreatmentCategoryUpdateOneRequiredWithoutProceduresNestedInput = {
    create?: XOR<TreatmentCategoryCreateWithoutProceduresInput, TreatmentCategoryUncheckedCreateWithoutProceduresInput>
    connectOrCreate?: TreatmentCategoryCreateOrConnectWithoutProceduresInput
    upsert?: TreatmentCategoryUpsertWithoutProceduresInput
    connect?: TreatmentCategoryWhereUniqueInput
    update?: XOR<XOR<TreatmentCategoryUpdateToOneWithWhereWithoutProceduresInput, TreatmentCategoryUpdateWithoutProceduresInput>, TreatmentCategoryUncheckedUpdateWithoutProceduresInput>
  }

  export type ProcedureMethodUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput> | ProcedureMethodCreateWithoutProcedureInput[] | ProcedureMethodUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedureMethodCreateOrConnectWithoutProcedureInput | ProcedureMethodCreateOrConnectWithoutProcedureInput[]
    upsert?: ProcedureMethodUpsertWithWhereUniqueWithoutProcedureInput | ProcedureMethodUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ProcedureMethodCreateManyProcedureInputEnvelope
    set?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    disconnect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    delete?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    connect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    update?: ProcedureMethodUpdateWithWhereUniqueWithoutProcedureInput | ProcedureMethodUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ProcedureMethodUpdateManyWithWhereWithoutProcedureInput | ProcedureMethodUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ProcedureMethodScalarWhereInput | ProcedureMethodScalarWhereInput[]
  }

  export type FAQUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput> | FAQCreateWithoutProcedureInput[] | FAQUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutProcedureInput | FAQCreateOrConnectWithoutProcedureInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutProcedureInput | FAQUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: FAQCreateManyProcedureInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutProcedureInput | FAQUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutProcedureInput | FAQUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type SEOSettingsUpdateOneWithoutProcedureNestedInput = {
    create?: XOR<SEOSettingsCreateWithoutProcedureInput, SEOSettingsUncheckedCreateWithoutProcedureInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutProcedureInput
    upsert?: SEOSettingsUpsertWithoutProcedureInput
    disconnect?: SEOSettingsWhereInput | boolean
    delete?: SEOSettingsWhereInput | boolean
    connect?: SEOSettingsWhereUniqueInput
    update?: XOR<XOR<SEOSettingsUpdateToOneWithWhereWithoutProcedureInput, SEOSettingsUpdateWithoutProcedureInput>, SEOSettingsUncheckedUpdateWithoutProcedureInput>
  }

  export type ProcedureMethodUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput> | ProcedureMethodCreateWithoutProcedureInput[] | ProcedureMethodUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: ProcedureMethodCreateOrConnectWithoutProcedureInput | ProcedureMethodCreateOrConnectWithoutProcedureInput[]
    upsert?: ProcedureMethodUpsertWithWhereUniqueWithoutProcedureInput | ProcedureMethodUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: ProcedureMethodCreateManyProcedureInputEnvelope
    set?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    disconnect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    delete?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    connect?: ProcedureMethodWhereUniqueInput | ProcedureMethodWhereUniqueInput[]
    update?: ProcedureMethodUpdateWithWhereUniqueWithoutProcedureInput | ProcedureMethodUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: ProcedureMethodUpdateManyWithWhereWithoutProcedureInput | ProcedureMethodUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: ProcedureMethodScalarWhereInput | ProcedureMethodScalarWhereInput[]
  }

  export type FAQUncheckedUpdateManyWithoutProcedureNestedInput = {
    create?: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput> | FAQCreateWithoutProcedureInput[] | FAQUncheckedCreateWithoutProcedureInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutProcedureInput | FAQCreateOrConnectWithoutProcedureInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutProcedureInput | FAQUpsertWithWhereUniqueWithoutProcedureInput[]
    createMany?: FAQCreateManyProcedureInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutProcedureInput | FAQUpdateWithWhereUniqueWithoutProcedureInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutProcedureInput | FAQUpdateManyWithWhereWithoutProcedureInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type ProcedureCreateNestedOneWithoutMethodsInput = {
    create?: XOR<ProcedureCreateWithoutMethodsInput, ProcedureUncheckedCreateWithoutMethodsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutMethodsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneRequiredWithoutMethodsNestedInput = {
    create?: XOR<ProcedureCreateWithoutMethodsInput, ProcedureUncheckedCreateWithoutMethodsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutMethodsInput
    upsert?: ProcedureUpsertWithoutMethodsInput
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutMethodsInput, ProcedureUpdateWithoutMethodsInput>, ProcedureUncheckedUpdateWithoutMethodsInput>
  }

  export type ProcedureCreateNestedOneWithoutFaqsInput = {
    create?: XOR<ProcedureCreateWithoutFaqsInput, ProcedureUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutFaqsInput
    connect?: ProcedureWhereUniqueInput
  }

  export type ProcedureUpdateOneWithoutFaqsNestedInput = {
    create?: XOR<ProcedureCreateWithoutFaqsInput, ProcedureUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: ProcedureCreateOrConnectWithoutFaqsInput
    upsert?: ProcedureUpsertWithoutFaqsInput
    disconnect?: ProcedureWhereInput | boolean
    delete?: ProcedureWhereInput | boolean
    connect?: ProcedureWhereUniqueInput
    update?: XOR<XOR<ProcedureUpdateToOneWithWhereWithoutFaqsInput, ProcedureUpdateWithoutFaqsInput>, ProcedureUncheckedUpdateWithoutFaqsInput>
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SEOSettingsCreateNestedOneWithoutBlogPostInput = {
    create?: XOR<SEOSettingsCreateWithoutBlogPostInput, SEOSettingsUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutBlogPostInput
    connect?: SEOSettingsWhereUniqueInput
  }

  export type CategoryUpdateOneWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type SEOSettingsUpdateOneWithoutBlogPostNestedInput = {
    create?: XOR<SEOSettingsCreateWithoutBlogPostInput, SEOSettingsUncheckedCreateWithoutBlogPostInput>
    connectOrCreate?: SEOSettingsCreateOrConnectWithoutBlogPostInput
    upsert?: SEOSettingsUpsertWithoutBlogPostInput
    disconnect?: SEOSettingsWhereInput | boolean
    delete?: SEOSettingsWhereInput | boolean
    connect?: SEOSettingsWhereUniqueInput
    update?: XOR<XOR<SEOSettingsUpdateToOneWithWhereWithoutBlogPostInput, SEOSettingsUpdateWithoutBlogPostInput>, SEOSettingsUncheckedUpdateWithoutBlogPostInput>
  }

  export type BlogPostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
  }

  export type BlogPostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput> | BlogPostCreateWithoutCategoryInput[] | BlogPostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: BlogPostCreateOrConnectWithoutCategoryInput | BlogPostCreateOrConnectWithoutCategoryInput[]
    upsert?: BlogPostUpsertWithWhereUniqueWithoutCategoryInput | BlogPostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: BlogPostCreateManyCategoryInputEnvelope
    set?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    disconnect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    delete?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    connect?: BlogPostWhereUniqueInput | BlogPostWhereUniqueInput[]
    update?: BlogPostUpdateWithWhereUniqueWithoutCategoryInput | BlogPostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: BlogPostUpdateManyWithWhereWithoutCategoryInput | BlogPostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPublishStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusFilter<$PrismaModel> | $Enums.PublishStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PublishStatus | EnumPublishStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PublishStatus[] | ListEnumPublishStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPublishStatusWithAggregatesFilter<$PrismaModel> | $Enums.PublishStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPublishStatusFilter<$PrismaModel>
    _max?: NestedEnumPublishStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PageCreateWithoutSeoInput = {
    id?: string
    slug: string
    title: string
    content: string
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageUncheckedCreateWithoutSeoInput = {
    id?: string
    slug: string
    title: string
    content: string
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageCreateOrConnectWithoutSeoInput = {
    where: PageWhereUniqueInput
    create: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
  }

  export type ProcedureCreateWithoutSeoInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    treatmentCategory: TreatmentCategoryCreateNestedOneWithoutProceduresInput
    methods?: ProcedureMethodCreateNestedManyWithoutProcedureInput
    faqs?: FAQCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutSeoInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    treatmentCategoryId: string
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    methods?: ProcedureMethodUncheckedCreateNestedManyWithoutProcedureInput
    faqs?: FAQUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutSeoInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
  }

  export type BlogPostCreateWithoutSeoInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryCreateNestedOneWithoutPostsInput
  }

  export type BlogPostUncheckedCreateWithoutSeoInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    categoryId?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutSeoInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
  }

  export type PageUpsertWithoutSeoInput = {
    update: XOR<PageUpdateWithoutSeoInput, PageUncheckedUpdateWithoutSeoInput>
    create: XOR<PageCreateWithoutSeoInput, PageUncheckedCreateWithoutSeoInput>
    where?: PageWhereInput
  }

  export type PageUpdateToOneWithWhereWithoutSeoInput = {
    where?: PageWhereInput
    data: XOR<PageUpdateWithoutSeoInput, PageUncheckedUpdateWithoutSeoInput>
  }

  export type PageUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageUncheckedUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUpsertWithoutSeoInput = {
    update: XOR<ProcedureUpdateWithoutSeoInput, ProcedureUncheckedUpdateWithoutSeoInput>
    create: XOR<ProcedureCreateWithoutSeoInput, ProcedureUncheckedCreateWithoutSeoInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutSeoInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutSeoInput, ProcedureUncheckedUpdateWithoutSeoInput>
  }

  export type ProcedureUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatmentCategory?: TreatmentCategoryUpdateOneRequiredWithoutProceduresNestedInput
    methods?: ProcedureMethodUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentCategoryId?: StringFieldUpdateOperationsInput | string
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methods?: ProcedureMethodUncheckedUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type BlogPostUpsertWithoutSeoInput = {
    update: XOR<BlogPostUpdateWithoutSeoInput, BlogPostUncheckedUpdateWithoutSeoInput>
    create: XOR<BlogPostCreateWithoutSeoInput, BlogPostUncheckedCreateWithoutSeoInput>
    where?: BlogPostWhereInput
  }

  export type BlogPostUpdateToOneWithWhereWithoutSeoInput = {
    where?: BlogPostWhereInput
    data: XOR<BlogPostUpdateWithoutSeoInput, BlogPostUncheckedUpdateWithoutSeoInput>
  }

  export type BlogPostUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneWithoutPostsNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutSeoInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SEOSettingsCreateWithoutPageInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    procedure?: ProcedureCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsUncheckedCreateWithoutPageInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    procedure?: ProcedureUncheckedCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostUncheckedCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsCreateOrConnectWithoutPageInput = {
    where: SEOSettingsWhereUniqueInput
    create: XOR<SEOSettingsCreateWithoutPageInput, SEOSettingsUncheckedCreateWithoutPageInput>
  }

  export type SEOSettingsUpsertWithoutPageInput = {
    update: XOR<SEOSettingsUpdateWithoutPageInput, SEOSettingsUncheckedUpdateWithoutPageInput>
    create: XOR<SEOSettingsCreateWithoutPageInput, SEOSettingsUncheckedCreateWithoutPageInput>
    where?: SEOSettingsWhereInput
  }

  export type SEOSettingsUpdateToOneWithWhereWithoutPageInput = {
    where?: SEOSettingsWhereInput
    data: XOR<SEOSettingsUpdateWithoutPageInput, SEOSettingsUncheckedUpdateWithoutPageInput>
  }

  export type SEOSettingsUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    procedure?: ProcedureUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUpdateOneWithoutSeoNestedInput
  }

  export type SEOSettingsUncheckedUpdateWithoutPageInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    procedure?: ProcedureUncheckedUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUncheckedUpdateOneWithoutSeoNestedInput
  }

  export type MenuItemCreateWithoutChildrenInput = {
    id?: string
    label: string
    path: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: MenuItemCreateNestedOneWithoutChildrenInput
  }

  export type MenuItemUncheckedCreateWithoutChildrenInput = {
    id?: string
    label: string
    path: string
    order?: number
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemCreateOrConnectWithoutChildrenInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutChildrenInput, MenuItemUncheckedCreateWithoutChildrenInput>
  }

  export type MenuItemCreateWithoutParentInput = {
    id?: string
    label: string
    path: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: MenuItemCreateNestedManyWithoutParentInput
  }

  export type MenuItemUncheckedCreateWithoutParentInput = {
    id?: string
    label: string
    path: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: MenuItemUncheckedCreateNestedManyWithoutParentInput
  }

  export type MenuItemCreateOrConnectWithoutParentInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput>
  }

  export type MenuItemCreateManyParentInputEnvelope = {
    data: MenuItemCreateManyParentInput | MenuItemCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemUpsertWithoutChildrenInput = {
    update: XOR<MenuItemUpdateWithoutChildrenInput, MenuItemUncheckedUpdateWithoutChildrenInput>
    create: XOR<MenuItemCreateWithoutChildrenInput, MenuItemUncheckedCreateWithoutChildrenInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutChildrenInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutChildrenInput, MenuItemUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuItemUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: MenuItemUpdateOneWithoutChildrenNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUpsertWithWhereUniqueWithoutParentInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutParentInput, MenuItemUncheckedUpdateWithoutParentInput>
    create: XOR<MenuItemCreateWithoutParentInput, MenuItemUncheckedCreateWithoutParentInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutParentInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutParentInput, MenuItemUncheckedUpdateWithoutParentInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutParentInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutParentInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    label?: StringFilter<"MenuItem"> | string
    path?: StringFilter<"MenuItem"> | string
    order?: IntFilter<"MenuItem"> | number
    parentId?: StringNullableFilter<"MenuItem"> | string | null
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type TreatmentCategoryCreateWithoutExpertiseAreaInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    procedures?: ProcedureCreateNestedManyWithoutTreatmentCategoryInput
  }

  export type TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    procedures?: ProcedureUncheckedCreateNestedManyWithoutTreatmentCategoryInput
  }

  export type TreatmentCategoryCreateOrConnectWithoutExpertiseAreaInput = {
    where: TreatmentCategoryWhereUniqueInput
    create: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput>
  }

  export type TreatmentCategoryCreateManyExpertiseAreaInputEnvelope = {
    data: TreatmentCategoryCreateManyExpertiseAreaInput | TreatmentCategoryCreateManyExpertiseAreaInput[]
    skipDuplicates?: boolean
  }

  export type TreatmentCategoryUpsertWithWhereUniqueWithoutExpertiseAreaInput = {
    where: TreatmentCategoryWhereUniqueInput
    update: XOR<TreatmentCategoryUpdateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedUpdateWithoutExpertiseAreaInput>
    create: XOR<TreatmentCategoryCreateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedCreateWithoutExpertiseAreaInput>
  }

  export type TreatmentCategoryUpdateWithWhereUniqueWithoutExpertiseAreaInput = {
    where: TreatmentCategoryWhereUniqueInput
    data: XOR<TreatmentCategoryUpdateWithoutExpertiseAreaInput, TreatmentCategoryUncheckedUpdateWithoutExpertiseAreaInput>
  }

  export type TreatmentCategoryUpdateManyWithWhereWithoutExpertiseAreaInput = {
    where: TreatmentCategoryScalarWhereInput
    data: XOR<TreatmentCategoryUpdateManyMutationInput, TreatmentCategoryUncheckedUpdateManyWithoutExpertiseAreaInput>
  }

  export type TreatmentCategoryScalarWhereInput = {
    AND?: TreatmentCategoryScalarWhereInput | TreatmentCategoryScalarWhereInput[]
    OR?: TreatmentCategoryScalarWhereInput[]
    NOT?: TreatmentCategoryScalarWhereInput | TreatmentCategoryScalarWhereInput[]
    id?: StringFilter<"TreatmentCategory"> | string
    slug?: StringFilter<"TreatmentCategory"> | string
    name?: StringFilter<"TreatmentCategory"> | string
    description?: StringNullableFilter<"TreatmentCategory"> | string | null
    expertiseAreaId?: StringFilter<"TreatmentCategory"> | string
    createdAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TreatmentCategory"> | Date | string
  }

  export type ExpertiseAreaCreateWithoutTreatmentsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpertiseAreaUncheckedCreateWithoutTreatmentsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExpertiseAreaCreateOrConnectWithoutTreatmentsInput = {
    where: ExpertiseAreaWhereUniqueInput
    create: XOR<ExpertiseAreaCreateWithoutTreatmentsInput, ExpertiseAreaUncheckedCreateWithoutTreatmentsInput>
  }

  export type ProcedureCreateWithoutTreatmentCategoryInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    methods?: ProcedureMethodCreateNestedManyWithoutProcedureInput
    faqs?: FAQCreateNestedManyWithoutProcedureInput
    seo?: SEOSettingsCreateNestedOneWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutTreatmentCategoryInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    methods?: ProcedureMethodUncheckedCreateNestedManyWithoutProcedureInput
    faqs?: FAQUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutTreatmentCategoryInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput>
  }

  export type ProcedureCreateManyTreatmentCategoryInputEnvelope = {
    data: ProcedureCreateManyTreatmentCategoryInput | ProcedureCreateManyTreatmentCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpertiseAreaUpsertWithoutTreatmentsInput = {
    update: XOR<ExpertiseAreaUpdateWithoutTreatmentsInput, ExpertiseAreaUncheckedUpdateWithoutTreatmentsInput>
    create: XOR<ExpertiseAreaCreateWithoutTreatmentsInput, ExpertiseAreaUncheckedCreateWithoutTreatmentsInput>
    where?: ExpertiseAreaWhereInput
  }

  export type ExpertiseAreaUpdateToOneWithWhereWithoutTreatmentsInput = {
    where?: ExpertiseAreaWhereInput
    data: XOR<ExpertiseAreaUpdateWithoutTreatmentsInput, ExpertiseAreaUncheckedUpdateWithoutTreatmentsInput>
  }

  export type ExpertiseAreaUpdateWithoutTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpertiseAreaUncheckedUpdateWithoutTreatmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureUpsertWithWhereUniqueWithoutTreatmentCategoryInput = {
    where: ProcedureWhereUniqueInput
    update: XOR<ProcedureUpdateWithoutTreatmentCategoryInput, ProcedureUncheckedUpdateWithoutTreatmentCategoryInput>
    create: XOR<ProcedureCreateWithoutTreatmentCategoryInput, ProcedureUncheckedCreateWithoutTreatmentCategoryInput>
  }

  export type ProcedureUpdateWithWhereUniqueWithoutTreatmentCategoryInput = {
    where: ProcedureWhereUniqueInput
    data: XOR<ProcedureUpdateWithoutTreatmentCategoryInput, ProcedureUncheckedUpdateWithoutTreatmentCategoryInput>
  }

  export type ProcedureUpdateManyWithWhereWithoutTreatmentCategoryInput = {
    where: ProcedureScalarWhereInput
    data: XOR<ProcedureUpdateManyMutationInput, ProcedureUncheckedUpdateManyWithoutTreatmentCategoryInput>
  }

  export type ProcedureScalarWhereInput = {
    AND?: ProcedureScalarWhereInput | ProcedureScalarWhereInput[]
    OR?: ProcedureScalarWhereInput[]
    NOT?: ProcedureScalarWhereInput | ProcedureScalarWhereInput[]
    id?: StringFilter<"Procedure"> | string
    slug?: StringFilter<"Procedure"> | string
    name?: StringFilter<"Procedure"> | string
    description?: StringNullableFilter<"Procedure"> | string | null
    treatmentCategoryId?: StringFilter<"Procedure"> | string
    seoSettingsId?: StringNullableFilter<"Procedure"> | string | null
    status?: EnumPublishStatusFilter<"Procedure"> | $Enums.PublishStatus
    createdAt?: DateTimeFilter<"Procedure"> | Date | string
    updatedAt?: DateTimeFilter<"Procedure"> | Date | string
  }

  export type TreatmentCategoryCreateWithoutProceduresInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    expertiseArea: ExpertiseAreaCreateNestedOneWithoutTreatmentsInput
  }

  export type TreatmentCategoryUncheckedCreateWithoutProceduresInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    expertiseAreaId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentCategoryCreateOrConnectWithoutProceduresInput = {
    where: TreatmentCategoryWhereUniqueInput
    create: XOR<TreatmentCategoryCreateWithoutProceduresInput, TreatmentCategoryUncheckedCreateWithoutProceduresInput>
  }

  export type ProcedureMethodCreateWithoutProcedureInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureMethodUncheckedCreateWithoutProcedureInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureMethodCreateOrConnectWithoutProcedureInput = {
    where: ProcedureMethodWhereUniqueInput
    create: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput>
  }

  export type ProcedureMethodCreateManyProcedureInputEnvelope = {
    data: ProcedureMethodCreateManyProcedureInput | ProcedureMethodCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type FAQCreateWithoutProcedureInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQUncheckedCreateWithoutProcedureInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQCreateOrConnectWithoutProcedureInput = {
    where: FAQWhereUniqueInput
    create: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput>
  }

  export type FAQCreateManyProcedureInputEnvelope = {
    data: FAQCreateManyProcedureInput | FAQCreateManyProcedureInput[]
    skipDuplicates?: boolean
  }

  export type SEOSettingsCreateWithoutProcedureInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsUncheckedCreateWithoutProcedureInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageUncheckedCreateNestedOneWithoutSeoInput
    blogPost?: BlogPostUncheckedCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsCreateOrConnectWithoutProcedureInput = {
    where: SEOSettingsWhereUniqueInput
    create: XOR<SEOSettingsCreateWithoutProcedureInput, SEOSettingsUncheckedCreateWithoutProcedureInput>
  }

  export type TreatmentCategoryUpsertWithoutProceduresInput = {
    update: XOR<TreatmentCategoryUpdateWithoutProceduresInput, TreatmentCategoryUncheckedUpdateWithoutProceduresInput>
    create: XOR<TreatmentCategoryCreateWithoutProceduresInput, TreatmentCategoryUncheckedCreateWithoutProceduresInput>
    where?: TreatmentCategoryWhereInput
  }

  export type TreatmentCategoryUpdateToOneWithWhereWithoutProceduresInput = {
    where?: TreatmentCategoryWhereInput
    data: XOR<TreatmentCategoryUpdateWithoutProceduresInput, TreatmentCategoryUncheckedUpdateWithoutProceduresInput>
  }

  export type TreatmentCategoryUpdateWithoutProceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expertiseArea?: ExpertiseAreaUpdateOneRequiredWithoutTreatmentsNestedInput
  }

  export type TreatmentCategoryUncheckedUpdateWithoutProceduresInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expertiseAreaId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodUpsertWithWhereUniqueWithoutProcedureInput = {
    where: ProcedureMethodWhereUniqueInput
    update: XOR<ProcedureMethodUpdateWithoutProcedureInput, ProcedureMethodUncheckedUpdateWithoutProcedureInput>
    create: XOR<ProcedureMethodCreateWithoutProcedureInput, ProcedureMethodUncheckedCreateWithoutProcedureInput>
  }

  export type ProcedureMethodUpdateWithWhereUniqueWithoutProcedureInput = {
    where: ProcedureMethodWhereUniqueInput
    data: XOR<ProcedureMethodUpdateWithoutProcedureInput, ProcedureMethodUncheckedUpdateWithoutProcedureInput>
  }

  export type ProcedureMethodUpdateManyWithWhereWithoutProcedureInput = {
    where: ProcedureMethodScalarWhereInput
    data: XOR<ProcedureMethodUpdateManyMutationInput, ProcedureMethodUncheckedUpdateManyWithoutProcedureInput>
  }

  export type ProcedureMethodScalarWhereInput = {
    AND?: ProcedureMethodScalarWhereInput | ProcedureMethodScalarWhereInput[]
    OR?: ProcedureMethodScalarWhereInput[]
    NOT?: ProcedureMethodScalarWhereInput | ProcedureMethodScalarWhereInput[]
    id?: StringFilter<"ProcedureMethod"> | string
    slug?: StringFilter<"ProcedureMethod"> | string
    name?: StringFilter<"ProcedureMethod"> | string
    description?: StringNullableFilter<"ProcedureMethod"> | string | null
    procedureId?: StringFilter<"ProcedureMethod"> | string
    createdAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
    updatedAt?: DateTimeFilter<"ProcedureMethod"> | Date | string
  }

  export type FAQUpsertWithWhereUniqueWithoutProcedureInput = {
    where: FAQWhereUniqueInput
    update: XOR<FAQUpdateWithoutProcedureInput, FAQUncheckedUpdateWithoutProcedureInput>
    create: XOR<FAQCreateWithoutProcedureInput, FAQUncheckedCreateWithoutProcedureInput>
  }

  export type FAQUpdateWithWhereUniqueWithoutProcedureInput = {
    where: FAQWhereUniqueInput
    data: XOR<FAQUpdateWithoutProcedureInput, FAQUncheckedUpdateWithoutProcedureInput>
  }

  export type FAQUpdateManyWithWhereWithoutProcedureInput = {
    where: FAQScalarWhereInput
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyWithoutProcedureInput>
  }

  export type FAQScalarWhereInput = {
    AND?: FAQScalarWhereInput | FAQScalarWhereInput[]
    OR?: FAQScalarWhereInput[]
    NOT?: FAQScalarWhereInput | FAQScalarWhereInput[]
    id?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringFilter<"FAQ"> | string
    isGlobal?: BoolFilter<"FAQ"> | boolean
    procedureId?: StringNullableFilter<"FAQ"> | string | null
    createdAt?: DateTimeFilter<"FAQ"> | Date | string
    updatedAt?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type SEOSettingsUpsertWithoutProcedureInput = {
    update: XOR<SEOSettingsUpdateWithoutProcedureInput, SEOSettingsUncheckedUpdateWithoutProcedureInput>
    create: XOR<SEOSettingsCreateWithoutProcedureInput, SEOSettingsUncheckedCreateWithoutProcedureInput>
    where?: SEOSettingsWhereInput
  }

  export type SEOSettingsUpdateToOneWithWhereWithoutProcedureInput = {
    where?: SEOSettingsWhereInput
    data: XOR<SEOSettingsUpdateWithoutProcedureInput, SEOSettingsUncheckedUpdateWithoutProcedureInput>
  }

  export type SEOSettingsUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUpdateOneWithoutSeoNestedInput
  }

  export type SEOSettingsUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUncheckedUpdateOneWithoutSeoNestedInput
    blogPost?: BlogPostUncheckedUpdateOneWithoutSeoNestedInput
  }

  export type ProcedureCreateWithoutMethodsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    treatmentCategory: TreatmentCategoryCreateNestedOneWithoutProceduresInput
    faqs?: FAQCreateNestedManyWithoutProcedureInput
    seo?: SEOSettingsCreateNestedOneWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutMethodsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    treatmentCategoryId: string
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    faqs?: FAQUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutMethodsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutMethodsInput, ProcedureUncheckedCreateWithoutMethodsInput>
  }

  export type ProcedureUpsertWithoutMethodsInput = {
    update: XOR<ProcedureUpdateWithoutMethodsInput, ProcedureUncheckedUpdateWithoutMethodsInput>
    create: XOR<ProcedureCreateWithoutMethodsInput, ProcedureUncheckedCreateWithoutMethodsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutMethodsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutMethodsInput, ProcedureUncheckedUpdateWithoutMethodsInput>
  }

  export type ProcedureUpdateWithoutMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatmentCategory?: TreatmentCategoryUpdateOneRequiredWithoutProceduresNestedInput
    faqs?: FAQUpdateManyWithoutProcedureNestedInput
    seo?: SEOSettingsUpdateOneWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutMethodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentCategoryId?: StringFieldUpdateOperationsInput | string
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    faqs?: FAQUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureCreateWithoutFaqsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    treatmentCategory: TreatmentCategoryCreateNestedOneWithoutProceduresInput
    methods?: ProcedureMethodCreateNestedManyWithoutProcedureInput
    seo?: SEOSettingsCreateNestedOneWithoutProcedureInput
  }

  export type ProcedureUncheckedCreateWithoutFaqsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    treatmentCategoryId: string
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    methods?: ProcedureMethodUncheckedCreateNestedManyWithoutProcedureInput
  }

  export type ProcedureCreateOrConnectWithoutFaqsInput = {
    where: ProcedureWhereUniqueInput
    create: XOR<ProcedureCreateWithoutFaqsInput, ProcedureUncheckedCreateWithoutFaqsInput>
  }

  export type ProcedureUpsertWithoutFaqsInput = {
    update: XOR<ProcedureUpdateWithoutFaqsInput, ProcedureUncheckedUpdateWithoutFaqsInput>
    create: XOR<ProcedureCreateWithoutFaqsInput, ProcedureUncheckedCreateWithoutFaqsInput>
    where?: ProcedureWhereInput
  }

  export type ProcedureUpdateToOneWithWhereWithoutFaqsInput = {
    where?: ProcedureWhereInput
    data: XOR<ProcedureUpdateWithoutFaqsInput, ProcedureUncheckedUpdateWithoutFaqsInput>
  }

  export type ProcedureUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    treatmentCategory?: TreatmentCategoryUpdateOneRequiredWithoutProceduresNestedInput
    methods?: ProcedureMethodUpdateManyWithoutProcedureNestedInput
    seo?: SEOSettingsUpdateOneWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutFaqsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    treatmentCategoryId?: StringFieldUpdateOperationsInput | string
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methods?: ProcedureMethodUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type SEOSettingsCreateWithoutBlogPostInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageCreateNestedOneWithoutSeoInput
    procedure?: ProcedureCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsUncheckedCreateWithoutBlogPostInput = {
    id?: string
    metaTitle?: string | null
    metaDescription?: string | null
    canonicalUrl?: string | null
    ogImage?: string | null
    noIndex?: boolean
    page?: PageUncheckedCreateNestedOneWithoutSeoInput
    procedure?: ProcedureUncheckedCreateNestedOneWithoutSeoInput
  }

  export type SEOSettingsCreateOrConnectWithoutBlogPostInput = {
    where: SEOSettingsWhereUniqueInput
    create: XOR<SEOSettingsCreateWithoutBlogPostInput, SEOSettingsUncheckedCreateWithoutBlogPostInput>
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SEOSettingsUpsertWithoutBlogPostInput = {
    update: XOR<SEOSettingsUpdateWithoutBlogPostInput, SEOSettingsUncheckedUpdateWithoutBlogPostInput>
    create: XOR<SEOSettingsCreateWithoutBlogPostInput, SEOSettingsUncheckedCreateWithoutBlogPostInput>
    where?: SEOSettingsWhereInput
  }

  export type SEOSettingsUpdateToOneWithWhereWithoutBlogPostInput = {
    where?: SEOSettingsWhereInput
    data: XOR<SEOSettingsUpdateWithoutBlogPostInput, SEOSettingsUncheckedUpdateWithoutBlogPostInput>
  }

  export type SEOSettingsUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUpdateOneWithoutSeoNestedInput
    procedure?: ProcedureUpdateOneWithoutSeoNestedInput
  }

  export type SEOSettingsUncheckedUpdateWithoutBlogPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    canonicalUrl?: NullableStringFieldUpdateOperationsInput | string | null
    ogImage?: NullableStringFieldUpdateOperationsInput | string | null
    noIndex?: BoolFieldUpdateOperationsInput | boolean
    page?: PageUncheckedUpdateOneWithoutSeoNestedInput
    procedure?: ProcedureUncheckedUpdateOneWithoutSeoNestedInput
  }

  export type BlogPostCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seo?: SEOSettingsCreateNestedOneWithoutBlogPostInput
  }

  export type BlogPostUncheckedCreateWithoutCategoryInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostCreateOrConnectWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostCreateManyCategoryInputEnvelope = {
    data: BlogPostCreateManyCategoryInput | BlogPostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type BlogPostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    update: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
    create: XOR<BlogPostCreateWithoutCategoryInput, BlogPostUncheckedCreateWithoutCategoryInput>
  }

  export type BlogPostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: BlogPostWhereUniqueInput
    data: XOR<BlogPostUpdateWithoutCategoryInput, BlogPostUncheckedUpdateWithoutCategoryInput>
  }

  export type BlogPostUpdateManyWithWhereWithoutCategoryInput = {
    where: BlogPostScalarWhereInput
    data: XOR<BlogPostUpdateManyMutationInput, BlogPostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type BlogPostScalarWhereInput = {
    AND?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    OR?: BlogPostScalarWhereInput[]
    NOT?: BlogPostScalarWhereInput | BlogPostScalarWhereInput[]
    id?: StringFilter<"BlogPost"> | string
    slug?: StringFilter<"BlogPost"> | string
    title?: StringFilter<"BlogPost"> | string
    content?: StringFilter<"BlogPost"> | string
    excerpt?: StringNullableFilter<"BlogPost"> | string | null
    coverImage?: StringNullableFilter<"BlogPost"> | string | null
    categoryId?: StringNullableFilter<"BlogPost"> | string | null
    seoSettingsId?: StringNullableFilter<"BlogPost"> | string | null
    status?: EnumPublishStatusFilter<"BlogPost"> | $Enums.PublishStatus
    publishedAt?: DateTimeNullableFilter<"BlogPost"> | Date | string | null
    authorId?: StringNullableFilter<"BlogPost"> | string | null
    createdAt?: DateTimeFilter<"BlogPost"> | Date | string
    updatedAt?: DateTimeFilter<"BlogPost"> | Date | string
  }

  export type MenuItemCreateManyParentInput = {
    id?: string
    label: string
    path: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: MenuItemUpdateManyWithoutParentNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: MenuItemUncheckedUpdateManyWithoutParentNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreatmentCategoryCreateManyExpertiseAreaInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreatmentCategoryUpdateWithoutExpertiseAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedures?: ProcedureUpdateManyWithoutTreatmentCategoryNestedInput
  }

  export type TreatmentCategoryUncheckedUpdateWithoutExpertiseAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    procedures?: ProcedureUncheckedUpdateManyWithoutTreatmentCategoryNestedInput
  }

  export type TreatmentCategoryUncheckedUpdateManyWithoutExpertiseAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureCreateManyTreatmentCategoryInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureUpdateWithoutTreatmentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methods?: ProcedureMethodUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUpdateManyWithoutProcedureNestedInput
    seo?: SEOSettingsUpdateOneWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateWithoutTreatmentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    methods?: ProcedureMethodUncheckedUpdateManyWithoutProcedureNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutProcedureNestedInput
  }

  export type ProcedureUncheckedUpdateManyWithoutTreatmentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodCreateManyProcedureInput = {
    id?: string
    slug: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FAQCreateManyProcedureInput = {
    id?: string
    question: string
    answer: string
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcedureMethodUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcedureMethodUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyWithoutProcedureInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostCreateManyCategoryInput = {
    id?: string
    slug: string
    title: string
    content: string
    excerpt?: string | null
    coverImage?: string | null
    seoSettingsId?: string | null
    status?: $Enums.PublishStatus
    publishedAt?: Date | string | null
    authorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogPostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seo?: SEOSettingsUpdateOneWithoutBlogPostNestedInput
  }

  export type BlogPostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogPostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    seoSettingsId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPublishStatusFieldUpdateOperationsInput | $Enums.PublishStatus
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}