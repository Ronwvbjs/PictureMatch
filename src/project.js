require=function t(e,i,n){function o(a,c){if(!i[a]){if(!e[a]){var r="function"==typeof require&&require;if(!c&&r)return r(a,!0);if(s)return s(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var u=i[a]={exports:{}};e[a][0].call(u.exports,function(t){var i=e[a][1][t];return o(i||t)},u,u.exports,t,e,i,n)}return i[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)o(n[a]);return o}({AlphaFade:[function(t,e,i){"use strict";function n(t,e,i,n){o.call(this),this.targetNode_=t,this.destinationColor_=this.targetNode_.color.clone(),this.destinationColor_.setA(e),this.duration_=i,this.shouldDelete_=n}cc._RF.push(e,"2207bdpe4xLKrMxpZd1wlBL","AlphaFade");var o=t("SceneState"),s=t("Fade");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){t.changeState(new s(this.targetNode_,this.destinationColor_,this.duration_,this.shouldDelete_))},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{Fade:"Fade",SceneState:"SceneState"}],Duration:[function(t,e,i){"use strict";cc._RF.push(e,"70de4dQtdBIaosZci+YDvzF","Duration");var n={CHANGE_SCENE:.75,START_FADE:.5,FAILURE:3,SUCCESS:3,PRIZE:1};e.exports=n,cc._RF.pop()},{}],Fade:[function(t,e,i){"use strict";function n(t,e,i,n){o.call(this),this.targetNode_=t,this.destinationColor_=e,this.duration_=i,this.shouldDelete_=n,this.currentR_=this.currentG_=this.currentB_=this.currentA_=0,this.deltaR_=this.deltaG_=this.deltaB_=this.deltaA_=0,this.elapsedTime_=0,this.canUpdate_=!1,this.isPlaying_=!1}cc._RF.push(e,"57b33kZBkhM7rTy5FsUPQBu","Fade");var o=t("SceneState");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.isPlaying=function(){return this.isPlaying_},n.prototype.onActivated=function(t,e){this.currentR_=this.targetNode_.color.getR(),this.currentG_=this.targetNode_.color.getG(),this.currentB_=this.targetNode_.color.getB(),this.currentA_=this.targetNode_.opacity,this.deltaR_=(this.destinationColor_.getR()-this.currentR_)/this.duration_,this.deltaG_=(this.destinationColor_.getG()-this.currentG_)/this.duration_,this.deltaB_=(this.destinationColor_.getB()-this.currentB_)/this.duration_,this.deltaA_=(this.destinationColor_.getA()-this.currentA_)/this.duration_,this.elapsedTime_=0,this.canUpdate_=!0,this.isPlaying_=!0},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){this.canUpdate_&&(this.currentR_=this.currentR_+this.deltaR_*e,this.currentR_<0?this.currentR_=0:this.currentR_>255&&(this.currentR_=255),this.currentG_=this.currentG_+this.deltaG_*e,this.currentG_<0?this.currentG_=0:this.currentG_>255&&(this.currentG_=255),this.currentB_=this.currentB_+this.deltaB_*e,this.currentB_<0?this.currentB_=0:this.currentB_>255&&(this.currentB_=255),this.currentA_=this.currentA_+this.deltaA_*e,this.currentA_<0?this.currentA_=0:this.currentA_>255&&(this.currentA_=255),this.targetNode_.color=new cc.Color(this.currentR_,this.currentG_,this.currentB_),this.targetNode_.opacity=this.currentA_,this.elapsedTime_+=e,this.elapsedTime_>this.duration_&&(this.shouldDelete_?(this.targetNode_.parent.removeChild(this.targetNode_,!0),this.targetNode_.destroy()):(this.targetNode_.color=new cc.Color(this.destinationColor_.getR(),this.destinationColor_.getG(),this.destinationColor_.getB()),this.targetNode_.opacity=this.destinationColor_.getA()),this.canUpdate_=!1,this.isPlaying_=!1,t.changeState()))},e.exports=n,cc._RF.pop()},{SceneState:"SceneState"}],Failure:[function(t,e,i){"use strict";function n(){o.call(this)}cc._RF.push(e,"f81d8fXkFdO0b38H6NKe+tQ","Failure");var o=t("SceneState"),s=t("LoadScene"),a=t("ScreenFade"),c=t("WaitSeconds"),r=t("Duration");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){t.panel.setInteractive(!1),t.timeUp.opacity=255,t.pushState(new s("FrontEnd")),t.pushState(new a(t.canvas,cc.Color.TRANSPARENT,cc.Color.BLACK,r.CHANGE_SCENE)),t.changeState(new c(r.FAILURE))},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{Duration:"Duration",LoadScene:"LoadScene",SceneState:"SceneState",ScreenFade:"ScreenFade",WaitSeconds:"WaitSeconds"}],FrontEnd:[function(t,e,i){"use strict";cc._RF.push(e,"103c2UVWe5KJZoP13Nz39Hg","FrontEnd");var n=t("GameScene"),o=t("LoadScene"),s=t("ScreenFade"),a=t("WaitAnyKey"),c=t("Duration");cc.Class({extends:n,onLoad:function(){var t;this._super(),t=new cc.ResolutionPolicy(cc.ContainerStrategy.ORIGINAL_CONTAINER,cc.ContentStrategy.SHOW_ALL),cc.view.setDesignResolutionSize(800,600,t),cc.view.resizeWithBrowserSize(!1),this.canvas.opacity=0},start:function(){this.pushState(new o("Puzzle")),this.pushState(new s(this.canvas,cc.Color.TRANSPARENT,new cc.Color,c.CHANGE_SCENE)),this.pushState(new a(this.canvas)),this.changeState(new s(this.canvas,cc.Color.BLACK,cc.Color.TRANSPARENT,c.CHANGE_SCENE,!0))},update:function(t){this.currentState.onUpdate(this,t)}}),cc._RF.pop()},{Duration:"Duration",GameScene:"GameScene",LoadScene:"LoadScene",ScreenFade:"ScreenFade",WaitAnyKey:"WaitAnyKey"}],GameBehaviour:[function(t,e,i){"use strict";cc._RF.push(e,"6a287B356pHwZhUxq1NFeUE","GameBehaviour"),cc.Class({extends:cc.Component,getPosition:function(){return this.node.getPosition()},setPosition:function(t){this.node.setPosition(t.x,t.y)},getX:function(){return this.node.x},setX:function(t){this.node.x=t},getY:function(){return this.node.y},setY:function(t){this.node.y=t},getZIndex:function(){return this.node.zIndex},setZIndex:function(t){this.node.zIndex=t},sortAllChildren:function(){this.node.sortAllChildren()},runAction:function(t){return this.node.runAction(t)}}),cc._RF.pop()},{}],GameMain:[function(t,e,i){"use strict";function n(){o.call(this)}cc._RF.push(e,"a818ciYC+NPA4yS+4ULQVJl","GameMain");var o=t("SceneState"),s=(t("Duration"),t("Failure")),a=t("Success");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){t.time.startCount(),t.panel.setInteractive(!0)},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){0==t.time.getValue()?t.changeState(new s):t.panel.isComplete()&&t.changeState(new a)},e.exports=n,cc._RF.pop()},{Duration:"Duration",Failure:"Failure",SceneState:"SceneState",Success:"Success"}],GameScene:[function(t,e,i){"use strict";cc._RF.push(e,"a832f0Sxo5AvKfy3Gora9sI","GameScene"),cc.Class({extends:cc.Component,properties:{canvas:cc.Node},isStateEmpty:function(){return 0===this.states_.length},getStateCount:function(){return this.states_.length},containsState:function(t){for(var e=0;e<this.states_.length;++e)if(this.states_[e]===t)return!0;return!1},clearstates:function(){this.states_=new Array},pushState:function(t){this.states_.push(t)},popState:function(){return this.states_.pop()},peekState:function(){return this.states_[this.states_.length-1]},changeState:function(t){var e;null==t&&(t=this.popState()),null!=this.currentState&&this.currentState.onDeactivated(this,t),e=this.currentState,this.currentState=t,cc.log("State - Count:",this.states_.length," - OldState:",e," - NewState:",this.currentState),this.currentState.onActivated(this,e)},onLoad:function(){this.currentState=null,this.states_=[]}}),cc._RF.pop()},{}],LoadScene:[function(t,e,i){"use strict";function n(t){o.call(this),this.name_=t}cc._RF.push(e,"c9071mOY8pCVqqQox4qC6wW","LoadScene");var o=t("SceneState");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){cc.director.loadScene(this.name_)},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{SceneState:"SceneState"}],Panel:[function(t,e,i){"use strict";cc._RF.push(e,"850bddn0W5LGrvWTO/jNJJI","Panel");var n=t("GameBehaviour"),o=t("Piece");cc.Class({extends:n,properties:{column:3,row:4,xMovePower:160,yMovePower:160,dragDuration:1,dragPower:10,dragLength:8,fitDuration:1.5},getUpRightPiece:function(){return this.upRightPiece_},getBottomLeftPiece:function(){return this.bottomLeftPiece_},isComplete:function(){return this.isComplete_},setInteractive:function(t){for(var e=0;e<this.column;++e)for(var i=0;i<this.row;++i)null!==this.pieces_[e][i]&&this.pieces_[e][i].setInteractive(t)},movePiece:function(t,e){var i,n,o,s;switch(i=t.getPanelPosition(),n=i.clone(),o=!0,e){case 8:n.y-=1,n.y<0?o=!1:(s=t.getBasePosition()).y+=this.yMovePower;break;case 2:n.y+=1,n.y>=this.column?o=!1:(s=t.getBasePosition()).y-=this.yMovePower;break;case 4:n.x-=1,n.x<0?o=!1:(s=t.getBasePosition()).x-=this.xMovePower;break;case 6:n.x+=1,n.x>=this.row?o=!1:(s=t.getBasePosition()).x+=this.xMovePower;break;default:o=!1}o&&null===this.pieces_[n.y][n.x]&&(t.setPosition(s),t.setBasePosition(s),t.setPanelPosition(n),t.setZIndex(n.y),this.sortAllChildren(),this.pieces_[i.y][i.x]=null,this.pieces_[n.y][n.x]=t,this.matchesPicture_()&&(this.isComplete_=!0))},shuffle_:function(){var t,e,i,n,o,s;t=[];for(a=0;a<this.column;++a)for(c=0;c<this.row;++c)t.push(new cc.Vec2(c,a)),null!==this.pieces_[a][c]&&(this.pieces_[a][c].setPanel(this),this.pieces_[a][c].setPanelPosition(t[t.length-1]));for(i=t.length;i>0;)e=Math.floor(Math.random()*i),n=t[--i],t[i]=t[e],t[e]=n;for(var a=0;a<this.column;++a)for(var c=0;c<this.row;++c)n=t[a*(this.pieces_.length+1)+c],(o=this.finalPieces_[n.y][n.x])===this.upRightPiece_||o===this.bottomLeftPiece_?this.pieces_[a][c]=null:(s=this.finalPieces_[a][c],o.setBasePosition(s.getInitialPosition()),o.setPosition(s.getInitialPosition()),o.setPanelPosition(new cc.Vec2(c,a)),o.setZIndex(a),this.pieces_[a][c]=o);this.sortAllChildren()},matchesPicture_:function(){var t;t=!0;for(var e=0;e<this.column;++e)for(var i=0;i<this.row;++i)null!=this.pieces_[e][i]&&(this.pieces_[e][i]===this.finalPieces_[e][i]?this.pieces_[e][i].match():(this.pieces_[e][i].mismatch(),t=!1));return t},onLoad:function(){this.pieces_=[],this.finalPieces_=[];for(var t=0;t<this.column;++t){this.pieces_.push([]),this.finalPieces_.push([]);for(var e=0;e<this.row;++e)this.pieces_[t].push(cc.find("Piece_"+t.toString()+"_"+e.toString(),this.node).getComponent(o)),this.finalPieces_[t].push(this.pieces_[t][e])}this.upRightPiece_=this.pieces_[0][this.pieces_[0].length-1],this.bottomLeftPiece_=this.pieces_[this.pieces_.length-1][0],this.isComplete_=!1},start:function(){this.upRightPiece_.setPanel(this),this.upRightPiece_.setZIndex(0),this.upRightPiece_.setPanelPosition(new cc.Vec2(this.pieces_[0].length-1,0)),this.pieces_[this.upRightPiece_.getPanelY()][this.upRightPiece_.getPanelX()]=null,this.bottomLeftPiece_.setPanel(this),this.bottomLeftPiece_.setZIndex(this.column-1),this.bottomLeftPiece_.setPanelPosition(new cc.Vec2(0,this.pieces_.length-1)),this.pieces_[this.bottomLeftPiece_.getPanelY()][this.bottomLeftPiece_.getPanelX()]=null,this.shuffle_(),this.upRightPiece_.setX(this.upRightPiece_.getX()+this.xMovePower),this.bottomLeftPiece_.setX(this.bottomLeftPiece_.getX()-this.xMovePower)}}),cc._RF.pop()},{GameBehaviour:"GameBehaviour",Piece:"Piece"}],Piece:[function(t,e,i){"use strict";cc._RF.push(e,"99583/hR2FH8LirrZyxAvOc","Piece");var n=t("GameBehaviour");t("Duration");cc.Class({extends:n,setPanel:function(t){this.panel_=t},getInitialPosition:function(){return this.initialPosition_.clone()},getBasePosition:function(){return this.basePosition_.clone()},setBasePosition:function(t){this.basePosition_=t.clone()},getPanelPosition:function(){return this.panelPosition_.clone()},setPanelPosition:function(t){this.panelPosition_=t.clone()},getPanelX:function(){return this.panelPosition_.x},getPanelY:function(){return this.panelPosition_.y},onTouchStart:function(t){this.hasDragged_=!0,this.setY(this.basePosition_.y+this.panel_.dragPower),this.dragStartPosition_=t.getLocation()},onTouchEnd:function(t){this.hasDragged_=!1,this.elapsedTime_=0,this.setY(this.basePosition_.y)},onTouchMove:function(t){var e,i;this.hasDragged_&&(this.dragStopPosition_=t.getLocation(),(e=new cc.Vec2(this.dragStartPosition_.x-this.dragStopPosition_.x,this.dragStartPosition_.y-this.dragStopPosition_.y)).mag()>this.panel_.dragLength&&(i=e.x<0?Math.abs(e.x)>Math.abs(e.y)?6:e.y<0?8:2:Math.abs(e.x)>Math.abs(e.y)?4:e.y<0?8:2,this.panel_.movePiece(this,i),this.onTouchEnd()))},setInteractive:function(t){t?(this.node.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)):(this.node.off(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),this.node.off(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.node.off(cc.Node.EventType.TOUCH_CANCEL,this.onTouchEnd,this),this.node.off(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this))},match:function(){this.hasMatched_=!0},mismatch:function(){this.hasMatched_=!1},hasMatched:function(){return this.hasMatched_},fit:function(){this.fits_=!0,this.hasMatched_=!1,this.fitSpeed_=this.initialPosition_.sub(this.getPosition()),this.fitSpeed_.x/=this.panel_.fitDuration,this.fitSpeed_.y/=this.panel_.fitDuration,this.elapsedTime_=0},onLoad:function(){this.panel_=null,this.initialPosition_=this.getPosition(),this.basePosition_=this.getPosition(),this.panelPosition_=new cc.Vec2(0,0),this.hasDragged_=!1,this.elapsedTime_=0,this.dragStartPosition_=null,this.dragEndPosition_=null,this.fits_=!1,this.fitSpeed_=0,this.hasMatched_=!1},update:function(t){var e,i;this.hasDragged_?(this.elapsedTime_+=t,this.elapsedTime_>this.panel_.dragDuration&&this.onTouchEnd()):this.fits_&&(e=this.getPosition(),i=this.fitSpeed_.x*t,Math.abs(e.x-this.initialPosition_.x)>Math.abs(i)&&(e.x+=i),i=this.fitSpeed_.y*t,Math.abs(e.y-this.initialPosition_.y)>Math.abs(i)&&(e.y+=i),this.setPosition(e),this.elapsedTime_+=t,this.elapsedTime_>this.panel_.fitDuration&&(this.setPosition(this.initialPosition_),this.fits_=!1,this.match()))}}),cc._RF.pop()},{Duration:"Duration",GameBehaviour:"GameBehaviour"}],Prize:[function(t,e,i){"use strict";function n(){o.call(this)}cc._RF.push(e,"4d41aCj98BA0J8Al/Ta6z1p","Prize");var o=t("SceneState"),s=t("LoadScene"),a=t("ScreenFade"),c=t("WaitAction"),r=t("WaitAnyKey"),h=t("Duration");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){var i;(i=[]).push(t.panel.runAction(cc.fadeOut(h.PRIZE))),i.push(t.prize.runAction(cc.fadeIn(h.PRIZE))),t.pushState(new s("FrontEnd")),t.pushState(new a(t.canvas,cc.Color.TRANSPARENT,cc.Color.BLACK,h.CHANGE_SCENE)),t.pushState(new r(t.canvas)),t.changeState(new c(i))},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{Duration:"Duration",LoadScene:"LoadScene",SceneState:"SceneState",ScreenFade:"ScreenFade",WaitAction:"WaitAction",WaitAnyKey:"WaitAnyKey"}],Puzzle:[function(t,e,i){"use strict";cc._RF.push(e,"c7a593Iga5Gl6H1rDNn0xyJ","Puzzle");var n=t("GameScene"),o=t("ScreenFade"),s=t("WaitSeconds"),a=t("SetStart"),c=t("Duration"),r=t("Panel"),h=t("Time");cc.Class({extends:n,properties:{panel:r,time:h,timeUp:cc.Node,prize:cc.Node},onLoad:function(){this._super(),this.canvas.opacity=0},start:function(){this.timeUp.opacity=this.prize.opacity=0,this.pushState(new a),this.pushState(new s(1)),this.changeState(new o(this.canvas,cc.Color.BLACK,cc.Color.TRANSPARENT,c.CHANGE_SCENE,!0))},update:function(t){this.currentState.onUpdate(this,t)}}),cc._RF.pop()},{Duration:"Duration",GameScene:"GameScene",Panel:"Panel",ScreenFade:"ScreenFade",SetStart:"SetStart",Time:"Time",WaitSeconds:"WaitSeconds"}],SceneState:[function(t,e,i){"use strict";function n(){}cc._RF.push(e,"8484elEWe5By77zx1KJJTNy","SceneState"),n.prototype.onActivated=function(t,e){throw new Error("Not Implemented")},n.prototype.onDeactivated=function(t,e){throw new Error("Not Implemented")},n.prototype.onUpdate=function(t,e){throw new Error("Not Implemented")},e.exports=n,cc._RF.pop()},{}],ScreenFade:[function(t,e,i){"use strict";function n(t,e,i,n,s){o.call(this),this.canvas_=t,this.sourceColor_=e,this.destinationColor_=i,this.duration_=n,this.shouldDelete_=s,this.targetNode_=null}cc._RF.push(e,"496cfmlLD1GZIE2KajYwsHT","ScreenFade");var o=t("SceneState"),s=t("Fade");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onLoadResComplete=function(t,e){t?cc.error(t.message||t):(this.targetNode_=cc.instantiate(e),this.targetNode_.color=new cc.Color(this.sourceColor_.getR(),this.sourceColor_.getG(),this.sourceColor_.getB()),this.targetNode_.opacity=this.sourceColor_.getA(),this.canvas_.opacity=255,this.canvas_.addChild(this.targetNode_),this.sender_.changeState(new s(this.targetNode_,this.destinationColor_,this.duration_,this.shouldDelete_)))},n.prototype.onActivated=function(t,e){this.sender_=t,cc.loader.loadRes("WhiteScreen",this.onLoadResComplete.bind(this))},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{Fade:"Fade",SceneState:"SceneState"}],SetStart:[function(t,e,i){"use strict";function n(){o.call(this),this.start_=null}cc._RF.push(e,"0d0caOMEUdNe65WG3vh0nN6","SetStart");var o=t("SceneState"),s=t("AlphaFade"),a=t("Duration"),c=t("GameMain");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){this.start_=cc.find("Start",t.canvas),t.pushState(new c),t.changeState(new s(this.start_,0,a.START_FADE,!0))},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){},e.exports=n,cc._RF.pop()},{AlphaFade:"AlphaFade",Duration:"Duration",GameMain:"GameMain",SceneState:"SceneState"}],Success:[function(t,e,i){"use strict";function n(){o.call(this)}cc._RF.push(e,"1a11bMkebtD3agWhLSvFFbs","Success");var o=t("SceneState"),s=t("WaitSeconds"),a=t("Prize"),c=t("Duration");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){t.time.node.opacity=0,t.panel.setInteractive(!1),t.panel.getUpRightPiece().fit(),t.panel.getBottomLeftPiece().fit()},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){t.panel.getUpRightPiece().hasMatched()&&t.panel.getBottomLeftPiece().hasMatched()&&(t.pushState(new a),t.changeState(new s(c.SUCCESS)))},e.exports=n,cc._RF.pop()},{Duration:"Duration",Prize:"Prize",SceneState:"SceneState",WaitSeconds:"WaitSeconds"}],Time:[function(t,e,i){"use strict";cc._RF.push(e,"aff01oRZnxGEabhmnKnNLqK","Time");var n=t("GameBehaviour");cc.Class({extends:n,properties:{digits:2},getValue:function(){return this.value_},setValue:function(t){this.value_=t,this.label_.string=("0"+Math.floor(this.value_).toString()).slice(-this.digits)},startCount:function(){this.canCount_=!0},stopCount:function(){this.canCount_=!1},onLoad:function(){this.label_=this.getComponent(cc.Label),this.value_=Number(this.label_.string),this.deltaValue_=(0-this.value_)/this.value_,this.canCount_=!1},update:function(t){this.canCount_&&(this.value_=this.value_+this.deltaValue_*t,this.value_<0&&(this.value_=0,this.stopCount()),this.setValue(this.value_))}}),cc._RF.pop()},{GameBehaviour:"GameBehaviour"}],WaitAction:[function(t,e,i){"use strict";function n(t){o.call(this),t instanceof Array||(t=[t]),this.actions_=t}cc._RF.push(e,"a5712NIXOhCSJ0KCMsR+5zq","WaitAction");var o=t("SceneState");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){for(var i=0;i<this.actions_.length;++i)if(!this.actions_[i].isDone())return;t.changeState()},e.exports=n,cc._RF.pop()},{SceneState:"SceneState"}],WaitAnyKey:[function(t,e,i){"use strict";function n(t){o.call(this),this.canvas_=t,this.anyKeyDown_=!1,this.keyboardListener_=null}cc._RF.push(e,"c4450ebT0NI8Lp6Bev9RRuQ","WaitAnyKey");var o=t("SceneState");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onTouchStart=function(t){this.anyKeyDown_=!0},n.prototype.onActivated=function(t,e){var i;this.anyKeyDown_=!1,i=this,this.keyboardListener_=cc.eventManager.addListener({event:cc.EventListener.KEYBOARD,onKeyPressed:function(t,e){i.anyKeyDown_=!0}},this.canvas_),this.canvas_.on(cc.Node.EventType.TOUCH_START,this.onTouchStart,this)},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){this.anyKeyDown_&&(cc.eventManager.removeListener(this.keyboardListener_),this.canvas_.off(cc.Node.EventType.TOUCH_START,this.onTouchStart,this),t.changeState())},e.exports=n,cc._RF.pop()},{SceneState:"SceneState"}],WaitSeconds:[function(t,e,i){"use strict";function n(t){o.call(this),this.seconds_=t,this.deltaTime_=0}cc._RF.push(e,"9a1912RvR5MN5yGXgO88uYk","WaitSeconds");var o=t("SceneState");Object.setPrototypeOf(n.prototype,o.prototype),n.prototype.onActivated=function(t,e){this.deltaTime_=0},n.prototype.onDeactivated=function(t,e){},n.prototype.onUpdate=function(t,e){this.deltaTime_+=e,this.deltaTime_>this.seconds_&&t.changeState()},e.exports=n,cc._RF.pop()},{SceneState:"SceneState"}]},{},["Duration","AlphaFade","Fade","GameBehaviour","GameScene","LoadScene","SceneState","ScreenFade","WaitAction","WaitAnyKey","WaitSeconds","FrontEnd","Panel","Piece","Puzzle","Failure","GameMain","Prize","SetStart","Success","Time"]);