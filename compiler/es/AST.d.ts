import { LOC } from './parse';
export declare const Program: "Program";
export interface Program {
    type: typeof Program;
    segments: CodeSegment[];
}
export declare type CodeSegment = CodeText | JSXElement;
export declare const CodeText: "CodeText";
export interface CodeText {
    type: typeof CodeText;
    text: string;
    loc: LOC;
}
export declare const EmbeddedCode: "EmbeddedCode";
export interface EmbeddedCode {
    type: typeof EmbeddedCode;
    segments: CodeSegment[];
}
export declare type JSXProperty = JSXStaticProperty | JSXDynamicProperty | JSXStyleProperty | JSXSpreadProperty;
export declare type JSXContent = JSXElement | JSXComment | JSXText | JSXInsert;
export declare enum JSXElementKind {
    HTML = 0,
    SVG = 1,
    SubComponent = 2,
}
export declare const JSXElement: "JSXElement";
export interface JSXElement {
    type: typeof JSXElement;
    tag: string;
    properties: JSXProperty[];
    references: JSXReference[];
    functions: JSXFunction[];
    content: JSXContent[];
    kind: JSXElementKind;
    loc: LOC;
}
export declare const JSXText: "JSXText";
export interface JSXText {
    type: typeof JSXText;
    text: string;
}
export declare const JSXComment: "JSXComment";
export interface JSXComment {
    type: typeof JSXComment;
    text: string;
}
export declare const JSXInsert: "JSXInsert";
export interface JSXInsert {
    type: typeof JSXInsert;
    code: EmbeddedCode;
    loc: LOC;
}
export declare const JSXStaticProperty: "JSXStaticProperty";
export interface JSXStaticProperty {
    type: typeof JSXStaticProperty;
    name: string;
    value: string;
}
export declare const JSXDynamicProperty: "JSXDynamicProperty";
export interface JSXDynamicProperty {
    type: typeof JSXDynamicProperty;
    name: string;
    code: EmbeddedCode;
    loc: LOC;
}
export declare const JSXSpreadProperty: "JSXSpreadProperty";
export interface JSXSpreadProperty {
    type: typeof JSXSpreadProperty;
    code: EmbeddedCode;
    loc: LOC;
}
export declare const JSXStyleProperty: "JSXStyleProperty";
export interface JSXStyleProperty {
    type: typeof JSXStyleProperty;
    name: string;
    code: EmbeddedCode;
    loc: LOC;
}
export declare const JSXReference: "JSXReference";
export interface JSXReference {
    type: typeof JSXReference;
    code: EmbeddedCode;
    loc: LOC;
}
export declare const JSXFunction: "JSXFunction";
export interface JSXFunction {
    type: typeof JSXFunction;
    code: EmbeddedCode;
    loc: LOC;
}
