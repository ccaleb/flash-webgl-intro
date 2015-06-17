/*
 ADOBE SYSTEMS INCORPORATED
  Copyright 2013 Adobe Systems Incorporated
  All Rights Reserved.

 NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
 terms of the Adobe license agreement accompanying it.  If you have received this file from a
 source other than Adobe, then your use, modification, or distribution of it requires the prior
 written permission of Adobe.

 Version: 0.2.0
 Build number: 15.0.0.150
*/
declare module flwebgl.geom {
    class Point {
        /**
        * Represents a point on a 2 dimensional x / y coordinate system.
        * @class Point
        * @param {number} x
        * @param {number} y
        */
        constructor(x: number, y: number);
        /**
        * X position.
        * @property x
        * @memberof Point.prototype
        * @type number
        **/
        public x: number;
        /**
        * Y position.
        * @property x
        * @memberof Point.prototype
        * @type number
        **/
        public y: number;
    }
}
declare module flwebgl.geom {
    class Matrix {
        /**
        * The Matrix class represents a transformation matrix that determines how to map points from one coordinate space to another. <br/>
        * You can perform various graphical transformations on a display object by setting the properties of a Matrix object, applying that Matrix object to the matrix property of a Transform object, and then applying that Transform object as the transform property of the display object. These transformation functions include translation (x and y repositioning), rotation, scaling.<br/>
        * Together these types of transformations are known as affine transformations. Affine transformations preserve the straightness of lines while transforming, so that parallel lines stay parallel.<br/>
        *<br/>
        * A transformation matrix object is a 3 x 3 matrix with the following contents:<br/>
        * | a c tx |<br/>
        * | b d ty |<br/>
        * | u v w  |<br/>
        * <br/>
        * In traditional transformation matrixes, the u, v, and w properties provide extra capabilities. The Matrix class can only operate in two-dimensional space, so it always assumes that the property values u and v are 0.0, and that the property value w is 1.0. The effective values of the matrix are as follows:<br/>
        * | a c tx |<br/>
        * | b d ty |<br/>
        * | 0 0 1  |<br/>
        * <br/>
        * @class Matrix
        *
        * @param {number[]} values (optional) An array defining the values of the matrix in the format [a b c d tx ty]. If not specified, the matrix is set to identity
        */
        constructor(arr?: number[]);
        /**
        * Returns a clone of the Matrix instance.
        * @method clone
        * @memberof Matrix.prototype
        * @return {Matrix} a clone of the Matrix instance.
        **/
        public clone(): Matrix;
        /**
        * Sets the matix to an Identity Matrix.
        * @method identity
        * @memberof Matrix.prototype
        * @return {Matrix} This matrix. Useful for chaining method calls.
        **/
        public identity(): Matrix;
        /**
        * Returns true if the matrix is an identity matrix.
        * @method isIdentity
        * @memberof Matrix.prototype
        * @return {boolean}
        **/
        public isIdentity(): boolean;
        /**
        * Copies the specified matrix to this matrix.
        * @method copy
        * @memberof Matrix.prototype
        * @param {Matrix} matrix The matrix to copy properties from.
        * @return {Matrix} This matrix. Useful for chaining method calls.
        */
        public copy(m: Matrix): Matrix;
        /**
        * Returns the values of the elements in the matrix
        * @method getValues
        * @memberof Matrix.prototype
        * @return {number[]} An array defining the values of the matrix in the format [a b c d tx ty]
        */
        public getValues(): number[];
        /**
        * Sets the values of the elements of the matrix
        * @method setValues
        * @memberof Matrix.prototype
        * @param {number[]} array An array defining the values of the matrix in the format [a b c d tx ty]
        */
        public setValues(arr: number[]): void;
        /**
        * Concatenates the given matrix with the current matrix, effectively combining the geometric effects of the two
        * @method concat
        * @memberof Matrix.prototype
        * @param {Matrix} matrix The matrix to multiply.
        * @return {Matrix} This matrix. Useful for chaining method calls.
        */
        public concat(mat: Matrix): Matrix;
        /**
        * Transforms a point according to this matrix.
        * @method transformPoint
        * @memberof Matrix.prototype
        * @param {Point} point The point to transform.
        * @return {Point} The transformed point.
        **/
        public transformPoint(point: Point): Point;
        /**
        * Transforms all the four points of the rect according to this matrix.
        * @method transformRect
        * @memberof Matrix.prototype
        * @param {Rect} rect The rect to transform.
        * @return {Rect} The transformed Rect.
        **/
        public transformRect(rect: Rect): Rect;
        /**
        * Inverts the matrix, The invertd matrix will effectively apply the opposite transformation.
        * @method invert
        * @memberof Matrix.prototype
        * @return {Matrix} This matrix. Useful for chaining method calls.
        **/
        public invert(): Matrix;
        /**
        * Checks if the given matrix has the same values as this instance
        * @method equals
        * @memberof Matrix.prototype
        * @param {Matrix} mat The matrix to compare
        * @return {boolean}
        **/
        public equals(mat: Matrix): boolean;
        /**
        * Translates the matrix along the x and y axes, as specified by the dx and dy parameters.
        * @method translate
        * @memberof Matrix.prototype
        * @param {Number} dx The amount of movement along the x axis to the right
        * @param {Number} dy The amount of movement down along the y axis
        * @return {Matrix} This matrix. Useful for chaining method calls.
        **/
        public translate(tx: number, ty: number): Matrix;
        /**
        * Applies a rotation transformation to the matrix.
        * @method rotate
        * @memberof Matrix.prototype
        * @param {number} angle The angle in radians. To use degrees, multiply by <code>Math.PI/180</code>.
        * @return {Matrix} This matrix. Useful for chaining method calls.
        **/
        public rotate: (angle: number) => any;
        /**
        * Applies a scale transformation to the matrix.
        * @method scale
        * @memberof Matrix.prototype
        * @param {number} x Horizontal scale factor
        * @param {number} y Vertical scale factor
        * @return {Matrix} This matrix. Useful for chaining method calls.
        **/
        public scale: (x: number, y: number) => any;
    }
}
declare module flwebgl.geom {
    class Color {
        /**
        * Color in RGBA format
        * @class Color
        * @param {number} r
        * @param {number} g
        * @param {number} b
        * @param {number} a (optional) Default = 255
        */
        constructor(r: number, g: number, b: number, a?: number);
		
