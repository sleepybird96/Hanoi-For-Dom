const container = document.createElement('section')

document.querySelector('body').append(container)
const pole1 = document.createElement('div')
const pole2 = document.createElement('div')
const pole3 = document.createElement('div')

container.append(pole1)
container.append(pole2)
container.append(pole3)

//원판의 갯수를 입력받고 원판을 만듭니다.
let circleValue = prompt('원판 몇개로 할깝쇼?')

//시작버튼을 만듭니다 
let startBtn = document.createElement('button')
startBtn.textContent = '시작할려면 클릭하슈'
document.querySelector('body').append(startBtn)

//입력한 원판의 갯수만큼 원판을 생성합니다.
for(let i = 1; i <= circleValue; i++){
  let liCircle = document.createElement('li')
  liCircle.textContent = i
  liCircle.style['width'] = `${i * 1.8}rem` //백틱을 이용해 역동적으로 스타일 설정이 가능합니다.
  pole1.append(liCircle) 
}

 //함수의 인자로 들어갈 폴들입니다. 기본값은 타겟이 두번째 폴입니다.
let startPole = pole1
let targetPole = pole2
let otherPole = pole3

//옮길곳을 정합니다, while문을 이용해 정확한 입력을 하지않을 시 루프에 빠지게 됩니다.
let targetValue = prompt('어디로 옮길깝쇼 2 ~ 3')
while(targetValue < 2 || targetValue > 3){
  targetValue = prompt('제대로 입력하슈 2 ~ 3')
}
//만약 3을 입력받으면 타겟이 세번째 폴로 설정됩니다.
if(targetValue === '3'){
  targetPole = pole3
  otherPole = pole2
}
//하노이 원판을 옮기는 함수입니다.
  function moveCircle (circleCount, start, target, other) {
    // 모두 옮겼으면 종료
    if (circleCount === 0) return;
    // 가장 아래 원반을 제외한 circle들을 재귀적으로 목적지가 아닌 곳으로 옮김
    moveCircle(circleCount - 1, start, other, target);
    // 가장 아래 circle을 목적지로 옮김
    target.prepend(start.firstChild)
    // 목적지가 아닌 곳으로 옮겼던 circle들을 목적한곳에 옮김
    moveCircle(circleCount - 1, other, target, start);
  }

  //버튼클릭시 하노이 원판을 옮기는 함수가 실행됩니다.
  startBtn.onclick = function(){
    return moveCircle(circleValue, startPole, targetPole, otherPole)
  }