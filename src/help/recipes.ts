import type { Copy, Level, Recipe } from './types';

type Extra = Partial<Pick<Recipe, 'summary' | 'parts' | 'program' | 'check'>>;

const r = (
  id: string,
  title: Copy,
  level: Level,
  steps: readonly Copy[],
  expected: Copy,
  extra: Extra = {},
): Recipe => ({ id, title, level, steps, expected, ...extra });

/**
 * Worked circuits are ordered from one-wire experiments to complete projects.
 * Every `program` is compiled by the tests in diagnostics.test.ts, so the
 * "Build this example" button produces a wired, working board.
 */
export const recipes: readonly Recipe[] = [
  r(
    'first',
    ['Your first working circuit', 'دائرتك العاملة الأولى', 'أول دايرة شغّالة ليك'],
    'beginner',
    [
      [
        'Choose Input from the component picker and place it in an empty area.',
        'اختر مدخلًا من قائمة المكوّنات وضعه في مكان فارغ.',
        'اختار مدخل من قائمة المكوّنات وحطّه في مكان فاضي.',
      ],
      [
        'Place LED to its right. Drag from the black output pin to the white LED input pin.',
        'ضع LED إلى يمينه. اسحب من الخرج الأسود إلى مدخل LED الأبيض.',
        'حط LED على يمينه. اسحب من الخرج الأسود لمدخل LED الأبيض.',
      ],
      [
        'Choose Interact and click the Input twice. Watch the LED turn on and then off.',
        'اختر تفاعلًا وانقر المدخل مرتين. راقب LED يضيء ثم ينطفئ.',
        'اختار استخدم ودوس على المدخل مرتين. راقب LED تنوّر وتطفي.',
      ],
      [
        'Save the board from the menu and export a .board backup.',
        'احفظ اللوحة من القائمة وصدّر نسخة ‎.board احتياطية.',
        'احفظ اللوحة من القائمة ونزّل نسخة ‎.board احتياطية.',
      ],
    ],
    [
      'Input 0 → LED off; Input 1 → LED on.',
      'مدخل 0: LED مطفأ. مدخل 1: LED مضاء.',
      'مدخل 0: LED مطفية. مدخل 1: LED منوّرة.',
    ],
    {
      summary: [
        'Turn one switch into a light. This is the smallest complete circuit in REEO.',
        'حوّل مفتاحًا واحدًا إلى ضوء. هذه أصغر دائرة كاملة في REEO.',
        'حوّل مفتاح واحد لنور. دي أصغر دايرة كاملة في REEO.',
      ],
      parts: ['Input', 'LED'],
      program: 'input A\nled L A',
      check: [
        'If nothing changes, choose Interact, then click the Input. Make sure the wire ends on both pins and that you wired output → input.',
        'إذا لم يتغير شيء فاختر تفاعلًا ثم انقر المدخل. تأكد أن السلك ينتهي عند المنفذين وأن التوصيل من الخرج إلى الدخل.',
        'لو مفيش حاجة بتتغير اختار استخدم ودوس على المدخل. اتأكد إن السلك واصل على النقطتين والتوصيل من الخرج للدخل.',
      ],
    },
  ),
  r(
    'not',
    ['Make an inverter with NOT', 'اصنع عاكسًا ببوابة NOT', 'اعمل عاكس ببوابة NOT'],
    'beginner',
    [
      [
        'Place one Input, one NOT gate and one LED in a row.',
        'ضع مدخلًا واحدًا وبوابة NOT ومصباح LED في صف واحد.',
        'حط مدخل وبوابة NOT ولمبة LED في صف واحد.',
      ],
      [
        'Wire Input → NOT, then NOT → LED. The gate has one white input and one black output.',
        'وصّل المدخل ببوابة NOT ثم NOT بالمصباح. للبوابة مدخل أبيض واحد وخرج أسود واحد.',
        'وصّل المدخل ببوابة NOT وبعدها NOT باللمبة. للبوابة مدخل أبيض واحد وخرج أسود واحد.',
      ],
      [
        'Click the Input and compare the LED with the Input value. They should always be opposite.',
        'انقر المدخل وقارن المصباح بقيمة المدخل. يجب أن يكونا متعاكسين دائمًا.',
        'دوس على المدخل وقارن اللمبة بقيمة المدخل. المفروض يكونوا عكس بعض دايمًا.',
      ],
    ],
    [
      'Input 0 → LED 1; Input 1 → LED 0.',
      'المدخل 0 يعطي LED 1، والمدخل 1 يعطي LED 0.',
      'المدخل 0 يدّي LED 1، والمدخل 1 يدّي LED 0.',
    ],
    {
      summary: [
        'NOT flips a signal. One input, one output: 0 becomes 1 and 1 becomes 0.',
        'بوابة NOT تعكس الإشارة. مدخل واحد وخرج واحد: 0 يصبح 1 و1 يصبح 0.',
        'بوابة NOT بتعكس الإشارة. مدخل واحد وخرج واحد: 0 يبقى 1 و1 يبقى 0.',
      ],
      parts: ['Input', 'NOT', 'LED'],
      program: 'input A\nnot N A\nled L N',
      check: [
        'Check that the wire from NOT goes to the LED and not back into the Input.',
        'تأكد أن سلك NOT يذهب إلى المصباح وليس عائدًا إلى المدخل.',
        'اتأكد إن سلك NOT رايح للمبة مش راجع للمدخل.',
      ],
    },
  ),
  r(
    'andor',
    [
      'AND versus OR: same inputs, different answers',
      'AND وOR: نفس المداخل ونتائج مختلفة',
      'AND وOR: نفس المداخل ونتايج مختلفة',
    ],
    'beginner',
    [
      [
        'Place switches A and B, one AND gate, one OR gate and two LEDs.',
        'ضع مفتاحين A وB وبوابة AND وبوابة OR ومصباحين.',
        'حط مفتاحين A وB وبوابة AND وبوابة OR ولمبتين.',
      ],
      [
        'Send A and B to both gates. You are building two copies of the same inputs.',
        'أرسل A وB إلى البوابتين. أنت تبني نسختين من نفس المداخل.',
        'ودّي A وB للبوابتين. إنت كده بتعمل نسختين من نفس المداخل.',
      ],
      [
        'Connect the AND output to one LED and the OR output to the other. Try 00, 01, 10 and 11.',
        'وصّل خرج AND بمصباح وخرج OR بالآخر. جرّب 00 و01 و10 و11.',
        'وصّل خرج AND بلمبة وخرج OR بالتانية. جرّب 00 و01 و10 و11.',
      ],
    ],
    [
      'AND: 0,0,0,1. OR: 0,1,1,1 (input order 00,01,10,11).',
      'AND: ‏0،0،0،1. OR: ‏0،1،1،1 بترتيب 00،01،10،11.',
      'AND: ‏0،0،0،1. OR: ‏0،1،1،1 بالترتيب 00،01،10،11.',
    ],
    {
      summary: [
        'AND asks for both inputs. OR asks for at least one. Compare them side by side.',
        'بوابة AND تحتاج المدخلين معًا، وOR تكفيها واحدة. قارنهما جنبًا إلى جنب.',
        'AND محتاجة الاتنين مع بعض، وOR يكفيها واحد. قارنهم جنب بعض.',
      ],
      parts: ['Input', 'AND', 'OR', 'LED'],
      program: 'input A\ninput B\nand ANDG A B\nor ORG A B\nled LA ANDG\nled LO ORG',
      check: [
        'If both LEDs stay off, click each Input to make sure it is 1. If only one LED works, the other gate is missing a wire.',
        'إذا بقي المصباحان مطفأين فانقر كل مدخل وتأكد أنه 1. وإذا عمل مصباح واحد فقط فالبوابة الأخرى ينقصها سلك.',
        'لو اللمبتين مطفيين دوس على كل مدخل واتأكد إنه 1. ولو لمبة واحدة شغالة يبقى البوابة التانية ناقصة سلك.',
      ],
    },
  ),
  r(
    'xor',
    ['Detect a difference with XOR', 'اكتشف الاختلاف ببوابة XOR', 'اكتشف الفرق ببوابة XOR'],
    'beginner',
    [
      [
        'Place switches A and B, one XOR gate and one LED.',
        'ضع مفتاحين A وB وبوابة XOR ومصباحًا.',
        'حط مفتاحين A وB وبوابة XOR ولمبة.',
      ],
      [
        'Wire A to the first XOR input, B to the second, and XOR to the LED.',
        'وصّل A بالمدخل الأول لبوابة XOR وB بالثاني وXOR بالمصباح.',
        'وصّل A بمدخل XOR الأول وB بالتاني وXOR باللمبة.',
      ],
      [
        'Test all four pairs. The LED is on only when A and B disagree.',
        'اختبر الأزواج الأربعة. يضيء المصباح فقط عندما تختلف A وB.',
        'جرّب الأربع حالات. اللمبة بتنوّر بس لما A وB يختلفوا.',
      ],
    ],
    [
      'A B → LED: 00→0, 01→1, 10→1, 11→0.',
      'A B ← LED: ‏00→0، ‏01→1، ‏10→1، ‏11→0.',
      'A B ← LED: ‏00→0، ‏01→1، ‏10→1، ‏11→0.',
    ],
    {
      summary: [
        'XOR is the difference detector. It is on when its two inputs are different.',
        'بوابة XOR تكشف الاختلاف: تضيء عندما يختلف المدخلان.',
        'بوابة XOR بتكشف الفرق: بتنوّر لما المدخلين يختلفوا.',
      ],
      parts: ['Input', 'XOR', 'LED'],
      program: 'input A\ninput B\nxor X A B\nled L X',
    },
  ),
  r(
    'nand',
    [
      'Build NAND or NOR from basic gates',
      'بناء NAND أو NOR من بوابات أساسية',
      'اعمل NAND أو NOR من البوابات الأساسية',
    ],
    'beginner',
    [
      [
        'Place two Input switches and an AND gate (use OR instead for NOR).',
        'ضع مفتاحي إدخال وبوابة AND، أو OR لصنع NOR.',
        'حط مفتاحين إدخال وبوابة AND، أو OR لو عايز NOR.',
      ],
      [
        'Wire both switches to the gate inputs. Add NOT after the gate and LED after NOT.',
        'وصّل المفتاحين بمدخلي البوابة. أضف NOT بعدها ثم LED.',
        'وصّل المفتاحين بمداخل البوابة. ضيف NOT بعدها وLED بعد NOT.',
      ],
      [
        'Try 00, 01, 10, 11; record all four results before Componentize.',
        'جرّب 00 و01 و10 و11 وسجّل النتائج الأربع قبل إنشاء مكوّن.',
        'جرّب 00 و01 و10 و11 وسجّل الأربع نتايج قبل ما تعمل مكوّن.',
      ],
    ],
    [
      'NAND: 1,1,1,0. NOR: 1,0,0,0 (input order 00,01,10,11).',
      'NAND: ‏1،1،1،0. NOR: ‏1،0،0،0 بترتيب 00،01،10،11.',
      'NAND: ‏1،1،1،0. NOR: ‏1،0،0،0 بالترتيب 00،01،10،11.',
    ],
    {
      summary: [
        'NAND is AND followed by NOT. NOR is OR followed by NOT. Build one, then swap the gate.',
        'بوابة NAND هي AND ثم NOT، وNOR هي OR ثم NOT. ابنِ واحدة ثم بدّل البوابة.',
        'NAND هي AND وبعدها NOT، وNOR هي OR وبعدها NOT. اعمل واحدة وبعدها غيّر البوابة.',
      ],
      parts: ['Input', 'AND', 'NOT', 'Output'],
      program: 'input A\ninput B\nand G A B\nnot N G\noutput OUT N',
    },
  ),
  r(
    'half',
    ['Half adder: add two bits', 'نصف جامع: جمع بتين', 'نصف جامع: اجمع بتّين'],
    'beginner',
    [
      [
        'Place switches A and B, one XOR, one AND, and two Output monitors named SUM and CARRY.',
        'ضع مفتاحين A وB وبوابتي XOR وAND ومراقبي خرج باسم SUM وCARRY.',
        'حط مفتاحين A وB وبوابة XOR وبوابة AND ومراقبين باسم SUM وCARRY.',
      ],
      [
        'Branch A to the first input of both gates; branch B to the second input of both.',
        'فرّع A إلى المدخل الأول لكلتا البوابتين وB إلى المدخل الثاني لكلتيهما.',
        'فرّع A للمدخل الأول في البوابتين، وB للمدخل التاني في البوابتين.',
      ],
      [
        'XOR → SUM; AND → CARRY. Test every combination, then select and Componentize.',
        'وصّل XOR بالمجموع وAND بالحمل. اختبر كل الحالات ثم حدد الدائرة وأنشئ مكوّنًا.',
        'وصّل XOR بالمجموع وAND بالحمل. جرّب كل الحالات وبعدها حدّد الدايرة واعمل مكوّن.',
      ],
    ],
    [
      'A B → CARRY SUM: 00→00, 01→01, 10→01, 11→10.',
      'A B ← ثم CARRY SUM: ‏00→00، ‏01→01، ‏10→01، ‏11→10.',
      'A B وبعدهم CARRY SUM: ‏00→00، ‏01→01، ‏10→01، ‏11→10.',
    ],
    {
      summary: [
        'A half adder adds two bits. XOR gives the sum bit and AND gives the carry bit.',
        'نصف الجامع يجمع بتين: XOR يعطي بت المجموع وAND يعطي الحمل.',
        'نص الجامع بيجمع بتّين: XOR بيدّي بت المجموع وAND بيدّي الحمل.',
      ],
      parts: ['Input', 'XOR', 'AND', 'Output'],
      program: 'input A\ninput B\nxor SUM A B\nand CARRY A B\noutput S SUM\noutput C CARRY',
    },
  ),
  r(
    'full',
    [
      'Full adder: include carry-in',
      'جامع كامل: تضمين الحمل الداخل',
      'جامع كامل: ضيف الحمل الداخل',
    ],
    'intermediate',
    [
      [
        'Build two half adders from the previous recipe. Label three switches A, B, Cin.',
        'ابنِ نصفي جامع من التمرين السابق، وسمّ ثلاثة مفاتيح A وB وCin.',
        'اعمل نصفي جامع من التمرين اللي فات، وسمّي تلات مفاتيح A وB وCin.',
      ],
      [
        'A and B enter the first half adder. Its SUM and Cin enter the second.',
        'أدخل A وB إلى الأول، ثم أدخل مجموعه وCin إلى الثاني.',
        'دخّل A وB في الأول، وبعدها دخّل المجموع بتاعه وCin في التاني.',
      ],
      [
        'The second SUM is final SUM. OR the two CARRY signals to get Cout. Test all eight input rows.',
        'مجموع الثاني هو المجموع النهائي. اجمع إشارتي الحمل ببوابة OR لإنتاج Cout، واختبر الحالات الثماني.',
        'مجموع التاني هو المجموع النهائي. دخّل إشارتين الحمل في OR عشان تطلع Cout، وجرّب التمن حالات.',
      ],
    ],
    [
      'A+B+Cin = 2×Cout + SUM. For 1+1+1, Cout=1 and SUM=1.',
      'A+B+Cin = 2×Cout + SUM. للحالة 1+1+1 يكون Cout=1 وSUM=1.',
      'A+B+Cin = 2×Cout + SUM. لما تجمع 1+1+1، يكون Cout=1 وSUM=1.',
    ],
    {
      summary: [
        'A full adder adds three bits: A, B and a carry-in. Use two half adders and one OR gate.',
        'الجامع الكامل يجمع ثلاثة بتات: A وB والحمل الداخل. استخدم نصفي جامع وبوابة OR.',
        'الجامع الكامل بيجمع تلات بتات: A وB والحمل الداخل. استخدم نصفي جامع وبوابة OR.',
      ],
      parts: ['Input', 'XOR', 'AND', 'OR', 'Output'],
      program:
        'input A\ninput B\ninput CIN\nxor X1 A B\nxor SUM X1 CIN\nand C1 A B\nand C2 X1 CIN\nor COUT C1 C2\noutput S SUM\noutput CO COUT',
    },
  ),
  r(
    'mux',
    [
      'Choose between two signals: multiplexer',
      'اختيار إشارة من اثنتين: مبدّل',
      'اختار إشارة من اتنين: مبدّل',
    ],
    'intermediate',
    [
      [
        'Place switches A, B, S; NOT; two AND gates; one OR; and Output.',
        'ضع مفاتيح A وB وS وNOT وبوابتي AND وOR ومراقب خرج.',
        'حط مفاتيح A وB وS وNOT وبوابتين AND وOR ومراقب خرج.',
      ],
      [
        'First AND receives A and NOT(S). Second AND receives B and S.',
        'تستقبل AND الأولى A وNOT(S)، والثانية B وS.',
        'AND الأولى يدخلها A وNOT(S)، والتانية يدخلها B وS.',
      ],
      [
        'OR the two AND outputs. Switch S while A and B differ.',
        'اجمع خرجي AND ببوابة OR. بدّل S بينما تختلف A وB.',
        'اجمع خرجين AND في OR. بدّل S وإنت مخلي A وB مختلفين.',
      ],
    ],
    ['S=0 selects A; S=1 selects B.', 'S=0 يختار A، وS=1 يختار B.', 'S=0 يختار A، وS=1 يختار B.'],
    {
      summary: [
        'A multiplexer is a two-way selector: the S input decides which signal reaches the output.',
        'المبدّل يختار بين إشارتين: المدخل S يحدد أي إشارة تصل للخرج.',
        'المبدّل بيختار بين إشارتين: المدخل S بيحدد أنهي إشارة توصل للخرج.',
      ],
      parts: ['Input', 'NOT', 'AND', 'OR', 'Output'],
      program:
        'input A\ninput B\ninput S\nnot NS S\nand A1 A NS\nand A2 B S\nor OUT A1 A2\noutput Y OUT',
    },
  ),
  r(
    'alarm',
    ['Alarm with an enable switch', 'إنذار بمفتاح تمكين', 'إنذار بمفتاح تشغيل'],
    'beginner',
    [
      [
        'Connect sensor switches A and B to OR. Connect OR output to one input of AND.',
        'وصّل مستشعرين A وB ببوابة OR، ثم خرجها بمدخل AND.',
        'وصّل حسّاسين A وB ببوابة OR، وبعدها خرجها بمدخل AND.',
      ],
      [
        'Connect an ENABLE switch to the other AND input. AND output goes to LED and optionally Beep.',
        'وصّل مفتاح ENABLE بمدخل AND الآخر، وخرج AND إلى LED وصوت اختياري.',
        'وصّل مفتاح ENABLE بمدخل AND التاني، وخرج AND للمبة وصوت لو عايز.',
      ],
      [
        'With ENABLE=0 test both sensors. Enable it and test each sensor separately.',
        'اختبر المستشعرين وENABLE=0، ثم فعّله واختبر كل مستشعر منفردًا.',
        'جرّب الحسّاسين وENABLE=0، وبعدها شغّله وجرّب كل حسّاس لوحده.',
      ],
    ],
    [
      'Alarm = ENABLE AND (A OR B). Disabled always means off.',
      'الإنذار = ENABLE AND (A OR B). التعطيل يعني انطفاء الإنذار دائمًا.',
      'الإنذار = ENABLE AND (A OR B). لو التعطيل شغّال الإنذار يفضل مطفي.',
    ],
    {
      summary: [
        'Build a sensor alarm that only works while an enable switch is on. This is AND plus OR in a real task.',
        'ابنِ إنذارًا يعمل فقط عند تشغيل مفتاح التمكين. هذه AND مع OR في مهمة حقيقية.',
        'اعمل إنذار بيشتغل بس لما مفتاح التشغيل شغّال. دي AND مع OR في مهمة حقيقية.',
      ],
      parts: ['Input', 'OR', 'AND', 'LED', 'Beep'],
      program: 'input A\ninput B\ninput ENABLE\nor O A B\nand G O ENABLE\nled L G\nbeep BEEP G',
    },
  ),
  r(
    'pulse',
    ['Count controlled clock pulses', 'عدّ نبضات ساعة يمكن تمكينها', 'عد نبضات ساعة بتتحكّم فيها'],
    'intermediate',
    [
      [
        'Set a Clock half-period to 500 ms. Connect it to one AND input.',
        'اضبط نصف دورة الساعة على 500 مللي ثانية، ووصّلها بمدخل AND.',
        'اضبط نص دورة الساعة 500 مللي ثانية ووصّلها بمدخل AND.',
      ],
      [
        'Connect an ENABLE switch to the other input; AND → Counter.',
        'وصّل مفتاح ENABLE بالمدخل الآخر، ثم AND بالعدّاد.',
        'وصّل مفتاح ENABLE بالمدخل التاني، وبعدها AND بالعدّاد.',
      ],
      [
        'Enable and watch. Disable and check that counting stops. Inspect with Pause.',
        'فعّل وراقب، ثم عطّل وتحقق من توقف العد. افحص باستخدام الإيقاف المؤقت.',
        'شغّل وراقب، وبعدها عطّل واتأكد إن العد وقف. افحص باستخدام الإيقاف المؤقت.',
      ],
    ],
    [
      'Roughly one count per second while enabled; enabling during a high clock can itself create a rising edge.',
      'نحو عدة واحدة في الثانية أثناء التمكين؛ التمكين والساعة مرتفعة قد يولّد حافة صاعدة بحد ذاته.',
      'تقريبًا عدّة في الثانية وإنت مشغّل؛ تشغيل التمكين والساعة 1 ممكن يعمل حافة صاعدة لوحده.',
    ],
    {
      summary: [
        'Use AND as a gate for a clock. The Counter advances only while ENABLE is on.',
        'استخدم AND كبوابة للساعة. لا يتقدم العدّاد إلا أثناء تشغيل ENABLE.',
        'استخدم AND كبوابة للساعة. العدّاد بيتقدّم بس وإنت مشغّل ENABLE.',
      ],
      parts: ['Clock', 'Input', 'AND', 'Counter', 'LED'],
      program: 'clock CLK 500\ninput ENABLE\nand G CLK ENABLE\ncounter COUNT G\nled BIT0 COUNT',
      check: [
        'If the count runs while ENABLE is off, the AND gate is not in the path. Check both wires and the clock delay.',
        'إذا استمر العد وENABLE مطفأ فبوابة AND ليست في المسار. تحقق من السلكين وتأخير الساعة.',
        'لو العد كمل وENABLE مطفي يبقى بوابة AND مش في الطريق. راجع السلكين وتأخير الساعة.',
      ],
    },
  ),
  r(
    'button',
    ['Light a lamp with a push button', 'أضِئ مصباحًا بزر ضغط', 'نوّر لمبة بزرار'],
    'beginner',
    [
      [
        'Place a Button and an LED. The Button is a source like Input, but it is easier to press.',
        'ضع زرًا ومصباح LED. الزر مصدر مثل المدخل لكنه أسهل في الضغط.',
        'حط زرار ولمبة LED. الزرار مصدر زي المدخل بس أسهل في الدوس.',
      ],
      [
        'Wire the Button output to the LED input.',
        'وصّل خرج الزر بمدخل المصباح.',
        'وصّل خرج الزرار بمدخل اللمبة.',
      ],
      [
        'In Interact mode, press and hold the Button. Release it and watch the LED follow.',
        'في وضع تفاعل اضغط الزر واستمر، ثم اتركه وراقب المصباح.',
        'في وضع استخدم دوس على الزرار وخلّيك دايس، وبعدها سيب وشوف اللمبة.',
      ],
    ],
    [
      'Pressed → LED on; released → LED off.',
      'أثناء الضغط: المصباح مضاء. بعد الإفلات: منطفئ.',
      'وإنت دايس: اللمبة منوّرة. بعد ما تسيب: مطفية.',
    ],
    {
      summary: [
        'A Button is a momentary source. It is perfect for testing a circuit without opening the Input editor.',
        'الزر مصدر لحظي، مناسب لاختبار الدائرة دون فتح محرر المدخل.',
        'الزرار مصدر لحظي، مناسب لتجربة الدايرة من غير ما تفتح محرر المدخل.',
      ],
      parts: ['Button', 'LED'],
      program: 'button B\nled L B',
    },
  ),
  r(
    'delay',
    ['Delay a signal', 'أخّر الإشارة', 'أخّر الإشارة'],
    'beginner',
    [
      ['Place an Input, a Delay and an LED.', 'ضع مدخلًا وتأخيرًا ومصباحًا.', 'حط مدخل وتأخير ولمبة.'],
      [
        'Wire Input → Delay → LED. Open the Delay properties and set 400 ms.',
        'وصّل المدخل بالتأخير ثم بالمصباح. افتح خصائص التأخير واضبط 400 مللي ثانية.',
        'وصّل المدخل بالتأخير وبعدها باللمبة. افتح خصائص التأخير وحط 400 مللي ثانية.',
      ],
      [
        'Toggle the Input and watch the LED change a moment later. The logic is the same; only the timing changes.',
        'بدّل المدخل وراقب المصباح يتغير بعد لحظة. المنطق نفسه؛ التوقيت فقط يتغير.',
        'بدّل المدخل وشوف اللمبة بتتغير بعد لحظة. المنطق زي ما هو؛ التوقيت بس اللي بيتغير.',
      ],
    ],
    [
      'The LED copies the Input after the delay. It is not a NOT gate.',
      'ينسخ المصباح المدخل بعد التأخير، وليس بوابة NOT.',
      'اللمبة بتنسخ المدخل بعد التأخير، مش بوابة NOT.',
    ],
    {
      summary: [
        'A Delay holds a value for a set number of milliseconds. Use it to see timing without changing logic.',
        'التأخير يحتفظ بالقيمة لعدد محدد من المللي ثانية، لترى التوقيت دون تغيير المنطق.',
        'التأخير بيحتفظ بالقيمة عدد مللي ثانية محدد، عشان تشوف التوقيت من غير ما تغيّر المنطق.',
      ],
      parts: ['Input', 'Delay', 'LED'],
      program: 'input A\ndelay D A 400\nled L D',
      check: [
        'If the LED never changes, check that the delay is not 0 ms and that the wire is connected to the LED, not just crossing it.',
        'إذا لم يتغير المصباح فتأكد أن التأخير ليس 0 وأن السلك متصل بالمصباح وليس مجرد متقاطع.',
        'لو اللمبة مش بتتغير اتأكد إن التأخير مش 0 وإن السلك واصل باللمبة مش مجرد بيعدّي عليها.',
      ],
    },
  ),
  r(
    'counter',
    ['Count button presses', 'عُدّ ضغطات الزر', 'عُدّ دوسات الزرار'],
    'intermediate',
    [
      ['Place a Button, a Counter and an LED.', 'ضع زرًا وعدّادًا ومصباحًا.', 'حط زرار وعدّاد ولمبة.'],
      [
        'Wire Button → Counter → LED. The Counter increments on each rising edge.',
        'وصّل الزر بالعدّاد ثم بالمصباح. يزيد العدّاد عند كل حافة صاعدة.',
        'وصّل الزرار بالعدّاد وبعدها باللمبة. العدّاد بيزيد مع كل حافة صاعدة.',
      ],
      [
        'Press and release the Button several times. Open the Counter if you want to inspect its value.',
        'اضغط الزر وأفلته عدة مرات. افتح العدّاد إذا أردت رؤية قيمته.',
        'دوس على الزرار وسيبه كام مرة. افتح العدّاد لو عايز تشوف قيمته.',
      ],
    ],
    [
      'Each press adds one count. The LED shows the least-significant bit.',
      'كل ضغطة تضيف عدّة واحدة. يعرض المصباح أقل بت.',
      'كل دوسة بتضيف عدّة. اللمبة بتعرض أقل بت.',
    ],
    {
      summary: [
        'A Counter remembers how many rising edges it has seen. Press and release to add one.',
        'العدّاد يتذكر عدد الحواف الصاعدة. اضغط وأفلت لإضافة واحدة.',
        'العدّاد بيفتكر عدد الحواف الصاعدة. دوس وسيب عشان تضيف واحد.',
      ],
      parts: ['Button', 'Counter', 'LED'],
      program: 'button B\ncounter C B\nled L C',
      check: [
        'The Counter counts edges, not button holds. Release the Button before pressing again.',
        'يعدّ العدّاد الحواف لا مدة الضغط. أفلت الزر قبل الضغط مرة أخرى.',
        'العدّاد بيعد الحواف مش مدة الدوس. سيب الزرار قبل ما تدوس تاني.',
      ],
    },
  ),
  r(
    'rgb',
    ['Mix red, green and blue light', 'امزج الضوء الأحمر والأخضر والأزرق', 'اخلط أحمر وأخضر وأزرق'],
    'intermediate',
    [
      [
        'Place three Input switches named R, G and B, plus one RGB LED.',
        'ضع ثلاثة مفاتيح R وG وB ومصباح RGB.',
        'حط تلات مفاتيح R وG وB ولمبة RGB.',
      ],
      [
        'Wire R, G and B to the three RGB inputs. The pins are spread over the panel lens.',
        'وصّل R وG وB بمداخل RGB الثلاثة. المنافذ موزعة على عدسة المصباح.',
        'وصّل R وG وB بمداخل RGB التلاتة. النقط موزعة على عدسة اللمبة.',
      ],
      [
        'Turn on one input at a time, then combinations. Watch the lens colour change.',
        'شغّل مدخلًا واحدًا في كل مرة ثم اجمع بينها. راقب لون العدسة يتغير.',
        'شغّل مدخل واحد كل مرة وبعدها اخلط بينهم. راقب لون العدسة بيتغير.',
      ],
    ],
    [
      'R+G → yellow, G+B → cyan, R+B → magenta, all three → white.',
      'أحمر+أخضر → أصفر، أخضر+أزرق → سماوي، أحمر+أزرق → أرجواني، الثلاثة → أبيض.',
      'أحمر+أخضر → أصفر، أخضر+أزرق → سماوي، أحمر+أزرق → أرجواني، التلاتة → أبيض.',
    ],
    {
      summary: [
        'An RGB LED mixes three signals into one colour. Think of it as three LEDs sharing a lens.',
        'مصباح RGB يمزج ثلاث إشارات في لون واحد. تخيله كثلاثة مصابيح في عدسة واحدة.',
        'لمبة RGB بتخلط تلات إشارات في لون واحد. تخيلها تلات لمبات في عدسة واحدة.',
      ],
      parts: ['Input', 'RGBLed'],
      program: 'input R\ninput G\ninput B\nrgb RGB R G B',
    },
  ),
  r(
    'display',
    [
      'Show a hex digit with a dip switch',
      'اعرض رقمًا سداسي عشر بمفتاح ثنائي',
      'اعرض رقم هيكس بديب سويتش',
    ],
    'intermediate',
    [
      [
        'Place a Dip Switch and a Display. The switch has four outputs; the display has four data inputs.',
        'ضع مفتاح Dip Switch وشاشة Display. للمفتاح أربعة مخارج وللشاشة أربعة مداخل بيانات.',
        'حط Dip Switch وشاشة Display. السويتش ليه أربع مخارج والشاشة ليها أربع مداخل بيانات.',
      ],
      [
        'Wire switch outputs 0–3 to display inputs D0–D3 in order. Keep the order; it is a binary number.',
        'وصّل مخارج المفتاح 0–3 بمداخل الشاشة D0–D3 بالترتيب. حافظ على الترتيب فهو رقم ثنائي.',
        'وصّل مخارج السويتش 0–3 بمداخل الشاشة D0–D3 بالترتيب. حافظ على الترتيب لأنه رقم ثنائي.',
      ],
      [
        'In Interact mode, click each of the four switch pads. Read 0–F on the display.',
        'في وضع تفاعل انقر كل لوح من الألواح الأربعة. اقرأ 0–F على الشاشة.',
        'في وضع استخدم دوس على كل لوح من الأربعة. اقرأ 0–F على الشاشة.',
      ],
    ],
    [
      'Binary 0000 shows 0; 0001 shows 1; … 1111 shows F.',
      'الثنائي 0000 يعرض 0، و0001 يعرض 1، … و1111 يعرض F.',
      'الثنائي 0000 بيعرض 0، و0001 بيعرض 1، … و1111 بيعرض F.',
    ],
    {
      summary: [
        'This is binary in, a readable digit out. The Dip Switch is a four-bit input you can click.',
        'هذا ثنائي يدخل ورقم مقروء يخرج. مفتاح Dip Switch مدخل أربع بتات تنقر عليه.',
        'ده ثنائي داخل ورقم مقروء خارج. الديب سويتش مدخل أربع بتات تدوس عليه.',
      ],
      parts: ['DipSwitch', 'Display'],
      program: 'dipswitch SW\ndisplay DISP SW[0] SW[1] SW[2] SW[3]',
      check: [
        'If the display shows the wrong digit, check the wire order. D0 is the least-significant bit (value 1), D3 is value 8.',
        'إذا ظهر رقم خاطئ فراجع ترتيب الأسلاك. D0 أقل بت (قيمته 1) وD3 قيمته 8.',
        'لو الرقم غلط راجع ترتيب الأسلاك. D0 أقل بت (قيمته 1) وD3 قيمته 8.',
      ],
    },
  ),
  r(
    'bus',
    [
      'Split one signal to four places',
      'فرّع إشارة واحدة إلى أربعة أماكن',
      'فرّع إشارة واحدة لأربع أماكن',
    ],
    'intermediate',
    [
      [
        'Place an Input, a Splitter and four LEDs.',
        'ضع مدخلًا ومفرّع Splitter وأربعة مصابيح.',
        'حط مدخل ومفرّع Splitter وأربع لمبات.',
      ],
      [
        'Wire Input → Splitter input. The Splitter input is the middle pin on its left side.',
        'وصّل المدخل بمدخل المفرّع. مدخل المفرّع هو المنفذ الأوسط في الجانب الأيسر.',
        'وصّل المدخل بمدخل المفرّع. مدخل المفرّع هو النقطة الوسطانية في الناحية الشمال.',
      ],
      [
        'Wire output 0, 1, 2 and 3 to the four LEDs. All four should follow the one Input.',
        'وصّل المخارج 0 و1 و2 و3 بالمصابيح الأربعة. يجب أن تتبع الأربعة المدخل نفسه.',
        'وصّل المخارج 0 و1 و2 و3 بالأربع لمبات. الأربعة المفروض يتبعوا نفس المدخل.',
      ],
    ],
    [
      'Input 0 → all LEDs off; Input 1 → all LEDs on.',
      'المدخل 0: كل المصابيح مطفأة. المدخل 1: كل المصابيح مضاءة.',
      'المدخل 0: كل اللمبات مطفية. المدخل 1: كل اللمبات منوّرة.',
    ],
    {
      summary: [
        'A Splitter copies one signal to four outputs. It does not split bits; every output carries the same value.',
        'المفرّع ينسخ إشارة واحدة إلى أربعة مخارج. لا يقسم البتات؛ كل مخرج يحمل نفس القيمة.',
        'المفرّع بينسخ إشارة واحدة لأربع مخارج. مش بيقسّم البتات؛ كل مخرج شايل نفس القيمة.',
      ],
      parts: ['Input', 'Splitter', 'LED'],
      program: 'input A\nsplitter S A\nled L0 S[0]\nled L1 S[1]\nled L2 S[2]\nled L3 S[3]',
    },
  ),
  r(
    'merger',
    ['One output from four buttons', 'خرج واحد من أربعة أزرار', 'خرج واحد من أربع أزرار'],
    'intermediate',
    [
      [
        'Place four Input switches and a Merger, then one LED.',
        'ضع أربعة مفاتيح ومدمج Merger ثم مصباحًا.',
        'حط أربع مفاتيح ومدمج Merger وبعدها لمبة.',
      ],
      [
        'Wire the four switches to Merger inputs 0–3. Its output is the middle pin on the right.',
        'وصّل المفاتيح الأربعة بمداخل المدمج 0–3. خرجه هو المنفذ الأوسط في اليمين.',
        'وصّل الأربع مفاتيح بمداخل المدمج 0–3. خرجه هو النقطة الوسطانية على اليمين.',
      ],
      [
        'Wire Merger → LED. Turn on any one switch and the LED lights.',
        'وصّل المدمج بالمصباح. شغّل أي مفتاح وسيضيء المصباح.',
        'وصّل المدمج باللمبة. شغّل أي مفتاح واللمبة هتنوّر.',
      ],
    ],
    [
      'Any input 1 → output 1. All inputs 0 → output 0.',
      'أي مدخل 1 يعطي خرج 1. كل المداخل 0 تعطي خرج 0.',
      'أي مدخل 1 بيدّي خرج 1. كل المداخل 0 بتدّي خرج 0.',
    ],
    {
      summary: [
        'A Merger combines four inputs into one output, effectively ORing them. Any button is enough.',
        'المدمج يجمع أربعة مداخل في خرج واحد، أي يعمل مثل OR. أي زر يكفي.',
        'المدمج بيجمع أربع مداخل في خرج واحد، يعني زي OR. أي زرار يكفي.',
      ],
      parts: ['Input', 'Merger', 'LED'],
      program: 'input A\ninput B\ninput C\ninput D\nmerger M A B C D\nled L M',
    },
  ),
  r(
    'bar',
    [
      'Read four bits on a bar graph',
      'اقرأ أربع بتات على رسم بياني',
      'اقرأ أربع بتات على بار جراف',
    ],
    'intermediate',
    [
      [
        'Place a Dip Switch and a Bar Graph.',
        'ضع مفتاح Dip Switch ورسمًا بيانيًا Bar Graph.',
        'حط ديب سويتش وبار جراف.',
      ],
      [
        'Wire switch outputs 0–3 to bar-graph inputs 1–4. Input 1 is the bottom bar.',
        'وصّل مخارج المفتاح 0–3 بمداخل الرسم 1–4. المدخل 1 هو الشريط السفلي.',
        'وصّل مخارج السويتش 0–3 بمداخل البار 1–4. المدخل 1 هو الشريط اللي تحت.',
      ],
      [
        'Click the four switch pads. The bars fill from the bottom as the binary value grows.',
        'انقر الألواح الأربعة. تمتلئ الأشرطة من الأسفل مع زيادة القيمة الثنائية.',
        'دوس على الأربع ألواح. الأشرطة بتتملى من تحت مع زيادة القيمة الثنائية.',
      ],
    ],
    [
      '0000 → no bars. 0001 → bottom bar. 1111 → all four bars.',
      '‏0000: لا أشرطة. ‏0001: الشريط السفلي. ‏1111: الأشرطة الأربعة.',
      '‏0000: مفيش أشرطة. ‏0001: الشريط اللي تحت. ‏1111: الأربع أشرطة.',
    ],
    {
      summary: [
        'A bar graph is a simple four-bit display. Each input lights one bar, so binary becomes visible.',
        'الرسم البياني شاشة بسيطة لأربع بتات: كل مدخل يضيء شريطًا لترى الثنائي.',
        'البار جراف شاشة بسيطة لأربع بتات: كل مدخل بينوّر شريط عشان تشوف الثنائي.',
      ],
      parts: ['DipSwitch', 'BarGraph'],
      program: 'dipswitch SW\nbargraph BAR SW[0] SW[1] SW[2] SW[3]',
    },
  ),
  r(
    'tone',
    ['Play a four-bit tone', 'شغّل نغمة بأربع بتات', 'شغّل نغمة بأربع بتات'],
    'intermediate',
    [
      [
        'Place four Input switches and a Tone component.',
        'ضع أربعة مفاتيح ومكوّن نغمة Tone.',
        'حط أربع مفاتيح ومكوّن نغمة Tone.',
      ],
      [
        'Wire inputs to Tone pins 1, 2, 4 and 8, in that order. The pin labels show their weight.',
        'وصّل المداخل بمنافذ النغمة 1 و2 و4 و8 بهذا الترتيب. أسماء المنافذ توضح وزنها.',
        'وصّل المداخل بمنافذ النغمة 1 و2 و4 و8 بالترتيب ده. أسماء النقط بتوضح وزنها.',
      ],
      [
        'Turn on switches one at a time to hear different pitches, then combine them.',
        'شغّل المفاتيح واحدًا في كل مرة لتسمع نغمات مختلفة ثم اجمعها.',
        'شغّل المفاتيح واحد واحد عشان تسمع نغمات مختلفة وبعدها اخلطهم.',
      ],
    ],
    [
      'Each switch adds a tone. More than one switch at once creates a richer sound.',
      'كل مفتاح يضيف نغمة، والجمع بينها يعطي صوتًا أغنى.',
      'كل مفتاح بيضيف نغمة، والجمع بينهم بيدّي صوت أغنى.',
    ],
    {
      summary: [
        'Tone turns a four-bit number into sound. The pins are weighted 1, 2, 4 and 8.',
        'يحوّل Tone رقمًا ثنائيًا من أربع بتات إلى صوت، وأوزان المنافذ 1 و2 و4 و8.',
        'Tone بيحوّل رقم ثنائي من أربع بتات لصوت، وأوزان النقط 1 و2 و4 و8.',
      ],
      parts: ['Input', 'Tone'],
      program: 'input A\ninput B\ninput C\ninput D\ntone T A B C D',
    },
  ),
  r(
    'procedural',
    ['Describe a gate with an expression', 'صف بوابة بتعبير', 'وصف بوابة بتعبير'],
    'intermediate',
    [
      [
        'Place two Input switches, one Procedural part and one LED.',
        'ضع مفتاحين ومكوّن Procedural ومصباحًا.',
        'حط مفتاحين ومكوّن Procedural ولمبة.',
      ],
      [
        'Wire A and B into the Procedural inputs. Double-click it and enter A && B.',
        'وصّل A وB بمدخلي Procedural. انقر عليه مرتين وأدخل A && B.',
        'وصّل A وB بمداخل Procedural. دوس عليه مرتين واكتب A && B.',
      ],
      [
        'Wire Procedural → LED. It should behave exactly like an AND gate.',
        'وصّل Procedural بالمصباح. يجب أن يتصرف مثل بوابة AND تمامًا.',
        'وصّل Procedural باللمبة. المفروض يتصرّف زي بوابة AND بالظبط.',
      ],
    ],
    [
      'A && B behaves like AND. Try A || B for OR, or !A for NOT.',
      'التعبير A && B مثل AND. جرّب A || B لـ OR أو !A لـ NOT.',
      'التعبير A && B زي AND. جرّب A || B لـ OR أو !A لـ NOT.',
    ],
    {
      summary: [
        'A Procedural part evaluates a small expression. Use it when you want to describe logic in text.',
        'مكوّن Procedural يقيّم تعبيرًا صغيرًا، استخدمه لوصف المنطق نصيًا.',
        'مكوّن Procedural بيقيّم تعبير صغير، استخدمه لما تحب توصف المنطق بالكتابة.',
      ],
      parts: ['Input', 'Procedural', 'LED'],
      program: 'input A\ninput B\nprocedural P A B "A && B"\nled L P',
    },
  ),
  r(
    'motor',
    ['Switch a motor on and off', 'شغّل محركًا وأطفئه', 'شغّل موتور واطفيه'],
    'beginner',
    [
      ['Place an Input and a Motor.', 'ضع مدخلًا ومحركًا.', 'حط مدخل وموتور.'],
      [
        'Wire Input → Motor. The Motor is an output, so it has one white input pin.',
        'وصّل المدخل بالمحرك. المحرك خرج، لذا له منفذ إدخال أبيض واحد.',
        'وصّل المدخل بالموتور. الموتور خرج، فليه نقطة إدخال بيضا واحدة.',
      ],
      [
        'Click the Input in Interact mode and watch the motor spin and stop.',
        'انقر المدخل في وضع تفاعل وراقب المحرك يدور ويتوقف.',
        'دوس على المدخل في وضع استخدم وشوف الموتور بيلف ويقف.',
      ],
    ],
    [
      'Input 1 → motor spinning; Input 0 → motor stopped.',
      'المدخل 1: المحرك يدور. المدخل 0: المحرك متوقف.',
      'المدخل 1: الموتور بيلف. المدخل 0: الموتور واقف.',
    ],
    {
      summary: [
        'Outputs are not only LEDs. A Motor shows the same one-bit signal as motion.',
        'المخارج ليست مصابيح فقط. المحرك يعرض نفس الإشارة كحركة.',
        'المخارج مش لمبات بس. الموتور بيعرض نفس الإشارة كحركة.',
      ],
      parts: ['Input', 'Motor'],
      program: 'input A\nmotor M A',
    },
  ),
  r(
    'seven',
    ['Draw a digit with eight switches', 'ارسم رقمًا بثمانية مفاتيح', 'ارسم رقم بتمن مفاتيح'],
    'advanced',
    [
      [
        'Place two Dip Switches and one Seven Segment display.',
        'ضع مفتاحي Dip Switch وشاشة سبعة أقسام.',
        'حط ديب سويتشين وشاشة سفن سيجمنت.',
      ],
      [
        'Wire the first switch outputs to segments A–D and the second switch outputs to E–G and DP.',
        'وصّل مخارج المفتاح الأول بالقطاعات A–D والثاني بـ E–G وDP.',
        'وصّل مخارج السويتش الأول بالقطاعات A–D والتاني بـ E–G وDP.',
      ],
      [
        'Set segment B and C on and the rest off to draw 1. Then invent your own digit.',
        'شغّل القطاعين B وC وأطفئ الباقي لرسم 1، ثم ابتكر رقمًا.',
        'شغّل القطاعين B وC واطفي الباقي عشان ترسم 1، وبعدها اعمل رقم من عندك.',
      ],
    ],
    [
      'Only B+C on → 1. A+B+C+D+E+F on → 0.',
      'تشغيل B+C فقط يعطي 1، وتشغيل A+B+C+D+E+F يعطي 0.',
      'تشغيل B+C بس بيدّي 1، وتشغيل A+B+C+D+E+F بيدّي 0.',
    ],
    {
      summary: [
        'Seven-segment displays expose each segment as its own pin. This is the rawest way to draw a digit.',
        'شاشة السبعة أقسام تعرض كل قطاع كمنفذ مستقل، وهي أبسط طريقة لرسم رقم.',
        'شاشة السفن سيجمنت بتعرض كل قطاع كنقطة لوحده، ودي أبسط طريقة ترسم رقم.',
      ],
      parts: ['DipSwitch', 'SevenSegment'],
      program: 'dipswitch A\ndipswitch B\nsevenseg SEG A[0] A[1] A[2] A[3] B[0] B[1] B[2] B[3]',
    },
  ),
  r(
    'lookup',
    ['A tiny ROM lookup table', 'جدول بحث ROM صغير', 'جدول بحث ROM صغير'],
    'advanced',
    [
      [
        'Place ROM and configure address width 1, data width 4, and data A5.',
        'ضع ROM وحدد عرض العنوان 1 والبيانات 4 والقيم A5.',
        'حط ROM وحدّد عرض العنوان 1 والبيانات 4 والقيم A5.',
      ],
      [
        'Wire one switch to address pin 0 and four LEDs to data pins 0–3.',
        'وصّل مفتاحًا بمنفذ العنوان 0 وأربع مصابيح بمنافذ البيانات 0–3.',
        'وصّل مفتاح بمنفذ العنوان 0 وأربع لمبات بمنافذ البيانات 0–3.',
      ],
      [
        'Toggle the address. Read LEDs from data bit 3 down to data bit 0.',
        'بدّل العنوان واقرأ المصابيح من بت البيانات 3 إلى 0.',
        'بدّل العنوان واقرأ اللمبات من بت البيانات 3 لحد 0.',
      ],
    ],
    [
      'Address 0 → 1010; address 1 → 0101.',
      'العنوان 0 يعطي 1010 والعنوان 1 يعطي 0101.',
      'العنوان 0 يطلع 1010 والعنوان 1 يطلع 0101.',
    ],
    {
      summary: [
        'A ROM stores fixed data. Change the address and the data outputs change to the stored pattern.',
        'ذاكرة ROM تخزن بيانات ثابتة. غيّر العنوان فتتغير مخارج البيانات حسب النمط المخزن.',
        'ذاكرة ROM بتخزّن بيانات ثابتة. غيّر العنوان فتتغير مخارج البيانات حسب النمط المخزّن.',
      ],
      parts: ['Input', 'ROM', 'LED'],
      check: [
        'If all LEDs stay off, open the ROM properties and check address width 1, data width 4 and contents A5.',
        'إذا بقيت كل المصابيح مطفأة فافتح خصائص ROM وتأكد من عرض العنوان 1 وعرض البيانات 4 والقيم A5.',
        'لو كل اللمبات مطفية افتح خصائص ROM واتأكد من عرض العنوان 1 وعرض البيانات 4 والقيم A5.',
      ],
    },
  ),
];
