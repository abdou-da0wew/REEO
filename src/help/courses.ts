import type { Course } from './types';

/**
 * Short courses turn the worked circuits into an ordered learning path.
 * Recipe ids are checked against the recipe list by diagnostics.test.ts.
 */
export const courses: readonly Course[] = [
  {
    id: 'first-signals',
    title: ['First signals', 'الإشارات الأولى', 'أول إشارات'],
    level: 'beginner',
    summary: [
      'Start with one light, then learn what NOT, AND, OR and XOR actually do. No maths required.',
      'ابدأ بضوء واحد، ثم تعلّم ما تفعله NOT وAND وOR وXOR فعليًا. لا تحتاج رياضيات.',
      'ابدأ بنور واحد، وبعدها اتعلّم NOT وAND وOR وXOR بيعملوا إيه. مش محتاج رياضيات.',
    ],
    outcome: [
      'You can build a source, wire it safely, test both states, and explain the difference between AND, OR and XOR.',
      'ستستطيع بناء مصدر وتوصيله بأمان واختبار الحالتين وشرح الفرق بين AND وOR وXOR.',
      'هتعرف تبني مصدر وتوصّله بأمان وتجرّب الحالتين وتشرح الفرق بين AND وOR وXOR.',
    ],
    recipeIds: ['first', 'button', 'not', 'andor', 'xor', 'nand', 'motor'],
  },
  {
    id: 'logic-builders',
    title: ['Logic you can use', 'منطق قابل للاستخدام', 'منطق تستخدمه'],
    level: 'beginner',
    summary: [
      'Combine gates into adders, a selector and an alarm. Each circuit solves a small real problem.',
      'اجمع البوابات في جامعين ومبدّل وإنذار. كل دائرة تحل مشكلة صغيرة حقيقية.',
      'اجمع البوابات في جامعين ومبدّل وإنذار. كل دايرة بتحل مشكلة صغيرة حقيقية.',
    ],
    outcome: [
      'You can split a problem into inputs, gates and outputs, then test every input combination.',
      'ستستطيع تقسيم المشكلة إلى مداخل وبوابات ومخارج ثم اختبار كل تركيبة مداخل.',
      'هتعرف تقسّم المشكلة لمداخل وبوابات ومخارج وبعدها تجرّب كل تركيبة مداخل.',
    ],
    recipeIds: ['half', 'full', 'mux', 'alarm'],
  },
  {
    id: 'time-and-memory',
    title: ['Time and memory', 'الوقت والذاكرة', 'الوقت والذاكرة'],
    level: 'intermediate',
    summary: [
      'Learn what changes when a circuit remembers, counts or waits. Clocks and delays make time visible.',
      'تعلّم ما يتغير عندما تتذكر الدائرة أو تعدّ أو تنتظر. الساعة والتأخير يجعلان الوقت مرئيًا.',
      'اتعلّم إيه اللي بيتغيّر لما الدايرة تفتكر أو تعدّ أو تستنّى. الساعة والتأخير بيخلّوا الوقت ظاهر.',
    ],
    outcome: [
      'You can use a Clock, a Delay and a Counter, and explain why an edge is different from a steady 1.',
      'ستستخدم الساعة والتأخير والعدّاد وتشرح لماذا تختلف الحافة عن القيمة 1 الثابتة.',
      'هتستخدم الساعة والتأخير والعدّاد وتشرح ليه الحافة مختلفة عن 1 الثابت.',
    ],
    recipeIds: ['delay', 'pulse', 'counter'],
  },
  {
    id: 'displays-and-sound',
    title: ['Displays, buses and sound', 'الشاشات والنواقل والصوت', 'شاشات ونواقل وصوت'],
    level: 'intermediate',
    summary: [
      'Turn signals into something you can see or hear: LEDs, RGB colour, numbers, bars and tones.',
      'حوّل الإشارات إلى شيء تراه أو تسمعه: مصابيح وألوان وأرقام وأشرطة ونغمات.',
      'حوّل الإشارات لحاجة تشوفها أو تسمعها: لمبات وألوان وأرقام وأشرطة ونغمات.',
    ],
    outcome: [
      'You can route one signal to many places and feed four-bit values into a display, bar graph or Tone.',
      'ستستطيع توزيع إشارة واحدة على أماكن كثيرة وإدخال قيم أربع بتات في شاشة أو رسم بياني أو نغمة.',
      'هتعرف توزّع إشارة واحدة على أماكن كتير وتدخّل قيم أربع بتات في شاشة أو بار جراف أو نغمة.',
    ],
    recipeIds: ['rgb', 'display', 'bar', 'bus', 'merger', 'tone'],
  },
  {
    id: 'challenge-lab',
    title: ['Challenge lab', 'مختبر التحديات', 'معمل التحديات'],
    level: 'advanced',
    summary: [
      'Go deeper into raw segments, stored data and text expressions. These projects reward careful testing.',
      'تعمّق في القطاعات الخام والبيانات المخزنة والتعبيرات النصية. هذه المشاريع تكافئ الاختبار الدقيق.',
      'اتعمّق في القطاعات الخام والبيانات المخزّنة والتعبيرات النصية. المشاريع دي بتكافئ اللي يجرّب بدقة.',
    ],
    outcome: [
      'You can build a custom display pattern, read a ROM table, and describe logic with a safe expression.',
      'ستبني نمط عرض مخصصًا وتقرأ جدول ROM وتصف المنطق بتعبير آمن.',
      'هتبني نمط عرض مخصص وتقرأ جدول ROM وتوصف المنطق بتعبير آمن.',
    ],
    recipeIds: ['procedural', 'seven', 'lookup'],
  },
];
