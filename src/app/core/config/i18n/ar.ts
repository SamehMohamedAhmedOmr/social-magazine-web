// Germany
export const locale = {
	lang: 'ar',
	data: {


		VALIDATION: {
			INVALID: '{{name}} غير صحيح',
			REQUIRED: '{{name}} مطلوب',
			REQUIRED_F: '{{name}} مطلوبة',
			MIN_LENGTH: '{{name}} الحد الادني لعدد الحروف هو {{min}}',
			AGREEMENT_REQUIRED: 'Accepting terms & conditions are required',
			NOT_FOUND: '{{name}} غير موجود لدينا',
			INVALID_LOGIN: 'The login detail is incorrect',
			REQUIRED_FIELD: 'مطلوب',
			MIN_LENGTH_FIELD: 'اقل عدد من الحروف هو:',
			MAX_LENGTH_FIELD: 'أكبر عدد من الحروف هو:',
			INVALID_FIELD: '{{name}} غير صحيح',
		},

    PAGES:{
		  HOME:'الرئيسية',
      ARCHIVE: 'الأرشيف',
      ABOUT: 'عن المجلة',
      WHO_IS_US: 'من نحن',
      TESTIMONIAL: 'قالوا عننا',
      ADVISORY_BODY: 'الهيئة الاستشارية',
      PUBLICATION_RULES: 'شروط النشر',
      MAGAZINE_CATEGORY: 'التصنيف',
      SEND_ARTICLE: 'ارسال مقالة',
      CONTACT_US : 'تواصل معنا',
      LOGIN: 'تسجيل الدخول',
      REGISTER: 'انشاء حساب',
      HELLO: 'مرحبا',
      ACCOUNT: 'حسابي',
      MY_ARTICLE: 'مقالاتي',
      LOGOUT: 'تسجيل الخروج',
      LAST_NEWS: 'آخر الأخبار',
      MOST_NEWS_VIEWED: 'أكثر الأخبار مشاهدًة',
      MOST_ARTICLE_DOWNLOADED : 'أكثر المقالات تحميلًا',
      NEWS:'الأخبار',
    },

		Components: {
			item_per_page: 'عدد العناصر في كل صفحة',
			filter_by: 'تصفية بواسطة',
			actions: 'الاجراءات',
			all: 'الكل',
			marked: 'المختار',
			active: 'مفعل',
			is_active: 'غير مفعل',
			items: 'عنصر',
			id: 'الرقم المسلسل',
			options: 'الاعدادات',
			Edit: 'تعديل',
			Details: 'التفاصيل',
			Delete: 'حذف',
			Close: 'اغلاق',
			Search: 'بحث',
			ItemNotFound: 'لا يوجد نتائج',
			Images: 'الصور',
			STOCK: 'المخازن',
			status: 'الحالة',
			date: 'التاريخ',
			Select: 'اختار',
			export: 'تصدير',
			no_image:'لا يوجد صوره',

			WHO_IS_US: {
				name: 'من نحن',
				single: 'المحتوى',
				columns: {
				}
			},

			PUBLICATION_RULE: {
				name: 'شروط النشر',
				single: 'شرط النشر',
				columns: {
				}
			},

			ADVISORY_BODY: {
				name: 'الهيئة الاستشارية',
				single: 'عضو في الهيئة الاستشارية',
				columns: {
					job: 'الوظيفة'
				}
			},

			MAGAZINE_CATEGORY: {
				name: 'التصنيف',
				single: 'التصنيف',
				columns: {
				},
				add_image :'اضافة صور للتصنيف'
			},

			MAGAZINE_NEWS: {
				name: 'الاخبار',
				single: 'الخبر',
				columns: {
				},
				add_image :'اضافة صور للاخبار'
			},

			TESTIMONIAL: {
				name: 'قالوا عننا',
				single: 'التوصية',
				columns: {
					image: 'صورة',
					evaluate: 'التقييم',
					stars: 'النجوم'
				},
				add_image :'اضافة صورة للتوصية'
			},

			MAGAZINE_GOAL: {
				name: 'اهداف المجلة',
				single: 'الهدف',
				columns: {
				}
			},

			MAGAZINE_INFORMATION: {
				name: 'معلومات عن المجلة',
				columns: {
					vision: 'الرؤية',
					mission: 'الرسالة',
					fax_number: 'رقم الفاكس',
					postal_code: 'الكود البريدي',
					whatsapp: 'واتساب',
				}
			},

			USERS: {
				users: 'المستخدمين',
				single: 'المستخدم',
				MAGAZINE_EDITOR_MANAGER: 'رؤساء التحرير',
				JOURNAL_EDITOR_DIRECTOR: 'مديرين التحرير',
				REFEREES: 'المحكمين',
				RESEARCHER: 'الباحثين',

				MAGAZINE_EDITOR_MANAGER_SINGLE: 'رئيس التحرير',
				JOURNAL_EDITOR_DIRECTOR_SINGLE: 'مدير التحرير',
				REFEREES_SINGLE: 'محكم',
				RESEARCHER_SINGLE: 'باحث',

				profile: 'الملف الشخصي',
				change_password : 'تغيير كلمة المرور',
				columns: {
					first_name: 'الاسم الاول',
					family_name: 'اسم العائلة',
					alternative_email: 'البريد الالكتروني البديل',
					country: 'البلد',
					gender: 'النوع',
					title: 'اللقب',
					educational_level: 'المستوى التعليمي',
					educational_degree: 'الدرجة العلمية',
					educational_field: 'مجال الدراسة',
					university: 'الجامعة',
					faculty: 'الكلية',
					fax_number: 'رقم الفاكس',
					account_type: 'نوع الحساب'
				},
				change_type: 'تم تغيير نوع المستخدم الى {{name}} بنجاح',
				change_account_type : 'تغيير نوع الحساب'
			},

			Gallery: {
				name: 'المعرض',
				single: 'الصورة',
				images: 'صور',
				columns: {
				},
				view_image: 'عرض الصورة',
				upload:'رفع',
				no_images : 'لا يوجد صورة ف المعرض حتى الان',
				save_selected_images : 'حفظ الصور المختاره',
				guide_msg: 'ملاحظة :: يجب ان تختار {{image}} ثم تضغط هلى {{save_selected_images}}',
				delete_image : 'حذف الصورة',
				delete_image_body : 'هل انت متأكد ؟ سيتم حذف الصورة نهائيا!',
				open_gallery : 'فتح المعرض'
			},

		},

		BASIC:{
			APP_NAME : 'الجمعية العربية للتنمية البشرية والبيئية',
			ADMIN_PANEL : "لوحة التحكم",
		},

		COMMON:{
			id: 'الرقم التعريفي',
			in_active : 'غير مفعل',
			active : 'مفعل',
			activation: 'التفعيل',

			activation_button: 'تفعيل',
			deactivation_button: 'تعطيل',

			email : 'البريد الالكتروني',
			password : 'كلمة المرور',
			remember_me : 'تذكرني',
			password_confirmation: 'تأكيد كلمة المرور',
			forget_password: 'هل نسيت كلمة المرور ؟',
			reset_password: 'اعادة تعيين كلمة المرور',
			token : 'الرمز',
			content: 'المحتوى',
			name : 'الاسم',
			title : 'العنوان',
			images: 'الصور',
			image : 'الصورة',
			phone: 'الهاتف',
			address: 'العنوان',
			visitors: 'الزوار',
			no_record_found : 'لا يوجد بيانات',
			visit_number : 'عدد الزيارات',
			clear_form : 'اعادة تعيين الصفحة',
			Add_Button: 'اضافة {{name}}',
			Edit_Button: 'تعديل {{name}}',
			Delete_Title: 'حذف {{name}}',
			Delete_Button: 'حذف',
			Delete_Body: 'هل انت متأكد من حذف {{name}} ؟ ، سيتم حذفه نهائيًا!',
			Added_successfully : '{{name}} تم اضافته بنجاح',
			Edited_successfully : '{{name}} تم تعديله بنجاح',
			Deleted_successfully :  '{{name}} تم حذفه بنجاح',
			Item_not_found: '{{name}} غير موجود او تم حذفه',
			status_changed: 'تم تغيير التفعيل بنجاح',
			old_password : 'كلمة المرور الحالية',
			new_password : 'كلمة المرور الجديدة',
      more: 'المزيد',
      view: 'مشاهدة',
      attachment: 'مرفقات',
		},


		stepper:{
			basic_data : 'البيانات الاساسية',
			additional_data : 'البيانات الاضافية',
			education_degree: "المستوى التعليمي",
			vision_mission: 'الرؤية و الرسالة',
			next: 'التالي',
      continue: 'متابعة',
      back:'رجوع',
			error:"من فضلك ادخل البيانات المطلوبة"
		},

    footer:{
		  copyright:'حقوق الطبع والنشر',
      all_right_saved:'كل الحقوق محفوظة.',
      visitor_number: 'انت الزائر رقم',
    },

    login:{
		  new_customer: 'مستخدم جديد',
      sign_in_msg: 'قم بالتسجيل للحصول على حساب مجاني في موقعنا. تسجيل سريع وسهل. لبدء رحلتك انقر فوق انشاء حساب.',
      success: 'تم تسجيل الدخول بنجاح',
    },

    register:{
      success: 'تم انشاء الحساب بنجاح',
    },

    logout:{
      success: 'تم تسجيل الخروج بنجاح',
    },

    profile:{
      success: 'تم تعديل الملف بنجاح',
    },

    error: 'خطأ',

    submit_article:{
		  navigation:{
		    type_title: 'نوع و عنوان المقالة',
        content_keywords: 'المستخلص و الكلمات الرئيسية',
        manage_authors: 'اضافة / حذف مؤلفين',
        authors:'المؤلفون',
        suggested_judges: 'المحكمون المقترحون',
        attachments: 'الملفات المرفقة',
        confirm: 'الانتهاء من ارسال المقالة',
        continue: 'اكمال المقال',
      },
      form:{
        article_type: 'نوع المقالة',
        title_ar: 'العنوان باللغة العربية',
        title_en: 'العنوان باللغة الانجليزية',
        content_ar: 'المستخلص باللغة العربية',
        content_en: 'المستخلص باللغة الانجليزية',
        keywords_en: 'الكلمات الرئيسية باللغة الانجليزية',
        keywords_ar: 'الكلمات الرئيسية باللعة العربية',
        description: 'وصف الملف',
        code: 'كود المقال',
        status: 'الحالة',
        attachment_type: 'نوع الملف',
        file: 'مرفق',
        file_title:'اسم المرفق',
        save: 'حفظ',
        cancel: 'الغاء',
        options: 'خيارات',
        delete: 'حذف',
        series: 'مسلسل',
        judge:'محكم',
        author:'مؤلف',
        attachment:'مرفق',
        article_summary: 'نبذة مختصرة عن مقالتك',
        send_article: 'ارسال مقالة',
      },
      msg:{
		    add_author_success: 'تم اضافة المؤلف بنجاح',
        delete_author_success: 'تم حذف المؤلف بنجاح',
        add_suggested_judge_success: 'تم اضافة المحكم المقترح بنجاح',
        delete_suggested_judge_success: 'تم حذف المحكم المقترح بنجاح',
        add_attachments_success: 'تم اضافة الملف المرفق بنجاح',
        delete_attachments_success: 'تم حذف الملف المرفق بنجاح',
        add_article_success: 'تم اضافة المقال بنجاح',
        complete_profile_data: 'من فضلك اكمل بيانتك الشخصية الناقصة من ',
        login_required: 'يجب ان تقوم بتسجيل الدخول اولا ',
        here: 'هنا',
      },
      toast_title: {
        add_author: 'اضافة المؤلف',
        delete_author: 'حذف المؤلف ',
        add_suggested_judge: 'اضافة المحكم المقترح',
        delete_suggested_judge: 'حذف المحكم المقترح',
        add_attachment: 'اضافة الملف المرفق',
        delete_attachment: 'حذف الملف المرفق',
        add_article: 'اضافة المقال',
      }

    }


	}
};