		/**
        * @property {number} red The Red Value (0 to 255)
		*/
        public red: number;

		/**
        * @property {number} green The Green Value (0 to 255)
		*/
        public green: number;

		/**
        * @property {number} blue The Blue Value (0 to 255)
		*/
        public blue: number;

		/**
        * @property {number} alpha The Alpha Value (0 to 255)
		*/
        public aalpha: number;
    }
}
declare module flwebgl.geom {
    class ColorTransform {
        /**
        * <p>The ColorTransform class lets you adjust the color values in a display object. The color adjustment or color transformation can be applied to all four channels: red, green, blue, and alpha transparency.</p>
        * <p>This will have 8 members i.e, offsets and multipliers for each of the 4 color channels<br/>
        * When a ColorTransform object is applied to a display object, a new value for each color channel is calculated as follows:<br/>
        * <br/>
        * New red value = (old red value * redMultiplier) + redOffset<br/>
        * New green value = (old green value * greenMultiplier) + greenOffset<br/>
        * New blue value = (old blue value * blueMultiplier) + blueOffset<br/>
        * New alpha value = (old alpha value * alphaMultiplier) + alphaOffset</p>
        * @class ColorTransform
        *
        * @param {number} alphaOffset (optional) Default = 0
        * @param {number} alphaMultiplier (optional) Default = 1
        * @param {number} redOffset (optional) Default = 0
        * @param {number} redMultiplier (optional) Default = 1
        * @param {number} greenOffset (optional) Default = 0
        * @param {number} greenMultiplier (optional) Default = 1
        * @param {number} blueOffset (optional) Default = 0
        * @param {number} blueMultiplier (optional) Default = 1
        */
        constructor(alphaOffset?: number, alphaMultiplier?: number, redOffset?: number, redMultiplier?: number, greenOffset?: number, greenMultiplier?: number, blueOffset?: number, blueMultiplier?: number);
        /**
        * Returns the alpha offset
        * @method getAlphaOffset
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getAlphaOffset(): number;
        /**
        * Returns the red offset
        * @method getRedOffset
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getRedOffset(): number;
        /**
        * Returns the green offset
        * @method getGreenOffset
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getGreenOffset(): number;
        /**
        * Returns the blue offset
        * @method getBlueOffset
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getBlueOffset(): number;
        /**
        * Returns the alpha multiplier
        * @method getAlphaMultiplier
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getAlphaMultiplier(): number;
        /**
        * Returns the red multiplier
        * @method getRedMultiplier
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getRedMultiplier(): number;
        /**
        * Returns the green multiplier
        * @method getGreenMultiplier
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getGreenMultiplier(): number;
        /**
        * Returns the blue multiplier
        * @method getBlueMultiplier
        * @memberof ColorTransform.prototype
        * @return {number}
        **/
        public getBlueMultiplier(): number;
        /**
        * Sets the alpha offset
        * @method setAlphaOffset
        * @memberof ColorTransform.prototype
        * @param {number} offset A number that is added to the alpha transparency channel value after it has been multiplied by the alphaMultiplier value
        **/
        public setAlphaOffset(offset: number): void;
        /**
        * Sets the red offset
        * @method setRedOffset
        * @memberof ColorTransform.prototype
        * @param {number} offset A number that is added to the red channel value after it has been multiplied by the redMultiplier value.
        **/
        public setRedOffset(offset: number): void;
        /**
        * Sets the green offset
        * @method setGreenOffset
        * @memberof ColorTransform.prototype
        * @param {number} offset A number that is added to the green channel value after it has been multiplied by the greenMultiplier value
        **/
        public setGreenOffset(offset: number): void;
        /**
        * Sets the red offset
        * @method setBlueOffset
        * @memberof ColorTransform.prototype
        * @param {number} offset A number that is added to the blue channel value after it has been multiplied by the blueMultiplier value
        **/
        public setBlueOffset(offset: number): void;
        /**
        * Sets the alpha multiplier
        * @method setAlphaMultiplier
        * @memberof ColorTransform.prototype
        * @param {number} multiplier A value that is multiplied with the alpha transparency channel value
        **/
        public setAlphaMultiplier(multiplier: number): void;
        /**
        * Sets the red multiplier
        * @method setRedMultiplier
        * @memberof ColorTransform.prototype
        * @param {number} multiplier A value that is multiplied with the red channel value
        **/
        public setRedMultiplier(multiplier: number): void;
        /**
        * Sets the green multiplier
        * @method setGreenMultiplier
        * @memberof ColorTransform.prototype
        * @param {number} multiplier A value that is multiplied with the green channel value
        **/
        public setGreenMultiplier(multiplier: number): void;
        /**
        * Sets the blue multiplier
        * @method setBlueMultiplier
        * @memberof ColorTransform.prototype
        * @param {number} multiplier A value that is multiplied with the blue channel value
        **/
        public setBlueMultiplier(multiplier: number): void;
        /**
        * Sets the Color transform to an Identity Color transform.
        * @method identity
        * @memberof ColorTransform.prototype
        * @return {ColorTransform} This Color Transform. Useful for chaining method calls.
        **/
        public identity(): ColorTransform;
        /**
        * Returns true if the Color transform is an identity Color transform.
        * @method isIdentity
        * @memberof ColorTransform.prototype
        * @return {boolean}
        **/
        public isIdentity(): boolean;
        /**
        * Checks if the passed Color transform has the same values as this instance
        * @method equals
        * @memberof ColorTransform.prototype
        * @param {ColorTransform} colorTx The Color transform to compare
        * @return {boolean}
        **/
        public equals(colorTx: ColorTransform): boolean;
        /**
        * Concatenates the given Color transform with the current Color transform, effectively combining the effects of the two
        * @method concat
        * @memberof ColorTransform.prototype
        * @param {ColorTransform} colorTx The Color transform to multiply.
        * @return {ColorTransform} This Color transform. Useful for chaining method calls.
        */
        public concat(colorTx: ColorTransform): ColorTransform;
        /**
        * Returns a clone of the Color transform instance.
        * @method clone
        * @memberof ColorTransform.prototype
        * @return {ColorTransform} a clone of the Color transform instance.
        **/
        public clone(): ColorTransform;
        /**
        * Copies the specified Color transform to this instance.
        * @method copy
        * @memberof ColorTransform.prototype
        * @param {ColorTransform} colorTransform The instance to copy properties from.
        * @return {ColorTransform} This matrix. Useful for chaining method calls.
        */
        public copy(colorTransform: ColorTransform): ColorTransform;
    }
}
declare module flwebgl.geom {
    class Rect {
        /**
        * Represents an axis-aligned rectangle as defined by the points (left, top) and (left + width, top + height).
        * @class Rect
        * @param {number} left
        * @param {number} top
        * @param {number} width
        * @param {number} height
        * @property {number} left X position
        * @property {number} top Y position
        * @property {number} width Width of the rectangle
        * @property {number} height Height of the rectangle
        */
        constructor(left: number, top: number, width: number, height: number);
        /**
        * X position.
        * @property left
        * @memberof Rect.prototype
        * @type number
        **/
        public left: number;
        /**
        * Y position.
        * @property top
        * @memberof Rect.prototype
        * @type number
        **/
        public top: number;
        /**
        * Width of rectangle.
        * @property width
        * @memberof Rect.prototype
        * @type number
        **/
        public width: number;
        /**
        * Height of rectangle.
        * @property height
        * @memberof Rect.prototype
        * @type number
        **/
        public height: number;
        /**
        * Checks whether a rect intersects with the given rect
        * @method intersects
        * @memberof Rect.prototype
        * @param {Rect} r The rect with which we need to check the intersection
        * @return {boolean}
        **/
        public intersects(r: Rect): boolean;
    }
}
declare module flwebgl {
    /**
    * TextureAtlas Class - used to initialize the Player.
    */
    class TextureAtlas {
        constructor(textureJSON: JSON, imageURL: string);
    }
}
declare module flwebgl.events {
    class Event {
        /**
        * The Event class is used as the base class for the creation of Event objects, which are passed as parameters to event listeners when an event occurs.
        * @class Event
        * @param {string} type The type of the event
        * @param {boolean} bubbles Determines whether the Event object participates in the bubbling stage of the event flow. The default value is false
        */
        constructor(type: string, bubbles?: boolean);
        /**
        * Returns the event type
        * @method getType
        * @memberof Event.prototype
        * @return {string}
        **/
        public getType(): string;
        /**
        * Returns whether the event bubbles or not
        * @method getBubbles
        * @memberof Event.prototype
        * @return {boolean}
        **/
        public getBubbles(): boolean;
        /**
        * Returns the event target
        * @method getTarget
        * @memberof Event.prototype
        * @return {flwebgl.events.EventDispatcher}
        **/
        public getTarget(): EventDispatcher;
        /**
        * Returns the object that is actively processing the Event object with an event listener
        * @method getCurrentTarget
        * @memberof Event.prototype
        * @return {flwebgl.events.EventDispatcher}
        **/
        public getCurrentTarget(): EventDispatcher;
        /**
        * Prevents processing of any event listeners in nodes subsequent to the current node in the event flow.
        * @method stopPropagation
        * @memberof Event.prototype
        **/
        public stopPropagation(): void;
        /**
        * Prevents processing of any event listeners in the current node and any subsequent nodes in the event flow.
        * @method stopImmediatePropagation
        * @memberof Event.prototype
        **/
        public stopImmediatePropagation(): void;
        /**
        * Dispatched when a display element is added as a child
        * @memberof Event
        **/
        static ADDED: string;
        /**
        * Dispatched when a display element is about to be removed from the parent
        * @memberof Event
        **/
        static REMOVED: string;
        /**
        * Enter frame event
        * @memberof Event
        **/
        static ENTER_FRAME: string;
        /**
        * Exit frame event
        * @memberof Event
        **/
        static EXIT_FRAME: string;
        /**
        * Frame constructed event
        * @memberof Event
        **/
        static FRAME_CONSTRUCTED: string;
    }
}
declare module flwebgl.events {
    class EventDispatcher {
        /**
        * Registers an event listener object with an EventDispatcher object so that the listener receives notification of an event.
        * It does not check for duplicate listeners. That is the responsibility of the client
        * @method addEventListener
        * @memberof EventDispatcher.prototype
        * @param {string} type The event type
        * @param {Function} listener The callback function. This function must accept an Event object as its only parameter and must return nothing
        **/
        public addEventListener(type: string, listener: Function): void;
        /**
        * Checks whether the EventDispatcher object has any listeners registered for a specific type of event.
        * @method hasEventListener
        * @memberof EventDispatcher.prototype
        * @param {string} type The event type
        * @param {Function} listener (Optional) If specified, check if this listener has been added
        * @return {boolean}
        **/
        public hasEventListener(type: string, listener?: Function): boolean;
        /**
        * Removes the event listener for the given event type
        * @method removeEventListener
        * @memberof EventDispatcher.prototype
        * @param {string} type The event type
        * @param {Function} listener The listener to be removed
        **/
        public removeEventListener(type: string, listener: Function): void;
        /**
        * Dispatches an event to all objects that have registered listeners for its type
        * @method dispatchEvent
        * @memberof EventDispatcher.prototype
        * @param {Event} event The event to be dispatched
        **/
        public dispatchEvent(event: Event): void;
    }
}
/**
* Interface for Display Objects (implemented by Shape and MovieClip)
*/
declare module flwebgl.sg {
    interface IDisplayObject {
    }
}
declare module flwebgl.sg {
    class Shape implements IDisplayObject {
        /**
        * Sets the name for this display object
        * @method setName
        * @memberof Shape.prototype
        * @param {string} name The name of the display object
        **/
        public setName(name: string): void;
        /**
        * Returns the name for this display object
        * @memberof Shape.prototype
        * @method getName
        * @return {string}
        **/
        public getName(): string;
        /**
        * Sets the visibility flag for this display object
        * @method setVisible
        * @memberof Shape.prototype
        * @param {boolean} flag The visibility flag
        **/
        public setVisible(flag: boolean): void;
        /**
        * Returns the visibility flag for the display object
        * @method isVisible
        * @memberof Shape.prototype
        * @return {boolean}
        **/
        public isVisible(): boolean;
        /**
        * Sets the local transform of the display object
        * @method setLocalTransform
        * @memberof Shape.prototype
        * @param {flwebgl.geom.Matrix} transform The transform to be set
        **/
        public setLocalTransform(transform: geom.Matrix): void;
        /**
        * Returns the local transform of the display object
        * @method getLocalTransform
        * @memberof Shape.prototype
        * @return {flwebgl.geom.Matrix}
        **/
        public getLocalTransform(): geom.Matrix;
        /**
        * Returns the global transform of the display object
        * @method getGlobalTransform
        * @memberof Shape.prototype
        * @return {flwebgl.geom.Matrix}
        **/
        public getGlobalTransform(): geom.Matrix;
        /**
        * Sets the local color transform of the display object
        * @method setLocalColorTransform
        * @memberof Shape.prototype
        * @param {flwebgl.geom.ColorTransform} colorTransform The color transform to be set
        **/
        public setLocalColorTransform(colorTransform: geom.ColorTransform): void;
        /**
        * Returns the local color transform of the display object
        * @method getLocalColorTransform
        * @memberof Shape.prototype
        * @return {flwebgl.geom.ColorTransform}
        **/
        public getLocalColorTransform(): geom.ColorTransform;
        /**
        * Returns the global color transform of the display object
        * @method getGlobalColorTransform
        * @memberof Shape.prototype
        * @return {flwebgl.geom.ColorTransform}
        **/
        public getGlobalColorTransform(): geom.ColorTransform;
        /**
        * Returns the bounding rectangle
        * @method getBounds
        * @memberof Shape.prototype
        * @param targetCoordinateSpace {flwebgl.sg.IDisplayObject} (Optional default = undefined) The display object that defines the coordinate system to use. If not specified, return the local bounds
        * @param bFastBounds {boolean} (Optional default = false) Specifies whether to return the exact bounds (faster) or the transformed local bounds (slower)
        * @return {flwebgl.geom.Rect} bounds of the display object
        **/
        public getBounds(targetCoordinateSpace?: IDisplayObject, bFastBounds?: boolean): geom.Rect;
    }
}
declare module flwebgl.sg {
    class MovieClip extends events.EventDispatcher implements IDisplayObject {
        /**
        * Sets the name for this display object
        * @method setName
        * @memberof MovieClip.prototype
        * @param {string} name The name of the display object
        **/
        public setName(name: string): void;
        /**
        * Returns the name for this display object
        * @method getName
        * @memberof MovieClip.prototype
        * @return {string}
        **/
        public getName(): string;
        /**
        * Sets the visibility flag for this display object
        * @method setVisible
        * @memberof MovieClip.prototype
        * @param {boolean} flag The visibility flag
        **/
        public setVisible(flag: boolean): void;
        /**
        * Returns the visibility flag for the display object
        * @method isVisible
        * @memberof MovieClip.prototype
        * @return {boolean}
        **/
        public isVisible(): boolean;
        /**
        * Sets the local transform of the display object
        * @method setLocalTransform
        * @memberof MovieClip.prototype
        * @param {flwebgl.geom.Matrix} transform The transform to be set
        **/
        public setLocalTransform(transform: geom.Matrix): void;
        /**
        * Returns the local transform of the display object
        * @method getLocalTransform
        * @memberof MovieClip.prototype
        * @return {flwebgl.geom.Matrix}
        **/
        public getLocalTransform(): geom.Matrix;
        /**
        * Returns the global transform of the display object
        * @method getGlobalTransform
        * @memberof MovieClip.prototype
        * @return {flwebgl.geom.Matrix}
        **/
        public getGlobalTransform(): geom.Matrix;
        /**
        * Sets the local color transform of the display object
        * @method setLocalColorTransform
        * @memberof MovieClip.prototype
        * @param {flwebgl.geom.ColorTransform} colorTransform The color transform to be set
        **/
        public setLocalColorTransform(colorTransform: geom.ColorTransform): void;
        /**
        * Returns the local color transform of the display object
        * @method getLocalColorTransform
        * @memberof MovieClip.prototype
        * @return {flwebgl.geom.ColorTransform}
        **/
        public getLocalColorTransform(): geom.ColorTransform;
        /**
        * Returns the global color transform of the display object
        * @method getGlobalColorTransform
        * @memberof MovieClip.prototype
        * @return {flwebgl.geom.ColorTransform}
        **/
        public getGlobalColorTransform(): geom.ColorTransform;
        /**
        * Adds the given object as the top-most child for this movie clip. The child can be a shape or a movie clip
        * @method addChild
        * @memberof MovieClip.prototype
        * @param {flwebgl.sg.IDisplayObject} child The child to be added
        * @return {boolean} Whether the operation was successful
        **/
        public addChild(child: IDisplayObject): boolean;
        /**
        * Adds the passed child object at the specified index for this movie clip. The child can be a shape or a movie clip
        * @method addChildAt
        * @memberof MovieClip.prototype
        * @param {flwebgl.sg.IDisplayObject} child
        * @param {number} index The index where the child needs to be added
        * @return {boolean} Whether the operation was successful
        **/
        public addChildAt(child: IDisplayObject, index: number): boolean;
        /**
        * Removes the given child object from the movie clip. The child can be a shape or a movie clip
        * @method removeChild
        * @memberof MovieClip.prototype
        * @param {flwebgl.sg.IDisplayObject} child
        * @return {boolean} Whether the operation was successful
        **/
        public removeChild(child: IDisplayObject): IDisplayObject;
        /**
        * Removes the child at the specified index from the movie clip. The child can be a shape or a movie clip
        * @method removeChildAt
        * @memberof MovieClip.prototype
        * @param {number} index Index of the child to be removed
        * @return {boolean} Whether the operation was successful
        **/
        public removeChildAt(index: number): IDisplayObject;
        /**
        * Returns the number of children
        * @method getNumChildren
        * @memberof MovieClip.prototype
        * @return {number}
        **/
        public getNumChildren(): number;
        /**
        * Returns the children of this movie clip
        * @method getChildren
        * @memberof MovieClip.prototype
        * @return {flwebgl.sg.IDisplayObject[]}
        **/
        public getChildren(): IDisplayObject[];
        /**
        * Returns the child at the specified index of this movie clip. Returns undefined if there is no child at the specified index
        * @method getChildAt
        * @memberof MovieClip.prototype
        * @param {number} index The index at which the child is requested
        * @return {flwebgl.sg.IDisplayObject}
        **/
        public getChildAt(index: number): IDisplayObject;
        /**
        * Returns the index of the child in the children list. Returns -1 if the child is not found
        * @method getChildIndex
        * @memberof MovieClip.prototype
        * @param {flwebgl.sg.IDisplayObject} child The child to be searched
        * @return {number}
        **/
        public getChildIndex(child: IDisplayObject): number;
        /**
        * Returns the child display object that exists with the specified name.If more that one child display object has the specified name, the method returns the first object in the child list.
        * @method getChildByName
        * @param {string} name - Name of the child to search for
        * @memberof MovieClip.prototype
        * @return {number} Child with the given name
        **/
        public getChildByName(name: string): IDisplayObject;
        /**
        * Sets the z-depth of a child
        * @method setChildIndex
        * @memberof MovieClip.prototype
        * @param {flwebgl.sg.IDisplayObject} child The child whose z-depth is to be set
        * @param {number} newIndex The new z-position of the child with respect to its siblings
        **/
        public setChildIndex(child: IDisplayObject, newIndex: number): void;
        /**
        * Returns the current frame no. Frame numbers are 1 based.
        * @method getCurrentFrame
        * @memberof MovieClip.prototype
        * @return {number}
        **/
        public getCurrentFrame(): number;
        /**
        * Returns the total number of frames in the corresponding timeline
        * @method getTotalFrames
        * @memberof MovieClip.prototype
        * @return {number}
        **/
        public getTotalFrames(): number;
        /**
        * Moves the playhead in the timeline of the movie clip
        * @method play
        * @memberof MovieClip.prototype
        **/
        public play(): void;
        /**
        * Stops the playhead in the movie clip
        * @method stop
        * @memberof MovieClip.prototype
        **/
        public stop(): void;
        /**
        * Returns true if the movie clip is playing and false if it has been stopped
        * @method isPlaying
        * @memberof MovieClip.prototype
        * @return {boolean}
        **/
        public isPlaying(): boolean;
        /**
        * Starts playing the movie clip at the specified frame
        * @method gotoAndPlay
        * @memberof MovieClip.prototype
        * @param {number/String} frame The requested frame number or frame label
        **/
        public gotoAndPlay(frame: any): void;
        /**
        * Brings the playhead to the specified frame of the movie clip and stops it there
        * @method gotoAndStop
        * @memberof MovieClip.prototype
        * @param {number/String} frame The requested frame number or frame label
        **/
        public gotoAndStop(frame: any): void;
        /**
        * Returns a list of all the labels in the Movieclip / scene. Each label can be accessed by its 'name' and 'frameNum' properties
        * @method getFrameLabels
        * @memberof MovieClip.prototype
        * @return {Array<{frameNum: number, name: string}>}
        **/
        public getFrameLabels(): {
            frameNum: number;
            name: string;
        }[];
        /**
        * The label at the current frame in the timeline of the MovieClip instance. If the current frame has no label, currentLabel is undefined.
        * @method getCurrentFrameLabel
        * @memberof MovieClip.prototype
        * @return {string}
        **/
        public getCurrentFrameLabel(): string;
        /**
        * The current label in which the playhead is located in the timeline of the MovieClip instance. If the current frame has no label, getCurrentLabel() returns the name of the previous frame that includes a label. If the current frame and previous frames do not include a label, getCurrentLabel() returns undefined.
        * @method getCurrentLabel
        * @memberof MovieClip.prototype
        * @return {string}
        **/
        public getCurrentLabel(): string;
        /**
        * Returns the bounding rectangle
        * @method getBounds
        * @memberof MovieClip.prototype
        * @param targetCoordinateSpace {flwebgl.sg.IDisplayObject} (Optional default = undefined) The display object that defines the coordinate system to use. If not specified, return the local bounds
        * @param bFastBounds {boolean} (Optional default = false) Specifies whether to return the exact bounds (faster) or the transformed local bounds (slower)
        * @return {flwebgl.geom.Rect} bounds of the display object
        **/
        public getBounds(targetCoordinateSpace?: IDisplayObject, bFastBounds?: boolean): geom.Rect;
    }
}
declare module flwebgl.sg {
    class SceneGraphFactory {
        /**
        * Creates a new movie clip instance with the given movie clip linkage name
        * @method createMovieClipInstance
        * @memberof SceneGraphFactory.prototype
        * @param {string} linkageName The movie clip linkage name
        * @return {flwebgl.sg.MovieClip}
        **/
        public createMovieClipInstance(linkageName: string): MovieClip;
    }
}
declare module flwebgl {
    class Player {
        /**
        * The Player class is the entrypoint for the WebGL runtime API. Using this class, one can initialize
        * the animation and control its playback.
        * @class Player
        */
        constructor();
        /**
        * Initializes the application with the resources and canvas
        * Resouce loading is asynchronous. The given callback function is called once the resource loading is complete
        * @method init
        * @memberof Player.prototype
        * @param canvas {HTMLCanvasElement} The target canvas element
        * @param resourceFile {Object} The resource file JSON Object
        * @param {flwebgl.TextureAtlas[]} Array of TextureAtlas object
        * @param cbk {Function} The callback function to be called for resource loading notification
        * @return {number} returns S_OK if initialization succeeded, otherwise returns an appropriate error code
        */
        public init(canvas: HTMLCanvasElement, content: Object, textureAtlasList: TextureAtlas[], cbk: Function): number;
        /**
        * Sets the viewport
        * @method setViewport
        * @memberof Player.prototype
        * @param viewport {flwebgl.geom.Rect} The viewport to be set
        **/
        public setViewport(viewport: geom.Rect): void;
        /**
        * Plays the animation
        * @method play
        * @memberof Player.prototype
        * @param scene {string} (optional ) The scene to play. If not specified, all scenes are played.
        * @return {boolean}
        **/
        public play(scene?: string): boolean;
        /**
        * Stop the animation
        * @memberof Player.prototype
        * @method stop
        **/
        public stop(): void;
        /**
        * Get a factory for movie clip instances
        * @memberof Player.prototype
        * @method getScenegraphFactory
        * @return {flwebgl.sg.SceneGraphFactory}
        */
        public getScenegraphFactory(): sg.SceneGraphFactory;
        /**
        * Get a reference to the stage
        * @memberof Player.prototype
        * @method getStage
        * @return {flwebgl.sg.MovieClip}
        */
        public getStage(): sg.MovieClip;
        /**
        * Returns the width of the stage in pixels
        * @memberof Player.prototype
        * @method getStageWidth
        * @return {number}
        **/
        public getStageWidth(): number;
        /**
        * Returns the height of the stage in pixels
        * @memberof Player.prototype
        * @method getStageHeight
        * @return {number}
        **/
        public getStageHeight(): number;
        /**
        * Returns the background color of the stage
        * @memberof Player.prototype
        * @method getBackgroundColor
        * @return {flwebgl.geom.Color}
        **/
        public getBackgroundColor(): geom.Color;
        /**
        * @property {number} S_OK
        * @memberof Player
        **/
        static S_OK: number;
        /**
        * @property {number} E_ERR Generic error code
        * @memberof Player
        **/
        static E_ERR: number;
        /**
        * @property {number} E_INVALID_PARAM Invalid parameters passed to the function
        * @memberof Player
        **/
        static E_INVALID_PARAM: number;
        /**
        * @property {number} E_CONTEXT_CREATION_FAILED WebGL is not supported in the browser
        * @memberof Player
        **/
        static E_CONTEXT_CREATION_FAILED: number;
        /**
        * @property {number} E_REQUIRED_EXTENSION_NOT_PRESENT WebGL is not supported in the browser
        * @memberof Player
        **/
        static E_REQUIRED_EXTENSION_NOT_PRESENT: number;
        /**
        * @property {number} E_RESOURCE_LOADING_FAILED Resource loading failed
        * @memberof Player
        **/
        static E_RESOURCE_LOADING_FAILED: number;
    }
}
