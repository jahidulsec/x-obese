
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model Steps
 * 
 */
export type Steps = $Result.DefaultSelection<Prisma.$StepsPayload>
/**
 * Model WorkoutGoal
 * 
 */
export type WorkoutGoal = $Result.DefaultSelection<Prisma.$WorkoutGoalPayload>
/**
 * Model Marathon
 * 
 */
export type Marathon = $Result.DefaultSelection<Prisma.$MarathonPayload>
/**
 * Model Rewards
 * 
 */
export type Rewards = $Result.DefaultSelection<Prisma.$RewardsPayload>
/**
 * Model MarathonUser
 * 
 */
export type MarathonUser = $Result.DefaultSelection<Prisma.$MarathonUserPayload>
/**
 * Model Blogs
 * 
 */
export type Blogs = $Result.DefaultSelection<Prisma.$BlogsPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model marathoAgeRule
 * 
 */
export type marathoAgeRule = $Result.DefaultSelection<Prisma.$marathoAgeRulePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AdminRoles: {
  superadmin: 'superadmin',
  admin: 'admin'
};

export type AdminRoles = (typeof AdminRoles)[keyof typeof AdminRoles]


export const UseCase: {
  login: 'login',
  signup: 'signup'
};

export type UseCase = (typeof UseCase)[keyof typeof UseCase]


export const WorkoutType: {
  running: 'running',
  walking: 'walking',
  cycling: 'cycling'
};

export type WorkoutType = (typeof WorkoutType)[keyof typeof WorkoutType]


export const GoalType: {
  gain_muscle: 'gain_muscle',
  keep_fit: 'keep_fit',
  lose_weight: 'lose_weight'
};

export type GoalType = (typeof GoalType)[keyof typeof GoalType]


export const MarathonType: {
  virtual: 'virtual',
  onsite: 'onsite'
};

export type MarathonType = (typeof MarathonType)[keyof typeof MarathonType]

}

export type AdminRoles = $Enums.AdminRoles

export const AdminRoles: typeof $Enums.AdminRoles

export type UseCase = $Enums.UseCase

export const UseCase: typeof $Enums.UseCase

export type WorkoutType = $Enums.WorkoutType

export const WorkoutType: typeof $Enums.WorkoutType

export type GoalType = $Enums.GoalType

export const GoalType: typeof $Enums.GoalType

export type MarathonType = $Enums.MarathonType

