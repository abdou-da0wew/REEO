import type { Copy } from './types';

/** The shortest possible path from opening the app to a working circuit. */
export const quickStart: readonly Copy[] = [
  [
    'Pick a part from the toolbar, then click an empty spot on the grid to place it.',
    'اختر مكوّنًا من الشريط ثم انقر مكانًا فارغًا على الشبكة لوضعه.',
    'اختار مكوّن من الشريط وبعدها دوس على مكان فاضي في الشبكة عشان تحطّه.',
  ],
  [
    'Drag from a black output pin to a white input pin. Black sends, white receives.',
    'اسحب من منفذ خرج أسود إلى منفذ دخل أبيض. الأسود يرسل والأبيض يستقبل.',
    'اسحب من نقطة خرج سودا لنقطة دخل بيضا. الأسود بيبعت والأبيض بيستقبل.',
  ],
  [
    'Choose Interact, then click an Input or press a Button. Watch the LED change.',
    'اختر تفاعل ثم انقر مدخلًا أو اضغط زرًا. راقب المصباح يتغير.',
    'اختار استخدم وبعدها دوس على مدخل أو زرار. راقب اللمبة بتتغير.',
  ],
  [
    'Open Worked circuits for step-by-step builds, or Example projects for finished boards.',
    'افتح دوائر خطوة بخطوة للبناء خطوة بخطوة، أو المشاريع الجاهزة للوحات مكتملة.',
    'افتح دواير خطوة بخطوة للبناء خطوة بخطوة، أو المشاريع الجاهزة للوحات كاملة.',
  ],
];

/** Habits that prevent the most common beginner mistakes. */
export const basics: readonly Copy[] = [
  [
    'Source → optional gates → sink. If the path is incomplete, the output stays at 0.',
    'مصدر ثم بوابات اختيارية ثم مراقب. إذا كان المسار ناقصًا يبقى الخرج 0.',
    'مصدر وبعده بوابات لو محتاج وبعدها مراقب. لو الطريق ناقص الخرج بيفضل 0.',
  ],
  [
    'A wire that only looks connected is not proof. Click the source and watch the sink change.',
    'السلك الذي يبدو متصلًا ليس دليلًا. انقر المصدر وراقب تغير المراقب.',
    'السلك اللي شكله واصل مش دليل. دوس على المصدر وراقب المراقب بيتغيّر.',
  ],
  [
    'Interact changes switches. Move drags parts. Pan moves the view. Select draws a box.',
    'تفاعل يغيّر المفاتيح، وتحريك ينقل المكوّنات، وسحب اللوحة ينقل العرض، وتحديد يرسم إطارًا.',
    'استخدم بيغيّر المفاتيح، وحرّك بينقل المكوّنات، واسحب اللوحة بينقل العرض، وحدّد بيرسم إطار.',
  ],
  [
    'Zoom, pan and Fit circuit only change the view. They never change the logic or the wires.',
    'التكبير والسحب واحتواء الدائرة تغيّر العرض فقط، ولا تغيّر المنطق أو الأسلاك.',
    'التكبير والسحب واعرض الدايرة بيغيّروا العرض بس، ومش بيغيّروا المنطق أو الأسلاك.',
  ],
  [
    'Test every input combination. Write the expected result first, then compare it with the board.',
    'اختبر كل تركيبة مداخل. اكتب النتيجة المتوقعة أولًا ثم قارنها باللوحة.',
    'جرّب كل تركيبة مداخل. اكتب النتيجة المتوقعة الأول وبعدها قارنها باللوحة.',
  ],
  [
    'Sequential parts remember. Counter counts rising edges; Delay waits a set time; Clock toggles by itself.',
    'الأجزاء التتابعية تتذكر. العدّاد يعد الحواف الصاعدة، والتأخير ينتظر وقتًا محددًا، والساعة تتبدل وحدها.',
    'الأجزاء التتابعية بتفتكر. العدّاد بيعد الحواف الطالعة، والتأخير بيستنّى وقت محدد، والساعة بتتبدّل لوحدها.',
  ],
  [
    'Right-click a part to edit it or read its component guide. On touch, use the question button.',
    'انقر المكوّن بالزر الأيمن لتعديله أو قراءة دليله. على اللمس استخدم زر السؤال.',
    'كليك يمين على المكوّن لتعديله أو قراءة دليله. على اللمس استخدم زرار السؤال.',
  ],
  [
    'Save stores the board in this browser. Export a .board backup before clearing browser data.',
    'الحفظ يخزن اللوحة في هذا المتصفح. صدّر نسخة ‎.board قبل مسح بيانات المتصفح.',
    'الحفظ بيخزّن اللوحة في المتصفح ده. نزّل نسخة ‎.board قبل ما تمسح بيانات المتصفح.',
  ],
];
