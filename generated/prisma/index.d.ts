
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Proprietario
 * 
 */
export type Proprietario = $Result.DefaultSelection<Prisma.$ProprietarioPayload>
/**
 * Model Automovel
 * 
 */
export type Automovel = $Result.DefaultSelection<Prisma.$AutomovelPayload>
/**
 * Model Vendedor
 * 
 */
export type Vendedor = $Result.DefaultSelection<Prisma.$VendedorPayload>
/**
 * Model Comprador
 * 
 */
export type Comprador = $Result.DefaultSelection<Prisma.$CompradorPayload>
/**
 * Model Venda
 * 
 */
export type Venda = $Result.DefaultSelection<Prisma.$VendaPayload>
/**
 * Model CarrosVendidos
 * 
 */
export type CarrosVendidos = $Result.DefaultSelection<Prisma.$CarrosVendidosPayload>
/**
 * Model TiposGastos
 * 
 */
export type TiposGastos = $Result.DefaultSelection<Prisma.$TiposGastosPayload>
/**
 * Model GastosRealizados
 * 
 */
export type GastosRealizados = $Result.DefaultSelection<Prisma.$GastosRealizadosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proprietarios
 * const proprietarios = await prisma.proprietario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Proprietarios
   * const proprietarios = await prisma.proprietario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.proprietario`: Exposes CRUD operations for the **Proprietario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proprietarios
    * const proprietarios = await prisma.proprietario.findMany()
    * ```
    */
  get proprietario(): Prisma.ProprietarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automovel`: Exposes CRUD operations for the **Automovel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automovels
    * const automovels = await prisma.automovel.findMany()
    * ```
    */
  get automovel(): Prisma.AutomovelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vendedor`: Exposes CRUD operations for the **Vendedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendedors
    * const vendedors = await prisma.vendedor.findMany()
    * ```
    */
  get vendedor(): Prisma.VendedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comprador`: Exposes CRUD operations for the **Comprador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compradors
    * const compradors = await prisma.comprador.findMany()
    * ```
    */
  get comprador(): Prisma.CompradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venda`: Exposes CRUD operations for the **Venda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendas
    * const vendas = await prisma.venda.findMany()
    * ```
    */
  get venda(): Prisma.VendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrosVendidos`: Exposes CRUD operations for the **CarrosVendidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarrosVendidos
    * const carrosVendidos = await prisma.carrosVendidos.findMany()
    * ```
    */
  get carrosVendidos(): Prisma.CarrosVendidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tiposGastos`: Exposes CRUD operations for the **TiposGastos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TiposGastos
    * const tiposGastos = await prisma.tiposGastos.findMany()
    * ```
    */
  get tiposGastos(): Prisma.TiposGastosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gastosRealizados`: Exposes CRUD operations for the **GastosRealizados** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GastosRealizados
    * const gastosRealizados = await prisma.gastosRealizados.findMany()
    * ```
    */
  get gastosRealizados(): Prisma.GastosRealizadosDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Proprietario: 'Proprietario',
    Automovel: 'Automovel',
    Vendedor: 'Vendedor',
    Comprador: 'Comprador',
    Venda: 'Venda',
    CarrosVendidos: 'CarrosVendidos',
    TiposGastos: 'TiposGastos',
    GastosRealizados: 'GastosRealizados'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "proprietario" | "automovel" | "vendedor" | "comprador" | "venda" | "carrosVendidos" | "tiposGastos" | "gastosRealizados"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proprietario: {
        payload: Prisma.$ProprietarioPayload<ExtArgs>
        fields: Prisma.ProprietarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProprietarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProprietarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          findFirst: {
            args: Prisma.ProprietarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProprietarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          findMany: {
            args: Prisma.ProprietarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>[]
          }
          create: {
            args: Prisma.ProprietarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          createMany: {
            args: Prisma.ProprietarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProprietarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          update: {
            args: Prisma.ProprietarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          deleteMany: {
            args: Prisma.ProprietarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProprietarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProprietarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProprietarioPayload>
          }
          aggregate: {
            args: Prisma.ProprietarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProprietario>
          }
          groupBy: {
            args: Prisma.ProprietarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProprietarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProprietarioCountArgs<ExtArgs>
            result: $Utils.Optional<ProprietarioCountAggregateOutputType> | number
          }
        }
      }
      Automovel: {
        payload: Prisma.$AutomovelPayload<ExtArgs>
        fields: Prisma.AutomovelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomovelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomovelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          findFirst: {
            args: Prisma.AutomovelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomovelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          findMany: {
            args: Prisma.AutomovelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>[]
          }
          create: {
            args: Prisma.AutomovelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          createMany: {
            args: Prisma.AutomovelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AutomovelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          update: {
            args: Prisma.AutomovelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          deleteMany: {
            args: Prisma.AutomovelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomovelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutomovelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomovelPayload>
          }
          aggregate: {
            args: Prisma.AutomovelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomovel>
          }
          groupBy: {
            args: Prisma.AutomovelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomovelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomovelCountArgs<ExtArgs>
            result: $Utils.Optional<AutomovelCountAggregateOutputType> | number
          }
        }
      }
      Vendedor: {
        payload: Prisma.$VendedorPayload<ExtArgs>
        fields: Prisma.VendedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findFirst: {
            args: Prisma.VendedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          findMany: {
            args: Prisma.VendedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>[]
          }
          create: {
            args: Prisma.VendedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          createMany: {
            args: Prisma.VendedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          update: {
            args: Prisma.VendedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          deleteMany: {
            args: Prisma.VendedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendedorPayload>
          }
          aggregate: {
            args: Prisma.VendedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendedor>
          }
          groupBy: {
            args: Prisma.VendedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendedorCountArgs<ExtArgs>
            result: $Utils.Optional<VendedorCountAggregateOutputType> | number
          }
        }
      }
      Comprador: {
        payload: Prisma.$CompradorPayload<ExtArgs>
        fields: Prisma.CompradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          findFirst: {
            args: Prisma.CompradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          findMany: {
            args: Prisma.CompradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>[]
          }
          create: {
            args: Prisma.CompradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          createMany: {
            args: Prisma.CompradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          update: {
            args: Prisma.CompradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          deleteMany: {
            args: Prisma.CompradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompradorPayload>
          }
          aggregate: {
            args: Prisma.CompradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComprador>
          }
          groupBy: {
            args: Prisma.CompradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompradorCountArgs<ExtArgs>
            result: $Utils.Optional<CompradorCountAggregateOutputType> | number
          }
        }
      }
      Venda: {
        payload: Prisma.$VendaPayload<ExtArgs>
        fields: Prisma.VendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findFirst: {
            args: Prisma.VendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          findMany: {
            args: Prisma.VendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>[]
          }
          create: {
            args: Prisma.VendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          createMany: {
            args: Prisma.VendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          update: {
            args: Prisma.VendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          deleteMany: {
            args: Prisma.VendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendaPayload>
          }
          aggregate: {
            args: Prisma.VendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenda>
          }
          groupBy: {
            args: Prisma.VendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendaCountArgs<ExtArgs>
            result: $Utils.Optional<VendaCountAggregateOutputType> | number
          }
        }
      }
      CarrosVendidos: {
        payload: Prisma.$CarrosVendidosPayload<ExtArgs>
        fields: Prisma.CarrosVendidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrosVendidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrosVendidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          findFirst: {
            args: Prisma.CarrosVendidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrosVendidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          findMany: {
            args: Prisma.CarrosVendidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>[]
          }
          create: {
            args: Prisma.CarrosVendidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          createMany: {
            args: Prisma.CarrosVendidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CarrosVendidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          update: {
            args: Prisma.CarrosVendidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          deleteMany: {
            args: Prisma.CarrosVendidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarrosVendidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CarrosVendidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrosVendidosPayload>
          }
          aggregate: {
            args: Prisma.CarrosVendidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrosVendidos>
          }
          groupBy: {
            args: Prisma.CarrosVendidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrosVendidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrosVendidosCountArgs<ExtArgs>
            result: $Utils.Optional<CarrosVendidosCountAggregateOutputType> | number
          }
        }
      }
      TiposGastos: {
        payload: Prisma.$TiposGastosPayload<ExtArgs>
        fields: Prisma.TiposGastosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiposGastosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiposGastosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          findFirst: {
            args: Prisma.TiposGastosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiposGastosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          findMany: {
            args: Prisma.TiposGastosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>[]
          }
          create: {
            args: Prisma.TiposGastosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          createMany: {
            args: Prisma.TiposGastosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiposGastosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          update: {
            args: Prisma.TiposGastosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          deleteMany: {
            args: Prisma.TiposGastosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiposGastosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiposGastosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiposGastosPayload>
          }
          aggregate: {
            args: Prisma.TiposGastosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiposGastos>
          }
          groupBy: {
            args: Prisma.TiposGastosGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiposGastosGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiposGastosCountArgs<ExtArgs>
            result: $Utils.Optional<TiposGastosCountAggregateOutputType> | number
          }
        }
      }
      GastosRealizados: {
        payload: Prisma.$GastosRealizadosPayload<ExtArgs>
        fields: Prisma.GastosRealizadosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GastosRealizadosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GastosRealizadosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          findFirst: {
            args: Prisma.GastosRealizadosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GastosRealizadosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          findMany: {
            args: Prisma.GastosRealizadosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>[]
          }
          create: {
            args: Prisma.GastosRealizadosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          createMany: {
            args: Prisma.GastosRealizadosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GastosRealizadosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          update: {
            args: Prisma.GastosRealizadosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          deleteMany: {
            args: Prisma.GastosRealizadosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GastosRealizadosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GastosRealizadosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GastosRealizadosPayload>
          }
          aggregate: {
            args: Prisma.GastosRealizadosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGastosRealizados>
          }
          groupBy: {
            args: Prisma.GastosRealizadosGroupByArgs<ExtArgs>
            result: $Utils.Optional<GastosRealizadosGroupByOutputType>[]
          }
          count: {
            args: Prisma.GastosRealizadosCountArgs<ExtArgs>
            result: $Utils.Optional<GastosRealizadosCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    proprietario?: ProprietarioOmit
    automovel?: AutomovelOmit
    vendedor?: VendedorOmit
    comprador?: CompradorOmit
    venda?: VendaOmit
    carrosVendidos?: CarrosVendidosOmit
    tiposGastos?: TiposGastosOmit
    gastosRealizados?: GastosRealizadosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ProprietarioCountOutputType
   */

  export type ProprietarioCountOutputType = {
    automoveis: number
  }

  export type ProprietarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automoveis?: boolean | ProprietarioCountOutputTypeCountAutomoveisArgs
  }

  // Custom InputTypes
  /**
   * ProprietarioCountOutputType without action
   */
  export type ProprietarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProprietarioCountOutputType
     */
    select?: ProprietarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProprietarioCountOutputType without action
   */
  export type ProprietarioCountOutputTypeCountAutomoveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomovelWhereInput
  }


  /**
   * Count Type AutomovelCountOutputType
   */

  export type AutomovelCountOutputType = {
    carrosVendidos: number
    gastosRealizados: number
  }

  export type AutomovelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrosVendidos?: boolean | AutomovelCountOutputTypeCountCarrosVendidosArgs
    gastosRealizados?: boolean | AutomovelCountOutputTypeCountGastosRealizadosArgs
  }

  // Custom InputTypes
  /**
   * AutomovelCountOutputType without action
   */
  export type AutomovelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomovelCountOutputType
     */
    select?: AutomovelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomovelCountOutputType without action
   */
  export type AutomovelCountOutputTypeCountCarrosVendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrosVendidosWhereInput
  }

  /**
   * AutomovelCountOutputType without action
   */
  export type AutomovelCountOutputTypeCountGastosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosRealizadosWhereInput
  }


  /**
   * Count Type VendedorCountOutputType
   */

  export type VendedorCountOutputType = {
    vendas: number
  }

  export type VendedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | VendedorCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendedorCountOutputType
     */
    select?: VendedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendedorCountOutputType without action
   */
  export type VendedorCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
  }


  /**
   * Count Type CompradorCountOutputType
   */

  export type CompradorCountOutputType = {
    vendas: number
  }

  export type CompradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | CompradorCountOutputTypeCountVendasArgs
  }

  // Custom InputTypes
  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompradorCountOutputType
     */
    select?: CompradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompradorCountOutputType without action
   */
  export type CompradorCountOutputTypeCountVendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
  }


  /**
   * Count Type VendaCountOutputType
   */

  export type VendaCountOutputType = {
    carrosVendidos: number
  }

  export type VendaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrosVendidos?: boolean | VendaCountOutputTypeCountCarrosVendidosArgs
  }

  // Custom InputTypes
  /**
   * VendaCountOutputType without action
   */
  export type VendaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendaCountOutputType
     */
    select?: VendaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendaCountOutputType without action
   */
  export type VendaCountOutputTypeCountCarrosVendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrosVendidosWhereInput
  }


  /**
   * Count Type TiposGastosCountOutputType
   */

  export type TiposGastosCountOutputType = {
    gastosRealizados: number
  }

  export type TiposGastosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastosRealizados?: boolean | TiposGastosCountOutputTypeCountGastosRealizadosArgs
  }

  // Custom InputTypes
  /**
   * TiposGastosCountOutputType without action
   */
  export type TiposGastosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastosCountOutputType
     */
    select?: TiposGastosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiposGastosCountOutputType without action
   */
  export type TiposGastosCountOutputTypeCountGastosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosRealizadosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Proprietario
   */

  export type AggregateProprietario = {
    _count: ProprietarioCountAggregateOutputType | null
    _min: ProprietarioMinAggregateOutputType | null
    _max: ProprietarioMaxAggregateOutputType | null
  }

  export type ProprietarioMinAggregateOutputType = {
    CPF_CNPJ: string | null
    RG: string | null
    NOME: string | null
    FONE: string | null
    ENDERECO: string | null
    BAIRRO: string | null
    CIDADE: string | null
    ESTADO: string | null
  }

  export type ProprietarioMaxAggregateOutputType = {
    CPF_CNPJ: string | null
    RG: string | null
    NOME: string | null
    FONE: string | null
    ENDERECO: string | null
    BAIRRO: string | null
    CIDADE: string | null
    ESTADO: string | null
  }

  export type ProprietarioCountAggregateOutputType = {
    CPF_CNPJ: number
    RG: number
    NOME: number
    FONE: number
    ENDERECO: number
    BAIRRO: number
    CIDADE: number
    ESTADO: number
    _all: number
  }


  export type ProprietarioMinAggregateInputType = {
    CPF_CNPJ?: true
    RG?: true
    NOME?: true
    FONE?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
  }

  export type ProprietarioMaxAggregateInputType = {
    CPF_CNPJ?: true
    RG?: true
    NOME?: true
    FONE?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
  }

  export type ProprietarioCountAggregateInputType = {
    CPF_CNPJ?: true
    RG?: true
    NOME?: true
    FONE?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
    _all?: true
  }

  export type ProprietarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietario to aggregate.
     */
    where?: ProprietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proprietarios to fetch.
     */
    orderBy?: ProprietarioOrderByWithRelationInput | ProprietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProprietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proprietarios
    **/
    _count?: true | ProprietarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProprietarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProprietarioMaxAggregateInputType
  }

  export type GetProprietarioAggregateType<T extends ProprietarioAggregateArgs> = {
        [P in keyof T & keyof AggregateProprietario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProprietario[P]>
      : GetScalarType<T[P], AggregateProprietario[P]>
  }




  export type ProprietarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProprietarioWhereInput
    orderBy?: ProprietarioOrderByWithAggregationInput | ProprietarioOrderByWithAggregationInput[]
    by: ProprietarioScalarFieldEnum[] | ProprietarioScalarFieldEnum
    having?: ProprietarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProprietarioCountAggregateInputType | true
    _min?: ProprietarioMinAggregateInputType
    _max?: ProprietarioMaxAggregateInputType
  }

  export type ProprietarioGroupByOutputType = {
    CPF_CNPJ: string
    RG: string | null
    NOME: string
    FONE: string
    ENDERECO: string | null
    BAIRRO: string | null
    CIDADE: string | null
    ESTADO: string | null
    _count: ProprietarioCountAggregateOutputType | null
    _min: ProprietarioMinAggregateOutputType | null
    _max: ProprietarioMaxAggregateOutputType | null
  }

  type GetProprietarioGroupByPayload<T extends ProprietarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProprietarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProprietarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProprietarioGroupByOutputType[P]>
            : GetScalarType<T[P], ProprietarioGroupByOutputType[P]>
        }
      >
    >


  export type ProprietarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CPF_CNPJ?: boolean
    RG?: boolean
    NOME?: boolean
    FONE?: boolean
    ENDERECO?: boolean
    BAIRRO?: boolean
    CIDADE?: boolean
    ESTADO?: boolean
    automoveis?: boolean | Proprietario$automoveisArgs<ExtArgs>
    _count?: boolean | ProprietarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proprietario"]>



  export type ProprietarioSelectScalar = {
    CPF_CNPJ?: boolean
    RG?: boolean
    NOME?: boolean
    FONE?: boolean
    ENDERECO?: boolean
    BAIRRO?: boolean
    CIDADE?: boolean
    ESTADO?: boolean
  }

  export type ProprietarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CPF_CNPJ" | "RG" | "NOME" | "FONE" | "ENDERECO" | "BAIRRO" | "CIDADE" | "ESTADO", ExtArgs["result"]["proprietario"]>
  export type ProprietarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automoveis?: boolean | Proprietario$automoveisArgs<ExtArgs>
    _count?: boolean | ProprietarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProprietarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proprietario"
    objects: {
      automoveis: Prisma.$AutomovelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CPF_CNPJ: string
      RG: string | null
      NOME: string
      FONE: string
      ENDERECO: string | null
      BAIRRO: string | null
      CIDADE: string | null
      ESTADO: string | null
    }, ExtArgs["result"]["proprietario"]>
    composites: {}
  }

  type ProprietarioGetPayload<S extends boolean | null | undefined | ProprietarioDefaultArgs> = $Result.GetResult<Prisma.$ProprietarioPayload, S>

  type ProprietarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProprietarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProprietarioCountAggregateInputType | true
    }

  export interface ProprietarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proprietario'], meta: { name: 'Proprietario' } }
    /**
     * Find zero or one Proprietario that matches the filter.
     * @param {ProprietarioFindUniqueArgs} args - Arguments to find a Proprietario
     * @example
     * // Get one Proprietario
     * const proprietario = await prisma.proprietario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProprietarioFindUniqueArgs>(args: SelectSubset<T, ProprietarioFindUniqueArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proprietario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProprietarioFindUniqueOrThrowArgs} args - Arguments to find a Proprietario
     * @example
     * // Get one Proprietario
     * const proprietario = await prisma.proprietario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProprietarioFindUniqueOrThrowArgs>(args: SelectSubset<T, ProprietarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proprietario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioFindFirstArgs} args - Arguments to find a Proprietario
     * @example
     * // Get one Proprietario
     * const proprietario = await prisma.proprietario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProprietarioFindFirstArgs>(args?: SelectSubset<T, ProprietarioFindFirstArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proprietario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioFindFirstOrThrowArgs} args - Arguments to find a Proprietario
     * @example
     * // Get one Proprietario
     * const proprietario = await prisma.proprietario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProprietarioFindFirstOrThrowArgs>(args?: SelectSubset<T, ProprietarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proprietarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proprietarios
     * const proprietarios = await prisma.proprietario.findMany()
     * 
     * // Get first 10 Proprietarios
     * const proprietarios = await prisma.proprietario.findMany({ take: 10 })
     * 
     * // Only select the `CPF_CNPJ`
     * const proprietarioWithCPF_CNPJOnly = await prisma.proprietario.findMany({ select: { CPF_CNPJ: true } })
     * 
     */
    findMany<T extends ProprietarioFindManyArgs>(args?: SelectSubset<T, ProprietarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proprietario.
     * @param {ProprietarioCreateArgs} args - Arguments to create a Proprietario.
     * @example
     * // Create one Proprietario
     * const Proprietario = await prisma.proprietario.create({
     *   data: {
     *     // ... data to create a Proprietario
     *   }
     * })
     * 
     */
    create<T extends ProprietarioCreateArgs>(args: SelectSubset<T, ProprietarioCreateArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proprietarios.
     * @param {ProprietarioCreateManyArgs} args - Arguments to create many Proprietarios.
     * @example
     * // Create many Proprietarios
     * const proprietario = await prisma.proprietario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProprietarioCreateManyArgs>(args?: SelectSubset<T, ProprietarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proprietario.
     * @param {ProprietarioDeleteArgs} args - Arguments to delete one Proprietario.
     * @example
     * // Delete one Proprietario
     * const Proprietario = await prisma.proprietario.delete({
     *   where: {
     *     // ... filter to delete one Proprietario
     *   }
     * })
     * 
     */
    delete<T extends ProprietarioDeleteArgs>(args: SelectSubset<T, ProprietarioDeleteArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proprietario.
     * @param {ProprietarioUpdateArgs} args - Arguments to update one Proprietario.
     * @example
     * // Update one Proprietario
     * const proprietario = await prisma.proprietario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProprietarioUpdateArgs>(args: SelectSubset<T, ProprietarioUpdateArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proprietarios.
     * @param {ProprietarioDeleteManyArgs} args - Arguments to filter Proprietarios to delete.
     * @example
     * // Delete a few Proprietarios
     * const { count } = await prisma.proprietario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProprietarioDeleteManyArgs>(args?: SelectSubset<T, ProprietarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proprietarios
     * const proprietario = await prisma.proprietario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProprietarioUpdateManyArgs>(args: SelectSubset<T, ProprietarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proprietario.
     * @param {ProprietarioUpsertArgs} args - Arguments to update or create a Proprietario.
     * @example
     * // Update or create a Proprietario
     * const proprietario = await prisma.proprietario.upsert({
     *   create: {
     *     // ... data to create a Proprietario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proprietario we want to update
     *   }
     * })
     */
    upsert<T extends ProprietarioUpsertArgs>(args: SelectSubset<T, ProprietarioUpsertArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proprietarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioCountArgs} args - Arguments to filter Proprietarios to count.
     * @example
     * // Count the number of Proprietarios
     * const count = await prisma.proprietario.count({
     *   where: {
     *     // ... the filter for the Proprietarios we want to count
     *   }
     * })
    **/
    count<T extends ProprietarioCountArgs>(
      args?: Subset<T, ProprietarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProprietarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proprietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProprietarioAggregateArgs>(args: Subset<T, ProprietarioAggregateArgs>): Prisma.PrismaPromise<GetProprietarioAggregateType<T>>

    /**
     * Group by Proprietario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProprietarioGroupByArgs} args - Group by arguments.
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
      T extends ProprietarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProprietarioGroupByArgs['orderBy'] }
        : { orderBy?: ProprietarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProprietarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProprietarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proprietario model
   */
  readonly fields: ProprietarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proprietario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProprietarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    automoveis<T extends Proprietario$automoveisArgs<ExtArgs> = {}>(args?: Subset<T, Proprietario$automoveisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proprietario model
   */
  interface ProprietarioFieldRefs {
    readonly CPF_CNPJ: FieldRef<"Proprietario", 'String'>
    readonly RG: FieldRef<"Proprietario", 'String'>
    readonly NOME: FieldRef<"Proprietario", 'String'>
    readonly FONE: FieldRef<"Proprietario", 'String'>
    readonly ENDERECO: FieldRef<"Proprietario", 'String'>
    readonly BAIRRO: FieldRef<"Proprietario", 'String'>
    readonly CIDADE: FieldRef<"Proprietario", 'String'>
    readonly ESTADO: FieldRef<"Proprietario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Proprietario findUnique
   */
  export type ProprietarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter, which Proprietario to fetch.
     */
    where: ProprietarioWhereUniqueInput
  }

  /**
   * Proprietario findUniqueOrThrow
   */
  export type ProprietarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter, which Proprietario to fetch.
     */
    where: ProprietarioWhereUniqueInput
  }

  /**
   * Proprietario findFirst
   */
  export type ProprietarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter, which Proprietario to fetch.
     */
    where?: ProprietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proprietarios to fetch.
     */
    orderBy?: ProprietarioOrderByWithRelationInput | ProprietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proprietarios.
     */
    cursor?: ProprietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proprietarios.
     */
    distinct?: ProprietarioScalarFieldEnum | ProprietarioScalarFieldEnum[]
  }

  /**
   * Proprietario findFirstOrThrow
   */
  export type ProprietarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter, which Proprietario to fetch.
     */
    where?: ProprietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proprietarios to fetch.
     */
    orderBy?: ProprietarioOrderByWithRelationInput | ProprietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proprietarios.
     */
    cursor?: ProprietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proprietarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proprietarios.
     */
    distinct?: ProprietarioScalarFieldEnum | ProprietarioScalarFieldEnum[]
  }

  /**
   * Proprietario findMany
   */
  export type ProprietarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter, which Proprietarios to fetch.
     */
    where?: ProprietarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proprietarios to fetch.
     */
    orderBy?: ProprietarioOrderByWithRelationInput | ProprietarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proprietarios.
     */
    cursor?: ProprietarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proprietarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proprietarios.
     */
    skip?: number
    distinct?: ProprietarioScalarFieldEnum | ProprietarioScalarFieldEnum[]
  }

  /**
   * Proprietario create
   */
  export type ProprietarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Proprietario.
     */
    data: XOR<ProprietarioCreateInput, ProprietarioUncheckedCreateInput>
  }

  /**
   * Proprietario createMany
   */
  export type ProprietarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proprietarios.
     */
    data: ProprietarioCreateManyInput | ProprietarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proprietario update
   */
  export type ProprietarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Proprietario.
     */
    data: XOR<ProprietarioUpdateInput, ProprietarioUncheckedUpdateInput>
    /**
     * Choose, which Proprietario to update.
     */
    where: ProprietarioWhereUniqueInput
  }

  /**
   * Proprietario updateMany
   */
  export type ProprietarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proprietarios.
     */
    data: XOR<ProprietarioUpdateManyMutationInput, ProprietarioUncheckedUpdateManyInput>
    /**
     * Filter which Proprietarios to update
     */
    where?: ProprietarioWhereInput
    /**
     * Limit how many Proprietarios to update.
     */
    limit?: number
  }

  /**
   * Proprietario upsert
   */
  export type ProprietarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Proprietario to update in case it exists.
     */
    where: ProprietarioWhereUniqueInput
    /**
     * In case the Proprietario found by the `where` argument doesn't exist, create a new Proprietario with this data.
     */
    create: XOR<ProprietarioCreateInput, ProprietarioUncheckedCreateInput>
    /**
     * In case the Proprietario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProprietarioUpdateInput, ProprietarioUncheckedUpdateInput>
  }

  /**
   * Proprietario delete
   */
  export type ProprietarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
    /**
     * Filter which Proprietario to delete.
     */
    where: ProprietarioWhereUniqueInput
  }

  /**
   * Proprietario deleteMany
   */
  export type ProprietarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proprietarios to delete
     */
    where?: ProprietarioWhereInput
    /**
     * Limit how many Proprietarios to delete.
     */
    limit?: number
  }

  /**
   * Proprietario.automoveis
   */
  export type Proprietario$automoveisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    where?: AutomovelWhereInput
    orderBy?: AutomovelOrderByWithRelationInput | AutomovelOrderByWithRelationInput[]
    cursor?: AutomovelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomovelScalarFieldEnum | AutomovelScalarFieldEnum[]
  }

  /**
   * Proprietario without action
   */
  export type ProprietarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proprietario
     */
    select?: ProprietarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proprietario
     */
    omit?: ProprietarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProprietarioInclude<ExtArgs> | null
  }


  /**
   * Model Automovel
   */

  export type AggregateAutomovel = {
    _count: AutomovelCountAggregateOutputType | null
    _avg: AutomovelAvgAggregateOutputType | null
    _sum: AutomovelSumAggregateOutputType | null
    _min: AutomovelMinAggregateOutputType | null
    _max: AutomovelMaxAggregateOutputType | null
  }

  export type AutomovelAvgAggregateOutputType = {
    ANO: number | null
    KMENTRADA: number | null
    VALORENTRADA: Decimal | null
  }

  export type AutomovelSumAggregateOutputType = {
    ANO: number | null
    KMENTRADA: number | null
    VALORENTRADA: Decimal | null
  }

  export type AutomovelMinAggregateOutputType = {
    PLACAS: string | null
    MODELO: string | null
    MARCA: string | null
    ANO: number | null
    COMBS: string | null
    COR: string | null
    CHASSI: string | null
    DATAENTRADA: Date | null
    HORAENTRADA: Date | null
    KMENTRADA: number | null
    VALORENTRADA: Decimal | null
    CPF_CNPJ: string | null
  }

  export type AutomovelMaxAggregateOutputType = {
    PLACAS: string | null
    MODELO: string | null
    MARCA: string | null
    ANO: number | null
    COMBS: string | null
    COR: string | null
    CHASSI: string | null
    DATAENTRADA: Date | null
    HORAENTRADA: Date | null
    KMENTRADA: number | null
    VALORENTRADA: Decimal | null
    CPF_CNPJ: string | null
  }

  export type AutomovelCountAggregateOutputType = {
    PLACAS: number
    MODELO: number
    MARCA: number
    ANO: number
    COMBS: number
    COR: number
    CHASSI: number
    DATAENTRADA: number
    HORAENTRADA: number
    KMENTRADA: number
    VALORENTRADA: number
    CPF_CNPJ: number
    _all: number
  }


  export type AutomovelAvgAggregateInputType = {
    ANO?: true
    KMENTRADA?: true
    VALORENTRADA?: true
  }

  export type AutomovelSumAggregateInputType = {
    ANO?: true
    KMENTRADA?: true
    VALORENTRADA?: true
  }

  export type AutomovelMinAggregateInputType = {
    PLACAS?: true
    MODELO?: true
    MARCA?: true
    ANO?: true
    COMBS?: true
    COR?: true
    CHASSI?: true
    DATAENTRADA?: true
    HORAENTRADA?: true
    KMENTRADA?: true
    VALORENTRADA?: true
    CPF_CNPJ?: true
  }

  export type AutomovelMaxAggregateInputType = {
    PLACAS?: true
    MODELO?: true
    MARCA?: true
    ANO?: true
    COMBS?: true
    COR?: true
    CHASSI?: true
    DATAENTRADA?: true
    HORAENTRADA?: true
    KMENTRADA?: true
    VALORENTRADA?: true
    CPF_CNPJ?: true
  }

  export type AutomovelCountAggregateInputType = {
    PLACAS?: true
    MODELO?: true
    MARCA?: true
    ANO?: true
    COMBS?: true
    COR?: true
    CHASSI?: true
    DATAENTRADA?: true
    HORAENTRADA?: true
    KMENTRADA?: true
    VALORENTRADA?: true
    CPF_CNPJ?: true
    _all?: true
  }

  export type AutomovelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automovel to aggregate.
     */
    where?: AutomovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automovels to fetch.
     */
    orderBy?: AutomovelOrderByWithRelationInput | AutomovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automovels
    **/
    _count?: true | AutomovelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutomovelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutomovelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomovelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomovelMaxAggregateInputType
  }

  export type GetAutomovelAggregateType<T extends AutomovelAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomovel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomovel[P]>
      : GetScalarType<T[P], AggregateAutomovel[P]>
  }




  export type AutomovelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomovelWhereInput
    orderBy?: AutomovelOrderByWithAggregationInput | AutomovelOrderByWithAggregationInput[]
    by: AutomovelScalarFieldEnum[] | AutomovelScalarFieldEnum
    having?: AutomovelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomovelCountAggregateInputType | true
    _avg?: AutomovelAvgAggregateInputType
    _sum?: AutomovelSumAggregateInputType
    _min?: AutomovelMinAggregateInputType
    _max?: AutomovelMaxAggregateInputType
  }

  export type AutomovelGroupByOutputType = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date
    HORAENTRADA: Date
    KMENTRADA: number
    VALORENTRADA: Decimal
    CPF_CNPJ: string
    _count: AutomovelCountAggregateOutputType | null
    _avg: AutomovelAvgAggregateOutputType | null
    _sum: AutomovelSumAggregateOutputType | null
    _min: AutomovelMinAggregateOutputType | null
    _max: AutomovelMaxAggregateOutputType | null
  }

  type GetAutomovelGroupByPayload<T extends AutomovelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomovelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomovelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomovelGroupByOutputType[P]>
            : GetScalarType<T[P], AutomovelGroupByOutputType[P]>
        }
      >
    >


  export type AutomovelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PLACAS?: boolean
    MODELO?: boolean
    MARCA?: boolean
    ANO?: boolean
    COMBS?: boolean
    COR?: boolean
    CHASSI?: boolean
    DATAENTRADA?: boolean
    HORAENTRADA?: boolean
    KMENTRADA?: boolean
    VALORENTRADA?: boolean
    CPF_CNPJ?: boolean
    proprietario?: boolean | ProprietarioDefaultArgs<ExtArgs>
    carrosVendidos?: boolean | Automovel$carrosVendidosArgs<ExtArgs>
    gastosRealizados?: boolean | Automovel$gastosRealizadosArgs<ExtArgs>
    _count?: boolean | AutomovelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automovel"]>



  export type AutomovelSelectScalar = {
    PLACAS?: boolean
    MODELO?: boolean
    MARCA?: boolean
    ANO?: boolean
    COMBS?: boolean
    COR?: boolean
    CHASSI?: boolean
    DATAENTRADA?: boolean
    HORAENTRADA?: boolean
    KMENTRADA?: boolean
    VALORENTRADA?: boolean
    CPF_CNPJ?: boolean
  }

  export type AutomovelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PLACAS" | "MODELO" | "MARCA" | "ANO" | "COMBS" | "COR" | "CHASSI" | "DATAENTRADA" | "HORAENTRADA" | "KMENTRADA" | "VALORENTRADA" | "CPF_CNPJ", ExtArgs["result"]["automovel"]>
  export type AutomovelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proprietario?: boolean | ProprietarioDefaultArgs<ExtArgs>
    carrosVendidos?: boolean | Automovel$carrosVendidosArgs<ExtArgs>
    gastosRealizados?: boolean | Automovel$gastosRealizadosArgs<ExtArgs>
    _count?: boolean | AutomovelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AutomovelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automovel"
    objects: {
      proprietario: Prisma.$ProprietarioPayload<ExtArgs>
      carrosVendidos: Prisma.$CarrosVendidosPayload<ExtArgs>[]
      gastosRealizados: Prisma.$GastosRealizadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      PLACAS: string
      MODELO: string
      MARCA: string
      ANO: number
      COMBS: string
      COR: string
      CHASSI: string
      DATAENTRADA: Date
      HORAENTRADA: Date
      KMENTRADA: number
      VALORENTRADA: Prisma.Decimal
      CPF_CNPJ: string
    }, ExtArgs["result"]["automovel"]>
    composites: {}
  }

  type AutomovelGetPayload<S extends boolean | null | undefined | AutomovelDefaultArgs> = $Result.GetResult<Prisma.$AutomovelPayload, S>

  type AutomovelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomovelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomovelCountAggregateInputType | true
    }

  export interface AutomovelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automovel'], meta: { name: 'Automovel' } }
    /**
     * Find zero or one Automovel that matches the filter.
     * @param {AutomovelFindUniqueArgs} args - Arguments to find a Automovel
     * @example
     * // Get one Automovel
     * const automovel = await prisma.automovel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomovelFindUniqueArgs>(args: SelectSubset<T, AutomovelFindUniqueArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automovel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomovelFindUniqueOrThrowArgs} args - Arguments to find a Automovel
     * @example
     * // Get one Automovel
     * const automovel = await prisma.automovel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomovelFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomovelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automovel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelFindFirstArgs} args - Arguments to find a Automovel
     * @example
     * // Get one Automovel
     * const automovel = await prisma.automovel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomovelFindFirstArgs>(args?: SelectSubset<T, AutomovelFindFirstArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automovel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelFindFirstOrThrowArgs} args - Arguments to find a Automovel
     * @example
     * // Get one Automovel
     * const automovel = await prisma.automovel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomovelFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomovelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automovels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automovels
     * const automovels = await prisma.automovel.findMany()
     * 
     * // Get first 10 Automovels
     * const automovels = await prisma.automovel.findMany({ take: 10 })
     * 
     * // Only select the `PLACAS`
     * const automovelWithPLACASOnly = await prisma.automovel.findMany({ select: { PLACAS: true } })
     * 
     */
    findMany<T extends AutomovelFindManyArgs>(args?: SelectSubset<T, AutomovelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automovel.
     * @param {AutomovelCreateArgs} args - Arguments to create a Automovel.
     * @example
     * // Create one Automovel
     * const Automovel = await prisma.automovel.create({
     *   data: {
     *     // ... data to create a Automovel
     *   }
     * })
     * 
     */
    create<T extends AutomovelCreateArgs>(args: SelectSubset<T, AutomovelCreateArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automovels.
     * @param {AutomovelCreateManyArgs} args - Arguments to create many Automovels.
     * @example
     * // Create many Automovels
     * const automovel = await prisma.automovel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomovelCreateManyArgs>(args?: SelectSubset<T, AutomovelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Automovel.
     * @param {AutomovelDeleteArgs} args - Arguments to delete one Automovel.
     * @example
     * // Delete one Automovel
     * const Automovel = await prisma.automovel.delete({
     *   where: {
     *     // ... filter to delete one Automovel
     *   }
     * })
     * 
     */
    delete<T extends AutomovelDeleteArgs>(args: SelectSubset<T, AutomovelDeleteArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automovel.
     * @param {AutomovelUpdateArgs} args - Arguments to update one Automovel.
     * @example
     * // Update one Automovel
     * const automovel = await prisma.automovel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomovelUpdateArgs>(args: SelectSubset<T, AutomovelUpdateArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automovels.
     * @param {AutomovelDeleteManyArgs} args - Arguments to filter Automovels to delete.
     * @example
     * // Delete a few Automovels
     * const { count } = await prisma.automovel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomovelDeleteManyArgs>(args?: SelectSubset<T, AutomovelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automovels
     * const automovel = await prisma.automovel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomovelUpdateManyArgs>(args: SelectSubset<T, AutomovelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Automovel.
     * @param {AutomovelUpsertArgs} args - Arguments to update or create a Automovel.
     * @example
     * // Update or create a Automovel
     * const automovel = await prisma.automovel.upsert({
     *   create: {
     *     // ... data to create a Automovel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automovel we want to update
     *   }
     * })
     */
    upsert<T extends AutomovelUpsertArgs>(args: SelectSubset<T, AutomovelUpsertArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automovels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelCountArgs} args - Arguments to filter Automovels to count.
     * @example
     * // Count the number of Automovels
     * const count = await prisma.automovel.count({
     *   where: {
     *     // ... the filter for the Automovels we want to count
     *   }
     * })
    **/
    count<T extends AutomovelCountArgs>(
      args?: Subset<T, AutomovelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomovelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomovelAggregateArgs>(args: Subset<T, AutomovelAggregateArgs>): Prisma.PrismaPromise<GetAutomovelAggregateType<T>>

    /**
     * Group by Automovel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomovelGroupByArgs} args - Group by arguments.
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
      T extends AutomovelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomovelGroupByArgs['orderBy'] }
        : { orderBy?: AutomovelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomovelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomovelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automovel model
   */
  readonly fields: AutomovelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automovel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomovelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proprietario<T extends ProprietarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProprietarioDefaultArgs<ExtArgs>>): Prisma__ProprietarioClient<$Result.GetResult<Prisma.$ProprietarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrosVendidos<T extends Automovel$carrosVendidosArgs<ExtArgs> = {}>(args?: Subset<T, Automovel$carrosVendidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gastosRealizados<T extends Automovel$gastosRealizadosArgs<ExtArgs> = {}>(args?: Subset<T, Automovel$gastosRealizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Automovel model
   */
  interface AutomovelFieldRefs {
    readonly PLACAS: FieldRef<"Automovel", 'String'>
    readonly MODELO: FieldRef<"Automovel", 'String'>
    readonly MARCA: FieldRef<"Automovel", 'String'>
    readonly ANO: FieldRef<"Automovel", 'Int'>
    readonly COMBS: FieldRef<"Automovel", 'String'>
    readonly COR: FieldRef<"Automovel", 'String'>
    readonly CHASSI: FieldRef<"Automovel", 'String'>
    readonly DATAENTRADA: FieldRef<"Automovel", 'DateTime'>
    readonly HORAENTRADA: FieldRef<"Automovel", 'DateTime'>
    readonly KMENTRADA: FieldRef<"Automovel", 'Int'>
    readonly VALORENTRADA: FieldRef<"Automovel", 'Decimal'>
    readonly CPF_CNPJ: FieldRef<"Automovel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Automovel findUnique
   */
  export type AutomovelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter, which Automovel to fetch.
     */
    where: AutomovelWhereUniqueInput
  }

  /**
   * Automovel findUniqueOrThrow
   */
  export type AutomovelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter, which Automovel to fetch.
     */
    where: AutomovelWhereUniqueInput
  }

  /**
   * Automovel findFirst
   */
  export type AutomovelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter, which Automovel to fetch.
     */
    where?: AutomovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automovels to fetch.
     */
    orderBy?: AutomovelOrderByWithRelationInput | AutomovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automovels.
     */
    cursor?: AutomovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automovels.
     */
    distinct?: AutomovelScalarFieldEnum | AutomovelScalarFieldEnum[]
  }

  /**
   * Automovel findFirstOrThrow
   */
  export type AutomovelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter, which Automovel to fetch.
     */
    where?: AutomovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automovels to fetch.
     */
    orderBy?: AutomovelOrderByWithRelationInput | AutomovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automovels.
     */
    cursor?: AutomovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automovels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automovels.
     */
    distinct?: AutomovelScalarFieldEnum | AutomovelScalarFieldEnum[]
  }

  /**
   * Automovel findMany
   */
  export type AutomovelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter, which Automovels to fetch.
     */
    where?: AutomovelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automovels to fetch.
     */
    orderBy?: AutomovelOrderByWithRelationInput | AutomovelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automovels.
     */
    cursor?: AutomovelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automovels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automovels.
     */
    skip?: number
    distinct?: AutomovelScalarFieldEnum | AutomovelScalarFieldEnum[]
  }

  /**
   * Automovel create
   */
  export type AutomovelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * The data needed to create a Automovel.
     */
    data: XOR<AutomovelCreateInput, AutomovelUncheckedCreateInput>
  }

  /**
   * Automovel createMany
   */
  export type AutomovelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automovels.
     */
    data: AutomovelCreateManyInput | AutomovelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automovel update
   */
  export type AutomovelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * The data needed to update a Automovel.
     */
    data: XOR<AutomovelUpdateInput, AutomovelUncheckedUpdateInput>
    /**
     * Choose, which Automovel to update.
     */
    where: AutomovelWhereUniqueInput
  }

  /**
   * Automovel updateMany
   */
  export type AutomovelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automovels.
     */
    data: XOR<AutomovelUpdateManyMutationInput, AutomovelUncheckedUpdateManyInput>
    /**
     * Filter which Automovels to update
     */
    where?: AutomovelWhereInput
    /**
     * Limit how many Automovels to update.
     */
    limit?: number
  }

  /**
   * Automovel upsert
   */
  export type AutomovelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * The filter to search for the Automovel to update in case it exists.
     */
    where: AutomovelWhereUniqueInput
    /**
     * In case the Automovel found by the `where` argument doesn't exist, create a new Automovel with this data.
     */
    create: XOR<AutomovelCreateInput, AutomovelUncheckedCreateInput>
    /**
     * In case the Automovel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomovelUpdateInput, AutomovelUncheckedUpdateInput>
  }

  /**
   * Automovel delete
   */
  export type AutomovelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
    /**
     * Filter which Automovel to delete.
     */
    where: AutomovelWhereUniqueInput
  }

  /**
   * Automovel deleteMany
   */
  export type AutomovelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automovels to delete
     */
    where?: AutomovelWhereInput
    /**
     * Limit how many Automovels to delete.
     */
    limit?: number
  }

  /**
   * Automovel.carrosVendidos
   */
  export type Automovel$carrosVendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    where?: CarrosVendidosWhereInput
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    cursor?: CarrosVendidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrosVendidosScalarFieldEnum | CarrosVendidosScalarFieldEnum[]
  }

  /**
   * Automovel.gastosRealizados
   */
  export type Automovel$gastosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    where?: GastosRealizadosWhereInput
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    cursor?: GastosRealizadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastosRealizadosScalarFieldEnum | GastosRealizadosScalarFieldEnum[]
  }

  /**
   * Automovel without action
   */
  export type AutomovelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automovel
     */
    select?: AutomovelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automovel
     */
    omit?: AutomovelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomovelInclude<ExtArgs> | null
  }


  /**
   * Model Vendedor
   */

  export type AggregateVendedor = {
    _count: VendedorCountAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  export type VendedorMinAggregateOutputType = {
    CPF: string | null
    RG: string | null
    NOME: string | null
    ENDERECO: string | null
    BAIRRO: string | null
    CIDADE: string | null
    ESTADO: string | null
  }

  export type VendedorMaxAggregateOutputType = {
    CPF: string | null
    RG: string | null
    NOME: string | null
    ENDERECO: string | null
    BAIRRO: string | null
    CIDADE: string | null
    ESTADO: string | null
  }

  export type VendedorCountAggregateOutputType = {
    CPF: number
    RG: number
    NOME: number
    ENDERECO: number
    BAIRRO: number
    CIDADE: number
    ESTADO: number
    _all: number
  }


  export type VendedorMinAggregateInputType = {
    CPF?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
  }

  export type VendedorMaxAggregateInputType = {
    CPF?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
  }

  export type VendedorCountAggregateInputType = {
    CPF?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    BAIRRO?: true
    CIDADE?: true
    ESTADO?: true
    _all?: true
  }

  export type VendedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedor to aggregate.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendedors
    **/
    _count?: true | VendedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendedorMaxAggregateInputType
  }

  export type GetVendedorAggregateType<T extends VendedorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendedor[P]>
      : GetScalarType<T[P], AggregateVendedor[P]>
  }




  export type VendedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendedorWhereInput
    orderBy?: VendedorOrderByWithAggregationInput | VendedorOrderByWithAggregationInput[]
    by: VendedorScalarFieldEnum[] | VendedorScalarFieldEnum
    having?: VendedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendedorCountAggregateInputType | true
    _min?: VendedorMinAggregateInputType
    _max?: VendedorMaxAggregateInputType
  }

  export type VendedorGroupByOutputType = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
    _count: VendedorCountAggregateOutputType | null
    _min: VendedorMinAggregateOutputType | null
    _max: VendedorMaxAggregateOutputType | null
  }

  type GetVendedorGroupByPayload<T extends VendedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendedorGroupByOutputType[P]>
            : GetScalarType<T[P], VendedorGroupByOutputType[P]>
        }
      >
    >


  export type VendedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CPF?: boolean
    RG?: boolean
    NOME?: boolean
    ENDERECO?: boolean
    BAIRRO?: boolean
    CIDADE?: boolean
    ESTADO?: boolean
    vendas?: boolean | Vendedor$vendasArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendedor"]>



  export type VendedorSelectScalar = {
    CPF?: boolean
    RG?: boolean
    NOME?: boolean
    ENDERECO?: boolean
    BAIRRO?: boolean
    CIDADE?: boolean
    ESTADO?: boolean
  }

  export type VendedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CPF" | "RG" | "NOME" | "ENDERECO" | "BAIRRO" | "CIDADE" | "ESTADO", ExtArgs["result"]["vendedor"]>
  export type VendedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Vendedor$vendasArgs<ExtArgs>
    _count?: boolean | VendedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendedor"
    objects: {
      vendas: Prisma.$VendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CPF: string
      RG: string
      NOME: string
      ENDERECO: string
      BAIRRO: string
      CIDADE: string
      ESTADO: string
    }, ExtArgs["result"]["vendedor"]>
    composites: {}
  }

  type VendedorGetPayload<S extends boolean | null | undefined | VendedorDefaultArgs> = $Result.GetResult<Prisma.$VendedorPayload, S>

  type VendedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendedorCountAggregateInputType | true
    }

  export interface VendedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendedor'], meta: { name: 'Vendedor' } }
    /**
     * Find zero or one Vendedor that matches the filter.
     * @param {VendedorFindUniqueArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendedorFindUniqueArgs>(args: SelectSubset<T, VendedorFindUniqueArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vendedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendedorFindUniqueOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendedorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendedorFindFirstArgs>(args?: SelectSubset<T, VendedorFindFirstArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vendedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindFirstOrThrowArgs} args - Arguments to find a Vendedor
     * @example
     * // Get one Vendedor
     * const vendedor = await prisma.vendedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendedorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendedors
     * const vendedors = await prisma.vendedor.findMany()
     * 
     * // Get first 10 Vendedors
     * const vendedors = await prisma.vendedor.findMany({ take: 10 })
     * 
     * // Only select the `CPF`
     * const vendedorWithCPFOnly = await prisma.vendedor.findMany({ select: { CPF: true } })
     * 
     */
    findMany<T extends VendedorFindManyArgs>(args?: SelectSubset<T, VendedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vendedor.
     * @param {VendedorCreateArgs} args - Arguments to create a Vendedor.
     * @example
     * // Create one Vendedor
     * const Vendedor = await prisma.vendedor.create({
     *   data: {
     *     // ... data to create a Vendedor
     *   }
     * })
     * 
     */
    create<T extends VendedorCreateArgs>(args: SelectSubset<T, VendedorCreateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendedors.
     * @param {VendedorCreateManyArgs} args - Arguments to create many Vendedors.
     * @example
     * // Create many Vendedors
     * const vendedor = await prisma.vendedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendedorCreateManyArgs>(args?: SelectSubset<T, VendedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendedor.
     * @param {VendedorDeleteArgs} args - Arguments to delete one Vendedor.
     * @example
     * // Delete one Vendedor
     * const Vendedor = await prisma.vendedor.delete({
     *   where: {
     *     // ... filter to delete one Vendedor
     *   }
     * })
     * 
     */
    delete<T extends VendedorDeleteArgs>(args: SelectSubset<T, VendedorDeleteArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vendedor.
     * @param {VendedorUpdateArgs} args - Arguments to update one Vendedor.
     * @example
     * // Update one Vendedor
     * const vendedor = await prisma.vendedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendedorUpdateArgs>(args: SelectSubset<T, VendedorUpdateArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendedors.
     * @param {VendedorDeleteManyArgs} args - Arguments to filter Vendedors to delete.
     * @example
     * // Delete a few Vendedors
     * const { count } = await prisma.vendedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendedorDeleteManyArgs>(args?: SelectSubset<T, VendedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendedors
     * const vendedor = await prisma.vendedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendedorUpdateManyArgs>(args: SelectSubset<T, VendedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendedor.
     * @param {VendedorUpsertArgs} args - Arguments to update or create a Vendedor.
     * @example
     * // Update or create a Vendedor
     * const vendedor = await prisma.vendedor.upsert({
     *   create: {
     *     // ... data to create a Vendedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendedor we want to update
     *   }
     * })
     */
    upsert<T extends VendedorUpsertArgs>(args: SelectSubset<T, VendedorUpsertArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorCountArgs} args - Arguments to filter Vendedors to count.
     * @example
     * // Count the number of Vendedors
     * const count = await prisma.vendedor.count({
     *   where: {
     *     // ... the filter for the Vendedors we want to count
     *   }
     * })
    **/
    count<T extends VendedorCountArgs>(
      args?: Subset<T, VendedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendedorAggregateArgs>(args: Subset<T, VendedorAggregateArgs>): Prisma.PrismaPromise<GetVendedorAggregateType<T>>

    /**
     * Group by Vendedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendedorGroupByArgs} args - Group by arguments.
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
      T extends VendedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendedorGroupByArgs['orderBy'] }
        : { orderBy?: VendedorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendedor model
   */
  readonly fields: VendedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Vendedor$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Vendedor$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vendedor model
   */
  interface VendedorFieldRefs {
    readonly CPF: FieldRef<"Vendedor", 'String'>
    readonly RG: FieldRef<"Vendedor", 'String'>
    readonly NOME: FieldRef<"Vendedor", 'String'>
    readonly ENDERECO: FieldRef<"Vendedor", 'String'>
    readonly BAIRRO: FieldRef<"Vendedor", 'String'>
    readonly CIDADE: FieldRef<"Vendedor", 'String'>
    readonly ESTADO: FieldRef<"Vendedor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendedor findUnique
   */
  export type VendedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findUniqueOrThrow
   */
  export type VendedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor findFirst
   */
  export type VendedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findFirstOrThrow
   */
  export type VendedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedor to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendedors.
     */
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor findMany
   */
  export type VendedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter, which Vendedors to fetch.
     */
    where?: VendedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendedors to fetch.
     */
    orderBy?: VendedorOrderByWithRelationInput | VendedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendedors.
     */
    cursor?: VendedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendedors.
     */
    skip?: number
    distinct?: VendedorScalarFieldEnum | VendedorScalarFieldEnum[]
  }

  /**
   * Vendedor create
   */
  export type VendedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendedor.
     */
    data: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
  }

  /**
   * Vendedor createMany
   */
  export type VendedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendedors.
     */
    data: VendedorCreateManyInput | VendedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendedor update
   */
  export type VendedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendedor.
     */
    data: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
    /**
     * Choose, which Vendedor to update.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor updateMany
   */
  export type VendedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendedors.
     */
    data: XOR<VendedorUpdateManyMutationInput, VendedorUncheckedUpdateManyInput>
    /**
     * Filter which Vendedors to update
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to update.
     */
    limit?: number
  }

  /**
   * Vendedor upsert
   */
  export type VendedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendedor to update in case it exists.
     */
    where: VendedorWhereUniqueInput
    /**
     * In case the Vendedor found by the `where` argument doesn't exist, create a new Vendedor with this data.
     */
    create: XOR<VendedorCreateInput, VendedorUncheckedCreateInput>
    /**
     * In case the Vendedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendedorUpdateInput, VendedorUncheckedUpdateInput>
  }

  /**
   * Vendedor delete
   */
  export type VendedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
    /**
     * Filter which Vendedor to delete.
     */
    where: VendedorWhereUniqueInput
  }

  /**
   * Vendedor deleteMany
   */
  export type VendedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendedors to delete
     */
    where?: VendedorWhereInput
    /**
     * Limit how many Vendedors to delete.
     */
    limit?: number
  }

  /**
   * Vendedor.vendas
   */
  export type Vendedor$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    cursor?: VendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Vendedor without action
   */
  export type VendedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendedor
     */
    select?: VendedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendedor
     */
    omit?: VendedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendedorInclude<ExtArgs> | null
  }


  /**
   * Model Comprador
   */

  export type AggregateComprador = {
    _count: CompradorCountAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  export type CompradorMinAggregateOutputType = {
    CPFCOMPR: string | null
    RG: string | null
    NOME: string | null
    ENDERECO: string | null
    CIDADE: string | null
    BAIRRO: string | null
    UF: string | null
    CEP: string | null
  }

  export type CompradorMaxAggregateOutputType = {
    CPFCOMPR: string | null
    RG: string | null
    NOME: string | null
    ENDERECO: string | null
    CIDADE: string | null
    BAIRRO: string | null
    UF: string | null
    CEP: string | null
  }

  export type CompradorCountAggregateOutputType = {
    CPFCOMPR: number
    RG: number
    NOME: number
    ENDERECO: number
    CIDADE: number
    BAIRRO: number
    UF: number
    CEP: number
    _all: number
  }


  export type CompradorMinAggregateInputType = {
    CPFCOMPR?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    CIDADE?: true
    BAIRRO?: true
    UF?: true
    CEP?: true
  }

  export type CompradorMaxAggregateInputType = {
    CPFCOMPR?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    CIDADE?: true
    BAIRRO?: true
    UF?: true
    CEP?: true
  }

  export type CompradorCountAggregateInputType = {
    CPFCOMPR?: true
    RG?: true
    NOME?: true
    ENDERECO?: true
    CIDADE?: true
    BAIRRO?: true
    UF?: true
    CEP?: true
    _all?: true
  }

  export type CompradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comprador to aggregate.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compradors
    **/
    _count?: true | CompradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompradorMaxAggregateInputType
  }

  export type GetCompradorAggregateType<T extends CompradorAggregateArgs> = {
        [P in keyof T & keyof AggregateComprador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComprador[P]>
      : GetScalarType<T[P], AggregateComprador[P]>
  }




  export type CompradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompradorWhereInput
    orderBy?: CompradorOrderByWithAggregationInput | CompradorOrderByWithAggregationInput[]
    by: CompradorScalarFieldEnum[] | CompradorScalarFieldEnum
    having?: CompradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompradorCountAggregateInputType | true
    _min?: CompradorMinAggregateInputType
    _max?: CompradorMaxAggregateInputType
  }

  export type CompradorGroupByOutputType = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
    _count: CompradorCountAggregateOutputType | null
    _min: CompradorMinAggregateOutputType | null
    _max: CompradorMaxAggregateOutputType | null
  }

  type GetCompradorGroupByPayload<T extends CompradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompradorGroupByOutputType[P]>
            : GetScalarType<T[P], CompradorGroupByOutputType[P]>
        }
      >
    >


  export type CompradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CPFCOMPR?: boolean
    RG?: boolean
    NOME?: boolean
    ENDERECO?: boolean
    CIDADE?: boolean
    BAIRRO?: boolean
    UF?: boolean
    CEP?: boolean
    vendas?: boolean | Comprador$vendasArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comprador"]>



  export type CompradorSelectScalar = {
    CPFCOMPR?: boolean
    RG?: boolean
    NOME?: boolean
    ENDERECO?: boolean
    CIDADE?: boolean
    BAIRRO?: boolean
    UF?: boolean
    CEP?: boolean
  }

  export type CompradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CPFCOMPR" | "RG" | "NOME" | "ENDERECO" | "CIDADE" | "BAIRRO" | "UF" | "CEP", ExtArgs["result"]["comprador"]>
  export type CompradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendas?: boolean | Comprador$vendasArgs<ExtArgs>
    _count?: boolean | CompradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comprador"
    objects: {
      vendas: Prisma.$VendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      CPFCOMPR: string
      RG: string
      NOME: string
      ENDERECO: string
      CIDADE: string
      BAIRRO: string
      UF: string
      CEP: string
    }, ExtArgs["result"]["comprador"]>
    composites: {}
  }

  type CompradorGetPayload<S extends boolean | null | undefined | CompradorDefaultArgs> = $Result.GetResult<Prisma.$CompradorPayload, S>

  type CompradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompradorCountAggregateInputType | true
    }

  export interface CompradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comprador'], meta: { name: 'Comprador' } }
    /**
     * Find zero or one Comprador that matches the filter.
     * @param {CompradorFindUniqueArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompradorFindUniqueArgs>(args: SelectSubset<T, CompradorFindUniqueArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comprador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompradorFindUniqueOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompradorFindUniqueOrThrowArgs>(args: SelectSubset<T, CompradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindFirstArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompradorFindFirstArgs>(args?: SelectSubset<T, CompradorFindFirstArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comprador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindFirstOrThrowArgs} args - Arguments to find a Comprador
     * @example
     * // Get one Comprador
     * const comprador = await prisma.comprador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompradorFindFirstOrThrowArgs>(args?: SelectSubset<T, CompradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compradors
     * const compradors = await prisma.comprador.findMany()
     * 
     * // Get first 10 Compradors
     * const compradors = await prisma.comprador.findMany({ take: 10 })
     * 
     * // Only select the `CPFCOMPR`
     * const compradorWithCPFCOMPROnly = await prisma.comprador.findMany({ select: { CPFCOMPR: true } })
     * 
     */
    findMany<T extends CompradorFindManyArgs>(args?: SelectSubset<T, CompradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comprador.
     * @param {CompradorCreateArgs} args - Arguments to create a Comprador.
     * @example
     * // Create one Comprador
     * const Comprador = await prisma.comprador.create({
     *   data: {
     *     // ... data to create a Comprador
     *   }
     * })
     * 
     */
    create<T extends CompradorCreateArgs>(args: SelectSubset<T, CompradorCreateArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compradors.
     * @param {CompradorCreateManyArgs} args - Arguments to create many Compradors.
     * @example
     * // Create many Compradors
     * const comprador = await prisma.comprador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompradorCreateManyArgs>(args?: SelectSubset<T, CompradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comprador.
     * @param {CompradorDeleteArgs} args - Arguments to delete one Comprador.
     * @example
     * // Delete one Comprador
     * const Comprador = await prisma.comprador.delete({
     *   where: {
     *     // ... filter to delete one Comprador
     *   }
     * })
     * 
     */
    delete<T extends CompradorDeleteArgs>(args: SelectSubset<T, CompradorDeleteArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comprador.
     * @param {CompradorUpdateArgs} args - Arguments to update one Comprador.
     * @example
     * // Update one Comprador
     * const comprador = await prisma.comprador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompradorUpdateArgs>(args: SelectSubset<T, CompradorUpdateArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compradors.
     * @param {CompradorDeleteManyArgs} args - Arguments to filter Compradors to delete.
     * @example
     * // Delete a few Compradors
     * const { count } = await prisma.comprador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompradorDeleteManyArgs>(args?: SelectSubset<T, CompradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compradors
     * const comprador = await prisma.comprador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompradorUpdateManyArgs>(args: SelectSubset<T, CompradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comprador.
     * @param {CompradorUpsertArgs} args - Arguments to update or create a Comprador.
     * @example
     * // Update or create a Comprador
     * const comprador = await prisma.comprador.upsert({
     *   create: {
     *     // ... data to create a Comprador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comprador we want to update
     *   }
     * })
     */
    upsert<T extends CompradorUpsertArgs>(args: SelectSubset<T, CompradorUpsertArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorCountArgs} args - Arguments to filter Compradors to count.
     * @example
     * // Count the number of Compradors
     * const count = await prisma.comprador.count({
     *   where: {
     *     // ... the filter for the Compradors we want to count
     *   }
     * })
    **/
    count<T extends CompradorCountArgs>(
      args?: Subset<T, CompradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompradorAggregateArgs>(args: Subset<T, CompradorAggregateArgs>): Prisma.PrismaPromise<GetCompradorAggregateType<T>>

    /**
     * Group by Comprador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompradorGroupByArgs} args - Group by arguments.
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
      T extends CompradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompradorGroupByArgs['orderBy'] }
        : { orderBy?: CompradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comprador model
   */
  readonly fields: CompradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comprador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendas<T extends Comprador$vendasArgs<ExtArgs> = {}>(args?: Subset<T, Comprador$vendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comprador model
   */
  interface CompradorFieldRefs {
    readonly CPFCOMPR: FieldRef<"Comprador", 'String'>
    readonly RG: FieldRef<"Comprador", 'String'>
    readonly NOME: FieldRef<"Comprador", 'String'>
    readonly ENDERECO: FieldRef<"Comprador", 'String'>
    readonly CIDADE: FieldRef<"Comprador", 'String'>
    readonly BAIRRO: FieldRef<"Comprador", 'String'>
    readonly UF: FieldRef<"Comprador", 'String'>
    readonly CEP: FieldRef<"Comprador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comprador findUnique
   */
  export type CompradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador findUniqueOrThrow
   */
  export type CompradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador findFirst
   */
  export type CompradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador findFirstOrThrow
   */
  export type CompradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Comprador to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compradors.
     */
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador findMany
   */
  export type CompradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter, which Compradors to fetch.
     */
    where?: CompradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compradors to fetch.
     */
    orderBy?: CompradorOrderByWithRelationInput | CompradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compradors.
     */
    cursor?: CompradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compradors.
     */
    skip?: number
    distinct?: CompradorScalarFieldEnum | CompradorScalarFieldEnum[]
  }

  /**
   * Comprador create
   */
  export type CompradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Comprador.
     */
    data: XOR<CompradorCreateInput, CompradorUncheckedCreateInput>
  }

  /**
   * Comprador createMany
   */
  export type CompradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compradors.
     */
    data: CompradorCreateManyInput | CompradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comprador update
   */
  export type CompradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Comprador.
     */
    data: XOR<CompradorUpdateInput, CompradorUncheckedUpdateInput>
    /**
     * Choose, which Comprador to update.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador updateMany
   */
  export type CompradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compradors.
     */
    data: XOR<CompradorUpdateManyMutationInput, CompradorUncheckedUpdateManyInput>
    /**
     * Filter which Compradors to update
     */
    where?: CompradorWhereInput
    /**
     * Limit how many Compradors to update.
     */
    limit?: number
  }

  /**
   * Comprador upsert
   */
  export type CompradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Comprador to update in case it exists.
     */
    where: CompradorWhereUniqueInput
    /**
     * In case the Comprador found by the `where` argument doesn't exist, create a new Comprador with this data.
     */
    create: XOR<CompradorCreateInput, CompradorUncheckedCreateInput>
    /**
     * In case the Comprador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompradorUpdateInput, CompradorUncheckedUpdateInput>
  }

  /**
   * Comprador delete
   */
  export type CompradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
    /**
     * Filter which Comprador to delete.
     */
    where: CompradorWhereUniqueInput
  }

  /**
   * Comprador deleteMany
   */
  export type CompradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compradors to delete
     */
    where?: CompradorWhereInput
    /**
     * Limit how many Compradors to delete.
     */
    limit?: number
  }

  /**
   * Comprador.vendas
   */
  export type Comprador$vendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    cursor?: VendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Comprador without action
   */
  export type CompradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comprador
     */
    select?: CompradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comprador
     */
    omit?: CompradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompradorInclude<ExtArgs> | null
  }


  /**
   * Model Venda
   */

  export type AggregateVenda = {
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  export type VendaAvgAggregateOutputType = {
    NUMVENDA: number | null
  }

  export type VendaSumAggregateOutputType = {
    NUMVENDA: number | null
  }

  export type VendaMinAggregateOutputType = {
    NUMVENDA: number | null
    DATAVENDA: Date | null
    HORAVENDA: Date | null
    CPFVENDEDOR: string | null
    HORASAIDA: Date | null
    DATASAIDA: Date | null
    comprador_CPFCOMPR: string | null
  }

  export type VendaMaxAggregateOutputType = {
    NUMVENDA: number | null
    DATAVENDA: Date | null
    HORAVENDA: Date | null
    CPFVENDEDOR: string | null
    HORASAIDA: Date | null
    DATASAIDA: Date | null
    comprador_CPFCOMPR: string | null
  }

  export type VendaCountAggregateOutputType = {
    NUMVENDA: number
    DATAVENDA: number
    HORAVENDA: number
    CPFVENDEDOR: number
    HORASAIDA: number
    DATASAIDA: number
    comprador_CPFCOMPR: number
    _all: number
  }


  export type VendaAvgAggregateInputType = {
    NUMVENDA?: true
  }

  export type VendaSumAggregateInputType = {
    NUMVENDA?: true
  }

  export type VendaMinAggregateInputType = {
    NUMVENDA?: true
    DATAVENDA?: true
    HORAVENDA?: true
    CPFVENDEDOR?: true
    HORASAIDA?: true
    DATASAIDA?: true
    comprador_CPFCOMPR?: true
  }

  export type VendaMaxAggregateInputType = {
    NUMVENDA?: true
    DATAVENDA?: true
    HORAVENDA?: true
    CPFVENDEDOR?: true
    HORASAIDA?: true
    DATASAIDA?: true
    comprador_CPFCOMPR?: true
  }

  export type VendaCountAggregateInputType = {
    NUMVENDA?: true
    DATAVENDA?: true
    HORAVENDA?: true
    CPFVENDEDOR?: true
    HORASAIDA?: true
    DATASAIDA?: true
    comprador_CPFCOMPR?: true
    _all?: true
  }

  export type VendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venda to aggregate.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendas
    **/
    _count?: true | VendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendaMaxAggregateInputType
  }

  export type GetVendaAggregateType<T extends VendaAggregateArgs> = {
        [P in keyof T & keyof AggregateVenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenda[P]>
      : GetScalarType<T[P], AggregateVenda[P]>
  }




  export type VendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendaWhereInput
    orderBy?: VendaOrderByWithAggregationInput | VendaOrderByWithAggregationInput[]
    by: VendaScalarFieldEnum[] | VendaScalarFieldEnum
    having?: VendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendaCountAggregateInputType | true
    _avg?: VendaAvgAggregateInputType
    _sum?: VendaSumAggregateInputType
    _min?: VendaMinAggregateInputType
    _max?: VendaMaxAggregateInputType
  }

  export type VendaGroupByOutputType = {
    NUMVENDA: number
    DATAVENDA: Date
    HORAVENDA: Date
    CPFVENDEDOR: string
    HORASAIDA: Date | null
    DATASAIDA: Date | null
    comprador_CPFCOMPR: string
    _count: VendaCountAggregateOutputType | null
    _avg: VendaAvgAggregateOutputType | null
    _sum: VendaSumAggregateOutputType | null
    _min: VendaMinAggregateOutputType | null
    _max: VendaMaxAggregateOutputType | null
  }

  type GetVendaGroupByPayload<T extends VendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendaGroupByOutputType[P]>
            : GetScalarType<T[P], VendaGroupByOutputType[P]>
        }
      >
    >


  export type VendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NUMVENDA?: boolean
    DATAVENDA?: boolean
    HORAVENDA?: boolean
    CPFVENDEDOR?: boolean
    HORASAIDA?: boolean
    DATASAIDA?: boolean
    comprador_CPFCOMPR?: boolean
    vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
    comprador?: boolean | CompradorDefaultArgs<ExtArgs>
    carrosVendidos?: boolean | Venda$carrosVendidosArgs<ExtArgs>
    _count?: boolean | VendaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venda"]>



  export type VendaSelectScalar = {
    NUMVENDA?: boolean
    DATAVENDA?: boolean
    HORAVENDA?: boolean
    CPFVENDEDOR?: boolean
    HORASAIDA?: boolean
    DATASAIDA?: boolean
    comprador_CPFCOMPR?: boolean
  }

  export type VendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NUMVENDA" | "DATAVENDA" | "HORAVENDA" | "CPFVENDEDOR" | "HORASAIDA" | "DATASAIDA" | "comprador_CPFCOMPR", ExtArgs["result"]["venda"]>
  export type VendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendedor?: boolean | VendedorDefaultArgs<ExtArgs>
    comprador?: boolean | CompradorDefaultArgs<ExtArgs>
    carrosVendidos?: boolean | Venda$carrosVendidosArgs<ExtArgs>
    _count?: boolean | VendaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venda"
    objects: {
      vendedor: Prisma.$VendedorPayload<ExtArgs>
      comprador: Prisma.$CompradorPayload<ExtArgs>
      carrosVendidos: Prisma.$CarrosVendidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      NUMVENDA: number
      DATAVENDA: Date
      HORAVENDA: Date
      CPFVENDEDOR: string
      HORASAIDA: Date | null
      DATASAIDA: Date | null
      comprador_CPFCOMPR: string
    }, ExtArgs["result"]["venda"]>
    composites: {}
  }

  type VendaGetPayload<S extends boolean | null | undefined | VendaDefaultArgs> = $Result.GetResult<Prisma.$VendaPayload, S>

  type VendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendaCountAggregateInputType | true
    }

  export interface VendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venda'], meta: { name: 'Venda' } }
    /**
     * Find zero or one Venda that matches the filter.
     * @param {VendaFindUniqueArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendaFindUniqueArgs>(args: SelectSubset<T, VendaFindUniqueArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendaFindUniqueOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendaFindUniqueOrThrowArgs>(args: SelectSubset<T, VendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendaFindFirstArgs>(args?: SelectSubset<T, VendaFindFirstArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindFirstOrThrowArgs} args - Arguments to find a Venda
     * @example
     * // Get one Venda
     * const venda = await prisma.venda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendaFindFirstOrThrowArgs>(args?: SelectSubset<T, VendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vendas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendas
     * const vendas = await prisma.venda.findMany()
     * 
     * // Get first 10 Vendas
     * const vendas = await prisma.venda.findMany({ take: 10 })
     * 
     * // Only select the `NUMVENDA`
     * const vendaWithNUMVENDAOnly = await prisma.venda.findMany({ select: { NUMVENDA: true } })
     * 
     */
    findMany<T extends VendaFindManyArgs>(args?: SelectSubset<T, VendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venda.
     * @param {VendaCreateArgs} args - Arguments to create a Venda.
     * @example
     * // Create one Venda
     * const Venda = await prisma.venda.create({
     *   data: {
     *     // ... data to create a Venda
     *   }
     * })
     * 
     */
    create<T extends VendaCreateArgs>(args: SelectSubset<T, VendaCreateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vendas.
     * @param {VendaCreateManyArgs} args - Arguments to create many Vendas.
     * @example
     * // Create many Vendas
     * const venda = await prisma.venda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendaCreateManyArgs>(args?: SelectSubset<T, VendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Venda.
     * @param {VendaDeleteArgs} args - Arguments to delete one Venda.
     * @example
     * // Delete one Venda
     * const Venda = await prisma.venda.delete({
     *   where: {
     *     // ... filter to delete one Venda
     *   }
     * })
     * 
     */
    delete<T extends VendaDeleteArgs>(args: SelectSubset<T, VendaDeleteArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venda.
     * @param {VendaUpdateArgs} args - Arguments to update one Venda.
     * @example
     * // Update one Venda
     * const venda = await prisma.venda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendaUpdateArgs>(args: SelectSubset<T, VendaUpdateArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vendas.
     * @param {VendaDeleteManyArgs} args - Arguments to filter Vendas to delete.
     * @example
     * // Delete a few Vendas
     * const { count } = await prisma.venda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendaDeleteManyArgs>(args?: SelectSubset<T, VendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendas
     * const venda = await prisma.venda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendaUpdateManyArgs>(args: SelectSubset<T, VendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Venda.
     * @param {VendaUpsertArgs} args - Arguments to update or create a Venda.
     * @example
     * // Update or create a Venda
     * const venda = await prisma.venda.upsert({
     *   create: {
     *     // ... data to create a Venda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venda we want to update
     *   }
     * })
     */
    upsert<T extends VendaUpsertArgs>(args: SelectSubset<T, VendaUpsertArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vendas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaCountArgs} args - Arguments to filter Vendas to count.
     * @example
     * // Count the number of Vendas
     * const count = await prisma.venda.count({
     *   where: {
     *     // ... the filter for the Vendas we want to count
     *   }
     * })
    **/
    count<T extends VendaCountArgs>(
      args?: Subset<T, VendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VendaAggregateArgs>(args: Subset<T, VendaAggregateArgs>): Prisma.PrismaPromise<GetVendaAggregateType<T>>

    /**
     * Group by Venda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendaGroupByArgs} args - Group by arguments.
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
      T extends VendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendaGroupByArgs['orderBy'] }
        : { orderBy?: VendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venda model
   */
  readonly fields: VendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendedor<T extends VendedorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendedorDefaultArgs<ExtArgs>>): Prisma__VendedorClient<$Result.GetResult<Prisma.$VendedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comprador<T extends CompradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompradorDefaultArgs<ExtArgs>>): Prisma__CompradorClient<$Result.GetResult<Prisma.$CompradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrosVendidos<T extends Venda$carrosVendidosArgs<ExtArgs> = {}>(args?: Subset<T, Venda$carrosVendidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Venda model
   */
  interface VendaFieldRefs {
    readonly NUMVENDA: FieldRef<"Venda", 'Int'>
    readonly DATAVENDA: FieldRef<"Venda", 'DateTime'>
    readonly HORAVENDA: FieldRef<"Venda", 'DateTime'>
    readonly CPFVENDEDOR: FieldRef<"Venda", 'String'>
    readonly HORASAIDA: FieldRef<"Venda", 'DateTime'>
    readonly DATASAIDA: FieldRef<"Venda", 'DateTime'>
    readonly comprador_CPFCOMPR: FieldRef<"Venda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Venda findUnique
   */
  export type VendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findUniqueOrThrow
   */
  export type VendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda findFirst
   */
  export type VendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findFirstOrThrow
   */
  export type VendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Venda to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendas.
     */
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda findMany
   */
  export type VendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter, which Vendas to fetch.
     */
    where?: VendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendas to fetch.
     */
    orderBy?: VendaOrderByWithRelationInput | VendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendas.
     */
    cursor?: VendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendas.
     */
    skip?: number
    distinct?: VendaScalarFieldEnum | VendaScalarFieldEnum[]
  }

  /**
   * Venda create
   */
  export type VendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Venda.
     */
    data: XOR<VendaCreateInput, VendaUncheckedCreateInput>
  }

  /**
   * Venda createMany
   */
  export type VendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendas.
     */
    data: VendaCreateManyInput | VendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venda update
   */
  export type VendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Venda.
     */
    data: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
    /**
     * Choose, which Venda to update.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda updateMany
   */
  export type VendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendas.
     */
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyInput>
    /**
     * Filter which Vendas to update
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to update.
     */
    limit?: number
  }

  /**
   * Venda upsert
   */
  export type VendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Venda to update in case it exists.
     */
    where: VendaWhereUniqueInput
    /**
     * In case the Venda found by the `where` argument doesn't exist, create a new Venda with this data.
     */
    create: XOR<VendaCreateInput, VendaUncheckedCreateInput>
    /**
     * In case the Venda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendaUpdateInput, VendaUncheckedUpdateInput>
  }

  /**
   * Venda delete
   */
  export type VendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
    /**
     * Filter which Venda to delete.
     */
    where: VendaWhereUniqueInput
  }

  /**
   * Venda deleteMany
   */
  export type VendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendas to delete
     */
    where?: VendaWhereInput
    /**
     * Limit how many Vendas to delete.
     */
    limit?: number
  }

  /**
   * Venda.carrosVendidos
   */
  export type Venda$carrosVendidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    where?: CarrosVendidosWhereInput
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    cursor?: CarrosVendidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrosVendidosScalarFieldEnum | CarrosVendidosScalarFieldEnum[]
  }

  /**
   * Venda without action
   */
  export type VendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venda
     */
    select?: VendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venda
     */
    omit?: VendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendaInclude<ExtArgs> | null
  }


  /**
   * Model CarrosVendidos
   */

  export type AggregateCarrosVendidos = {
    _count: CarrosVendidosCountAggregateOutputType | null
    _avg: CarrosVendidosAvgAggregateOutputType | null
    _sum: CarrosVendidosSumAggregateOutputType | null
    _min: CarrosVendidosMinAggregateOutputType | null
    _max: CarrosVendidosMaxAggregateOutputType | null
  }

  export type CarrosVendidosAvgAggregateOutputType = {
    NUMVENDA: number | null
    KMVENDA: number | null
  }

  export type CarrosVendidosSumAggregateOutputType = {
    NUMVENDA: number | null
    KMVENDA: number | null
  }

  export type CarrosVendidosMinAggregateOutputType = {
    NUMVENDA: number | null
    PLACAS: string | null
    KMVENDA: number | null
    TIPOVENDA: string | null
  }

  export type CarrosVendidosMaxAggregateOutputType = {
    NUMVENDA: number | null
    PLACAS: string | null
    KMVENDA: number | null
    TIPOVENDA: string | null
  }

  export type CarrosVendidosCountAggregateOutputType = {
    NUMVENDA: number
    PLACAS: number
    KMVENDA: number
    TIPOVENDA: number
    _all: number
  }


  export type CarrosVendidosAvgAggregateInputType = {
    NUMVENDA?: true
    KMVENDA?: true
  }

  export type CarrosVendidosSumAggregateInputType = {
    NUMVENDA?: true
    KMVENDA?: true
  }

  export type CarrosVendidosMinAggregateInputType = {
    NUMVENDA?: true
    PLACAS?: true
    KMVENDA?: true
    TIPOVENDA?: true
  }

  export type CarrosVendidosMaxAggregateInputType = {
    NUMVENDA?: true
    PLACAS?: true
    KMVENDA?: true
    TIPOVENDA?: true
  }

  export type CarrosVendidosCountAggregateInputType = {
    NUMVENDA?: true
    PLACAS?: true
    KMVENDA?: true
    TIPOVENDA?: true
    _all?: true
  }

  export type CarrosVendidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarrosVendidos to aggregate.
     */
    where?: CarrosVendidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrosVendidos to fetch.
     */
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrosVendidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrosVendidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrosVendidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarrosVendidos
    **/
    _count?: true | CarrosVendidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrosVendidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrosVendidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrosVendidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrosVendidosMaxAggregateInputType
  }

  export type GetCarrosVendidosAggregateType<T extends CarrosVendidosAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrosVendidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrosVendidos[P]>
      : GetScalarType<T[P], AggregateCarrosVendidos[P]>
  }




  export type CarrosVendidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrosVendidosWhereInput
    orderBy?: CarrosVendidosOrderByWithAggregationInput | CarrosVendidosOrderByWithAggregationInput[]
    by: CarrosVendidosScalarFieldEnum[] | CarrosVendidosScalarFieldEnum
    having?: CarrosVendidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrosVendidosCountAggregateInputType | true
    _avg?: CarrosVendidosAvgAggregateInputType
    _sum?: CarrosVendidosSumAggregateInputType
    _min?: CarrosVendidosMinAggregateInputType
    _max?: CarrosVendidosMaxAggregateInputType
  }

  export type CarrosVendidosGroupByOutputType = {
    NUMVENDA: number
    PLACAS: string
    KMVENDA: number
    TIPOVENDA: string
    _count: CarrosVendidosCountAggregateOutputType | null
    _avg: CarrosVendidosAvgAggregateOutputType | null
    _sum: CarrosVendidosSumAggregateOutputType | null
    _min: CarrosVendidosMinAggregateOutputType | null
    _max: CarrosVendidosMaxAggregateOutputType | null
  }

  type GetCarrosVendidosGroupByPayload<T extends CarrosVendidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrosVendidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrosVendidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrosVendidosGroupByOutputType[P]>
            : GetScalarType<T[P], CarrosVendidosGroupByOutputType[P]>
        }
      >
    >


  export type CarrosVendidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NUMVENDA?: boolean
    PLACAS?: boolean
    KMVENDA?: boolean
    TIPOVENDA?: boolean
    venda?: boolean | VendaDefaultArgs<ExtArgs>
    automovel?: boolean | AutomovelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrosVendidos"]>



  export type CarrosVendidosSelectScalar = {
    NUMVENDA?: boolean
    PLACAS?: boolean
    KMVENDA?: boolean
    TIPOVENDA?: boolean
  }

  export type CarrosVendidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NUMVENDA" | "PLACAS" | "KMVENDA" | "TIPOVENDA", ExtArgs["result"]["carrosVendidos"]>
  export type CarrosVendidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venda?: boolean | VendaDefaultArgs<ExtArgs>
    automovel?: boolean | AutomovelDefaultArgs<ExtArgs>
  }

  export type $CarrosVendidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarrosVendidos"
    objects: {
      venda: Prisma.$VendaPayload<ExtArgs>
      automovel: Prisma.$AutomovelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      NUMVENDA: number
      PLACAS: string
      KMVENDA: number
      TIPOVENDA: string
    }, ExtArgs["result"]["carrosVendidos"]>
    composites: {}
  }

  type CarrosVendidosGetPayload<S extends boolean | null | undefined | CarrosVendidosDefaultArgs> = $Result.GetResult<Prisma.$CarrosVendidosPayload, S>

  type CarrosVendidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarrosVendidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrosVendidosCountAggregateInputType | true
    }

  export interface CarrosVendidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarrosVendidos'], meta: { name: 'CarrosVendidos' } }
    /**
     * Find zero or one CarrosVendidos that matches the filter.
     * @param {CarrosVendidosFindUniqueArgs} args - Arguments to find a CarrosVendidos
     * @example
     * // Get one CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarrosVendidosFindUniqueArgs>(args: SelectSubset<T, CarrosVendidosFindUniqueArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarrosVendidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarrosVendidosFindUniqueOrThrowArgs} args - Arguments to find a CarrosVendidos
     * @example
     * // Get one CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarrosVendidosFindUniqueOrThrowArgs>(args: SelectSubset<T, CarrosVendidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarrosVendidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosFindFirstArgs} args - Arguments to find a CarrosVendidos
     * @example
     * // Get one CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarrosVendidosFindFirstArgs>(args?: SelectSubset<T, CarrosVendidosFindFirstArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarrosVendidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosFindFirstOrThrowArgs} args - Arguments to find a CarrosVendidos
     * @example
     * // Get one CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarrosVendidosFindFirstOrThrowArgs>(args?: SelectSubset<T, CarrosVendidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarrosVendidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findMany()
     * 
     * // Get first 10 CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.findMany({ take: 10 })
     * 
     * // Only select the `NUMVENDA`
     * const carrosVendidosWithNUMVENDAOnly = await prisma.carrosVendidos.findMany({ select: { NUMVENDA: true } })
     * 
     */
    findMany<T extends CarrosVendidosFindManyArgs>(args?: SelectSubset<T, CarrosVendidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarrosVendidos.
     * @param {CarrosVendidosCreateArgs} args - Arguments to create a CarrosVendidos.
     * @example
     * // Create one CarrosVendidos
     * const CarrosVendidos = await prisma.carrosVendidos.create({
     *   data: {
     *     // ... data to create a CarrosVendidos
     *   }
     * })
     * 
     */
    create<T extends CarrosVendidosCreateArgs>(args: SelectSubset<T, CarrosVendidosCreateArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarrosVendidos.
     * @param {CarrosVendidosCreateManyArgs} args - Arguments to create many CarrosVendidos.
     * @example
     * // Create many CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarrosVendidosCreateManyArgs>(args?: SelectSubset<T, CarrosVendidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CarrosVendidos.
     * @param {CarrosVendidosDeleteArgs} args - Arguments to delete one CarrosVendidos.
     * @example
     * // Delete one CarrosVendidos
     * const CarrosVendidos = await prisma.carrosVendidos.delete({
     *   where: {
     *     // ... filter to delete one CarrosVendidos
     *   }
     * })
     * 
     */
    delete<T extends CarrosVendidosDeleteArgs>(args: SelectSubset<T, CarrosVendidosDeleteArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarrosVendidos.
     * @param {CarrosVendidosUpdateArgs} args - Arguments to update one CarrosVendidos.
     * @example
     * // Update one CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarrosVendidosUpdateArgs>(args: SelectSubset<T, CarrosVendidosUpdateArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarrosVendidos.
     * @param {CarrosVendidosDeleteManyArgs} args - Arguments to filter CarrosVendidos to delete.
     * @example
     * // Delete a few CarrosVendidos
     * const { count } = await prisma.carrosVendidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarrosVendidosDeleteManyArgs>(args?: SelectSubset<T, CarrosVendidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarrosVendidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarrosVendidosUpdateManyArgs>(args: SelectSubset<T, CarrosVendidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CarrosVendidos.
     * @param {CarrosVendidosUpsertArgs} args - Arguments to update or create a CarrosVendidos.
     * @example
     * // Update or create a CarrosVendidos
     * const carrosVendidos = await prisma.carrosVendidos.upsert({
     *   create: {
     *     // ... data to create a CarrosVendidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarrosVendidos we want to update
     *   }
     * })
     */
    upsert<T extends CarrosVendidosUpsertArgs>(args: SelectSubset<T, CarrosVendidosUpsertArgs<ExtArgs>>): Prisma__CarrosVendidosClient<$Result.GetResult<Prisma.$CarrosVendidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarrosVendidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosCountArgs} args - Arguments to filter CarrosVendidos to count.
     * @example
     * // Count the number of CarrosVendidos
     * const count = await prisma.carrosVendidos.count({
     *   where: {
     *     // ... the filter for the CarrosVendidos we want to count
     *   }
     * })
    **/
    count<T extends CarrosVendidosCountArgs>(
      args?: Subset<T, CarrosVendidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrosVendidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarrosVendidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarrosVendidosAggregateArgs>(args: Subset<T, CarrosVendidosAggregateArgs>): Prisma.PrismaPromise<GetCarrosVendidosAggregateType<T>>

    /**
     * Group by CarrosVendidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrosVendidosGroupByArgs} args - Group by arguments.
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
      T extends CarrosVendidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrosVendidosGroupByArgs['orderBy'] }
        : { orderBy?: CarrosVendidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarrosVendidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrosVendidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarrosVendidos model
   */
  readonly fields: CarrosVendidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarrosVendidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrosVendidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venda<T extends VendaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendaDefaultArgs<ExtArgs>>): Prisma__VendaClient<$Result.GetResult<Prisma.$VendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    automovel<T extends AutomovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomovelDefaultArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CarrosVendidos model
   */
  interface CarrosVendidosFieldRefs {
    readonly NUMVENDA: FieldRef<"CarrosVendidos", 'Int'>
    readonly PLACAS: FieldRef<"CarrosVendidos", 'String'>
    readonly KMVENDA: FieldRef<"CarrosVendidos", 'Int'>
    readonly TIPOVENDA: FieldRef<"CarrosVendidos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CarrosVendidos findUnique
   */
  export type CarrosVendidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter, which CarrosVendidos to fetch.
     */
    where: CarrosVendidosWhereUniqueInput
  }

  /**
   * CarrosVendidos findUniqueOrThrow
   */
  export type CarrosVendidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter, which CarrosVendidos to fetch.
     */
    where: CarrosVendidosWhereUniqueInput
  }

  /**
   * CarrosVendidos findFirst
   */
  export type CarrosVendidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter, which CarrosVendidos to fetch.
     */
    where?: CarrosVendidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrosVendidos to fetch.
     */
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarrosVendidos.
     */
    cursor?: CarrosVendidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrosVendidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrosVendidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarrosVendidos.
     */
    distinct?: CarrosVendidosScalarFieldEnum | CarrosVendidosScalarFieldEnum[]
  }

  /**
   * CarrosVendidos findFirstOrThrow
   */
  export type CarrosVendidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter, which CarrosVendidos to fetch.
     */
    where?: CarrosVendidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrosVendidos to fetch.
     */
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarrosVendidos.
     */
    cursor?: CarrosVendidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrosVendidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrosVendidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarrosVendidos.
     */
    distinct?: CarrosVendidosScalarFieldEnum | CarrosVendidosScalarFieldEnum[]
  }

  /**
   * CarrosVendidos findMany
   */
  export type CarrosVendidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter, which CarrosVendidos to fetch.
     */
    where?: CarrosVendidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrosVendidos to fetch.
     */
    orderBy?: CarrosVendidosOrderByWithRelationInput | CarrosVendidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarrosVendidos.
     */
    cursor?: CarrosVendidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrosVendidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrosVendidos.
     */
    skip?: number
    distinct?: CarrosVendidosScalarFieldEnum | CarrosVendidosScalarFieldEnum[]
  }

  /**
   * CarrosVendidos create
   */
  export type CarrosVendidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * The data needed to create a CarrosVendidos.
     */
    data: XOR<CarrosVendidosCreateInput, CarrosVendidosUncheckedCreateInput>
  }

  /**
   * CarrosVendidos createMany
   */
  export type CarrosVendidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarrosVendidos.
     */
    data: CarrosVendidosCreateManyInput | CarrosVendidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarrosVendidos update
   */
  export type CarrosVendidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * The data needed to update a CarrosVendidos.
     */
    data: XOR<CarrosVendidosUpdateInput, CarrosVendidosUncheckedUpdateInput>
    /**
     * Choose, which CarrosVendidos to update.
     */
    where: CarrosVendidosWhereUniqueInput
  }

  /**
   * CarrosVendidos updateMany
   */
  export type CarrosVendidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarrosVendidos.
     */
    data: XOR<CarrosVendidosUpdateManyMutationInput, CarrosVendidosUncheckedUpdateManyInput>
    /**
     * Filter which CarrosVendidos to update
     */
    where?: CarrosVendidosWhereInput
    /**
     * Limit how many CarrosVendidos to update.
     */
    limit?: number
  }

  /**
   * CarrosVendidos upsert
   */
  export type CarrosVendidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * The filter to search for the CarrosVendidos to update in case it exists.
     */
    where: CarrosVendidosWhereUniqueInput
    /**
     * In case the CarrosVendidos found by the `where` argument doesn't exist, create a new CarrosVendidos with this data.
     */
    create: XOR<CarrosVendidosCreateInput, CarrosVendidosUncheckedCreateInput>
    /**
     * In case the CarrosVendidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrosVendidosUpdateInput, CarrosVendidosUncheckedUpdateInput>
  }

  /**
   * CarrosVendidos delete
   */
  export type CarrosVendidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
    /**
     * Filter which CarrosVendidos to delete.
     */
    where: CarrosVendidosWhereUniqueInput
  }

  /**
   * CarrosVendidos deleteMany
   */
  export type CarrosVendidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarrosVendidos to delete
     */
    where?: CarrosVendidosWhereInput
    /**
     * Limit how many CarrosVendidos to delete.
     */
    limit?: number
  }

  /**
   * CarrosVendidos without action
   */
  export type CarrosVendidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrosVendidos
     */
    select?: CarrosVendidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrosVendidos
     */
    omit?: CarrosVendidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrosVendidosInclude<ExtArgs> | null
  }


  /**
   * Model TiposGastos
   */

  export type AggregateTiposGastos = {
    _count: TiposGastosCountAggregateOutputType | null
    _avg: TiposGastosAvgAggregateOutputType | null
    _sum: TiposGastosSumAggregateOutputType | null
    _min: TiposGastosMinAggregateOutputType | null
    _max: TiposGastosMaxAggregateOutputType | null
  }

  export type TiposGastosAvgAggregateOutputType = {
    COD: number | null
  }

  export type TiposGastosSumAggregateOutputType = {
    COD: number | null
  }

  export type TiposGastosMinAggregateOutputType = {
    COD: number | null
    DESCRICAO: string | null
  }

  export type TiposGastosMaxAggregateOutputType = {
    COD: number | null
    DESCRICAO: string | null
  }

  export type TiposGastosCountAggregateOutputType = {
    COD: number
    DESCRICAO: number
    _all: number
  }


  export type TiposGastosAvgAggregateInputType = {
    COD?: true
  }

  export type TiposGastosSumAggregateInputType = {
    COD?: true
  }

  export type TiposGastosMinAggregateInputType = {
    COD?: true
    DESCRICAO?: true
  }

  export type TiposGastosMaxAggregateInputType = {
    COD?: true
    DESCRICAO?: true
  }

  export type TiposGastosCountAggregateInputType = {
    COD?: true
    DESCRICAO?: true
    _all?: true
  }

  export type TiposGastosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiposGastos to aggregate.
     */
    where?: TiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposGastos to fetch.
     */
    orderBy?: TiposGastosOrderByWithRelationInput | TiposGastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TiposGastos
    **/
    _count?: true | TiposGastosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiposGastosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiposGastosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiposGastosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiposGastosMaxAggregateInputType
  }

  export type GetTiposGastosAggregateType<T extends TiposGastosAggregateArgs> = {
        [P in keyof T & keyof AggregateTiposGastos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiposGastos[P]>
      : GetScalarType<T[P], AggregateTiposGastos[P]>
  }




  export type TiposGastosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiposGastosWhereInput
    orderBy?: TiposGastosOrderByWithAggregationInput | TiposGastosOrderByWithAggregationInput[]
    by: TiposGastosScalarFieldEnum[] | TiposGastosScalarFieldEnum
    having?: TiposGastosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiposGastosCountAggregateInputType | true
    _avg?: TiposGastosAvgAggregateInputType
    _sum?: TiposGastosSumAggregateInputType
    _min?: TiposGastosMinAggregateInputType
    _max?: TiposGastosMaxAggregateInputType
  }

  export type TiposGastosGroupByOutputType = {
    COD: number
    DESCRICAO: string
    _count: TiposGastosCountAggregateOutputType | null
    _avg: TiposGastosAvgAggregateOutputType | null
    _sum: TiposGastosSumAggregateOutputType | null
    _min: TiposGastosMinAggregateOutputType | null
    _max: TiposGastosMaxAggregateOutputType | null
  }

  type GetTiposGastosGroupByPayload<T extends TiposGastosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiposGastosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiposGastosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiposGastosGroupByOutputType[P]>
            : GetScalarType<T[P], TiposGastosGroupByOutputType[P]>
        }
      >
    >


  export type TiposGastosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    COD?: boolean
    DESCRICAO?: boolean
    gastosRealizados?: boolean | TiposGastos$gastosRealizadosArgs<ExtArgs>
    _count?: boolean | TiposGastosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiposGastos"]>



  export type TiposGastosSelectScalar = {
    COD?: boolean
    DESCRICAO?: boolean
  }

  export type TiposGastosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"COD" | "DESCRICAO", ExtArgs["result"]["tiposGastos"]>
  export type TiposGastosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gastosRealizados?: boolean | TiposGastos$gastosRealizadosArgs<ExtArgs>
    _count?: boolean | TiposGastosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TiposGastosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TiposGastos"
    objects: {
      gastosRealizados: Prisma.$GastosRealizadosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      COD: number
      DESCRICAO: string
    }, ExtArgs["result"]["tiposGastos"]>
    composites: {}
  }

  type TiposGastosGetPayload<S extends boolean | null | undefined | TiposGastosDefaultArgs> = $Result.GetResult<Prisma.$TiposGastosPayload, S>

  type TiposGastosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TiposGastosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TiposGastosCountAggregateInputType | true
    }

  export interface TiposGastosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TiposGastos'], meta: { name: 'TiposGastos' } }
    /**
     * Find zero or one TiposGastos that matches the filter.
     * @param {TiposGastosFindUniqueArgs} args - Arguments to find a TiposGastos
     * @example
     * // Get one TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiposGastosFindUniqueArgs>(args: SelectSubset<T, TiposGastosFindUniqueArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TiposGastos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TiposGastosFindUniqueOrThrowArgs} args - Arguments to find a TiposGastos
     * @example
     * // Get one TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiposGastosFindUniqueOrThrowArgs>(args: SelectSubset<T, TiposGastosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiposGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosFindFirstArgs} args - Arguments to find a TiposGastos
     * @example
     * // Get one TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiposGastosFindFirstArgs>(args?: SelectSubset<T, TiposGastosFindFirstArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TiposGastos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosFindFirstOrThrowArgs} args - Arguments to find a TiposGastos
     * @example
     * // Get one TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiposGastosFindFirstOrThrowArgs>(args?: SelectSubset<T, TiposGastosFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TiposGastos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findMany()
     * 
     * // Get first 10 TiposGastos
     * const tiposGastos = await prisma.tiposGastos.findMany({ take: 10 })
     * 
     * // Only select the `COD`
     * const tiposGastosWithCODOnly = await prisma.tiposGastos.findMany({ select: { COD: true } })
     * 
     */
    findMany<T extends TiposGastosFindManyArgs>(args?: SelectSubset<T, TiposGastosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TiposGastos.
     * @param {TiposGastosCreateArgs} args - Arguments to create a TiposGastos.
     * @example
     * // Create one TiposGastos
     * const TiposGastos = await prisma.tiposGastos.create({
     *   data: {
     *     // ... data to create a TiposGastos
     *   }
     * })
     * 
     */
    create<T extends TiposGastosCreateArgs>(args: SelectSubset<T, TiposGastosCreateArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TiposGastos.
     * @param {TiposGastosCreateManyArgs} args - Arguments to create many TiposGastos.
     * @example
     * // Create many TiposGastos
     * const tiposGastos = await prisma.tiposGastos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiposGastosCreateManyArgs>(args?: SelectSubset<T, TiposGastosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TiposGastos.
     * @param {TiposGastosDeleteArgs} args - Arguments to delete one TiposGastos.
     * @example
     * // Delete one TiposGastos
     * const TiposGastos = await prisma.tiposGastos.delete({
     *   where: {
     *     // ... filter to delete one TiposGastos
     *   }
     * })
     * 
     */
    delete<T extends TiposGastosDeleteArgs>(args: SelectSubset<T, TiposGastosDeleteArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TiposGastos.
     * @param {TiposGastosUpdateArgs} args - Arguments to update one TiposGastos.
     * @example
     * // Update one TiposGastos
     * const tiposGastos = await prisma.tiposGastos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiposGastosUpdateArgs>(args: SelectSubset<T, TiposGastosUpdateArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TiposGastos.
     * @param {TiposGastosDeleteManyArgs} args - Arguments to filter TiposGastos to delete.
     * @example
     * // Delete a few TiposGastos
     * const { count } = await prisma.tiposGastos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiposGastosDeleteManyArgs>(args?: SelectSubset<T, TiposGastosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TiposGastos
     * const tiposGastos = await prisma.tiposGastos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiposGastosUpdateManyArgs>(args: SelectSubset<T, TiposGastosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TiposGastos.
     * @param {TiposGastosUpsertArgs} args - Arguments to update or create a TiposGastos.
     * @example
     * // Update or create a TiposGastos
     * const tiposGastos = await prisma.tiposGastos.upsert({
     *   create: {
     *     // ... data to create a TiposGastos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TiposGastos we want to update
     *   }
     * })
     */
    upsert<T extends TiposGastosUpsertArgs>(args: SelectSubset<T, TiposGastosUpsertArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosCountArgs} args - Arguments to filter TiposGastos to count.
     * @example
     * // Count the number of TiposGastos
     * const count = await prisma.tiposGastos.count({
     *   where: {
     *     // ... the filter for the TiposGastos we want to count
     *   }
     * })
    **/
    count<T extends TiposGastosCountArgs>(
      args?: Subset<T, TiposGastosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiposGastosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TiposGastosAggregateArgs>(args: Subset<T, TiposGastosAggregateArgs>): Prisma.PrismaPromise<GetTiposGastosAggregateType<T>>

    /**
     * Group by TiposGastos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiposGastosGroupByArgs} args - Group by arguments.
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
      T extends TiposGastosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiposGastosGroupByArgs['orderBy'] }
        : { orderBy?: TiposGastosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TiposGastosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiposGastosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TiposGastos model
   */
  readonly fields: TiposGastosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TiposGastos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiposGastosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gastosRealizados<T extends TiposGastos$gastosRealizadosArgs<ExtArgs> = {}>(args?: Subset<T, TiposGastos$gastosRealizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TiposGastos model
   */
  interface TiposGastosFieldRefs {
    readonly COD: FieldRef<"TiposGastos", 'Int'>
    readonly DESCRICAO: FieldRef<"TiposGastos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TiposGastos findUnique
   */
  export type TiposGastosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter, which TiposGastos to fetch.
     */
    where: TiposGastosWhereUniqueInput
  }

  /**
   * TiposGastos findUniqueOrThrow
   */
  export type TiposGastosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter, which TiposGastos to fetch.
     */
    where: TiposGastosWhereUniqueInput
  }

  /**
   * TiposGastos findFirst
   */
  export type TiposGastosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter, which TiposGastos to fetch.
     */
    where?: TiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposGastos to fetch.
     */
    orderBy?: TiposGastosOrderByWithRelationInput | TiposGastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiposGastos.
     */
    cursor?: TiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiposGastos.
     */
    distinct?: TiposGastosScalarFieldEnum | TiposGastosScalarFieldEnum[]
  }

  /**
   * TiposGastos findFirstOrThrow
   */
  export type TiposGastosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter, which TiposGastos to fetch.
     */
    where?: TiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposGastos to fetch.
     */
    orderBy?: TiposGastosOrderByWithRelationInput | TiposGastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TiposGastos.
     */
    cursor?: TiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposGastos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TiposGastos.
     */
    distinct?: TiposGastosScalarFieldEnum | TiposGastosScalarFieldEnum[]
  }

  /**
   * TiposGastos findMany
   */
  export type TiposGastosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter, which TiposGastos to fetch.
     */
    where?: TiposGastosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TiposGastos to fetch.
     */
    orderBy?: TiposGastosOrderByWithRelationInput | TiposGastosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TiposGastos.
     */
    cursor?: TiposGastosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TiposGastos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TiposGastos.
     */
    skip?: number
    distinct?: TiposGastosScalarFieldEnum | TiposGastosScalarFieldEnum[]
  }

  /**
   * TiposGastos create
   */
  export type TiposGastosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * The data needed to create a TiposGastos.
     */
    data: XOR<TiposGastosCreateInput, TiposGastosUncheckedCreateInput>
  }

  /**
   * TiposGastos createMany
   */
  export type TiposGastosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TiposGastos.
     */
    data: TiposGastosCreateManyInput | TiposGastosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TiposGastos update
   */
  export type TiposGastosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * The data needed to update a TiposGastos.
     */
    data: XOR<TiposGastosUpdateInput, TiposGastosUncheckedUpdateInput>
    /**
     * Choose, which TiposGastos to update.
     */
    where: TiposGastosWhereUniqueInput
  }

  /**
   * TiposGastos updateMany
   */
  export type TiposGastosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TiposGastos.
     */
    data: XOR<TiposGastosUpdateManyMutationInput, TiposGastosUncheckedUpdateManyInput>
    /**
     * Filter which TiposGastos to update
     */
    where?: TiposGastosWhereInput
    /**
     * Limit how many TiposGastos to update.
     */
    limit?: number
  }

  /**
   * TiposGastos upsert
   */
  export type TiposGastosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * The filter to search for the TiposGastos to update in case it exists.
     */
    where: TiposGastosWhereUniqueInput
    /**
     * In case the TiposGastos found by the `where` argument doesn't exist, create a new TiposGastos with this data.
     */
    create: XOR<TiposGastosCreateInput, TiposGastosUncheckedCreateInput>
    /**
     * In case the TiposGastos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiposGastosUpdateInput, TiposGastosUncheckedUpdateInput>
  }

  /**
   * TiposGastos delete
   */
  export type TiposGastosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
    /**
     * Filter which TiposGastos to delete.
     */
    where: TiposGastosWhereUniqueInput
  }

  /**
   * TiposGastos deleteMany
   */
  export type TiposGastosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TiposGastos to delete
     */
    where?: TiposGastosWhereInput
    /**
     * Limit how many TiposGastos to delete.
     */
    limit?: number
  }

  /**
   * TiposGastos.gastosRealizados
   */
  export type TiposGastos$gastosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    where?: GastosRealizadosWhereInput
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    cursor?: GastosRealizadosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GastosRealizadosScalarFieldEnum | GastosRealizadosScalarFieldEnum[]
  }

  /**
   * TiposGastos without action
   */
  export type TiposGastosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiposGastos
     */
    select?: TiposGastosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TiposGastos
     */
    omit?: TiposGastosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiposGastosInclude<ExtArgs> | null
  }


  /**
   * Model GastosRealizados
   */

  export type AggregateGastosRealizados = {
    _count: GastosRealizadosCountAggregateOutputType | null
    _avg: GastosRealizadosAvgAggregateOutputType | null
    _sum: GastosRealizadosSumAggregateOutputType | null
    _min: GastosRealizadosMinAggregateOutputType | null
    _max: GastosRealizadosMaxAggregateOutputType | null
  }

  export type GastosRealizadosAvgAggregateOutputType = {
    CODTIPOGASTO: number | null
    VALORPAGO: Decimal | null
    tipos_gastos_COD: number | null
  }

  export type GastosRealizadosSumAggregateOutputType = {
    CODTIPOGASTO: number | null
    VALORPAGO: Decimal | null
    tipos_gastos_COD: number | null
  }

  export type GastosRealizadosMinAggregateOutputType = {
    PLACAS: string | null
    CODTIPOGASTO: number | null
    VALORPAGO: Decimal | null
    DATA: Date | null
    tipos_gastos_COD: number | null
  }

  export type GastosRealizadosMaxAggregateOutputType = {
    PLACAS: string | null
    CODTIPOGASTO: number | null
    VALORPAGO: Decimal | null
    DATA: Date | null
    tipos_gastos_COD: number | null
  }

  export type GastosRealizadosCountAggregateOutputType = {
    PLACAS: number
    CODTIPOGASTO: number
    VALORPAGO: number
    DATA: number
    tipos_gastos_COD: number
    _all: number
  }


  export type GastosRealizadosAvgAggregateInputType = {
    CODTIPOGASTO?: true
    VALORPAGO?: true
    tipos_gastos_COD?: true
  }

  export type GastosRealizadosSumAggregateInputType = {
    CODTIPOGASTO?: true
    VALORPAGO?: true
    tipos_gastos_COD?: true
  }

  export type GastosRealizadosMinAggregateInputType = {
    PLACAS?: true
    CODTIPOGASTO?: true
    VALORPAGO?: true
    DATA?: true
    tipos_gastos_COD?: true
  }

  export type GastosRealizadosMaxAggregateInputType = {
    PLACAS?: true
    CODTIPOGASTO?: true
    VALORPAGO?: true
    DATA?: true
    tipos_gastos_COD?: true
  }

  export type GastosRealizadosCountAggregateInputType = {
    PLACAS?: true
    CODTIPOGASTO?: true
    VALORPAGO?: true
    DATA?: true
    tipos_gastos_COD?: true
    _all?: true
  }

  export type GastosRealizadosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosRealizados to aggregate.
     */
    where?: GastosRealizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosRealizados to fetch.
     */
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GastosRealizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GastosRealizados
    **/
    _count?: true | GastosRealizadosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GastosRealizadosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GastosRealizadosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GastosRealizadosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GastosRealizadosMaxAggregateInputType
  }

  export type GetGastosRealizadosAggregateType<T extends GastosRealizadosAggregateArgs> = {
        [P in keyof T & keyof AggregateGastosRealizados]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGastosRealizados[P]>
      : GetScalarType<T[P], AggregateGastosRealizados[P]>
  }




  export type GastosRealizadosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GastosRealizadosWhereInput
    orderBy?: GastosRealizadosOrderByWithAggregationInput | GastosRealizadosOrderByWithAggregationInput[]
    by: GastosRealizadosScalarFieldEnum[] | GastosRealizadosScalarFieldEnum
    having?: GastosRealizadosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GastosRealizadosCountAggregateInputType | true
    _avg?: GastosRealizadosAvgAggregateInputType
    _sum?: GastosRealizadosSumAggregateInputType
    _min?: GastosRealizadosMinAggregateInputType
    _max?: GastosRealizadosMaxAggregateInputType
  }

  export type GastosRealizadosGroupByOutputType = {
    PLACAS: string
    CODTIPOGASTO: number
    VALORPAGO: Decimal
    DATA: Date
    tipos_gastos_COD: number
    _count: GastosRealizadosCountAggregateOutputType | null
    _avg: GastosRealizadosAvgAggregateOutputType | null
    _sum: GastosRealizadosSumAggregateOutputType | null
    _min: GastosRealizadosMinAggregateOutputType | null
    _max: GastosRealizadosMaxAggregateOutputType | null
  }

  type GetGastosRealizadosGroupByPayload<T extends GastosRealizadosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GastosRealizadosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GastosRealizadosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GastosRealizadosGroupByOutputType[P]>
            : GetScalarType<T[P], GastosRealizadosGroupByOutputType[P]>
        }
      >
    >


  export type GastosRealizadosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PLACAS?: boolean
    CODTIPOGASTO?: boolean
    VALORPAGO?: boolean
    DATA?: boolean
    tipos_gastos_COD?: boolean
    automovel?: boolean | AutomovelDefaultArgs<ExtArgs>
    tipoGasto?: boolean | TiposGastosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gastosRealizados"]>



  export type GastosRealizadosSelectScalar = {
    PLACAS?: boolean
    CODTIPOGASTO?: boolean
    VALORPAGO?: boolean
    DATA?: boolean
    tipos_gastos_COD?: boolean
  }

  export type GastosRealizadosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PLACAS" | "CODTIPOGASTO" | "VALORPAGO" | "DATA" | "tipos_gastos_COD", ExtArgs["result"]["gastosRealizados"]>
  export type GastosRealizadosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automovel?: boolean | AutomovelDefaultArgs<ExtArgs>
    tipoGasto?: boolean | TiposGastosDefaultArgs<ExtArgs>
  }

  export type $GastosRealizadosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GastosRealizados"
    objects: {
      automovel: Prisma.$AutomovelPayload<ExtArgs>
      tipoGasto: Prisma.$TiposGastosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PLACAS: string
      CODTIPOGASTO: number
      VALORPAGO: Prisma.Decimal
      DATA: Date
      tipos_gastos_COD: number
    }, ExtArgs["result"]["gastosRealizados"]>
    composites: {}
  }

  type GastosRealizadosGetPayload<S extends boolean | null | undefined | GastosRealizadosDefaultArgs> = $Result.GetResult<Prisma.$GastosRealizadosPayload, S>

  type GastosRealizadosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GastosRealizadosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GastosRealizadosCountAggregateInputType | true
    }

  export interface GastosRealizadosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GastosRealizados'], meta: { name: 'GastosRealizados' } }
    /**
     * Find zero or one GastosRealizados that matches the filter.
     * @param {GastosRealizadosFindUniqueArgs} args - Arguments to find a GastosRealizados
     * @example
     * // Get one GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GastosRealizadosFindUniqueArgs>(args: SelectSubset<T, GastosRealizadosFindUniqueArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GastosRealizados that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GastosRealizadosFindUniqueOrThrowArgs} args - Arguments to find a GastosRealizados
     * @example
     * // Get one GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GastosRealizadosFindUniqueOrThrowArgs>(args: SelectSubset<T, GastosRealizadosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosRealizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosFindFirstArgs} args - Arguments to find a GastosRealizados
     * @example
     * // Get one GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GastosRealizadosFindFirstArgs>(args?: SelectSubset<T, GastosRealizadosFindFirstArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GastosRealizados that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosFindFirstOrThrowArgs} args - Arguments to find a GastosRealizados
     * @example
     * // Get one GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GastosRealizadosFindFirstOrThrowArgs>(args?: SelectSubset<T, GastosRealizadosFindFirstOrThrowArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GastosRealizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findMany()
     * 
     * // Get first 10 GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.findMany({ take: 10 })
     * 
     * // Only select the `PLACAS`
     * const gastosRealizadosWithPLACASOnly = await prisma.gastosRealizados.findMany({ select: { PLACAS: true } })
     * 
     */
    findMany<T extends GastosRealizadosFindManyArgs>(args?: SelectSubset<T, GastosRealizadosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GastosRealizados.
     * @param {GastosRealizadosCreateArgs} args - Arguments to create a GastosRealizados.
     * @example
     * // Create one GastosRealizados
     * const GastosRealizados = await prisma.gastosRealizados.create({
     *   data: {
     *     // ... data to create a GastosRealizados
     *   }
     * })
     * 
     */
    create<T extends GastosRealizadosCreateArgs>(args: SelectSubset<T, GastosRealizadosCreateArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GastosRealizados.
     * @param {GastosRealizadosCreateManyArgs} args - Arguments to create many GastosRealizados.
     * @example
     * // Create many GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GastosRealizadosCreateManyArgs>(args?: SelectSubset<T, GastosRealizadosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GastosRealizados.
     * @param {GastosRealizadosDeleteArgs} args - Arguments to delete one GastosRealizados.
     * @example
     * // Delete one GastosRealizados
     * const GastosRealizados = await prisma.gastosRealizados.delete({
     *   where: {
     *     // ... filter to delete one GastosRealizados
     *   }
     * })
     * 
     */
    delete<T extends GastosRealizadosDeleteArgs>(args: SelectSubset<T, GastosRealizadosDeleteArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GastosRealizados.
     * @param {GastosRealizadosUpdateArgs} args - Arguments to update one GastosRealizados.
     * @example
     * // Update one GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GastosRealizadosUpdateArgs>(args: SelectSubset<T, GastosRealizadosUpdateArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GastosRealizados.
     * @param {GastosRealizadosDeleteManyArgs} args - Arguments to filter GastosRealizados to delete.
     * @example
     * // Delete a few GastosRealizados
     * const { count } = await prisma.gastosRealizados.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GastosRealizadosDeleteManyArgs>(args?: SelectSubset<T, GastosRealizadosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GastosRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GastosRealizadosUpdateManyArgs>(args: SelectSubset<T, GastosRealizadosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GastosRealizados.
     * @param {GastosRealizadosUpsertArgs} args - Arguments to update or create a GastosRealizados.
     * @example
     * // Update or create a GastosRealizados
     * const gastosRealizados = await prisma.gastosRealizados.upsert({
     *   create: {
     *     // ... data to create a GastosRealizados
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GastosRealizados we want to update
     *   }
     * })
     */
    upsert<T extends GastosRealizadosUpsertArgs>(args: SelectSubset<T, GastosRealizadosUpsertArgs<ExtArgs>>): Prisma__GastosRealizadosClient<$Result.GetResult<Prisma.$GastosRealizadosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GastosRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosCountArgs} args - Arguments to filter GastosRealizados to count.
     * @example
     * // Count the number of GastosRealizados
     * const count = await prisma.gastosRealizados.count({
     *   where: {
     *     // ... the filter for the GastosRealizados we want to count
     *   }
     * })
    **/
    count<T extends GastosRealizadosCountArgs>(
      args?: Subset<T, GastosRealizadosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GastosRealizadosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GastosRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GastosRealizadosAggregateArgs>(args: Subset<T, GastosRealizadosAggregateArgs>): Prisma.PrismaPromise<GetGastosRealizadosAggregateType<T>>

    /**
     * Group by GastosRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GastosRealizadosGroupByArgs} args - Group by arguments.
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
      T extends GastosRealizadosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GastosRealizadosGroupByArgs['orderBy'] }
        : { orderBy?: GastosRealizadosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GastosRealizadosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGastosRealizadosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GastosRealizados model
   */
  readonly fields: GastosRealizadosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GastosRealizados.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GastosRealizadosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    automovel<T extends AutomovelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomovelDefaultArgs<ExtArgs>>): Prisma__AutomovelClient<$Result.GetResult<Prisma.$AutomovelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoGasto<T extends TiposGastosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiposGastosDefaultArgs<ExtArgs>>): Prisma__TiposGastosClient<$Result.GetResult<Prisma.$TiposGastosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GastosRealizados model
   */
  interface GastosRealizadosFieldRefs {
    readonly PLACAS: FieldRef<"GastosRealizados", 'String'>
    readonly CODTIPOGASTO: FieldRef<"GastosRealizados", 'Int'>
    readonly VALORPAGO: FieldRef<"GastosRealizados", 'Decimal'>
    readonly DATA: FieldRef<"GastosRealizados", 'DateTime'>
    readonly tipos_gastos_COD: FieldRef<"GastosRealizados", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GastosRealizados findUnique
   */
  export type GastosRealizadosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter, which GastosRealizados to fetch.
     */
    where: GastosRealizadosWhereUniqueInput
  }

  /**
   * GastosRealizados findUniqueOrThrow
   */
  export type GastosRealizadosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter, which GastosRealizados to fetch.
     */
    where: GastosRealizadosWhereUniqueInput
  }

  /**
   * GastosRealizados findFirst
   */
  export type GastosRealizadosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter, which GastosRealizados to fetch.
     */
    where?: GastosRealizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosRealizados to fetch.
     */
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosRealizados.
     */
    cursor?: GastosRealizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosRealizados.
     */
    distinct?: GastosRealizadosScalarFieldEnum | GastosRealizadosScalarFieldEnum[]
  }

  /**
   * GastosRealizados findFirstOrThrow
   */
  export type GastosRealizadosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter, which GastosRealizados to fetch.
     */
    where?: GastosRealizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosRealizados to fetch.
     */
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GastosRealizados.
     */
    cursor?: GastosRealizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GastosRealizados.
     */
    distinct?: GastosRealizadosScalarFieldEnum | GastosRealizadosScalarFieldEnum[]
  }

  /**
   * GastosRealizados findMany
   */
  export type GastosRealizadosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter, which GastosRealizados to fetch.
     */
    where?: GastosRealizadosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GastosRealizados to fetch.
     */
    orderBy?: GastosRealizadosOrderByWithRelationInput | GastosRealizadosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GastosRealizados.
     */
    cursor?: GastosRealizadosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GastosRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GastosRealizados.
     */
    skip?: number
    distinct?: GastosRealizadosScalarFieldEnum | GastosRealizadosScalarFieldEnum[]
  }

  /**
   * GastosRealizados create
   */
  export type GastosRealizadosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * The data needed to create a GastosRealizados.
     */
    data: XOR<GastosRealizadosCreateInput, GastosRealizadosUncheckedCreateInput>
  }

  /**
   * GastosRealizados createMany
   */
  export type GastosRealizadosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GastosRealizados.
     */
    data: GastosRealizadosCreateManyInput | GastosRealizadosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GastosRealizados update
   */
  export type GastosRealizadosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * The data needed to update a GastosRealizados.
     */
    data: XOR<GastosRealizadosUpdateInput, GastosRealizadosUncheckedUpdateInput>
    /**
     * Choose, which GastosRealizados to update.
     */
    where: GastosRealizadosWhereUniqueInput
  }

  /**
   * GastosRealizados updateMany
   */
  export type GastosRealizadosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GastosRealizados.
     */
    data: XOR<GastosRealizadosUpdateManyMutationInput, GastosRealizadosUncheckedUpdateManyInput>
    /**
     * Filter which GastosRealizados to update
     */
    where?: GastosRealizadosWhereInput
    /**
     * Limit how many GastosRealizados to update.
     */
    limit?: number
  }

  /**
   * GastosRealizados upsert
   */
  export type GastosRealizadosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * The filter to search for the GastosRealizados to update in case it exists.
     */
    where: GastosRealizadosWhereUniqueInput
    /**
     * In case the GastosRealizados found by the `where` argument doesn't exist, create a new GastosRealizados with this data.
     */
    create: XOR<GastosRealizadosCreateInput, GastosRealizadosUncheckedCreateInput>
    /**
     * In case the GastosRealizados was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GastosRealizadosUpdateInput, GastosRealizadosUncheckedUpdateInput>
  }

  /**
   * GastosRealizados delete
   */
  export type GastosRealizadosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
    /**
     * Filter which GastosRealizados to delete.
     */
    where: GastosRealizadosWhereUniqueInput
  }

  /**
   * GastosRealizados deleteMany
   */
  export type GastosRealizadosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GastosRealizados to delete
     */
    where?: GastosRealizadosWhereInput
    /**
     * Limit how many GastosRealizados to delete.
     */
    limit?: number
  }

  /**
   * GastosRealizados without action
   */
  export type GastosRealizadosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GastosRealizados
     */
    select?: GastosRealizadosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GastosRealizados
     */
    omit?: GastosRealizadosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GastosRealizadosInclude<ExtArgs> | null
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


  export const ProprietarioScalarFieldEnum: {
    CPF_CNPJ: 'CPF_CNPJ',
    RG: 'RG',
    NOME: 'NOME',
    FONE: 'FONE',
    ENDERECO: 'ENDERECO',
    BAIRRO: 'BAIRRO',
    CIDADE: 'CIDADE',
    ESTADO: 'ESTADO'
  };

  export type ProprietarioScalarFieldEnum = (typeof ProprietarioScalarFieldEnum)[keyof typeof ProprietarioScalarFieldEnum]


  export const AutomovelScalarFieldEnum: {
    PLACAS: 'PLACAS',
    MODELO: 'MODELO',
    MARCA: 'MARCA',
    ANO: 'ANO',
    COMBS: 'COMBS',
    COR: 'COR',
    CHASSI: 'CHASSI',
    DATAENTRADA: 'DATAENTRADA',
    HORAENTRADA: 'HORAENTRADA',
    KMENTRADA: 'KMENTRADA',
    VALORENTRADA: 'VALORENTRADA',
    CPF_CNPJ: 'CPF_CNPJ'
  };

  export type AutomovelScalarFieldEnum = (typeof AutomovelScalarFieldEnum)[keyof typeof AutomovelScalarFieldEnum]


  export const VendedorScalarFieldEnum: {
    CPF: 'CPF',
    RG: 'RG',
    NOME: 'NOME',
    ENDERECO: 'ENDERECO',
    BAIRRO: 'BAIRRO',
    CIDADE: 'CIDADE',
    ESTADO: 'ESTADO'
  };

  export type VendedorScalarFieldEnum = (typeof VendedorScalarFieldEnum)[keyof typeof VendedorScalarFieldEnum]


  export const CompradorScalarFieldEnum: {
    CPFCOMPR: 'CPFCOMPR',
    RG: 'RG',
    NOME: 'NOME',
    ENDERECO: 'ENDERECO',
    CIDADE: 'CIDADE',
    BAIRRO: 'BAIRRO',
    UF: 'UF',
    CEP: 'CEP'
  };

  export type CompradorScalarFieldEnum = (typeof CompradorScalarFieldEnum)[keyof typeof CompradorScalarFieldEnum]


  export const VendaScalarFieldEnum: {
    NUMVENDA: 'NUMVENDA',
    DATAVENDA: 'DATAVENDA',
    HORAVENDA: 'HORAVENDA',
    CPFVENDEDOR: 'CPFVENDEDOR',
    HORASAIDA: 'HORASAIDA',
    DATASAIDA: 'DATASAIDA',
    comprador_CPFCOMPR: 'comprador_CPFCOMPR'
  };

  export type VendaScalarFieldEnum = (typeof VendaScalarFieldEnum)[keyof typeof VendaScalarFieldEnum]


  export const CarrosVendidosScalarFieldEnum: {
    NUMVENDA: 'NUMVENDA',
    PLACAS: 'PLACAS',
    KMVENDA: 'KMVENDA',
    TIPOVENDA: 'TIPOVENDA'
  };

  export type CarrosVendidosScalarFieldEnum = (typeof CarrosVendidosScalarFieldEnum)[keyof typeof CarrosVendidosScalarFieldEnum]


  export const TiposGastosScalarFieldEnum: {
    COD: 'COD',
    DESCRICAO: 'DESCRICAO'
  };

  export type TiposGastosScalarFieldEnum = (typeof TiposGastosScalarFieldEnum)[keyof typeof TiposGastosScalarFieldEnum]


  export const GastosRealizadosScalarFieldEnum: {
    PLACAS: 'PLACAS',
    CODTIPOGASTO: 'CODTIPOGASTO',
    VALORPAGO: 'VALORPAGO',
    DATA: 'DATA',
    tipos_gastos_COD: 'tipos_gastos_COD'
  };

  export type GastosRealizadosScalarFieldEnum = (typeof GastosRealizadosScalarFieldEnum)[keyof typeof GastosRealizadosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProprietarioOrderByRelevanceFieldEnum: {
    CPF_CNPJ: 'CPF_CNPJ',
    RG: 'RG',
    NOME: 'NOME',
    FONE: 'FONE',
    ENDERECO: 'ENDERECO',
    BAIRRO: 'BAIRRO',
    CIDADE: 'CIDADE',
    ESTADO: 'ESTADO'
  };

  export type ProprietarioOrderByRelevanceFieldEnum = (typeof ProprietarioOrderByRelevanceFieldEnum)[keyof typeof ProprietarioOrderByRelevanceFieldEnum]


  export const AutomovelOrderByRelevanceFieldEnum: {
    PLACAS: 'PLACAS',
    MODELO: 'MODELO',
    MARCA: 'MARCA',
    COMBS: 'COMBS',
    COR: 'COR',
    CHASSI: 'CHASSI',
    CPF_CNPJ: 'CPF_CNPJ'
  };

  export type AutomovelOrderByRelevanceFieldEnum = (typeof AutomovelOrderByRelevanceFieldEnum)[keyof typeof AutomovelOrderByRelevanceFieldEnum]


  export const VendedorOrderByRelevanceFieldEnum: {
    CPF: 'CPF',
    RG: 'RG',
    NOME: 'NOME',
    ENDERECO: 'ENDERECO',
    BAIRRO: 'BAIRRO',
    CIDADE: 'CIDADE',
    ESTADO: 'ESTADO'
  };

  export type VendedorOrderByRelevanceFieldEnum = (typeof VendedorOrderByRelevanceFieldEnum)[keyof typeof VendedorOrderByRelevanceFieldEnum]


  export const CompradorOrderByRelevanceFieldEnum: {
    CPFCOMPR: 'CPFCOMPR',
    RG: 'RG',
    NOME: 'NOME',
    ENDERECO: 'ENDERECO',
    CIDADE: 'CIDADE',
    BAIRRO: 'BAIRRO',
    UF: 'UF',
    CEP: 'CEP'
  };

  export type CompradorOrderByRelevanceFieldEnum = (typeof CompradorOrderByRelevanceFieldEnum)[keyof typeof CompradorOrderByRelevanceFieldEnum]


  export const VendaOrderByRelevanceFieldEnum: {
    CPFVENDEDOR: 'CPFVENDEDOR',
    comprador_CPFCOMPR: 'comprador_CPFCOMPR'
  };

  export type VendaOrderByRelevanceFieldEnum = (typeof VendaOrderByRelevanceFieldEnum)[keyof typeof VendaOrderByRelevanceFieldEnum]


  export const CarrosVendidosOrderByRelevanceFieldEnum: {
    PLACAS: 'PLACAS',
    TIPOVENDA: 'TIPOVENDA'
  };

  export type CarrosVendidosOrderByRelevanceFieldEnum = (typeof CarrosVendidosOrderByRelevanceFieldEnum)[keyof typeof CarrosVendidosOrderByRelevanceFieldEnum]


  export const TiposGastosOrderByRelevanceFieldEnum: {
    DESCRICAO: 'DESCRICAO'
  };

  export type TiposGastosOrderByRelevanceFieldEnum = (typeof TiposGastosOrderByRelevanceFieldEnum)[keyof typeof TiposGastosOrderByRelevanceFieldEnum]


  export const GastosRealizadosOrderByRelevanceFieldEnum: {
    PLACAS: 'PLACAS'
  };

  export type GastosRealizadosOrderByRelevanceFieldEnum = (typeof GastosRealizadosOrderByRelevanceFieldEnum)[keyof typeof GastosRealizadosOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProprietarioWhereInput = {
    AND?: ProprietarioWhereInput | ProprietarioWhereInput[]
    OR?: ProprietarioWhereInput[]
    NOT?: ProprietarioWhereInput | ProprietarioWhereInput[]
    CPF_CNPJ?: StringFilter<"Proprietario"> | string
    RG?: StringNullableFilter<"Proprietario"> | string | null
    NOME?: StringFilter<"Proprietario"> | string
    FONE?: StringFilter<"Proprietario"> | string
    ENDERECO?: StringNullableFilter<"Proprietario"> | string | null
    BAIRRO?: StringNullableFilter<"Proprietario"> | string | null
    CIDADE?: StringNullableFilter<"Proprietario"> | string | null
    ESTADO?: StringNullableFilter<"Proprietario"> | string | null
    automoveis?: AutomovelListRelationFilter
  }

  export type ProprietarioOrderByWithRelationInput = {
    CPF_CNPJ?: SortOrder
    RG?: SortOrderInput | SortOrder
    NOME?: SortOrder
    FONE?: SortOrder
    ENDERECO?: SortOrderInput | SortOrder
    BAIRRO?: SortOrderInput | SortOrder
    CIDADE?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
    automoveis?: AutomovelOrderByRelationAggregateInput
    _relevance?: ProprietarioOrderByRelevanceInput
  }

  export type ProprietarioWhereUniqueInput = Prisma.AtLeast<{
    CPF_CNPJ?: string
    AND?: ProprietarioWhereInput | ProprietarioWhereInput[]
    OR?: ProprietarioWhereInput[]
    NOT?: ProprietarioWhereInput | ProprietarioWhereInput[]
    RG?: StringNullableFilter<"Proprietario"> | string | null
    NOME?: StringFilter<"Proprietario"> | string
    FONE?: StringFilter<"Proprietario"> | string
    ENDERECO?: StringNullableFilter<"Proprietario"> | string | null
    BAIRRO?: StringNullableFilter<"Proprietario"> | string | null
    CIDADE?: StringNullableFilter<"Proprietario"> | string | null
    ESTADO?: StringNullableFilter<"Proprietario"> | string | null
    automoveis?: AutomovelListRelationFilter
  }, "CPF_CNPJ">

  export type ProprietarioOrderByWithAggregationInput = {
    CPF_CNPJ?: SortOrder
    RG?: SortOrderInput | SortOrder
    NOME?: SortOrder
    FONE?: SortOrder
    ENDERECO?: SortOrderInput | SortOrder
    BAIRRO?: SortOrderInput | SortOrder
    CIDADE?: SortOrderInput | SortOrder
    ESTADO?: SortOrderInput | SortOrder
    _count?: ProprietarioCountOrderByAggregateInput
    _max?: ProprietarioMaxOrderByAggregateInput
    _min?: ProprietarioMinOrderByAggregateInput
  }

  export type ProprietarioScalarWhereWithAggregatesInput = {
    AND?: ProprietarioScalarWhereWithAggregatesInput | ProprietarioScalarWhereWithAggregatesInput[]
    OR?: ProprietarioScalarWhereWithAggregatesInput[]
    NOT?: ProprietarioScalarWhereWithAggregatesInput | ProprietarioScalarWhereWithAggregatesInput[]
    CPF_CNPJ?: StringWithAggregatesFilter<"Proprietario"> | string
    RG?: StringNullableWithAggregatesFilter<"Proprietario"> | string | null
    NOME?: StringWithAggregatesFilter<"Proprietario"> | string
    FONE?: StringWithAggregatesFilter<"Proprietario"> | string
    ENDERECO?: StringNullableWithAggregatesFilter<"Proprietario"> | string | null
    BAIRRO?: StringNullableWithAggregatesFilter<"Proprietario"> | string | null
    CIDADE?: StringNullableWithAggregatesFilter<"Proprietario"> | string | null
    ESTADO?: StringNullableWithAggregatesFilter<"Proprietario"> | string | null
  }

  export type AutomovelWhereInput = {
    AND?: AutomovelWhereInput | AutomovelWhereInput[]
    OR?: AutomovelWhereInput[]
    NOT?: AutomovelWhereInput | AutomovelWhereInput[]
    PLACAS?: StringFilter<"Automovel"> | string
    MODELO?: StringFilter<"Automovel"> | string
    MARCA?: StringFilter<"Automovel"> | string
    ANO?: IntFilter<"Automovel"> | number
    COMBS?: StringFilter<"Automovel"> | string
    COR?: StringFilter<"Automovel"> | string
    CHASSI?: StringFilter<"Automovel"> | string
    DATAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    HORAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    KMENTRADA?: IntFilter<"Automovel"> | number
    VALORENTRADA?: DecimalFilter<"Automovel"> | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFilter<"Automovel"> | string
    proprietario?: XOR<ProprietarioScalarRelationFilter, ProprietarioWhereInput>
    carrosVendidos?: CarrosVendidosListRelationFilter
    gastosRealizados?: GastosRealizadosListRelationFilter
  }

  export type AutomovelOrderByWithRelationInput = {
    PLACAS?: SortOrder
    MODELO?: SortOrder
    MARCA?: SortOrder
    ANO?: SortOrder
    COMBS?: SortOrder
    COR?: SortOrder
    CHASSI?: SortOrder
    DATAENTRADA?: SortOrder
    HORAENTRADA?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
    CPF_CNPJ?: SortOrder
    proprietario?: ProprietarioOrderByWithRelationInput
    carrosVendidos?: CarrosVendidosOrderByRelationAggregateInput
    gastosRealizados?: GastosRealizadosOrderByRelationAggregateInput
    _relevance?: AutomovelOrderByRelevanceInput
  }

  export type AutomovelWhereUniqueInput = Prisma.AtLeast<{
    PLACAS?: string
    AND?: AutomovelWhereInput | AutomovelWhereInput[]
    OR?: AutomovelWhereInput[]
    NOT?: AutomovelWhereInput | AutomovelWhereInput[]
    MODELO?: StringFilter<"Automovel"> | string
    MARCA?: StringFilter<"Automovel"> | string
    ANO?: IntFilter<"Automovel"> | number
    COMBS?: StringFilter<"Automovel"> | string
    COR?: StringFilter<"Automovel"> | string
    CHASSI?: StringFilter<"Automovel"> | string
    DATAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    HORAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    KMENTRADA?: IntFilter<"Automovel"> | number
    VALORENTRADA?: DecimalFilter<"Automovel"> | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFilter<"Automovel"> | string
    proprietario?: XOR<ProprietarioScalarRelationFilter, ProprietarioWhereInput>
    carrosVendidos?: CarrosVendidosListRelationFilter
    gastosRealizados?: GastosRealizadosListRelationFilter
  }, "PLACAS">

  export type AutomovelOrderByWithAggregationInput = {
    PLACAS?: SortOrder
    MODELO?: SortOrder
    MARCA?: SortOrder
    ANO?: SortOrder
    COMBS?: SortOrder
    COR?: SortOrder
    CHASSI?: SortOrder
    DATAENTRADA?: SortOrder
    HORAENTRADA?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
    CPF_CNPJ?: SortOrder
    _count?: AutomovelCountOrderByAggregateInput
    _avg?: AutomovelAvgOrderByAggregateInput
    _max?: AutomovelMaxOrderByAggregateInput
    _min?: AutomovelMinOrderByAggregateInput
    _sum?: AutomovelSumOrderByAggregateInput
  }

  export type AutomovelScalarWhereWithAggregatesInput = {
    AND?: AutomovelScalarWhereWithAggregatesInput | AutomovelScalarWhereWithAggregatesInput[]
    OR?: AutomovelScalarWhereWithAggregatesInput[]
    NOT?: AutomovelScalarWhereWithAggregatesInput | AutomovelScalarWhereWithAggregatesInput[]
    PLACAS?: StringWithAggregatesFilter<"Automovel"> | string
    MODELO?: StringWithAggregatesFilter<"Automovel"> | string
    MARCA?: StringWithAggregatesFilter<"Automovel"> | string
    ANO?: IntWithAggregatesFilter<"Automovel"> | number
    COMBS?: StringWithAggregatesFilter<"Automovel"> | string
    COR?: StringWithAggregatesFilter<"Automovel"> | string
    CHASSI?: StringWithAggregatesFilter<"Automovel"> | string
    DATAENTRADA?: DateTimeWithAggregatesFilter<"Automovel"> | Date | string
    HORAENTRADA?: DateTimeWithAggregatesFilter<"Automovel"> | Date | string
    KMENTRADA?: IntWithAggregatesFilter<"Automovel"> | number
    VALORENTRADA?: DecimalWithAggregatesFilter<"Automovel"> | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringWithAggregatesFilter<"Automovel"> | string
  }

  export type VendedorWhereInput = {
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    CPF?: StringFilter<"Vendedor"> | string
    RG?: StringFilter<"Vendedor"> | string
    NOME?: StringFilter<"Vendedor"> | string
    ENDERECO?: StringFilter<"Vendedor"> | string
    BAIRRO?: StringFilter<"Vendedor"> | string
    CIDADE?: StringFilter<"Vendedor"> | string
    ESTADO?: StringFilter<"Vendedor"> | string
    vendas?: VendaListRelationFilter
  }

  export type VendedorOrderByWithRelationInput = {
    CPF?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
    vendas?: VendaOrderByRelationAggregateInput
    _relevance?: VendedorOrderByRelevanceInput
  }

  export type VendedorWhereUniqueInput = Prisma.AtLeast<{
    CPF?: string
    AND?: VendedorWhereInput | VendedorWhereInput[]
    OR?: VendedorWhereInput[]
    NOT?: VendedorWhereInput | VendedorWhereInput[]
    RG?: StringFilter<"Vendedor"> | string
    NOME?: StringFilter<"Vendedor"> | string
    ENDERECO?: StringFilter<"Vendedor"> | string
    BAIRRO?: StringFilter<"Vendedor"> | string
    CIDADE?: StringFilter<"Vendedor"> | string
    ESTADO?: StringFilter<"Vendedor"> | string
    vendas?: VendaListRelationFilter
  }, "CPF">

  export type VendedorOrderByWithAggregationInput = {
    CPF?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
    _count?: VendedorCountOrderByAggregateInput
    _max?: VendedorMaxOrderByAggregateInput
    _min?: VendedorMinOrderByAggregateInput
  }

  export type VendedorScalarWhereWithAggregatesInput = {
    AND?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    OR?: VendedorScalarWhereWithAggregatesInput[]
    NOT?: VendedorScalarWhereWithAggregatesInput | VendedorScalarWhereWithAggregatesInput[]
    CPF?: StringWithAggregatesFilter<"Vendedor"> | string
    RG?: StringWithAggregatesFilter<"Vendedor"> | string
    NOME?: StringWithAggregatesFilter<"Vendedor"> | string
    ENDERECO?: StringWithAggregatesFilter<"Vendedor"> | string
    BAIRRO?: StringWithAggregatesFilter<"Vendedor"> | string
    CIDADE?: StringWithAggregatesFilter<"Vendedor"> | string
    ESTADO?: StringWithAggregatesFilter<"Vendedor"> | string
  }

  export type CompradorWhereInput = {
    AND?: CompradorWhereInput | CompradorWhereInput[]
    OR?: CompradorWhereInput[]
    NOT?: CompradorWhereInput | CompradorWhereInput[]
    CPFCOMPR?: StringFilter<"Comprador"> | string
    RG?: StringFilter<"Comprador"> | string
    NOME?: StringFilter<"Comprador"> | string
    ENDERECO?: StringFilter<"Comprador"> | string
    CIDADE?: StringFilter<"Comprador"> | string
    BAIRRO?: StringFilter<"Comprador"> | string
    UF?: StringFilter<"Comprador"> | string
    CEP?: StringFilter<"Comprador"> | string
    vendas?: VendaListRelationFilter
  }

  export type CompradorOrderByWithRelationInput = {
    CPFCOMPR?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    CIDADE?: SortOrder
    BAIRRO?: SortOrder
    UF?: SortOrder
    CEP?: SortOrder
    vendas?: VendaOrderByRelationAggregateInput
    _relevance?: CompradorOrderByRelevanceInput
  }

  export type CompradorWhereUniqueInput = Prisma.AtLeast<{
    CPFCOMPR?: string
    AND?: CompradorWhereInput | CompradorWhereInput[]
    OR?: CompradorWhereInput[]
    NOT?: CompradorWhereInput | CompradorWhereInput[]
    RG?: StringFilter<"Comprador"> | string
    NOME?: StringFilter<"Comprador"> | string
    ENDERECO?: StringFilter<"Comprador"> | string
    CIDADE?: StringFilter<"Comprador"> | string
    BAIRRO?: StringFilter<"Comprador"> | string
    UF?: StringFilter<"Comprador"> | string
    CEP?: StringFilter<"Comprador"> | string
    vendas?: VendaListRelationFilter
  }, "CPFCOMPR">

  export type CompradorOrderByWithAggregationInput = {
    CPFCOMPR?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    CIDADE?: SortOrder
    BAIRRO?: SortOrder
    UF?: SortOrder
    CEP?: SortOrder
    _count?: CompradorCountOrderByAggregateInput
    _max?: CompradorMaxOrderByAggregateInput
    _min?: CompradorMinOrderByAggregateInput
  }

  export type CompradorScalarWhereWithAggregatesInput = {
    AND?: CompradorScalarWhereWithAggregatesInput | CompradorScalarWhereWithAggregatesInput[]
    OR?: CompradorScalarWhereWithAggregatesInput[]
    NOT?: CompradorScalarWhereWithAggregatesInput | CompradorScalarWhereWithAggregatesInput[]
    CPFCOMPR?: StringWithAggregatesFilter<"Comprador"> | string
    RG?: StringWithAggregatesFilter<"Comprador"> | string
    NOME?: StringWithAggregatesFilter<"Comprador"> | string
    ENDERECO?: StringWithAggregatesFilter<"Comprador"> | string
    CIDADE?: StringWithAggregatesFilter<"Comprador"> | string
    BAIRRO?: StringWithAggregatesFilter<"Comprador"> | string
    UF?: StringWithAggregatesFilter<"Comprador"> | string
    CEP?: StringWithAggregatesFilter<"Comprador"> | string
  }

  export type VendaWhereInput = {
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    NUMVENDA?: IntFilter<"Venda"> | number
    DATAVENDA?: DateTimeFilter<"Venda"> | Date | string
    HORAVENDA?: DateTimeFilter<"Venda"> | Date | string
    CPFVENDEDOR?: StringFilter<"Venda"> | string
    HORASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    DATASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    comprador_CPFCOMPR?: StringFilter<"Venda"> | string
    vendedor?: XOR<VendedorScalarRelationFilter, VendedorWhereInput>
    comprador?: XOR<CompradorScalarRelationFilter, CompradorWhereInput>
    carrosVendidos?: CarrosVendidosListRelationFilter
  }

  export type VendaOrderByWithRelationInput = {
    NUMVENDA?: SortOrder
    DATAVENDA?: SortOrder
    HORAVENDA?: SortOrder
    CPFVENDEDOR?: SortOrder
    HORASAIDA?: SortOrderInput | SortOrder
    DATASAIDA?: SortOrderInput | SortOrder
    comprador_CPFCOMPR?: SortOrder
    vendedor?: VendedorOrderByWithRelationInput
    comprador?: CompradorOrderByWithRelationInput
    carrosVendidos?: CarrosVendidosOrderByRelationAggregateInput
    _relevance?: VendaOrderByRelevanceInput
  }

  export type VendaWhereUniqueInput = Prisma.AtLeast<{
    NUMVENDA?: number
    AND?: VendaWhereInput | VendaWhereInput[]
    OR?: VendaWhereInput[]
    NOT?: VendaWhereInput | VendaWhereInput[]
    DATAVENDA?: DateTimeFilter<"Venda"> | Date | string
    HORAVENDA?: DateTimeFilter<"Venda"> | Date | string
    CPFVENDEDOR?: StringFilter<"Venda"> | string
    HORASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    DATASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    comprador_CPFCOMPR?: StringFilter<"Venda"> | string
    vendedor?: XOR<VendedorScalarRelationFilter, VendedorWhereInput>
    comprador?: XOR<CompradorScalarRelationFilter, CompradorWhereInput>
    carrosVendidos?: CarrosVendidosListRelationFilter
  }, "NUMVENDA">

  export type VendaOrderByWithAggregationInput = {
    NUMVENDA?: SortOrder
    DATAVENDA?: SortOrder
    HORAVENDA?: SortOrder
    CPFVENDEDOR?: SortOrder
    HORASAIDA?: SortOrderInput | SortOrder
    DATASAIDA?: SortOrderInput | SortOrder
    comprador_CPFCOMPR?: SortOrder
    _count?: VendaCountOrderByAggregateInput
    _avg?: VendaAvgOrderByAggregateInput
    _max?: VendaMaxOrderByAggregateInput
    _min?: VendaMinOrderByAggregateInput
    _sum?: VendaSumOrderByAggregateInput
  }

  export type VendaScalarWhereWithAggregatesInput = {
    AND?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    OR?: VendaScalarWhereWithAggregatesInput[]
    NOT?: VendaScalarWhereWithAggregatesInput | VendaScalarWhereWithAggregatesInput[]
    NUMVENDA?: IntWithAggregatesFilter<"Venda"> | number
    DATAVENDA?: DateTimeWithAggregatesFilter<"Venda"> | Date | string
    HORAVENDA?: DateTimeWithAggregatesFilter<"Venda"> | Date | string
    CPFVENDEDOR?: StringWithAggregatesFilter<"Venda"> | string
    HORASAIDA?: DateTimeNullableWithAggregatesFilter<"Venda"> | Date | string | null
    DATASAIDA?: DateTimeNullableWithAggregatesFilter<"Venda"> | Date | string | null
    comprador_CPFCOMPR?: StringWithAggregatesFilter<"Venda"> | string
  }

  export type CarrosVendidosWhereInput = {
    AND?: CarrosVendidosWhereInput | CarrosVendidosWhereInput[]
    OR?: CarrosVendidosWhereInput[]
    NOT?: CarrosVendidosWhereInput | CarrosVendidosWhereInput[]
    NUMVENDA?: IntFilter<"CarrosVendidos"> | number
    PLACAS?: StringFilter<"CarrosVendidos"> | string
    KMVENDA?: IntFilter<"CarrosVendidos"> | number
    TIPOVENDA?: StringFilter<"CarrosVendidos"> | string
    venda?: XOR<VendaScalarRelationFilter, VendaWhereInput>
    automovel?: XOR<AutomovelScalarRelationFilter, AutomovelWhereInput>
  }

  export type CarrosVendidosOrderByWithRelationInput = {
    NUMVENDA?: SortOrder
    PLACAS?: SortOrder
    KMVENDA?: SortOrder
    TIPOVENDA?: SortOrder
    venda?: VendaOrderByWithRelationInput
    automovel?: AutomovelOrderByWithRelationInput
    _relevance?: CarrosVendidosOrderByRelevanceInput
  }

  export type CarrosVendidosWhereUniqueInput = Prisma.AtLeast<{
    PLACAS_NUMVENDA?: CarrosVendidosPLACASNUMVENDACompoundUniqueInput
    AND?: CarrosVendidosWhereInput | CarrosVendidosWhereInput[]
    OR?: CarrosVendidosWhereInput[]
    NOT?: CarrosVendidosWhereInput | CarrosVendidosWhereInput[]
    NUMVENDA?: IntFilter<"CarrosVendidos"> | number
    PLACAS?: StringFilter<"CarrosVendidos"> | string
    KMVENDA?: IntFilter<"CarrosVendidos"> | number
    TIPOVENDA?: StringFilter<"CarrosVendidos"> | string
    venda?: XOR<VendaScalarRelationFilter, VendaWhereInput>
    automovel?: XOR<AutomovelScalarRelationFilter, AutomovelWhereInput>
  }, "PLACAS_NUMVENDA">

  export type CarrosVendidosOrderByWithAggregationInput = {
    NUMVENDA?: SortOrder
    PLACAS?: SortOrder
    KMVENDA?: SortOrder
    TIPOVENDA?: SortOrder
    _count?: CarrosVendidosCountOrderByAggregateInput
    _avg?: CarrosVendidosAvgOrderByAggregateInput
    _max?: CarrosVendidosMaxOrderByAggregateInput
    _min?: CarrosVendidosMinOrderByAggregateInput
    _sum?: CarrosVendidosSumOrderByAggregateInput
  }

  export type CarrosVendidosScalarWhereWithAggregatesInput = {
    AND?: CarrosVendidosScalarWhereWithAggregatesInput | CarrosVendidosScalarWhereWithAggregatesInput[]
    OR?: CarrosVendidosScalarWhereWithAggregatesInput[]
    NOT?: CarrosVendidosScalarWhereWithAggregatesInput | CarrosVendidosScalarWhereWithAggregatesInput[]
    NUMVENDA?: IntWithAggregatesFilter<"CarrosVendidos"> | number
    PLACAS?: StringWithAggregatesFilter<"CarrosVendidos"> | string
    KMVENDA?: IntWithAggregatesFilter<"CarrosVendidos"> | number
    TIPOVENDA?: StringWithAggregatesFilter<"CarrosVendidos"> | string
  }

  export type TiposGastosWhereInput = {
    AND?: TiposGastosWhereInput | TiposGastosWhereInput[]
    OR?: TiposGastosWhereInput[]
    NOT?: TiposGastosWhereInput | TiposGastosWhereInput[]
    COD?: IntFilter<"TiposGastos"> | number
    DESCRICAO?: StringFilter<"TiposGastos"> | string
    gastosRealizados?: GastosRealizadosListRelationFilter
  }

  export type TiposGastosOrderByWithRelationInput = {
    COD?: SortOrder
    DESCRICAO?: SortOrder
    gastosRealizados?: GastosRealizadosOrderByRelationAggregateInput
    _relevance?: TiposGastosOrderByRelevanceInput
  }

  export type TiposGastosWhereUniqueInput = Prisma.AtLeast<{
    COD?: number
    AND?: TiposGastosWhereInput | TiposGastosWhereInput[]
    OR?: TiposGastosWhereInput[]
    NOT?: TiposGastosWhereInput | TiposGastosWhereInput[]
    DESCRICAO?: StringFilter<"TiposGastos"> | string
    gastosRealizados?: GastosRealizadosListRelationFilter
  }, "COD">

  export type TiposGastosOrderByWithAggregationInput = {
    COD?: SortOrder
    DESCRICAO?: SortOrder
    _count?: TiposGastosCountOrderByAggregateInput
    _avg?: TiposGastosAvgOrderByAggregateInput
    _max?: TiposGastosMaxOrderByAggregateInput
    _min?: TiposGastosMinOrderByAggregateInput
    _sum?: TiposGastosSumOrderByAggregateInput
  }

  export type TiposGastosScalarWhereWithAggregatesInput = {
    AND?: TiposGastosScalarWhereWithAggregatesInput | TiposGastosScalarWhereWithAggregatesInput[]
    OR?: TiposGastosScalarWhereWithAggregatesInput[]
    NOT?: TiposGastosScalarWhereWithAggregatesInput | TiposGastosScalarWhereWithAggregatesInput[]
    COD?: IntWithAggregatesFilter<"TiposGastos"> | number
    DESCRICAO?: StringWithAggregatesFilter<"TiposGastos"> | string
  }

  export type GastosRealizadosWhereInput = {
    AND?: GastosRealizadosWhereInput | GastosRealizadosWhereInput[]
    OR?: GastosRealizadosWhereInput[]
    NOT?: GastosRealizadosWhereInput | GastosRealizadosWhereInput[]
    PLACAS?: StringFilter<"GastosRealizados"> | string
    CODTIPOGASTO?: IntFilter<"GastosRealizados"> | number
    VALORPAGO?: DecimalFilter<"GastosRealizados"> | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFilter<"GastosRealizados"> | Date | string
    tipos_gastos_COD?: IntFilter<"GastosRealizados"> | number
    automovel?: XOR<AutomovelScalarRelationFilter, AutomovelWhereInput>
    tipoGasto?: XOR<TiposGastosScalarRelationFilter, TiposGastosWhereInput>
  }

  export type GastosRealizadosOrderByWithRelationInput = {
    PLACAS?: SortOrder
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    DATA?: SortOrder
    tipos_gastos_COD?: SortOrder
    automovel?: AutomovelOrderByWithRelationInput
    tipoGasto?: TiposGastosOrderByWithRelationInput
    _relevance?: GastosRealizadosOrderByRelevanceInput
  }

  export type GastosRealizadosWhereUniqueInput = Prisma.AtLeast<{
    PLACAS_CODTIPOGASTO_tipos_gastos_COD?: GastosRealizadosPLACASCODTIPOGASTOTipos_gastos_CODCompoundUniqueInput
    AND?: GastosRealizadosWhereInput | GastosRealizadosWhereInput[]
    OR?: GastosRealizadosWhereInput[]
    NOT?: GastosRealizadosWhereInput | GastosRealizadosWhereInput[]
    PLACAS?: StringFilter<"GastosRealizados"> | string
    CODTIPOGASTO?: IntFilter<"GastosRealizados"> | number
    VALORPAGO?: DecimalFilter<"GastosRealizados"> | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFilter<"GastosRealizados"> | Date | string
    tipos_gastos_COD?: IntFilter<"GastosRealizados"> | number
    automovel?: XOR<AutomovelScalarRelationFilter, AutomovelWhereInput>
    tipoGasto?: XOR<TiposGastosScalarRelationFilter, TiposGastosWhereInput>
  }, "PLACAS_CODTIPOGASTO_tipos_gastos_COD">

  export type GastosRealizadosOrderByWithAggregationInput = {
    PLACAS?: SortOrder
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    DATA?: SortOrder
    tipos_gastos_COD?: SortOrder
    _count?: GastosRealizadosCountOrderByAggregateInput
    _avg?: GastosRealizadosAvgOrderByAggregateInput
    _max?: GastosRealizadosMaxOrderByAggregateInput
    _min?: GastosRealizadosMinOrderByAggregateInput
    _sum?: GastosRealizadosSumOrderByAggregateInput
  }

  export type GastosRealizadosScalarWhereWithAggregatesInput = {
    AND?: GastosRealizadosScalarWhereWithAggregatesInput | GastosRealizadosScalarWhereWithAggregatesInput[]
    OR?: GastosRealizadosScalarWhereWithAggregatesInput[]
    NOT?: GastosRealizadosScalarWhereWithAggregatesInput | GastosRealizadosScalarWhereWithAggregatesInput[]
    PLACAS?: StringWithAggregatesFilter<"GastosRealizados"> | string
    CODTIPOGASTO?: IntWithAggregatesFilter<"GastosRealizados"> | number
    VALORPAGO?: DecimalWithAggregatesFilter<"GastosRealizados"> | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeWithAggregatesFilter<"GastosRealizados"> | Date | string
    tipos_gastos_COD?: IntWithAggregatesFilter<"GastosRealizados"> | number
  }

  export type ProprietarioCreateInput = {
    CPF_CNPJ: string
    RG?: string | null
    NOME: string
    FONE: string
    ENDERECO?: string | null
    BAIRRO?: string | null
    CIDADE?: string | null
    ESTADO?: string | null
    automoveis?: AutomovelCreateNestedManyWithoutProprietarioInput
  }

  export type ProprietarioUncheckedCreateInput = {
    CPF_CNPJ: string
    RG?: string | null
    NOME: string
    FONE: string
    ENDERECO?: string | null
    BAIRRO?: string | null
    CIDADE?: string | null
    ESTADO?: string | null
    automoveis?: AutomovelUncheckedCreateNestedManyWithoutProprietarioInput
  }

  export type ProprietarioUpdateInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    automoveis?: AutomovelUpdateManyWithoutProprietarioNestedInput
  }

  export type ProprietarioUncheckedUpdateInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    automoveis?: AutomovelUncheckedUpdateManyWithoutProprietarioNestedInput
  }

  export type ProprietarioCreateManyInput = {
    CPF_CNPJ: string
    RG?: string | null
    NOME: string
    FONE: string
    ENDERECO?: string | null
    BAIRRO?: string | null
    CIDADE?: string | null
    ESTADO?: string | null
  }

  export type ProprietarioUpdateManyMutationInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProprietarioUncheckedUpdateManyInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomovelCreateInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    proprietario: ProprietarioCreateNestedOneWithoutAutomoveisInput
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutAutomovelInput
    gastosRealizados?: GastosRealizadosCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelUncheckedCreateInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    CPF_CNPJ: string
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutAutomovelInput
    gastosRealizados?: GastosRealizadosUncheckedCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelUpdateInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proprietario?: ProprietarioUpdateOneRequiredWithoutAutomoveisNestedInput
    carrosVendidos?: CarrosVendidosUpdateManyWithoutAutomovelNestedInput
    gastosRealizados?: GastosRealizadosUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelUncheckedUpdateInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutAutomovelNestedInput
    gastosRealizados?: GastosRealizadosUncheckedUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelCreateManyInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    CPF_CNPJ: string
  }

  export type AutomovelUpdateManyMutationInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AutomovelUncheckedUpdateManyInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
  }

  export type VendedorCreateInput = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
    vendas?: VendaCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUncheckedCreateInput = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
    vendas?: VendaUncheckedCreateNestedManyWithoutVendedorInput
  }

  export type VendedorUpdateInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorUncheckedUpdateInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUncheckedUpdateManyWithoutVendedorNestedInput
  }

  export type VendedorCreateManyInput = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
  }

  export type VendedorUpdateManyMutationInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
  }

  export type VendedorUncheckedUpdateManyInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
  }

  export type CompradorCreateInput = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
    vendas?: VendaCreateNestedManyWithoutCompradorInput
  }

  export type CompradorUncheckedCreateInput = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
    vendas?: VendaUncheckedCreateNestedManyWithoutCompradorInput
  }

  export type CompradorUpdateInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUpdateManyWithoutCompradorNestedInput
  }

  export type CompradorUncheckedUpdateInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
    vendas?: VendaUncheckedUpdateManyWithoutCompradorNestedInput
  }

  export type CompradorCreateManyInput = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
  }

  export type CompradorUpdateManyMutationInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type CompradorUncheckedUpdateManyInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type VendaCreateInput = {
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    vendedor: VendedorCreateNestedOneWithoutVendasInput
    comprador: CompradorCreateNestedOneWithoutVendasInput
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutVendaInput
  }

  export type VendaUncheckedCreateInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    CPFVENDEDOR: string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador_CPFCOMPR: string
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendaUpdateInput = {
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedor?: VendedorUpdateOneRequiredWithoutVendasNestedInput
    comprador?: CompradorUpdateOneRequiredWithoutVendasNestedInput
    carrosVendidos?: CarrosVendidosUpdateManyWithoutVendaNestedInput
  }

  export type VendaUncheckedUpdateInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    CPFVENDEDOR?: StringFieldUpdateOperationsInput | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador_CPFCOMPR?: StringFieldUpdateOperationsInput | string
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendaCreateManyInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    CPFVENDEDOR: string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador_CPFCOMPR: string
  }

  export type VendaUpdateManyMutationInput = {
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VendaUncheckedUpdateManyInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    CPFVENDEDOR?: StringFieldUpdateOperationsInput | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador_CPFCOMPR?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosCreateInput = {
    KMVENDA: number
    TIPOVENDA: string
    venda: VendaCreateNestedOneWithoutCarrosVendidosInput
    automovel: AutomovelCreateNestedOneWithoutCarrosVendidosInput
  }

  export type CarrosVendidosUncheckedCreateInput = {
    NUMVENDA: number
    PLACAS: string
    KMVENDA: number
    TIPOVENDA: string
  }

  export type CarrosVendidosUpdateInput = {
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
    venda?: VendaUpdateOneRequiredWithoutCarrosVendidosNestedInput
    automovel?: AutomovelUpdateOneRequiredWithoutCarrosVendidosNestedInput
  }

  export type CarrosVendidosUncheckedUpdateInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    PLACAS?: StringFieldUpdateOperationsInput | string
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosCreateManyInput = {
    NUMVENDA: number
    PLACAS: string
    KMVENDA: number
    TIPOVENDA: string
  }

  export type CarrosVendidosUpdateManyMutationInput = {
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosUncheckedUpdateManyInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    PLACAS?: StringFieldUpdateOperationsInput | string
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type TiposGastosCreateInput = {
    DESCRICAO: string
    gastosRealizados?: GastosRealizadosCreateNestedManyWithoutTipoGastoInput
  }

  export type TiposGastosUncheckedCreateInput = {
    COD?: number
    DESCRICAO: string
    gastosRealizados?: GastosRealizadosUncheckedCreateNestedManyWithoutTipoGastoInput
  }

  export type TiposGastosUpdateInput = {
    DESCRICAO?: StringFieldUpdateOperationsInput | string
    gastosRealizados?: GastosRealizadosUpdateManyWithoutTipoGastoNestedInput
  }

  export type TiposGastosUncheckedUpdateInput = {
    COD?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: StringFieldUpdateOperationsInput | string
    gastosRealizados?: GastosRealizadosUncheckedUpdateManyWithoutTipoGastoNestedInput
  }

  export type TiposGastosCreateManyInput = {
    COD?: number
    DESCRICAO: string
  }

  export type TiposGastosUpdateManyMutationInput = {
    DESCRICAO?: StringFieldUpdateOperationsInput | string
  }

  export type TiposGastosUncheckedUpdateManyInput = {
    COD?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: StringFieldUpdateOperationsInput | string
  }

  export type GastosRealizadosCreateInput = {
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    automovel: AutomovelCreateNestedOneWithoutGastosRealizadosInput
    tipoGasto: TiposGastosCreateNestedOneWithoutGastosRealizadosInput
  }

  export type GastosRealizadosUncheckedCreateInput = {
    PLACAS: string
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    tipos_gastos_COD: number
  }

  export type GastosRealizadosUpdateInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    automovel?: AutomovelUpdateOneRequiredWithoutGastosRealizadosNestedInput
    tipoGasto?: TiposGastosUpdateOneRequiredWithoutGastosRealizadosNestedInput
  }

  export type GastosRealizadosUncheckedUpdateInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    tipos_gastos_COD?: IntFieldUpdateOperationsInput | number
  }

  export type GastosRealizadosCreateManyInput = {
    PLACAS: string
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    tipos_gastos_COD: number
  }

  export type GastosRealizadosUpdateManyMutationInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastosRealizadosUncheckedUpdateManyInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    tipos_gastos_COD?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AutomovelListRelationFilter = {
    every?: AutomovelWhereInput
    some?: AutomovelWhereInput
    none?: AutomovelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AutomovelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProprietarioOrderByRelevanceInput = {
    fields: ProprietarioOrderByRelevanceFieldEnum | ProprietarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProprietarioCountOrderByAggregateInput = {
    CPF_CNPJ?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    FONE?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type ProprietarioMaxOrderByAggregateInput = {
    CPF_CNPJ?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    FONE?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type ProprietarioMinOrderByAggregateInput = {
    CPF_CNPJ?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    FONE?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProprietarioScalarRelationFilter = {
    is?: ProprietarioWhereInput
    isNot?: ProprietarioWhereInput
  }

  export type CarrosVendidosListRelationFilter = {
    every?: CarrosVendidosWhereInput
    some?: CarrosVendidosWhereInput
    none?: CarrosVendidosWhereInput
  }

  export type GastosRealizadosListRelationFilter = {
    every?: GastosRealizadosWhereInput
    some?: GastosRealizadosWhereInput
    none?: GastosRealizadosWhereInput
  }

  export type CarrosVendidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GastosRealizadosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomovelOrderByRelevanceInput = {
    fields: AutomovelOrderByRelevanceFieldEnum | AutomovelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AutomovelCountOrderByAggregateInput = {
    PLACAS?: SortOrder
    MODELO?: SortOrder
    MARCA?: SortOrder
    ANO?: SortOrder
    COMBS?: SortOrder
    COR?: SortOrder
    CHASSI?: SortOrder
    DATAENTRADA?: SortOrder
    HORAENTRADA?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
    CPF_CNPJ?: SortOrder
  }

  export type AutomovelAvgOrderByAggregateInput = {
    ANO?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
  }

  export type AutomovelMaxOrderByAggregateInput = {
    PLACAS?: SortOrder
    MODELO?: SortOrder
    MARCA?: SortOrder
    ANO?: SortOrder
    COMBS?: SortOrder
    COR?: SortOrder
    CHASSI?: SortOrder
    DATAENTRADA?: SortOrder
    HORAENTRADA?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
    CPF_CNPJ?: SortOrder
  }

  export type AutomovelMinOrderByAggregateInput = {
    PLACAS?: SortOrder
    MODELO?: SortOrder
    MARCA?: SortOrder
    ANO?: SortOrder
    COMBS?: SortOrder
    COR?: SortOrder
    CHASSI?: SortOrder
    DATAENTRADA?: SortOrder
    HORAENTRADA?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
    CPF_CNPJ?: SortOrder
  }

  export type AutomovelSumOrderByAggregateInput = {
    ANO?: SortOrder
    KMENTRADA?: SortOrder
    VALORENTRADA?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VendaListRelationFilter = {
    every?: VendaWhereInput
    some?: VendaWhereInput
    none?: VendaWhereInput
  }

  export type VendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendedorOrderByRelevanceInput = {
    fields: VendedorOrderByRelevanceFieldEnum | VendedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendedorCountOrderByAggregateInput = {
    CPF?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type VendedorMaxOrderByAggregateInput = {
    CPF?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type VendedorMinOrderByAggregateInput = {
    CPF?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    BAIRRO?: SortOrder
    CIDADE?: SortOrder
    ESTADO?: SortOrder
  }

  export type CompradorOrderByRelevanceInput = {
    fields: CompradorOrderByRelevanceFieldEnum | CompradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompradorCountOrderByAggregateInput = {
    CPFCOMPR?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    CIDADE?: SortOrder
    BAIRRO?: SortOrder
    UF?: SortOrder
    CEP?: SortOrder
  }

  export type CompradorMaxOrderByAggregateInput = {
    CPFCOMPR?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    CIDADE?: SortOrder
    BAIRRO?: SortOrder
    UF?: SortOrder
    CEP?: SortOrder
  }

  export type CompradorMinOrderByAggregateInput = {
    CPFCOMPR?: SortOrder
    RG?: SortOrder
    NOME?: SortOrder
    ENDERECO?: SortOrder
    CIDADE?: SortOrder
    BAIRRO?: SortOrder
    UF?: SortOrder
    CEP?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VendedorScalarRelationFilter = {
    is?: VendedorWhereInput
    isNot?: VendedorWhereInput
  }

  export type CompradorScalarRelationFilter = {
    is?: CompradorWhereInput
    isNot?: CompradorWhereInput
  }

  export type VendaOrderByRelevanceInput = {
    fields: VendaOrderByRelevanceFieldEnum | VendaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VendaCountOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    DATAVENDA?: SortOrder
    HORAVENDA?: SortOrder
    CPFVENDEDOR?: SortOrder
    HORASAIDA?: SortOrder
    DATASAIDA?: SortOrder
    comprador_CPFCOMPR?: SortOrder
  }

  export type VendaAvgOrderByAggregateInput = {
    NUMVENDA?: SortOrder
  }

  export type VendaMaxOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    DATAVENDA?: SortOrder
    HORAVENDA?: SortOrder
    CPFVENDEDOR?: SortOrder
    HORASAIDA?: SortOrder
    DATASAIDA?: SortOrder
    comprador_CPFCOMPR?: SortOrder
  }

  export type VendaMinOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    DATAVENDA?: SortOrder
    HORAVENDA?: SortOrder
    CPFVENDEDOR?: SortOrder
    HORASAIDA?: SortOrder
    DATASAIDA?: SortOrder
    comprador_CPFCOMPR?: SortOrder
  }

  export type VendaSumOrderByAggregateInput = {
    NUMVENDA?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VendaScalarRelationFilter = {
    is?: VendaWhereInput
    isNot?: VendaWhereInput
  }

  export type AutomovelScalarRelationFilter = {
    is?: AutomovelWhereInput
    isNot?: AutomovelWhereInput
  }

  export type CarrosVendidosOrderByRelevanceInput = {
    fields: CarrosVendidosOrderByRelevanceFieldEnum | CarrosVendidosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CarrosVendidosPLACASNUMVENDACompoundUniqueInput = {
    PLACAS: string
    NUMVENDA: number
  }

  export type CarrosVendidosCountOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    PLACAS?: SortOrder
    KMVENDA?: SortOrder
    TIPOVENDA?: SortOrder
  }

  export type CarrosVendidosAvgOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    KMVENDA?: SortOrder
  }

  export type CarrosVendidosMaxOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    PLACAS?: SortOrder
    KMVENDA?: SortOrder
    TIPOVENDA?: SortOrder
  }

  export type CarrosVendidosMinOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    PLACAS?: SortOrder
    KMVENDA?: SortOrder
    TIPOVENDA?: SortOrder
  }

  export type CarrosVendidosSumOrderByAggregateInput = {
    NUMVENDA?: SortOrder
    KMVENDA?: SortOrder
  }

  export type TiposGastosOrderByRelevanceInput = {
    fields: TiposGastosOrderByRelevanceFieldEnum | TiposGastosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TiposGastosCountOrderByAggregateInput = {
    COD?: SortOrder
    DESCRICAO?: SortOrder
  }

  export type TiposGastosAvgOrderByAggregateInput = {
    COD?: SortOrder
  }

  export type TiposGastosMaxOrderByAggregateInput = {
    COD?: SortOrder
    DESCRICAO?: SortOrder
  }

  export type TiposGastosMinOrderByAggregateInput = {
    COD?: SortOrder
    DESCRICAO?: SortOrder
  }

  export type TiposGastosSumOrderByAggregateInput = {
    COD?: SortOrder
  }

  export type TiposGastosScalarRelationFilter = {
    is?: TiposGastosWhereInput
    isNot?: TiposGastosWhereInput
  }

  export type GastosRealizadosOrderByRelevanceInput = {
    fields: GastosRealizadosOrderByRelevanceFieldEnum | GastosRealizadosOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GastosRealizadosPLACASCODTIPOGASTOTipos_gastos_CODCompoundUniqueInput = {
    PLACAS: string
    CODTIPOGASTO: number
    tipos_gastos_COD: number
  }

  export type GastosRealizadosCountOrderByAggregateInput = {
    PLACAS?: SortOrder
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    DATA?: SortOrder
    tipos_gastos_COD?: SortOrder
  }

  export type GastosRealizadosAvgOrderByAggregateInput = {
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    tipos_gastos_COD?: SortOrder
  }

  export type GastosRealizadosMaxOrderByAggregateInput = {
    PLACAS?: SortOrder
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    DATA?: SortOrder
    tipos_gastos_COD?: SortOrder
  }

  export type GastosRealizadosMinOrderByAggregateInput = {
    PLACAS?: SortOrder
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    DATA?: SortOrder
    tipos_gastos_COD?: SortOrder
  }

  export type GastosRealizadosSumOrderByAggregateInput = {
    CODTIPOGASTO?: SortOrder
    VALORPAGO?: SortOrder
    tipos_gastos_COD?: SortOrder
  }

  export type AutomovelCreateNestedManyWithoutProprietarioInput = {
    create?: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput> | AutomovelCreateWithoutProprietarioInput[] | AutomovelUncheckedCreateWithoutProprietarioInput[]
    connectOrCreate?: AutomovelCreateOrConnectWithoutProprietarioInput | AutomovelCreateOrConnectWithoutProprietarioInput[]
    createMany?: AutomovelCreateManyProprietarioInputEnvelope
    connect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
  }

  export type AutomovelUncheckedCreateNestedManyWithoutProprietarioInput = {
    create?: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput> | AutomovelCreateWithoutProprietarioInput[] | AutomovelUncheckedCreateWithoutProprietarioInput[]
    connectOrCreate?: AutomovelCreateOrConnectWithoutProprietarioInput | AutomovelCreateOrConnectWithoutProprietarioInput[]
    createMany?: AutomovelCreateManyProprietarioInputEnvelope
    connect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AutomovelUpdateManyWithoutProprietarioNestedInput = {
    create?: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput> | AutomovelCreateWithoutProprietarioInput[] | AutomovelUncheckedCreateWithoutProprietarioInput[]
    connectOrCreate?: AutomovelCreateOrConnectWithoutProprietarioInput | AutomovelCreateOrConnectWithoutProprietarioInput[]
    upsert?: AutomovelUpsertWithWhereUniqueWithoutProprietarioInput | AutomovelUpsertWithWhereUniqueWithoutProprietarioInput[]
    createMany?: AutomovelCreateManyProprietarioInputEnvelope
    set?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    disconnect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    delete?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    connect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    update?: AutomovelUpdateWithWhereUniqueWithoutProprietarioInput | AutomovelUpdateWithWhereUniqueWithoutProprietarioInput[]
    updateMany?: AutomovelUpdateManyWithWhereWithoutProprietarioInput | AutomovelUpdateManyWithWhereWithoutProprietarioInput[]
    deleteMany?: AutomovelScalarWhereInput | AutomovelScalarWhereInput[]
  }

  export type AutomovelUncheckedUpdateManyWithoutProprietarioNestedInput = {
    create?: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput> | AutomovelCreateWithoutProprietarioInput[] | AutomovelUncheckedCreateWithoutProprietarioInput[]
    connectOrCreate?: AutomovelCreateOrConnectWithoutProprietarioInput | AutomovelCreateOrConnectWithoutProprietarioInput[]
    upsert?: AutomovelUpsertWithWhereUniqueWithoutProprietarioInput | AutomovelUpsertWithWhereUniqueWithoutProprietarioInput[]
    createMany?: AutomovelCreateManyProprietarioInputEnvelope
    set?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    disconnect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    delete?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    connect?: AutomovelWhereUniqueInput | AutomovelWhereUniqueInput[]
    update?: AutomovelUpdateWithWhereUniqueWithoutProprietarioInput | AutomovelUpdateWithWhereUniqueWithoutProprietarioInput[]
    updateMany?: AutomovelUpdateManyWithWhereWithoutProprietarioInput | AutomovelUpdateManyWithWhereWithoutProprietarioInput[]
    deleteMany?: AutomovelScalarWhereInput | AutomovelScalarWhereInput[]
  }

  export type ProprietarioCreateNestedOneWithoutAutomoveisInput = {
    create?: XOR<ProprietarioCreateWithoutAutomoveisInput, ProprietarioUncheckedCreateWithoutAutomoveisInput>
    connectOrCreate?: ProprietarioCreateOrConnectWithoutAutomoveisInput
    connect?: ProprietarioWhereUniqueInput
  }

  export type CarrosVendidosCreateNestedManyWithoutAutomovelInput = {
    create?: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput> | CarrosVendidosCreateWithoutAutomovelInput[] | CarrosVendidosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutAutomovelInput | CarrosVendidosCreateOrConnectWithoutAutomovelInput[]
    createMany?: CarrosVendidosCreateManyAutomovelInputEnvelope
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
  }

  export type GastosRealizadosCreateNestedManyWithoutAutomovelInput = {
    create?: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput> | GastosRealizadosCreateWithoutAutomovelInput[] | GastosRealizadosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutAutomovelInput | GastosRealizadosCreateOrConnectWithoutAutomovelInput[]
    createMany?: GastosRealizadosCreateManyAutomovelInputEnvelope
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
  }

  export type CarrosVendidosUncheckedCreateNestedManyWithoutAutomovelInput = {
    create?: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput> | CarrosVendidosCreateWithoutAutomovelInput[] | CarrosVendidosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutAutomovelInput | CarrosVendidosCreateOrConnectWithoutAutomovelInput[]
    createMany?: CarrosVendidosCreateManyAutomovelInputEnvelope
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
  }

  export type GastosRealizadosUncheckedCreateNestedManyWithoutAutomovelInput = {
    create?: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput> | GastosRealizadosCreateWithoutAutomovelInput[] | GastosRealizadosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutAutomovelInput | GastosRealizadosCreateOrConnectWithoutAutomovelInput[]
    createMany?: GastosRealizadosCreateManyAutomovelInputEnvelope
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ProprietarioUpdateOneRequiredWithoutAutomoveisNestedInput = {
    create?: XOR<ProprietarioCreateWithoutAutomoveisInput, ProprietarioUncheckedCreateWithoutAutomoveisInput>
    connectOrCreate?: ProprietarioCreateOrConnectWithoutAutomoveisInput
    upsert?: ProprietarioUpsertWithoutAutomoveisInput
    connect?: ProprietarioWhereUniqueInput
    update?: XOR<XOR<ProprietarioUpdateToOneWithWhereWithoutAutomoveisInput, ProprietarioUpdateWithoutAutomoveisInput>, ProprietarioUncheckedUpdateWithoutAutomoveisInput>
  }

  export type CarrosVendidosUpdateManyWithoutAutomovelNestedInput = {
    create?: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput> | CarrosVendidosCreateWithoutAutomovelInput[] | CarrosVendidosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutAutomovelInput | CarrosVendidosCreateOrConnectWithoutAutomovelInput[]
    upsert?: CarrosVendidosUpsertWithWhereUniqueWithoutAutomovelInput | CarrosVendidosUpsertWithWhereUniqueWithoutAutomovelInput[]
    createMany?: CarrosVendidosCreateManyAutomovelInputEnvelope
    set?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    disconnect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    delete?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    update?: CarrosVendidosUpdateWithWhereUniqueWithoutAutomovelInput | CarrosVendidosUpdateWithWhereUniqueWithoutAutomovelInput[]
    updateMany?: CarrosVendidosUpdateManyWithWhereWithoutAutomovelInput | CarrosVendidosUpdateManyWithWhereWithoutAutomovelInput[]
    deleteMany?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
  }

  export type GastosRealizadosUpdateManyWithoutAutomovelNestedInput = {
    create?: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput> | GastosRealizadosCreateWithoutAutomovelInput[] | GastosRealizadosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutAutomovelInput | GastosRealizadosCreateOrConnectWithoutAutomovelInput[]
    upsert?: GastosRealizadosUpsertWithWhereUniqueWithoutAutomovelInput | GastosRealizadosUpsertWithWhereUniqueWithoutAutomovelInput[]
    createMany?: GastosRealizadosCreateManyAutomovelInputEnvelope
    set?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    disconnect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    delete?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    update?: GastosRealizadosUpdateWithWhereUniqueWithoutAutomovelInput | GastosRealizadosUpdateWithWhereUniqueWithoutAutomovelInput[]
    updateMany?: GastosRealizadosUpdateManyWithWhereWithoutAutomovelInput | GastosRealizadosUpdateManyWithWhereWithoutAutomovelInput[]
    deleteMany?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
  }

  export type CarrosVendidosUncheckedUpdateManyWithoutAutomovelNestedInput = {
    create?: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput> | CarrosVendidosCreateWithoutAutomovelInput[] | CarrosVendidosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutAutomovelInput | CarrosVendidosCreateOrConnectWithoutAutomovelInput[]
    upsert?: CarrosVendidosUpsertWithWhereUniqueWithoutAutomovelInput | CarrosVendidosUpsertWithWhereUniqueWithoutAutomovelInput[]
    createMany?: CarrosVendidosCreateManyAutomovelInputEnvelope
    set?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    disconnect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    delete?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    update?: CarrosVendidosUpdateWithWhereUniqueWithoutAutomovelInput | CarrosVendidosUpdateWithWhereUniqueWithoutAutomovelInput[]
    updateMany?: CarrosVendidosUpdateManyWithWhereWithoutAutomovelInput | CarrosVendidosUpdateManyWithWhereWithoutAutomovelInput[]
    deleteMany?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
  }

  export type GastosRealizadosUncheckedUpdateManyWithoutAutomovelNestedInput = {
    create?: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput> | GastosRealizadosCreateWithoutAutomovelInput[] | GastosRealizadosUncheckedCreateWithoutAutomovelInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutAutomovelInput | GastosRealizadosCreateOrConnectWithoutAutomovelInput[]
    upsert?: GastosRealizadosUpsertWithWhereUniqueWithoutAutomovelInput | GastosRealizadosUpsertWithWhereUniqueWithoutAutomovelInput[]
    createMany?: GastosRealizadosCreateManyAutomovelInputEnvelope
    set?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    disconnect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    delete?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    update?: GastosRealizadosUpdateWithWhereUniqueWithoutAutomovelInput | GastosRealizadosUpdateWithWhereUniqueWithoutAutomovelInput[]
    updateMany?: GastosRealizadosUpdateManyWithWhereWithoutAutomovelInput | GastosRealizadosUpdateManyWithWhereWithoutAutomovelInput[]
    deleteMany?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
  }

  export type VendaCreateNestedManyWithoutVendedorInput = {
    create?: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput> | VendaCreateWithoutVendedorInput[] | VendaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutVendedorInput | VendaCreateOrConnectWithoutVendedorInput[]
    createMany?: VendaCreateManyVendedorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUncheckedCreateNestedManyWithoutVendedorInput = {
    create?: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput> | VendaCreateWithoutVendedorInput[] | VendaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutVendedorInput | VendaCreateOrConnectWithoutVendedorInput[]
    createMany?: VendaCreateManyVendedorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput> | VendaCreateWithoutVendedorInput[] | VendaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutVendedorInput | VendaCreateOrConnectWithoutVendedorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutVendedorInput | VendaUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: VendaCreateManyVendedorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutVendedorInput | VendaUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutVendedorInput | VendaUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendaUncheckedUpdateManyWithoutVendedorNestedInput = {
    create?: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput> | VendaCreateWithoutVendedorInput[] | VendaUncheckedCreateWithoutVendedorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutVendedorInput | VendaCreateOrConnectWithoutVendedorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutVendedorInput | VendaUpsertWithWhereUniqueWithoutVendedorInput[]
    createMany?: VendaCreateManyVendedorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutVendedorInput | VendaUpdateWithWhereUniqueWithoutVendedorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutVendedorInput | VendaUpdateManyWithWhereWithoutVendedorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendaCreateNestedManyWithoutCompradorInput = {
    create?: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput> | VendaCreateWithoutCompradorInput[] | VendaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutCompradorInput | VendaCreateOrConnectWithoutCompradorInput[]
    createMany?: VendaCreateManyCompradorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUncheckedCreateNestedManyWithoutCompradorInput = {
    create?: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput> | VendaCreateWithoutCompradorInput[] | VendaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutCompradorInput | VendaCreateOrConnectWithoutCompradorInput[]
    createMany?: VendaCreateManyCompradorInputEnvelope
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
  }

  export type VendaUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput> | VendaCreateWithoutCompradorInput[] | VendaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutCompradorInput | VendaCreateOrConnectWithoutCompradorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutCompradorInput | VendaUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: VendaCreateManyCompradorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutCompradorInput | VendaUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutCompradorInput | VendaUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendaUncheckedUpdateManyWithoutCompradorNestedInput = {
    create?: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput> | VendaCreateWithoutCompradorInput[] | VendaUncheckedCreateWithoutCompradorInput[]
    connectOrCreate?: VendaCreateOrConnectWithoutCompradorInput | VendaCreateOrConnectWithoutCompradorInput[]
    upsert?: VendaUpsertWithWhereUniqueWithoutCompradorInput | VendaUpsertWithWhereUniqueWithoutCompradorInput[]
    createMany?: VendaCreateManyCompradorInputEnvelope
    set?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    disconnect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    delete?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    connect?: VendaWhereUniqueInput | VendaWhereUniqueInput[]
    update?: VendaUpdateWithWhereUniqueWithoutCompradorInput | VendaUpdateWithWhereUniqueWithoutCompradorInput[]
    updateMany?: VendaUpdateManyWithWhereWithoutCompradorInput | VendaUpdateManyWithWhereWithoutCompradorInput[]
    deleteMany?: VendaScalarWhereInput | VendaScalarWhereInput[]
  }

  export type VendedorCreateNestedOneWithoutVendasInput = {
    create?: XOR<VendedorCreateWithoutVendasInput, VendedorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutVendasInput
    connect?: VendedorWhereUniqueInput
  }

  export type CompradorCreateNestedOneWithoutVendasInput = {
    create?: XOR<CompradorCreateWithoutVendasInput, CompradorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: CompradorCreateOrConnectWithoutVendasInput
    connect?: CompradorWhereUniqueInput
  }

  export type CarrosVendidosCreateNestedManyWithoutVendaInput = {
    create?: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput> | CarrosVendidosCreateWithoutVendaInput[] | CarrosVendidosUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutVendaInput | CarrosVendidosCreateOrConnectWithoutVendaInput[]
    createMany?: CarrosVendidosCreateManyVendaInputEnvelope
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
  }

  export type CarrosVendidosUncheckedCreateNestedManyWithoutVendaInput = {
    create?: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput> | CarrosVendidosCreateWithoutVendaInput[] | CarrosVendidosUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutVendaInput | CarrosVendidosCreateOrConnectWithoutVendaInput[]
    createMany?: CarrosVendidosCreateManyVendaInputEnvelope
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VendedorUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<VendedorCreateWithoutVendasInput, VendedorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: VendedorCreateOrConnectWithoutVendasInput
    upsert?: VendedorUpsertWithoutVendasInput
    connect?: VendedorWhereUniqueInput
    update?: XOR<XOR<VendedorUpdateToOneWithWhereWithoutVendasInput, VendedorUpdateWithoutVendasInput>, VendedorUncheckedUpdateWithoutVendasInput>
  }

  export type CompradorUpdateOneRequiredWithoutVendasNestedInput = {
    create?: XOR<CompradorCreateWithoutVendasInput, CompradorUncheckedCreateWithoutVendasInput>
    connectOrCreate?: CompradorCreateOrConnectWithoutVendasInput
    upsert?: CompradorUpsertWithoutVendasInput
    connect?: CompradorWhereUniqueInput
    update?: XOR<XOR<CompradorUpdateToOneWithWhereWithoutVendasInput, CompradorUpdateWithoutVendasInput>, CompradorUncheckedUpdateWithoutVendasInput>
  }

  export type CarrosVendidosUpdateManyWithoutVendaNestedInput = {
    create?: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput> | CarrosVendidosCreateWithoutVendaInput[] | CarrosVendidosUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutVendaInput | CarrosVendidosCreateOrConnectWithoutVendaInput[]
    upsert?: CarrosVendidosUpsertWithWhereUniqueWithoutVendaInput | CarrosVendidosUpsertWithWhereUniqueWithoutVendaInput[]
    createMany?: CarrosVendidosCreateManyVendaInputEnvelope
    set?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    disconnect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    delete?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    update?: CarrosVendidosUpdateWithWhereUniqueWithoutVendaInput | CarrosVendidosUpdateWithWhereUniqueWithoutVendaInput[]
    updateMany?: CarrosVendidosUpdateManyWithWhereWithoutVendaInput | CarrosVendidosUpdateManyWithWhereWithoutVendaInput[]
    deleteMany?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
  }

  export type CarrosVendidosUncheckedUpdateManyWithoutVendaNestedInput = {
    create?: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput> | CarrosVendidosCreateWithoutVendaInput[] | CarrosVendidosUncheckedCreateWithoutVendaInput[]
    connectOrCreate?: CarrosVendidosCreateOrConnectWithoutVendaInput | CarrosVendidosCreateOrConnectWithoutVendaInput[]
    upsert?: CarrosVendidosUpsertWithWhereUniqueWithoutVendaInput | CarrosVendidosUpsertWithWhereUniqueWithoutVendaInput[]
    createMany?: CarrosVendidosCreateManyVendaInputEnvelope
    set?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    disconnect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    delete?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    connect?: CarrosVendidosWhereUniqueInput | CarrosVendidosWhereUniqueInput[]
    update?: CarrosVendidosUpdateWithWhereUniqueWithoutVendaInput | CarrosVendidosUpdateWithWhereUniqueWithoutVendaInput[]
    updateMany?: CarrosVendidosUpdateManyWithWhereWithoutVendaInput | CarrosVendidosUpdateManyWithWhereWithoutVendaInput[]
    deleteMany?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
  }

  export type VendaCreateNestedOneWithoutCarrosVendidosInput = {
    create?: XOR<VendaCreateWithoutCarrosVendidosInput, VendaUncheckedCreateWithoutCarrosVendidosInput>
    connectOrCreate?: VendaCreateOrConnectWithoutCarrosVendidosInput
    connect?: VendaWhereUniqueInput
  }

  export type AutomovelCreateNestedOneWithoutCarrosVendidosInput = {
    create?: XOR<AutomovelCreateWithoutCarrosVendidosInput, AutomovelUncheckedCreateWithoutCarrosVendidosInput>
    connectOrCreate?: AutomovelCreateOrConnectWithoutCarrosVendidosInput
    connect?: AutomovelWhereUniqueInput
  }

  export type VendaUpdateOneRequiredWithoutCarrosVendidosNestedInput = {
    create?: XOR<VendaCreateWithoutCarrosVendidosInput, VendaUncheckedCreateWithoutCarrosVendidosInput>
    connectOrCreate?: VendaCreateOrConnectWithoutCarrosVendidosInput
    upsert?: VendaUpsertWithoutCarrosVendidosInput
    connect?: VendaWhereUniqueInput
    update?: XOR<XOR<VendaUpdateToOneWithWhereWithoutCarrosVendidosInput, VendaUpdateWithoutCarrosVendidosInput>, VendaUncheckedUpdateWithoutCarrosVendidosInput>
  }

  export type AutomovelUpdateOneRequiredWithoutCarrosVendidosNestedInput = {
    create?: XOR<AutomovelCreateWithoutCarrosVendidosInput, AutomovelUncheckedCreateWithoutCarrosVendidosInput>
    connectOrCreate?: AutomovelCreateOrConnectWithoutCarrosVendidosInput
    upsert?: AutomovelUpsertWithoutCarrosVendidosInput
    connect?: AutomovelWhereUniqueInput
    update?: XOR<XOR<AutomovelUpdateToOneWithWhereWithoutCarrosVendidosInput, AutomovelUpdateWithoutCarrosVendidosInput>, AutomovelUncheckedUpdateWithoutCarrosVendidosInput>
  }

  export type GastosRealizadosCreateNestedManyWithoutTipoGastoInput = {
    create?: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput> | GastosRealizadosCreateWithoutTipoGastoInput[] | GastosRealizadosUncheckedCreateWithoutTipoGastoInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutTipoGastoInput | GastosRealizadosCreateOrConnectWithoutTipoGastoInput[]
    createMany?: GastosRealizadosCreateManyTipoGastoInputEnvelope
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
  }

  export type GastosRealizadosUncheckedCreateNestedManyWithoutTipoGastoInput = {
    create?: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput> | GastosRealizadosCreateWithoutTipoGastoInput[] | GastosRealizadosUncheckedCreateWithoutTipoGastoInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutTipoGastoInput | GastosRealizadosCreateOrConnectWithoutTipoGastoInput[]
    createMany?: GastosRealizadosCreateManyTipoGastoInputEnvelope
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
  }

  export type GastosRealizadosUpdateManyWithoutTipoGastoNestedInput = {
    create?: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput> | GastosRealizadosCreateWithoutTipoGastoInput[] | GastosRealizadosUncheckedCreateWithoutTipoGastoInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutTipoGastoInput | GastosRealizadosCreateOrConnectWithoutTipoGastoInput[]
    upsert?: GastosRealizadosUpsertWithWhereUniqueWithoutTipoGastoInput | GastosRealizadosUpsertWithWhereUniqueWithoutTipoGastoInput[]
    createMany?: GastosRealizadosCreateManyTipoGastoInputEnvelope
    set?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    disconnect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    delete?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    update?: GastosRealizadosUpdateWithWhereUniqueWithoutTipoGastoInput | GastosRealizadosUpdateWithWhereUniqueWithoutTipoGastoInput[]
    updateMany?: GastosRealizadosUpdateManyWithWhereWithoutTipoGastoInput | GastosRealizadosUpdateManyWithWhereWithoutTipoGastoInput[]
    deleteMany?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
  }

  export type GastosRealizadosUncheckedUpdateManyWithoutTipoGastoNestedInput = {
    create?: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput> | GastosRealizadosCreateWithoutTipoGastoInput[] | GastosRealizadosUncheckedCreateWithoutTipoGastoInput[]
    connectOrCreate?: GastosRealizadosCreateOrConnectWithoutTipoGastoInput | GastosRealizadosCreateOrConnectWithoutTipoGastoInput[]
    upsert?: GastosRealizadosUpsertWithWhereUniqueWithoutTipoGastoInput | GastosRealizadosUpsertWithWhereUniqueWithoutTipoGastoInput[]
    createMany?: GastosRealizadosCreateManyTipoGastoInputEnvelope
    set?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    disconnect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    delete?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    connect?: GastosRealizadosWhereUniqueInput | GastosRealizadosWhereUniqueInput[]
    update?: GastosRealizadosUpdateWithWhereUniqueWithoutTipoGastoInput | GastosRealizadosUpdateWithWhereUniqueWithoutTipoGastoInput[]
    updateMany?: GastosRealizadosUpdateManyWithWhereWithoutTipoGastoInput | GastosRealizadosUpdateManyWithWhereWithoutTipoGastoInput[]
    deleteMany?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
  }

  export type AutomovelCreateNestedOneWithoutGastosRealizadosInput = {
    create?: XOR<AutomovelCreateWithoutGastosRealizadosInput, AutomovelUncheckedCreateWithoutGastosRealizadosInput>
    connectOrCreate?: AutomovelCreateOrConnectWithoutGastosRealizadosInput
    connect?: AutomovelWhereUniqueInput
  }

  export type TiposGastosCreateNestedOneWithoutGastosRealizadosInput = {
    create?: XOR<TiposGastosCreateWithoutGastosRealizadosInput, TiposGastosUncheckedCreateWithoutGastosRealizadosInput>
    connectOrCreate?: TiposGastosCreateOrConnectWithoutGastosRealizadosInput
    connect?: TiposGastosWhereUniqueInput
  }

  export type AutomovelUpdateOneRequiredWithoutGastosRealizadosNestedInput = {
    create?: XOR<AutomovelCreateWithoutGastosRealizadosInput, AutomovelUncheckedCreateWithoutGastosRealizadosInput>
    connectOrCreate?: AutomovelCreateOrConnectWithoutGastosRealizadosInput
    upsert?: AutomovelUpsertWithoutGastosRealizadosInput
    connect?: AutomovelWhereUniqueInput
    update?: XOR<XOR<AutomovelUpdateToOneWithWhereWithoutGastosRealizadosInput, AutomovelUpdateWithoutGastosRealizadosInput>, AutomovelUncheckedUpdateWithoutGastosRealizadosInput>
  }

  export type TiposGastosUpdateOneRequiredWithoutGastosRealizadosNestedInput = {
    create?: XOR<TiposGastosCreateWithoutGastosRealizadosInput, TiposGastosUncheckedCreateWithoutGastosRealizadosInput>
    connectOrCreate?: TiposGastosCreateOrConnectWithoutGastosRealizadosInput
    upsert?: TiposGastosUpsertWithoutGastosRealizadosInput
    connect?: TiposGastosWhereUniqueInput
    update?: XOR<XOR<TiposGastosUpdateToOneWithWhereWithoutGastosRealizadosInput, TiposGastosUpdateWithoutGastosRealizadosInput>, TiposGastosUncheckedUpdateWithoutGastosRealizadosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AutomovelCreateWithoutProprietarioInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutAutomovelInput
    gastosRealizados?: GastosRealizadosCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelUncheckedCreateWithoutProprietarioInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutAutomovelInput
    gastosRealizados?: GastosRealizadosUncheckedCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelCreateOrConnectWithoutProprietarioInput = {
    where: AutomovelWhereUniqueInput
    create: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput>
  }

  export type AutomovelCreateManyProprietarioInputEnvelope = {
    data: AutomovelCreateManyProprietarioInput | AutomovelCreateManyProprietarioInput[]
    skipDuplicates?: boolean
  }

  export type AutomovelUpsertWithWhereUniqueWithoutProprietarioInput = {
    where: AutomovelWhereUniqueInput
    update: XOR<AutomovelUpdateWithoutProprietarioInput, AutomovelUncheckedUpdateWithoutProprietarioInput>
    create: XOR<AutomovelCreateWithoutProprietarioInput, AutomovelUncheckedCreateWithoutProprietarioInput>
  }

  export type AutomovelUpdateWithWhereUniqueWithoutProprietarioInput = {
    where: AutomovelWhereUniqueInput
    data: XOR<AutomovelUpdateWithoutProprietarioInput, AutomovelUncheckedUpdateWithoutProprietarioInput>
  }

  export type AutomovelUpdateManyWithWhereWithoutProprietarioInput = {
    where: AutomovelScalarWhereInput
    data: XOR<AutomovelUpdateManyMutationInput, AutomovelUncheckedUpdateManyWithoutProprietarioInput>
  }

  export type AutomovelScalarWhereInput = {
    AND?: AutomovelScalarWhereInput | AutomovelScalarWhereInput[]
    OR?: AutomovelScalarWhereInput[]
    NOT?: AutomovelScalarWhereInput | AutomovelScalarWhereInput[]
    PLACAS?: StringFilter<"Automovel"> | string
    MODELO?: StringFilter<"Automovel"> | string
    MARCA?: StringFilter<"Automovel"> | string
    ANO?: IntFilter<"Automovel"> | number
    COMBS?: StringFilter<"Automovel"> | string
    COR?: StringFilter<"Automovel"> | string
    CHASSI?: StringFilter<"Automovel"> | string
    DATAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    HORAENTRADA?: DateTimeFilter<"Automovel"> | Date | string
    KMENTRADA?: IntFilter<"Automovel"> | number
    VALORENTRADA?: DecimalFilter<"Automovel"> | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFilter<"Automovel"> | string
  }

  export type ProprietarioCreateWithoutAutomoveisInput = {
    CPF_CNPJ: string
    RG?: string | null
    NOME: string
    FONE: string
    ENDERECO?: string | null
    BAIRRO?: string | null
    CIDADE?: string | null
    ESTADO?: string | null
  }

  export type ProprietarioUncheckedCreateWithoutAutomoveisInput = {
    CPF_CNPJ: string
    RG?: string | null
    NOME: string
    FONE: string
    ENDERECO?: string | null
    BAIRRO?: string | null
    CIDADE?: string | null
    ESTADO?: string | null
  }

  export type ProprietarioCreateOrConnectWithoutAutomoveisInput = {
    where: ProprietarioWhereUniqueInput
    create: XOR<ProprietarioCreateWithoutAutomoveisInput, ProprietarioUncheckedCreateWithoutAutomoveisInput>
  }

  export type CarrosVendidosCreateWithoutAutomovelInput = {
    KMVENDA: number
    TIPOVENDA: string
    venda: VendaCreateNestedOneWithoutCarrosVendidosInput
  }

  export type CarrosVendidosUncheckedCreateWithoutAutomovelInput = {
    NUMVENDA: number
    KMVENDA: number
    TIPOVENDA: string
  }

  export type CarrosVendidosCreateOrConnectWithoutAutomovelInput = {
    where: CarrosVendidosWhereUniqueInput
    create: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput>
  }

  export type CarrosVendidosCreateManyAutomovelInputEnvelope = {
    data: CarrosVendidosCreateManyAutomovelInput | CarrosVendidosCreateManyAutomovelInput[]
    skipDuplicates?: boolean
  }

  export type GastosRealizadosCreateWithoutAutomovelInput = {
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    tipoGasto: TiposGastosCreateNestedOneWithoutGastosRealizadosInput
  }

  export type GastosRealizadosUncheckedCreateWithoutAutomovelInput = {
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    tipos_gastos_COD: number
  }

  export type GastosRealizadosCreateOrConnectWithoutAutomovelInput = {
    where: GastosRealizadosWhereUniqueInput
    create: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput>
  }

  export type GastosRealizadosCreateManyAutomovelInputEnvelope = {
    data: GastosRealizadosCreateManyAutomovelInput | GastosRealizadosCreateManyAutomovelInput[]
    skipDuplicates?: boolean
  }

  export type ProprietarioUpsertWithoutAutomoveisInput = {
    update: XOR<ProprietarioUpdateWithoutAutomoveisInput, ProprietarioUncheckedUpdateWithoutAutomoveisInput>
    create: XOR<ProprietarioCreateWithoutAutomoveisInput, ProprietarioUncheckedCreateWithoutAutomoveisInput>
    where?: ProprietarioWhereInput
  }

  export type ProprietarioUpdateToOneWithWhereWithoutAutomoveisInput = {
    where?: ProprietarioWhereInput
    data: XOR<ProprietarioUpdateWithoutAutomoveisInput, ProprietarioUncheckedUpdateWithoutAutomoveisInput>
  }

  export type ProprietarioUpdateWithoutAutomoveisInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProprietarioUncheckedUpdateWithoutAutomoveisInput = {
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    NOME?: StringFieldUpdateOperationsInput | string
    FONE?: StringFieldUpdateOperationsInput | string
    ENDERECO?: NullableStringFieldUpdateOperationsInput | string | null
    BAIRRO?: NullableStringFieldUpdateOperationsInput | string | null
    CIDADE?: NullableStringFieldUpdateOperationsInput | string | null
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarrosVendidosUpsertWithWhereUniqueWithoutAutomovelInput = {
    where: CarrosVendidosWhereUniqueInput
    update: XOR<CarrosVendidosUpdateWithoutAutomovelInput, CarrosVendidosUncheckedUpdateWithoutAutomovelInput>
    create: XOR<CarrosVendidosCreateWithoutAutomovelInput, CarrosVendidosUncheckedCreateWithoutAutomovelInput>
  }

  export type CarrosVendidosUpdateWithWhereUniqueWithoutAutomovelInput = {
    where: CarrosVendidosWhereUniqueInput
    data: XOR<CarrosVendidosUpdateWithoutAutomovelInput, CarrosVendidosUncheckedUpdateWithoutAutomovelInput>
  }

  export type CarrosVendidosUpdateManyWithWhereWithoutAutomovelInput = {
    where: CarrosVendidosScalarWhereInput
    data: XOR<CarrosVendidosUpdateManyMutationInput, CarrosVendidosUncheckedUpdateManyWithoutAutomovelInput>
  }

  export type CarrosVendidosScalarWhereInput = {
    AND?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
    OR?: CarrosVendidosScalarWhereInput[]
    NOT?: CarrosVendidosScalarWhereInput | CarrosVendidosScalarWhereInput[]
    NUMVENDA?: IntFilter<"CarrosVendidos"> | number
    PLACAS?: StringFilter<"CarrosVendidos"> | string
    KMVENDA?: IntFilter<"CarrosVendidos"> | number
    TIPOVENDA?: StringFilter<"CarrosVendidos"> | string
  }

  export type GastosRealizadosUpsertWithWhereUniqueWithoutAutomovelInput = {
    where: GastosRealizadosWhereUniqueInput
    update: XOR<GastosRealizadosUpdateWithoutAutomovelInput, GastosRealizadosUncheckedUpdateWithoutAutomovelInput>
    create: XOR<GastosRealizadosCreateWithoutAutomovelInput, GastosRealizadosUncheckedCreateWithoutAutomovelInput>
  }

  export type GastosRealizadosUpdateWithWhereUniqueWithoutAutomovelInput = {
    where: GastosRealizadosWhereUniqueInput
    data: XOR<GastosRealizadosUpdateWithoutAutomovelInput, GastosRealizadosUncheckedUpdateWithoutAutomovelInput>
  }

  export type GastosRealizadosUpdateManyWithWhereWithoutAutomovelInput = {
    where: GastosRealizadosScalarWhereInput
    data: XOR<GastosRealizadosUpdateManyMutationInput, GastosRealizadosUncheckedUpdateManyWithoutAutomovelInput>
  }

  export type GastosRealizadosScalarWhereInput = {
    AND?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
    OR?: GastosRealizadosScalarWhereInput[]
    NOT?: GastosRealizadosScalarWhereInput | GastosRealizadosScalarWhereInput[]
    PLACAS?: StringFilter<"GastosRealizados"> | string
    CODTIPOGASTO?: IntFilter<"GastosRealizados"> | number
    VALORPAGO?: DecimalFilter<"GastosRealizados"> | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFilter<"GastosRealizados"> | Date | string
    tipos_gastos_COD?: IntFilter<"GastosRealizados"> | number
  }

  export type VendaCreateWithoutVendedorInput = {
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador: CompradorCreateNestedOneWithoutVendasInput
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutVendaInput
  }

  export type VendaUncheckedCreateWithoutVendedorInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador_CPFCOMPR: string
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendaCreateOrConnectWithoutVendedorInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput>
  }

  export type VendaCreateManyVendedorInputEnvelope = {
    data: VendaCreateManyVendedorInput | VendaCreateManyVendedorInput[]
    skipDuplicates?: boolean
  }

  export type VendaUpsertWithWhereUniqueWithoutVendedorInput = {
    where: VendaWhereUniqueInput
    update: XOR<VendaUpdateWithoutVendedorInput, VendaUncheckedUpdateWithoutVendedorInput>
    create: XOR<VendaCreateWithoutVendedorInput, VendaUncheckedCreateWithoutVendedorInput>
  }

  export type VendaUpdateWithWhereUniqueWithoutVendedorInput = {
    where: VendaWhereUniqueInput
    data: XOR<VendaUpdateWithoutVendedorInput, VendaUncheckedUpdateWithoutVendedorInput>
  }

  export type VendaUpdateManyWithWhereWithoutVendedorInput = {
    where: VendaScalarWhereInput
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyWithoutVendedorInput>
  }

  export type VendaScalarWhereInput = {
    AND?: VendaScalarWhereInput | VendaScalarWhereInput[]
    OR?: VendaScalarWhereInput[]
    NOT?: VendaScalarWhereInput | VendaScalarWhereInput[]
    NUMVENDA?: IntFilter<"Venda"> | number
    DATAVENDA?: DateTimeFilter<"Venda"> | Date | string
    HORAVENDA?: DateTimeFilter<"Venda"> | Date | string
    CPFVENDEDOR?: StringFilter<"Venda"> | string
    HORASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    DATASAIDA?: DateTimeNullableFilter<"Venda"> | Date | string | null
    comprador_CPFCOMPR?: StringFilter<"Venda"> | string
  }

  export type VendaCreateWithoutCompradorInput = {
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    vendedor: VendedorCreateNestedOneWithoutVendasInput
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutVendaInput
  }

  export type VendaUncheckedCreateWithoutCompradorInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    CPFVENDEDOR: string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutVendaInput
  }

  export type VendaCreateOrConnectWithoutCompradorInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput>
  }

  export type VendaCreateManyCompradorInputEnvelope = {
    data: VendaCreateManyCompradorInput | VendaCreateManyCompradorInput[]
    skipDuplicates?: boolean
  }

  export type VendaUpsertWithWhereUniqueWithoutCompradorInput = {
    where: VendaWhereUniqueInput
    update: XOR<VendaUpdateWithoutCompradorInput, VendaUncheckedUpdateWithoutCompradorInput>
    create: XOR<VendaCreateWithoutCompradorInput, VendaUncheckedCreateWithoutCompradorInput>
  }

  export type VendaUpdateWithWhereUniqueWithoutCompradorInput = {
    where: VendaWhereUniqueInput
    data: XOR<VendaUpdateWithoutCompradorInput, VendaUncheckedUpdateWithoutCompradorInput>
  }

  export type VendaUpdateManyWithWhereWithoutCompradorInput = {
    where: VendaScalarWhereInput
    data: XOR<VendaUpdateManyMutationInput, VendaUncheckedUpdateManyWithoutCompradorInput>
  }

  export type VendedorCreateWithoutVendasInput = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
  }

  export type VendedorUncheckedCreateWithoutVendasInput = {
    CPF: string
    RG: string
    NOME: string
    ENDERECO: string
    BAIRRO: string
    CIDADE: string
    ESTADO: string
  }

  export type VendedorCreateOrConnectWithoutVendasInput = {
    where: VendedorWhereUniqueInput
    create: XOR<VendedorCreateWithoutVendasInput, VendedorUncheckedCreateWithoutVendasInput>
  }

  export type CompradorCreateWithoutVendasInput = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
  }

  export type CompradorUncheckedCreateWithoutVendasInput = {
    CPFCOMPR: string
    RG: string
    NOME: string
    ENDERECO: string
    CIDADE: string
    BAIRRO: string
    UF: string
    CEP: string
  }

  export type CompradorCreateOrConnectWithoutVendasInput = {
    where: CompradorWhereUniqueInput
    create: XOR<CompradorCreateWithoutVendasInput, CompradorUncheckedCreateWithoutVendasInput>
  }

  export type CarrosVendidosCreateWithoutVendaInput = {
    KMVENDA: number
    TIPOVENDA: string
    automovel: AutomovelCreateNestedOneWithoutCarrosVendidosInput
  }

  export type CarrosVendidosUncheckedCreateWithoutVendaInput = {
    PLACAS: string
    KMVENDA: number
    TIPOVENDA: string
  }

  export type CarrosVendidosCreateOrConnectWithoutVendaInput = {
    where: CarrosVendidosWhereUniqueInput
    create: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput>
  }

  export type CarrosVendidosCreateManyVendaInputEnvelope = {
    data: CarrosVendidosCreateManyVendaInput | CarrosVendidosCreateManyVendaInput[]
    skipDuplicates?: boolean
  }

  export type VendedorUpsertWithoutVendasInput = {
    update: XOR<VendedorUpdateWithoutVendasInput, VendedorUncheckedUpdateWithoutVendasInput>
    create: XOR<VendedorCreateWithoutVendasInput, VendedorUncheckedCreateWithoutVendasInput>
    where?: VendedorWhereInput
  }

  export type VendedorUpdateToOneWithWhereWithoutVendasInput = {
    where?: VendedorWhereInput
    data: XOR<VendedorUpdateWithoutVendasInput, VendedorUncheckedUpdateWithoutVendasInput>
  }

  export type VendedorUpdateWithoutVendasInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
  }

  export type VendedorUncheckedUpdateWithoutVendasInput = {
    CPF?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    ESTADO?: StringFieldUpdateOperationsInput | string
  }

  export type CompradorUpsertWithoutVendasInput = {
    update: XOR<CompradorUpdateWithoutVendasInput, CompradorUncheckedUpdateWithoutVendasInput>
    create: XOR<CompradorCreateWithoutVendasInput, CompradorUncheckedCreateWithoutVendasInput>
    where?: CompradorWhereInput
  }

  export type CompradorUpdateToOneWithWhereWithoutVendasInput = {
    where?: CompradorWhereInput
    data: XOR<CompradorUpdateWithoutVendasInput, CompradorUncheckedUpdateWithoutVendasInput>
  }

  export type CompradorUpdateWithoutVendasInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type CompradorUncheckedUpdateWithoutVendasInput = {
    CPFCOMPR?: StringFieldUpdateOperationsInput | string
    RG?: StringFieldUpdateOperationsInput | string
    NOME?: StringFieldUpdateOperationsInput | string
    ENDERECO?: StringFieldUpdateOperationsInput | string
    CIDADE?: StringFieldUpdateOperationsInput | string
    BAIRRO?: StringFieldUpdateOperationsInput | string
    UF?: StringFieldUpdateOperationsInput | string
    CEP?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosUpsertWithWhereUniqueWithoutVendaInput = {
    where: CarrosVendidosWhereUniqueInput
    update: XOR<CarrosVendidosUpdateWithoutVendaInput, CarrosVendidosUncheckedUpdateWithoutVendaInput>
    create: XOR<CarrosVendidosCreateWithoutVendaInput, CarrosVendidosUncheckedCreateWithoutVendaInput>
  }

  export type CarrosVendidosUpdateWithWhereUniqueWithoutVendaInput = {
    where: CarrosVendidosWhereUniqueInput
    data: XOR<CarrosVendidosUpdateWithoutVendaInput, CarrosVendidosUncheckedUpdateWithoutVendaInput>
  }

  export type CarrosVendidosUpdateManyWithWhereWithoutVendaInput = {
    where: CarrosVendidosScalarWhereInput
    data: XOR<CarrosVendidosUpdateManyMutationInput, CarrosVendidosUncheckedUpdateManyWithoutVendaInput>
  }

  export type VendaCreateWithoutCarrosVendidosInput = {
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    vendedor: VendedorCreateNestedOneWithoutVendasInput
    comprador: CompradorCreateNestedOneWithoutVendasInput
  }

  export type VendaUncheckedCreateWithoutCarrosVendidosInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    CPFVENDEDOR: string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador_CPFCOMPR: string
  }

  export type VendaCreateOrConnectWithoutCarrosVendidosInput = {
    where: VendaWhereUniqueInput
    create: XOR<VendaCreateWithoutCarrosVendidosInput, VendaUncheckedCreateWithoutCarrosVendidosInput>
  }

  export type AutomovelCreateWithoutCarrosVendidosInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    proprietario: ProprietarioCreateNestedOneWithoutAutomoveisInput
    gastosRealizados?: GastosRealizadosCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelUncheckedCreateWithoutCarrosVendidosInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    CPF_CNPJ: string
    gastosRealizados?: GastosRealizadosUncheckedCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelCreateOrConnectWithoutCarrosVendidosInput = {
    where: AutomovelWhereUniqueInput
    create: XOR<AutomovelCreateWithoutCarrosVendidosInput, AutomovelUncheckedCreateWithoutCarrosVendidosInput>
  }

  export type VendaUpsertWithoutCarrosVendidosInput = {
    update: XOR<VendaUpdateWithoutCarrosVendidosInput, VendaUncheckedUpdateWithoutCarrosVendidosInput>
    create: XOR<VendaCreateWithoutCarrosVendidosInput, VendaUncheckedCreateWithoutCarrosVendidosInput>
    where?: VendaWhereInput
  }

  export type VendaUpdateToOneWithWhereWithoutCarrosVendidosInput = {
    where?: VendaWhereInput
    data: XOR<VendaUpdateWithoutCarrosVendidosInput, VendaUncheckedUpdateWithoutCarrosVendidosInput>
  }

  export type VendaUpdateWithoutCarrosVendidosInput = {
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedor?: VendedorUpdateOneRequiredWithoutVendasNestedInput
    comprador?: CompradorUpdateOneRequiredWithoutVendasNestedInput
  }

  export type VendaUncheckedUpdateWithoutCarrosVendidosInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    CPFVENDEDOR?: StringFieldUpdateOperationsInput | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador_CPFCOMPR?: StringFieldUpdateOperationsInput | string
  }

  export type AutomovelUpsertWithoutCarrosVendidosInput = {
    update: XOR<AutomovelUpdateWithoutCarrosVendidosInput, AutomovelUncheckedUpdateWithoutCarrosVendidosInput>
    create: XOR<AutomovelCreateWithoutCarrosVendidosInput, AutomovelUncheckedCreateWithoutCarrosVendidosInput>
    where?: AutomovelWhereInput
  }

  export type AutomovelUpdateToOneWithWhereWithoutCarrosVendidosInput = {
    where?: AutomovelWhereInput
    data: XOR<AutomovelUpdateWithoutCarrosVendidosInput, AutomovelUncheckedUpdateWithoutCarrosVendidosInput>
  }

  export type AutomovelUpdateWithoutCarrosVendidosInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proprietario?: ProprietarioUpdateOneRequiredWithoutAutomoveisNestedInput
    gastosRealizados?: GastosRealizadosUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelUncheckedUpdateWithoutCarrosVendidosInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    gastosRealizados?: GastosRealizadosUncheckedUpdateManyWithoutAutomovelNestedInput
  }

  export type GastosRealizadosCreateWithoutTipoGastoInput = {
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    automovel: AutomovelCreateNestedOneWithoutGastosRealizadosInput
  }

  export type GastosRealizadosUncheckedCreateWithoutTipoGastoInput = {
    PLACAS: string
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
  }

  export type GastosRealizadosCreateOrConnectWithoutTipoGastoInput = {
    where: GastosRealizadosWhereUniqueInput
    create: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput>
  }

  export type GastosRealizadosCreateManyTipoGastoInputEnvelope = {
    data: GastosRealizadosCreateManyTipoGastoInput | GastosRealizadosCreateManyTipoGastoInput[]
    skipDuplicates?: boolean
  }

  export type GastosRealizadosUpsertWithWhereUniqueWithoutTipoGastoInput = {
    where: GastosRealizadosWhereUniqueInput
    update: XOR<GastosRealizadosUpdateWithoutTipoGastoInput, GastosRealizadosUncheckedUpdateWithoutTipoGastoInput>
    create: XOR<GastosRealizadosCreateWithoutTipoGastoInput, GastosRealizadosUncheckedCreateWithoutTipoGastoInput>
  }

  export type GastosRealizadosUpdateWithWhereUniqueWithoutTipoGastoInput = {
    where: GastosRealizadosWhereUniqueInput
    data: XOR<GastosRealizadosUpdateWithoutTipoGastoInput, GastosRealizadosUncheckedUpdateWithoutTipoGastoInput>
  }

  export type GastosRealizadosUpdateManyWithWhereWithoutTipoGastoInput = {
    where: GastosRealizadosScalarWhereInput
    data: XOR<GastosRealizadosUpdateManyMutationInput, GastosRealizadosUncheckedUpdateManyWithoutTipoGastoInput>
  }

  export type AutomovelCreateWithoutGastosRealizadosInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    proprietario: ProprietarioCreateNestedOneWithoutAutomoveisInput
    carrosVendidos?: CarrosVendidosCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelUncheckedCreateWithoutGastosRealizadosInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
    CPF_CNPJ: string
    carrosVendidos?: CarrosVendidosUncheckedCreateNestedManyWithoutAutomovelInput
  }

  export type AutomovelCreateOrConnectWithoutGastosRealizadosInput = {
    where: AutomovelWhereUniqueInput
    create: XOR<AutomovelCreateWithoutGastosRealizadosInput, AutomovelUncheckedCreateWithoutGastosRealizadosInput>
  }

  export type TiposGastosCreateWithoutGastosRealizadosInput = {
    DESCRICAO: string
  }

  export type TiposGastosUncheckedCreateWithoutGastosRealizadosInput = {
    COD?: number
    DESCRICAO: string
  }

  export type TiposGastosCreateOrConnectWithoutGastosRealizadosInput = {
    where: TiposGastosWhereUniqueInput
    create: XOR<TiposGastosCreateWithoutGastosRealizadosInput, TiposGastosUncheckedCreateWithoutGastosRealizadosInput>
  }

  export type AutomovelUpsertWithoutGastosRealizadosInput = {
    update: XOR<AutomovelUpdateWithoutGastosRealizadosInput, AutomovelUncheckedUpdateWithoutGastosRealizadosInput>
    create: XOR<AutomovelCreateWithoutGastosRealizadosInput, AutomovelUncheckedCreateWithoutGastosRealizadosInput>
    where?: AutomovelWhereInput
  }

  export type AutomovelUpdateToOneWithWhereWithoutGastosRealizadosInput = {
    where?: AutomovelWhereInput
    data: XOR<AutomovelUpdateWithoutGastosRealizadosInput, AutomovelUncheckedUpdateWithoutGastosRealizadosInput>
  }

  export type AutomovelUpdateWithoutGastosRealizadosInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    proprietario?: ProprietarioUpdateOneRequiredWithoutAutomoveisNestedInput
    carrosVendidos?: CarrosVendidosUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelUncheckedUpdateWithoutGastosRealizadosInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    CPF_CNPJ?: StringFieldUpdateOperationsInput | string
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutAutomovelNestedInput
  }

  export type TiposGastosUpsertWithoutGastosRealizadosInput = {
    update: XOR<TiposGastosUpdateWithoutGastosRealizadosInput, TiposGastosUncheckedUpdateWithoutGastosRealizadosInput>
    create: XOR<TiposGastosCreateWithoutGastosRealizadosInput, TiposGastosUncheckedCreateWithoutGastosRealizadosInput>
    where?: TiposGastosWhereInput
  }

  export type TiposGastosUpdateToOneWithWhereWithoutGastosRealizadosInput = {
    where?: TiposGastosWhereInput
    data: XOR<TiposGastosUpdateWithoutGastosRealizadosInput, TiposGastosUncheckedUpdateWithoutGastosRealizadosInput>
  }

  export type TiposGastosUpdateWithoutGastosRealizadosInput = {
    DESCRICAO?: StringFieldUpdateOperationsInput | string
  }

  export type TiposGastosUncheckedUpdateWithoutGastosRealizadosInput = {
    COD?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: StringFieldUpdateOperationsInput | string
  }

  export type AutomovelCreateManyProprietarioInput = {
    PLACAS: string
    MODELO: string
    MARCA: string
    ANO: number
    COMBS: string
    COR: string
    CHASSI: string
    DATAENTRADA: Date | string
    HORAENTRADA: Date | string
    KMENTRADA: number
    VALORENTRADA: Decimal | DecimalJsLike | number | string
  }

  export type AutomovelUpdateWithoutProprietarioInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carrosVendidos?: CarrosVendidosUpdateManyWithoutAutomovelNestedInput
    gastosRealizados?: GastosRealizadosUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelUncheckedUpdateWithoutProprietarioInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutAutomovelNestedInput
    gastosRealizados?: GastosRealizadosUncheckedUpdateManyWithoutAutomovelNestedInput
  }

  export type AutomovelUncheckedUpdateManyWithoutProprietarioInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    MODELO?: StringFieldUpdateOperationsInput | string
    MARCA?: StringFieldUpdateOperationsInput | string
    ANO?: IntFieldUpdateOperationsInput | number
    COMBS?: StringFieldUpdateOperationsInput | string
    COR?: StringFieldUpdateOperationsInput | string
    CHASSI?: StringFieldUpdateOperationsInput | string
    DATAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAENTRADA?: DateTimeFieldUpdateOperationsInput | Date | string
    KMENTRADA?: IntFieldUpdateOperationsInput | number
    VALORENTRADA?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type CarrosVendidosCreateManyAutomovelInput = {
    NUMVENDA: number
    KMVENDA: number
    TIPOVENDA: string
  }

  export type GastosRealizadosCreateManyAutomovelInput = {
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
    tipos_gastos_COD: number
  }

  export type CarrosVendidosUpdateWithoutAutomovelInput = {
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
    venda?: VendaUpdateOneRequiredWithoutCarrosVendidosNestedInput
  }

  export type CarrosVendidosUncheckedUpdateWithoutAutomovelInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosUncheckedUpdateManyWithoutAutomovelInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type GastosRealizadosUpdateWithoutAutomovelInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoGasto?: TiposGastosUpdateOneRequiredWithoutGastosRealizadosNestedInput
  }

  export type GastosRealizadosUncheckedUpdateWithoutAutomovelInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    tipos_gastos_COD?: IntFieldUpdateOperationsInput | number
  }

  export type GastosRealizadosUncheckedUpdateManyWithoutAutomovelInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    tipos_gastos_COD?: IntFieldUpdateOperationsInput | number
  }

  export type VendaCreateManyVendedorInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
    comprador_CPFCOMPR: string
  }

  export type VendaUpdateWithoutVendedorInput = {
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador?: CompradorUpdateOneRequiredWithoutVendasNestedInput
    carrosVendidos?: CarrosVendidosUpdateManyWithoutVendaNestedInput
  }

  export type VendaUncheckedUpdateWithoutVendedorInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador_CPFCOMPR?: StringFieldUpdateOperationsInput | string
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendaUncheckedUpdateManyWithoutVendedorInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comprador_CPFCOMPR?: StringFieldUpdateOperationsInput | string
  }

  export type VendaCreateManyCompradorInput = {
    NUMVENDA?: number
    DATAVENDA: Date | string
    HORAVENDA: Date | string
    CPFVENDEDOR: string
    HORASAIDA?: Date | string | null
    DATASAIDA?: Date | string | null
  }

  export type VendaUpdateWithoutCompradorInput = {
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vendedor?: VendedorUpdateOneRequiredWithoutVendasNestedInput
    carrosVendidos?: CarrosVendidosUpdateManyWithoutVendaNestedInput
  }

  export type VendaUncheckedUpdateWithoutCompradorInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    CPFVENDEDOR?: StringFieldUpdateOperationsInput | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carrosVendidos?: CarrosVendidosUncheckedUpdateManyWithoutVendaNestedInput
  }

  export type VendaUncheckedUpdateManyWithoutCompradorInput = {
    NUMVENDA?: IntFieldUpdateOperationsInput | number
    DATAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    HORAVENDA?: DateTimeFieldUpdateOperationsInput | Date | string
    CPFVENDEDOR?: StringFieldUpdateOperationsInput | string
    HORASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATASAIDA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CarrosVendidosCreateManyVendaInput = {
    PLACAS: string
    KMVENDA: number
    TIPOVENDA: string
  }

  export type CarrosVendidosUpdateWithoutVendaInput = {
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
    automovel?: AutomovelUpdateOneRequiredWithoutCarrosVendidosNestedInput
  }

  export type CarrosVendidosUncheckedUpdateWithoutVendaInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type CarrosVendidosUncheckedUpdateManyWithoutVendaInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    KMVENDA?: IntFieldUpdateOperationsInput | number
    TIPOVENDA?: StringFieldUpdateOperationsInput | string
  }

  export type GastosRealizadosCreateManyTipoGastoInput = {
    PLACAS: string
    CODTIPOGASTO: number
    VALORPAGO: Decimal | DecimalJsLike | number | string
    DATA: Date | string
  }

  export type GastosRealizadosUpdateWithoutTipoGastoInput = {
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
    automovel?: AutomovelUpdateOneRequiredWithoutGastosRealizadosNestedInput
  }

  export type GastosRealizadosUncheckedUpdateWithoutTipoGastoInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GastosRealizadosUncheckedUpdateManyWithoutTipoGastoInput = {
    PLACAS?: StringFieldUpdateOperationsInput | string
    CODTIPOGASTO?: IntFieldUpdateOperationsInput | number
    VALORPAGO?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    DATA?: DateTimeFieldUpdateOperationsInput | Date | string
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