export const MarathonType: typeof $Enums.MarathonType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Admins
 * const admins = await prisma.admins.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Admins
   * const admins = await prisma.admins.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.steps`: Exposes CRUD operations for the **Steps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.steps.findMany()
    * ```
    */
  get steps(): Prisma.StepsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workoutGoal`: Exposes CRUD operations for the **WorkoutGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutGoals
    * const workoutGoals = await prisma.workoutGoal.findMany()
    * ```
    */
  get workoutGoal(): Prisma.WorkoutGoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marathon`: Exposes CRUD operations for the **Marathon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marathons
    * const marathons = await prisma.marathon.findMany()
    * ```
    */
  get marathon(): Prisma.MarathonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rewards`: Exposes CRUD operations for the **Rewards** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rewards
    * const rewards = await prisma.rewards.findMany()
    * ```
    */
  get rewards(): Prisma.RewardsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marathonUser`: Exposes CRUD operations for the **MarathonUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarathonUsers
    * const marathonUsers = await prisma.marathonUser.findMany()
    * ```
    */
  get marathonUser(): Prisma.MarathonUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blogs`: Exposes CRUD operations for the **Blogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blogs.findMany()
    * ```
    */
  get blogs(): Prisma.BlogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marathoAgeRule`: Exposes CRUD operations for the **marathoAgeRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarathoAgeRules
    * const marathoAgeRules = await prisma.marathoAgeRule.findMany()
    * ```
    */
  get marathoAgeRule(): Prisma.marathoAgeRuleDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Admins: 'Admins',
    Users: 'Users',
    Otp: 'Otp',
    Workout: 'Workout',
    Steps: 'Steps',
    WorkoutGoal: 'WorkoutGoal',
    Marathon: 'Marathon',
    Rewards: 'Rewards',
    MarathonUser: 'MarathonUser',
    Blogs: 'Blogs',
    Banner: 'Banner',
    marathoAgeRule: 'marathoAgeRule'
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
      modelProps: "admins" | "users" | "otp" | "workout" | "steps" | "workoutGoal" | "marathon" | "rewards" | "marathonUser" | "blogs" | "banner" | "marathoAgeRule"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      Steps: {
        payload: Prisma.$StepsPayload<ExtArgs>
        fields: Prisma.StepsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          findFirst: {
            args: Prisma.StepsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          findMany: {
            args: Prisma.StepsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>[]
          }
          create: {
            args: Prisma.StepsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          createMany: {
            args: Prisma.StepsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StepsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          update: {
            args: Prisma.StepsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          deleteMany: {
            args: Prisma.StepsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StepsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepsPayload>
          }
          aggregate: {
            args: Prisma.StepsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSteps>
          }
          groupBy: {
            args: Prisma.StepsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepsCountArgs<ExtArgs>
            result: $Utils.Optional<StepsCountAggregateOutputType> | number
          }
        }
      }
      WorkoutGoal: {
        payload: Prisma.$WorkoutGoalPayload<ExtArgs>
        fields: Prisma.WorkoutGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          findFirst: {
            args: Prisma.WorkoutGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          findMany: {
            args: Prisma.WorkoutGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>[]
          }
          create: {
            args: Prisma.WorkoutGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          createMany: {
            args: Prisma.WorkoutGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WorkoutGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          update: {
            args: Prisma.WorkoutGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutGoalPayload>
          }
          aggregate: {
            args: Prisma.WorkoutGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutGoal>
          }
          groupBy: {
            args: Prisma.WorkoutGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutGoalCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGoalCountAggregateOutputType> | number
          }
        }
      }
      Marathon: {
        payload: Prisma.$MarathonPayload<ExtArgs>
        fields: Prisma.MarathonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarathonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarathonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          findFirst: {
            args: Prisma.MarathonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarathonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          findMany: {
            args: Prisma.MarathonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>[]
          }
          create: {
            args: Prisma.MarathonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          createMany: {
            args: Prisma.MarathonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MarathonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          update: {
            args: Prisma.MarathonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          deleteMany: {
            args: Prisma.MarathonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarathonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarathonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonPayload>
          }
          aggregate: {
            args: Prisma.MarathonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarathon>
          }
          groupBy: {
            args: Prisma.MarathonGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarathonGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarathonCountArgs<ExtArgs>
            result: $Utils.Optional<MarathonCountAggregateOutputType> | number
          }
        }
      }
      Rewards: {
        payload: Prisma.$RewardsPayload<ExtArgs>
        fields: Prisma.RewardsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RewardsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RewardsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          findFirst: {
            args: Prisma.RewardsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RewardsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          findMany: {
            args: Prisma.RewardsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>[]
          }
          create: {
            args: Prisma.RewardsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          createMany: {
            args: Prisma.RewardsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RewardsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          update: {
            args: Prisma.RewardsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          deleteMany: {
            args: Prisma.RewardsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RewardsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RewardsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RewardsPayload>
          }
          aggregate: {
            args: Prisma.RewardsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRewards>
          }
          groupBy: {
            args: Prisma.RewardsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RewardsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RewardsCountArgs<ExtArgs>
            result: $Utils.Optional<RewardsCountAggregateOutputType> | number
          }
        }
      }
      MarathonUser: {
        payload: Prisma.$MarathonUserPayload<ExtArgs>
        fields: Prisma.MarathonUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarathonUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarathonUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          findFirst: {
            args: Prisma.MarathonUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarathonUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          findMany: {
            args: Prisma.MarathonUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>[]
          }
          create: {
            args: Prisma.MarathonUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          createMany: {
            args: Prisma.MarathonUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MarathonUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          update: {
            args: Prisma.MarathonUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          deleteMany: {
            args: Prisma.MarathonUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarathonUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarathonUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarathonUserPayload>
          }
          aggregate: {
            args: Prisma.MarathonUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarathonUser>
          }
          groupBy: {
            args: Prisma.MarathonUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarathonUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarathonUserCountArgs<ExtArgs>
            result: $Utils.Optional<MarathonUserCountAggregateOutputType> | number
          }
        }
      }
      Blogs: {
        payload: Prisma.$BlogsPayload<ExtArgs>
        fields: Prisma.BlogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findFirst: {
            args: Prisma.BlogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          findMany: {
            args: Prisma.BlogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>[]
          }
          create: {
            args: Prisma.BlogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          createMany: {
            args: Prisma.BlogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BlogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          update: {
            args: Prisma.BlogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          deleteMany: {
            args: Prisma.BlogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogsPayload>
          }
          aggregate: {
            args: Prisma.BlogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlogs>
          }
          groupBy: {
            args: Prisma.BlogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogsCountArgs<ExtArgs>
            result: $Utils.Optional<BlogsCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      marathoAgeRule: {
        payload: Prisma.$marathoAgeRulePayload<ExtArgs>
        fields: Prisma.marathoAgeRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marathoAgeRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marathoAgeRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          findFirst: {
            args: Prisma.marathoAgeRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marathoAgeRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          findMany: {
            args: Prisma.marathoAgeRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>[]
          }
          create: {
            args: Prisma.marathoAgeRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          createMany: {
            args: Prisma.marathoAgeRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.marathoAgeRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          update: {
            args: Prisma.marathoAgeRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          deleteMany: {
            args: Prisma.marathoAgeRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marathoAgeRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.marathoAgeRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marathoAgeRulePayload>
          }
          aggregate: {
            args: Prisma.MarathoAgeRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarathoAgeRule>
          }
          groupBy: {
            args: Prisma.marathoAgeRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarathoAgeRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.marathoAgeRuleCountArgs<ExtArgs>
            result: $Utils.Optional<MarathoAgeRuleCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    admins?: AdminsOmit
    users?: UsersOmit
    otp?: OtpOmit
    workout?: WorkoutOmit
    steps?: StepsOmit
    workoutGoal?: WorkoutGoalOmit
    marathon?: MarathonOmit
    rewards?: RewardsOmit
    marathonUser?: MarathonUserOmit
    blogs?: BlogsOmit
    banner?: BannerOmit
    marathoAgeRule?: marathoAgeRuleOmit
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
   * Count Type AdminsCountOutputType
   */

  export type AdminsCountOutputType = {
    Blogs: number
    marathon: number
  }

  export type AdminsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blogs?: boolean | AdminsCountOutputTypeCountBlogsArgs
    marathon?: boolean | AdminsCountOutputTypeCountMarathonArgs
  }

  // Custom InputTypes
  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminsCountOutputType
     */
    select?: AdminsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountBlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountMarathonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarathonWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    MarathonUser: number
    Otp: number
    Steps: number
    Workout: number
    WorkoutGoal: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MarathonUser?: boolean | UsersCountOutputTypeCountMarathonUserArgs
    Otp?: boolean | UsersCountOutputTypeCountOtpArgs
    Steps?: boolean | UsersCountOutputTypeCountStepsArgs
    Workout?: boolean | UsersCountOutputTypeCountWorkoutArgs
    WorkoutGoal?: boolean | UsersCountOutputTypeCountWorkoutGoalArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMarathonUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarathonUserWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkoutGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutGoalWhereInput
  }


  /**
   * Count Type MarathonCountOutputType
   */

  export type MarathonCountOutputType = {
    marathoAgeRule: number
    MarathonUser: number
    Rewards: number
  }

  export type MarathonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marathoAgeRule?: boolean | MarathonCountOutputTypeCountMarathoAgeRuleArgs
    MarathonUser?: boolean | MarathonCountOutputTypeCountMarathonUserArgs
    Rewards?: boolean | MarathonCountOutputTypeCountRewardsArgs
  }

  // Custom InputTypes
  /**
   * MarathonCountOutputType without action
   */
  export type MarathonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonCountOutputType
     */
    select?: MarathonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarathonCountOutputType without action
   */
  export type MarathonCountOutputTypeCountMarathoAgeRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marathoAgeRuleWhereInput
  }

  /**
   * MarathonCountOutputType without action
   */
  export type MarathonCountOutputTypeCountMarathonUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarathonUserWhereInput
  }

  /**
   * MarathonCountOutputType without action
   */
  export type MarathonCountOutputTypeCountRewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.AdminRoles | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.AdminRoles | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type AdminsMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: string
    name: string
    username: string
    password: string
    role: $Enums.AdminRoles
    createdAt: Date
    updateAt: Date
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
    Blogs?: boolean | Admins$BlogsArgs<ExtArgs>
    marathon?: boolean | Admins$marathonArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>



  export type AdminsSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type AdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "createdAt" | "updateAt", ExtArgs["result"]["admins"]>
  export type AdminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Blogs?: boolean | Admins$BlogsArgs<ExtArgs>
    marathon?: boolean | Admins$marathonArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {
      Blogs: Prisma.$BlogsPayload<ExtArgs>[]
      marathon: Prisma.$MarathonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      role: $Enums.AdminRoles
      createdAt: Date
      updateAt: Date
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminsFindUniqueArgs>(args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminsFindFirstArgs>(args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminsFindManyArgs>(args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends AdminsCreateArgs>(args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminsCreateManyArgs>(args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends AdminsDeleteArgs>(args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminsUpdateArgs>(args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminsDeleteManyArgs>(args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminsUpdateManyArgs>(args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends AdminsUpsertArgs>(args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsGroupByArgs} args - Group by arguments.
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
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Blogs<T extends Admins$BlogsArgs<ExtArgs> = {}>(args?: Subset<T, Admins$BlogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marathon<T extends Admins$marathonArgs<ExtArgs> = {}>(args?: Subset<T, Admins$marathonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admins model
   */
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'String'>
    readonly name: FieldRef<"Admins", 'String'>
    readonly username: FieldRef<"Admins", 'String'>
    readonly password: FieldRef<"Admins", 'String'>
    readonly role: FieldRef<"Admins", 'AdminRoles'>
    readonly createdAt: FieldRef<"Admins", 'DateTime'>
    readonly updateAt: FieldRef<"Admins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admins.Blogs
   */
  export type Admins$BlogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    cursor?: BlogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Admins.marathon
   */
  export type Admins$marathonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    where?: MarathonWhereInput
    orderBy?: MarathonOrderByWithRelationInput | MarathonOrderByWithRelationInput[]
    cursor?: MarathonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarathonScalarFieldEnum | MarathonScalarFieldEnum[]
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    heightFt: number | null
    heightIn: number | null
    weight: number | null
  }

  export type UsersSumAggregateOutputType = {
    heightFt: number | null
    heightIn: number | null
    weight: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    fullName: string | null
    email: string | null
    gender: string | null
    address: string | null
    birth: Date | null
    heightFt: number | null
    heightIn: number | null
    weight: number | null
    createdAt: Date | null
    updateAt: Date | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    fullName: string | null
    email: string | null
    gender: string | null
    address: string | null
    birth: Date | null
    heightFt: number | null
    heightIn: number | null
    weight: number | null
    createdAt: Date | null
    updateAt: Date | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    mobile: number
    fullName: number
    email: number
    gender: number
    address: number
    birth: number
    heightFt: number
    heightIn: number
    weight: number
    createdAt: number
    updateAt: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    heightFt?: true
    heightIn?: true
    weight?: true
  }

  export type UsersSumAggregateInputType = {
    heightFt?: true
    heightIn?: true
    weight?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    mobile?: true
    fullName?: true
    email?: true
    gender?: true
    address?: true
    birth?: true
    heightFt?: true
    heightIn?: true
    weight?: true
    createdAt?: true
    updateAt?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    mobile?: true
    fullName?: true
    email?: true
    gender?: true
    address?: true
    birth?: true
    heightFt?: true
    heightIn?: true
    weight?: true
    createdAt?: true
    updateAt?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    mobile?: true
    fullName?: true
    email?: true
    gender?: true
    address?: true
    birth?: true
    heightFt?: true
    heightIn?: true
    weight?: true
    createdAt?: true
    updateAt?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    mobile: string
    fullName: string | null
    email: string | null
    gender: string | null
    address: string | null
    birth: Date | null
    heightFt: number | null
    heightIn: number | null
    weight: number | null
    createdAt: Date
    updateAt: Date
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    fullName?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    birth?: boolean
    heightFt?: boolean
    heightIn?: boolean
    weight?: boolean
    createdAt?: boolean
    updateAt?: boolean
    image?: boolean
    MarathonUser?: boolean | Users$MarathonUserArgs<ExtArgs>
    Otp?: boolean | Users$OtpArgs<ExtArgs>
    Steps?: boolean | Users$StepsArgs<ExtArgs>
    Workout?: boolean | Users$WorkoutArgs<ExtArgs>
    WorkoutGoal?: boolean | Users$WorkoutGoalArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type UsersSelectScalar = {
    id?: boolean
    mobile?: boolean
    fullName?: boolean
    email?: boolean
    gender?: boolean
    address?: boolean
    birth?: boolean
    heightFt?: boolean
    heightIn?: boolean
    weight?: boolean
    createdAt?: boolean
    updateAt?: boolean
    image?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobile" | "fullName" | "email" | "gender" | "address" | "birth" | "heightFt" | "heightIn" | "weight" | "createdAt" | "updateAt" | "image", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MarathonUser?: boolean | Users$MarathonUserArgs<ExtArgs>
    Otp?: boolean | Users$OtpArgs<ExtArgs>
    Steps?: boolean | Users$StepsArgs<ExtArgs>
    Workout?: boolean | Users$WorkoutArgs<ExtArgs>
    WorkoutGoal?: boolean | Users$WorkoutGoalArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      MarathonUser: Prisma.$MarathonUserPayload<ExtArgs>[]
      Otp: Prisma.$OtpPayload<ExtArgs>[]
      Steps: Prisma.$StepsPayload<ExtArgs>[]
      Workout: Prisma.$WorkoutPayload<ExtArgs>[]
      WorkoutGoal: Prisma.$WorkoutGoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mobile: string
      fullName: string | null
      email: string | null
      gender: string | null
      address: string | null
      birth: Date | null
      heightFt: number | null
      heightIn: number | null
      weight: number | null
      createdAt: Date
      updateAt: Date
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    MarathonUser<T extends Users$MarathonUserArgs<ExtArgs> = {}>(args?: Subset<T, Users$MarathonUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Otp<T extends Users$OtpArgs<ExtArgs> = {}>(args?: Subset<T, Users$OtpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Steps<T extends Users$StepsArgs<ExtArgs> = {}>(args?: Subset<T, Users$StepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Workout<T extends Users$WorkoutArgs<ExtArgs> = {}>(args?: Subset<T, Users$WorkoutArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    WorkoutGoal<T extends Users$WorkoutGoalArgs<ExtArgs> = {}>(args?: Subset<T, Users$WorkoutGoalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly mobile: FieldRef<"Users", 'String'>
    readonly fullName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly gender: FieldRef<"Users", 'String'>
    readonly address: FieldRef<"Users", 'String'>
    readonly birth: FieldRef<"Users", 'DateTime'>
    readonly heightFt: FieldRef<"Users", 'Int'>
    readonly heightIn: FieldRef<"Users", 'Int'>
    readonly weight: FieldRef<"Users", 'Int'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updateAt: FieldRef<"Users", 'DateTime'>
    readonly image: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.MarathonUser
   */
  export type Users$MarathonUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    where?: MarathonUserWhereInput
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    cursor?: MarathonUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarathonUserScalarFieldEnum | MarathonUserScalarFieldEnum[]
  }

  /**
   * Users.Otp
   */
  export type Users$OtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    cursor?: OtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Users.Steps
   */
  export type Users$StepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    where?: StepsWhereInput
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    cursor?: StepsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }

  /**
   * Users.Workout
   */
  export type Users$WorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    cursor?: WorkoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Users.WorkoutGoal
   */
  export type Users$WorkoutGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    where?: WorkoutGoalWhereInput
    orderBy?: WorkoutGoalOrderByWithRelationInput | WorkoutGoalOrderByWithRelationInput[]
    cursor?: WorkoutGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkoutGoalScalarFieldEnum | WorkoutGoalScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mobile: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    useCase: $Enums.UseCase | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mobile: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    useCase: $Enums.UseCase | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    userId: number
    mobile: number
    code: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    useCase: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    userId?: true
    mobile?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    useCase?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    userId?: true
    mobile?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    useCase?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    userId?: true
    mobile?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    useCase?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    userId: string | null
    mobile: string | null
    code: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    useCase: $Enums.UseCase
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mobile?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    useCase?: boolean
    owner?: boolean | Otp$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>



  export type OtpSelectScalar = {
    id?: boolean
    userId?: boolean
    mobile?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    useCase?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mobile" | "code" | "createdAt" | "updatedAt" | "expiresAt" | "useCase", ExtArgs["result"]["otp"]>
  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Otp$ownerArgs<ExtArgs>
  }

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      owner: Prisma.$UsersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      mobile: string | null
      code: string
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      useCase: $Enums.UseCase
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Otp$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Otp$ownerArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly userId: FieldRef<"Otp", 'String'>
    readonly mobile: FieldRef<"Otp", 'String'>
    readonly code: FieldRef<"Otp", 'String'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
    readonly updatedAt: FieldRef<"Otp", 'DateTime'>
    readonly expiresAt: FieldRef<"Otp", 'DateTime'>
    readonly useCase: FieldRef<"Otp", 'UseCase'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp.owner
   */
  export type Otp$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
  }


  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    calories: Decimal | null
    heartPts: Decimal | null
    distanceKm: Decimal | null
    durationMs: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    calories: Decimal | null
    heartPts: Decimal | null
    distanceKm: Decimal | null
    durationMs: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    userId: string | null
    calories: Decimal | null
    heartPts: Decimal | null
    type: $Enums.WorkoutType | null
    createdAt: Date | null
    updatedAt: Date | null
    distanceKm: Decimal | null
    durationMs: number | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    calories: Decimal | null
    heartPts: Decimal | null
    type: $Enums.WorkoutType | null
    createdAt: Date | null
    updatedAt: Date | null
    distanceKm: Decimal | null
    durationMs: number | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    calories: number
    heartPts: number
    type: number
    createdAt: number
    updatedAt: number
    distanceKm: number
    durationMs: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    calories?: true
    heartPts?: true
    distanceKm?: true
    durationMs?: true
  }

  export type WorkoutSumAggregateInputType = {
    calories?: true
    heartPts?: true
    distanceKm?: true
    durationMs?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
    heartPts?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
    heartPts?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
    heartPts?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    userId: string
    calories: Decimal
    heartPts: Decimal
    type: $Enums.WorkoutType | null
    createdAt: Date
    updatedAt: Date
    distanceKm: Decimal
    durationMs: number
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    calories?: boolean
    heartPts?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distanceKm?: boolean
    durationMs?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>



  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    calories?: boolean
    heartPts?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distanceKm?: boolean
    durationMs?: boolean
  }

  export type WorkoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "calories" | "heartPts" | "type" | "createdAt" | "updatedAt" | "distanceKm" | "durationMs", ExtArgs["result"]["workout"]>
  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      calories: Prisma.Decimal
      heartPts: Prisma.Decimal
      type: $Enums.WorkoutType | null
      createdAt: Date
      updatedAt: Date
      distanceKm: Prisma.Decimal
      durationMs: number
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workout model
   */
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly calories: FieldRef<"Workout", 'Decimal'>
    readonly heartPts: FieldRef<"Workout", 'Decimal'>
    readonly type: FieldRef<"Workout", 'WorkoutType'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
    readonly distanceKm: FieldRef<"Workout", 'Decimal'>
    readonly durationMs: FieldRef<"Workout", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to update.
     */
    limit?: number
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
    /**
     * Limit how many Workouts to delete.
     */
    limit?: number
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workout
     */
    omit?: WorkoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model Steps
   */

  export type AggregateSteps = {
    _count: StepsCountAggregateOutputType | null
    _avg: StepsAvgAggregateOutputType | null
    _sum: StepsSumAggregateOutputType | null
    _min: StepsMinAggregateOutputType | null
    _max: StepsMaxAggregateOutputType | null
  }

  export type StepsAvgAggregateOutputType = {
    steps: number | null
  }

  export type StepsSumAggregateOutputType = {
    steps: number | null
  }

  export type StepsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    steps: number | null
    createdAt: Date | null
  }

  export type StepsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    steps: number | null
    createdAt: Date | null
  }

  export type StepsCountAggregateOutputType = {
    id: number
    userId: number
    steps: number
    createdAt: number
    _all: number
  }


  export type StepsAvgAggregateInputType = {
    steps?: true
  }

  export type StepsSumAggregateInputType = {
    steps?: true
  }

  export type StepsMinAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    createdAt?: true
  }

  export type StepsMaxAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    createdAt?: true
  }

  export type StepsCountAggregateInputType = {
    id?: true
    userId?: true
    steps?: true
    createdAt?: true
    _all?: true
  }

  export type StepsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to aggregate.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepsMaxAggregateInputType
  }

  export type GetStepsAggregateType<T extends StepsAggregateArgs> = {
        [P in keyof T & keyof AggregateSteps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSteps[P]>
      : GetScalarType<T[P], AggregateSteps[P]>
  }




  export type StepsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepsWhereInput
    orderBy?: StepsOrderByWithAggregationInput | StepsOrderByWithAggregationInput[]
    by: StepsScalarFieldEnum[] | StepsScalarFieldEnum
    having?: StepsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepsCountAggregateInputType | true
    _avg?: StepsAvgAggregateInputType
    _sum?: StepsSumAggregateInputType
    _min?: StepsMinAggregateInputType
    _max?: StepsMaxAggregateInputType
  }

  export type StepsGroupByOutputType = {
    id: string
    userId: string
    steps: number
    createdAt: Date
    _count: StepsCountAggregateOutputType | null
    _avg: StepsAvgAggregateOutputType | null
    _sum: StepsSumAggregateOutputType | null
    _min: StepsMinAggregateOutputType | null
    _max: StepsMaxAggregateOutputType | null
  }

  type GetStepsGroupByPayload<T extends StepsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepsGroupByOutputType[P]>
            : GetScalarType<T[P], StepsGroupByOutputType[P]>
        }
      >
    >


  export type StepsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    steps?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["steps"]>



  export type StepsSelectScalar = {
    id?: boolean
    userId?: boolean
    steps?: boolean
    createdAt?: boolean
  }

  export type StepsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "steps" | "createdAt", ExtArgs["result"]["steps"]>
  export type StepsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $StepsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Steps"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      steps: number
      createdAt: Date
    }, ExtArgs["result"]["steps"]>
    composites: {}
  }

  type StepsGetPayload<S extends boolean | null | undefined | StepsDefaultArgs> = $Result.GetResult<Prisma.$StepsPayload, S>

  type StepsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepsCountAggregateInputType | true
    }

  export interface StepsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Steps'], meta: { name: 'Steps' } }
    /**
     * Find zero or one Steps that matches the filter.
     * @param {StepsFindUniqueArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepsFindUniqueArgs>(args: SelectSubset<T, StepsFindUniqueArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Steps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepsFindUniqueOrThrowArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepsFindUniqueOrThrowArgs>(args: SelectSubset<T, StepsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindFirstArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepsFindFirstArgs>(args?: SelectSubset<T, StepsFindFirstArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Steps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindFirstOrThrowArgs} args - Arguments to find a Steps
     * @example
     * // Get one Steps
     * const steps = await prisma.steps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepsFindFirstOrThrowArgs>(args?: SelectSubset<T, StepsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.steps.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.steps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stepsWithIdOnly = await prisma.steps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StepsFindManyArgs>(args?: SelectSubset<T, StepsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Steps.
     * @param {StepsCreateArgs} args - Arguments to create a Steps.
     * @example
     * // Create one Steps
     * const Steps = await prisma.steps.create({
     *   data: {
     *     // ... data to create a Steps
     *   }
     * })
     * 
     */
    create<T extends StepsCreateArgs>(args: SelectSubset<T, StepsCreateArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepsCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const steps = await prisma.steps.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepsCreateManyArgs>(args?: SelectSubset<T, StepsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Steps.
     * @param {StepsDeleteArgs} args - Arguments to delete one Steps.
     * @example
     * // Delete one Steps
     * const Steps = await prisma.steps.delete({
     *   where: {
     *     // ... filter to delete one Steps
     *   }
     * })
     * 
     */
    delete<T extends StepsDeleteArgs>(args: SelectSubset<T, StepsDeleteArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Steps.
     * @param {StepsUpdateArgs} args - Arguments to update one Steps.
     * @example
     * // Update one Steps
     * const steps = await prisma.steps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepsUpdateArgs>(args: SelectSubset<T, StepsUpdateArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepsDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.steps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepsDeleteManyArgs>(args?: SelectSubset<T, StepsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const steps = await prisma.steps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepsUpdateManyArgs>(args: SelectSubset<T, StepsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Steps.
     * @param {StepsUpsertArgs} args - Arguments to update or create a Steps.
     * @example
     * // Update or create a Steps
     * const steps = await prisma.steps.upsert({
     *   create: {
     *     // ... data to create a Steps
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Steps we want to update
     *   }
     * })
     */
    upsert<T extends StepsUpsertArgs>(args: SelectSubset<T, StepsUpsertArgs<ExtArgs>>): Prisma__StepsClient<$Result.GetResult<Prisma.$StepsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.steps.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepsCountArgs>(
      args?: Subset<T, StepsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StepsAggregateArgs>(args: Subset<T, StepsAggregateArgs>): Prisma.PrismaPromise<GetStepsAggregateType<T>>

    /**
     * Group by Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepsGroupByArgs} args - Group by arguments.
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
      T extends StepsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepsGroupByArgs['orderBy'] }
        : { orderBy?: StepsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StepsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Steps model
   */
  readonly fields: StepsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Steps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Steps model
   */
  interface StepsFieldRefs {
    readonly id: FieldRef<"Steps", 'String'>
    readonly userId: FieldRef<"Steps", 'String'>
    readonly steps: FieldRef<"Steps", 'Int'>
    readonly createdAt: FieldRef<"Steps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Steps findUnique
   */
  export type StepsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where: StepsWhereUniqueInput
  }

  /**
   * Steps findUniqueOrThrow
   */
  export type StepsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where: StepsWhereUniqueInput
  }

  /**
   * Steps findFirst
   */
  export type StepsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }

  /**
   * Steps findFirstOrThrow
   */
  export type StepsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }

  /**
   * Steps findMany
   */
  export type StepsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepsOrderByWithRelationInput | StepsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepsScalarFieldEnum | StepsScalarFieldEnum[]
  }

  /**
   * Steps create
   */
  export type StepsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The data needed to create a Steps.
     */
    data: XOR<StepsCreateInput, StepsUncheckedCreateInput>
  }

  /**
   * Steps createMany
   */
  export type StepsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepsCreateManyInput | StepsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Steps update
   */
  export type StepsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The data needed to update a Steps.
     */
    data: XOR<StepsUpdateInput, StepsUncheckedUpdateInput>
    /**
     * Choose, which Steps to update.
     */
    where: StepsWhereUniqueInput
  }

  /**
   * Steps updateMany
   */
  export type StepsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepsUpdateManyMutationInput, StepsUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepsWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Steps upsert
   */
  export type StepsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * The filter to search for the Steps to update in case it exists.
     */
    where: StepsWhereUniqueInput
    /**
     * In case the Steps found by the `where` argument doesn't exist, create a new Steps with this data.
     */
    create: XOR<StepsCreateInput, StepsUncheckedCreateInput>
    /**
     * In case the Steps was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepsUpdateInput, StepsUncheckedUpdateInput>
  }

  /**
   * Steps delete
   */
  export type StepsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
    /**
     * Filter which Steps to delete.
     */
    where: StepsWhereUniqueInput
  }

  /**
   * Steps deleteMany
   */
  export type StepsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepsWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Steps without action
   */
  export type StepsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Steps
     */
    select?: StepsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Steps
     */
    omit?: StepsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepsInclude<ExtArgs> | null
  }


  /**
   * Model WorkoutGoal
   */

  export type AggregateWorkoutGoal = {
    _count: WorkoutGoalCountAggregateOutputType | null
    _avg: WorkoutGoalAvgAggregateOutputType | null
    _sum: WorkoutGoalSumAggregateOutputType | null
    _min: WorkoutGoalMinAggregateOutputType | null
    _max: WorkoutGoalMaxAggregateOutputType | null
  }

  export type WorkoutGoalAvgAggregateOutputType = {
    bmi: Decimal | null
    weightGoal: number | null
    totalDays: number | null
    caloriesGoal: number | null
    workoutTimeMs: Decimal | null
  }

  export type WorkoutGoalSumAggregateOutputType = {
    bmi: Decimal | null
    weightGoal: number | null
    totalDays: number | null
    caloriesGoal: number | null
    workoutTimeMs: Decimal | null
  }

  export type WorkoutGoalMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bmi: Decimal | null
    weightGoal: number | null
    goalType: $Enums.GoalType | null
    activateReminder: boolean | null
    reminderTime: Date | null
    totalDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
    endDate: Date | null
    startDate: Date | null
    workoutDays: string | null
    caloriesGoal: number | null
    workoutTimeMs: Decimal | null
  }

  export type WorkoutGoalMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bmi: Decimal | null
    weightGoal: number | null
    goalType: $Enums.GoalType | null
    activateReminder: boolean | null
    reminderTime: Date | null
    totalDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
    endDate: Date | null
    startDate: Date | null
    workoutDays: string | null
    caloriesGoal: number | null
    workoutTimeMs: Decimal | null
  }

  export type WorkoutGoalCountAggregateOutputType = {
    id: number
    userId: number
    bmi: number
    weightGoal: number
    goalType: number
    activateReminder: number
    reminderTime: number
    totalDays: number
    createdAt: number
    updatedAt: number
    endDate: number
    startDate: number
    workoutDays: number
    caloriesGoal: number
    workoutTimeMs: number
    _all: number
  }


  export type WorkoutGoalAvgAggregateInputType = {
    bmi?: true
    weightGoal?: true
    totalDays?: true
    caloriesGoal?: true
    workoutTimeMs?: true
  }

  export type WorkoutGoalSumAggregateInputType = {
    bmi?: true
    weightGoal?: true
    totalDays?: true
    caloriesGoal?: true
    workoutTimeMs?: true
  }

  export type WorkoutGoalMinAggregateInputType = {
    id?: true
    userId?: true
    bmi?: true
    weightGoal?: true
    goalType?: true
    activateReminder?: true
    reminderTime?: true
    totalDays?: true
    createdAt?: true
    updatedAt?: true
    endDate?: true
    startDate?: true
    workoutDays?: true
    caloriesGoal?: true
    workoutTimeMs?: true
  }

  export type WorkoutGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    bmi?: true
    weightGoal?: true
    goalType?: true
    activateReminder?: true
    reminderTime?: true
    totalDays?: true
    createdAt?: true
    updatedAt?: true
    endDate?: true
    startDate?: true
    workoutDays?: true
    caloriesGoal?: true
    workoutTimeMs?: true
  }

  export type WorkoutGoalCountAggregateInputType = {
    id?: true
    userId?: true
    bmi?: true
    weightGoal?: true
    goalType?: true
    activateReminder?: true
    reminderTime?: true
    totalDays?: true
    createdAt?: true
    updatedAt?: true
    endDate?: true
    startDate?: true
    workoutDays?: true
    caloriesGoal?: true
    workoutTimeMs?: true
    _all?: true
  }

  export type WorkoutGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutGoal to aggregate.
     */
    where?: WorkoutGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutGoals to fetch.
     */
    orderBy?: WorkoutGoalOrderByWithRelationInput | WorkoutGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutGoals
    **/
    _count?: true | WorkoutGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutGoalMaxAggregateInputType
  }

  export type GetWorkoutGoalAggregateType<T extends WorkoutGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutGoal[P]>
      : GetScalarType<T[P], AggregateWorkoutGoal[P]>
  }




  export type WorkoutGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutGoalWhereInput
    orderBy?: WorkoutGoalOrderByWithAggregationInput | WorkoutGoalOrderByWithAggregationInput[]
    by: WorkoutGoalScalarFieldEnum[] | WorkoutGoalScalarFieldEnum
    having?: WorkoutGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutGoalCountAggregateInputType | true
    _avg?: WorkoutGoalAvgAggregateInputType
    _sum?: WorkoutGoalSumAggregateInputType
    _min?: WorkoutGoalMinAggregateInputType
    _max?: WorkoutGoalMaxAggregateInputType
  }

  export type WorkoutGoalGroupByOutputType = {
    id: string
    userId: string
    bmi: Decimal | null
    weightGoal: number
    goalType: $Enums.GoalType
    activateReminder: boolean | null
    reminderTime: Date | null
    totalDays: number | null
    createdAt: Date
    updatedAt: Date
    endDate: Date | null
    startDate: Date | null
    workoutDays: string | null
    caloriesGoal: number | null
    workoutTimeMs: Decimal | null
    _count: WorkoutGoalCountAggregateOutputType | null
    _avg: WorkoutGoalAvgAggregateOutputType | null
    _sum: WorkoutGoalSumAggregateOutputType | null
    _min: WorkoutGoalMinAggregateOutputType | null
    _max: WorkoutGoalMaxAggregateOutputType | null
  }

  type GetWorkoutGoalGroupByPayload<T extends WorkoutGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGoalGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGoalGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmi?: boolean
    weightGoal?: boolean
    goalType?: boolean
    activateReminder?: boolean
    reminderTime?: boolean
    totalDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endDate?: boolean
    startDate?: boolean
    workoutDays?: boolean
    caloriesGoal?: boolean
    workoutTimeMs?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workoutGoal"]>



  export type WorkoutGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    bmi?: boolean
    weightGoal?: boolean
    goalType?: boolean
    activateReminder?: boolean
    reminderTime?: boolean
    totalDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endDate?: boolean
    startDate?: boolean
    workoutDays?: boolean
    caloriesGoal?: boolean
    workoutTimeMs?: boolean
  }

  export type WorkoutGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bmi" | "weightGoal" | "goalType" | "activateReminder" | "reminderTime" | "totalDays" | "createdAt" | "updatedAt" | "endDate" | "startDate" | "workoutDays" | "caloriesGoal" | "workoutTimeMs", ExtArgs["result"]["workoutGoal"]>
  export type WorkoutGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $WorkoutGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutGoal"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bmi: Prisma.Decimal | null
      weightGoal: number
      goalType: $Enums.GoalType
      activateReminder: boolean | null
      reminderTime: Date | null
      totalDays: number | null
      createdAt: Date
      updatedAt: Date
      endDate: Date | null
      startDate: Date | null
      workoutDays: string | null
      caloriesGoal: number | null
      workoutTimeMs: Prisma.Decimal | null
    }, ExtArgs["result"]["workoutGoal"]>
    composites: {}
  }

  type WorkoutGoalGetPayload<S extends boolean | null | undefined | WorkoutGoalDefaultArgs> = $Result.GetResult<Prisma.$WorkoutGoalPayload, S>

  type WorkoutGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkoutGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkoutGoalCountAggregateInputType | true
    }

  export interface WorkoutGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutGoal'], meta: { name: 'WorkoutGoal' } }
    /**
     * Find zero or one WorkoutGoal that matches the filter.
     * @param {WorkoutGoalFindUniqueArgs} args - Arguments to find a WorkoutGoal
     * @example
     * // Get one WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutGoalFindUniqueArgs>(args: SelectSubset<T, WorkoutGoalFindUniqueArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkoutGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkoutGoalFindUniqueOrThrowArgs} args - Arguments to find a WorkoutGoal
     * @example
     * // Get one WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalFindFirstArgs} args - Arguments to find a WorkoutGoal
     * @example
     * // Get one WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutGoalFindFirstArgs>(args?: SelectSubset<T, WorkoutGoalFindFirstArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkoutGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalFindFirstOrThrowArgs} args - Arguments to find a WorkoutGoal
     * @example
     * // Get one WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkoutGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutGoals
     * const workoutGoals = await prisma.workoutGoal.findMany()
     * 
     * // Get first 10 WorkoutGoals
     * const workoutGoals = await prisma.workoutGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutGoalWithIdOnly = await prisma.workoutGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutGoalFindManyArgs>(args?: SelectSubset<T, WorkoutGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkoutGoal.
     * @param {WorkoutGoalCreateArgs} args - Arguments to create a WorkoutGoal.
     * @example
     * // Create one WorkoutGoal
     * const WorkoutGoal = await prisma.workoutGoal.create({
     *   data: {
     *     // ... data to create a WorkoutGoal
     *   }
     * })
     * 
     */
    create<T extends WorkoutGoalCreateArgs>(args: SelectSubset<T, WorkoutGoalCreateArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkoutGoals.
     * @param {WorkoutGoalCreateManyArgs} args - Arguments to create many WorkoutGoals.
     * @example
     * // Create many WorkoutGoals
     * const workoutGoal = await prisma.workoutGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutGoalCreateManyArgs>(args?: SelectSubset<T, WorkoutGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkoutGoal.
     * @param {WorkoutGoalDeleteArgs} args - Arguments to delete one WorkoutGoal.
     * @example
     * // Delete one WorkoutGoal
     * const WorkoutGoal = await prisma.workoutGoal.delete({
     *   where: {
     *     // ... filter to delete one WorkoutGoal
     *   }
     * })
     * 
     */
    delete<T extends WorkoutGoalDeleteArgs>(args: SelectSubset<T, WorkoutGoalDeleteArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkoutGoal.
     * @param {WorkoutGoalUpdateArgs} args - Arguments to update one WorkoutGoal.
     * @example
     * // Update one WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutGoalUpdateArgs>(args: SelectSubset<T, WorkoutGoalUpdateArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkoutGoals.
     * @param {WorkoutGoalDeleteManyArgs} args - Arguments to filter WorkoutGoals to delete.
     * @example
     * // Delete a few WorkoutGoals
     * const { count } = await prisma.workoutGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutGoalDeleteManyArgs>(args?: SelectSubset<T, WorkoutGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutGoals
     * const workoutGoal = await prisma.workoutGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutGoalUpdateManyArgs>(args: SelectSubset<T, WorkoutGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutGoal.
     * @param {WorkoutGoalUpsertArgs} args - Arguments to update or create a WorkoutGoal.
     * @example
     * // Update or create a WorkoutGoal
     * const workoutGoal = await prisma.workoutGoal.upsert({
     *   create: {
     *     // ... data to create a WorkoutGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutGoal we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutGoalUpsertArgs>(args: SelectSubset<T, WorkoutGoalUpsertArgs<ExtArgs>>): Prisma__WorkoutGoalClient<$Result.GetResult<Prisma.$WorkoutGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkoutGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalCountArgs} args - Arguments to filter WorkoutGoals to count.
     * @example
     * // Count the number of WorkoutGoals
     * const count = await prisma.workoutGoal.count({
     *   where: {
     *     // ... the filter for the WorkoutGoals we want to count
     *   }
     * })
    **/
    count<T extends WorkoutGoalCountArgs>(
      args?: Subset<T, WorkoutGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkoutGoalAggregateArgs>(args: Subset<T, WorkoutGoalAggregateArgs>): Prisma.PrismaPromise<GetWorkoutGoalAggregateType<T>>

    /**
     * Group by WorkoutGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGoalGroupByArgs} args - Group by arguments.
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
      T extends WorkoutGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGoalGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkoutGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutGoal model
   */
  readonly fields: WorkoutGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkoutGoal model
   */
  interface WorkoutGoalFieldRefs {
    readonly id: FieldRef<"WorkoutGoal", 'String'>
    readonly userId: FieldRef<"WorkoutGoal", 'String'>
    readonly bmi: FieldRef<"WorkoutGoal", 'Decimal'>
    readonly weightGoal: FieldRef<"WorkoutGoal", 'Int'>
    readonly goalType: FieldRef<"WorkoutGoal", 'GoalType'>
    readonly activateReminder: FieldRef<"WorkoutGoal", 'Boolean'>
    readonly reminderTime: FieldRef<"WorkoutGoal", 'DateTime'>
    readonly totalDays: FieldRef<"WorkoutGoal", 'Int'>
    readonly createdAt: FieldRef<"WorkoutGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkoutGoal", 'DateTime'>
    readonly endDate: FieldRef<"WorkoutGoal", 'DateTime'>
    readonly startDate: FieldRef<"WorkoutGoal", 'DateTime'>
    readonly workoutDays: FieldRef<"WorkoutGoal", 'String'>
    readonly caloriesGoal: FieldRef<"WorkoutGoal", 'Int'>
    readonly workoutTimeMs: FieldRef<"WorkoutGoal", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutGoal findUnique
   */
  export type WorkoutGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutGoal to fetch.
     */
    where: WorkoutGoalWhereUniqueInput
  }

  /**
   * WorkoutGoal findUniqueOrThrow
   */
  export type WorkoutGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutGoal to fetch.
     */
    where: WorkoutGoalWhereUniqueInput
  }

  /**
   * WorkoutGoal findFirst
   */
  export type WorkoutGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutGoal to fetch.
     */
    where?: WorkoutGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutGoals to fetch.
     */
    orderBy?: WorkoutGoalOrderByWithRelationInput | WorkoutGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutGoals.
     */
    cursor?: WorkoutGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutGoals.
     */
    distinct?: WorkoutGoalScalarFieldEnum | WorkoutGoalScalarFieldEnum[]
  }

  /**
   * WorkoutGoal findFirstOrThrow
   */
  export type WorkoutGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutGoal to fetch.
     */
    where?: WorkoutGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutGoals to fetch.
     */
    orderBy?: WorkoutGoalOrderByWithRelationInput | WorkoutGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutGoals.
     */
    cursor?: WorkoutGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutGoals.
     */
    distinct?: WorkoutGoalScalarFieldEnum | WorkoutGoalScalarFieldEnum[]
  }

  /**
   * WorkoutGoal findMany
   */
  export type WorkoutGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter, which WorkoutGoals to fetch.
     */
    where?: WorkoutGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutGoals to fetch.
     */
    orderBy?: WorkoutGoalOrderByWithRelationInput | WorkoutGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutGoals.
     */
    cursor?: WorkoutGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutGoals.
     */
    distinct?: WorkoutGoalScalarFieldEnum | WorkoutGoalScalarFieldEnum[]
  }

  /**
   * WorkoutGoal create
   */
  export type WorkoutGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkoutGoal.
     */
    data: XOR<WorkoutGoalCreateInput, WorkoutGoalUncheckedCreateInput>
  }

  /**
   * WorkoutGoal createMany
   */
  export type WorkoutGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutGoals.
     */
    data: WorkoutGoalCreateManyInput | WorkoutGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutGoal update
   */
  export type WorkoutGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkoutGoal.
     */
    data: XOR<WorkoutGoalUpdateInput, WorkoutGoalUncheckedUpdateInput>
    /**
     * Choose, which WorkoutGoal to update.
     */
    where: WorkoutGoalWhereUniqueInput
  }

  /**
   * WorkoutGoal updateMany
   */
  export type WorkoutGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutGoals.
     */
    data: XOR<WorkoutGoalUpdateManyMutationInput, WorkoutGoalUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutGoals to update
     */
    where?: WorkoutGoalWhereInput
    /**
     * Limit how many WorkoutGoals to update.
     */
    limit?: number
  }

  /**
   * WorkoutGoal upsert
   */
  export type WorkoutGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkoutGoal to update in case it exists.
     */
    where: WorkoutGoalWhereUniqueInput
    /**
     * In case the WorkoutGoal found by the `where` argument doesn't exist, create a new WorkoutGoal with this data.
     */
    create: XOR<WorkoutGoalCreateInput, WorkoutGoalUncheckedCreateInput>
    /**
     * In case the WorkoutGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutGoalUpdateInput, WorkoutGoalUncheckedUpdateInput>
  }

  /**
   * WorkoutGoal delete
   */
  export type WorkoutGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
    /**
     * Filter which WorkoutGoal to delete.
     */
    where: WorkoutGoalWhereUniqueInput
  }

  /**
   * WorkoutGoal deleteMany
   */
  export type WorkoutGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutGoals to delete
     */
    where?: WorkoutGoalWhereInput
    /**
     * Limit how many WorkoutGoals to delete.
     */
    limit?: number
  }

  /**
   * WorkoutGoal without action
   */
  export type WorkoutGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutGoal
     */
    select?: WorkoutGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkoutGoal
     */
    omit?: WorkoutGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutGoalInclude<ExtArgs> | null
  }


  /**
   * Model Marathon
   */

  export type AggregateMarathon = {
    _count: MarathonCountAggregateOutputType | null
    _avg: MarathonAvgAggregateOutputType | null
    _sum: MarathonSumAggregateOutputType | null
    _min: MarathonMinAggregateOutputType | null
    _max: MarathonMaxAggregateOutputType | null
  }

  export type MarathonAvgAggregateOutputType = {
    distanceKm: number | null
  }

  export type MarathonSumAggregateOutputType = {
    distanceKm: number | null
  }

  export type MarathonMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    about: string | null
    startDate: Date | null
    endDate: Date | null
    imagePath: string | null
    type: $Enums.MarathonType | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    distanceKm: number | null
  }

  export type MarathonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    about: string | null
    startDate: Date | null
    endDate: Date | null
    imagePath: string | null
    type: $Enums.MarathonType | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    location: string | null
    distanceKm: number | null
  }

  export type MarathonCountAggregateOutputType = {
    id: number
    title: number
    description: number
    about: number
    startDate: number
    endDate: number
    imagePath: number
    type: number
    createdBy: number
    createdAt: number
    updatedAt: number
    location: number
    distanceKm: number
    _all: number
  }


  export type MarathonAvgAggregateInputType = {
    distanceKm?: true
  }

  export type MarathonSumAggregateInputType = {
    distanceKm?: true
  }

  export type MarathonMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    about?: true
    startDate?: true
    endDate?: true
    imagePath?: true
    type?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    distanceKm?: true
  }

  export type MarathonMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    about?: true
    startDate?: true
    endDate?: true
    imagePath?: true
    type?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    distanceKm?: true
  }

  export type MarathonCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    about?: true
    startDate?: true
    endDate?: true
    imagePath?: true
    type?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    location?: true
    distanceKm?: true
    _all?: true
  }

  export type MarathonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marathon to aggregate.
     */
    where?: MarathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marathons to fetch.
     */
    orderBy?: MarathonOrderByWithRelationInput | MarathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marathons
    **/
    _count?: true | MarathonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarathonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarathonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarathonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarathonMaxAggregateInputType
  }

  export type GetMarathonAggregateType<T extends MarathonAggregateArgs> = {
        [P in keyof T & keyof AggregateMarathon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarathon[P]>
      : GetScalarType<T[P], AggregateMarathon[P]>
  }




  export type MarathonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarathonWhereInput
    orderBy?: MarathonOrderByWithAggregationInput | MarathonOrderByWithAggregationInput[]
    by: MarathonScalarFieldEnum[] | MarathonScalarFieldEnum
    having?: MarathonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarathonCountAggregateInputType | true
    _avg?: MarathonAvgAggregateInputType
    _sum?: MarathonSumAggregateInputType
    _min?: MarathonMinAggregateInputType
    _max?: MarathonMaxAggregateInputType
  }

  export type MarathonGroupByOutputType = {
    id: string
    title: string
    description: string
    about: string
    startDate: Date
    endDate: Date
    imagePath: string | null
    type: $Enums.MarathonType
    createdBy: string | null
    createdAt: Date
    updatedAt: Date
    location: string | null
    distanceKm: number
    _count: MarathonCountAggregateOutputType | null
    _avg: MarathonAvgAggregateOutputType | null
    _sum: MarathonSumAggregateOutputType | null
    _min: MarathonMinAggregateOutputType | null
    _max: MarathonMaxAggregateOutputType | null
  }

  type GetMarathonGroupByPayload<T extends MarathonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarathonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarathonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarathonGroupByOutputType[P]>
            : GetScalarType<T[P], MarathonGroupByOutputType[P]>
        }
      >
    >


  export type MarathonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    about?: boolean
    startDate?: boolean
    endDate?: boolean
    imagePath?: boolean
    type?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    distanceKm?: boolean
    admin?: boolean | Marathon$adminArgs<ExtArgs>
    marathoAgeRule?: boolean | Marathon$marathoAgeRuleArgs<ExtArgs>
    MarathonUser?: boolean | Marathon$MarathonUserArgs<ExtArgs>
    Rewards?: boolean | Marathon$RewardsArgs<ExtArgs>
    _count?: boolean | MarathonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marathon"]>



  export type MarathonSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    about?: boolean
    startDate?: boolean
    endDate?: boolean
    imagePath?: boolean
    type?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean
    distanceKm?: boolean
  }

  export type MarathonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "about" | "startDate" | "endDate" | "imagePath" | "type" | "createdBy" | "createdAt" | "updatedAt" | "location" | "distanceKm", ExtArgs["result"]["marathon"]>
  export type MarathonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Marathon$adminArgs<ExtArgs>
    marathoAgeRule?: boolean | Marathon$marathoAgeRuleArgs<ExtArgs>
    MarathonUser?: boolean | Marathon$MarathonUserArgs<ExtArgs>
    Rewards?: boolean | Marathon$RewardsArgs<ExtArgs>
    _count?: boolean | MarathonCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MarathonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marathon"
    objects: {
      admin: Prisma.$AdminsPayload<ExtArgs> | null
      marathoAgeRule: Prisma.$marathoAgeRulePayload<ExtArgs>[]
      MarathonUser: Prisma.$MarathonUserPayload<ExtArgs>[]
      Rewards: Prisma.$RewardsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      about: string
      startDate: Date
      endDate: Date
      imagePath: string | null
      type: $Enums.MarathonType
      createdBy: string | null
      createdAt: Date
      updatedAt: Date
      location: string | null
      distanceKm: number
    }, ExtArgs["result"]["marathon"]>
    composites: {}
  }

  type MarathonGetPayload<S extends boolean | null | undefined | MarathonDefaultArgs> = $Result.GetResult<Prisma.$MarathonPayload, S>

  type MarathonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarathonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarathonCountAggregateInputType | true
    }

  export interface MarathonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marathon'], meta: { name: 'Marathon' } }
    /**
     * Find zero or one Marathon that matches the filter.
     * @param {MarathonFindUniqueArgs} args - Arguments to find a Marathon
     * @example
     * // Get one Marathon
     * const marathon = await prisma.marathon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarathonFindUniqueArgs>(args: SelectSubset<T, MarathonFindUniqueArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marathon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarathonFindUniqueOrThrowArgs} args - Arguments to find a Marathon
     * @example
     * // Get one Marathon
     * const marathon = await prisma.marathon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarathonFindUniqueOrThrowArgs>(args: SelectSubset<T, MarathonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marathon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonFindFirstArgs} args - Arguments to find a Marathon
     * @example
     * // Get one Marathon
     * const marathon = await prisma.marathon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarathonFindFirstArgs>(args?: SelectSubset<T, MarathonFindFirstArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marathon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonFindFirstOrThrowArgs} args - Arguments to find a Marathon
     * @example
     * // Get one Marathon
     * const marathon = await prisma.marathon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarathonFindFirstOrThrowArgs>(args?: SelectSubset<T, MarathonFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marathons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marathons
     * const marathons = await prisma.marathon.findMany()
     * 
     * // Get first 10 Marathons
     * const marathons = await prisma.marathon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marathonWithIdOnly = await prisma.marathon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarathonFindManyArgs>(args?: SelectSubset<T, MarathonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marathon.
     * @param {MarathonCreateArgs} args - Arguments to create a Marathon.
     * @example
     * // Create one Marathon
     * const Marathon = await prisma.marathon.create({
     *   data: {
     *     // ... data to create a Marathon
     *   }
     * })
     * 
     */
    create<T extends MarathonCreateArgs>(args: SelectSubset<T, MarathonCreateArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marathons.
     * @param {MarathonCreateManyArgs} args - Arguments to create many Marathons.
     * @example
     * // Create many Marathons
     * const marathon = await prisma.marathon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarathonCreateManyArgs>(args?: SelectSubset<T, MarathonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Marathon.
     * @param {MarathonDeleteArgs} args - Arguments to delete one Marathon.
     * @example
     * // Delete one Marathon
     * const Marathon = await prisma.marathon.delete({
     *   where: {
     *     // ... filter to delete one Marathon
     *   }
     * })
     * 
     */
    delete<T extends MarathonDeleteArgs>(args: SelectSubset<T, MarathonDeleteArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marathon.
     * @param {MarathonUpdateArgs} args - Arguments to update one Marathon.
     * @example
     * // Update one Marathon
     * const marathon = await prisma.marathon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarathonUpdateArgs>(args: SelectSubset<T, MarathonUpdateArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marathons.
     * @param {MarathonDeleteManyArgs} args - Arguments to filter Marathons to delete.
     * @example
     * // Delete a few Marathons
     * const { count } = await prisma.marathon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarathonDeleteManyArgs>(args?: SelectSubset<T, MarathonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marathons
     * const marathon = await prisma.marathon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarathonUpdateManyArgs>(args: SelectSubset<T, MarathonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Marathon.
     * @param {MarathonUpsertArgs} args - Arguments to update or create a Marathon.
     * @example
     * // Update or create a Marathon
     * const marathon = await prisma.marathon.upsert({
     *   create: {
     *     // ... data to create a Marathon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marathon we want to update
     *   }
     * })
     */
    upsert<T extends MarathonUpsertArgs>(args: SelectSubset<T, MarathonUpsertArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonCountArgs} args - Arguments to filter Marathons to count.
     * @example
     * // Count the number of Marathons
     * const count = await prisma.marathon.count({
     *   where: {
     *     // ... the filter for the Marathons we want to count
     *   }
     * })
    **/
    count<T extends MarathonCountArgs>(
      args?: Subset<T, MarathonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarathonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarathonAggregateArgs>(args: Subset<T, MarathonAggregateArgs>): Prisma.PrismaPromise<GetMarathonAggregateType<T>>

    /**
     * Group by Marathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonGroupByArgs} args - Group by arguments.
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
      T extends MarathonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarathonGroupByArgs['orderBy'] }
        : { orderBy?: MarathonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarathonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarathonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marathon model
   */
  readonly fields: MarathonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marathon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarathonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Marathon$adminArgs<ExtArgs> = {}>(args?: Subset<T, Marathon$adminArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    marathoAgeRule<T extends Marathon$marathoAgeRuleArgs<ExtArgs> = {}>(args?: Subset<T, Marathon$marathoAgeRuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MarathonUser<T extends Marathon$MarathonUserArgs<ExtArgs> = {}>(args?: Subset<T, Marathon$MarathonUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Rewards<T extends Marathon$RewardsArgs<ExtArgs> = {}>(args?: Subset<T, Marathon$RewardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Marathon model
   */
  interface MarathonFieldRefs {
    readonly id: FieldRef<"Marathon", 'String'>
    readonly title: FieldRef<"Marathon", 'String'>
    readonly description: FieldRef<"Marathon", 'String'>
    readonly about: FieldRef<"Marathon", 'String'>
    readonly startDate: FieldRef<"Marathon", 'DateTime'>
    readonly endDate: FieldRef<"Marathon", 'DateTime'>
    readonly imagePath: FieldRef<"Marathon", 'String'>
    readonly type: FieldRef<"Marathon", 'MarathonType'>
    readonly createdBy: FieldRef<"Marathon", 'String'>
    readonly createdAt: FieldRef<"Marathon", 'DateTime'>
    readonly updatedAt: FieldRef<"Marathon", 'DateTime'>
    readonly location: FieldRef<"Marathon", 'String'>
    readonly distanceKm: FieldRef<"Marathon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Marathon findUnique
   */
  export type MarathonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter, which Marathon to fetch.
     */
    where: MarathonWhereUniqueInput
  }

  /**
   * Marathon findUniqueOrThrow
   */
  export type MarathonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter, which Marathon to fetch.
     */
    where: MarathonWhereUniqueInput
  }

  /**
   * Marathon findFirst
   */
  export type MarathonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter, which Marathon to fetch.
     */
    where?: MarathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marathons to fetch.
     */
    orderBy?: MarathonOrderByWithRelationInput | MarathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marathons.
     */
    cursor?: MarathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marathons.
     */
    distinct?: MarathonScalarFieldEnum | MarathonScalarFieldEnum[]
  }

  /**
   * Marathon findFirstOrThrow
   */
  export type MarathonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter, which Marathon to fetch.
     */
    where?: MarathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marathons to fetch.
     */
    orderBy?: MarathonOrderByWithRelationInput | MarathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marathons.
     */
    cursor?: MarathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marathons.
     */
    distinct?: MarathonScalarFieldEnum | MarathonScalarFieldEnum[]
  }

  /**
   * Marathon findMany
   */
  export type MarathonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter, which Marathons to fetch.
     */
    where?: MarathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marathons to fetch.
     */
    orderBy?: MarathonOrderByWithRelationInput | MarathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marathons.
     */
    cursor?: MarathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marathons.
     */
    distinct?: MarathonScalarFieldEnum | MarathonScalarFieldEnum[]
  }

  /**
   * Marathon create
   */
  export type MarathonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * The data needed to create a Marathon.
     */
    data: XOR<MarathonCreateInput, MarathonUncheckedCreateInput>
  }

  /**
   * Marathon createMany
   */
  export type MarathonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marathons.
     */
    data: MarathonCreateManyInput | MarathonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marathon update
   */
  export type MarathonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * The data needed to update a Marathon.
     */
    data: XOR<MarathonUpdateInput, MarathonUncheckedUpdateInput>
    /**
     * Choose, which Marathon to update.
     */
    where: MarathonWhereUniqueInput
  }

  /**
   * Marathon updateMany
   */
  export type MarathonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marathons.
     */
    data: XOR<MarathonUpdateManyMutationInput, MarathonUncheckedUpdateManyInput>
    /**
     * Filter which Marathons to update
     */
    where?: MarathonWhereInput
    /**
     * Limit how many Marathons to update.
     */
    limit?: number
  }

  /**
   * Marathon upsert
   */
  export type MarathonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * The filter to search for the Marathon to update in case it exists.
     */
    where: MarathonWhereUniqueInput
    /**
     * In case the Marathon found by the `where` argument doesn't exist, create a new Marathon with this data.
     */
    create: XOR<MarathonCreateInput, MarathonUncheckedCreateInput>
    /**
     * In case the Marathon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarathonUpdateInput, MarathonUncheckedUpdateInput>
  }

  /**
   * Marathon delete
   */
  export type MarathonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
    /**
     * Filter which Marathon to delete.
     */
    where: MarathonWhereUniqueInput
  }

  /**
   * Marathon deleteMany
   */
  export type MarathonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marathons to delete
     */
    where?: MarathonWhereInput
    /**
     * Limit how many Marathons to delete.
     */
    limit?: number
  }

  /**
   * Marathon.admin
   */
  export type Marathon$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    where?: AdminsWhereInput
  }

  /**
   * Marathon.marathoAgeRule
   */
  export type Marathon$marathoAgeRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    where?: marathoAgeRuleWhereInput
    orderBy?: marathoAgeRuleOrderByWithRelationInput | marathoAgeRuleOrderByWithRelationInput[]
    cursor?: marathoAgeRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarathoAgeRuleScalarFieldEnum | MarathoAgeRuleScalarFieldEnum[]
  }

  /**
   * Marathon.MarathonUser
   */
  export type Marathon$MarathonUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    where?: MarathonUserWhereInput
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    cursor?: MarathonUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarathonUserScalarFieldEnum | MarathonUserScalarFieldEnum[]
  }

  /**
   * Marathon.Rewards
   */
  export type Marathon$RewardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    where?: RewardsWhereInput
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    cursor?: RewardsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Marathon without action
   */
  export type MarathonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marathon
     */
    select?: MarathonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marathon
     */
    omit?: MarathonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonInclude<ExtArgs> | null
  }


  /**
   * Model Rewards
   */

  export type AggregateRewards = {
    _count: RewardsCountAggregateOutputType | null
    _min: RewardsMinAggregateOutputType | null
    _max: RewardsMaxAggregateOutputType | null
  }

  export type RewardsMinAggregateOutputType = {
    id: string | null
    text: string | null
    marathonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardsMaxAggregateOutputType = {
    id: string | null
    text: string | null
    marathonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RewardsCountAggregateOutputType = {
    id: number
    text: number
    marathonId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RewardsMinAggregateInputType = {
    id?: true
    text?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardsMaxAggregateInputType = {
    id?: true
    text?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RewardsCountAggregateInputType = {
    id?: true
    text?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RewardsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to aggregate.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rewards
    **/
    _count?: true | RewardsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RewardsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RewardsMaxAggregateInputType
  }

  export type GetRewardsAggregateType<T extends RewardsAggregateArgs> = {
        [P in keyof T & keyof AggregateRewards]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRewards[P]>
      : GetScalarType<T[P], AggregateRewards[P]>
  }




  export type RewardsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RewardsWhereInput
    orderBy?: RewardsOrderByWithAggregationInput | RewardsOrderByWithAggregationInput[]
    by: RewardsScalarFieldEnum[] | RewardsScalarFieldEnum
    having?: RewardsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RewardsCountAggregateInputType | true
    _min?: RewardsMinAggregateInputType
    _max?: RewardsMaxAggregateInputType
  }

  export type RewardsGroupByOutputType = {
    id: string
    text: string
    marathonId: string
    createdAt: Date
    updatedAt: Date
    _count: RewardsCountAggregateOutputType | null
    _min: RewardsMinAggregateOutputType | null
    _max: RewardsMaxAggregateOutputType | null
  }

  type GetRewardsGroupByPayload<T extends RewardsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RewardsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RewardsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RewardsGroupByOutputType[P]>
            : GetScalarType<T[P], RewardsGroupByOutputType[P]>
        }
      >
    >


  export type RewardsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    marathonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rewards"]>



  export type RewardsSelectScalar = {
    id?: boolean
    text?: boolean
    marathonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RewardsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "marathonId" | "createdAt" | "updatedAt", ExtArgs["result"]["rewards"]>
  export type RewardsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
  }

  export type $RewardsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rewards"
    objects: {
      marathon: Prisma.$MarathonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      marathonId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rewards"]>
    composites: {}
  }

  type RewardsGetPayload<S extends boolean | null | undefined | RewardsDefaultArgs> = $Result.GetResult<Prisma.$RewardsPayload, S>

  type RewardsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RewardsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RewardsCountAggregateInputType | true
    }

  export interface RewardsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rewards'], meta: { name: 'Rewards' } }
    /**
     * Find zero or one Rewards that matches the filter.
     * @param {RewardsFindUniqueArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RewardsFindUniqueArgs>(args: SelectSubset<T, RewardsFindUniqueArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rewards that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RewardsFindUniqueOrThrowArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RewardsFindUniqueOrThrowArgs>(args: SelectSubset<T, RewardsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindFirstArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RewardsFindFirstArgs>(args?: SelectSubset<T, RewardsFindFirstArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rewards that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindFirstOrThrowArgs} args - Arguments to find a Rewards
     * @example
     * // Get one Rewards
     * const rewards = await prisma.rewards.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RewardsFindFirstOrThrowArgs>(args?: SelectSubset<T, RewardsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rewards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rewards
     * const rewards = await prisma.rewards.findMany()
     * 
     * // Get first 10 Rewards
     * const rewards = await prisma.rewards.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rewardsWithIdOnly = await prisma.rewards.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RewardsFindManyArgs>(args?: SelectSubset<T, RewardsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rewards.
     * @param {RewardsCreateArgs} args - Arguments to create a Rewards.
     * @example
     * // Create one Rewards
     * const Rewards = await prisma.rewards.create({
     *   data: {
     *     // ... data to create a Rewards
     *   }
     * })
     * 
     */
    create<T extends RewardsCreateArgs>(args: SelectSubset<T, RewardsCreateArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rewards.
     * @param {RewardsCreateManyArgs} args - Arguments to create many Rewards.
     * @example
     * // Create many Rewards
     * const rewards = await prisma.rewards.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RewardsCreateManyArgs>(args?: SelectSubset<T, RewardsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rewards.
     * @param {RewardsDeleteArgs} args - Arguments to delete one Rewards.
     * @example
     * // Delete one Rewards
     * const Rewards = await prisma.rewards.delete({
     *   where: {
     *     // ... filter to delete one Rewards
     *   }
     * })
     * 
     */
    delete<T extends RewardsDeleteArgs>(args: SelectSubset<T, RewardsDeleteArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rewards.
     * @param {RewardsUpdateArgs} args - Arguments to update one Rewards.
     * @example
     * // Update one Rewards
     * const rewards = await prisma.rewards.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RewardsUpdateArgs>(args: SelectSubset<T, RewardsUpdateArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rewards.
     * @param {RewardsDeleteManyArgs} args - Arguments to filter Rewards to delete.
     * @example
     * // Delete a few Rewards
     * const { count } = await prisma.rewards.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RewardsDeleteManyArgs>(args?: SelectSubset<T, RewardsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rewards
     * const rewards = await prisma.rewards.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RewardsUpdateManyArgs>(args: SelectSubset<T, RewardsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rewards.
     * @param {RewardsUpsertArgs} args - Arguments to update or create a Rewards.
     * @example
     * // Update or create a Rewards
     * const rewards = await prisma.rewards.upsert({
     *   create: {
     *     // ... data to create a Rewards
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rewards we want to update
     *   }
     * })
     */
    upsert<T extends RewardsUpsertArgs>(args: SelectSubset<T, RewardsUpsertArgs<ExtArgs>>): Prisma__RewardsClient<$Result.GetResult<Prisma.$RewardsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsCountArgs} args - Arguments to filter Rewards to count.
     * @example
     * // Count the number of Rewards
     * const count = await prisma.rewards.count({
     *   where: {
     *     // ... the filter for the Rewards we want to count
     *   }
     * })
    **/
    count<T extends RewardsCountArgs>(
      args?: Subset<T, RewardsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RewardsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RewardsAggregateArgs>(args: Subset<T, RewardsAggregateArgs>): Prisma.PrismaPromise<GetRewardsAggregateType<T>>

    /**
     * Group by Rewards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RewardsGroupByArgs} args - Group by arguments.
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
      T extends RewardsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RewardsGroupByArgs['orderBy'] }
        : { orderBy?: RewardsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RewardsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRewardsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rewards model
   */
  readonly fields: RewardsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rewards.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RewardsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marathon<T extends MarathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarathonDefaultArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rewards model
   */
  interface RewardsFieldRefs {
    readonly id: FieldRef<"Rewards", 'String'>
    readonly text: FieldRef<"Rewards", 'String'>
    readonly marathonId: FieldRef<"Rewards", 'String'>
    readonly createdAt: FieldRef<"Rewards", 'DateTime'>
    readonly updatedAt: FieldRef<"Rewards", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rewards findUnique
   */
  export type RewardsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards findUniqueOrThrow
   */
  export type RewardsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards findFirst
   */
  export type RewardsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards findFirstOrThrow
   */
  export type RewardsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards findMany
   */
  export type RewardsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter, which Rewards to fetch.
     */
    where?: RewardsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rewards to fetch.
     */
    orderBy?: RewardsOrderByWithRelationInput | RewardsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rewards.
     */
    cursor?: RewardsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rewards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rewards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rewards.
     */
    distinct?: RewardsScalarFieldEnum | RewardsScalarFieldEnum[]
  }

  /**
   * Rewards create
   */
  export type RewardsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The data needed to create a Rewards.
     */
    data: XOR<RewardsCreateInput, RewardsUncheckedCreateInput>
  }

  /**
   * Rewards createMany
   */
  export type RewardsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rewards.
     */
    data: RewardsCreateManyInput | RewardsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rewards update
   */
  export type RewardsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The data needed to update a Rewards.
     */
    data: XOR<RewardsUpdateInput, RewardsUncheckedUpdateInput>
    /**
     * Choose, which Rewards to update.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards updateMany
   */
  export type RewardsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rewards.
     */
    data: XOR<RewardsUpdateManyMutationInput, RewardsUncheckedUpdateManyInput>
    /**
     * Filter which Rewards to update
     */
    where?: RewardsWhereInput
    /**
     * Limit how many Rewards to update.
     */
    limit?: number
  }

  /**
   * Rewards upsert
   */
  export type RewardsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * The filter to search for the Rewards to update in case it exists.
     */
    where: RewardsWhereUniqueInput
    /**
     * In case the Rewards found by the `where` argument doesn't exist, create a new Rewards with this data.
     */
    create: XOR<RewardsCreateInput, RewardsUncheckedCreateInput>
    /**
     * In case the Rewards was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RewardsUpdateInput, RewardsUncheckedUpdateInput>
  }

  /**
   * Rewards delete
   */
  export type RewardsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
    /**
     * Filter which Rewards to delete.
     */
    where: RewardsWhereUniqueInput
  }

  /**
   * Rewards deleteMany
   */
  export type RewardsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rewards to delete
     */
    where?: RewardsWhereInput
    /**
     * Limit how many Rewards to delete.
     */
    limit?: number
  }

  /**
   * Rewards without action
   */
  export type RewardsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rewards
     */
    select?: RewardsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rewards
     */
    omit?: RewardsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RewardsInclude<ExtArgs> | null
  }


  /**
   * Model MarathonUser
   */

  export type AggregateMarathonUser = {
    _count: MarathonUserCountAggregateOutputType | null
    _avg: MarathonUserAvgAggregateOutputType | null
    _sum: MarathonUserSumAggregateOutputType | null
    _min: MarathonUserMinAggregateOutputType | null
    _max: MarathonUserMaxAggregateOutputType | null
  }

  export type MarathonUserAvgAggregateOutputType = {
    distanceKm: Decimal | null
    durationMs: number | null
    submissionCount: number | null
  }

  export type MarathonUserSumAggregateOutputType = {
    distanceKm: Decimal | null
    durationMs: number | null
    submissionCount: number | null
  }

  export type MarathonUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    marathonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    distanceKm: Decimal | null
    durationMs: number | null
    submissionCount: number | null
  }

  export type MarathonUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    marathonId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    distanceKm: Decimal | null
    durationMs: number | null
    submissionCount: number | null
  }

  export type MarathonUserCountAggregateOutputType = {
    id: number
    userId: number
    marathonId: number
    createdAt: number
    updatedAt: number
    distanceKm: number
    durationMs: number
    submissionCount: number
    _all: number
  }


  export type MarathonUserAvgAggregateInputType = {
    distanceKm?: true
    durationMs?: true
    submissionCount?: true
  }

  export type MarathonUserSumAggregateInputType = {
    distanceKm?: true
    durationMs?: true
    submissionCount?: true
  }

  export type MarathonUserMinAggregateInputType = {
    id?: true
    userId?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
    submissionCount?: true
  }

  export type MarathonUserMaxAggregateInputType = {
    id?: true
    userId?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
    submissionCount?: true
  }

  export type MarathonUserCountAggregateInputType = {
    id?: true
    userId?: true
    marathonId?: true
    createdAt?: true
    updatedAt?: true
    distanceKm?: true
    durationMs?: true
    submissionCount?: true
    _all?: true
  }

  export type MarathonUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarathonUser to aggregate.
     */
    where?: MarathonUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarathonUsers to fetch.
     */
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarathonUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarathonUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarathonUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarathonUsers
    **/
    _count?: true | MarathonUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarathonUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarathonUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarathonUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarathonUserMaxAggregateInputType
  }

  export type GetMarathonUserAggregateType<T extends MarathonUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMarathonUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarathonUser[P]>
      : GetScalarType<T[P], AggregateMarathonUser[P]>
  }




  export type MarathonUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarathonUserWhereInput
    orderBy?: MarathonUserOrderByWithAggregationInput | MarathonUserOrderByWithAggregationInput[]
    by: MarathonUserScalarFieldEnum[] | MarathonUserScalarFieldEnum
    having?: MarathonUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarathonUserCountAggregateInputType | true
    _avg?: MarathonUserAvgAggregateInputType
    _sum?: MarathonUserSumAggregateInputType
    _min?: MarathonUserMinAggregateInputType
    _max?: MarathonUserMaxAggregateInputType
  }

  export type MarathonUserGroupByOutputType = {
    id: string
    userId: string
    marathonId: string
    createdAt: Date
    updatedAt: Date
    distanceKm: Decimal | null
    durationMs: number | null
    submissionCount: number | null
    _count: MarathonUserCountAggregateOutputType | null
    _avg: MarathonUserAvgAggregateOutputType | null
    _sum: MarathonUserSumAggregateOutputType | null
    _min: MarathonUserMinAggregateOutputType | null
    _max: MarathonUserMaxAggregateOutputType | null
  }

  type GetMarathonUserGroupByPayload<T extends MarathonUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarathonUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarathonUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarathonUserGroupByOutputType[P]>
            : GetScalarType<T[P], MarathonUserGroupByOutputType[P]>
        }
      >
    >


  export type MarathonUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    marathonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distanceKm?: boolean
    durationMs?: boolean
    submissionCount?: boolean
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marathonUser"]>



  export type MarathonUserSelectScalar = {
    id?: boolean
    userId?: boolean
    marathonId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    distanceKm?: boolean
    durationMs?: boolean
    submissionCount?: boolean
  }

  export type MarathonUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "marathonId" | "createdAt" | "updatedAt" | "distanceKm" | "durationMs" | "submissionCount", ExtArgs["result"]["marathonUser"]>
  export type MarathonUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MarathonUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarathonUser"
    objects: {
      marathon: Prisma.$MarathonPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      marathonId: string
      createdAt: Date
      updatedAt: Date
      distanceKm: Prisma.Decimal | null
      durationMs: number | null
      submissionCount: number | null
    }, ExtArgs["result"]["marathonUser"]>
    composites: {}
  }

  type MarathonUserGetPayload<S extends boolean | null | undefined | MarathonUserDefaultArgs> = $Result.GetResult<Prisma.$MarathonUserPayload, S>

  type MarathonUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarathonUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarathonUserCountAggregateInputType | true
    }

  export interface MarathonUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarathonUser'], meta: { name: 'MarathonUser' } }
    /**
     * Find zero or one MarathonUser that matches the filter.
     * @param {MarathonUserFindUniqueArgs} args - Arguments to find a MarathonUser
     * @example
     * // Get one MarathonUser
     * const marathonUser = await prisma.marathonUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarathonUserFindUniqueArgs>(args: SelectSubset<T, MarathonUserFindUniqueArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarathonUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarathonUserFindUniqueOrThrowArgs} args - Arguments to find a MarathonUser
     * @example
     * // Get one MarathonUser
     * const marathonUser = await prisma.marathonUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarathonUserFindUniqueOrThrowArgs>(args: SelectSubset<T, MarathonUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarathonUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserFindFirstArgs} args - Arguments to find a MarathonUser
     * @example
     * // Get one MarathonUser
     * const marathonUser = await prisma.marathonUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarathonUserFindFirstArgs>(args?: SelectSubset<T, MarathonUserFindFirstArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarathonUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserFindFirstOrThrowArgs} args - Arguments to find a MarathonUser
     * @example
     * // Get one MarathonUser
     * const marathonUser = await prisma.marathonUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarathonUserFindFirstOrThrowArgs>(args?: SelectSubset<T, MarathonUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarathonUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarathonUsers
     * const marathonUsers = await prisma.marathonUser.findMany()
     * 
     * // Get first 10 MarathonUsers
     * const marathonUsers = await prisma.marathonUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marathonUserWithIdOnly = await prisma.marathonUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarathonUserFindManyArgs>(args?: SelectSubset<T, MarathonUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarathonUser.
     * @param {MarathonUserCreateArgs} args - Arguments to create a MarathonUser.
     * @example
     * // Create one MarathonUser
     * const MarathonUser = await prisma.marathonUser.create({
     *   data: {
     *     // ... data to create a MarathonUser
     *   }
     * })
     * 
     */
    create<T extends MarathonUserCreateArgs>(args: SelectSubset<T, MarathonUserCreateArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarathonUsers.
     * @param {MarathonUserCreateManyArgs} args - Arguments to create many MarathonUsers.
     * @example
     * // Create many MarathonUsers
     * const marathonUser = await prisma.marathonUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarathonUserCreateManyArgs>(args?: SelectSubset<T, MarathonUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarathonUser.
     * @param {MarathonUserDeleteArgs} args - Arguments to delete one MarathonUser.
     * @example
     * // Delete one MarathonUser
     * const MarathonUser = await prisma.marathonUser.delete({
     *   where: {
     *     // ... filter to delete one MarathonUser
     *   }
     * })
     * 
     */
    delete<T extends MarathonUserDeleteArgs>(args: SelectSubset<T, MarathonUserDeleteArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarathonUser.
     * @param {MarathonUserUpdateArgs} args - Arguments to update one MarathonUser.
     * @example
     * // Update one MarathonUser
     * const marathonUser = await prisma.marathonUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarathonUserUpdateArgs>(args: SelectSubset<T, MarathonUserUpdateArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarathonUsers.
     * @param {MarathonUserDeleteManyArgs} args - Arguments to filter MarathonUsers to delete.
     * @example
     * // Delete a few MarathonUsers
     * const { count } = await prisma.marathonUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarathonUserDeleteManyArgs>(args?: SelectSubset<T, MarathonUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarathonUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarathonUsers
     * const marathonUser = await prisma.marathonUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarathonUserUpdateManyArgs>(args: SelectSubset<T, MarathonUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarathonUser.
     * @param {MarathonUserUpsertArgs} args - Arguments to update or create a MarathonUser.
     * @example
     * // Update or create a MarathonUser
     * const marathonUser = await prisma.marathonUser.upsert({
     *   create: {
     *     // ... data to create a MarathonUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarathonUser we want to update
     *   }
     * })
     */
    upsert<T extends MarathonUserUpsertArgs>(args: SelectSubset<T, MarathonUserUpsertArgs<ExtArgs>>): Prisma__MarathonUserClient<$Result.GetResult<Prisma.$MarathonUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarathonUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserCountArgs} args - Arguments to filter MarathonUsers to count.
     * @example
     * // Count the number of MarathonUsers
     * const count = await prisma.marathonUser.count({
     *   where: {
     *     // ... the filter for the MarathonUsers we want to count
     *   }
     * })
    **/
    count<T extends MarathonUserCountArgs>(
      args?: Subset<T, MarathonUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarathonUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarathonUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarathonUserAggregateArgs>(args: Subset<T, MarathonUserAggregateArgs>): Prisma.PrismaPromise<GetMarathonUserAggregateType<T>>

    /**
     * Group by MarathonUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathonUserGroupByArgs} args - Group by arguments.
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
      T extends MarathonUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarathonUserGroupByArgs['orderBy'] }
        : { orderBy?: MarathonUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarathonUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarathonUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarathonUser model
   */
  readonly fields: MarathonUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarathonUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarathonUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marathon<T extends MarathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarathonDefaultArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MarathonUser model
   */
  interface MarathonUserFieldRefs {
    readonly id: FieldRef<"MarathonUser", 'String'>
    readonly userId: FieldRef<"MarathonUser", 'String'>
    readonly marathonId: FieldRef<"MarathonUser", 'String'>
    readonly createdAt: FieldRef<"MarathonUser", 'DateTime'>
    readonly updatedAt: FieldRef<"MarathonUser", 'DateTime'>
    readonly distanceKm: FieldRef<"MarathonUser", 'Decimal'>
    readonly durationMs: FieldRef<"MarathonUser", 'Int'>
    readonly submissionCount: FieldRef<"MarathonUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MarathonUser findUnique
   */
  export type MarathonUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter, which MarathonUser to fetch.
     */
    where: MarathonUserWhereUniqueInput
  }

  /**
   * MarathonUser findUniqueOrThrow
   */
  export type MarathonUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter, which MarathonUser to fetch.
     */
    where: MarathonUserWhereUniqueInput
  }

  /**
   * MarathonUser findFirst
   */
  export type MarathonUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter, which MarathonUser to fetch.
     */
    where?: MarathonUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarathonUsers to fetch.
     */
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarathonUsers.
     */
    cursor?: MarathonUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarathonUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarathonUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarathonUsers.
     */
    distinct?: MarathonUserScalarFieldEnum | MarathonUserScalarFieldEnum[]
  }

  /**
   * MarathonUser findFirstOrThrow
   */
  export type MarathonUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter, which MarathonUser to fetch.
     */
    where?: MarathonUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarathonUsers to fetch.
     */
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarathonUsers.
     */
    cursor?: MarathonUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarathonUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarathonUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarathonUsers.
     */
    distinct?: MarathonUserScalarFieldEnum | MarathonUserScalarFieldEnum[]
  }

  /**
   * MarathonUser findMany
   */
  export type MarathonUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter, which MarathonUsers to fetch.
     */
    where?: MarathonUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarathonUsers to fetch.
     */
    orderBy?: MarathonUserOrderByWithRelationInput | MarathonUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarathonUsers.
     */
    cursor?: MarathonUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarathonUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarathonUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarathonUsers.
     */
    distinct?: MarathonUserScalarFieldEnum | MarathonUserScalarFieldEnum[]
  }

  /**
   * MarathonUser create
   */
  export type MarathonUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * The data needed to create a MarathonUser.
     */
    data: XOR<MarathonUserCreateInput, MarathonUserUncheckedCreateInput>
  }

  /**
   * MarathonUser createMany
   */
  export type MarathonUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarathonUsers.
     */
    data: MarathonUserCreateManyInput | MarathonUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarathonUser update
   */
  export type MarathonUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * The data needed to update a MarathonUser.
     */
    data: XOR<MarathonUserUpdateInput, MarathonUserUncheckedUpdateInput>
    /**
     * Choose, which MarathonUser to update.
     */
    where: MarathonUserWhereUniqueInput
  }

  /**
   * MarathonUser updateMany
   */
  export type MarathonUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarathonUsers.
     */
    data: XOR<MarathonUserUpdateManyMutationInput, MarathonUserUncheckedUpdateManyInput>
    /**
     * Filter which MarathonUsers to update
     */
    where?: MarathonUserWhereInput
    /**
     * Limit how many MarathonUsers to update.
     */
    limit?: number
  }

  /**
   * MarathonUser upsert
   */
  export type MarathonUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * The filter to search for the MarathonUser to update in case it exists.
     */
    where: MarathonUserWhereUniqueInput
    /**
     * In case the MarathonUser found by the `where` argument doesn't exist, create a new MarathonUser with this data.
     */
    create: XOR<MarathonUserCreateInput, MarathonUserUncheckedCreateInput>
    /**
     * In case the MarathonUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarathonUserUpdateInput, MarathonUserUncheckedUpdateInput>
  }

  /**
   * MarathonUser delete
   */
  export type MarathonUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
    /**
     * Filter which MarathonUser to delete.
     */
    where: MarathonUserWhereUniqueInput
  }

  /**
   * MarathonUser deleteMany
   */
  export type MarathonUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarathonUsers to delete
     */
    where?: MarathonUserWhereInput
    /**
     * Limit how many MarathonUsers to delete.
     */
    limit?: number
  }

  /**
   * MarathonUser without action
   */
  export type MarathonUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarathonUser
     */
    select?: MarathonUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarathonUser
     */
    omit?: MarathonUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarathonUserInclude<ExtArgs> | null
  }


  /**
   * Model Blogs
   */

  export type AggregateBlogs = {
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  export type BlogsAvgAggregateOutputType = {
    readTime: number | null
  }

  export type BlogsSumAggregateOutputType = {
    readTime: number | null
  }

  export type BlogsMinAggregateOutputType = {
    id: string | null
    title: string | null
    readTime: number | null
    description: string | null
    details: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    imagePath: string | null
  }

  export type BlogsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    readTime: number | null
    description: string | null
    details: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    imagePath: string | null
  }

  export type BlogsCountAggregateOutputType = {
    id: number
    title: number
    readTime: number
    description: number
    details: number
    createdAt: number
    updatedAt: number
    createdBy: number
    imagePath: number
    _all: number
  }


  export type BlogsAvgAggregateInputType = {
    readTime?: true
  }

  export type BlogsSumAggregateInputType = {
    readTime?: true
  }

  export type BlogsMinAggregateInputType = {
    id?: true
    title?: true
    readTime?: true
    description?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    imagePath?: true
  }

  export type BlogsMaxAggregateInputType = {
    id?: true
    title?: true
    readTime?: true
    description?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    imagePath?: true
  }

  export type BlogsCountAggregateInputType = {
    id?: true
    title?: true
    readTime?: true
    description?: true
    details?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    imagePath?: true
    _all?: true
  }

  export type BlogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to aggregate.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogsMaxAggregateInputType
  }

  export type GetBlogsAggregateType<T extends BlogsAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogs[P]>
      : GetScalarType<T[P], AggregateBlogs[P]>
  }




  export type BlogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogsWhereInput
    orderBy?: BlogsOrderByWithAggregationInput | BlogsOrderByWithAggregationInput[]
    by: BlogsScalarFieldEnum[] | BlogsScalarFieldEnum
    having?: BlogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogsCountAggregateInputType | true
    _avg?: BlogsAvgAggregateInputType
    _sum?: BlogsSumAggregateInputType
    _min?: BlogsMinAggregateInputType
    _max?: BlogsMaxAggregateInputType
  }

  export type BlogsGroupByOutputType = {
    id: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    imagePath: string
    _count: BlogsCountAggregateOutputType | null
    _avg: BlogsAvgAggregateOutputType | null
    _sum: BlogsSumAggregateOutputType | null
    _min: BlogsMinAggregateOutputType | null
    _max: BlogsMaxAggregateOutputType | null
  }

  type GetBlogsGroupByPayload<T extends BlogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogsGroupByOutputType[P]>
            : GetScalarType<T[P], BlogsGroupByOutputType[P]>
        }
      >
    >


  export type BlogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    readTime?: boolean
    description?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    imagePath?: boolean
    admin?: boolean | Blogs$adminArgs<ExtArgs>
  }, ExtArgs["result"]["blogs"]>



  export type BlogsSelectScalar = {
    id?: boolean
    title?: boolean
    readTime?: boolean
    description?: boolean
    details?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    imagePath?: boolean
  }

  export type BlogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "readTime" | "description" | "details" | "createdAt" | "updatedAt" | "createdBy" | "imagePath", ExtArgs["result"]["blogs"]>
  export type BlogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | Blogs$adminArgs<ExtArgs>
  }

  export type $BlogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blogs"
    objects: {
      admin: Prisma.$AdminsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      readTime: number
      description: string
      details: string
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      imagePath: string
    }, ExtArgs["result"]["blogs"]>
    composites: {}
  }

  type BlogsGetPayload<S extends boolean | null | undefined | BlogsDefaultArgs> = $Result.GetResult<Prisma.$BlogsPayload, S>

  type BlogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogsCountAggregateInputType | true
    }

  export interface BlogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blogs'], meta: { name: 'Blogs' } }
    /**
     * Find zero or one Blogs that matches the filter.
     * @param {BlogsFindUniqueArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogsFindUniqueArgs>(args: SelectSubset<T, BlogsFindUniqueArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blogs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogsFindUniqueOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogsFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogsFindFirstArgs>(args?: SelectSubset<T, BlogsFindFirstArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindFirstOrThrowArgs} args - Arguments to find a Blogs
     * @example
     * // Get one Blogs
     * const blogs = await prisma.blogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogsFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blogs.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blogs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogsWithIdOnly = await prisma.blogs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogsFindManyArgs>(args?: SelectSubset<T, BlogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blogs.
     * @param {BlogsCreateArgs} args - Arguments to create a Blogs.
     * @example
     * // Create one Blogs
     * const Blogs = await prisma.blogs.create({
     *   data: {
     *     // ... data to create a Blogs
     *   }
     * })
     * 
     */
    create<T extends BlogsCreateArgs>(args: SelectSubset<T, BlogsCreateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogsCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blogs = await prisma.blogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogsCreateManyArgs>(args?: SelectSubset<T, BlogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Blogs.
     * @param {BlogsDeleteArgs} args - Arguments to delete one Blogs.
     * @example
     * // Delete one Blogs
     * const Blogs = await prisma.blogs.delete({
     *   where: {
     *     // ... filter to delete one Blogs
     *   }
     * })
     * 
     */
    delete<T extends BlogsDeleteArgs>(args: SelectSubset<T, BlogsDeleteArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blogs.
     * @param {BlogsUpdateArgs} args - Arguments to update one Blogs.
     * @example
     * // Update one Blogs
     * const blogs = await prisma.blogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogsUpdateArgs>(args: SelectSubset<T, BlogsUpdateArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogsDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogsDeleteManyArgs>(args?: SelectSubset<T, BlogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blogs = await prisma.blogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogsUpdateManyArgs>(args: SelectSubset<T, BlogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Blogs.
     * @param {BlogsUpsertArgs} args - Arguments to update or create a Blogs.
     * @example
     * // Update or create a Blogs
     * const blogs = await prisma.blogs.upsert({
     *   create: {
     *     // ... data to create a Blogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blogs we want to update
     *   }
     * })
     */
    upsert<T extends BlogsUpsertArgs>(args: SelectSubset<T, BlogsUpsertArgs<ExtArgs>>): Prisma__BlogsClient<$Result.GetResult<Prisma.$BlogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blogs.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogsCountArgs>(
      args?: Subset<T, BlogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogsAggregateArgs>(args: Subset<T, BlogsAggregateArgs>): Prisma.PrismaPromise<GetBlogsAggregateType<T>>

    /**
     * Group by Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogsGroupByArgs} args - Group by arguments.
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
      T extends BlogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogsGroupByArgs['orderBy'] }
        : { orderBy?: BlogsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blogs model
   */
  readonly fields: BlogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends Blogs$adminArgs<ExtArgs> = {}>(args?: Subset<T, Blogs$adminArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Blogs model
   */
  interface BlogsFieldRefs {
    readonly id: FieldRef<"Blogs", 'String'>
    readonly title: FieldRef<"Blogs", 'String'>
    readonly readTime: FieldRef<"Blogs", 'Int'>
    readonly description: FieldRef<"Blogs", 'String'>
    readonly details: FieldRef<"Blogs", 'String'>
    readonly createdAt: FieldRef<"Blogs", 'DateTime'>
    readonly updatedAt: FieldRef<"Blogs", 'DateTime'>
    readonly createdBy: FieldRef<"Blogs", 'String'>
    readonly imagePath: FieldRef<"Blogs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blogs findUnique
   */
  export type BlogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findUniqueOrThrow
   */
  export type BlogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs findFirst
   */
  export type BlogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findFirstOrThrow
   */
  export type BlogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs findMany
   */
  export type BlogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogsOrderByWithRelationInput | BlogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogsScalarFieldEnum | BlogsScalarFieldEnum[]
  }

  /**
   * Blogs create
   */
  export type BlogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Blogs.
     */
    data: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
  }

  /**
   * Blogs createMany
   */
  export type BlogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogsCreateManyInput | BlogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blogs update
   */
  export type BlogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Blogs.
     */
    data: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
    /**
     * Choose, which Blogs to update.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs updateMany
   */
  export type BlogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blogs upsert
   */
  export type BlogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Blogs to update in case it exists.
     */
    where: BlogsWhereUniqueInput
    /**
     * In case the Blogs found by the `where` argument doesn't exist, create a new Blogs with this data.
     */
    create: XOR<BlogsCreateInput, BlogsUncheckedCreateInput>
    /**
     * In case the Blogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogsUpdateInput, BlogsUncheckedUpdateInput>
  }

  /**
   * Blogs delete
   */
  export type BlogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
    /**
     * Filter which Blogs to delete.
     */
    where: BlogsWhereUniqueInput
  }

  /**
   * Blogs deleteMany
   */
  export type BlogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogsWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blogs.admin
   */
  export type Blogs$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    where?: AdminsWhereInput
  }

  /**
   * Blogs without action
   */
  export type BlogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blogs
     */
    select?: BlogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blogs
     */
    omit?: BlogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogsInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerMinAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePath: string | null
  }

  export type BannerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imagePath: string | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    imagePath: number
    _all: number
  }


  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    imagePath?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    imagePath: string
    _count: BannerCountAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
  }, ExtArgs["result"]["banner"]>



  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagePath?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "imagePath", ExtArgs["result"]["banner"]>

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      createdAt: Date
      updatedAt: Date
      imagePath: string
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'String'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
    readonly imagePath: FieldRef<"Banner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
  }


  /**
   * Model marathoAgeRule
   */

  export type AggregateMarathoAgeRule = {
    _count: MarathoAgeRuleCountAggregateOutputType | null
    _avg: MarathoAgeRuleAvgAggregateOutputType | null
    _sum: MarathoAgeRuleSumAggregateOutputType | null
    _min: MarathoAgeRuleMinAggregateOutputType | null
    _max: MarathoAgeRuleMaxAggregateOutputType | null
  }

  export type MarathoAgeRuleAvgAggregateOutputType = {
    ageMin: number | null
    ageMax: number | null
    distanceKm: number | null
  }

  export type MarathoAgeRuleSumAggregateOutputType = {
    ageMin: number | null
    ageMax: number | null
    distanceKm: number | null
  }

  export type MarathoAgeRuleMinAggregateOutputType = {
    id: string | null
    marathonId: string | null
    ageMin: number | null
    ageMax: number | null
    distanceKm: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MarathoAgeRuleMaxAggregateOutputType = {
    id: string | null
    marathonId: string | null
    ageMin: number | null
    ageMax: number | null
    distanceKm: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MarathoAgeRuleCountAggregateOutputType = {
    id: number
    marathonId: number
    ageMin: number
    ageMax: number
    distanceKm: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MarathoAgeRuleAvgAggregateInputType = {
    ageMin?: true
    ageMax?: true
    distanceKm?: true
  }

  export type MarathoAgeRuleSumAggregateInputType = {
    ageMin?: true
    ageMax?: true
    distanceKm?: true
  }

  export type MarathoAgeRuleMinAggregateInputType = {
    id?: true
    marathonId?: true
    ageMin?: true
    ageMax?: true
    distanceKm?: true
    created_at?: true
    updated_at?: true
  }

  export type MarathoAgeRuleMaxAggregateInputType = {
    id?: true
    marathonId?: true
    ageMin?: true
    ageMax?: true
    distanceKm?: true
    created_at?: true
    updated_at?: true
  }

  export type MarathoAgeRuleCountAggregateInputType = {
    id?: true
    marathonId?: true
    ageMin?: true
    ageMax?: true
    distanceKm?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MarathoAgeRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marathoAgeRule to aggregate.
     */
    where?: marathoAgeRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marathoAgeRules to fetch.
     */
    orderBy?: marathoAgeRuleOrderByWithRelationInput | marathoAgeRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marathoAgeRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marathoAgeRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marathoAgeRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marathoAgeRules
    **/
    _count?: true | MarathoAgeRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarathoAgeRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarathoAgeRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarathoAgeRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarathoAgeRuleMaxAggregateInputType
  }

  export type GetMarathoAgeRuleAggregateType<T extends MarathoAgeRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateMarathoAgeRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarathoAgeRule[P]>
      : GetScalarType<T[P], AggregateMarathoAgeRule[P]>
  }




  export type marathoAgeRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marathoAgeRuleWhereInput
    orderBy?: marathoAgeRuleOrderByWithAggregationInput | marathoAgeRuleOrderByWithAggregationInput[]
    by: MarathoAgeRuleScalarFieldEnum[] | MarathoAgeRuleScalarFieldEnum
    having?: marathoAgeRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarathoAgeRuleCountAggregateInputType | true
    _avg?: MarathoAgeRuleAvgAggregateInputType
    _sum?: MarathoAgeRuleSumAggregateInputType
    _min?: MarathoAgeRuleMinAggregateInputType
    _max?: MarathoAgeRuleMaxAggregateInputType
  }

  export type MarathoAgeRuleGroupByOutputType = {
    id: string
    marathonId: string
    ageMin: number | null
    ageMax: number | null
    distanceKm: number
    created_at: Date | null
    updated_at: Date | null
    _count: MarathoAgeRuleCountAggregateOutputType | null
    _avg: MarathoAgeRuleAvgAggregateOutputType | null
    _sum: MarathoAgeRuleSumAggregateOutputType | null
    _min: MarathoAgeRuleMinAggregateOutputType | null
    _max: MarathoAgeRuleMaxAggregateOutputType | null
  }

  type GetMarathoAgeRuleGroupByPayload<T extends marathoAgeRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarathoAgeRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarathoAgeRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarathoAgeRuleGroupByOutputType[P]>
            : GetScalarType<T[P], MarathoAgeRuleGroupByOutputType[P]>
        }
      >
    >


  export type marathoAgeRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marathonId?: boolean
    ageMin?: boolean
    ageMax?: boolean
    distanceKm?: boolean
    created_at?: boolean
    updated_at?: boolean
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marathoAgeRule"]>



  export type marathoAgeRuleSelectScalar = {
    id?: boolean
    marathonId?: boolean
    ageMin?: boolean
    ageMax?: boolean
    distanceKm?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type marathoAgeRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marathonId" | "ageMin" | "ageMax" | "distanceKm" | "created_at" | "updated_at", ExtArgs["result"]["marathoAgeRule"]>
  export type marathoAgeRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marathon?: boolean | MarathonDefaultArgs<ExtArgs>
  }

  export type $marathoAgeRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "marathoAgeRule"
    objects: {
      marathon: Prisma.$MarathonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marathonId: string
      ageMin: number | null
      ageMax: number | null
      distanceKm: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["marathoAgeRule"]>
    composites: {}
  }

  type marathoAgeRuleGetPayload<S extends boolean | null | undefined | marathoAgeRuleDefaultArgs> = $Result.GetResult<Prisma.$marathoAgeRulePayload, S>

  type marathoAgeRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marathoAgeRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarathoAgeRuleCountAggregateInputType | true
    }

  export interface marathoAgeRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['marathoAgeRule'], meta: { name: 'marathoAgeRule' } }
    /**
     * Find zero or one MarathoAgeRule that matches the filter.
     * @param {marathoAgeRuleFindUniqueArgs} args - Arguments to find a MarathoAgeRule
     * @example
     * // Get one MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marathoAgeRuleFindUniqueArgs>(args: SelectSubset<T, marathoAgeRuleFindUniqueArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarathoAgeRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marathoAgeRuleFindUniqueOrThrowArgs} args - Arguments to find a MarathoAgeRule
     * @example
     * // Get one MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marathoAgeRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, marathoAgeRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarathoAgeRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleFindFirstArgs} args - Arguments to find a MarathoAgeRule
     * @example
     * // Get one MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marathoAgeRuleFindFirstArgs>(args?: SelectSubset<T, marathoAgeRuleFindFirstArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarathoAgeRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleFindFirstOrThrowArgs} args - Arguments to find a MarathoAgeRule
     * @example
     * // Get one MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marathoAgeRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, marathoAgeRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarathoAgeRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarathoAgeRules
     * const marathoAgeRules = await prisma.marathoAgeRule.findMany()
     * 
     * // Get first 10 MarathoAgeRules
     * const marathoAgeRules = await prisma.marathoAgeRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marathoAgeRuleWithIdOnly = await prisma.marathoAgeRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends marathoAgeRuleFindManyArgs>(args?: SelectSubset<T, marathoAgeRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarathoAgeRule.
     * @param {marathoAgeRuleCreateArgs} args - Arguments to create a MarathoAgeRule.
     * @example
     * // Create one MarathoAgeRule
     * const MarathoAgeRule = await prisma.marathoAgeRule.create({
     *   data: {
     *     // ... data to create a MarathoAgeRule
     *   }
     * })
     * 
     */
    create<T extends marathoAgeRuleCreateArgs>(args: SelectSubset<T, marathoAgeRuleCreateArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarathoAgeRules.
     * @param {marathoAgeRuleCreateManyArgs} args - Arguments to create many MarathoAgeRules.
     * @example
     * // Create many MarathoAgeRules
     * const marathoAgeRule = await prisma.marathoAgeRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marathoAgeRuleCreateManyArgs>(args?: SelectSubset<T, marathoAgeRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MarathoAgeRule.
     * @param {marathoAgeRuleDeleteArgs} args - Arguments to delete one MarathoAgeRule.
     * @example
     * // Delete one MarathoAgeRule
     * const MarathoAgeRule = await prisma.marathoAgeRule.delete({
     *   where: {
     *     // ... filter to delete one MarathoAgeRule
     *   }
     * })
     * 
     */
    delete<T extends marathoAgeRuleDeleteArgs>(args: SelectSubset<T, marathoAgeRuleDeleteArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarathoAgeRule.
     * @param {marathoAgeRuleUpdateArgs} args - Arguments to update one MarathoAgeRule.
     * @example
     * // Update one MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marathoAgeRuleUpdateArgs>(args: SelectSubset<T, marathoAgeRuleUpdateArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarathoAgeRules.
     * @param {marathoAgeRuleDeleteManyArgs} args - Arguments to filter MarathoAgeRules to delete.
     * @example
     * // Delete a few MarathoAgeRules
     * const { count } = await prisma.marathoAgeRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marathoAgeRuleDeleteManyArgs>(args?: SelectSubset<T, marathoAgeRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarathoAgeRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarathoAgeRules
     * const marathoAgeRule = await prisma.marathoAgeRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marathoAgeRuleUpdateManyArgs>(args: SelectSubset<T, marathoAgeRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MarathoAgeRule.
     * @param {marathoAgeRuleUpsertArgs} args - Arguments to update or create a MarathoAgeRule.
     * @example
     * // Update or create a MarathoAgeRule
     * const marathoAgeRule = await prisma.marathoAgeRule.upsert({
     *   create: {
     *     // ... data to create a MarathoAgeRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarathoAgeRule we want to update
     *   }
     * })
     */
    upsert<T extends marathoAgeRuleUpsertArgs>(args: SelectSubset<T, marathoAgeRuleUpsertArgs<ExtArgs>>): Prisma__marathoAgeRuleClient<$Result.GetResult<Prisma.$marathoAgeRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarathoAgeRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleCountArgs} args - Arguments to filter MarathoAgeRules to count.
     * @example
     * // Count the number of MarathoAgeRules
     * const count = await prisma.marathoAgeRule.count({
     *   where: {
     *     // ... the filter for the MarathoAgeRules we want to count
     *   }
     * })
    **/
    count<T extends marathoAgeRuleCountArgs>(
      args?: Subset<T, marathoAgeRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarathoAgeRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarathoAgeRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarathoAgeRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarathoAgeRuleAggregateArgs>(args: Subset<T, MarathoAgeRuleAggregateArgs>): Prisma.PrismaPromise<GetMarathoAgeRuleAggregateType<T>>

    /**
     * Group by MarathoAgeRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marathoAgeRuleGroupByArgs} args - Group by arguments.
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
      T extends marathoAgeRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marathoAgeRuleGroupByArgs['orderBy'] }
        : { orderBy?: marathoAgeRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, marathoAgeRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarathoAgeRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the marathoAgeRule model
   */
  readonly fields: marathoAgeRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marathoAgeRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marathoAgeRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marathon<T extends MarathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarathonDefaultArgs<ExtArgs>>): Prisma__MarathonClient<$Result.GetResult<Prisma.$MarathonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the marathoAgeRule model
   */
  interface marathoAgeRuleFieldRefs {
    readonly id: FieldRef<"marathoAgeRule", 'String'>
    readonly marathonId: FieldRef<"marathoAgeRule", 'String'>
    readonly ageMin: FieldRef<"marathoAgeRule", 'Int'>
    readonly ageMax: FieldRef<"marathoAgeRule", 'Int'>
    readonly distanceKm: FieldRef<"marathoAgeRule", 'Int'>
    readonly created_at: FieldRef<"marathoAgeRule", 'DateTime'>
    readonly updated_at: FieldRef<"marathoAgeRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * marathoAgeRule findUnique
   */
  export type marathoAgeRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter, which marathoAgeRule to fetch.
     */
    where: marathoAgeRuleWhereUniqueInput
  }

  /**
   * marathoAgeRule findUniqueOrThrow
   */
  export type marathoAgeRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter, which marathoAgeRule to fetch.
     */
    where: marathoAgeRuleWhereUniqueInput
  }

  /**
   * marathoAgeRule findFirst
   */
  export type marathoAgeRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter, which marathoAgeRule to fetch.
     */
    where?: marathoAgeRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marathoAgeRules to fetch.
     */
    orderBy?: marathoAgeRuleOrderByWithRelationInput | marathoAgeRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marathoAgeRules.
     */
    cursor?: marathoAgeRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marathoAgeRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marathoAgeRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marathoAgeRules.
     */
    distinct?: MarathoAgeRuleScalarFieldEnum | MarathoAgeRuleScalarFieldEnum[]
  }

  /**
   * marathoAgeRule findFirstOrThrow
   */
  export type marathoAgeRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter, which marathoAgeRule to fetch.
     */
    where?: marathoAgeRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marathoAgeRules to fetch.
     */
    orderBy?: marathoAgeRuleOrderByWithRelationInput | marathoAgeRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marathoAgeRules.
     */
    cursor?: marathoAgeRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marathoAgeRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marathoAgeRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marathoAgeRules.
     */
    distinct?: MarathoAgeRuleScalarFieldEnum | MarathoAgeRuleScalarFieldEnum[]
  }

  /**
   * marathoAgeRule findMany
   */
  export type marathoAgeRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter, which marathoAgeRules to fetch.
     */
    where?: marathoAgeRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marathoAgeRules to fetch.
     */
    orderBy?: marathoAgeRuleOrderByWithRelationInput | marathoAgeRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marathoAgeRules.
     */
    cursor?: marathoAgeRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marathoAgeRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marathoAgeRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marathoAgeRules.
     */
    distinct?: MarathoAgeRuleScalarFieldEnum | MarathoAgeRuleScalarFieldEnum[]
  }

  /**
   * marathoAgeRule create
   */
  export type marathoAgeRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a marathoAgeRule.
     */
    data: XOR<marathoAgeRuleCreateInput, marathoAgeRuleUncheckedCreateInput>
  }

  /**
   * marathoAgeRule createMany
   */
  export type marathoAgeRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marathoAgeRules.
     */
    data: marathoAgeRuleCreateManyInput | marathoAgeRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marathoAgeRule update
   */
  export type marathoAgeRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a marathoAgeRule.
     */
    data: XOR<marathoAgeRuleUpdateInput, marathoAgeRuleUncheckedUpdateInput>
    /**
     * Choose, which marathoAgeRule to update.
     */
    where: marathoAgeRuleWhereUniqueInput
  }

  /**
   * marathoAgeRule updateMany
   */
  export type marathoAgeRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marathoAgeRules.
     */
    data: XOR<marathoAgeRuleUpdateManyMutationInput, marathoAgeRuleUncheckedUpdateManyInput>
    /**
     * Filter which marathoAgeRules to update
     */
    where?: marathoAgeRuleWhereInput
    /**
     * Limit how many marathoAgeRules to update.
     */
    limit?: number
  }

  /**
   * marathoAgeRule upsert
   */
  export type marathoAgeRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the marathoAgeRule to update in case it exists.
     */
    where: marathoAgeRuleWhereUniqueInput
    /**
     * In case the marathoAgeRule found by the `where` argument doesn't exist, create a new marathoAgeRule with this data.
     */
    create: XOR<marathoAgeRuleCreateInput, marathoAgeRuleUncheckedCreateInput>
    /**
     * In case the marathoAgeRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marathoAgeRuleUpdateInput, marathoAgeRuleUncheckedUpdateInput>
  }

  /**
   * marathoAgeRule delete
   */
  export type marathoAgeRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
    /**
     * Filter which marathoAgeRule to delete.
     */
    where: marathoAgeRuleWhereUniqueInput
  }

  /**
   * marathoAgeRule deleteMany
   */
  export type marathoAgeRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marathoAgeRules to delete
     */
    where?: marathoAgeRuleWhereInput
    /**
     * Limit how many marathoAgeRules to delete.
     */
    limit?: number
  }

  /**
   * marathoAgeRule without action
   */
  export type marathoAgeRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marathoAgeRule
     */
    select?: marathoAgeRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marathoAgeRule
     */
    omit?: marathoAgeRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marathoAgeRuleInclude<ExtArgs> | null
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


  export const AdminsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    fullName: 'fullName',
    email: 'email',
    gender: 'gender',
    address: 'address',
    birth: 'birth',
    heightFt: 'heightFt',
    heightIn: 'heightIn',
    weight: 'weight',
    createdAt: 'createdAt',
    updateAt: 'updateAt',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mobile: 'mobile',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    useCase: 'useCase'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    calories: 'calories',
    heartPts: 'heartPts',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    distanceKm: 'distanceKm',
    durationMs: 'durationMs'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const StepsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    steps: 'steps',
    createdAt: 'createdAt'
  };

  export type StepsScalarFieldEnum = (typeof StepsScalarFieldEnum)[keyof typeof StepsScalarFieldEnum]


  export const WorkoutGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bmi: 'bmi',
    weightGoal: 'weightGoal',
    goalType: 'goalType',
    activateReminder: 'activateReminder',
    reminderTime: 'reminderTime',
    totalDays: 'totalDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    endDate: 'endDate',
    startDate: 'startDate',
    workoutDays: 'workoutDays',
    caloriesGoal: 'caloriesGoal',
    workoutTimeMs: 'workoutTimeMs'
  };

  export type WorkoutGoalScalarFieldEnum = (typeof WorkoutGoalScalarFieldEnum)[keyof typeof WorkoutGoalScalarFieldEnum]


  export const MarathonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    about: 'about',
    startDate: 'startDate',
    endDate: 'endDate',
    imagePath: 'imagePath',
    type: 'type',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    location: 'location',
    distanceKm: 'distanceKm'
  };

  export type MarathonScalarFieldEnum = (typeof MarathonScalarFieldEnum)[keyof typeof MarathonScalarFieldEnum]


  export const RewardsScalarFieldEnum: {
    id: 'id',
    text: 'text',
    marathonId: 'marathonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RewardsScalarFieldEnum = (typeof RewardsScalarFieldEnum)[keyof typeof RewardsScalarFieldEnum]


  export const MarathonUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    marathonId: 'marathonId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    distanceKm: 'distanceKm',
    durationMs: 'durationMs',
    submissionCount: 'submissionCount'
  };

  export type MarathonUserScalarFieldEnum = (typeof MarathonUserScalarFieldEnum)[keyof typeof MarathonUserScalarFieldEnum]


  export const BlogsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    readTime: 'readTime',
    description: 'description',
    details: 'details',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy',
    imagePath: 'imagePath'
  };

  export type BlogsScalarFieldEnum = (typeof BlogsScalarFieldEnum)[keyof typeof BlogsScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imagePath: 'imagePath'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const MarathoAgeRuleScalarFieldEnum: {
    id: 'id',
    marathonId: 'marathonId',
    ageMin: 'ageMin',
    ageMax: 'ageMax',
    distanceKm: 'distanceKm',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MarathoAgeRuleScalarFieldEnum = (typeof MarathoAgeRuleScalarFieldEnum)[keyof typeof MarathoAgeRuleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AdminsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    password: 'password'
  };

  export type AdminsOrderByRelevanceFieldEnum = (typeof AdminsOrderByRelevanceFieldEnum)[keyof typeof AdminsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UsersOrderByRelevanceFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    fullName: 'fullName',
    email: 'email',
    gender: 'gender',
    address: 'address',
    image: 'image'
  };

  export type UsersOrderByRelevanceFieldEnum = (typeof UsersOrderByRelevanceFieldEnum)[keyof typeof UsersOrderByRelevanceFieldEnum]


  export const OtpOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    mobile: 'mobile',
    code: 'code'
  };

  export type OtpOrderByRelevanceFieldEnum = (typeof OtpOrderByRelevanceFieldEnum)[keyof typeof OtpOrderByRelevanceFieldEnum]


  export const WorkoutOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type WorkoutOrderByRelevanceFieldEnum = (typeof WorkoutOrderByRelevanceFieldEnum)[keyof typeof WorkoutOrderByRelevanceFieldEnum]


  export const StepsOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type StepsOrderByRelevanceFieldEnum = (typeof StepsOrderByRelevanceFieldEnum)[keyof typeof StepsOrderByRelevanceFieldEnum]


  export const WorkoutGoalOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    workoutDays: 'workoutDays'
  };

  export type WorkoutGoalOrderByRelevanceFieldEnum = (typeof WorkoutGoalOrderByRelevanceFieldEnum)[keyof typeof WorkoutGoalOrderByRelevanceFieldEnum]


  export const MarathonOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    about: 'about',
    imagePath: 'imagePath',
    createdBy: 'createdBy',
    location: 'location'
  };

  export type MarathonOrderByRelevanceFieldEnum = (typeof MarathonOrderByRelevanceFieldEnum)[keyof typeof MarathonOrderByRelevanceFieldEnum]


  export const RewardsOrderByRelevanceFieldEnum: {
    id: 'id',
    text: 'text',
    marathonId: 'marathonId'
  };

  export type RewardsOrderByRelevanceFieldEnum = (typeof RewardsOrderByRelevanceFieldEnum)[keyof typeof RewardsOrderByRelevanceFieldEnum]


  export const MarathonUserOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    marathonId: 'marathonId'
  };

  export type MarathonUserOrderByRelevanceFieldEnum = (typeof MarathonUserOrderByRelevanceFieldEnum)[keyof typeof MarathonUserOrderByRelevanceFieldEnum]


  export const BlogsOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    details: 'details',
    createdBy: 'createdBy',
    imagePath: 'imagePath'
  };

  export type BlogsOrderByRelevanceFieldEnum = (typeof BlogsOrderByRelevanceFieldEnum)[keyof typeof BlogsOrderByRelevanceFieldEnum]


  export const BannerOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    imagePath: 'imagePath'
  };

  export type BannerOrderByRelevanceFieldEnum = (typeof BannerOrderByRelevanceFieldEnum)[keyof typeof BannerOrderByRelevanceFieldEnum]


  export const marathoAgeRuleOrderByRelevanceFieldEnum: {
    id: 'id',
    marathonId: 'marathonId'
  };

  export type marathoAgeRuleOrderByRelevanceFieldEnum = (typeof marathoAgeRuleOrderByRelevanceFieldEnum)[keyof typeof marathoAgeRuleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'AdminRoles'
   */
  export type EnumAdminRolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRoles'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'UseCase'
   */
  export type EnumUseCaseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UseCase'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'WorkoutType'
   */
  export type EnumWorkoutTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WorkoutType'>
    


  /**
   * Reference to a field of type 'GoalType'
   */
  export type EnumGoalTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MarathonType'
   */
  export type EnumMarathonTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MarathonType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: StringFilter<"Admins"> | string
    name?: StringFilter<"Admins"> | string
    username?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    role?: EnumAdminRolesFilter<"Admins"> | $Enums.AdminRoles
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updateAt?: DateTimeFilter<"Admins"> | Date | string
    Blogs?: BlogsListRelationFilter
    marathon?: MarathonListRelationFilter
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    Blogs?: BlogsOrderByRelationAggregateInput
    marathon?: MarathonOrderByRelationAggregateInput
    _relevance?: AdminsOrderByRelevanceInput
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    name?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    role?: EnumAdminRolesFilter<"Admins"> | $Enums.AdminRoles
    createdAt?: DateTimeFilter<"Admins"> | Date | string
    updateAt?: DateTimeFilter<"Admins"> | Date | string
    Blogs?: BlogsListRelationFilter
    marathon?: MarathonListRelationFilter
  }, "id" | "username">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admins"> | string
    name?: StringWithAggregatesFilter<"Admins"> | string
    username?: StringWithAggregatesFilter<"Admins"> | string
    password?: StringWithAggregatesFilter<"Admins"> | string
    role?: EnumAdminRolesWithAggregatesFilter<"Admins"> | $Enums.AdminRoles
    createdAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Admins"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    mobile?: StringFilter<"Users"> | string
    fullName?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    gender?: StringNullableFilter<"Users"> | string | null
    address?: StringNullableFilter<"Users"> | string | null
    birth?: DateTimeNullableFilter<"Users"> | Date | string | null
    heightFt?: IntNullableFilter<"Users"> | number | null
    heightIn?: IntNullableFilter<"Users"> | number | null
    weight?: IntNullableFilter<"Users"> | number | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updateAt?: DateTimeFilter<"Users"> | Date | string
    image?: StringNullableFilter<"Users"> | string | null
    MarathonUser?: MarathonUserListRelationFilter
    Otp?: OtpListRelationFilter
    Steps?: StepsListRelationFilter
    Workout?: WorkoutListRelationFilter
    WorkoutGoal?: WorkoutGoalListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    heightFt?: SortOrderInput | SortOrder
    heightIn?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    image?: SortOrderInput | SortOrder
    MarathonUser?: MarathonUserOrderByRelationAggregateInput
    Otp?: OtpOrderByRelationAggregateInput
    Steps?: StepsOrderByRelationAggregateInput
    Workout?: WorkoutOrderByRelationAggregateInput
    WorkoutGoal?: WorkoutGoalOrderByRelationAggregateInput
    _relevance?: UsersOrderByRelevanceInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    fullName?: StringNullableFilter<"Users"> | string | null
    email?: StringNullableFilter<"Users"> | string | null
    gender?: StringNullableFilter<"Users"> | string | null
    address?: StringNullableFilter<"Users"> | string | null
    birth?: DateTimeNullableFilter<"Users"> | Date | string | null
    heightFt?: IntNullableFilter<"Users"> | number | null
    heightIn?: IntNullableFilter<"Users"> | number | null
    weight?: IntNullableFilter<"Users"> | number | null
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updateAt?: DateTimeFilter<"Users"> | Date | string
    image?: StringNullableFilter<"Users"> | string | null
    MarathonUser?: MarathonUserListRelationFilter
    Otp?: OtpListRelationFilter
    Steps?: StepsListRelationFilter
    Workout?: WorkoutListRelationFilter
    WorkoutGoal?: WorkoutGoalListRelationFilter
  }, "id" | "mobile">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    fullName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    birth?: SortOrderInput | SortOrder
    heightFt?: SortOrderInput | SortOrder
    heightIn?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    mobile?: StringWithAggregatesFilter<"Users"> | string
    fullName?: StringNullableWithAggregatesFilter<"Users"> | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Users"> | string | null
    address?: StringNullableWithAggregatesFilter<"Users"> | string | null
    birth?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    heightFt?: IntNullableWithAggregatesFilter<"Users"> | number | null
    heightIn?: IntNullableWithAggregatesFilter<"Users"> | number | null
    weight?: IntNullableWithAggregatesFilter<"Users"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringNullableFilter<"Otp"> | string | null
    mobile?: StringNullableFilter<"Otp"> | string | null
    code?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    useCase?: EnumUseCaseFilter<"Otp"> | $Enums.UseCase
    owner?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    useCase?: SortOrder
    owner?: UsersOrderByWithRelationInput
    _relevance?: OtpOrderByRelevanceInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    userId?: StringNullableFilter<"Otp"> | string | null
    mobile?: StringNullableFilter<"Otp"> | string | null
    code?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    useCase?: EnumUseCaseFilter<"Otp"> | $Enums.UseCase
    owner?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    useCase?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    userId?: StringNullableWithAggregatesFilter<"Otp"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Otp"> | string | null
    code?: StringWithAggregatesFilter<"Otp"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    useCase?: EnumUseCaseWithAggregatesFilter<"Otp"> | $Enums.UseCase
  }

  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    calories?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    type?: EnumWorkoutTypeNullableFilter<"Workout"> | $Enums.WorkoutType | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    distanceKm?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    durationMs?: IntFilter<"Workout"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    heartPts?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: WorkoutOrderByRelevanceInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: StringFilter<"Workout"> | string
    calories?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    type?: EnumWorkoutTypeNullableFilter<"Workout"> | $Enums.WorkoutType | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    distanceKm?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    durationMs?: IntFilter<"Workout"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    heartPts?: SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    userId?: StringWithAggregatesFilter<"Workout"> | string
    calories?: DecimalWithAggregatesFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalWithAggregatesFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    type?: EnumWorkoutTypeNullableWithAggregatesFilter<"Workout"> | $Enums.WorkoutType | null
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    distanceKm?: DecimalWithAggregatesFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    durationMs?: IntWithAggregatesFilter<"Workout"> | number
  }

  export type StepsWhereInput = {
    AND?: StepsWhereInput | StepsWhereInput[]
    OR?: StepsWhereInput[]
    NOT?: StepsWhereInput | StepsWhereInput[]
    id?: StringFilter<"Steps"> | string
    userId?: StringFilter<"Steps"> | string
    steps?: IntFilter<"Steps"> | number
    createdAt?: DateTimeFilter<"Steps"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type StepsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: StepsOrderByRelevanceInput
  }

  export type StepsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StepsWhereInput | StepsWhereInput[]
    OR?: StepsWhereInput[]
    NOT?: StepsWhereInput | StepsWhereInput[]
    userId?: StringFilter<"Steps"> | string
    steps?: IntFilter<"Steps"> | number
    createdAt?: DateTimeFilter<"Steps"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type StepsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
    _count?: StepsCountOrderByAggregateInput
    _avg?: StepsAvgOrderByAggregateInput
    _max?: StepsMaxOrderByAggregateInput
    _min?: StepsMinOrderByAggregateInput
    _sum?: StepsSumOrderByAggregateInput
  }

  export type StepsScalarWhereWithAggregatesInput = {
    AND?: StepsScalarWhereWithAggregatesInput | StepsScalarWhereWithAggregatesInput[]
    OR?: StepsScalarWhereWithAggregatesInput[]
    NOT?: StepsScalarWhereWithAggregatesInput | StepsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Steps"> | string
    userId?: StringWithAggregatesFilter<"Steps"> | string
    steps?: IntWithAggregatesFilter<"Steps"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Steps"> | Date | string
  }

  export type WorkoutGoalWhereInput = {
    AND?: WorkoutGoalWhereInput | WorkoutGoalWhereInput[]
    OR?: WorkoutGoalWhereInput[]
    NOT?: WorkoutGoalWhereInput | WorkoutGoalWhereInput[]
    id?: StringFilter<"WorkoutGoal"> | string
    userId?: StringFilter<"WorkoutGoal"> | string
    bmi?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFilter<"WorkoutGoal"> | number
    goalType?: EnumGoalTypeFilter<"WorkoutGoal"> | $Enums.GoalType
    activateReminder?: BoolNullableFilter<"WorkoutGoal"> | boolean | null
    reminderTime?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    totalDays?: IntNullableFilter<"WorkoutGoal"> | number | null
    createdAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    startDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    workoutDays?: StringNullableFilter<"WorkoutGoal"> | string | null
    caloriesGoal?: IntNullableFilter<"WorkoutGoal"> | number | null
    workoutTimeMs?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type WorkoutGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmi?: SortOrderInput | SortOrder
    weightGoal?: SortOrder
    goalType?: SortOrder
    activateReminder?: SortOrderInput | SortOrder
    reminderTime?: SortOrderInput | SortOrder
    totalDays?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    workoutDays?: SortOrderInput | SortOrder
    caloriesGoal?: SortOrderInput | SortOrder
    workoutTimeMs?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    _relevance?: WorkoutGoalOrderByRelevanceInput
  }

  export type WorkoutGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_createdAt?: WorkoutGoalUserIdCreatedAtCompoundUniqueInput
    AND?: WorkoutGoalWhereInput | WorkoutGoalWhereInput[]
    OR?: WorkoutGoalWhereInput[]
    NOT?: WorkoutGoalWhereInput | WorkoutGoalWhereInput[]
    userId?: StringFilter<"WorkoutGoal"> | string
    bmi?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFilter<"WorkoutGoal"> | number
    goalType?: EnumGoalTypeFilter<"WorkoutGoal"> | $Enums.GoalType
    activateReminder?: BoolNullableFilter<"WorkoutGoal"> | boolean | null
    reminderTime?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    totalDays?: IntNullableFilter<"WorkoutGoal"> | number | null
    createdAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    startDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    workoutDays?: StringNullableFilter<"WorkoutGoal"> | string | null
    caloriesGoal?: IntNullableFilter<"WorkoutGoal"> | number | null
    workoutTimeMs?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId_createdAt">

  export type WorkoutGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmi?: SortOrderInput | SortOrder
    weightGoal?: SortOrder
    goalType?: SortOrder
    activateReminder?: SortOrderInput | SortOrder
    reminderTime?: SortOrderInput | SortOrder
    totalDays?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endDate?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    workoutDays?: SortOrderInput | SortOrder
    caloriesGoal?: SortOrderInput | SortOrder
    workoutTimeMs?: SortOrderInput | SortOrder
    _count?: WorkoutGoalCountOrderByAggregateInput
    _avg?: WorkoutGoalAvgOrderByAggregateInput
    _max?: WorkoutGoalMaxOrderByAggregateInput
    _min?: WorkoutGoalMinOrderByAggregateInput
    _sum?: WorkoutGoalSumOrderByAggregateInput
  }

  export type WorkoutGoalScalarWhereWithAggregatesInput = {
    AND?: WorkoutGoalScalarWhereWithAggregatesInput | WorkoutGoalScalarWhereWithAggregatesInput[]
    OR?: WorkoutGoalScalarWhereWithAggregatesInput[]
    NOT?: WorkoutGoalScalarWhereWithAggregatesInput | WorkoutGoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutGoal"> | string
    userId?: StringWithAggregatesFilter<"WorkoutGoal"> | string
    bmi?: DecimalNullableWithAggregatesFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntWithAggregatesFilter<"WorkoutGoal"> | number
    goalType?: EnumGoalTypeWithAggregatesFilter<"WorkoutGoal"> | $Enums.GoalType
    activateReminder?: BoolNullableWithAggregatesFilter<"WorkoutGoal"> | boolean | null
    reminderTime?: DateTimeNullableWithAggregatesFilter<"WorkoutGoal"> | Date | string | null
    totalDays?: IntNullableWithAggregatesFilter<"WorkoutGoal"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkoutGoal"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"WorkoutGoal"> | Date | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"WorkoutGoal"> | Date | string | null
    workoutDays?: StringNullableWithAggregatesFilter<"WorkoutGoal"> | string | null
    caloriesGoal?: IntNullableWithAggregatesFilter<"WorkoutGoal"> | number | null
    workoutTimeMs?: DecimalNullableWithAggregatesFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
  }

  export type MarathonWhereInput = {
    AND?: MarathonWhereInput | MarathonWhereInput[]
    OR?: MarathonWhereInput[]
    NOT?: MarathonWhereInput | MarathonWhereInput[]
    id?: StringFilter<"Marathon"> | string
    title?: StringFilter<"Marathon"> | string
    description?: StringFilter<"Marathon"> | string
    about?: StringFilter<"Marathon"> | string
    startDate?: DateTimeFilter<"Marathon"> | Date | string
    endDate?: DateTimeFilter<"Marathon"> | Date | string
    imagePath?: StringNullableFilter<"Marathon"> | string | null
    type?: EnumMarathonTypeFilter<"Marathon"> | $Enums.MarathonType
    createdBy?: StringNullableFilter<"Marathon"> | string | null
    createdAt?: DateTimeFilter<"Marathon"> | Date | string
    updatedAt?: DateTimeFilter<"Marathon"> | Date | string
    location?: StringNullableFilter<"Marathon"> | string | null
    distanceKm?: IntFilter<"Marathon"> | number
    admin?: XOR<AdminsNullableScalarRelationFilter, AdminsWhereInput> | null
    marathoAgeRule?: MarathoAgeRuleListRelationFilter
    MarathonUser?: MarathonUserListRelationFilter
    Rewards?: RewardsListRelationFilter
  }

  export type MarathonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    about?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    type?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrderInput | SortOrder
    distanceKm?: SortOrder
    admin?: AdminsOrderByWithRelationInput
    marathoAgeRule?: marathoAgeRuleOrderByRelationAggregateInput
    MarathonUser?: MarathonUserOrderByRelationAggregateInput
    Rewards?: RewardsOrderByRelationAggregateInput
    _relevance?: MarathonOrderByRelevanceInput
  }

  export type MarathonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarathonWhereInput | MarathonWhereInput[]
    OR?: MarathonWhereInput[]
    NOT?: MarathonWhereInput | MarathonWhereInput[]
    title?: StringFilter<"Marathon"> | string
    description?: StringFilter<"Marathon"> | string
    about?: StringFilter<"Marathon"> | string
    startDate?: DateTimeFilter<"Marathon"> | Date | string
    endDate?: DateTimeFilter<"Marathon"> | Date | string
    imagePath?: StringNullableFilter<"Marathon"> | string | null
    type?: EnumMarathonTypeFilter<"Marathon"> | $Enums.MarathonType
    createdBy?: StringNullableFilter<"Marathon"> | string | null
    createdAt?: DateTimeFilter<"Marathon"> | Date | string
    updatedAt?: DateTimeFilter<"Marathon"> | Date | string
    location?: StringNullableFilter<"Marathon"> | string | null
    distanceKm?: IntFilter<"Marathon"> | number
    admin?: XOR<AdminsNullableScalarRelationFilter, AdminsWhereInput> | null
    marathoAgeRule?: MarathoAgeRuleListRelationFilter
    MarathonUser?: MarathonUserListRelationFilter
    Rewards?: RewardsListRelationFilter
  }, "id">

  export type MarathonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    about?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    imagePath?: SortOrderInput | SortOrder
    type?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrderInput | SortOrder
    distanceKm?: SortOrder
    _count?: MarathonCountOrderByAggregateInput
    _avg?: MarathonAvgOrderByAggregateInput
    _max?: MarathonMaxOrderByAggregateInput
    _min?: MarathonMinOrderByAggregateInput
    _sum?: MarathonSumOrderByAggregateInput
  }

  export type MarathonScalarWhereWithAggregatesInput = {
    AND?: MarathonScalarWhereWithAggregatesInput | MarathonScalarWhereWithAggregatesInput[]
    OR?: MarathonScalarWhereWithAggregatesInput[]
    NOT?: MarathonScalarWhereWithAggregatesInput | MarathonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marathon"> | string
    title?: StringWithAggregatesFilter<"Marathon"> | string
    description?: StringWithAggregatesFilter<"Marathon"> | string
    about?: StringWithAggregatesFilter<"Marathon"> | string
    startDate?: DateTimeWithAggregatesFilter<"Marathon"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Marathon"> | Date | string
    imagePath?: StringNullableWithAggregatesFilter<"Marathon"> | string | null
    type?: EnumMarathonTypeWithAggregatesFilter<"Marathon"> | $Enums.MarathonType
    createdBy?: StringNullableWithAggregatesFilter<"Marathon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Marathon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Marathon"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Marathon"> | string | null
    distanceKm?: IntWithAggregatesFilter<"Marathon"> | number
  }

  export type RewardsWhereInput = {
    AND?: RewardsWhereInput | RewardsWhereInput[]
    OR?: RewardsWhereInput[]
    NOT?: RewardsWhereInput | RewardsWhereInput[]
    id?: StringFilter<"Rewards"> | string
    text?: StringFilter<"Rewards"> | string
    marathonId?: StringFilter<"Rewards"> | string
    createdAt?: DateTimeFilter<"Rewards"> | Date | string
    updatedAt?: DateTimeFilter<"Rewards"> | Date | string
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
  }

  export type RewardsOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    marathon?: MarathonOrderByWithRelationInput
    _relevance?: RewardsOrderByRelevanceInput
  }

  export type RewardsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RewardsWhereInput | RewardsWhereInput[]
    OR?: RewardsWhereInput[]
    NOT?: RewardsWhereInput | RewardsWhereInput[]
    text?: StringFilter<"Rewards"> | string
    marathonId?: StringFilter<"Rewards"> | string
    createdAt?: DateTimeFilter<"Rewards"> | Date | string
    updatedAt?: DateTimeFilter<"Rewards"> | Date | string
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
  }, "id">

  export type RewardsOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RewardsCountOrderByAggregateInput
    _max?: RewardsMaxOrderByAggregateInput
    _min?: RewardsMinOrderByAggregateInput
  }

  export type RewardsScalarWhereWithAggregatesInput = {
    AND?: RewardsScalarWhereWithAggregatesInput | RewardsScalarWhereWithAggregatesInput[]
    OR?: RewardsScalarWhereWithAggregatesInput[]
    NOT?: RewardsScalarWhereWithAggregatesInput | RewardsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rewards"> | string
    text?: StringWithAggregatesFilter<"Rewards"> | string
    marathonId?: StringWithAggregatesFilter<"Rewards"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rewards"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rewards"> | Date | string
  }

  export type MarathonUserWhereInput = {
    AND?: MarathonUserWhereInput | MarathonUserWhereInput[]
    OR?: MarathonUserWhereInput[]
    NOT?: MarathonUserWhereInput | MarathonUserWhereInput[]
    id?: StringFilter<"MarathonUser"> | string
    userId?: StringFilter<"MarathonUser"> | string
    marathonId?: StringFilter<"MarathonUser"> | string
    createdAt?: DateTimeFilter<"MarathonUser"> | Date | string
    updatedAt?: DateTimeFilter<"MarathonUser"> | Date | string
    distanceKm?: DecimalNullableFilter<"MarathonUser"> | Decimal | DecimalJsLike | number | string | null
    durationMs?: IntNullableFilter<"MarathonUser"> | number | null
    submissionCount?: IntNullableFilter<"MarathonUser"> | number | null
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type MarathonUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    submissionCount?: SortOrderInput | SortOrder
    marathon?: MarathonOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    _relevance?: MarathonUserOrderByRelevanceInput
  }

  export type MarathonUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_marathonId?: MarathonUserUserIdMarathonIdCompoundUniqueInput
    AND?: MarathonUserWhereInput | MarathonUserWhereInput[]
    OR?: MarathonUserWhereInput[]
    NOT?: MarathonUserWhereInput | MarathonUserWhereInput[]
    userId?: StringFilter<"MarathonUser"> | string
    marathonId?: StringFilter<"MarathonUser"> | string
    createdAt?: DateTimeFilter<"MarathonUser"> | Date | string
    updatedAt?: DateTimeFilter<"MarathonUser"> | Date | string
    distanceKm?: DecimalNullableFilter<"MarathonUser"> | Decimal | DecimalJsLike | number | string | null
    durationMs?: IntNullableFilter<"MarathonUser"> | number | null
    submissionCount?: IntNullableFilter<"MarathonUser"> | number | null
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id" | "userId_marathonId">

  export type MarathonUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrderInput | SortOrder
    durationMs?: SortOrderInput | SortOrder
    submissionCount?: SortOrderInput | SortOrder
    _count?: MarathonUserCountOrderByAggregateInput
    _avg?: MarathonUserAvgOrderByAggregateInput
    _max?: MarathonUserMaxOrderByAggregateInput
    _min?: MarathonUserMinOrderByAggregateInput
    _sum?: MarathonUserSumOrderByAggregateInput
  }

  export type MarathonUserScalarWhereWithAggregatesInput = {
    AND?: MarathonUserScalarWhereWithAggregatesInput | MarathonUserScalarWhereWithAggregatesInput[]
    OR?: MarathonUserScalarWhereWithAggregatesInput[]
    NOT?: MarathonUserScalarWhereWithAggregatesInput | MarathonUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarathonUser"> | string
    userId?: StringWithAggregatesFilter<"MarathonUser"> | string
    marathonId?: StringWithAggregatesFilter<"MarathonUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MarathonUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MarathonUser"> | Date | string
    distanceKm?: DecimalNullableWithAggregatesFilter<"MarathonUser"> | Decimal | DecimalJsLike | number | string | null
    durationMs?: IntNullableWithAggregatesFilter<"MarathonUser"> | number | null
    submissionCount?: IntNullableWithAggregatesFilter<"MarathonUser"> | number | null
  }

  export type BlogsWhereInput = {
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    id?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    readTime?: IntFilter<"Blogs"> | number
    description?: StringFilter<"Blogs"> | string
    details?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    createdBy?: StringNullableFilter<"Blogs"> | string | null
    imagePath?: StringFilter<"Blogs"> | string
    admin?: XOR<AdminsNullableScalarRelationFilter, AdminsWhereInput> | null
  }

  export type BlogsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    readTime?: SortOrder
    description?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    imagePath?: SortOrder
    admin?: AdminsOrderByWithRelationInput
    _relevance?: BlogsOrderByRelevanceInput
  }

  export type BlogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogsWhereInput | BlogsWhereInput[]
    OR?: BlogsWhereInput[]
    NOT?: BlogsWhereInput | BlogsWhereInput[]
    title?: StringFilter<"Blogs"> | string
    readTime?: IntFilter<"Blogs"> | number
    description?: StringFilter<"Blogs"> | string
    details?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    createdBy?: StringNullableFilter<"Blogs"> | string | null
    imagePath?: StringFilter<"Blogs"> | string
    admin?: XOR<AdminsNullableScalarRelationFilter, AdminsWhereInput> | null
  }, "id">

  export type BlogsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    readTime?: SortOrder
    description?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    imagePath?: SortOrder
    _count?: BlogsCountOrderByAggregateInput
    _avg?: BlogsAvgOrderByAggregateInput
    _max?: BlogsMaxOrderByAggregateInput
    _min?: BlogsMinOrderByAggregateInput
    _sum?: BlogsSumOrderByAggregateInput
  }

  export type BlogsScalarWhereWithAggregatesInput = {
    AND?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    OR?: BlogsScalarWhereWithAggregatesInput[]
    NOT?: BlogsScalarWhereWithAggregatesInput | BlogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blogs"> | string
    title?: StringWithAggregatesFilter<"Blogs"> | string
    readTime?: IntWithAggregatesFilter<"Blogs"> | number
    description?: StringWithAggregatesFilter<"Blogs"> | string
    details?: StringWithAggregatesFilter<"Blogs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blogs"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Blogs"> | string | null
    imagePath?: StringWithAggregatesFilter<"Blogs"> | string
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: StringFilter<"Banner"> | string
    title?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    imagePath?: StringFilter<"Banner"> | string
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    _relevance?: BannerOrderByRelevanceInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    imagePath?: StringFilter<"Banner"> | string
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banner"> | string
    title?: StringWithAggregatesFilter<"Banner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    imagePath?: StringWithAggregatesFilter<"Banner"> | string
  }

  export type marathoAgeRuleWhereInput = {
    AND?: marathoAgeRuleWhereInput | marathoAgeRuleWhereInput[]
    OR?: marathoAgeRuleWhereInput[]
    NOT?: marathoAgeRuleWhereInput | marathoAgeRuleWhereInput[]
    id?: StringFilter<"marathoAgeRule"> | string
    marathonId?: StringFilter<"marathoAgeRule"> | string
    ageMin?: IntNullableFilter<"marathoAgeRule"> | number | null
    ageMax?: IntNullableFilter<"marathoAgeRule"> | number | null
    distanceKm?: IntFilter<"marathoAgeRule"> | number
    created_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
  }

  export type marathoAgeRuleOrderByWithRelationInput = {
    id?: SortOrder
    marathonId?: SortOrder
    ageMin?: SortOrderInput | SortOrder
    ageMax?: SortOrderInput | SortOrder
    distanceKm?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    marathon?: MarathonOrderByWithRelationInput
    _relevance?: marathoAgeRuleOrderByRelevanceInput
  }

  export type marathoAgeRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: marathoAgeRuleWhereInput | marathoAgeRuleWhereInput[]
    OR?: marathoAgeRuleWhereInput[]
    NOT?: marathoAgeRuleWhereInput | marathoAgeRuleWhereInput[]
    marathonId?: StringFilter<"marathoAgeRule"> | string
    ageMin?: IntNullableFilter<"marathoAgeRule"> | number | null
    ageMax?: IntNullableFilter<"marathoAgeRule"> | number | null
    distanceKm?: IntFilter<"marathoAgeRule"> | number
    created_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
    marathon?: XOR<MarathonScalarRelationFilter, MarathonWhereInput>
  }, "id">

  export type marathoAgeRuleOrderByWithAggregationInput = {
    id?: SortOrder
    marathonId?: SortOrder
    ageMin?: SortOrderInput | SortOrder
    ageMax?: SortOrderInput | SortOrder
    distanceKm?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: marathoAgeRuleCountOrderByAggregateInput
    _avg?: marathoAgeRuleAvgOrderByAggregateInput
    _max?: marathoAgeRuleMaxOrderByAggregateInput
    _min?: marathoAgeRuleMinOrderByAggregateInput
    _sum?: marathoAgeRuleSumOrderByAggregateInput
  }

  export type marathoAgeRuleScalarWhereWithAggregatesInput = {
    AND?: marathoAgeRuleScalarWhereWithAggregatesInput | marathoAgeRuleScalarWhereWithAggregatesInput[]
    OR?: marathoAgeRuleScalarWhereWithAggregatesInput[]
    NOT?: marathoAgeRuleScalarWhereWithAggregatesInput | marathoAgeRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"marathoAgeRule"> | string
    marathonId?: StringWithAggregatesFilter<"marathoAgeRule"> | string
    ageMin?: IntNullableWithAggregatesFilter<"marathoAgeRule"> | number | null
    ageMax?: IntNullableWithAggregatesFilter<"marathoAgeRule"> | number | null
    distanceKm?: IntWithAggregatesFilter<"marathoAgeRule"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"marathoAgeRule"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"marathoAgeRule"> | Date | string | null
  }

  export type AdminsCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    Blogs?: BlogsCreateNestedManyWithoutAdminInput
    marathon?: MarathonCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    Blogs?: BlogsUncheckedCreateNestedManyWithoutAdminInput
    marathon?: MarathonUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Blogs?: BlogsUpdateManyWithoutAdminNestedInput
    marathon?: MarathonUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Blogs?: BlogsUncheckedUpdateManyWithoutAdminNestedInput
    marathon?: MarathonUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminsCreateManyInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
  }

  export type AdminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserCreateNestedManyWithoutUserInput
    Otp?: OtpCreateNestedManyWithoutOwnerInput
    Steps?: StepsCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutUserInput
    Otp?: OtpUncheckedCreateNestedManyWithoutOwnerInput
    Steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUpdateManyWithoutUserNestedInput
    Otp?: OtpUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutUserNestedInput
    Otp?: OtpUncheckedUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpCreateInput = {
    id?: string
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
    owner?: UsersCreateNestedOneWithoutOtpInput
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    userId?: string | null
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
    owner?: UsersUpdateOneWithoutOtpNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type OtpCreateManyInput = {
    id?: string
    userId?: string | null
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type WorkoutCreateInput = {
    id?: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
    user: UsersCreateNestedOneWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    userId: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
    user?: UsersUpdateOneRequiredWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutCreateManyInput = {
    id?: string
    userId: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type StepsCreateInput = {
    id?: string
    steps: number
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutStepsInput
  }

  export type StepsUncheckedCreateInput = {
    id?: string
    userId: string
    steps: number
    createdAt?: Date | string
  }

  export type StepsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepsCreateManyInput = {
    id?: string
    userId: string
    steps: number
    createdAt?: Date | string
  }

  export type StepsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutGoalCreateInput = {
    id?: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
    user: UsersCreateNestedOneWithoutWorkoutGoalInput
  }

  export type WorkoutGoalUncheckedCreateInput = {
    id?: string
    userId: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UsersUpdateOneRequiredWithoutWorkoutGoalNestedInput
  }

  export type WorkoutGoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalCreateManyInput = {
    id?: string
    userId: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type MarathonCreateInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    admin?: AdminsCreateNestedOneWithoutMarathonInput
    marathoAgeRule?: marathoAgeRuleCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    marathoAgeRule?: marathoAgeRuleUncheckedCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsUncheckedCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    admin?: AdminsUpdateOneWithoutMarathonNestedInput
    marathoAgeRule?: marathoAgeRuleUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    marathoAgeRule?: marathoAgeRuleUncheckedUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUncheckedUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonCreateManyInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
  }

  export type MarathonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
  }

  export type MarathonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
  }

  export type RewardsCreateInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    marathon: MarathonCreateNestedOneWithoutRewardsInput
  }

  export type RewardsUncheckedCreateInput = {
    id?: string
    text: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marathon?: MarathonUpdateOneRequiredWithoutRewardsNestedInput
  }

  export type RewardsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsCreateManyInput = {
    id?: string
    text: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarathonUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
    marathon: MarathonCreateNestedOneWithoutMarathonUserInput
    user: UsersCreateNestedOneWithoutMarathonUserInput
  }

  export type MarathonUserUncheckedCreateInput = {
    id?: string
    userId: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type MarathonUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    marathon?: MarathonUpdateOneRequiredWithoutMarathonUserNestedInput
    user?: UsersUpdateOneRequiredWithoutMarathonUserNestedInput
  }

  export type MarathonUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarathonUserCreateManyInput = {
    id?: string
    userId: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type MarathonUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarathonUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BlogsCreateInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
    admin?: AdminsCreateNestedOneWithoutBlogsInput
  }

  export type BlogsUncheckedCreateInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    imagePath: string
  }

  export type BlogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
    admin?: AdminsUpdateOneWithoutBlogsNestedInput
  }

  export type BlogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsCreateManyInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    imagePath: string
  }

  export type BlogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type BannerUncheckedCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type BannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BannerCreateManyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type BannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type marathoAgeRuleCreateInput = {
    id?: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    marathon: MarathonCreateNestedOneWithoutMarathoAgeRuleInput
  }

  export type marathoAgeRuleUncheckedCreateInput = {
    id?: string
    marathonId: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type marathoAgeRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marathon?: MarathonUpdateOneRequiredWithoutMarathoAgeRuleNestedInput
  }

  export type marathoAgeRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marathoAgeRuleCreateManyInput = {
    id?: string
    marathonId: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type marathoAgeRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marathoAgeRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumAdminRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRoles | EnumAdminRolesFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRoles[]
    notIn?: $Enums.AdminRoles[]
    not?: NestedEnumAdminRolesFilter<$PrismaModel> | $Enums.AdminRoles
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

  export type BlogsListRelationFilter = {
    every?: BlogsWhereInput
    some?: BlogsWhereInput
    none?: BlogsWhereInput
  }

  export type MarathonListRelationFilter = {
    every?: MarathonWhereInput
    some?: MarathonWhereInput
    none?: MarathonWhereInput
  }

  export type BlogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarathonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminsOrderByRelevanceInput = {
    fields: AdminsOrderByRelevanceFieldEnum | AdminsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
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

  export type EnumAdminRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRoles | EnumAdminRolesFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRoles[]
    notIn?: $Enums.AdminRoles[]
    not?: NestedEnumAdminRolesWithAggregatesFilter<$PrismaModel> | $Enums.AdminRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRolesFilter<$PrismaModel>
    _max?: NestedEnumAdminRolesFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MarathonUserListRelationFilter = {
    every?: MarathonUserWhereInput
    some?: MarathonUserWhereInput
    none?: MarathonUserWhereInput
  }

  export type OtpListRelationFilter = {
    every?: OtpWhereInput
    some?: OtpWhereInput
    none?: OtpWhereInput
  }

  export type StepsListRelationFilter = {
    every?: StepsWhereInput
    some?: StepsWhereInput
    none?: StepsWhereInput
  }

  export type WorkoutListRelationFilter = {
    every?: WorkoutWhereInput
    some?: WorkoutWhereInput
    none?: WorkoutWhereInput
  }

  export type WorkoutGoalListRelationFilter = {
    every?: WorkoutGoalWhereInput
    some?: WorkoutGoalWhereInput
    none?: WorkoutGoalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MarathonUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersOrderByRelevanceInput = {
    fields: UsersOrderByRelevanceFieldEnum | UsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    heightFt?: SortOrder
    heightIn?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    image?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    heightFt?: SortOrder
    heightIn?: SortOrder
    weight?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    heightFt?: SortOrder
    heightIn?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    image?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    birth?: SortOrder
    heightFt?: SortOrder
    heightIn?: SortOrder
    weight?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
    image?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    heightFt?: SortOrder
    heightIn?: SortOrder
    weight?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumUseCaseFilter<$PrismaModel = never> = {
    equals?: $Enums.UseCase | EnumUseCaseFieldRefInput<$PrismaModel>
    in?: $Enums.UseCase[]
    notIn?: $Enums.UseCase[]
    not?: NestedEnumUseCaseFilter<$PrismaModel> | $Enums.UseCase
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type OtpOrderByRelevanceInput = {
    fields: OtpOrderByRelevanceFieldEnum | OtpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    useCase?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    useCase?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mobile?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    useCase?: SortOrder
  }

  export type EnumUseCaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UseCase | EnumUseCaseFieldRefInput<$PrismaModel>
    in?: $Enums.UseCase[]
    notIn?: $Enums.UseCase[]
    not?: NestedEnumUseCaseWithAggregatesFilter<$PrismaModel> | $Enums.UseCase
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUseCaseFilter<$PrismaModel>
    _max?: NestedEnumUseCaseFilter<$PrismaModel>
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

  export type EnumWorkoutTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkoutType[] | null
    notIn?: $Enums.WorkoutType[] | null
    not?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel> | $Enums.WorkoutType | null
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type WorkoutOrderByRelevanceInput = {
    fields: WorkoutOrderByRelevanceFieldEnum | WorkoutOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    heartPts?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    calories?: SortOrder
    heartPts?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    heartPts?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    heartPts?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    calories?: SortOrder
    heartPts?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
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

  export type EnumWorkoutTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkoutType[] | null
    notIn?: $Enums.WorkoutType[] | null
    not?: NestedEnumWorkoutTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel>
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

  export type StepsOrderByRelevanceInput = {
    fields: StepsOrderByRelevanceFieldEnum | StepsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StepsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
  }

  export type StepsAvgOrderByAggregateInput = {
    steps?: SortOrder
  }

  export type StepsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
  }

  export type StepsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    steps?: SortOrder
    createdAt?: SortOrder
  }

  export type StepsSumOrderByAggregateInput = {
    steps?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[]
    notIn?: $Enums.GoalType[]
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type WorkoutGoalOrderByRelevanceInput = {
    fields: WorkoutGoalOrderByRelevanceFieldEnum | WorkoutGoalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type WorkoutGoalUserIdCreatedAtCompoundUniqueInput = {
    userId: string
    createdAt: Date | string
  }

  export type WorkoutGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmi?: SortOrder
    weightGoal?: SortOrder
    goalType?: SortOrder
    activateReminder?: SortOrder
    reminderTime?: SortOrder
    totalDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    workoutDays?: SortOrder
    caloriesGoal?: SortOrder
    workoutTimeMs?: SortOrder
  }

  export type WorkoutGoalAvgOrderByAggregateInput = {
    bmi?: SortOrder
    weightGoal?: SortOrder
    totalDays?: SortOrder
    caloriesGoal?: SortOrder
    workoutTimeMs?: SortOrder
  }

  export type WorkoutGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmi?: SortOrder
    weightGoal?: SortOrder
    goalType?: SortOrder
    activateReminder?: SortOrder
    reminderTime?: SortOrder
    totalDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    workoutDays?: SortOrder
    caloriesGoal?: SortOrder
    workoutTimeMs?: SortOrder
  }

  export type WorkoutGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmi?: SortOrder
    weightGoal?: SortOrder
    goalType?: SortOrder
    activateReminder?: SortOrder
    reminderTime?: SortOrder
    totalDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endDate?: SortOrder
    startDate?: SortOrder
    workoutDays?: SortOrder
    caloriesGoal?: SortOrder
    workoutTimeMs?: SortOrder
  }

  export type WorkoutGoalSumOrderByAggregateInput = {
    bmi?: SortOrder
    weightGoal?: SortOrder
    totalDays?: SortOrder
    caloriesGoal?: SortOrder
    workoutTimeMs?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[]
    notIn?: $Enums.GoalType[]
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumMarathonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarathonType | EnumMarathonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarathonType[]
    notIn?: $Enums.MarathonType[]
    not?: NestedEnumMarathonTypeFilter<$PrismaModel> | $Enums.MarathonType
  }

  export type AdminsNullableScalarRelationFilter = {
    is?: AdminsWhereInput | null
    isNot?: AdminsWhereInput | null
  }

  export type MarathoAgeRuleListRelationFilter = {
    every?: marathoAgeRuleWhereInput
    some?: marathoAgeRuleWhereInput
    none?: marathoAgeRuleWhereInput
  }

  export type RewardsListRelationFilter = {
    every?: RewardsWhereInput
    some?: RewardsWhereInput
    none?: RewardsWhereInput
  }

  export type marathoAgeRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RewardsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarathonOrderByRelevanceInput = {
    fields: MarathonOrderByRelevanceFieldEnum | MarathonOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MarathonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    about?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    imagePath?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    distanceKm?: SortOrder
  }

  export type MarathonAvgOrderByAggregateInput = {
    distanceKm?: SortOrder
  }

  export type MarathonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    about?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    imagePath?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    distanceKm?: SortOrder
  }

  export type MarathonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    about?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    imagePath?: SortOrder
    type?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: SortOrder
    distanceKm?: SortOrder
  }

  export type MarathonSumOrderByAggregateInput = {
    distanceKm?: SortOrder
  }

  export type EnumMarathonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarathonType | EnumMarathonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarathonType[]
    notIn?: $Enums.MarathonType[]
    not?: NestedEnumMarathonTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarathonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarathonTypeFilter<$PrismaModel>
    _max?: NestedEnumMarathonTypeFilter<$PrismaModel>
  }

  export type MarathonScalarRelationFilter = {
    is?: MarathonWhereInput
    isNot?: MarathonWhereInput
  }

  export type RewardsOrderByRelevanceInput = {
    fields: RewardsOrderByRelevanceFieldEnum | RewardsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RewardsCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardsMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RewardsMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarathonUserOrderByRelevanceInput = {
    fields: MarathonUserOrderByRelevanceFieldEnum | MarathonUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MarathonUserUserIdMarathonIdCompoundUniqueInput = {
    userId: string
    marathonId: string
  }

  export type MarathonUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
    submissionCount?: SortOrder
  }

  export type MarathonUserAvgOrderByAggregateInput = {
    distanceKm?: SortOrder
    durationMs?: SortOrder
    submissionCount?: SortOrder
  }

  export type MarathonUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
    submissionCount?: SortOrder
  }

  export type MarathonUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    marathonId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    distanceKm?: SortOrder
    durationMs?: SortOrder
    submissionCount?: SortOrder
  }

  export type MarathonUserSumOrderByAggregateInput = {
    distanceKm?: SortOrder
    durationMs?: SortOrder
    submissionCount?: SortOrder
  }

  export type BlogsOrderByRelevanceInput = {
    fields: BlogsOrderByRelevanceFieldEnum | BlogsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BlogsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    readTime?: SortOrder
    description?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    imagePath?: SortOrder
  }

  export type BlogsAvgOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type BlogsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    readTime?: SortOrder
    description?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    imagePath?: SortOrder
  }

  export type BlogsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    readTime?: SortOrder
    description?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    imagePath?: SortOrder
  }

  export type BlogsSumOrderByAggregateInput = {
    readTime?: SortOrder
  }

  export type BannerOrderByRelevanceInput = {
    fields: BannerOrderByRelevanceFieldEnum | BannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagePath?: SortOrder
  }

  export type marathoAgeRuleOrderByRelevanceInput = {
    fields: marathoAgeRuleOrderByRelevanceFieldEnum | marathoAgeRuleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type marathoAgeRuleCountOrderByAggregateInput = {
    id?: SortOrder
    marathonId?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    distanceKm?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type marathoAgeRuleAvgOrderByAggregateInput = {
    ageMin?: SortOrder
    ageMax?: SortOrder
    distanceKm?: SortOrder
  }

  export type marathoAgeRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    marathonId?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    distanceKm?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type marathoAgeRuleMinOrderByAggregateInput = {
    id?: SortOrder
    marathonId?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    distanceKm?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type marathoAgeRuleSumOrderByAggregateInput = {
    ageMin?: SortOrder
    ageMax?: SortOrder
    distanceKm?: SortOrder
  }

  export type BlogsCreateNestedManyWithoutAdminInput = {
    create?: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput> | BlogsCreateWithoutAdminInput[] | BlogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAdminInput | BlogsCreateOrConnectWithoutAdminInput[]
    createMany?: BlogsCreateManyAdminInputEnvelope
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type MarathonCreateNestedManyWithoutAdminInput = {
    create?: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput> | MarathonCreateWithoutAdminInput[] | MarathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MarathonCreateOrConnectWithoutAdminInput | MarathonCreateOrConnectWithoutAdminInput[]
    createMany?: MarathonCreateManyAdminInputEnvelope
    connect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
  }

  export type BlogsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput> | BlogsCreateWithoutAdminInput[] | BlogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAdminInput | BlogsCreateOrConnectWithoutAdminInput[]
    createMany?: BlogsCreateManyAdminInputEnvelope
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
  }

  export type MarathonUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput> | MarathonCreateWithoutAdminInput[] | MarathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MarathonCreateOrConnectWithoutAdminInput | MarathonCreateOrConnectWithoutAdminInput[]
    createMany?: MarathonCreateManyAdminInputEnvelope
    connect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAdminRolesFieldUpdateOperationsInput = {
    set?: $Enums.AdminRoles
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BlogsUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput> | BlogsCreateWithoutAdminInput[] | BlogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAdminInput | BlogsCreateOrConnectWithoutAdminInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutAdminInput | BlogsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BlogsCreateManyAdminInputEnvelope
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutAdminInput | BlogsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutAdminInput | BlogsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type MarathonUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput> | MarathonCreateWithoutAdminInput[] | MarathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MarathonCreateOrConnectWithoutAdminInput | MarathonCreateOrConnectWithoutAdminInput[]
    upsert?: MarathonUpsertWithWhereUniqueWithoutAdminInput | MarathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MarathonCreateManyAdminInputEnvelope
    set?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    disconnect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    delete?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    connect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    update?: MarathonUpdateWithWhereUniqueWithoutAdminInput | MarathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MarathonUpdateManyWithWhereWithoutAdminInput | MarathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MarathonScalarWhereInput | MarathonScalarWhereInput[]
  }

  export type BlogsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput> | BlogsCreateWithoutAdminInput[] | BlogsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogsCreateOrConnectWithoutAdminInput | BlogsCreateOrConnectWithoutAdminInput[]
    upsert?: BlogsUpsertWithWhereUniqueWithoutAdminInput | BlogsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BlogsCreateManyAdminInputEnvelope
    set?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    disconnect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    delete?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    connect?: BlogsWhereUniqueInput | BlogsWhereUniqueInput[]
    update?: BlogsUpdateWithWhereUniqueWithoutAdminInput | BlogsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BlogsUpdateManyWithWhereWithoutAdminInput | BlogsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
  }

  export type MarathonUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput> | MarathonCreateWithoutAdminInput[] | MarathonUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: MarathonCreateOrConnectWithoutAdminInput | MarathonCreateOrConnectWithoutAdminInput[]
    upsert?: MarathonUpsertWithWhereUniqueWithoutAdminInput | MarathonUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: MarathonCreateManyAdminInputEnvelope
    set?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    disconnect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    delete?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    connect?: MarathonWhereUniqueInput | MarathonWhereUniqueInput[]
    update?: MarathonUpdateWithWhereUniqueWithoutAdminInput | MarathonUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: MarathonUpdateManyWithWhereWithoutAdminInput | MarathonUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: MarathonScalarWhereInput | MarathonScalarWhereInput[]
  }

  export type MarathonUserCreateNestedManyWithoutUserInput = {
    create?: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput> | MarathonUserCreateWithoutUserInput[] | MarathonUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutUserInput | MarathonUserCreateOrConnectWithoutUserInput[]
    createMany?: MarathonUserCreateManyUserInputEnvelope
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
  }

  export type OtpCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput> | OtpCreateWithoutOwnerInput[] | OtpUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutOwnerInput | OtpCreateOrConnectWithoutOwnerInput[]
    createMany?: OtpCreateManyOwnerInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type StepsCreateNestedManyWithoutUserInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
  }

  export type WorkoutCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type WorkoutGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput> | WorkoutGoalCreateWithoutUserInput[] | WorkoutGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutGoalCreateOrConnectWithoutUserInput | WorkoutGoalCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutGoalCreateManyUserInputEnvelope
    connect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
  }

  export type MarathonUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput> | MarathonUserCreateWithoutUserInput[] | MarathonUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutUserInput | MarathonUserCreateOrConnectWithoutUserInput[]
    createMany?: MarathonUserCreateManyUserInputEnvelope
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
  }

  export type OtpUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput> | OtpCreateWithoutOwnerInput[] | OtpUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutOwnerInput | OtpCreateOrConnectWithoutOwnerInput[]
    createMany?: OtpCreateManyOwnerInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type StepsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
  }

  export type WorkoutUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
  }

  export type WorkoutGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput> | WorkoutGoalCreateWithoutUserInput[] | WorkoutGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutGoalCreateOrConnectWithoutUserInput | WorkoutGoalCreateOrConnectWithoutUserInput[]
    createMany?: WorkoutGoalCreateManyUserInputEnvelope
    connect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarathonUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput> | MarathonUserCreateWithoutUserInput[] | MarathonUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutUserInput | MarathonUserCreateOrConnectWithoutUserInput[]
    upsert?: MarathonUserUpsertWithWhereUniqueWithoutUserInput | MarathonUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarathonUserCreateManyUserInputEnvelope
    set?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    disconnect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    delete?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    update?: MarathonUserUpdateWithWhereUniqueWithoutUserInput | MarathonUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarathonUserUpdateManyWithWhereWithoutUserInput | MarathonUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
  }

  export type OtpUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput> | OtpCreateWithoutOwnerInput[] | OtpUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutOwnerInput | OtpCreateOrConnectWithoutOwnerInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutOwnerInput | OtpUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OtpCreateManyOwnerInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutOwnerInput | OtpUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutOwnerInput | OtpUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type StepsUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    upsert?: StepsUpsertWithWhereUniqueWithoutUserInput | StepsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    set?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    disconnect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    delete?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    update?: StepsUpdateWithWhereUniqueWithoutUserInput | StepsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepsUpdateManyWithWhereWithoutUserInput | StepsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepsScalarWhereInput | StepsScalarWhereInput[]
  }

  export type WorkoutUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type WorkoutGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput> | WorkoutGoalCreateWithoutUserInput[] | WorkoutGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutGoalCreateOrConnectWithoutUserInput | WorkoutGoalCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutGoalUpsertWithWhereUniqueWithoutUserInput | WorkoutGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutGoalCreateManyUserInputEnvelope
    set?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    disconnect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    delete?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    connect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    update?: WorkoutGoalUpdateWithWhereUniqueWithoutUserInput | WorkoutGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutGoalUpdateManyWithWhereWithoutUserInput | WorkoutGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutGoalScalarWhereInput | WorkoutGoalScalarWhereInput[]
  }

  export type MarathonUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput> | MarathonUserCreateWithoutUserInput[] | MarathonUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutUserInput | MarathonUserCreateOrConnectWithoutUserInput[]
    upsert?: MarathonUserUpsertWithWhereUniqueWithoutUserInput | MarathonUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MarathonUserCreateManyUserInputEnvelope
    set?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    disconnect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    delete?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    update?: MarathonUserUpdateWithWhereUniqueWithoutUserInput | MarathonUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarathonUserUpdateManyWithWhereWithoutUserInput | MarathonUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
  }

  export type OtpUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput> | OtpCreateWithoutOwnerInput[] | OtpUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutOwnerInput | OtpCreateOrConnectWithoutOwnerInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutOwnerInput | OtpUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: OtpCreateManyOwnerInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutOwnerInput | OtpUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutOwnerInput | OtpUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type StepsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput> | StepsCreateWithoutUserInput[] | StepsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepsCreateOrConnectWithoutUserInput | StepsCreateOrConnectWithoutUserInput[]
    upsert?: StepsUpsertWithWhereUniqueWithoutUserInput | StepsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepsCreateManyUserInputEnvelope
    set?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    disconnect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    delete?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    connect?: StepsWhereUniqueInput | StepsWhereUniqueInput[]
    update?: StepsUpdateWithWhereUniqueWithoutUserInput | StepsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepsUpdateManyWithWhereWithoutUserInput | StepsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepsScalarWhereInput | StepsScalarWhereInput[]
  }

  export type WorkoutUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput> | WorkoutCreateWithoutUserInput[] | WorkoutUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutCreateOrConnectWithoutUserInput | WorkoutCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutUpsertWithWhereUniqueWithoutUserInput | WorkoutUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutCreateManyUserInputEnvelope
    set?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    disconnect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    delete?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    connect?: WorkoutWhereUniqueInput | WorkoutWhereUniqueInput[]
    update?: WorkoutUpdateWithWhereUniqueWithoutUserInput | WorkoutUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutUpdateManyWithWhereWithoutUserInput | WorkoutUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
  }

  export type WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput> | WorkoutGoalCreateWithoutUserInput[] | WorkoutGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkoutGoalCreateOrConnectWithoutUserInput | WorkoutGoalCreateOrConnectWithoutUserInput[]
    upsert?: WorkoutGoalUpsertWithWhereUniqueWithoutUserInput | WorkoutGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkoutGoalCreateManyUserInputEnvelope
    set?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    disconnect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    delete?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    connect?: WorkoutGoalWhereUniqueInput | WorkoutGoalWhereUniqueInput[]
    update?: WorkoutGoalUpdateWithWhereUniqueWithoutUserInput | WorkoutGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkoutGoalUpdateManyWithWhereWithoutUserInput | WorkoutGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkoutGoalScalarWhereInput | WorkoutGoalScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutOtpInput = {
    create?: XOR<UsersCreateWithoutOtpInput, UsersUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOtpInput
    connect?: UsersWhereUniqueInput
  }

  export type EnumUseCaseFieldUpdateOperationsInput = {
    set?: $Enums.UseCase
  }

  export type UsersUpdateOneWithoutOtpNestedInput = {
    create?: XOR<UsersCreateWithoutOtpInput, UsersUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOtpInput
    upsert?: UsersUpsertWithoutOtpInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOtpInput, UsersUpdateWithoutOtpInput>, UsersUncheckedUpdateWithoutOtpInput>
  }

  export type UsersCreateNestedOneWithoutWorkoutInput = {
    create?: XOR<UsersCreateWithoutWorkoutInput, UsersUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkoutInput
    connect?: UsersWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableEnumWorkoutTypeFieldUpdateOperationsInput = {
    set?: $Enums.WorkoutType | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsersUpdateOneRequiredWithoutWorkoutNestedInput = {
    create?: XOR<UsersCreateWithoutWorkoutInput, UsersUncheckedCreateWithoutWorkoutInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkoutInput
    upsert?: UsersUpsertWithoutWorkoutInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWorkoutInput, UsersUpdateWithoutWorkoutInput>, UsersUncheckedUpdateWithoutWorkoutInput>
  }

  export type UsersCreateNestedOneWithoutStepsInput = {
    create?: XOR<UsersCreateWithoutStepsInput, UsersUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStepsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<UsersCreateWithoutStepsInput, UsersUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutStepsInput
    upsert?: UsersUpsertWithoutStepsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutStepsInput, UsersUpdateWithoutStepsInput>, UsersUncheckedUpdateWithoutStepsInput>
  }

  export type UsersCreateNestedOneWithoutWorkoutGoalInput = {
    create?: XOR<UsersCreateWithoutWorkoutGoalInput, UsersUncheckedCreateWithoutWorkoutGoalInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkoutGoalInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumGoalTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoalType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UsersUpdateOneRequiredWithoutWorkoutGoalNestedInput = {
    create?: XOR<UsersCreateWithoutWorkoutGoalInput, UsersUncheckedCreateWithoutWorkoutGoalInput>
    connectOrCreate?: UsersCreateOrConnectWithoutWorkoutGoalInput
    upsert?: UsersUpsertWithoutWorkoutGoalInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutWorkoutGoalInput, UsersUpdateWithoutWorkoutGoalInput>, UsersUncheckedUpdateWithoutWorkoutGoalInput>
  }

  export type AdminsCreateNestedOneWithoutMarathonInput = {
    create?: XOR<AdminsCreateWithoutMarathonInput, AdminsUncheckedCreateWithoutMarathonInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutMarathonInput
    connect?: AdminsWhereUniqueInput
  }

  export type marathoAgeRuleCreateNestedManyWithoutMarathonInput = {
    create?: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput> | marathoAgeRuleCreateWithoutMarathonInput[] | marathoAgeRuleUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: marathoAgeRuleCreateOrConnectWithoutMarathonInput | marathoAgeRuleCreateOrConnectWithoutMarathonInput[]
    createMany?: marathoAgeRuleCreateManyMarathonInputEnvelope
    connect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
  }

  export type MarathonUserCreateNestedManyWithoutMarathonInput = {
    create?: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput> | MarathonUserCreateWithoutMarathonInput[] | MarathonUserUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutMarathonInput | MarathonUserCreateOrConnectWithoutMarathonInput[]
    createMany?: MarathonUserCreateManyMarathonInputEnvelope
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
  }

  export type RewardsCreateNestedManyWithoutMarathonInput = {
    create?: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput> | RewardsCreateWithoutMarathonInput[] | RewardsUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutMarathonInput | RewardsCreateOrConnectWithoutMarathonInput[]
    createMany?: RewardsCreateManyMarathonInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type marathoAgeRuleUncheckedCreateNestedManyWithoutMarathonInput = {
    create?: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput> | marathoAgeRuleCreateWithoutMarathonInput[] | marathoAgeRuleUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: marathoAgeRuleCreateOrConnectWithoutMarathonInput | marathoAgeRuleCreateOrConnectWithoutMarathonInput[]
    createMany?: marathoAgeRuleCreateManyMarathonInputEnvelope
    connect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
  }

  export type MarathonUserUncheckedCreateNestedManyWithoutMarathonInput = {
    create?: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput> | MarathonUserCreateWithoutMarathonInput[] | MarathonUserUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutMarathonInput | MarathonUserCreateOrConnectWithoutMarathonInput[]
    createMany?: MarathonUserCreateManyMarathonInputEnvelope
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
  }

  export type RewardsUncheckedCreateNestedManyWithoutMarathonInput = {
    create?: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput> | RewardsCreateWithoutMarathonInput[] | RewardsUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutMarathonInput | RewardsCreateOrConnectWithoutMarathonInput[]
    createMany?: RewardsCreateManyMarathonInputEnvelope
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
  }

  export type EnumMarathonTypeFieldUpdateOperationsInput = {
    set?: $Enums.MarathonType
  }

  export type AdminsUpdateOneWithoutMarathonNestedInput = {
    create?: XOR<AdminsCreateWithoutMarathonInput, AdminsUncheckedCreateWithoutMarathonInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutMarathonInput
    upsert?: AdminsUpsertWithoutMarathonInput
    disconnect?: AdminsWhereInput | boolean
    delete?: AdminsWhereInput | boolean
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutMarathonInput, AdminsUpdateWithoutMarathonInput>, AdminsUncheckedUpdateWithoutMarathonInput>
  }

  export type marathoAgeRuleUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput> | marathoAgeRuleCreateWithoutMarathonInput[] | marathoAgeRuleUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: marathoAgeRuleCreateOrConnectWithoutMarathonInput | marathoAgeRuleCreateOrConnectWithoutMarathonInput[]
    upsert?: marathoAgeRuleUpsertWithWhereUniqueWithoutMarathonInput | marathoAgeRuleUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: marathoAgeRuleCreateManyMarathonInputEnvelope
    set?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    disconnect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    delete?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    connect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    update?: marathoAgeRuleUpdateWithWhereUniqueWithoutMarathonInput | marathoAgeRuleUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: marathoAgeRuleUpdateManyWithWhereWithoutMarathonInput | marathoAgeRuleUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: marathoAgeRuleScalarWhereInput | marathoAgeRuleScalarWhereInput[]
  }

  export type MarathonUserUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput> | MarathonUserCreateWithoutMarathonInput[] | MarathonUserUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutMarathonInput | MarathonUserCreateOrConnectWithoutMarathonInput[]
    upsert?: MarathonUserUpsertWithWhereUniqueWithoutMarathonInput | MarathonUserUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: MarathonUserCreateManyMarathonInputEnvelope
    set?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    disconnect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    delete?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    update?: MarathonUserUpdateWithWhereUniqueWithoutMarathonInput | MarathonUserUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: MarathonUserUpdateManyWithWhereWithoutMarathonInput | MarathonUserUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
  }

  export type RewardsUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput> | RewardsCreateWithoutMarathonInput[] | RewardsUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutMarathonInput | RewardsCreateOrConnectWithoutMarathonInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutMarathonInput | RewardsUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: RewardsCreateManyMarathonInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutMarathonInput | RewardsUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutMarathonInput | RewardsUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type marathoAgeRuleUncheckedUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput> | marathoAgeRuleCreateWithoutMarathonInput[] | marathoAgeRuleUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: marathoAgeRuleCreateOrConnectWithoutMarathonInput | marathoAgeRuleCreateOrConnectWithoutMarathonInput[]
    upsert?: marathoAgeRuleUpsertWithWhereUniqueWithoutMarathonInput | marathoAgeRuleUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: marathoAgeRuleCreateManyMarathonInputEnvelope
    set?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    disconnect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    delete?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    connect?: marathoAgeRuleWhereUniqueInput | marathoAgeRuleWhereUniqueInput[]
    update?: marathoAgeRuleUpdateWithWhereUniqueWithoutMarathonInput | marathoAgeRuleUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: marathoAgeRuleUpdateManyWithWhereWithoutMarathonInput | marathoAgeRuleUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: marathoAgeRuleScalarWhereInput | marathoAgeRuleScalarWhereInput[]
  }

  export type MarathonUserUncheckedUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput> | MarathonUserCreateWithoutMarathonInput[] | MarathonUserUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: MarathonUserCreateOrConnectWithoutMarathonInput | MarathonUserCreateOrConnectWithoutMarathonInput[]
    upsert?: MarathonUserUpsertWithWhereUniqueWithoutMarathonInput | MarathonUserUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: MarathonUserCreateManyMarathonInputEnvelope
    set?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    disconnect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    delete?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    connect?: MarathonUserWhereUniqueInput | MarathonUserWhereUniqueInput[]
    update?: MarathonUserUpdateWithWhereUniqueWithoutMarathonInput | MarathonUserUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: MarathonUserUpdateManyWithWhereWithoutMarathonInput | MarathonUserUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
  }

  export type RewardsUncheckedUpdateManyWithoutMarathonNestedInput = {
    create?: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput> | RewardsCreateWithoutMarathonInput[] | RewardsUncheckedCreateWithoutMarathonInput[]
    connectOrCreate?: RewardsCreateOrConnectWithoutMarathonInput | RewardsCreateOrConnectWithoutMarathonInput[]
    upsert?: RewardsUpsertWithWhereUniqueWithoutMarathonInput | RewardsUpsertWithWhereUniqueWithoutMarathonInput[]
    createMany?: RewardsCreateManyMarathonInputEnvelope
    set?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    disconnect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    delete?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    connect?: RewardsWhereUniqueInput | RewardsWhereUniqueInput[]
    update?: RewardsUpdateWithWhereUniqueWithoutMarathonInput | RewardsUpdateWithWhereUniqueWithoutMarathonInput[]
    updateMany?: RewardsUpdateManyWithWhereWithoutMarathonInput | RewardsUpdateManyWithWhereWithoutMarathonInput[]
    deleteMany?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
  }

  export type MarathonCreateNestedOneWithoutRewardsInput = {
    create?: XOR<MarathonCreateWithoutRewardsInput, MarathonUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutRewardsInput
    connect?: MarathonWhereUniqueInput
  }

  export type MarathonUpdateOneRequiredWithoutRewardsNestedInput = {
    create?: XOR<MarathonCreateWithoutRewardsInput, MarathonUncheckedCreateWithoutRewardsInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutRewardsInput
    upsert?: MarathonUpsertWithoutRewardsInput
    connect?: MarathonWhereUniqueInput
    update?: XOR<XOR<MarathonUpdateToOneWithWhereWithoutRewardsInput, MarathonUpdateWithoutRewardsInput>, MarathonUncheckedUpdateWithoutRewardsInput>
  }

  export type MarathonCreateNestedOneWithoutMarathonUserInput = {
    create?: XOR<MarathonCreateWithoutMarathonUserInput, MarathonUncheckedCreateWithoutMarathonUserInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutMarathonUserInput
    connect?: MarathonWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMarathonUserInput = {
    create?: XOR<UsersCreateWithoutMarathonUserInput, UsersUncheckedCreateWithoutMarathonUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMarathonUserInput
    connect?: UsersWhereUniqueInput
  }

  export type MarathonUpdateOneRequiredWithoutMarathonUserNestedInput = {
    create?: XOR<MarathonCreateWithoutMarathonUserInput, MarathonUncheckedCreateWithoutMarathonUserInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutMarathonUserInput
    upsert?: MarathonUpsertWithoutMarathonUserInput
    connect?: MarathonWhereUniqueInput
    update?: XOR<XOR<MarathonUpdateToOneWithWhereWithoutMarathonUserInput, MarathonUpdateWithoutMarathonUserInput>, MarathonUncheckedUpdateWithoutMarathonUserInput>
  }

  export type UsersUpdateOneRequiredWithoutMarathonUserNestedInput = {
    create?: XOR<UsersCreateWithoutMarathonUserInput, UsersUncheckedCreateWithoutMarathonUserInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMarathonUserInput
    upsert?: UsersUpsertWithoutMarathonUserInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMarathonUserInput, UsersUpdateWithoutMarathonUserInput>, UsersUncheckedUpdateWithoutMarathonUserInput>
  }

  export type AdminsCreateNestedOneWithoutBlogsInput = {
    create?: XOR<AdminsCreateWithoutBlogsInput, AdminsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutBlogsInput
    connect?: AdminsWhereUniqueInput
  }

  export type AdminsUpdateOneWithoutBlogsNestedInput = {
    create?: XOR<AdminsCreateWithoutBlogsInput, AdminsUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutBlogsInput
    upsert?: AdminsUpsertWithoutBlogsInput
    disconnect?: AdminsWhereInput | boolean
    delete?: AdminsWhereInput | boolean
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutBlogsInput, AdminsUpdateWithoutBlogsInput>, AdminsUncheckedUpdateWithoutBlogsInput>
  }

  export type MarathonCreateNestedOneWithoutMarathoAgeRuleInput = {
    create?: XOR<MarathonCreateWithoutMarathoAgeRuleInput, MarathonUncheckedCreateWithoutMarathoAgeRuleInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutMarathoAgeRuleInput
    connect?: MarathonWhereUniqueInput
  }

  export type MarathonUpdateOneRequiredWithoutMarathoAgeRuleNestedInput = {
    create?: XOR<MarathonCreateWithoutMarathoAgeRuleInput, MarathonUncheckedCreateWithoutMarathoAgeRuleInput>
    connectOrCreate?: MarathonCreateOrConnectWithoutMarathoAgeRuleInput
    upsert?: MarathonUpsertWithoutMarathoAgeRuleInput
    connect?: MarathonWhereUniqueInput
    update?: XOR<XOR<MarathonUpdateToOneWithWhereWithoutMarathoAgeRuleInput, MarathonUpdateWithoutMarathoAgeRuleInput>, MarathonUncheckedUpdateWithoutMarathoAgeRuleInput>
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

  export type NestedEnumAdminRolesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRoles | EnumAdminRolesFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRoles[]
    notIn?: $Enums.AdminRoles[]
    not?: NestedEnumAdminRolesFilter<$PrismaModel> | $Enums.AdminRoles
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

  export type NestedEnumAdminRolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRoles | EnumAdminRolesFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRoles[]
    notIn?: $Enums.AdminRoles[]
    not?: NestedEnumAdminRolesWithAggregatesFilter<$PrismaModel> | $Enums.AdminRoles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRolesFilter<$PrismaModel>
    _max?: NestedEnumAdminRolesFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUseCaseFilter<$PrismaModel = never> = {
    equals?: $Enums.UseCase | EnumUseCaseFieldRefInput<$PrismaModel>
    in?: $Enums.UseCase[]
    notIn?: $Enums.UseCase[]
    not?: NestedEnumUseCaseFilter<$PrismaModel> | $Enums.UseCase
  }

  export type NestedEnumUseCaseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UseCase | EnumUseCaseFieldRefInput<$PrismaModel>
    in?: $Enums.UseCase[]
    notIn?: $Enums.UseCase[]
    not?: NestedEnumUseCaseWithAggregatesFilter<$PrismaModel> | $Enums.UseCase
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUseCaseFilter<$PrismaModel>
    _max?: NestedEnumUseCaseFilter<$PrismaModel>
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

  export type NestedEnumWorkoutTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkoutType[] | null
    notIn?: $Enums.WorkoutType[] | null
    not?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel> | $Enums.WorkoutType | null
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

  export type NestedEnumWorkoutTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WorkoutType | EnumWorkoutTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.WorkoutType[] | null
    notIn?: $Enums.WorkoutType[] | null
    not?: NestedEnumWorkoutTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.WorkoutType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumWorkoutTypeNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumGoalTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[]
    notIn?: $Enums.GoalType[]
    not?: NestedEnumGoalTypeFilter<$PrismaModel> | $Enums.GoalType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalType | EnumGoalTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoalType[]
    notIn?: $Enums.GoalType[]
    not?: NestedEnumGoalTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoalType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalTypeFilter<$PrismaModel>
    _max?: NestedEnumGoalTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMarathonTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MarathonType | EnumMarathonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarathonType[]
    notIn?: $Enums.MarathonType[]
    not?: NestedEnumMarathonTypeFilter<$PrismaModel> | $Enums.MarathonType
  }

  export type NestedEnumMarathonTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MarathonType | EnumMarathonTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MarathonType[]
    notIn?: $Enums.MarathonType[]
    not?: NestedEnumMarathonTypeWithAggregatesFilter<$PrismaModel> | $Enums.MarathonType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarathonTypeFilter<$PrismaModel>
    _max?: NestedEnumMarathonTypeFilter<$PrismaModel>
  }

  export type BlogsCreateWithoutAdminInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type BlogsUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type BlogsCreateOrConnectWithoutAdminInput = {
    where: BlogsWhereUniqueInput
    create: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput>
  }

  export type BlogsCreateManyAdminInputEnvelope = {
    data: BlogsCreateManyAdminInput | BlogsCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type MarathonCreateWithoutAdminInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    marathoAgeRule?: marathoAgeRuleCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    marathoAgeRule?: marathoAgeRuleUncheckedCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsUncheckedCreateNestedManyWithoutMarathonInput
  }

  export type MarathonCreateOrConnectWithoutAdminInput = {
    where: MarathonWhereUniqueInput
    create: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput>
  }

  export type MarathonCreateManyAdminInputEnvelope = {
    data: MarathonCreateManyAdminInput | MarathonCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type BlogsUpsertWithWhereUniqueWithoutAdminInput = {
    where: BlogsWhereUniqueInput
    update: XOR<BlogsUpdateWithoutAdminInput, BlogsUncheckedUpdateWithoutAdminInput>
    create: XOR<BlogsCreateWithoutAdminInput, BlogsUncheckedCreateWithoutAdminInput>
  }

  export type BlogsUpdateWithWhereUniqueWithoutAdminInput = {
    where: BlogsWhereUniqueInput
    data: XOR<BlogsUpdateWithoutAdminInput, BlogsUncheckedUpdateWithoutAdminInput>
  }

  export type BlogsUpdateManyWithWhereWithoutAdminInput = {
    where: BlogsScalarWhereInput
    data: XOR<BlogsUpdateManyMutationInput, BlogsUncheckedUpdateManyWithoutAdminInput>
  }

  export type BlogsScalarWhereInput = {
    AND?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    OR?: BlogsScalarWhereInput[]
    NOT?: BlogsScalarWhereInput | BlogsScalarWhereInput[]
    id?: StringFilter<"Blogs"> | string
    title?: StringFilter<"Blogs"> | string
    readTime?: IntFilter<"Blogs"> | number
    description?: StringFilter<"Blogs"> | string
    details?: StringFilter<"Blogs"> | string
    createdAt?: DateTimeFilter<"Blogs"> | Date | string
    updatedAt?: DateTimeFilter<"Blogs"> | Date | string
    createdBy?: StringNullableFilter<"Blogs"> | string | null
    imagePath?: StringFilter<"Blogs"> | string
  }

  export type MarathonUpsertWithWhereUniqueWithoutAdminInput = {
    where: MarathonWhereUniqueInput
    update: XOR<MarathonUpdateWithoutAdminInput, MarathonUncheckedUpdateWithoutAdminInput>
    create: XOR<MarathonCreateWithoutAdminInput, MarathonUncheckedCreateWithoutAdminInput>
  }

  export type MarathonUpdateWithWhereUniqueWithoutAdminInput = {
    where: MarathonWhereUniqueInput
    data: XOR<MarathonUpdateWithoutAdminInput, MarathonUncheckedUpdateWithoutAdminInput>
  }

  export type MarathonUpdateManyWithWhereWithoutAdminInput = {
    where: MarathonScalarWhereInput
    data: XOR<MarathonUpdateManyMutationInput, MarathonUncheckedUpdateManyWithoutAdminInput>
  }

  export type MarathonScalarWhereInput = {
    AND?: MarathonScalarWhereInput | MarathonScalarWhereInput[]
    OR?: MarathonScalarWhereInput[]
    NOT?: MarathonScalarWhereInput | MarathonScalarWhereInput[]
    id?: StringFilter<"Marathon"> | string
    title?: StringFilter<"Marathon"> | string
    description?: StringFilter<"Marathon"> | string
    about?: StringFilter<"Marathon"> | string
    startDate?: DateTimeFilter<"Marathon"> | Date | string
    endDate?: DateTimeFilter<"Marathon"> | Date | string
    imagePath?: StringNullableFilter<"Marathon"> | string | null
    type?: EnumMarathonTypeFilter<"Marathon"> | $Enums.MarathonType
    createdBy?: StringNullableFilter<"Marathon"> | string | null
    createdAt?: DateTimeFilter<"Marathon"> | Date | string
    updatedAt?: DateTimeFilter<"Marathon"> | Date | string
    location?: StringNullableFilter<"Marathon"> | string | null
    distanceKm?: IntFilter<"Marathon"> | number
  }

  export type MarathonUserCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
    marathon: MarathonCreateNestedOneWithoutMarathonUserInput
  }

  export type MarathonUserUncheckedCreateWithoutUserInput = {
    id?: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type MarathonUserCreateOrConnectWithoutUserInput = {
    where: MarathonUserWhereUniqueInput
    create: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput>
  }

  export type MarathonUserCreateManyUserInputEnvelope = {
    data: MarathonUserCreateManyUserInput | MarathonUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OtpCreateWithoutOwnerInput = {
    id?: string
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
  }

  export type OtpUncheckedCreateWithoutOwnerInput = {
    id?: string
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
  }

  export type OtpCreateOrConnectWithoutOwnerInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput>
  }

  export type OtpCreateManyOwnerInputEnvelope = {
    data: OtpCreateManyOwnerInput | OtpCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type StepsCreateWithoutUserInput = {
    id?: string
    steps: number
    createdAt?: Date | string
  }

  export type StepsUncheckedCreateWithoutUserInput = {
    id?: string
    steps: number
    createdAt?: Date | string
  }

  export type StepsCreateOrConnectWithoutUserInput = {
    where: StepsWhereUniqueInput
    create: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput>
  }

  export type StepsCreateManyUserInputEnvelope = {
    data: StepsCreateManyUserInput | StepsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutCreateWithoutUserInput = {
    id?: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
  }

  export type WorkoutUncheckedCreateWithoutUserInput = {
    id?: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
  }

  export type WorkoutCreateOrConnectWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutCreateManyUserInputEnvelope = {
    data: WorkoutCreateManyUserInput | WorkoutCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkoutGoalCreateWithoutUserInput = {
    id?: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUncheckedCreateWithoutUserInput = {
    id?: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalCreateOrConnectWithoutUserInput = {
    where: WorkoutGoalWhereUniqueInput
    create: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput>
  }

  export type WorkoutGoalCreateManyUserInputEnvelope = {
    data: WorkoutGoalCreateManyUserInput | WorkoutGoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MarathonUserUpsertWithWhereUniqueWithoutUserInput = {
    where: MarathonUserWhereUniqueInput
    update: XOR<MarathonUserUpdateWithoutUserInput, MarathonUserUncheckedUpdateWithoutUserInput>
    create: XOR<MarathonUserCreateWithoutUserInput, MarathonUserUncheckedCreateWithoutUserInput>
  }

  export type MarathonUserUpdateWithWhereUniqueWithoutUserInput = {
    where: MarathonUserWhereUniqueInput
    data: XOR<MarathonUserUpdateWithoutUserInput, MarathonUserUncheckedUpdateWithoutUserInput>
  }

  export type MarathonUserUpdateManyWithWhereWithoutUserInput = {
    where: MarathonUserScalarWhereInput
    data: XOR<MarathonUserUpdateManyMutationInput, MarathonUserUncheckedUpdateManyWithoutUserInput>
  }

  export type MarathonUserScalarWhereInput = {
    AND?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
    OR?: MarathonUserScalarWhereInput[]
    NOT?: MarathonUserScalarWhereInput | MarathonUserScalarWhereInput[]
    id?: StringFilter<"MarathonUser"> | string
    userId?: StringFilter<"MarathonUser"> | string
    marathonId?: StringFilter<"MarathonUser"> | string
    createdAt?: DateTimeFilter<"MarathonUser"> | Date | string
    updatedAt?: DateTimeFilter<"MarathonUser"> | Date | string
    distanceKm?: DecimalNullableFilter<"MarathonUser"> | Decimal | DecimalJsLike | number | string | null
    durationMs?: IntNullableFilter<"MarathonUser"> | number | null
    submissionCount?: IntNullableFilter<"MarathonUser"> | number | null
  }

  export type OtpUpsertWithWhereUniqueWithoutOwnerInput = {
    where: OtpWhereUniqueInput
    update: XOR<OtpUpdateWithoutOwnerInput, OtpUncheckedUpdateWithoutOwnerInput>
    create: XOR<OtpCreateWithoutOwnerInput, OtpUncheckedCreateWithoutOwnerInput>
  }

  export type OtpUpdateWithWhereUniqueWithoutOwnerInput = {
    where: OtpWhereUniqueInput
    data: XOR<OtpUpdateWithoutOwnerInput, OtpUncheckedUpdateWithoutOwnerInput>
  }

  export type OtpUpdateManyWithWhereWithoutOwnerInput = {
    where: OtpScalarWhereInput
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyWithoutOwnerInput>
  }

  export type OtpScalarWhereInput = {
    AND?: OtpScalarWhereInput | OtpScalarWhereInput[]
    OR?: OtpScalarWhereInput[]
    NOT?: OtpScalarWhereInput | OtpScalarWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringNullableFilter<"Otp"> | string | null
    mobile?: StringNullableFilter<"Otp"> | string | null
    code?: StringFilter<"Otp"> | string
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
    expiresAt?: DateTimeFilter<"Otp"> | Date | string
    useCase?: EnumUseCaseFilter<"Otp"> | $Enums.UseCase
  }

  export type StepsUpsertWithWhereUniqueWithoutUserInput = {
    where: StepsWhereUniqueInput
    update: XOR<StepsUpdateWithoutUserInput, StepsUncheckedUpdateWithoutUserInput>
    create: XOR<StepsCreateWithoutUserInput, StepsUncheckedCreateWithoutUserInput>
  }

  export type StepsUpdateWithWhereUniqueWithoutUserInput = {
    where: StepsWhereUniqueInput
    data: XOR<StepsUpdateWithoutUserInput, StepsUncheckedUpdateWithoutUserInput>
  }

  export type StepsUpdateManyWithWhereWithoutUserInput = {
    where: StepsScalarWhereInput
    data: XOR<StepsUpdateManyMutationInput, StepsUncheckedUpdateManyWithoutUserInput>
  }

  export type StepsScalarWhereInput = {
    AND?: StepsScalarWhereInput | StepsScalarWhereInput[]
    OR?: StepsScalarWhereInput[]
    NOT?: StepsScalarWhereInput | StepsScalarWhereInput[]
    id?: StringFilter<"Steps"> | string
    userId?: StringFilter<"Steps"> | string
    steps?: IntFilter<"Steps"> | number
    createdAt?: DateTimeFilter<"Steps"> | Date | string
  }

  export type WorkoutUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    update: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutCreateWithoutUserInput, WorkoutUncheckedCreateWithoutUserInput>
  }

  export type WorkoutUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutWhereUniqueInput
    data: XOR<WorkoutUpdateWithoutUserInput, WorkoutUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutScalarWhereInput
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutScalarWhereInput = {
    AND?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    OR?: WorkoutScalarWhereInput[]
    NOT?: WorkoutScalarWhereInput | WorkoutScalarWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    calories?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    type?: EnumWorkoutTypeNullableFilter<"Workout"> | $Enums.WorkoutType | null
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    distanceKm?: DecimalFilter<"Workout"> | Decimal | DecimalJsLike | number | string
    durationMs?: IntFilter<"Workout"> | number
  }

  export type WorkoutGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkoutGoalWhereUniqueInput
    update: XOR<WorkoutGoalUpdateWithoutUserInput, WorkoutGoalUncheckedUpdateWithoutUserInput>
    create: XOR<WorkoutGoalCreateWithoutUserInput, WorkoutGoalUncheckedCreateWithoutUserInput>
  }

  export type WorkoutGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkoutGoalWhereUniqueInput
    data: XOR<WorkoutGoalUpdateWithoutUserInput, WorkoutGoalUncheckedUpdateWithoutUserInput>
  }

  export type WorkoutGoalUpdateManyWithWhereWithoutUserInput = {
    where: WorkoutGoalScalarWhereInput
    data: XOR<WorkoutGoalUpdateManyMutationInput, WorkoutGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkoutGoalScalarWhereInput = {
    AND?: WorkoutGoalScalarWhereInput | WorkoutGoalScalarWhereInput[]
    OR?: WorkoutGoalScalarWhereInput[]
    NOT?: WorkoutGoalScalarWhereInput | WorkoutGoalScalarWhereInput[]
    id?: StringFilter<"WorkoutGoal"> | string
    userId?: StringFilter<"WorkoutGoal"> | string
    bmi?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFilter<"WorkoutGoal"> | number
    goalType?: EnumGoalTypeFilter<"WorkoutGoal"> | $Enums.GoalType
    activateReminder?: BoolNullableFilter<"WorkoutGoal"> | boolean | null
    reminderTime?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    totalDays?: IntNullableFilter<"WorkoutGoal"> | number | null
    createdAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    updatedAt?: DateTimeFilter<"WorkoutGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    startDate?: DateTimeNullableFilter<"WorkoutGoal"> | Date | string | null
    workoutDays?: StringNullableFilter<"WorkoutGoal"> | string | null
    caloriesGoal?: IntNullableFilter<"WorkoutGoal"> | number | null
    workoutTimeMs?: DecimalNullableFilter<"WorkoutGoal"> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersCreateWithoutOtpInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserCreateNestedManyWithoutUserInput
    Steps?: StepsCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOtpInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutUserInput
    Steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOtpInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOtpInput, UsersUncheckedCreateWithoutOtpInput>
  }

  export type UsersUpsertWithoutOtpInput = {
    update: XOR<UsersUpdateWithoutOtpInput, UsersUncheckedUpdateWithoutOtpInput>
    create: XOR<UsersCreateWithoutOtpInput, UsersUncheckedCreateWithoutOtpInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOtpInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOtpInput, UsersUncheckedUpdateWithoutOtpInput>
  }

  export type UsersUpdateWithoutOtpInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUpdateManyWithoutUserNestedInput
    Steps?: StepsUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOtpInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutUserNestedInput
    Steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutWorkoutInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserCreateNestedManyWithoutUserInput
    Otp?: OtpCreateNestedManyWithoutOwnerInput
    Steps?: StepsCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutWorkoutInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutUserInput
    Otp?: OtpUncheckedCreateNestedManyWithoutOwnerInput
    Steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutWorkoutInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWorkoutInput, UsersUncheckedCreateWithoutWorkoutInput>
  }

  export type UsersUpsertWithoutWorkoutInput = {
    update: XOR<UsersUpdateWithoutWorkoutInput, UsersUncheckedUpdateWithoutWorkoutInput>
    create: XOR<UsersCreateWithoutWorkoutInput, UsersUncheckedCreateWithoutWorkoutInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWorkoutInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWorkoutInput, UsersUncheckedUpdateWithoutWorkoutInput>
  }

  export type UsersUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUpdateManyWithoutUserNestedInput
    Otp?: OtpUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutUserNestedInput
    Otp?: OtpUncheckedUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutStepsInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserCreateNestedManyWithoutUserInput
    Otp?: OtpCreateNestedManyWithoutOwnerInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutStepsInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutUserInput
    Otp?: OtpUncheckedCreateNestedManyWithoutOwnerInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutStepsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutStepsInput, UsersUncheckedCreateWithoutStepsInput>
  }

  export type UsersUpsertWithoutStepsInput = {
    update: XOR<UsersUpdateWithoutStepsInput, UsersUncheckedUpdateWithoutStepsInput>
    create: XOR<UsersCreateWithoutStepsInput, UsersUncheckedCreateWithoutStepsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutStepsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutStepsInput, UsersUncheckedUpdateWithoutStepsInput>
  }

  export type UsersUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUpdateManyWithoutUserNestedInput
    Otp?: OtpUpdateManyWithoutOwnerNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutUserNestedInput
    Otp?: OtpUncheckedUpdateManyWithoutOwnerNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutWorkoutGoalInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserCreateNestedManyWithoutUserInput
    Otp?: OtpCreateNestedManyWithoutOwnerInput
    Steps?: StepsCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutWorkoutGoalInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutUserInput
    Otp?: OtpUncheckedCreateNestedManyWithoutOwnerInput
    Steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutWorkoutGoalInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutWorkoutGoalInput, UsersUncheckedCreateWithoutWorkoutGoalInput>
  }

  export type UsersUpsertWithoutWorkoutGoalInput = {
    update: XOR<UsersUpdateWithoutWorkoutGoalInput, UsersUncheckedUpdateWithoutWorkoutGoalInput>
    create: XOR<UsersCreateWithoutWorkoutGoalInput, UsersUncheckedCreateWithoutWorkoutGoalInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutWorkoutGoalInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutWorkoutGoalInput, UsersUncheckedUpdateWithoutWorkoutGoalInput>
  }

  export type UsersUpdateWithoutWorkoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUpdateManyWithoutUserNestedInput
    Otp?: OtpUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutWorkoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutUserNestedInput
    Otp?: OtpUncheckedUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminsCreateWithoutMarathonInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    Blogs?: BlogsCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutMarathonInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    Blogs?: BlogsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutMarathonInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutMarathonInput, AdminsUncheckedCreateWithoutMarathonInput>
  }

  export type marathoAgeRuleCreateWithoutMarathonInput = {
    id?: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type marathoAgeRuleUncheckedCreateWithoutMarathonInput = {
    id?: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type marathoAgeRuleCreateOrConnectWithoutMarathonInput = {
    where: marathoAgeRuleWhereUniqueInput
    create: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput>
  }

  export type marathoAgeRuleCreateManyMarathonInputEnvelope = {
    data: marathoAgeRuleCreateManyMarathonInput | marathoAgeRuleCreateManyMarathonInput[]
    skipDuplicates?: boolean
  }

  export type MarathonUserCreateWithoutMarathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
    user: UsersCreateNestedOneWithoutMarathonUserInput
  }

  export type MarathonUserUncheckedCreateWithoutMarathonInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type MarathonUserCreateOrConnectWithoutMarathonInput = {
    where: MarathonUserWhereUniqueInput
    create: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput>
  }

  export type MarathonUserCreateManyMarathonInputEnvelope = {
    data: MarathonUserCreateManyMarathonInput | MarathonUserCreateManyMarathonInput[]
    skipDuplicates?: boolean
  }

  export type RewardsCreateWithoutMarathonInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardsUncheckedCreateWithoutMarathonInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RewardsCreateOrConnectWithoutMarathonInput = {
    where: RewardsWhereUniqueInput
    create: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput>
  }

  export type RewardsCreateManyMarathonInputEnvelope = {
    data: RewardsCreateManyMarathonInput | RewardsCreateManyMarathonInput[]
    skipDuplicates?: boolean
  }

  export type AdminsUpsertWithoutMarathonInput = {
    update: XOR<AdminsUpdateWithoutMarathonInput, AdminsUncheckedUpdateWithoutMarathonInput>
    create: XOR<AdminsCreateWithoutMarathonInput, AdminsUncheckedCreateWithoutMarathonInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutMarathonInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutMarathonInput, AdminsUncheckedUpdateWithoutMarathonInput>
  }

  export type AdminsUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Blogs?: BlogsUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Blogs?: BlogsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type marathoAgeRuleUpsertWithWhereUniqueWithoutMarathonInput = {
    where: marathoAgeRuleWhereUniqueInput
    update: XOR<marathoAgeRuleUpdateWithoutMarathonInput, marathoAgeRuleUncheckedUpdateWithoutMarathonInput>
    create: XOR<marathoAgeRuleCreateWithoutMarathonInput, marathoAgeRuleUncheckedCreateWithoutMarathonInput>
  }

  export type marathoAgeRuleUpdateWithWhereUniqueWithoutMarathonInput = {
    where: marathoAgeRuleWhereUniqueInput
    data: XOR<marathoAgeRuleUpdateWithoutMarathonInput, marathoAgeRuleUncheckedUpdateWithoutMarathonInput>
  }

  export type marathoAgeRuleUpdateManyWithWhereWithoutMarathonInput = {
    where: marathoAgeRuleScalarWhereInput
    data: XOR<marathoAgeRuleUpdateManyMutationInput, marathoAgeRuleUncheckedUpdateManyWithoutMarathonInput>
  }

  export type marathoAgeRuleScalarWhereInput = {
    AND?: marathoAgeRuleScalarWhereInput | marathoAgeRuleScalarWhereInput[]
    OR?: marathoAgeRuleScalarWhereInput[]
    NOT?: marathoAgeRuleScalarWhereInput | marathoAgeRuleScalarWhereInput[]
    id?: StringFilter<"marathoAgeRule"> | string
    marathonId?: StringFilter<"marathoAgeRule"> | string
    ageMin?: IntNullableFilter<"marathoAgeRule"> | number | null
    ageMax?: IntNullableFilter<"marathoAgeRule"> | number | null
    distanceKm?: IntFilter<"marathoAgeRule"> | number
    created_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"marathoAgeRule"> | Date | string | null
  }

  export type MarathonUserUpsertWithWhereUniqueWithoutMarathonInput = {
    where: MarathonUserWhereUniqueInput
    update: XOR<MarathonUserUpdateWithoutMarathonInput, MarathonUserUncheckedUpdateWithoutMarathonInput>
    create: XOR<MarathonUserCreateWithoutMarathonInput, MarathonUserUncheckedCreateWithoutMarathonInput>
  }

  export type MarathonUserUpdateWithWhereUniqueWithoutMarathonInput = {
    where: MarathonUserWhereUniqueInput
    data: XOR<MarathonUserUpdateWithoutMarathonInput, MarathonUserUncheckedUpdateWithoutMarathonInput>
  }

  export type MarathonUserUpdateManyWithWhereWithoutMarathonInput = {
    where: MarathonUserScalarWhereInput
    data: XOR<MarathonUserUpdateManyMutationInput, MarathonUserUncheckedUpdateManyWithoutMarathonInput>
  }

  export type RewardsUpsertWithWhereUniqueWithoutMarathonInput = {
    where: RewardsWhereUniqueInput
    update: XOR<RewardsUpdateWithoutMarathonInput, RewardsUncheckedUpdateWithoutMarathonInput>
    create: XOR<RewardsCreateWithoutMarathonInput, RewardsUncheckedCreateWithoutMarathonInput>
  }

  export type RewardsUpdateWithWhereUniqueWithoutMarathonInput = {
    where: RewardsWhereUniqueInput
    data: XOR<RewardsUpdateWithoutMarathonInput, RewardsUncheckedUpdateWithoutMarathonInput>
  }

  export type RewardsUpdateManyWithWhereWithoutMarathonInput = {
    where: RewardsScalarWhereInput
    data: XOR<RewardsUpdateManyMutationInput, RewardsUncheckedUpdateManyWithoutMarathonInput>
  }

  export type RewardsScalarWhereInput = {
    AND?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
    OR?: RewardsScalarWhereInput[]
    NOT?: RewardsScalarWhereInput | RewardsScalarWhereInput[]
    id?: StringFilter<"Rewards"> | string
    text?: StringFilter<"Rewards"> | string
    marathonId?: StringFilter<"Rewards"> | string
    createdAt?: DateTimeFilter<"Rewards"> | Date | string
    updatedAt?: DateTimeFilter<"Rewards"> | Date | string
  }

  export type MarathonCreateWithoutRewardsInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    admin?: AdminsCreateNestedOneWithoutMarathonInput
    marathoAgeRule?: marathoAgeRuleCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUncheckedCreateWithoutRewardsInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    marathoAgeRule?: marathoAgeRuleUncheckedCreateNestedManyWithoutMarathonInput
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutMarathonInput
  }

  export type MarathonCreateOrConnectWithoutRewardsInput = {
    where: MarathonWhereUniqueInput
    create: XOR<MarathonCreateWithoutRewardsInput, MarathonUncheckedCreateWithoutRewardsInput>
  }

  export type MarathonUpsertWithoutRewardsInput = {
    update: XOR<MarathonUpdateWithoutRewardsInput, MarathonUncheckedUpdateWithoutRewardsInput>
    create: XOR<MarathonCreateWithoutRewardsInput, MarathonUncheckedCreateWithoutRewardsInput>
    where?: MarathonWhereInput
  }

  export type MarathonUpdateToOneWithWhereWithoutRewardsInput = {
    where?: MarathonWhereInput
    data: XOR<MarathonUpdateWithoutRewardsInput, MarathonUncheckedUpdateWithoutRewardsInput>
  }

  export type MarathonUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    admin?: AdminsUpdateOneWithoutMarathonNestedInput
    marathoAgeRule?: marathoAgeRuleUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateWithoutRewardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    marathoAgeRule?: marathoAgeRuleUncheckedUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonCreateWithoutMarathonUserInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    admin?: AdminsCreateNestedOneWithoutMarathonInput
    marathoAgeRule?: marathoAgeRuleCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUncheckedCreateWithoutMarathonUserInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    marathoAgeRule?: marathoAgeRuleUncheckedCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsUncheckedCreateNestedManyWithoutMarathonInput
  }

  export type MarathonCreateOrConnectWithoutMarathonUserInput = {
    where: MarathonWhereUniqueInput
    create: XOR<MarathonCreateWithoutMarathonUserInput, MarathonUncheckedCreateWithoutMarathonUserInput>
  }

  export type UsersCreateWithoutMarathonUserInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    Otp?: OtpCreateNestedManyWithoutOwnerInput
    Steps?: StepsCreateNestedManyWithoutUserInput
    Workout?: WorkoutCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMarathonUserInput = {
    id?: string
    mobile: string
    fullName?: string | null
    email?: string | null
    gender?: string | null
    address?: string | null
    birth?: Date | string | null
    heightFt?: number | null
    heightIn?: number | null
    weight?: number | null
    createdAt?: Date | string
    updateAt?: Date | string
    image?: string | null
    Otp?: OtpUncheckedCreateNestedManyWithoutOwnerInput
    Steps?: StepsUncheckedCreateNestedManyWithoutUserInput
    Workout?: WorkoutUncheckedCreateNestedManyWithoutUserInput
    WorkoutGoal?: WorkoutGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMarathonUserInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMarathonUserInput, UsersUncheckedCreateWithoutMarathonUserInput>
  }

  export type MarathonUpsertWithoutMarathonUserInput = {
    update: XOR<MarathonUpdateWithoutMarathonUserInput, MarathonUncheckedUpdateWithoutMarathonUserInput>
    create: XOR<MarathonCreateWithoutMarathonUserInput, MarathonUncheckedCreateWithoutMarathonUserInput>
    where?: MarathonWhereInput
  }

  export type MarathonUpdateToOneWithWhereWithoutMarathonUserInput = {
    where?: MarathonWhereInput
    data: XOR<MarathonUpdateWithoutMarathonUserInput, MarathonUncheckedUpdateWithoutMarathonUserInput>
  }

  export type MarathonUpdateWithoutMarathonUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    admin?: AdminsUpdateOneWithoutMarathonNestedInput
    marathoAgeRule?: marathoAgeRuleUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateWithoutMarathonUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    marathoAgeRule?: marathoAgeRuleUncheckedUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUncheckedUpdateManyWithoutMarathonNestedInput
  }

  export type UsersUpsertWithoutMarathonUserInput = {
    update: XOR<UsersUpdateWithoutMarathonUserInput, UsersUncheckedUpdateWithoutMarathonUserInput>
    create: XOR<UsersCreateWithoutMarathonUserInput, UsersUncheckedCreateWithoutMarathonUserInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMarathonUserInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMarathonUserInput, UsersUncheckedUpdateWithoutMarathonUserInput>
  }

  export type UsersUpdateWithoutMarathonUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Otp?: OtpUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMarathonUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightFt?: NullableIntFieldUpdateOperationsInput | number | null
    heightIn?: NullableIntFieldUpdateOperationsInput | number | null
    weight?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Otp?: OtpUncheckedUpdateManyWithoutOwnerNestedInput
    Steps?: StepsUncheckedUpdateManyWithoutUserNestedInput
    Workout?: WorkoutUncheckedUpdateManyWithoutUserNestedInput
    WorkoutGoal?: WorkoutGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminsCreateWithoutBlogsInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    marathon?: MarathonCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutBlogsInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.AdminRoles
    createdAt?: Date | string
    updateAt?: Date | string
    marathon?: MarathonUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutBlogsInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutBlogsInput, AdminsUncheckedCreateWithoutBlogsInput>
  }

  export type AdminsUpsertWithoutBlogsInput = {
    update: XOR<AdminsUpdateWithoutBlogsInput, AdminsUncheckedUpdateWithoutBlogsInput>
    create: XOR<AdminsCreateWithoutBlogsInput, AdminsUncheckedCreateWithoutBlogsInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutBlogsInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutBlogsInput, AdminsUncheckedUpdateWithoutBlogsInput>
  }

  export type AdminsUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marathon?: MarathonUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutBlogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRolesFieldUpdateOperationsInput | $Enums.AdminRoles
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marathon?: MarathonUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type MarathonCreateWithoutMarathoAgeRuleInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    admin?: AdminsCreateNestedOneWithoutMarathonInput
    MarathonUser?: MarathonUserCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsCreateNestedManyWithoutMarathonInput
  }

  export type MarathonUncheckedCreateWithoutMarathoAgeRuleInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
    MarathonUser?: MarathonUserUncheckedCreateNestedManyWithoutMarathonInput
    Rewards?: RewardsUncheckedCreateNestedManyWithoutMarathonInput
  }

  export type MarathonCreateOrConnectWithoutMarathoAgeRuleInput = {
    where: MarathonWhereUniqueInput
    create: XOR<MarathonCreateWithoutMarathoAgeRuleInput, MarathonUncheckedCreateWithoutMarathoAgeRuleInput>
  }

  export type MarathonUpsertWithoutMarathoAgeRuleInput = {
    update: XOR<MarathonUpdateWithoutMarathoAgeRuleInput, MarathonUncheckedUpdateWithoutMarathoAgeRuleInput>
    create: XOR<MarathonCreateWithoutMarathoAgeRuleInput, MarathonUncheckedCreateWithoutMarathoAgeRuleInput>
    where?: MarathonWhereInput
  }

  export type MarathonUpdateToOneWithWhereWithoutMarathoAgeRuleInput = {
    where?: MarathonWhereInput
    data: XOR<MarathonUpdateWithoutMarathoAgeRuleInput, MarathonUncheckedUpdateWithoutMarathoAgeRuleInput>
  }

  export type MarathonUpdateWithoutMarathoAgeRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    admin?: AdminsUpdateOneWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateWithoutMarathoAgeRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUncheckedUpdateManyWithoutMarathonNestedInput
  }

  export type BlogsCreateManyAdminInput = {
    id?: string
    title: string
    readTime: number
    description: string
    details: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagePath: string
  }

  export type MarathonCreateManyAdminInput = {
    id?: string
    title: string
    description: string
    about: string
    startDate: Date | string
    endDate: Date | string
    imagePath?: string | null
    type?: $Enums.MarathonType
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: string | null
    distanceKm: number
  }

  export type BlogsUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type BlogsUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    readTime?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    details?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: StringFieldUpdateOperationsInput | string
  }

  export type MarathonUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    marathoAgeRule?: marathoAgeRuleUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    marathoAgeRule?: marathoAgeRuleUncheckedUpdateManyWithoutMarathonNestedInput
    MarathonUser?: MarathonUserUncheckedUpdateManyWithoutMarathonNestedInput
    Rewards?: RewardsUncheckedUpdateManyWithoutMarathonNestedInput
  }

  export type MarathonUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    about?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMarathonTypeFieldUpdateOperationsInput | $Enums.MarathonType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    distanceKm?: IntFieldUpdateOperationsInput | number
  }

  export type MarathonUserCreateManyUserInput = {
    id?: string
    marathonId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type OtpCreateManyOwnerInput = {
    id?: string
    mobile?: string | null
    code: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expiresAt?: Date | string
    useCase: $Enums.UseCase
  }

  export type StepsCreateManyUserInput = {
    id?: string
    steps: number
    createdAt?: Date | string
  }

  export type WorkoutCreateManyUserInput = {
    id?: string
    calories?: Decimal | DecimalJsLike | number | string
    heartPts?: Decimal | DecimalJsLike | number | string
    type?: $Enums.WorkoutType | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string
    durationMs?: number
  }

  export type WorkoutGoalCreateManyUserInput = {
    id?: string
    bmi?: Decimal | DecimalJsLike | number | string | null
    weightGoal: number
    goalType?: $Enums.GoalType
    activateReminder?: boolean | null
    reminderTime?: Date | string | null
    totalDays?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    endDate?: Date | string | null
    startDate?: Date | string | null
    workoutDays?: string | null
    caloriesGoal?: number | null
    workoutTimeMs?: Decimal | DecimalJsLike | number | string | null
  }

  export type MarathonUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    marathon?: MarathonUpdateOneRequiredWithoutMarathonUserNestedInput
  }

  export type MarathonUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarathonUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    marathonId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OtpUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type OtpUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type OtpUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    useCase?: EnumUseCaseFieldUpdateOperationsInput | $Enums.UseCase
  }

  export type StepsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    steps?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    calories?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    heartPts?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: NullableEnumWorkoutTypeFieldUpdateOperationsInput | $Enums.WorkoutType | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type WorkoutGoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type WorkoutGoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bmi?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    weightGoal?: IntFieldUpdateOperationsInput | number
    goalType?: EnumGoalTypeFieldUpdateOperationsInput | $Enums.GoalType
    activateReminder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reminderTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDays?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workoutDays?: NullableStringFieldUpdateOperationsInput | string | null
    caloriesGoal?: NullableIntFieldUpdateOperationsInput | number | null
    workoutTimeMs?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type marathoAgeRuleCreateManyMarathonInput = {
    id?: string
    ageMin?: number | null
    ageMax?: number | null
    distanceKm: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type MarathonUserCreateManyMarathonInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    distanceKm?: Decimal | DecimalJsLike | number | string | null
    durationMs?: number | null
    submissionCount?: number | null
  }

  export type RewardsCreateManyMarathonInput = {
    id?: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type marathoAgeRuleUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marathoAgeRuleUncheckedUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type marathoAgeRuleUncheckedUpdateManyWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageMin?: NullableIntFieldUpdateOperationsInput | number | null
    ageMax?: NullableIntFieldUpdateOperationsInput | number | null
    distanceKm?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarathonUserUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UsersUpdateOneRequiredWithoutMarathonUserNestedInput
  }

  export type MarathonUserUncheckedUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarathonUserUncheckedUpdateManyWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    durationMs?: NullableIntFieldUpdateOperationsInput | number | null
    submissionCount?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RewardsUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsUncheckedUpdateWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RewardsUncheckedUpdateManyWithoutMarathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
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