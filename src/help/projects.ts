import type { ExampleProject } from './types';

/**
 * Complete example projects. "Build this project" uses the board-code
 * compiler, so the parts, pins and wires are identical to the program below.
 * diagnostics.test.ts compiles every program before it can ship.
 */
export const exampleProjects: readonly ExampleProject[] = [
  {
    id: 'blink',
    title: ['Blinking beacon', 'منارة وامضة', 'منارة بتومض'],
    level: 'beginner',
    summary: [
      'A Clock and an LED make a self-running beacon. No clicking needed: time does the work.',
      'الساعة مع مصباح تصنع منارة تعمل وحدها. لا نقر: الوقت هو الذي يعمل.',
      'الساعة مع لمبة بتعمل منارة شغّالة لوحدها. مفيش دوس: الوقت هو اللي شغّال.',
    ],
    goal: [
      'Understand that a Clock toggles by itself and that a source can drive an output directly.',
      'افهم أن الساعة تتبدل وحدها وأن المصدر يمكنه قيادة الخرج مباشرة.',
      'افهم إن الساعة بتتبدّل لوحدها وإن المصدر ممكن يشغّل الخرج على طول.',
    ],
    parts: ['Clock', 'LED'],
    steps: [
      ['Place a Clock and an LED.', 'ضع ساعة ومصباحًا.', 'حط ساعة ولمبة.'],
      [
        'Wire Clock → LED. Open the Clock and set 700 ms.',
        'وصّل الساعة بالمصباح. افتح الساعة واضبط 700 مللي ثانية.',
        'وصّل الساعة باللمبة. افتح الساعة وحط 700 مللي ثانية.',
      ],
      [
        'Press Pause and Resume to see the clock freeze and continue.',
        'استخدم الإيقاف المؤقت والاستئناف لترى الساعة تتوقف وتكمل.',
        'استخدم الإيقاف المؤقت والاستئناف عشان تشوف الساعة تقف وتكمل.',
      ],
    ],
    expected: [
      'The LED turns on and off about every 0.7 seconds without any input.',
      'يضيء المصباح وينطفئ كل 0.7 ثانية تقريبًا دون أي مدخل.',
      'اللمبة بتنوّر وتطفي كل 0.7 ثانية تقريبًا من غير أي مدخل.',
    ],
    program: 'clock CLK 700\nled BEACON CLK',
  },
  {
    id: 'night-light',
    title: ['Night light', 'ضوء ليلي', 'نور ليلي'],
    level: 'beginner',
    summary: [
      'The simplest useful output: a sensor switches a lamp. Test both states before adding anything else.',
      'أبسط خرج مفيد: مستشعر يشغّل مصباحًا. اختبر الحالتين قبل إضافة أي شيء.',
      'أبسط خرج مفيد: حسّاس بيشغّل لمبة. جرّب الحالتين قبل ما تضيف أي حاجة.',
    ],
    goal: [
      'Practise source → output wiring and learn why a touching wire is not proof of a connection.',
      'تدرّب على التوصيل من المصدر للخرج وتعلّم لماذا ملامسة السلك لا تثبت الاتصال.',
      'اتدرّب على التوصيل من المصدر للخرج واتعلّم ليه لمس السلك مش دليل على التوصيل.',
    ],
    parts: ['Input', 'LED'],
    steps: [
      ['Place an Input and an LED.', 'ضع مدخلًا ومصباحًا.', 'حط مدخل ولمبة.'],
      [
        'Drag from the Input black output pin to the LED white input pin.',
        'اسحب من منفذ الخرج الأسود للمدخل إلى منفذ الدخل الأبيض للمصباح.',
        'اسحب من نقطة خرج المدخل السودا لنقطة دخل اللمبة البيضا.',
      ],
      [
        'Use Interact, click the Input, then save the board.',
        'استخدم تفاعل وانقر المدخل ثم احفظ اللوحة.',
        'استخدم وضع التفاعل ودوس على المدخل وبعدها احفظ اللوحة.',
      ],
    ],
    expected: [
      'Input 0 → dark; Input 1 → light.',
      'المدخل 0: ظلام. المدخل 1: ضوء.',
      'المدخل 0: ضلمة. المدخل 1: نور.',
    ],
    program: 'input DARK\nled LAMP DARK',
  },
  {
    id: 'majority',
    title: ['Majority vote', 'تصويت الأغلبية', 'تصويت الأغلبية'],
    level: 'beginner',
    summary: [
      'Three switches vote. The LED turns on when at least two switches are on.',
      'ثلاثة مفاتيح تصوّت. يضيء المصباح عندما يكون مفتاحان على الأقل مضاءين.',
      'تلات مفاتيح بيصوّتوا. اللمبة بتنوّر لما اتنين على الأقل يكونوا شغالين.',
    ],
    goal: [
      'Build a real decision circuit and test all eight input combinations.',
      'ابنِ دائرة قرار حقيقية واختبر الحالات الثماني كلها.',
      'اعمل دايرة قرار حقيقية وجرّب التمن حالات كلهم.',
    ],
    parts: ['Input', 'AND', 'OR', 'LED'],
    steps: [
      [
        'Place switches A, B and C, three AND gates, two OR gates and an LED.',
        'ضع مفاتيح A وB وC وثلاث بوابات AND وبوابتي OR ومصباحًا.',
        'حط مفاتيح A وB وC وتلات بوابات AND وبوابتين OR ولمبة.',
      ],
      [
        'AND every pair: A+B, B+C and A+C. This gives one signal per winning pair.',
        'اجمع كل زوج ببوابة AND: A+B وB+C وA+C. هذا يعطي إشارة لكل زوج فائز.',
        'اجمع كل اتنين ببوابة AND: A+B وB+C وA+C. كده عندك إشارة لكل زوج كسبان.',
      ],
      [
        'OR the three pair outputs into the LED. Test 000 through 111.',
        'اجمع مخارج الأزواج الثلاثة ببوابة OR إلى المصباح. اختبر من 000 إلى 111.',
        'اجمع مخارج التلات أزواج في OR للمبة. جرّب من 000 لـ 111.',
      ],
    ],
    expected: [
      'LED on for 011, 101, 110 and 111; off for 000, 001, 010 and 100.',
      'المصباح مضاء في 011 و101 و110 و111، ومطفأ في 000 و001 و010 و100.',
      'اللمبة منوّرة في 011 و101 و110 و111، ومطفية في 000 و001 و010 و100.',
    ],
    program:
      'input A\ninput B\ninput C\nand AB A B\nand BC B C\nand AC A C\nor V1 AB BC\nor V2 V1 AC\nled PASS V2',
  },
  {
    id: 'half-adder',
    title: ['One-bit adder', 'جامع بت واحد', 'جامع بت واحد'],
    level: 'beginner',
    summary: [
      'Add two binary digits and show both the sum and the carry.',
      'اجمع رقمين ثنائيين واعرض المجموع والحمل.',
      'اجمع رقمين ثنائيين واعرض المجموع والحمل.',
    ],
    goal: [
      'See why addition needs two outputs: a sum bit and a carry bit.',
      'اعرف لماذا يحتاج الجمع إلى خرجين: بت المجموع وبت الحمل.',
      'اعرف ليه الجمع محتاج خرجين: بت المجموع وبت الحمل.',
    ],
    parts: ['Input', 'XOR', 'AND', 'Output'],
    steps: [
      [
        'Place A, B, XOR, AND and two Output monitors.',
        'ضع A وB وبوابة XOR وبوابة AND ومراقبي خرج.',
        'حط A وB وبوابة XOR وبوابة AND ومراقبين خرج.',
      ],
      [
        'Wire A and B to both gates. Wire XOR to SUM and AND to CARRY.',
        'وصّل A وB بالبوابتين. وصّل XOR بالمجموع وAND بالحمل.',
        'وصّل A وB بالبوابتين. وصّل XOR بالمجموع وAND بالحمل.',
      ],
      ['Test 00, 01, 10 and 11.', 'اختبر 00 و01 و10 و11.', 'جرّب 00 و01 و10 و11.'],
    ],
    expected: [
      '01 → sum 1 carry 0; 11 → sum 0 carry 1.',
      '‏01: المجموع 1 والحمل 0. ‏11: المجموع 0 والحمل 1.',
      '‏01: المجموع 1 والحمل 0. ‏11: المجموع 0 والحمل 1.',
    ],
    program: 'input A\ninput B\nxor SUM A B\nand CARRY A B\noutput S SUM\noutput C CARRY',
  },
  {
    id: 'full-adder',
    title: ['Three-bit full adder', 'جامع كامل بثلاثة بتات', 'جامع كامل بتلات بتات'],
    level: 'intermediate',
    summary: [
      'Add A + B + carry-in with two half adders and one OR gate.',
      'اجمع A + B + الحمل الداخل بنصفي جامع وبوابة OR.',
      'اجمع A + B + الحمل الداخل بنصفي جامع وبوابة OR.',
    ],
    goal: [
      'Turn a familiar circuit into a larger block without losing track of the carry.',
      'حوّل دائرة مألوفة إلى كتلة أكبر دون فقدان مسار الحمل.',
      'حوّل دايرة مألوفة لكتلة أكبر من غير ما تتوه من الحمل.',
    ],
    parts: ['Input', 'XOR', 'AND', 'OR', 'Output'],
    steps: [
      [
        'Place A, B, Cin and two XOR gates.',
        'ضع A وB وCin وبوابتي XOR.',
        'حط A وB وCin وبوابتين XOR.',
      ],
      [
        'First XOR handles A+B. Second XOR adds Cin to that result. That is SUM.',
        'أول XOR يجمع A+B، والثاني يضيف Cin للنتيجة. هذا هو المجموع.',
        'أول XOR بيجمع A+B، والتاني بيضيف Cin للنتيجة. ده المجموع.',
      ],
      [
        'AND the same pairs and OR both carries into Cout. Test all eight rows.',
        'اعمل AND لنفس الأزواج واجمع الحملين بـ OR لإنتاج Cout. اختبر الصفوف الثمانية.',
        'اعمل AND لنفس الأزواج واجمع الحملين بـ OR عشان يطلع Cout. جرّب التمن صفوف.',
      ],
    ],
    expected: [
      'A+B+Cin = 2×Cout + SUM. 1+1+1 gives Cout 1 and SUM 1.',
      'A+B+Cin = 2×Cout + SUM. ‏1+1+1 يعطي Cout 1 وSUM 1.',
      'A+B+Cin = 2×Cout + SUM. ‏1+1+1 بيدّي Cout 1 وSUM 1.',
    ],
    program:
      'input A\ninput B\ninput CIN\nxor X1 A B\nxor SUM X1 CIN\nand C1 A B\nand C2 X1 CIN\nor COUT C1 C2\noutput S SUM\noutput CO COUT',
  },
  {
    id: 'selector',
    title: ['Two-way signal selector', 'مبدّل إشارة باتجاهين', 'مبدّل إشارة باتجاهين'],
    level: 'intermediate',
    summary: [
      'A select switch sends either A or B to one output. This is a 2:1 multiplexer.',
      'مفتاح اختيار يرسل A أو B إلى خرج واحد. هذا مبدّل 2:1.',
      'مفتاح اختيار بيبعت A أو B لخرج واحد. ده مبدّل 2:1.',
    ],
    goal: [
      'Learn how a control input changes the path without changing the data inputs.',
      'تعلّم كيف يغيّر مدخل التحكم المسار دون تغيير مداخل البيانات.',
      'اتعلّم إزاي مدخل التحكم بيغيّر المسار من غير ما يغيّر مداخل البيانات.',
    ],
    parts: ['Input', 'NOT', 'AND', 'OR', 'Output'],
    steps: [
      [
        'Place A, B, S, NOT, two AND gates, OR and Output.',
        'ضع A وB وS وNOT وبوابتي AND وOR ومراقب خرج.',
        'حط A وB وS وNOT وبوابتين AND وOR ومراقب خرج.',
      ],
      [
        'A goes through AND with NOT(S). B goes through AND with S.',
        'يمر A عبر AND مع NOT(S)، وB عبر AND مع S.',
        'A بيعدّي في AND مع NOT(S)، وB في AND مع S.',
      ],
      [
        'OR both branches into the Output. Flip S while A and B differ.',
        'اجمع الفرعين بـ OR إلى الخرج. بدّل S بينما تختلف A وB.',
        'اجمع الفرعين في OR للخرج. بدّل S وإنت مخلي A وB مختلفين.',
      ],
    ],
    expected: ['S=0 → A; S=1 → B.', 'S=0 يعطي A، وS=1 يعطي B.', 'S=0 بيدّي A، وS=1 بيدّي B.'],
    program:
      'input A\ninput B\ninput S\nnot NS S\nand A1 A NS\nand A2 B S\nor OUT A1 A2\noutput Y OUT',
  },
  {
    id: 'alarm',
    title: ['Sensor alarm with enable', 'إنذار مستشعرات مع تمكين', 'إنذار حسّاسات مع تشغيل'],
    level: 'beginner',
    summary: [
      'Two sensors trigger a light and a beep, but only while the enable switch is on.',
      'مستشعران يشغّلان ضوءًا وصوتًا، ولكن فقط أثناء تشغيل مفتاح التمكين.',
      'حسّاسين بيشغّلوا نور وصوت، بس لما مفتاح التشغيل يكون شغّال.',
    ],
    goal: [
      'Combine OR and AND to express “sensor A or B, and enabled”.',
      'اجمع OR وAND للتعبير عن «المستشعر A أو B، والتمكين مفعّل».',
      'اجمع OR وAND عشان تعبّر عن «الحسّاس A أو B، والتشغيل شغّال».',
    ],
    parts: ['Input', 'OR', 'AND', 'LED', 'Beep'],
    steps: [
      [
        'Place A, B, ENABLE, OR, AND, LED and Beep.',
        'ضع A وB وENABLE وبوابة OR وبوابة AND ومصباحًا وصوتًا.',
        'حط A وB وENABLE وبوابة OR وبوابة AND ولمبة وصوت.',
      ],
      [
        'OR the sensors, then AND the result with ENABLE.',
        'اجمع المستشعرين بـ OR ثم اجمع الناتج مع ENABLE بـ AND.',
        'اجمع الحسّاسين بـ OR وبعدها اجمع الناتج مع ENABLE بـ AND.',
      ],
      [
        'Send AND to both LED and Beep. Test with ENABLE off, then on.',
        'أرسل خرج AND للمصباح والصوت. اختبر والتمكين مطفأ ثم شغّله.',
        'ودّي خرج AND للمبة والصوت. جرّب والتشغيل مطفي وبعدها شغّله.',
      ],
    ],
    expected: [
      'ENABLE off → silent and dark. ENABLE on + any sensor → light and beep.',
      'التمكين مطفأ: صمت وظلام. التمكين شغال مع أي مستشعر: ضوء وصوت.',
      'التشغيل مطفي: سكوت وضلمة. التشغيل شغال مع أي حسّاس: نور وصوت.',
    ],
    program: 'input A\ninput B\ninput ENABLE\nor O A B\nand G O ENABLE\nled L G\nbeep BEEP G',
  },
  {
    id: 'button-counter',
    title: ['Button press counter', 'عدّاد ضغطات الزر', 'عدّاد دوسات الزرار'],
    level: 'intermediate',
    summary: [
      'Each press adds one. A Counter is a circuit with memory, not just a gate.',
      'كل ضغطة تضيف واحدة. العدّاد دائرة بها ذاكرة وليست مجرد بوابة.',
      'كل دوسة بتضيف واحدة. العدّاد دايرة فيها ذاكرة مش مجرد بوابة.',
    ],
    goal: [
      'See the difference between a steady signal and a rising edge.',
      'اعرف الفرق بين إشارة ثابتة وحافة صاعدة.',
      'اعرف الفرق بين إشارة ثابتة وحافة طالعة.',
    ],
    parts: ['Button', 'Counter', 'LED'],
    steps: [
      ['Place a Button, Counter and LED.', 'ضع زرًا وعدّادًا ومصباحًا.', 'حط زرار وعدّاد ولمبة.'],
      [
        'Wire Button → Counter → LED.',
        'وصّل الزر بالعدّاد ثم بالمصباح.',
        'وصّل الزرار بالعدّاد وبعدها باللمبة.',
      ],
      [
        'Press and release repeatedly. Open the Counter to inspect its value.',
        'اضغط وأفلت مرارًا. افتح العدّاد لرؤية قيمته.',
        'دوس وسيب كذا مرة. افتح العدّاد عشان تشوف قيمته.',
      ],
    ],
    expected: [
      'Each release adds one count. The LED shows bit 0.',
      'كل إفلات يضيف عدّة. يعرض المصباح البت 0.',
      'كل سيبان بيضيف عدّة. اللمبة بتعرض البت 0.',
    ],
    program: 'button B\ncounter C B\nled L C',
  },
  {
    id: 'rgb-mixer',
    title: ['RGB colour mixer', 'خالط ألوان RGB', 'خالط ألوان RGB'],
    level: 'intermediate',
    summary: [
      'Three switches mix into one lens. Combine colours instead of just turning a light on.',
      'ثلاثة مفاتيح تمزج في عدسة واحدة. اجمع الألوان بدل مجرد تشغيل ضوء.',
      'تلات مفاتيح بيخلطوا في عدسة واحدة. اخلط ألوان بدل ما تنوّر لمبة بس.',
    ],
    goal: [
      'Control three independent signals and observe their combined result.',
      'تحكم في ثلاث إشارات مستقلة وراقب ناتجها المشترك.',
      'تحكّم في تلات إشارات مستقلة وراقب ناتجهم المشترك.',
    ],
    parts: ['Input', 'RGBLed'],
    steps: [
      ['Place R, G, B and one RGB LED.', 'ضع R وG وB ومصباح RGB.', 'حط R وG وB ولمبة RGB.'],
      [
        'Wire each switch to its matching RGB input.',
        'وصّل كل مفتاح بمدخل RGB المطابق.',
        'وصّل كل مفتاح بمدخل RGB اللي بيساويه.',
      ],
      [
        'Try single colours, then pairs, then all three.',
        'جرّب لونًا واحدًا ثم زوجين ثم الثلاثة.',
        'جرّب لون واحد وبعدها اتنين وبعدها التلاتة.',
      ],
    ],
    expected: [
      'R+G yellow, G+B cyan, R+B magenta, R+G+B white.',
      'أحمر+أخضر أصفر، أخضر+أزرق سماوي، أحمر+أزرق أرجواني، الثلاثة أبيض.',
      'أحمر+أخضر أصفر، أخضر+أزرق سماوي، أحمر+أزرق أرجواني، التلاتة أبيض.',
    ],
    program: 'input R\ninput G\ninput B\nrgb RGB R G B',
  },
  {
    id: 'hex-display',
    title: ['Four-bit hex display', 'شاشة سداسية عشر بأربع بتات', 'شاشة هيكس بأربع بتات'],
    level: 'intermediate',
    summary: [
      'A Dip Switch makes a four-bit number you can click. The Display turns it into 0–F.',
      'مفتاح Dip Switch يصنع رقمًا بأربع بتات تنقر عليه، وتحوّله الشاشة إلى 0–F.',
      'الديب سويتش بيعمل رقم أربع بتات تدوس عليه، والشاشة بتحوّله لـ 0–F.',
    ],
    goal: [
      'Connect a binary input to a readable output and check the bit order.',
      'وصّل مدخلًا ثنائيًا بخرج مقروء وتحقق من ترتيب البتات.',
      'وصّل مدخل ثنائي بخرج مقروء واتأكد من ترتيب البتات.',
    ],
    parts: ['DipSwitch', 'Display'],
    steps: [
      ['Place a Dip Switch and a Display.', 'ضع مفتاح Dip Switch وشاشة.', 'حط ديب سويتش وشاشة.'],
      [
        'Wire switch outputs 0–3 to display D0–D3 in order.',
        'وصّل مخارج المفتاح 0–3 بمداخل الشاشة D0–D3 بالترتيب.',
        'وصّل مخارج السويتش 0–3 بمداخل الشاشة D0–D3 بالترتيب.',
      ],
      [
        'Click the four pads and read the digit.',
        'انقر الألواح الأربعة واقرأ الرقم.',
        'دوس على الأربع ألواح واقرأ الرقم.',
      ],
    ],
    expected: [
      '0000 → 0 … 1001 → 9, 1010 → A, 1111 → F.',
      '‏0000 → 0 … ‏1001 → 9، ‏1010 → A، ‏1111 → F.',
      '‏0000 → 0 … ‏1001 → 9، ‏1010 → A، ‏1111 → F.',
    ],
    program: 'dipswitch SW\ndisplay DISP SW[0] SW[1] SW[2] SW[3]',
  },
  {
    id: 'fan-out',
    title: ['One signal, four places', 'إشارة واحدة وأربعة أماكن', 'إشارة واحدة وأربع أماكن'],
    level: 'intermediate',
    summary: [
      'Use a Splitter to drive four LEDs from one switch and see fan-out in action.',
      'استخدم Splitter لتشغيل أربعة مصابيح من مفتاح واحد وشاهد التوزيع.',
      'استخدم Splitter لتشغيل أربع لمبات من مفتاح واحد وشوف التوزيع.',
    ],
    goal: [
      'Understand that a Splitter copies a signal; it does not change its value.',
      'افهم أن المفرّع ينسخ الإشارة ولا يغيّر قيمتها.',
      'افهم إن المفرّع بينسخ الإشارة ومش بيغيّر قيمتها.',
    ],
    parts: ['Input', 'Splitter', 'LED'],
    steps: [
      [
        'Place an Input, Splitter and four LEDs.',
        'ضع مدخلًا ومفرّعًا وأربعة مصابيح.',
        'حط مدخل ومفرّع وأربع لمبات.',
      ],
      [
        'Wire Input → Splitter, then each output to an LED.',
        'وصّل المدخل بالمفرّع ثم كل خرج بمصباح.',
        'وصّل المدخل بالمفرّع وبعدها كل خرج بلمبة.',
      ],
      [
        'Toggle the Input and confirm all four LEDs match.',
        'بدّل المدخل وتأكد أن الأربعة تطابقه.',
        'بدّل المدخل واتأكد إن الأربعة زي بعض.',
      ],
    ],
    expected: [
      'All four LEDs follow the single Input.',
      'تتبع المصابيح الأربعة المدخل الواحد.',
      'الأربع لمبات بيتبعوا المدخل الواحد.',
    ],
    program: 'input A\nsplitter S A\nled L0 S[0]\nled L1 S[1]\nled L2 S[2]\nled L3 S[3]',
  },
  {
    id: 'tone-organ',
    title: ['Four-key tone organ', 'أورج بأربع نغمات', 'أورج بأربع نغمات'],
    level: 'intermediate',
    summary: [
      'Four switches become weighted tone pins. Press one or several and listen.',
      'أربعة مفاتيح تصبح منافذ نغمة موزونة. اضغط واحدًا أو أكثر واستمع.',
      'أربع مفاتيح بيبقوا نقط نغمة موزونة. دوس على واحد أو أكتر واتسمّع.',
    ],
    goal: [
      'Treat four bits as a value and hear the difference when you combine them.',
      'تعامل مع أربع بتات كقيمة واسمع الفرق عند جمعها.',
      'اتعامل مع أربع بتات كقيمة واتسمّع الفرق لما تجمعهم.',
    ],
    parts: ['Input', 'Tone'],
    steps: [
      ['Place four Inputs and a Tone.', 'ضع أربعة مداخل ومكوّن نغمة.', 'حط أربع مداخل ومكوّن نغمة.'],
      [
        'Wire them to Tone pins 1, 2, 4 and 8.',
        'وصّلهم بمنافذ النغمة 1 و2 و4 و8.',
        'وصّلهم بنقط النغمة 1 و2 و4 و8.',
      ],
      [
        'Press one switch at a time, then chords.',
        'اضغط مفتاحًا واحدًا ثم عدة معًا.',
        'دوس مفتاح واحد وبعدها كذا واحد مع بعض.',
      ],
    ],
    expected: [
      'Each switch adds a pitch; combinations are richer than a single tone.',
      'كل مفتاح يضيف نغمة، والتركيب أغنى من نغمة واحدة.',
      'كل مفتاح بيضيف نغمة، والخلط أغنى من نغمة واحدة.',
    ],
    program: 'input A\ninput B\ninput C\ninput D\ntone T A B C D',
  },
  {
    id: 'bar-meter',
    title: ['Four-bar level meter', 'مقياس مستوى بأربعة أشرطة', 'مقياس مستوى بأربع أشرطة'],
    level: 'intermediate',
    summary: [
      'A Dip Switch drives a Bar Graph, giving a visible binary meter.',
      'مفتاح Dip Switch يشغّل رسمًا بيانيًا، ليظهر مقياس ثنائي مرئي.',
      'الديب سويتش بيشغّل بار جراف، عشان يظهر مقياس ثنائي ظاهر.',
    ],
    goal: [
      'Read four bits as a level, from no bars to all bars.',
      'اقرأ أربع بتات كمستوى من بلا أشرطة إلى كل الأشرطة.',
      'اقرأ أربع بتات كمستوى من مفيش أشرطة لكل الأشرطة.',
    ],
    parts: ['DipSwitch', 'BarGraph'],
    steps: [
      [
        'Place a Dip Switch and a Bar Graph.',
        'ضع مفتاح Dip Switch ورسمًا بيانيًا.',
        'حط ديب سويتش وبار جراف.',
      ],
      [
        'Wire switch outputs 0–3 to bar inputs 1–4.',
        'وصّل مخارج المفتاح 0–3 بمداخل الرسم 1–4.',
        'وصّل مخارج السويتش 0–3 بمداخل البار 1–4.',
      ],
      [
        'Click the pads and watch the bars fill.',
        'انقر الألواح وراقب الأشرطة تمتلئ.',
        'دوس على الألواح وشوف الأشرطة بتتملى.',
      ],
    ],
    expected: [
      'No input → no bars; all four → all bars.',
      'لا مداخل: لا أشرطة. الأربعة: كل الأشرطة.',
      'مفيش مداخل: مفيش أشرطة. الأربعة: كل الأشرطة.',
    ],
    program: 'dipswitch SW\nbargraph BAR SW[0] SW[1] SW[2] SW[3]',
  },
  {
    id: 'procedural-gate',
    title: ['Expression-controlled lamp', 'مصباح يتحكم فيه تعبير', 'لمبة بيتحكم فيها تعبير'],
    level: 'intermediate',
    summary: [
      'Write a safe expression instead of placing a gate. Use the same truth table to check it.',
      'اكتب تعبيرًا آمنًا بدل وضع بوابة، واستخدم نفس جدول الحقيقة للتحقق.',
      'اكتب تعبير آمن بدل ما تحط بوابة، واستخدم نفس جدول الحقيقة للتأكد.',
    ],
    goal: [
      'See that a text expression is still ordinary logic and can be tested.',
      'اعرف أن التعبير النصي منطق عادي ويمكن اختباره.',
      'اعرف إن التعبير النصي منطق عادي وممكن تجرّبه.',
    ],
    parts: ['Input', 'Procedural', 'LED'],
    steps: [
      [
        'Place two Inputs, Procedural and an LED.',
        'ضع مدخلين ومكوّن Procedural ومصباحًا.',
        'حط مدخلين ومكوّن Procedural ولمبة.',
      ],
      [
        'Wire A and B to Procedural, then Procedural to LED.',
        'وصّل A وB بـ Procedural ثم Procedural بالمصباح.',
        'وصّل A وB بـ Procedural وبعدها Procedural باللمبة.',
      ],
      [
        'Open Procedural and try A && B, A || B and !A.',
        'افتح Procedural وجرّب A && B وA || B و!A.',
        'افتح Procedural وجرّب A && B وA || B و!A.',
      ],
    ],
    expected: [
      'A && B matches AND; A || B matches OR; !A matches NOT.',
      'التعبير A && B يطابق AND، وA || B يطابق OR، و!A يطابق NOT.',
      'التعبير A && B زي AND، وA || B زي OR، و!A زي NOT.',
    ],
    program: 'input A\ninput B\nprocedural P A B "A && B"\nled L P',
  },
];
