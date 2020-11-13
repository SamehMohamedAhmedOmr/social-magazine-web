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
      LOGOUT: 'تسجيل خروج',
      LAST_NEWS: 'آخر الأخبار',
      MOST_ARTICLE_VIEWED: 'أكثر المقالات مشاهدًة',
      MOST_ARTICLE_DOWNLOADED : 'أكثر المقالات تحميلًا'
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
			APP_NAME : 'مجلة مستقبل العلوم الاجتماعية',
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
			Delete_Body: 'هل انت متأكد من حذف {{name}} ذو الرقم التعريفي {{id}} ؟ ، سيتم حذفه نهائيًا!',
			Added_successfully : '{{name}} تم اضافته بنجاح',
			Edited_successfully : '{{name}} تم تعديله بنجاح',
			Deleted_successfully :  '{{name}} تم حذفه بنجاح',
			Item_not_found: '{{name}} غير موجود او تم حذفه',
			status_changed: 'تم تغيير التفعيل بنجاح',
			old_password : 'كلمة المرور الحالية',
			new_password : 'كلمة المرور الجديدة',
      more: 'المزيد'
		},


		stepper:{
			basic_data : 'البيانات الاساسية',
			additional_data : 'البيانات الاضافية',
			education_degree: "المستوى التعليمي",
			vision_mission: 'الرؤية و الرسالة',
			next: 'التالي',
			back:'رجوع',
			error:"من فضلك ادخل البيانات المطلوبة"
		},

    footer:{
		  copyright:'حقوق الطبع والنشر',
      all_right_saved:'كل الحقوق محفوظة.',
      visitor_number: 'انت الزائر رقم',
    }



	}
};

