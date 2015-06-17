/// <reference path="d.ts/flwebgl-0.2.d.ts" />

import IDisplayObject    = flwebgl.sg.IDisplayObject;
import MovieClip         = flwebgl.sg.MovieClip;
import SceneGraphFactory = flwebgl.sg.SceneGraphFactory;
import FlWebGLEvent      = flwebgl.events.Event;
import Player            = flwebgl.Player;
import Point             = flwebgl.geom.Point;
import Rect              = flwebgl.geom.Rect;
import Matrix            = flwebgl.geom.Matrix;

class Main {
	
	private document:  HTMLDocument;
	private player:    Player;
	private stage:     MovieClip;
	private bunny:     MovieClip;
	private defendBtn: MovieClip;
	private attackBtn: MovieClip;

	constructor(player: Player, document: HTMLDocument) {
		
		this.document = document;
		this.player   = player;
		this.stage    = player.getStage();

		this.stage.addEventListener(FlWebGLEvent.FRAME_CONSTRUCTED, this.ready);

		document.onmousedown = this.pressed;
		document.onmouseup   = this.released;
	}

	private ready = (e: FlWebGLEvent) => {

		this.stage.removeEventListener(FlWebGLEvent.FRAME_CONSTRUCTED, this.ready);

		this.bunny     = <MovieClip> this.stage.getChildByName("bunny");
		this.attackBtn = <MovieClip> this.stage.getChildByName("attackBtn");
		this.defendBtn = <MovieClip> this.stage.getChildByName("defendBtn");

		//this.createMovieClipInstancesExample();
		//this.exitFrameExample();
	}

	private pressed = (e: MouseEvent) => {

		var clickedAt: Point = new Point(e.pageX, e.pageY);
		
		var attackBtnBounds: Rect = this.attackBtn.getBounds(this.stage);
		var defendBtnBounds: Rect = this.defendBtn.getBounds(this.stage);

		if (this.isPointInsideRect(clickedAt, attackBtnBounds)) {
			this.attackBtnPressed();
		} else if (this.isPointInsideRect(clickedAt, defendBtnBounds)) {
			this.defendBtnPressed();
		}
	}

	private released = (e: Event) => {
		this.defendBtn.gotoAndStop(1);
		this.attackBtn.gotoAndStop(1);
	}

	private attackBtnPressed() {
		this.attackBtn.gotoAndStop(2);
		this.bunny.gotoAndPlay("punch");
	}

	private defendBtnPressed() {
		this.defendBtn.gotoAndStop(2);
		this.bunny.gotoAndPlay("jump");
	}

	private isPointInsideRect(point: Point, rect: Rect) : boolean {
		if (point.x > rect.left && point.x < (rect.left + rect.width)) {
			if (point.y > rect.top && point.y < (rect.top + rect.height)) {
				return true;
			}
		}

		return false;
	}

	private createMovieClipInstancesExample() {
		const sgf: SceneGraphFactory = this.player.getScenegraphFactory();
		for (var i: number = 0; i < 10; i++) {
			var bunny: MovieClip = sgf.createMovieClipInstance("Bunny");
			var x: number = this.player.getStageWidth() * Math.random();
			var y: number = this.player.getStageHeight() * Math.random();
			this.setPosition(bunny, x, y);
			this.stage.addChild(bunny);
		}
	}

	private setPosition(target: MovieClip, x: number, y: number) {
		const m: Matrix = target.getLocalTransform();
		const arr: Array<number> = m.getValues();
		arr[4] = x;
		arr[5] = y;
		m.setValues(arr);
		target.setLocalTransform(m);
	}

	private exitFrameExample() {
		this.bunny.addEventListener(FlWebGLEvent.EXIT_FRAME, this.update);
	}

	private update = (e: FlWebGLEvent) => {
		const target: MovieClip = <MovieClip> e.getTarget();
		const m: Matrix = target.getLocalTransform();
		m.translate(1, 0);
		target.setLocalTransform(m);
	}
}