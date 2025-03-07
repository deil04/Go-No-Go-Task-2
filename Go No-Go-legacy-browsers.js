/***************** 
 * Go No-Go *
 *****************/


// store info about the experiment session:
let expName = 'Go No-Go';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'fill',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const Play_tLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(Play_tLoopBegin(Play_tLoopScheduler));
flowScheduler.add(Play_tLoopScheduler);
flowScheduler.add(Play_tLoopEnd);




flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
flowScheduler.add(countdownRoutineBegin());
flowScheduler.add(countdownRoutineEachFrame());
flowScheduler.add(countdownRoutineEnd());
const PlayLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PlayLoopBegin(PlayLoopScheduler));
flowScheduler.add(PlayLoopScheduler);
flowScheduler.add(PlayLoopEnd);



flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Tutorial.csv', 'path': 'Tutorial.csv'},
    {'name': 'Images/mice.png', 'path': 'Images/mice.png'},
    {'name': 'Images/cat.png', 'path': 'Images/cat.png'},
    {'name': 'stimulus_Color.xlsx', 'path': 'stimulus_Color.xlsx'},
    {'name': 'Images/mice.png', 'path': 'Images/mice.png'},
    {'name': 'Images/cat.png', 'path': 'Images/cat.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var text_welcome;
var key_welcome;
var InstructionsClock;
var text_Instructions;
var key_Instructions;
var countdownClock;
var text_3;
var text_2;
var text_1;
var FixationClock;
var text_Fixation;
var TutorialClock;
var image_Tutorial;
var text_Tutorial;
var key_resp_t;
var Feedback_Tutorial_2Clock;
var text_feedback_Tutorial;
var Instructions_2Clock;
var text_Instructions_2;
var key_Instructions_2;
var GoNoGoTaskClock;
var image_circle;
var text_gonogo_ITI;
var key_resp;
var EndClock;
var text_end;
var key_resp_End;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  text_welcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcome',
    text: '\nยินดีต้อนรับสู่ Go/No-go task\nกดปุ่ม Space เพื่อดำเนินการต่อ\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1.0, 1.0, 1.0]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  text_Instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Instructions',
    text: '\nในเกมนี้จะมี แมว และ หนู โผล่มาให้ดูบนหน้าจอ\n\nโดยที่ ถ้าเห็นหนูบนหน้าจอ ให้กดปุ่ม Space เพื่อจับมัน\nแต่ ถ้าเห็นแมว ไม่ต้องกดปุ่มอะไร ให้ปล่อยมันไปจับหนู\n\nในตอนฝึกเล่น \nถ้าทำถูก จะมีการบอกว่า ถูกต้อง! \nถ้าทำผิด ก็จะมีการบอกว่า ผิด!\n\nกดปุ่ม Space เพื่อไปฝึกเล่น',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "countdown"
  countdownClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_1',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.2,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Fixation"
  FixationClock = new util.Clock();
  text_Fixation = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Fixation',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Tutorial"
  TutorialClock = new util.Clock();
  image_Tutorial = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_Tutorial', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_Tutorial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Tutorial',
    text: '\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_t = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Feedback_Tutorial_2"
  Feedback_Tutorial_2Clock = new util.Clock();
  text_feedback_Tutorial = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_feedback_Tutorial',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  text_Instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_Instructions_2',
    text: '\nเมื่อเริ่มเล่นจริง จะไม่มีการบอกว่าถูกหรือผิด\n\nกดปุ่ม Space เพื่อไปเล่นจริง',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.03], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_Instructions_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "GoNoGoTask"
  GoNoGoTaskClock = new util.Clock();
  image_circle = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_circle', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_gonogo_ITI = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_gonogo_ITI',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: 'ขอบคุณสำหรับการเข้าร่วม',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_End = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WelcomeMaxDurationReached;
