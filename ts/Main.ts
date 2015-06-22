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

	private stage:     MovieClip;
	private bunny:     MovieClip;
	private defendBtn: MovieClip;
	private attackBtn: MovieClip;

	constructor(private player: Player, private document: HTMLDocument) {

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
	};

	private pressed = (e: MouseEvent) => {

		const clickedAt = new Point(e.pageX, e.pageY);

		const attackBtnBounds = this.attackBtn.getBounds(this.stage);
		const defendBtnBounds = this.defendBtn.getBounds(this.stage);

		if (Main.isPointInsideRect(clickedAt, attackBtnBounds)) {
			this.attackBtnPressed();
		} else if (Main.isPointInsideRect(clickedAt, defendBtnBounds)) {
			this.defendBtnPressed();
		}
	};

	private released = (e: Event) => {
		this.defendBtn.gotoAndStop(1);
		this.attackBtn.gotoAndStop(1);
	};

	private attackBtnPressed() {
		this.attackBtn.gotoAndStop(2);
		this.bunny.gotoAndPlay("punch");
	}

	private defendBtnPressed() {
		this.defendBtn.gotoAndStop(2);
		this.bunny.gotoAndPlay("jump");
	}

	private static isPointInsideRect(point: Point, rect: Rect): boolean {
		if (point.x > rect.left && point.x < (rect.left + rect.width)) {
			if (point.y > rect.top && point.y < (rect.top + rect.height)) {
				return true;
			}
		}

		return false;
	}

	private createMovieClipInstancesExample() {
		const sgf = this.player.getScenegraphFactory();
		for (let i = 0; i < 10; i++) {
			let bunny = sgf.createMovieClipInstance("Bunny");
			let x = this.player.getStageWidth() * Math.random();
			let y = this.player.getStageHeight() * Math.random();
			Main.setPosition(bunny, x, y);
			this.stage.addChild(bunny);
		}
	}

	private static setPosition(target: MovieClip, x: number, y: number) {
		const matrix = target.getLocalTransform();
		const arr = matrix.getValues();
		arr[4] = x;
		arr[5] = y;
		matrix.setValues(arr);
		target.setLocalTransform(matrix);
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
