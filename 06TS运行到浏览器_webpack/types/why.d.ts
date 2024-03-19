declare module "lodash" {
  export function join(...args: any[]): any
}

declare const whyName: string
declare const whyAge: number
declare const whyHeight: number

declare function foo(bar: string): string

declare class Person {
  constructor(public name: string, public age: number)
}


declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"


//命名空间的方式声明
declare namespace $ {
  export function ajax(settings: any): any
}