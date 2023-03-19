
 Change Detection Mechnism (todo.component.ts)
 
 Q1 What is Change Detection
 
 In Angular, change detection is the mechanism that updates the view whenever the state of 
 the application changes. By default, Angular uses a strategy called "Zone. js" 
 for change detection, which detects changes by monitoring the properties and methods of components and their associated templates.
  
 Q2 How to implement Change Detection
 
 changeDetection: ChangeDetectionStrategy.OnPush, It is used to improve the performance of angular application
  
 Q3 How Change Detection detect changes when we implement OnPush strategy  Machanism?
 
 1) when @Input change (In case of Array/Object new value is assign)
 2) When event(Click) is fired inside the template eg:  changeText;
 3) When async pipe is used with data stream
 4) Manually fired detect changes using  this.cd.detectChanges();
 5) Detect change not work with setTimeout
 6) If this component has child component with  OnPush strategy and we are calling change detectChanges() method manually then it will not 
    re-render again it's child component eg: app-test-chid; Same above 5 conditions will be apply on the chid component.
 