var _key_welcome_allKeys;
var WelcomeMaxDuration;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    WelcomeClock.reset();
    routineTimer.reset();
    WelcomeMaxDurationReached = false;
    // update component parameters for each repeat
    key_welcome.keys = undefined;
    key_welcome.rt = undefined;
    _key_welcome_allKeys = [];
    WelcomeMaxDuration = null
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(text_welcome);
    WelcomeComponents.push(key_welcome);
    
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Welcome' ---
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcome* updates
    if (t >= 0.0 && text_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcome.tStart = t;  // (not accounting for frame time here)
      text_welcome.frameNStart = frameN;  // exact frame index
      
      text_welcome.setAutoDraw(true);
    }
    
    
    // *key_welcome* updates
    if (t >= 0.0 && key_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_welcome.tStart = t;  // (not accounting for frame time here)
      key_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_welcome.clock.reset();
      key_welcome.start();
    }
    
    if (key_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _key_welcome_allKeys = _key_welcome_allKeys.concat(theseKeys);
      if (_key_welcome_allKeys.length > 0) {
        key_welcome.keys = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_welcome.rt = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].rt;
        key_welcome.duration = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Welcome' ---
    WelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_welcome.stop();
    // the Routine "Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var InstructionsMaxDurationReached;
var _key_Instructions_allKeys;
var InstructionsMaxDuration;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    InstructionsClock.reset();
    routineTimer.reset();
    InstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_Instructions.keys = undefined;
    key_Instructions.rt = undefined;
    _key_Instructions_allKeys = [];
    InstructionsMaxDuration = null
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(text_Instructions);
    InstructionsComponents.push(key_Instructions);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Instructions* updates
    if (t >= 0.0 && text_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Instructions.tStart = t;  // (not accounting for frame time here)
      text_Instructions.frameNStart = frameN;  // exact frame index
      
      text_Instructions.setAutoDraw(true);
    }
    
    
    // *key_Instructions* updates
    if (t >= 0.0 && key_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Instructions.tStart = t;  // (not accounting for frame time here)
      key_Instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_Instructions.clock.reset();
      key_Instructions.start();
    }
    
    if (key_Instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_Instructions_allKeys = _key_Instructions_allKeys.concat(theseKeys);
      if (_key_Instructions_allKeys.length > 0) {
        key_Instructions.keys = _key_Instructions_allKeys[_key_Instructions_allKeys.length - 1].name;  // just the last key pressed
        key_Instructions.rt = _key_Instructions_allKeys[_key_Instructions_allKeys.length - 1].rt;
        key_Instructions.duration = _key_Instructions_allKeys[_key_Instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_Instructions.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var countdownMaxDurationReached;
var countdownMaxDuration;
var countdownComponents;
function countdownRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'countdown' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    countdownClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    countdownMaxDurationReached = false;
    // update component parameters for each repeat
    countdownMaxDuration = null
    // keep track of which components have finished
    countdownComponents = [];
    countdownComponents.push(text_3);
    countdownComponents.push(text_2);
    countdownComponents.push(text_1);
    
    countdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function countdownRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'countdown' ---
    // get current time
    t = countdownClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_2* updates
    if (t >= 1.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 1.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *text_1* updates
    if (t >= 2.0 && text_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_1.tStart = t;  // (not accounting for frame time here)
      text_1.frameNStart = frameN;  // exact frame index
      
      text_1.setAutoDraw(true);
    }
    
    frameRemains = 2.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_1.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    countdownComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function countdownRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'countdown' ---
    countdownComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (countdownMaxDurationReached) {
        countdownClock.add(countdownMaxDuration);
    } else {
        countdownClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Play_t;
function Play_tLoopBegin(Play_tLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Play_t = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Tutorial.csv',
      seed: undefined, name: 'Play_t'
    });
    psychoJS.experiment.addLoop(Play_t); // add the loop to the experiment
    currentLoop = Play_t;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Play_t.forEach(function() {
      snapshot = Play_t.getSnapshot();
    
      Play_tLoopScheduler.add(importConditions(snapshot));
      Play_tLoopScheduler.add(FixationRoutineBegin(snapshot));
      Play_tLoopScheduler.add(FixationRoutineEachFrame());
      Play_tLoopScheduler.add(FixationRoutineEnd(snapshot));
      Play_tLoopScheduler.add(TutorialRoutineBegin(snapshot));
      Play_tLoopScheduler.add(TutorialRoutineEachFrame());
      Play_tLoopScheduler.add(TutorialRoutineEnd(snapshot));
      Play_tLoopScheduler.add(Feedback_Tutorial_2RoutineBegin(snapshot));
      Play_tLoopScheduler.add(Feedback_Tutorial_2RoutineEachFrame());
      Play_tLoopScheduler.add(Feedback_Tutorial_2RoutineEnd(snapshot));
      Play_tLoopScheduler.add(Play_tLoopEndIteration(Play_tLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function Play_tLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Play_t);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function Play_tLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Play;
function PlayLoopBegin(PlayLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Play = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'stimulus_Color.xlsx',
      seed: undefined, name: 'Play'
    });
    psychoJS.experiment.addLoop(Play); // add the loop to the experiment
    currentLoop = Play;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Play.forEach(function() {
      snapshot = Play.getSnapshot();
    
      PlayLoopScheduler.add(importConditions(snapshot));
      PlayLoopScheduler.add(FixationRoutineBegin(snapshot));
      PlayLoopScheduler.add(FixationRoutineEachFrame());
      PlayLoopScheduler.add(FixationRoutineEnd(snapshot));
      PlayLoopScheduler.add(GoNoGoTaskRoutineBegin(snapshot));
      PlayLoopScheduler.add(GoNoGoTaskRoutineEachFrame());
      PlayLoopScheduler.add(GoNoGoTaskRoutineEnd(snapshot));
      PlayLoopScheduler.add(PlayLoopEndIteration(PlayLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function PlayLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Play);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function PlayLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var FixationMaxDurationReached;
var FixationMaxDuration;
var FixationComponents;
function FixationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Fixation' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    FixationClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    FixationMaxDurationReached = false;
    // update component parameters for each repeat
    FixationMaxDuration = null
    // keep track of which components have finished
    FixationComponents = [];
    FixationComponents.push(text_Fixation);
    
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function FixationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Fixation' ---
    // get current time
    t = FixationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Fixation* updates
    if (t >= 0.0 && text_Fixation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Fixation.tStart = t;  // (not accounting for frame time here)
      text_Fixation.frameNStart = frameN;  // exact frame index
      
      text_Fixation.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_Fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Fixation.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    FixationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FixationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Fixation' ---
    FixationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (FixationMaxDurationReached) {
        FixationClock.add(FixationMaxDuration);
    } else {
        FixationClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TutorialMaxDurationReached;
var space_key;
var duration;
var duration2;
var _key_resp_t_allKeys;
var TutorialMaxDuration;
var TutorialComponents;
function TutorialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Tutorial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    TutorialClock.reset();
    routineTimer.reset();
    TutorialMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_Tutorial
    if ((condition === "go")) {
        space_key = "space";
    } else {
        space_key = "None";
    }
    
    duration = Math.floor(Math.random() * 3) + 1;
    
    duration2 = duration+1.5;
    image_Tutorial.setImage(color);
    key_resp_t.keys = undefined;
    key_resp_t.rt = undefined;
    _key_resp_t_allKeys = [];
    psychoJS.experiment.addData('Tutorial.started', globalClock.getTime());
    TutorialMaxDuration = null
    // keep track of which components have finished
    TutorialComponents = [];
    TutorialComponents.push(image_Tutorial);
    TutorialComponents.push(text_Tutorial);
    TutorialComponents.push(key_resp_t);
    
    TutorialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TutorialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Tutorial' ---
    // get current time
    t = TutorialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_Tutorial* updates
    if (t >= 0.0 && image_Tutorial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_Tutorial.tStart = t;  // (not accounting for frame time here)
      image_Tutorial.frameNStart = frameN;  // exact frame index
      
      image_Tutorial.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_Tutorial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_Tutorial.setAutoDraw(false);
    }
    
    
    // *text_Tutorial* updates
    if (t >= 0 && text_Tutorial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Tutorial.tStart = t;  // (not accounting for frame time here)
      text_Tutorial.frameNStart = frameN;  // exact frame index
      
      text_Tutorial.setAutoDraw(true);
    }
    
    frameRemains = 0 + duration2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_Tutorial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_Tutorial.setAutoDraw(false);
    }
    
    
    // *key_resp_t* updates
    if (t >= 0.0 && key_resp_t.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_t.tStart = t;  // (not accounting for frame time here)
      key_resp_t.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_t.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_t.clearEvents(); });
    }
    
    frameRemains = 0.0 + duration2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp_t.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_t.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_t.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_t.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_t_allKeys = _key_resp_t_allKeys.concat(theseKeys);
      if (_key_resp_t_allKeys.length > 0) {
        key_resp_t.keys = _key_resp_t_allKeys[0].name;  // just the first key pressed
        key_resp_t.rt = _key_resp_t_allKeys[0].rt;
        key_resp_t.duration = _key_resp_t_allKeys[0].duration;
        // was this correct?
        if (key_resp_t.keys == space_key) {
            key_resp_t.corr = 1;
        } else {
            key_resp_t.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TutorialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TutorialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Tutorial' ---
    TutorialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Tutorial.stopped', globalClock.getTime());
    if (typeof key_resp_t.keys === 'undefined') {
       key_resp_t.rt = duration2;
       key_resp_t.duration = 'nokey';
    //   key_resp.keys = 'nokey1';
       
    }
    psychoJS.experiment.addData('key_resp_t.rt', key_resp_t.rt);
    psychoJS.experiment.addData('key_resp_t.duration', key_resp_t.duration);
    //psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    // was no response the correct answer?!
    if (key_resp_t.keys === undefined) {
      if (['None','none',undefined].includes(space_key)) {
         key_resp_t.corr = 1;  // correct non-response
      } else {
         key_resp_t.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_t.corr, level);
    }
    psychoJS.experiment.addData('key_resp_t.keys', key_resp_t.keys);
    psychoJS.experiment.addData('key_resp_t.corr', key_resp_t.corr);
    if (typeof key_resp_t.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_t.rt', key_resp_t.rt);
        psychoJS.experiment.addData('key_resp_t.duration', key_resp_t.duration);
        }
    
    key_resp_t.stop();
    // the Routine "Tutorial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Feedback_Tutorial_2MaxDurationReached;
var feedback_text;
var Feedback_Tutorial_2MaxDuration;
var Feedback_Tutorial_2Components;
function Feedback_Tutorial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Feedback_Tutorial_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Feedback_Tutorial_2Clock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    Feedback_Tutorial_2MaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_Feedback_Tutorial
    if ((key_resp_t.corr === 1)) {
        feedback_text = "ถูกต้อง!";
    } else {
        if ((key_resp_t.corr === 0)) {
            feedback_text = "ผิด!";
        }
    }
    
    text_feedback_Tutorial.setText(feedback_text);
    Feedback_Tutorial_2MaxDuration = null
    // keep track of which components have finished
    Feedback_Tutorial_2Components = [];
    Feedback_Tutorial_2Components.push(text_feedback_Tutorial);
    
    Feedback_Tutorial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Feedback_Tutorial_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Feedback_Tutorial_2' ---
    // get current time
    t = Feedback_Tutorial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_feedback_Tutorial* updates
    if (t >= 0.0 && text_feedback_Tutorial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_feedback_Tutorial.tStart = t;  // (not accounting for frame time here)
      text_feedback_Tutorial.frameNStart = frameN;  // exact frame index
      
      text_feedback_Tutorial.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_feedback_Tutorial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_feedback_Tutorial.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Feedback_Tutorial_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Feedback_Tutorial_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Feedback_Tutorial_2' ---
    Feedback_Tutorial_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (Feedback_Tutorial_2MaxDurationReached) {
        Feedback_Tutorial_2Clock.add(Feedback_Tutorial_2MaxDuration);
    } else {
        Feedback_Tutorial_2Clock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instructions_2MaxDurationReached;
var _key_Instructions_2_allKeys;
var Instructions_2MaxDuration;
var Instructions_2Components;
function Instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Instructions_2Clock.reset();
    routineTimer.reset();
    Instructions_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_Instructions_2.keys = undefined;
    key_Instructions_2.rt = undefined;
    _key_Instructions_2_allKeys = [];
    Instructions_2MaxDuration = null
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(text_Instructions_2);
    Instructions_2Components.push(key_Instructions_2);
    
    Instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_2' ---
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_Instructions_2* updates
    if (t >= 0.0 && text_Instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_Instructions_2.tStart = t;  // (not accounting for frame time here)
      text_Instructions_2.frameNStart = frameN;  // exact frame index
      
      text_Instructions_2.setAutoDraw(true);
    }
    
    
    // *key_Instructions_2* updates
    if (t >= 0.0 && key_Instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Instructions_2.tStart = t;  // (not accounting for frame time here)
      key_Instructions_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_Instructions_2.clock.reset();
      key_Instructions_2.start();
    }
    
    if (key_Instructions_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Instructions_2.getKeys({keyList: ['r', 'space'], waitRelease: false});
      _key_Instructions_2_allKeys = _key_Instructions_2_allKeys.concat(theseKeys);
      if (_key_Instructions_2_allKeys.length > 0) {
        key_Instructions_2.keys = _key_Instructions_2_allKeys[_key_Instructions_2_allKeys.length - 1].name;  // just the last key pressed
        key_Instructions_2.rt = _key_Instructions_2_allKeys[_key_Instructions_2_allKeys.length - 1].rt;
        key_Instructions_2.duration = _key_Instructions_2_allKeys[_key_Instructions_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_2' ---
    Instructions_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_Instructions_2.stop();
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoNoGoTaskMaxDurationReached;
var _key_resp_allKeys;
var GoNoGoTaskMaxDuration;
var GoNoGoTaskComponents;
function GoNoGoTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'GoNoGoTask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoNoGoTaskClock.reset();
    routineTimer.reset();
    GoNoGoTaskMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code
    if ((condition === "go")) {
        space_key = "space";
    } else {
        space_key = "None";
    }
    
    duration = Math.floor(Math.random() * 3) + 1;
    
    duration2 = duration+1.5;
    image_circle.setImage(color);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('GoNoGoTask.started', globalClock.getTime());
    GoNoGoTaskMaxDuration = null
    // keep track of which components have finished
    GoNoGoTaskComponents = [];
    GoNoGoTaskComponents.push(image_circle);
    GoNoGoTaskComponents.push(text_gonogo_ITI);
    GoNoGoTaskComponents.push(key_resp);
    
    GoNoGoTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GoNoGoTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'GoNoGoTask' ---
    // get current time
    t = GoNoGoTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_circle* updates
    if (t >= 0.0 && image_circle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_circle.tStart = t;  // (not accounting for frame time here)
      image_circle.frameNStart = frameN;  // exact frame index
      
      image_circle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_circle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_circle.setAutoDraw(false);
    }
    
    
    // *text_gonogo_ITI* updates
    if (t >= 0.0 && text_gonogo_ITI.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_gonogo_ITI.tStart = t;  // (not accounting for frame time here)
      text_gonogo_ITI.frameNStart = frameN;  // exact frame index
      
      text_gonogo_ITI.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + duration2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_gonogo_ITI.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_gonogo_ITI.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    frameRemains = 0.0 + duration2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
        key_resp.duration = _key_resp_allKeys[0].duration;
        // was this correct?
        if (key_resp.keys == space_key) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoNoGoTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoNoGoTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'GoNoGoTask' ---
    GoNoGoTaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('GoNoGoTask.stopped', globalClock.getTime());
    if (typeof key_resp.keys === 'undefined') {
       key_resp.rt = duration2;
       key_resp.duration = 'nokey';
    //   key_resp.keys = 'nokey1';
       
    }
    psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
    psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
    //psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(space_key)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        }
    
    key_resp.stop();
    // the Routine "GoNoGoTask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndMaxDurationReached;
var _key_resp_End_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'End' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    EndClock.reset();
    routineTimer.reset();
    EndMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        console.log(dataObj)
        return Object.values(it).toString()
    }).join('\n')
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'A5KUl1eQoEtY', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    key_resp_End.keys = undefined;
    key_resp_End.rt = undefined;
    _key_resp_End_allKeys = [];
    EndMaxDuration = null
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_end);
    EndComponents.push(key_resp_End);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'End' ---
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    
    // *key_resp_End* updates
    if (t >= 0.0 && key_resp_End.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_End.tStart = t;  // (not accounting for frame time here)
      key_resp_End.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_End.clock.reset();
      key_resp_End.start();
    }
    
    if (key_resp_End.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_End.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_End_allKeys = _key_resp_End_allKeys.concat(theseKeys);
      if (_key_resp_End_allKeys.length > 0) {
        key_resp_End.keys = _key_resp_End_allKeys[_key_resp_End_allKeys.length - 1].name;  // just the last key pressed
        key_resp_End.rt = _key_resp_End_allKeys[_key_resp_End_allKeys.length - 1].rt;
        key_resp_End.duration = _key_resp_End_allKeys[_key_resp_End_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'End' ---
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    key_resp_End.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
