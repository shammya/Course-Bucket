--------------------------------------------------------
--  File created - Sunday-August-22-2021   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Sequence AUTO_ID
--------------------------------------------------------

   CREATE SEQUENCE  "COURSEBUCKET"."AUTO_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 23 NOCACHE  NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Sequence AUTO_ID1
--------------------------------------------------------

   CREATE SEQUENCE  "COURSEBUCKET"."AUTO_ID1"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 23 NOCACHE  NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Sequence NOTIFICATION_ID
--------------------------------------------------------

   CREATE SEQUENCE  "COURSEBUCKET"."NOTIFICATION_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 107 NOCACHE  NOORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Sequence id
--------------------------------------------------------

   CREATE SEQUENCE  "COURSEBUCKET"."id"  MINVALUE 1 MAXVALUE 1000000 INCREMENT BY 1 START WITH 1 CACHE 10 ORDER  NOCYCLE ;
--------------------------------------------------------
--  DDL for Table ADMIN
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."ADMIN" 
   (	"ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CATEGORY
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."CATEGORY" 
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(50 BYTE), 
	"PARENT_ID" NUMBER, 
	"PHOTO_ID" NUMBER, 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table COUNTRY
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."COUNTRY" 
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(30 BYTE), 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table COURSE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."COURSE" 
   (	"ID" NUMBER, 
	"TITLE" VARCHAR2(200 BYTE), 
	"SUBTITLE" VARCHAR2(200 BYTE), 
	"DESCRIPTION" VARCHAR2(4000 BYTE), 
	"PRICE" NUMBER, 
	"OFFER" NUMBER, 
	"PUBLISH_DATE" DATE, 
	"IS_APPROVED" VARCHAR2(5 BYTE), 
	"TEACHER_ID" VARCHAR2(50 BYTE), 
	"COVER_ID" NUMBER, 
	"CATEGORY_ID" NUMBER, 
	"PREREQUISITES" VARCHAR2(4000 BYTE), 
	"OUTCOMES" VARCHAR2(4000 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table COURSE_LANGUAGE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."COURSE_LANGUAGE" 
   (	"ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"LANGUAGE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table COURSE_PROPERTIES
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."COURSE_PROPERTIES" 
   (	"ID" NUMBER, 
	"ICON_ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"TEXT" VARCHAR2(4000 BYTE), 
	"POSITION" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table CREDIT_CARD
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."CREDIT_CARD" 
   (	"ID" NUMBER, 
	"CARD_NO" NUMBER, 
	"NAME_ON_CARD" VARCHAR2(50 BYTE), 
	"EXPIRE_DATE" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table DESIGNATION
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."DESIGNATION" 
   (	"ID" NUMBER, 
	"TYPE" VARCHAR2(50 BYTE), 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table EDUCATIONAL_STATUS
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" 
   (	"ID" NUMBER, 
	"TYPE" VARCHAR2(50 BYTE), 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table FAQ
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."FAQ" 
   (	"ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"STUDENT_ID" VARCHAR2(50 BYTE), 
	"QUESTION" VARCHAR2(4000 BYTE), 
	"QUESTION_TIME" DATE, 
	"ANSWER" VARCHAR2(4000 BYTE), 
	"ANSWER_TIME" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table FILES
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."FILES" 
   (	"ID" NUMBER, 
	"TYPE" NUMBER, 
	"TITLE" VARCHAR2(4000 BYTE), 
	"CONTENT" VARCHAR2(4000 BYTE), 
	"UPLOAD_TIME" DATE, 
	"LAST_UPDATE" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table FILE_TYPE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."FILE_TYPE" 
   (	"ID" NUMBER, 
	"TYPE" VARCHAR2(50 BYTE), 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table LANGUAGE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."LANGUAGE" 
   (	"ID" NUMBER, 
	"NAME" VARCHAR2(50 BYTE), 
	"ADMIN_ID" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table LECTURE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."LECTURE" 
   (	"ID" NUMBER, 
	"LECTURE_NO" NUMBER, 
	"TITLE" VARCHAR2(200 BYTE), 
	"LAST_UPDATE" DATE, 
	"IS_PREVIEW" CHAR(1 BYTE), 
	"WEEK_ID" NUMBER, 
	"FILE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table MESSAGE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."MESSAGE" 
   (	"ID" NUMBER, 
	"SENDER_ID" VARCHAR2(50 BYTE), 
	"RECEIVER_ID" VARCHAR2(50 BYTE), 
	"FILE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table NOTIFICATION
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."NOTIFICATION" 
   (	"ID" NUMBER, 
	"USER_ID" VARCHAR2(50 BYTE), 
	"FROM_ID" VARCHAR2(50 BYTE), 
	"TIME" DATE, 
	"SEEN" VARCHAR2(5 BYTE), 
	"COURSE_ID" NUMBER, 
	"TYPE" VARCHAR2(50 BYTE), 
	"EVENT_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PERSON
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."PERSON" 
   (	"ID" VARCHAR2(50 BYTE), 
	"EMAIL" VARCHAR2(200 BYTE), 
	"PASSWORD" VARCHAR2(200 BYTE), 
	"FIRST_NAME" VARCHAR2(50 BYTE), 
	"LAST_NAME" VARCHAR2(50 BYTE), 
	"DOB" DATE, 
	"INSTITUTION" VARCHAR2(200 BYTE), 
	"FB_URL" VARCHAR2(200 BYTE), 
	"LINKEDIN_URL" VARCHAR2(200 BYTE), 
	"SIGNUP_DATE" DATE, 
	"ABOUT" VARCHAR2(4000 BYTE), 
	"COUNTRY_ID" NUMBER, 
	"PHOTO_ID" NUMBER, 
	"CARD_ID" NUMBER, 
	"YOUTUBE_URL" VARCHAR2(200 BYTE), 
	"WEBSITE" VARCHAR2(200 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PERSON_LANGUAGE
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."PERSON_LANGUAGE" 
   (	"ID" NUMBER, 
	"PERSON_ID" VARCHAR2(50 BYTE), 
	"LANGUAGE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table PURCHASE_HISTORY
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."PURCHASE_HISTORY" 
   (	"ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"STUDENT_ID" VARCHAR2(50 BYTE), 
	"TIME" DATE, 
	"COST" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table RATING
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."RATING" 
   (	"ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"STUDENT_ID" VARCHAR2(50 BYTE), 
	"VALUE" NUMBER, 
	"TIME" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table REVIEW
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."REVIEW" 
   (	"ID" NUMBER, 
	"COURSE_ID" NUMBER, 
	"STUDENT_ID" VARCHAR2(50 BYTE), 
	"TIME" DATE, 
	"TEXT" VARCHAR2(4000 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table SLIDER
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."SLIDER" 
   (	"ID" NUMBER, 
	"FILES_ID" NUMBER, 
	"ADMIN_ID" VARCHAR2(255 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table STUDENT
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."STUDENT" 
   (	"ID" VARCHAR2(50 BYTE), 
	"EDU_STATUS_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table TEACHER
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."TEACHER" 
   (	"ID" VARCHAR2(50 BYTE), 
	"DESIGNATION_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Table WEEK
--------------------------------------------------------

  CREATE TABLE "COURSEBUCKET"."WEEK" 
   (	"ID" NUMBER, 
	"WEEK_NO" NUMBER, 
	"TITLE" VARCHAR2(200 BYTE), 
	"LAST_UPDATE" DATE, 
	"COURSE_ID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
REM INSERTING into COURSEBUCKET.ADMIN
SET DEFINE OFF;
Insert into COURSEBUCKET.ADMIN (ID) values ('admin');
Insert into COURSEBUCKET.ADMIN (ID) values ('mehedi');
Insert into COURSEBUCKET.ADMIN (ID) values ('shammya');
REM INSERTING into COURSEBUCKET.CATEGORY
SET DEFINE OFF;
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (21,'PowerPoint',20,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (22,'Excel',20,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (30,'Database',29,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (31,'Data Science',29,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (1,'Category',null,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (15,'3D and Animation',12,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (10,'Game Development',8,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (16,'Business',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (23,'Word',20,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (32,'IT and Software',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (9,'App Development',8,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (19,'Management',16,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (24,'Teaching & Academics',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (27,'English',24,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (28,'Engineering',24,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (5,'C#',2,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (3,'C',2,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (4,'C++',2,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (2,'Computer Programming',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (6,'Java',2,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (7,'Python',2,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (12,'Design',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (17,'Entrepreneurship',16,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (18,'Communication',16,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (25,'Science',24,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (26,'Math',24,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (8,'Development',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (11,'Web Development',8,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (13,'Web Design',12,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (14,'Game Design',12,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (20,'Office Productivity',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (29,'Data Engineering',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (33,'Network and Security',32,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (34,'Hardware',32,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (35,'Architecture',12,null,'shammya');
REM INSERTING into COURSEBUCKET.COUNTRY
SET DEFINE OFF;
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (1,'Bangladesh','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (3,'Turky','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (2,'Kuwet','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (4,'Bhutan','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (5,'Afganistan','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (6,'Egypt','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (7,'Soudi Arabia','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (8,'Pakistan','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (9,'Iraq','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (10,'Palastine','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (11,'China','shammya');
REM INSERTING into COURSEBUCKET.COURSE
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (5,'C# programming Language ','Learn from complete scratch','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',0,8,to_date('19-AUG-21','DD-MON-RR'),'F','rifat',50,5,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (9,'Full Stack Android Development and Mobile App Marketing','Learn java, android, android studio, android development, android app development, app monetization and grow your sales','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,30,to_date('19-AUG-21','DD-MON-RR'),'T','rifat',98,9,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (7,'React - The Complete Guide (incl Hooks, React Router, Redux)','Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,12,to_date('19-AUG-21','DD-MON-RR'),'F','sumit',74,11,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (10,'Mastering Architecture and Real Estate Photography','Start a business photographing real estate photography jobs for architects, builders, and real estate agents','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,15,to_date('20-AUG-21','DD-MON-RR'),'F','papon',110,35,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (2,'C ++ programming Language ','Master c++ from scratch to pro','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,18,to_date('20-AUG-21','DD-MON-RR'),'T','tanzima',14,4,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (3,'Java programming Language ','From Absolute beginner to advanced','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',10000,24,to_date('18-AUG-21','DD-MON-RR'),'F','rifat',26,6,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (4,'Python programming Language ','Masterclass programming course','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,8,to_date('21-AUG-21','DD-MON-RR'),'F','papon',38,7,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (6,'Node.js, Express, MongoDB & More: The Complete Bootcamp 2021','Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',0,8,to_date('21-AUG-21','DD-MON-RR'),'T','sumit',62,11,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (1,'C programming Language ','From beginner to expert','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,10,to_date('21-AUG-21','DD-MON-RR'),'T','ashikur',2,3,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (8,'spring Framework for Beginners with Spring Boot','In this course, you will learn the highly demanded frameworks of enterprise world: Spring Framework 5 with Spring Boot','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,20,to_date('22-AUG-21','DD-MON-RR'),'T','papon',86,11,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (11,'Autodesk Revit - beginner to an intermediate level','Includes 15 quizzes & a Final Exam. For users of Revit 2016, 2017, 2018, 2019, 2020 & 2021.','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',0,0,to_date('22-AUG-21','DD-MON-RR'),'T','kashem',122,35,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (25,'[2021] The Complete Management Skills Certification Course','Used at Amazon®, Unilever®, Walmart®, and other top firms. Learn leadership, productivity, communication skills & more!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',4000,20,to_date('20-AUG-21','DD-MON-RR'),'F','sohel',290,19,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (15,'The Complete Presentation and Public Speaking/Speech Course','From page to stage; learn everything you need to know about giving a great speech for business & personal presentations.','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,10,to_date('19-AUG-21','DD-MON-RR'),'F','maleq',170,18,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (19,'Learn Ethical Hacking From Scratch','Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',0,0,to_date('20-AUG-21','DD-MON-RR'),'F','rohel',218,33,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (22,'Arduino Step by Step: Getting Started','The original comprehensive course designed for new Arduino Makers','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,0,to_date('20-AUG-21','DD-MON-RR'),'F','razi',254,34,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (24,'Java Fx Concepts Bootcamp 2021','In 2021 Learn JavaFx with concepts and practical examples to create awesome graphics then take this course.','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,20,to_date('17-AUG-21','DD-MON-RR'),'F','sohel',278,6,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (12,'Complete Blender Creator: Learn 3D Modelling for Beginners','Use Blender to Create Beautiful 3D models for Video Games, 3D Printing & More. Beginners Level Course','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,0,to_date('23-AUG-21','DD-MON-RR'),'F','kashem',134,15,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (14,'Identify & Define the Problem with Business Analysis','Use business analysis techniques to identify a business pain point, find its root cause, and sell the value of fixing it','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',0,0,to_date('22-AUG-21','DD-MON-RR'),'F','ashikur',158,17,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (17,'Structural Engineering','Get all Fundamentals knowledge about the Structural Engineering, Load, Forces, Column, Beam, Slab, Footing, SF, BM etc','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,20,to_date('21-AUG-21','DD-MON-RR'),'T','sourav',194,28,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (26,'Discrete Mathematics','Master Discrete Math for Computer Science and Mathematics Students','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,20,to_date('22-AUG-21','DD-MON-RR'),'F','tanzima',302,26,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (13,'Business Analysis Modeling Skills & Techniques','Learn to create Process Flowcharts, User Stories, Use Cases, SWOT, RACI Matrices, Org Charts, User Stories, and more!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,0,to_date('23-AUG-21','DD-MON-RR'),'T','maleq',146,19,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (16,'Django 2.2 & Python | The Ultimate Web Development Bootcamp','Build three complete websites, learn back and front-end web development, and publish your site online with DigitalOcean','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,20,to_date('19-AUG-21','DD-MON-RR'),'F','papon',182,11,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (18,'Aerospace Engineering: Rocket Science and Engineering','Have the knowledge of a rocket scientist and learn how to deal with complex equations critical to rocket propulsion!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',10000,20,to_date('20-AUG-21','DD-MON-RR'),'F','sourav',206,28,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (20,'Practical Ethical Hacking - The Complete Course','Learn how to hack like a pro by a pro. Up to date practical hacking techniques with absolutely no filler.','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,15,to_date('20-AUG-21','DD-MON-RR'),'F','rohel',230,33,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (21,'Microsoft Excel - Excel from Beginner to Advanced','Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',2000,0,to_date('20-AUG-21','DD-MON-RR'),'F','ashikur',242,22,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (23,'Master Microcontroller and Embedded Driver Development(MCU1)','Learn bare metal driver development using Embedded C: Writing drivers for STM32 GPIO,I2C,SPI,USART from scratch','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,10,to_date('20-AUG-21','DD-MON-RR'),'F','razi',266,34,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (28,'Maya for Beginners: Complete Guide to 3D Animation in Maya','Learn everything you need for 3D animation in Autodesk Maya: Modeling, Texturing, Lighting, Rigging, Animation, Dynamics','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,10,to_date('20-AUG-21','DD-MON-RR'),'F','ashikur',326,15,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (32,'Master Microsoft Word Beginner to Advanced','Master the most popular Word Processing tool, Microsoft Word. Microsoft Word 2010, Word 2013, Word 2016, Word 2019','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,30,to_date('20-AUG-21','DD-MON-RR'),'F','sohel',374,23,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (37,'The Data Science Course 2021: Complete Data Science Bootcamp','Complete Data Science Training: Mathematics, Statistics, Python, Advanced Statistics in Python, Machine & Deep Learning','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',10000,20,to_date('20-AUG-21','DD-MON-RR'),'F','ashikur',434,31,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (27,'Fourier Series in Mathematics – Engineering Mathematics','Learn fourier series Basic to Advanced','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,20,to_date('20-AUG-21','DD-MON-RR'),'F','maleq',314,26,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (30,'Operating System Project - Develop Heap Memory Manager in C','Operating System UG/PG Seminar Projects in C on Windows/Linux Platforms, Memory Management, System Programming, Linux.','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,20,to_date('20-AUG-21','DD-MON-RR'),'F','navin',350,33,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (35,'The Ultimate Guide to Game Development with Unity 2021','Created in partnership with Unity Technologies: learn C# by developing 2D & 3D games with this comprehensive guide','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',6000,10,to_date('20-AUG-21','DD-MON-RR'),'F','navin',410,10,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (31,'Beginner to Pro in PowerPoint: Complete PowerPoint Training','PowerPoint lessons that are easy to apply at work! Become the top PowerPoint user in your office. #1 PowerPoint training','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,10,to_date('20-AUG-21','DD-MON-RR'),'F','navin',362,21,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (36,'The Complete Oracle SQL Bootcamp (2021)','Become an In-demand SQL Professional & Pass Oracle SQL 1Z0-071 (OCA) Certification Exam Confidently!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',4996,20,to_date('20-AUG-21','DD-MON-RR'),'F','ashikur',422,30,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (29,'Linux Operating System with Shell from Scratch for Beginners','Learn the Linux Command Line from Scratch and hound your Skills towards becoming a Master','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,20,to_date('20-AUG-21','DD-MON-RR'),'F','rifat',338,33,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (33,'GUI Development with Python and Tkinter','Master Python GUI development using Tkinter to build desktop applications!','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',3000,10,to_date('20-AUG-21','DD-MON-RR'),'F','ashikur',386,7,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (34,'Unreal Engine C++ Developer: Learn C++ and Make Video Games','Created in collaboration with Epic Games. Learn C++ from basics while making your first 4 video games in Unreal','Become a Python Programmer and learn one of employer''s most requested skills of 2021!

This is the most comprehensive, yet straight-forward, course for the Python programming language on Udemy! Whether you have never programmed before, already know basic syntax, or want to learn about the advanced features of Python, this course is for you! In this course we will teach you Python 3.

With over 100 lectures and more than 21 hours of video this comprehensive course leaves no stone unturned! This course includes quizzes, tests, coding exercises and homework assignments as well as 3 major projects to create a Python project portfolio!

Learn how to use Python for real-world tasks, such as working with PDF Files, sending emails, reading Excel files, Scraping websites for informations, working with image files, and much more!

This course will teach you Python in a practical manner, with every lecture comes a full coding screencast and a corresponding code notebook! Learn in whatever manner is best for you!

We will start by helping you get Python installed on your computer, regardless of your operating system, whether its Linux, MacOS, or Windows, we''ve got you covered.

We cover a wide variety of topics, including:

Command Line Basics

Installing Python

Running Python Code

Strings

Lists 

Dictionaries

Tuples

Sets

Number Data Types

Print Formatting

Functions

Scope

args/kwargs

Built-in Functions

Debugging and Error Handling

Modules

External Modules

Object Oriented Programming

Inheritance

Polymorphism

File I/O

Advanced Methods

Unit Tests

and much more!

You will get lifetime access to over 100 lectures plus corresponding Notebooks for the lectures!

This course comes with a 30 day money back guarantee! If you are not satisfied in any way, you''ll get your money back. Plus you will keep access to the Notebooks as a thank you for trying out the course!

So what are you waiting for? Learn Python in a way that will advance your career and increase your knowledge, all in a fun and practical way!',5000,10,to_date('20-AUG-21','DD-MON-RR'),'F','tanzima',398,10,'Access to computer and internet connection><Basic programming knowledge><Fundamental Mathematics><English as a learning language ><','Learn to use Python professionally, learning both Python 2 and Python 3!>< Create games with Python, like Tic Tac Toe and Blackjack!><Learn advanced Python features, like the collections module and how to work with timestamps!><Learn to use Object Oriented Programming with classes!><Understand complex topics, like decorators.>< Understand how to use both the Jupyter Notebook and create .py files>< Get an understanding of how to create GUIs in the Jupyter Notebook system!><Build a complete understanding of Python from the ground up!><');
REM INSERTING into COURSEBUCKET.COURSE_LANGUAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (25,11,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (26,11,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (27,12,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (28,12,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (34,16,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (35,17,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (36,17,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (39,19,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (40,19,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (49,23,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (50,23,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (61,28,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (62,28,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (71,33,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (72,33,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (73,33,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (77,35,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (78,35,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (12,5,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (13,5,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (16,7,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (17,7,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (33,15,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (37,18,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (38,18,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (48,22,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (54,25,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (55,25,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (56,26,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (57,26,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (74,34,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (75,34,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (76,34,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (79,36,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (80,36,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (1,1,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (2,1,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (3,2,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (4,2,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (5,2,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (6,3,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (7,3,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (8,3,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (29,13,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (30,13,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (41,20,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (42,20,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (43,20,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (44,20,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (45,20,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (58,27,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (59,27,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (60,27,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (69,32,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (70,32,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (9,4,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (10,4,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (11,4,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (14,6,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (15,6,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (18,8,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (19,8,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (20,9,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (21,9,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (31,14,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (32,14,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (46,21,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (47,21,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (63,29,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (64,30,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (65,30,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (81,37,7);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (82,37,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (83,37,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (84,37,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (22,10,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (23,10,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (24,10,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (51,24,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (52,24,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (53,24,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (66,31,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (67,31,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (68,31,2);
REM INSERTING into COURSEBUCKET.COURSE_PROPERTIES
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (27,58,5,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (28,59,5,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (29,60,5,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (30,61,5,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (61,128,11,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (62,129,11,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (63,130,11,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (64,131,11,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (65,132,11,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (66,133,11,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (67,140,12,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (68,141,12,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (69,142,12,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (70,143,12,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (71,144,12,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (72,145,12,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (91,188,16,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (92,189,16,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (93,190,16,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (94,191,16,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (95,192,16,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (96,193,16,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (97,200,17,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (98,201,17,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (99,202,17,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (100,203,17,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (101,204,17,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (102,205,17,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (109,224,19,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (110,225,19,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (111,226,19,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (112,227,19,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (113,228,19,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (114,229,19,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (133,272,23,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (134,273,23,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (135,274,23,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (136,275,23,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (137,276,23,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (138,277,23,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (163,332,28,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (164,333,28,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (165,334,28,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (166,335,28,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (167,336,28,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (168,337,28,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (193,392,33,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (194,393,33,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (195,394,33,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (196,395,33,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (197,396,33,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (198,397,33,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (205,416,35,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (206,417,35,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (207,418,35,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (208,419,35,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (209,420,35,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (210,421,35,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (25,56,5,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (26,57,5,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (37,80,7,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (38,81,7,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (39,82,7,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (40,83,7,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (41,84,7,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (42,85,7,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (85,176,15,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (86,177,15,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (87,178,15,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (88,179,15,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (89,180,15,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (90,181,15,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (103,212,18,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (104,213,18,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (105,214,18,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (106,215,18,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (107,216,18,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (108,217,18,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (127,260,22,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (128,261,22,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (129,262,22,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (130,263,22,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (131,264,22,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (132,265,22,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (145,296,25,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (146,297,25,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (147,298,25,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (148,299,25,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (149,300,25,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (150,301,25,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (151,308,26,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (152,309,26,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (153,310,26,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (154,311,26,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (155,312,26,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (156,313,26,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (199,404,34,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (200,405,34,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (201,406,34,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (202,407,34,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (203,408,34,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (204,409,34,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (211,428,36,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (212,429,36,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (213,430,36,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (214,431,36,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (215,432,36,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (216,433,36,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (7,20,2,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (8,21,2,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (9,22,2,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (10,23,2,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (11,24,2,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (12,25,2,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (13,32,3,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (14,33,3,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (15,34,3,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (16,35,3,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (17,36,3,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (18,37,3,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (73,152,13,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (74,153,13,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (75,154,13,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (76,155,13,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (77,156,13,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (78,157,13,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (115,236,20,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (116,237,20,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (117,238,20,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (118,239,20,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (119,240,20,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (120,241,20,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (157,320,27,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (158,321,27,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (159,322,27,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (160,323,27,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (161,324,27,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (162,325,27,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (187,380,32,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (188,381,32,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (189,382,32,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (190,383,32,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (191,384,32,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (192,385,32,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (19,44,4,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (20,45,4,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (21,46,4,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (22,47,4,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (23,48,4,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (24,49,4,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (31,68,6,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (32,69,6,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (33,70,6,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (34,71,6,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (35,72,6,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (36,73,6,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (49,104,9,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (50,105,9,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (51,106,9,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (52,107,9,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (53,108,9,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (54,109,9,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (79,164,14,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (80,165,14,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (81,166,14,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (82,167,14,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (83,168,14,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (84,169,14,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (121,248,21,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (122,249,21,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (123,250,21,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (124,251,21,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (125,252,21,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (126,253,21,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (169,344,29,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (170,345,29,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (171,346,29,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (172,347,29,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (173,348,29,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (174,349,29,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (175,356,30,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (176,357,30,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (177,358,30,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (178,359,30,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (179,360,30,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (180,361,30,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (217,440,37,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (218,441,37,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (219,442,37,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (220,443,37,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (221,444,37,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (222,445,37,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (1,8,1,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (2,9,1,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (3,10,1,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (4,11,1,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (5,12,1,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (6,13,1,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (43,92,8,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (44,93,8,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (45,94,8,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (46,95,8,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (47,96,8,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (48,97,8,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (55,116,10,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (56,117,10,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (57,118,10,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (58,119,10,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (59,120,10,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (60,121,10,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (139,284,24,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (140,285,24,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (141,286,24,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (142,287,24,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (143,288,24,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (144,289,24,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (181,368,31,'22 hours on-demand video',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (182,369,31,'14 articles',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (183,370,31,'19 coding exercises',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (184,371,31,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (185,372,31,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (186,373,31,'Certificate of completion',5);
REM INSERTING into COURSEBUCKET.CREDIT_CARD
SET DEFINE OFF;
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (1,1234567890,'Md. Mehedi Hasan',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (2,1234567890123456,'Jahin',to_date('21-SEP-23','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (4,1111,'shammo',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (5,1211,'moitry',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (3,1212,'Rahim ',to_date('31-JAN-21','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (6,12345,'asdfsd',to_date('15-FEB-09','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (7,1234,'ashikur',to_date('19-AUG-22','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (8,1234,'ashikur',to_date('19-AUG-22','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (11,123,'abrar',to_date('21-AUG-22','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (10,111,'rifat',to_date('20-AUG-22','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (9,123,'tanzima',to_date('20-AUG-23','DD-MON-RR'));
REM INSERTING into COURSEBUCKET.DESIGNATION
SET DEFINE OFF;
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (11,'Businessman','shammya');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (2,'Assistant Professor','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (3,'Lecturer','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (1,'Professor','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (4,'Student','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (5,'Diploma','shammya');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (6,'Doctor','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (7,'Engineer','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (8,'Research Assistant','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (9,'Lawyer','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (10,'Service Holder','shammya');
REM INSERTING into COURSEBUCKET.EDUCATIONAL_STATUS
SET DEFINE OFF;
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (2,'HSC','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (3,'BSc. (Honors)','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (1,'SSC','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (4,'BSc. (Degree)','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (5,'BSc. in Engineering','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (6,'BBA','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (7,'BA','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (8,'MSc','shammya');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (9,'Diploma Engineering','shammya');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (10,'MBA','shammya');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (11,'CA','shammya');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (12,'SA','shammya');
REM INSERTING into COURSEBUCKET.FAQ
SET DEFINE OFF;
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (1,1,'shafayat','{"blocks":[{"key":"6c1ij","text":"jodi nicher code er output bolte paren taile kinbo","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"bigut","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"e6cso","text":"void print()","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"ctbpt","text":"{","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"86kuj","text":"cout<<"Ashik sir is the best"","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"eei0b","text":"}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('22-AUG-21','DD-MON-RR'),null,null);
REM INSERTING into COURSEBUCKET.FILES
SET DEFINE OFF;
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (1,1,'Profile Picture','http://localhost:8800/resources/pb/hSicm9vYgEwT1TjErjaEgmI7hlw7J5KQEIHpi7ctureXIoWukTPjyrjTo7otp3ng1RbWJyV38F3amd',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (50,1,'Course Cover','http://localhost:8800/resources/pb/NbUpH41mHgO7kTjErjals3W1iNp1xJ3DBYapi7ctureK0K3qyrwbGUcVS0BNj3pg2GvcGARSn6dxGK',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (51,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (52,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (53,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (54,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (55,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (56,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (57,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (58,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (59,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (60,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (61,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (122,1,'Course Cover','http://localhost:8800/resources/pb/HNJooXjjwd4ixTjErjatTyAGpUYavEOX8pSpi7ctureca2jHSqL31p9xkrKkj3pg7g8fB7XGGQbf7d',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (123,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (124,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (125,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (126,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (127,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (128,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (129,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (130,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (131,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (132,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (133,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (134,1,'Course Cover','http://localhost:8800/resources/pb/8FaKHwU5spETpTjErjaLOcQf6ewM5bXVBZ4pi7cture4x8qYHBQhrpQZLnroj3pgcrDqxE92kFKD5d',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (135,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (136,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (137,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (138,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (139,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (140,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (141,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (142,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (143,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (144,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (145,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (74,1,'Course Cover','http://localhost:8800/resources/pb/oImoQEEkCOgCUTjErjay9WqnUZJdWvH8pjppi7cturezN0YLmOi62R9Kma9Kj3pgq5sygOCqXchNKo',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (75,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (76,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (77,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (78,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (79,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (80,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (81,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (82,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (83,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (84,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (85,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (159,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (160,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (161,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (162,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (163,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (164,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (165,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (166,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (167,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (168,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (169,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (171,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (172,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (173,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (174,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (175,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (176,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (177,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (178,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (179,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (180,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (181,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (182,1,'Course Cover','http://localhost:8800/resources/pb/Sl5FuhSTjUuwMTjErja1qnSDNjgXSLZswtQpi7cturepTQmNvKgmqXlDCHkdj3pgPGkGBXExnq6ECK',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (183,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (14,1,'Course Cover','http://localhost:8800/resources/pb/iiAIbE5jpDosaTjErjalHAuxmE4O3xWAHlJpi7ctureZNar6t8M5wqKA0t1Nj3pgzgnuA1sdINgvoa',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (15,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (16,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (17,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (18,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (19,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (20,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (21,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (22,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (23,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (24,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (25,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (26,1,'Course Cover','http://localhost:8800/resources/pb/goB9OPenPein4TjErjao5Eb09DPvnpKavJIpi7ctureY45QgMOr8hu27NQOCj3pg4hME8vbdZMpGFD',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (27,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (28,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (29,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (30,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (31,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (32,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (33,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (34,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (35,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (36,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (37,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (146,1,'Course Cover','http://localhost:8800/resources/pb/ut92gBY4WRZ1QTjErja4BYyZPazOYngzhjMpi7ctureDB4q94fAlFdDCU8n5j3pgythNaIdgCO46DM',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (147,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (148,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (149,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (150,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (151,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (152,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (153,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (154,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (155,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (156,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (157,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (170,1,'Course Cover','http://localhost:8800/resources/pb/tJFCZSrPXjBKcTjErjagtEopBov7IxaJh80pi7cturekEYyH8WbLZRDHdVzdj3pgy5pntgmj6qA6tQ',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (40,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (41,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (42,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (43,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (44,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (45,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (46,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (47,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (48,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (49,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (62,1,'Course Cover','http://localhost:8800/resources/pb/M4YQdxQYlm4sRTjErjavOZcFdOojWIAjRxdpi7ctureuM6eu3dOlBhQxyoFwj3pg1nwvFfdGZ0yhdq',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (63,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (64,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (65,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (66,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (67,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (68,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (69,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (70,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (71,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (72,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (73,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (98,1,'Course Cover','http://localhost:8800/resources/pb/9oHn6GGS5AKodTjErjaKnZ7TJGaM4fs3kwKpi7cturelDHzXf7PFCvrQVdD3j3pgaEW7cpi8G587X0',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (99,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (100,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (101,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (102,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (103,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (104,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (105,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (106,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (107,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (108,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (109,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (158,1,'Course Cover','http://localhost:8800/resources/pb/RZIA1FQrRich5TjErja2ScZUGUad3JLN7qRpi7ctureEYslVRB9O2C2hXVzAj3pgbzU7De7OhHVUKw',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (38,1,'Course Cover','http://localhost:8800/resources/pb/al2MyBUGyMZujTjErjaq3Wh6xa4Wa6fRGD5pi7cturedgIVepkPm5OZExooMj3pgqTWjZxYp8TADfn',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (39,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (2,1,'Course Cover','http://localhost:8800/resources/pb/IbTag107vRVMCTjErjaelDwcqnc3qb2AE9Fpi7cture3h9ju59al1CRXVKCEj3pgH9zy1DyHgJenCE',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (3,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (4,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (5,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (6,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (7,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (8,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (9,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (10,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (11,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (12,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (13,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (86,1,'Course Cover','http://localhost:8800/resources/pb/HSxA57SDafeZNTjErja4YOvJ2U1aMiBH4fJpi7cturePiMvR1L30BZRikYNoj3pgwPepgTb6seph0I',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (87,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (88,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (89,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (90,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (91,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (92,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (93,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (94,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (95,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (96,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (97,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (110,1,'Course Cover','http://localhost:8800/resources/pb/gsDl7Cjl86d5NTjErjao6H4lGpofUHdbkxbpi7ctureKqmci3MkFLfSfMeAdj3pg8fX5XpqpfOsoFO',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (111,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (112,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (113,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (114,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (115,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (116,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (117,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (118,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (119,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (120,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (121,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (386,1,'Course Cover','http://localhost:8800/resources/pb/n0tnYVmC8M6b2TjErjaSvOCesjdZwrAGXXZpi7cture80BTDYMuCkITsWHEyj3pgqtzHIO00JfCxBc',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (387,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (388,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (389,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (390,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (391,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (392,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (393,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (394,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (395,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (396,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (397,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (415,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (416,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (417,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (418,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (419,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (420,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (421,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (422,1,'Course Cover','http://localhost:8800/resources/pb/PFNIaekyPZB0ZTjErjacvyZ7hMn0gaJ5T47pi7cturealVVmMJrB7uuiP1djj3pgsJxd3QCBw5z8dH',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (423,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (424,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (425,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (426,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (427,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (428,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (429,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (430,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (431,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (432,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (433,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (446,1,'Profile Picture','http://localhost:8800/resources/pb/q3IHvQ7bG5G8STjErja7K1RrtnPEgrPy1EEpi7cture0DkVEmu5esdd7Gd1Op3ng7I68WF2JMTTB94',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (447,1,'Profile Picture','http://localhost:8800/resources/pb/WFcPKtewnm6V3TjErjavsaZ5f6BxTPEePT2pi7cture2ZXIVLiWYmRiU34Nrj3pgWNniBFgHTq0aUf',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (449,1,'Profile Picture','http://localhost:8800/resources/pb/1TT3ZHME9KDuwTjErjaGSjzGD5LkBOwj7P6pi7ctureoPQTFTZgXBqqCnOLvp3ngidkS92oNr5zG8J',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (450,1,'Profile Picture','http://localhost:8800/resources/pb/jTW4b8KwID5FBTjErjabartHQ7AaEQr2mzWpi7ctureSrb8uoacxVRNXUFLXp3ng5kPrVgnL230ggs',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (451,1,'Profile Picture','http://localhost:8800/resources/pb/6JavpGJpbBdFOTjErjab2DHXSqyxgkM8wGUpi7ctureAOI8fvqPRWH7G8YYYp3ngRZVWtoMk2hy7OD',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (454,1,'Profile Picture','http://localhost:8800/resources/pb/uocMsX2hn1KIvTjErjafF1BC2VzPPKJpnTlpi7ctureIPt6WCrfr9S5Eo1Glp3ngpRzFjxLvvUy7QA',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (456,1,'Profile Picture','http://localhost:8800/resources/pb/2IIXxpMOOfTgeTjErjaAgHDUf9skrurqrYfpi7ctureVOvTEsJCvBlISgLutp3ng6egpRxh6n3vCTJ',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (218,1,'Course Cover','http://localhost:8800/resources/pb/dLjKPDKu4UUs1TjErjaHlwGlV0GbOibKkYnpi7cturemiC9beQmZFr9GtG0lj3pgo7gC1JGFamYbLg',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (219,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (220,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (221,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (222,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (223,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (224,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (225,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (226,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (227,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (228,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (229,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (338,1,'Course Cover','http://localhost:8800/resources/pb/HUCtKGipqL4sbTjErjaJYfZRHsQPT1tzRCEpi7cturex5mwAvpHSqO33hUQNj3pgDCX8QG6aQrOXWY',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (339,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (340,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (341,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (342,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (343,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (344,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (345,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (346,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (347,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (348,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (349,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (398,1,'Course Cover','http://localhost:8800/resources/pb/0iaGFeJ6YEsVeTjErja7Duzrsk6Mq1D8o90pi7cture6h0PTZvSwepkIPmCwj3pgretGzvjMsV9K21',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (399,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (400,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (401,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (402,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (403,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (404,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (405,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (406,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (407,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (408,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (409,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (254,1,'Course Cover','http://localhost:8800/resources/pb/VAKnhFvUK3tyRTjErjawg4jKrqrqb2wJcHUpi7cturezsFtKOgETIVBSI4utj3pgLgZr4L1xySECjM',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (255,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (256,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (257,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (258,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (259,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (260,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (261,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (262,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (263,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (264,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (265,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (278,1,'Course Cover','http://localhost:8800/resources/pb/GNpcs7XjS7SjvTjErjaVfsQfwBRgZVzNVmrpi7cturew4IiUlvmdRsxAfqJgj3pgjNY4wKAdyBEALX',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (279,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (280,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (281,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (282,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (283,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (284,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (285,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (286,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (287,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (288,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (289,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (374,1,'Course Cover','http://localhost:8800/resources/pb/2APdcrDVJ98faTjErjaGOdRAnxGxUvvlZdNpi7cturessQqHV975SqBNFSxlj3pgNBAJFzHmLKkXV4',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (375,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (376,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (377,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (378,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (379,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (380,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (381,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (382,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (383,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (384,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (385,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (455,1,'Profile Picture','http://localhost:8800/resources/pb/I1pOSMVJhc7ZxTjErjayWKJbV8tRAva2Ls8pi7cture8nDWgMQS5o3psM63cp3ngQl4ha7Ep0ge3QC',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (326,1,'Course Cover','http://localhost:8800/resources/pb/tWmzisrRdKXOhTjErja6gXMWrwQ4KCRKAlhpi7ctureQspmuVfxyHbENrQbnj3pgecHBTdOBkZxwYY',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (327,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (328,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (329,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (330,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (331,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (332,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (333,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (334,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (335,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (336,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (337,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (434,1,'Course Cover','http://localhost:8800/resources/pb/YTAu3BqSK3nCWTjErjaH6ICkgApIhXSX1N4pi7ctureINmkpclE3dWnblRFlj3pgZ1hyR1N3ikmCCk',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (435,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (436,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (437,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (438,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (439,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (440,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (441,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (442,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (443,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (444,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (445,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (452,1,'Profile Picture','http://localhost:8800/resources/pb/JxuVFix5VeTY6TjErjaAQPJHF3oNoK10HS1pi7cturetJXQEZ76BHi9YN4Epp3ngWuCsVtwcF4REIv',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (194,1,'Course Cover','http://localhost:8800/resources/pb/beuUewziUHJYBTjErjaBnXv915avE459Sbjpi7cture1IMX30IWX3GoLlbe2j3pgAPDuirlKAV4QlY',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (195,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (196,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (197,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (198,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (199,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (200,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (201,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (202,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (203,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (204,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (205,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (302,1,'Course Cover','http://localhost:8800/resources/pb/sRSyeDkEYiT6OTjErjatGHqOcpAduvpuH1Upi7ctureEbmkfC1UCe4U1adCwj3pg24NOBg0SaHbIr0',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (303,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (304,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (305,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (306,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (307,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (308,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (309,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (310,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (311,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (312,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (313,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (448,1,'Profile Picture','http://localhost:8800/resources/pb/2u3CgKc1xElJtTjErjaoBJj1jHDd3SlDqTMpi7cture4KjW4CryrUDGuRKMCj3pgStOzcjlrsQXeBO',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (453,1,'Profile Picture','http://localhost:8800/resources/pb/wPv6zTeIY2ljmTjErja6MzXpytUEgzrJxdspi7ctureFUmAwFl3m2FXYbbG1p3ngNeiS9Mzpc2J6pX',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (457,1,'Profile Picture','http://localhost:8800/resources/pb/PXj9p2CE5XNUvTjErja0pilZ03PUm6iTFEwpi7cturePgT0hzOEjNouWBQywp3ngj1D3BTuXhX119v',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (458,1,'Profile Picture','http://localhost:8800/resources/pb/As3luO2AVVgb7TjErjaRC5PwDKNj4N8O99ipi7cturep2nTjRY8vXfsK5jeBp3ngRGdJo2jCHfvcbp',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (459,1,'Profile Picture','http://localhost:8800/resources/pb/ogUHtdRcJUOMcTjErja6rXVYlr9ixXEzeHWpi7cturegJ8l44Qu3lhd2gCeAp3ng9H0kjsakHPZSRj',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (460,1,'Profile Picture','http://localhost:8800/resources/pb/9xvo4GvQkikEQTjErjavLzBg8rGUDi332EWpi7cturesmIqIPztkl9o31q5Bp3ngsrDOsl9wheX17y',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (461,1,'Profile Picture','http://localhost:8800/resources/pb/mlSKl664yKtqmTjErjaA3g1VnF7fR4tIilZpi7cturey4wc1fgixHxSRee7Zp3ngTAgAokALVj9WRz',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (462,1,'Profile Picture','http://localhost:8800/resources/pb/EPqaptUcyKb2vTjErjaSifslGEKpV8qwx1Wpi7ctureSDMqpB3Hv5yJ0iqDRp3ng9w9g94p6eI01Ex',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (463,1,'Profile Picture','http://localhost:8800/resources/pb/EnPITk0x6B2dmTjErjaP3FpsUgfNNzd3xpWpi7ctureDtiinA0NLytg0zvWkp3ngNBGmZ3SL3QfqqM',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (464,1,'Profile Picture','http://localhost:8800/resources/pb/MGcmJyhuMJVJeTjErjakHNuNdV7jhckqRJjpi7ctureMcG22Yhmjl3pMo5BVp3ngPXMBdTuMmdgHtk',to_date('21-AUG-21','DD-MON-RR'),to_date('21-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (184,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (185,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (186,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (187,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (188,10,'PROPERTY','FaYoutubeSquare',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (189,10,'PROPERTY','FaRegFileWord',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (190,10,'PROPERTY','FaCode',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (191,10,'PROPERTY','FaRegClock',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (192,10,'PROPERTY','FaMobileAlt',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (193,10,'PROPERTY','FaUserGraduate',to_date('19-AUG-21','DD-MON-RR'),to_date('19-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (206,1,'Course Cover','http://localhost:8800/resources/pb/gCaOGTc3bqdpyTjErjaS5pn7US5GGY2IVhgpi7cturesepq81Dy2X7tyPEtDj3pg5B3yVGrtPT1tvR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (207,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (208,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (209,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (210,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (211,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (212,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (213,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (214,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (215,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (216,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (217,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (314,1,'Course Cover','http://localhost:8800/resources/pb/R2Tz8mvLZsmxZTjErjasQDCAnW7hpMdjKShpi7cturerla4gx41fTj9oS793j3pgbuecC6Nbkaz3df',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (315,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (316,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (317,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (318,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (319,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (320,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (321,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (322,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (323,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (324,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (325,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (410,1,'Course Cover','http://localhost:8800/resources/pb/UFZ4uQm5upCPhTjErjaA0k9lzQmXQR1TGf0pi7cture1a9DUca4n4tctxOg2j3pgTW1Qve7wyMuHde',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (411,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (412,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (230,1,'Course Cover','http://localhost:8800/resources/pb/gbzrr99wTmMhNTjErjaJET15yoMQQKBY7S3pi7ctureUrLWNj18UwZmL8jELj3pgFdSQLXw7hbWjhi',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (231,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (232,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (233,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (234,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (235,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (236,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (237,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (238,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (239,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (240,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (241,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (266,1,'Course Cover','http://localhost:8800/resources/pb/XLiSpCJrSTN1gTjErjasLDBSGgh36Qe94M5pi7ctureea6WSYYnthMTp7AZzj3pg3u4LfM2ognVRv9',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (267,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (268,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (269,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (270,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (271,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (272,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (273,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (274,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (275,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (276,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (277,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (350,1,'Course Cover','http://localhost:8800/resources/pb/AMxTT0kMBsldTTjErjaFsVJq5VgIiABG38Xpi7ctureKnaC9XfSediyV3MXqj3pgCxc8cY8ai37a78',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (351,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (352,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (353,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (354,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (355,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (356,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (357,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (358,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (359,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (360,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (361,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (413,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (242,1,'Course Cover','http://localhost:8800/resources/pb/zFNgCxXzTv8JFTjErjaGMiqfe9zYUsHaosnpi7ctureyApDdDnGY6fxgLT94j3pgGudr9u6PQ6xt07',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (243,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (244,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (245,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (246,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (247,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (248,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (249,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (250,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (251,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (252,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (253,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (290,1,'Course Cover','http://localhost:8800/resources/pb/qMkmoUXa21kZaTjErjalYSLSe7qYQileYdjpi7cturevMCl6R8qYN5Bpdyn5j3pgpBHhdEgh9FfnKA',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (291,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (292,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (293,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (294,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (295,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (296,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (297,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (298,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (299,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (300,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (301,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (362,1,'Course Cover','http://localhost:8800/resources/pb/GlQPduiWof0drTjErjaS0Inq18LSxprjf4Ipi7ctureQ66Br7D3X1c4Nw6cMj3pgZKOAJLAqQfFEKK',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (363,4,'input and output operations','{"blocks":[{"key":"2qijs","text":"In this lecture we will learn about basic input and output operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"drkad","text":"cin >> variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"cagls","text":"cout << variable;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (364,2,'{"blocks":[{"key":"2e6ma","text":"In this video we learn about if else conditional","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/n0ddo12MSNS6GJRyFykJpYZqpbdaNiBfDQTvi5deoUjyZYSiIMGoRNCDfJm3p4C52FcWOy0eF9IR',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (365,3,'{"blocks":[{"key":"9f1uo","text":"In this lesson we learn about for and while loop and how to traverse an array.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/6uDImlL16yYOlJRyFykuEw3jxFRm9iXCs8Opd3fKP0H7cH2Jypx94D2Ep3dfXUmP6a0OwGkoZp',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (366,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (367,2,'{"blocks":[{"key":"9vf47","text":"In this video you will learn about function and recursion.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/FZICytcBaEzRcJRyFykYxk5fuR1Fsi0JXQWvi5deoZzMZA3aZlP8zYX6kbm3p4smCC77HQHNMv1X',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (368,10,'PROPERTY','FaYoutubeSquare',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (369,10,'PROPERTY','FaRegFileWord',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (370,10,'PROPERTY','FaCode',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (371,10,'PROPERTY','FaRegClock',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (372,10,'PROPERTY','FaMobileAlt',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (373,10,'PROPERTY','FaUserGraduate',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (414,5,'https://www.youtube.com/channel/UCXbiXmHE4JJIVITUMKpyIwA','{"blocks":[{"key":"arccb","text":"In this link you can learn about basic operations of arra and string in python programming language.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('20-AUG-21','DD-MON-RR'),to_date('20-AUG-21','DD-MON-RR'));
REM INSERTING into COURSEBUCKET.FILE_TYPE
SET DEFINE OFF;
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (1,'Picture','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (2,'Video','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (3,'PDF','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (4,'Article','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (5,'Link','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (6,'FontAwesomeIcon','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (7,'MaterialIcon','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (8,'SVG','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (9,'Message','mehedi');
Insert into COURSEBUCKET.FILE_TYPE (ID,TYPE,ADMIN_ID) values (10,'Icon','shammya');
REM INSERTING into COURSEBUCKET.LANGUAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (3,'Arabic','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (1,'Bangla','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (2,'English','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (4,'Hindi','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (6,'Persian','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (7,'Urdu','shammya');
REM INSERTING into COURSEBUCKET.LECTURE
SET DEFINE OFF;
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (23,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',23,53);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (24,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',24,54);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (25,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',25,55);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (51,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',51,123);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (52,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',52,124);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (53,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',53,125);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (54,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',54,126);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (55,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',55,127);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (56,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',56,135);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (57,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',57,136);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (58,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',58,137);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (59,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',59,138);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (60,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',60,139);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (76,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',76,183);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (77,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',77,184);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (78,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',78,185);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (79,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',79,186);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (80,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',80,187);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (81,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',81,195);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (82,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',82,196);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (83,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',83,197);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (84,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',84,198);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (85,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',85,199);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (91,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',91,219);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (92,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',92,220);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (93,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',93,221);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (94,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',94,222);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (95,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',95,223);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (111,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',111,267);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (112,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',112,268);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (113,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',113,269);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (114,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',114,270);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (115,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',115,271);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (136,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',136,327);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (137,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',137,328);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (138,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',138,329);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (139,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',139,330);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (140,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',140,331);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (161,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',161,387);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (162,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',162,388);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (163,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',163,389);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (164,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',164,390);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (165,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',165,391);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (171,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',171,411);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (172,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',172,412);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (173,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',173,413);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (174,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',174,414);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (175,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',175,415);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (21,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',21,51);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (22,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',22,52);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (31,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',31,75);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (32,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',32,76);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (33,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',33,77);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (34,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',34,78);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (35,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',35,79);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (71,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',71,171);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (72,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',72,172);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (73,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',73,173);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (74,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',74,174);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (75,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',75,175);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (86,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',86,207);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (87,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',87,208);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (88,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',88,209);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (89,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',89,210);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (90,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',90,211);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (106,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',106,255);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (107,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',107,256);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (108,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',108,257);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (109,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',109,258);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (110,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',110,259);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (121,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',121,291);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (122,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',122,292);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (123,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',123,293);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (124,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',124,294);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (125,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',125,295);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (126,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',126,303);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (127,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',127,304);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (128,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',128,305);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (129,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',129,306);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (130,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',130,307);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (166,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',166,399);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (167,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',167,400);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (168,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',168,401);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (169,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',169,402);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (170,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',170,403);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (176,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',176,423);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (177,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',177,424);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (178,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',178,425);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (179,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',179,426);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (180,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',180,427);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (6,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',6,15);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (7,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',7,16);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (8,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',8,17);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (9,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',9,18);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (10,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',10,19);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (11,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',11,27);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (12,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',12,28);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (13,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',13,29);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (14,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',14,30);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (15,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',15,31);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (61,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',61,147);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (62,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',62,148);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (63,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',63,149);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (64,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',64,150);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (65,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',65,151);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (96,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',96,231);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (97,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',97,232);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (98,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',98,233);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (99,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',99,234);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (100,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',100,235);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (131,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',131,315);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (132,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',132,316);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (133,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',133,317);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (134,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',134,318);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (135,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',135,319);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (156,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',156,375);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (157,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',157,376);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (158,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',158,377);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (159,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',159,378);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (160,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',160,379);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (16,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',16,39);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (17,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',17,40);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (18,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',18,41);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (19,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',19,42);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (20,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',20,43);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (26,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',26,63);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (27,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',27,64);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (28,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',28,65);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (29,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',29,66);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (30,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',30,67);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (41,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',41,99);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (42,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',42,100);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (43,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',43,101);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (44,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',44,102);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (45,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',45,103);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (66,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',66,159);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (67,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',67,160);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (68,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',68,161);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (69,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',69,162);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (70,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',70,163);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (101,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',101,243);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (102,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',102,244);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (103,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',103,245);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (104,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',104,246);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (105,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',105,247);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (141,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',141,339);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (142,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',142,340);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (143,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',143,341);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (144,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',144,342);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (145,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',145,343);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (146,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',146,351);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (147,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',147,352);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (148,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',148,353);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (149,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',149,354);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (150,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',150,355);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (181,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',181,435);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (182,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',182,436);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (183,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',183,437);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (184,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',184,438);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (185,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',185,439);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (1,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',1,3);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (2,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',2,4);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (3,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',3,5);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (4,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',4,6);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (5,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',5,7);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (36,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',36,87);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (37,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',37,88);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (38,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',38,89);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (39,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',39,90);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (40,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',40,91);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (46,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',46,111);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (47,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'T',47,112);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (48,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',48,113);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (49,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',49,114);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (50,1,'Lecture Title',to_date('19-AUG-21','DD-MON-RR'),'F',50,115);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (116,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',116,279);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (117,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',117,280);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (118,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',118,281);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (119,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',119,282);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (120,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',120,283);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (151,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',151,363);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (152,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'T',152,364);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (153,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',153,365);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (154,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',154,366);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (155,1,'Lecture Title',to_date('20-AUG-21','DD-MON-RR'),'F',155,367);
REM INSERTING into COURSEBUCKET.MESSAGE
SET DEFINE OFF;
REM INSERTING into COURSEBUCKET.NOTIFICATION
SET DEFINE OFF;
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (98,'rifat','shafayat',to_date('22-AUG-21','DD-MON-RR'),'T',9,'REVIEW',1);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (99,'rifat','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',9,'REVIEW',1);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (101,'tanzima','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',2,'COURSEPURCHASE',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (102,'tanzima','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',2,'REVIEW',2);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (103,'tanzima','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',2,'REVIEW',2);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (104,'sourav','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',17,'COURSEPURCHASE',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (105,'sourav','shafayat',to_date('22-AUG-21','DD-MON-RR'),'T',17,'REVIEW',3);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (106,'sourav','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',17,'REVIEW',3);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (96,'ashikur','shafayat',to_date('22-AUG-21','DD-MON-RR'),'T',1,'FAQQUESTION',1);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (97,'rifat','shafayat',to_date('22-AUG-21','DD-MON-RR'),'F',9,'COURSEPURCHASE',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (81,'rifat','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',9,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (82,'admin','abrar',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (83,'admin','kamrul',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (84,'admin','shafayat',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (85,'admin','saurav',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (86,'admin','utsha',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (87,'admin','sabbir',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (88,'admin','kashem',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (89,'admin','sohel',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (90,'papon','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',8,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (91,'maleq','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',13,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (92,'kashem','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',11,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (93,'kashem','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',11,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (94,'sumit','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',6,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (77,'rifat','pranto',to_date('21-AUG-21','DD-MON-RR'),'T',9,'COURSEPURCHASE',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (95,'sourav','shammya',to_date('21-AUG-21','DD-MON-RR'),'F',17,'COURSEAPPROVED',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (80,'admin','sakib',to_date('21-AUG-21','DD-MON-RR'),'F',0,'REGISTRATION',0);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (100,'tanzima','shammya',to_date('22-AUG-21','DD-MON-RR'),'F',2,'COURSEAPPROVED',0);
REM INSERTING into COURSEBUCKET.PERSON
SET DEFINE OFF;
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('ashikur','ashikur@gmail.com','$2a$10$H3sU2GqsmMzYDZ2e3Qm0O.xDuj2tPUKpIDX8Rpmx3BQHedwl94Vxa','Ashikur ','Rahman',to_date('19-AUG-80','DD-MON-RR'),'BUET','ashikur','ashikur',to_date('19-AUG-21','DD-MON-RR'),'Assistant Professor of CSE at BUET',1,1,8,'ashikur',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sumit','sumit@gmail.com','$2a$10$82zidwxoPcem.euZc0UxZOM0cVSwWIk63dwe29rAiIdqkM4AaKyfG','Sumit','Saha',to_date('20-AUG-90','DD-MON-RR'),'Analyzen','sumit','sumit',to_date('20-AUG-21','DD-MON-RR'),'I am a javascript engineer and founder CEO of AnalyzenBD',1,449,null,'sumit',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('rohel','rohel@gmail.com','$2a$10$2tun4zZjP1DfmfFI2pgsSOFP58T6F8MUEoJ1z/zIR8xy.dXQiR51K','Mohammad','Rohel',to_date('20-AUG-90','DD-MON-RR'),'Rohel Security Service','rohel','rohel',to_date('20-AUG-21','DD-MON-RR'),'I will hack your server unethically if you don''t bounty me ethically.',1,453,null,'rohel',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('maleq','maleq@gmail.com','$2a$10$6/VNtThykfk.u4V75yeKDOocl3f4jbyk5UXpYKVggK9wb.8Cn7aoi','Abdul','Maleq',to_date('20-AUG-70','DD-MON-RR'),'BUET','maleq','maleq',to_date('20-AUG-21','DD-MON-RR'),'I am passionate about engineering mathematics .',9,451,null,'maleq',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('abrar','abrar@gmail.com','$2a$10$Ypki7qAcQl5ZwhDLrZquk.Ix7drydu7eL07lTIx/EW5xiXoyt7wZy','Abrar','Fahad',to_date('21-AUG-98','DD-MON-RR'),'BUET','abrar','abrar',to_date('21-AUG-21','DD-MON-RR'),'I was a EEE student at BUET. They killed me for i was an active practicing muslim. May Allah grant me as a martyr.',3,457,11,'abrar',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('kamrul','kamrul@gmail.com','$2a$10$6cy2uHytn/JkUvn5nDGLU.Ab6zfjUBkcUipeRpLScsp3qCGBekBbK','MD Kamrujjaman','Kamrul',to_date('21-AUG-98','DD-MON-RR'),'BUET','kamrul','kamrul',to_date('21-AUG-21','DD-MON-RR'),'I want to work in google and make my country proud.',9,458,null,'kamrul',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('shafayat','shafayat@gmail.com','$2a$10$5cQe7EdeQbngNXlX598meuBvpx8j02Mc4tcRqmSBXyHWa/VZuWyZG','Shafayat','Majumdar',to_date('21-AUG-98','DD-MON-RR'),'BUET','shafayat','shafayat',to_date('22-AUG-21','DD-MON-RR'),'I am very smart yet you can''t guess me for my disguised posture. I want to be a software engineer.',4,459,null,'shafayat',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('saurav','saurav@gmail.com','$2a$10$f7ZBbjzAf4nsr7HnQQEfhuMhsAQ1rBXY6LIUDEAu0oJu6H8nesJwS','Saurav','Jajodia',to_date('21-AUG-97','DD-MON-RR'),'BUET','saurav','saurav',to_date('22-AUG-21','DD-MON-RR'),'I love to be a hardware and a software engineer simultaneously.',1,460,null,'saurav',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('utsha','utsha@hotmail.com','$2a$10$07OXcvIYLpsN4/G0945mb.nhK0a9zRiUqWupXpVB7yZdQusakBZ82','Md Asif Hasan','Utsha',to_date('21-AUG-97','DD-MON-RR'),'BUET','utsha','utsha',to_date('22-AUG-21','DD-MON-RR'),'I want to be a professor at BUET.I love Academics and i am a pro football player.',10,461,null,'utsha',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sabbir','sabbir@hotmail.com','$2a$10$inqjnLGO7nB3xvWBncNZB.qsF338y10ghRI4vp1CuJ3jAKFgElTfC','Sabbir Rahman','Abir',to_date('21-AUG-97','DD-MON-RR'),'BUET','upobir','upobir',to_date('18-AUG-21','DD-MON-RR'),'I will crack ICPC and google coding interview.',1,462,null,'upobir',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('kashem','kashem@yahoo.com','$2a$10$pTN/BONEikhaIsi7hrxXCO3gRJrRxz5pN3Vm5LwoEv.z/fvl/HhQ6','Abul','Kashem',to_date('21-AUG-74','DD-MON-RR'),'BUET','kashem','kashem',to_date('23-AUG-21','DD-MON-RR'),'I am a full time professor at BUET .i love to teach Data structure and Algorithms.',1,463,null,'kashem',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sohel','sohel@yahoo.com','$2a$10$OTsAXhnZ6g7Di/5rs0uNM.w1h9jeFT8Vwa6Okslip/ORHInUBaVGy','Md Sohel','Rahman',to_date('21-AUG-76','DD-MON-RR'),'BUET','sohel','sohel',to_date('16-AUG-21','DD-MON-RR'),'I love to teach discrete mathematics in computer science.',6,464,null,'sohel',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('shammya','shammya','$2a$10$6472/c6MRuT01ETKP08lO.3tWnqq847rN2vBJ.ftA.fLzABqQE16m','Shammya','Shammya',to_date('27-NOV-20','DD-MON-RR'),null,null,null,to_date('18-NOV-20','DD-MON-RR'),'admin of the site',null,null,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sakib','sakib@gmail.com','$2a$10$fzqQt4cnacXuhobmjphRTuXX6o5oax92RSxLr9ZySxTr75alRwJKu','Sakibur','Reza',to_date('21-AUG-98','DD-MON-RR'),'BUET','reza','reza',to_date('18-AUG-21','DD-MON-RR'),'I want to be a DC.',11,456,null,'reza',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('rifat','rifat@gmail.com','$2a$10$Mtes12ZakiLggwj5oVh86.ONpIWHlvLCuMSpbHKfgZozWsnH2vW9S','Rifat','Shahriyar',to_date('20-AUG-78','DD-MON-RR'),'BUET','rifat','rifat',to_date('17-AUG-21','DD-MON-RR'),'I like java programming language most. Using java we can code anything.',11,447,10,'rifat',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('papon','papon@gmail.com','$2a$10$hiFWg8lIl6amw3bfRr1BeOzXEmafZM2LgntvDKHUrW7mhNfVTCoAq','Papon','Hasan',to_date('20-AUG-90','DD-MON-RR'),'BUET',null,null,to_date('17-AUG-21','DD-MON-RR'),'I want to be a professor at BUET.',2,448,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('admin','admin@gmail.com','$2a$10$fzqQt4cnacXuhobmjphRTuXX6o5oax92RSxLr9ZySxTr75alRwJKu','Admin','Admin',to_date('21-AUG-98','DD-MON-RR'),'BUET','reza','reza',to_date('17-AUG-21','DD-MON-RR'),'I am the admin.',11,456,null,'admin',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('tanzima','tanzima@gmail.com','$2a$10$gz4fVjGQYjWeYDW5k4mC7uG269KmIT5sg2AMEf93nAeV47InuWpD6','Tanzima ','Hashem',to_date('20-AUG-82','DD-MON-RR'),'BUET','tanzima','tanzima',to_date('16-AUG-21','DD-MON-RR'),'I am a CS Professor at BUET.I am very passionate about teaching fundamentals of computer science.',6,446,9,'tanzima',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('navin','navin@gmail.com','$2a$10$jO2FDgbsVv6zv4WuT7d9ROGbW57TRYJHwFezXBRlw066TOHBkUUei','Navin','Reddy',to_date('20-AUG-85','DD-MON-RR'),'Telusko Learning','navin','navin',to_date('23-AUG-21','DD-MON-RR'),'I love software engineering .I design, build and sell software and i have a youtube channel called telusko learning.',8,454,null,'navin',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('pranto','pranto@gmail.com','$2a$10$r5JskA2fEZIzv9c.yGvl3OLR1/LuI6uUNEJUPSygrZLXAxdXtSJsO','MD. Emamul Haq','Pranto',to_date('21-AUG-98','DD-MON-RR'),'BUET','pranto','pranto',to_date('19-AUG-21','DD-MON-RR'),'I want to be the best researcher in the world.',7,455,null,'pranto',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('razi','razi@gmail.com','$2a$10$7w7nTBkbjaI6a/eLoine.O6tcqzRqsSzEs16wtFCdV7COncJMbiFW','Abdul Alim Islam','Al Razi ',to_date('20-AUG-86','DD-MON-RR'),'BUET','razi','razi',to_date('20-AUG-21','DD-MON-RR'),'I dream to build the world with pure hardware.',4,450,null,'razi',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sourav','sourav@gmail.com','$2a$10$FJtWROksOV03Hz8MPmZgG.6FbHX3agHFN/Ymbr2t85o3UOgxBZMQm','Sourav','Saha',to_date('20-AUG-85','DD-MON-RR'),'BUET','sourav','sourav',to_date('21-AUG-21','DD-MON-RR'),'I like mechanical engineering more than any thing in this world.',10,452,null,'sourav',null);
REM INSERTING into COURSEBUCKET.PERSON_LANGUAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (22,'rohel',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (23,'rohel',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (1,'ashikur',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (2,'ashikur',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (32,'abrar',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (33,'abrar',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (34,'abrar',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (35,'kamrul',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (17,'maleq',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (18,'maleq',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (36,'kamrul',6);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (37,'kamrul',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (38,'shafayat',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (39,'shafayat',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (40,'shafayat',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (41,'shafayat',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (42,'saurav',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (43,'saurav',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (44,'utsha',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (45,'utsha',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (46,'utsha',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (47,'sabbir',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (48,'sabbir',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (49,'kashem',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (50,'kashem',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (51,'sohel',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (52,'sohel',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (5,'rifat',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (6,'rifat',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (7,'rifat',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (8,'papon',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (9,'papon',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (10,'papon',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (29,'sakib',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (30,'sakib',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (31,'sakib',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (3,'tanzima',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (4,'tanzima',6);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (13,'sumit',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (14,'razi',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (15,'razi',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (11,'sumit',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (12,'sumit',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (16,'razi',6);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (19,'sourav',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (20,'sourav',6);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (21,'sourav',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (24,'navin',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (25,'navin',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (26,'pranto',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (27,'pranto',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (28,'pranto',1);
REM INSERTING into COURSEBUCKET.PURCHASE_HISTORY
SET DEFINE OFF;
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (4,17,'shafayat',to_date('22-AUG-21','DD-MON-RR'),4000);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (2,9,'shafayat',to_date('22-AUG-21','DD-MON-RR'),3500);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (3,2,'shafayat',to_date('22-AUG-21','DD-MON-RR'),4100);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (1,9,'pranto',to_date('21-AUG-21','DD-MON-RR'),3500);
REM INSERTING into COURSEBUCKET.RATING
SET DEFINE OFF;
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (3,17,'shafayat',5,to_date('22-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (1,9,'shafayat',5,to_date('22-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (2,2,'shafayat',5,to_date('22-AUG-21','DD-MON-RR'));
REM INSERTING into COURSEBUCKET.REVIEW
SET DEFINE OFF;
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (3,17,'shafayat',to_date('22-AUG-21','DD-MON-RR'),'Good refresher .It reminds me of 1-1 mechanical course');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (1,9,'shafayat',to_date('22-AUG-21','DD-MON-RR'),'Best course in my life. sir, i want to pay more for the course worth. ');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (2,2,'shafayat',to_date('22-AUG-21','DD-MON-RR'),'This was a very beautiful course .Learned a lot about C++.');
REM INSERTING into COURSEBUCKET.SLIDER
SET DEFINE OFF;
REM INSERTING into COURSEBUCKET.STUDENT
SET DEFINE OFF;
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('sakib',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('shafayat',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('abrar',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('kamrul',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('saurav',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('utsha',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('sabbir',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('pranto',5);
REM INSERTING into COURSEBUCKET.TEACHER
SET DEFINE OFF;
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('papon',3);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sourav',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('kashem',1);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sohel',1);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('razi',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('navin',7);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('tanzima',1);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('rifat',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sumit',7);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('rohel',7);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('ashikur',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('maleq',1);
REM INSERTING into COURSEBUCKET.WEEK
SET DEFINE OFF;
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (23,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (24,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (25,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (51,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (52,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (53,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (54,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (55,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (56,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (57,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (58,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (59,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (60,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (76,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (77,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (78,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (79,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (80,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (81,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (82,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (83,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (84,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (85,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (91,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (92,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (93,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (94,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (95,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (111,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (112,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (113,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (114,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (115,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (136,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (137,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (138,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (139,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (140,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (161,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (162,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (163,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (164,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (165,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (171,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),35);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (172,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),35);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (173,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),35);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (174,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),35);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (175,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),35);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (21,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (22,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (31,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (32,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (33,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (34,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (35,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (71,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),15);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (72,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),15);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (73,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),15);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (74,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),15);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (75,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),15);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (86,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (87,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (88,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (89,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (90,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (106,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (107,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (108,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (109,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (110,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (121,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),25);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (122,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),25);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (123,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),25);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (124,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),25);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (125,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),25);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (126,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (127,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (128,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (129,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (130,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (166,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (167,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (168,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (169,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (170,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (176,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (177,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (178,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (179,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (180,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (6,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (7,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (8,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (9,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (10,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (11,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (12,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (13,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (14,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (15,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (61,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (62,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (63,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (64,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (65,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (96,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (97,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (98,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (99,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (100,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (131,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (132,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (133,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (134,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (135,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (156,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (157,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (158,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (159,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (160,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (16,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (17,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (18,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (19,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (20,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (26,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (27,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (28,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (29,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (30,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (41,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (42,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (43,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (44,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (45,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (66,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (67,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (68,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (69,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (70,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (101,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (102,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (103,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (104,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (105,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (141,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (142,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (143,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (144,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (145,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (146,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (147,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (148,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (149,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (150,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (181,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (182,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (183,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (184,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (185,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (1,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (2,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (3,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (4,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (5,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (36,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (37,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (38,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (39,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (40,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (46,1,'Week Title',to_date('19-AUG-21','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (47,2,'Week Title',to_date('19-AUG-21','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (48,3,'Week Title',to_date('19-AUG-21','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (49,4,'Week Title',to_date('19-AUG-21','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (50,5,'Week Title',to_date('19-AUG-21','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (116,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (117,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (118,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (119,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (120,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (151,1,'Week Title',to_date('20-AUG-21','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (152,2,'Week Title',to_date('20-AUG-21','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (153,3,'Week Title',to_date('20-AUG-21','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (154,4,'Week Title',to_date('20-AUG-21','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (155,5,'Week Title',to_date('20-AUG-21','DD-MON-RR'),31);
--------------------------------------------------------
--  DDL for Index ADMIN_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."ADMIN_PK" ON "COURSEBUCKET"."ADMIN" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CATEGORY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."CATEGORY_PK" ON "COURSEBUCKET"."CATEGORY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COUNTRY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COUNTRY_PK" ON "COURSEBUCKET"."COUNTRY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_LANGUAGE_PK" ON "COURSEBUCKET"."COURSE_LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_OUTCOME_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_OUTCOME_PK" ON "COURSEBUCKET"."COURSE_PROPERTIES" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_PK" ON "COURSEBUCKET"."COURSE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CREDIT_CARD_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."CREDIT_CARD_PK" ON "COURSEBUCKET"."CREDIT_CARD" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index DESIGNATION_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."DESIGNATION_PK" ON "COURSEBUCKET"."DESIGNATION" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index EDUCATIONAL_STATUS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."EDUCATIONAL_STATUS_PK" ON "COURSEBUCKET"."EDUCATIONAL_STATUS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index FAQ_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."FAQ_PK" ON "COURSEBUCKET"."FAQ" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index FILE_TYPE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."FILE_TYPE_PK" ON "COURSEBUCKET"."FILE_TYPE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index INSTRUCTOR_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."INSTRUCTOR_PK" ON "COURSEBUCKET"."TEACHER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."LANGUAGE_PK" ON "COURSEBUCKET"."LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index LECTURE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."LECTURE_PK" ON "COURSEBUCKET"."LECTURE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index NOTIFICATION_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."NOTIFICATION_PK" ON "COURSEBUCKET"."NOTIFICATION" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PERSON_LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PERSON_LANGUAGE_PK" ON "COURSEBUCKET"."PERSON_LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PERSON_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PERSON_PK" ON "COURSEBUCKET"."PERSON" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PURCHASE_HISTORY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PURCHASE_HISTORY_PK" ON "COURSEBUCKET"."PURCHASE_HISTORY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index RATING_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."RATING_PK" ON "COURSEBUCKET"."RATING" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index REVIEW_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."REVIEW_PK" ON "COURSEBUCKET"."REVIEW" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SLD_UNQ
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SLD_UNQ" ON "COURSEBUCKET"."SLIDER" ("ID", "FILES_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index STUDENT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."STUDENT_PK" ON "COURSEBUCKET"."STUDENT" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0015888
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0015888" ON "COURSEBUCKET"."MESSAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0019747
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0019747" ON "COURSEBUCKET"."CATEGORY" ("NAME") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0019814
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0019814" ON "COURSEBUCKET"."PERSON" ("EMAIL") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0021614
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0021614" ON "COURSEBUCKET"."SLIDER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index TABLE1_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."TABLE1_PK" ON "COURSEBUCKET"."FILES" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index WEEK_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."WEEK_PK" ON "COURSEBUCKET"."WEEK" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index ADMIN_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."ADMIN_PK" ON "COURSEBUCKET"."ADMIN" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CATEGORY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."CATEGORY_PK" ON "COURSEBUCKET"."CATEGORY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0019747
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0019747" ON "COURSEBUCKET"."CATEGORY" ("NAME") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COUNTRY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COUNTRY_PK" ON "COURSEBUCKET"."COUNTRY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_PK" ON "COURSEBUCKET"."COURSE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_LANGUAGE_PK" ON "COURSEBUCKET"."COURSE_LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index COURSE_OUTCOME_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."COURSE_OUTCOME_PK" ON "COURSEBUCKET"."COURSE_PROPERTIES" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index CREDIT_CARD_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."CREDIT_CARD_PK" ON "COURSEBUCKET"."CREDIT_CARD" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index DESIGNATION_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."DESIGNATION_PK" ON "COURSEBUCKET"."DESIGNATION" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index EDUCATIONAL_STATUS_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."EDUCATIONAL_STATUS_PK" ON "COURSEBUCKET"."EDUCATIONAL_STATUS" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index FAQ_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."FAQ_PK" ON "COURSEBUCKET"."FAQ" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index TABLE1_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."TABLE1_PK" ON "COURSEBUCKET"."FILES" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index FILE_TYPE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."FILE_TYPE_PK" ON "COURSEBUCKET"."FILE_TYPE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."LANGUAGE_PK" ON "COURSEBUCKET"."LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index LECTURE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."LECTURE_PK" ON "COURSEBUCKET"."LECTURE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0015888
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0015888" ON "COURSEBUCKET"."MESSAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index NOTIFICATION_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."NOTIFICATION_PK" ON "COURSEBUCKET"."NOTIFICATION" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PERSON_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PERSON_PK" ON "COURSEBUCKET"."PERSON" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0019814
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0019814" ON "COURSEBUCKET"."PERSON" ("EMAIL") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PERSON_LANGUAGE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PERSON_LANGUAGE_PK" ON "COURSEBUCKET"."PERSON_LANGUAGE" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index PURCHASE_HISTORY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."PURCHASE_HISTORY_PK" ON "COURSEBUCKET"."PURCHASE_HISTORY" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index RATING_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."RATING_PK" ON "COURSEBUCKET"."RATING" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index REVIEW_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."REVIEW_PK" ON "COURSEBUCKET"."REVIEW" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SYS_C0021614
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SYS_C0021614" ON "COURSEBUCKET"."SLIDER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SLD_UNQ
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SLD_UNQ" ON "COURSEBUCKET"."SLIDER" ("ID", "FILES_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index STUDENT_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."STUDENT_PK" ON "COURSEBUCKET"."STUDENT" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index INSTRUCTOR_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."INSTRUCTOR_PK" ON "COURSEBUCKET"."TEACHER" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index WEEK_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."WEEK_PK" ON "COURSEBUCKET"."WEEK" ("ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Trigger COURSE_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."COURSE_DELETE" 
BEFORE DELETE
ON COURSE
FOR EACH ROW 
BEGIN
	DELETE FROM COURSE_LANGUAGE WHERE COURSE_ID = :OLD.ID;
	DELETE FROM COURSE_PROPERTIES WHERE COURSE_ID = :OLD.ID;
	DELETE FROM WEEK WHERE COURSE_ID = :OLD.ID;
	DELETE FROM REVIEW WHERE COURSE_ID = :OLD.ID;
	DELETE FROM RATING WHERE COURSE_ID = :OLD.ID;
	DBMS_OUTPUT.put_line('Ok');
END;

/
ALTER TRIGGER "COURSEBUCKET"."COURSE_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger NTFCN_AUTO_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."NTFCN_AUTO_DELETE" 
BEFORE INSERT 
ON NOTIFICATION 
FOR EACH ROW

BEGIN
  ERASE_NOTIFICATION(10,:new.USER_ID);
END;

/
ALTER TRIGGER "COURSEBUCKET"."NTFCN_AUTO_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger NTFCN_AUTO_ID
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."NTFCN_AUTO_ID" 
BEFORE INSERT 
ON NOTIFICATION 
FOR EACH ROW

BEGIN
  :new.ID := NOTIFICATION_ID.nextval;
END;

/
ALTER TRIGGER "COURSEBUCKET"."NTFCN_AUTO_ID" ENABLE;
--------------------------------------------------------
--  DDL for Trigger WEEK_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."WEEK_DELETE" 
BEFORE DELETE
ON WEEK
FOR EACH ROW 
BEGIN
	DELETE FROM LECTURE WHERE WEEK_ID = :OLD.ID;
	DBMS_OUTPUT.put_line('Ok');
END;

/
ALTER TRIGGER "COURSEBUCKET"."WEEK_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger COURSE_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."COURSE_DELETE" 
BEFORE DELETE
ON COURSE
FOR EACH ROW 
BEGIN
	DELETE FROM COURSE_LANGUAGE WHERE COURSE_ID = :OLD.ID;
	DELETE FROM COURSE_PROPERTIES WHERE COURSE_ID = :OLD.ID;
	DELETE FROM WEEK WHERE COURSE_ID = :OLD.ID;
	DELETE FROM REVIEW WHERE COURSE_ID = :OLD.ID;
	DELETE FROM RATING WHERE COURSE_ID = :OLD.ID;
	DBMS_OUTPUT.put_line('Ok');
END;

/
ALTER TRIGGER "COURSEBUCKET"."COURSE_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger NTFCN_AUTO_ID
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."NTFCN_AUTO_ID" 
BEFORE INSERT 
ON NOTIFICATION 
FOR EACH ROW

BEGIN
  :new.ID := NOTIFICATION_ID.nextval;
END;

/
ALTER TRIGGER "COURSEBUCKET"."NTFCN_AUTO_ID" ENABLE;
--------------------------------------------------------
--  DDL for Trigger NTFCN_AUTO_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."NTFCN_AUTO_DELETE" 
BEFORE INSERT 
ON NOTIFICATION 
FOR EACH ROW

BEGIN
  ERASE_NOTIFICATION(10,:new.USER_ID);
END;

/
ALTER TRIGGER "COURSEBUCKET"."NTFCN_AUTO_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger WEEK_DELETE
--------------------------------------------------------

  CREATE OR REPLACE TRIGGER "COURSEBUCKET"."WEEK_DELETE" 
BEFORE DELETE
ON WEEK
FOR EACH ROW 
BEGIN
	DELETE FROM LECTURE WHERE WEEK_ID = :OLD.ID;
	DBMS_OUTPUT.put_line('Ok');
END;

/
ALTER TRIGGER "COURSEBUCKET"."WEEK_DELETE" ENABLE;
--------------------------------------------------------
--  DDL for Procedure ERASE_NOTIFICATION
--------------------------------------------------------
set define off;

  CREATE OR REPLACE PROCEDURE "COURSEBUCKET"."ERASE_NOTIFICATION" (n IN NUMBER,userid IN VARCHAR2) IS

	r NUMBER := 1;

BEGIN
	FOR it IN (SELECT ID from NOTIFICATION WHERE USER_ID = userid ORDER BY TIME DESC) LOOP
        IF r > n THEN
            DELETE FROM NOTIFICATION WHERE ID = it.ID ;
        END IF;
        r := r+1;
	END LOOP;

EXCEPTION
    WHEN no_data_found THEN
        dbms_output.put_line('invalid employee id');
    WHEN others THEN
        dbms_output.put_line('unknown error' );

END;

/
--------------------------------------------------------
--  DDL for Function GET_RATING
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "COURSEBUCKET"."GET_RATING" (ID_COURSE IN NUMBER)
RETURN NUMBER IS
	RATING_VALUE NUMBER;
	COUNTT NUMBER;
BEGIN
	RATING_VALUE := 0;
	COUNTT := 0;
	FOR C IN (
						SELECT AVG(R.VALUE) AVG_VALUE 
						FROM RATING R 
						WHERE COURSE_ID = ID_COURSE
					 )
	LOOP
		RATING_VALUE := RATING_VALUE + NVL(C.AVG_VALUE,0);
		COUNTT := COUNTT + 1;
	END LOOP;

	RATING_VALUE := RATING_VALUE/COUNTT;
	RETURN RATING_VALUE;
END;

/
--------------------------------------------------------
--  DDL for Function GET_REVIEW
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "COURSEBUCKET"."GET_REVIEW" (ID_COURSE IN NUMBER)
RETURN NUMBER IS
	REVIEW_VALUE NUMBER;
	COUNTT NUMBER;
BEGIN
	REVIEW_VALUE := 0;
	FOR C IN (
						SELECT COURSE_ID
						FROM REVIEW R 
						WHERE COURSE_ID = ID_COURSE
					 )
	LOOP
		REVIEW_VALUE := REVIEW_VALUE + 1;
	END LOOP;
	RETURN REVIEW_VALUE;
END;

/
--------------------------------------------------------
--  DDL for Function NUM_OF_STUDENT
--------------------------------------------------------

  CREATE OR REPLACE FUNCTION "COURSEBUCKET"."NUM_OF_STUDENT" (ID_COURSE IN NUMBER)
RETURN NUMBER IS
	NUM NUMBER;
	COUNTT NUMBER;
BEGIN
	NUM := 0;
	FOR C IN (
						SELECT ID
						FROM PURCHASE_HISTORY 
						WHERE COURSE_ID = ID_COURSE
					 )
	LOOP
		NUM := NUM + 1;
	END LOOP;
	RETURN NUM;
END;

/
--------------------------------------------------------
--  Constraints for Table ADMIN
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."ADMIN" ADD CONSTRAINT "ADMIN_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."ADMIN" ADD CONSTRAINT "SYS_C0013282" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."ADMIN" ADD CONSTRAINT "SYS_C0014467" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."ADMIN" ADD CONSTRAINT "SYS_C0014675" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."ADMIN" ADD CONSTRAINT "SYS_C0015484" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."ADMIN" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CATEGORY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "CATEGORY_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0013284" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0013285" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0013287" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014468" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014469" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014470" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014676" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014677" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0014678" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0015491" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0015492" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "SYS_C0015493" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" MODIFY ("NAME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD UNIQUE ("NAME")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table COUNTRY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "COUNTRY_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0013289" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0013290" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0013291" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014471" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014472" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014473" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014679" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014680" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0014681" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0015504" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0015505" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "SYS_C0015506" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" MODIFY ("NAME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."COUNTRY" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table COURSE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "COURSE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "SYS_C0013293" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "SYS_C0014474" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "SYS_C0014682" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "SYS_C0015515" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table COURSE_LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "COURSE_LANGUAGE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0013304" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0013305" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0013306" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014475" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014476" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014477" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014683" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014684" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0014685" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0015528" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0015529" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "SYS_C0015530" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" MODIFY ("LANGUAGE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table COURSE_PROPERTIES
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "COURSE_OUTCOME_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "SYS_C0013308" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "SYS_C0014478" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "SYS_C0014686" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "SYS_C0015535" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table CREDIT_CARD
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" ADD CONSTRAINT "CREDIT_CARD_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" ADD CONSTRAINT "SYS_C0013316" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" ADD CONSTRAINT "SYS_C0014479" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" ADD CONSTRAINT "SYS_C0014687" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" ADD CONSTRAINT "SYS_C0015538" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CREDIT_CARD" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table DESIGNATION
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "DESIGNATION_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0013318" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0013319" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0013320" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014480" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014481" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014482" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014688" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014689" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0014690" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0015545" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0015546" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "SYS_C0015547" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" MODIFY ("TYPE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."DESIGNATION" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table EDUCATIONAL_STATUS
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "EDUCATIONAL_STATUS_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0013322" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0013323" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0013324" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014483" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014484" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014485" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014691" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014692" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0014693" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0015558" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0015559" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "SYS_C0015560" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" MODIFY ("TYPE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table FAQ
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "FAQ_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0013326" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0013327" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0013328" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0013329" CHECK ("QUESTION" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0013330" CHECK ("QUESTION_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014486" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014487" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014488" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014489" CHECK ("QUESTION" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014490" CHECK ("QUESTION_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014694" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014695" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014696" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014697" CHECK ("QUESTION" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0014698" CHECK ("QUESTION_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0015583" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0015584" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0015585" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0015586" CHECK ("QUESTION" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "SYS_C0015587" CHECK ("QUESTION_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FAQ" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FAQ" MODIFY ("STUDENT_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FAQ" MODIFY ("QUESTION" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FAQ" MODIFY ("QUESTION_TIME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table FILES
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0013336" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0013337" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0013339" CHECK ("CONTENT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0013340" CHECK ("UPLOAD_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0013341" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014491" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014492" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014493" CHECK ("CONTENT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014494" CHECK ("UPLOAD_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014495" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014699" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014700" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014701" CHECK ("CONTENT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014702" CHECK ("UPLOAD_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0014703" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0015593" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0015594" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0015595" CHECK ("CONTENT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0015596" CHECK ("UPLOAD_TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "SYS_C0015597" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILES" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILES" MODIFY ("TYPE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILES" MODIFY ("CONTENT" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILES" MODIFY ("UPLOAD_TIME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILES" MODIFY ("LAST_UPDATE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "TABLE1_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table FILE_TYPE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "FILE_TYPE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0013332" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0013333" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0013334" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014496" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014497" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014498" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014704" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014705" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0014706" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0015613" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0015614" CHECK ("TYPE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "SYS_C0015615" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" MODIFY ("TYPE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "LANGUAGE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0013345" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0013346" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0013347" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014499" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014500" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014501" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014707" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014708" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0014709" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0015626" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0015627" CHECK ("NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "SYS_C0015628" CHECK ("ADMIN_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" MODIFY ("NAME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LANGUAGE" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table LECTURE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "LECTURE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013349" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013350" CHECK ("LECTURE_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013351" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013352" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013353" CHECK ("IS_PREVIEW" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013354" CHECK ("WEEK_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0013970" CHECK ("FILE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014502" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014503" CHECK ("LECTURE_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014504" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014505" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014506" CHECK ("IS_PREVIEW" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014507" CHECK ("WEEK_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014508" CHECK ("FILE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014710" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014711" CHECK ("LECTURE_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014712" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014713" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014714" CHECK ("IS_PREVIEW" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014715" CHECK ("WEEK_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0014716" CHECK ("FILE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015657" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015658" CHECK ("LECTURE_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015659" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015660" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015661" CHECK ("IS_PREVIEW" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015662" CHECK ("WEEK_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "SYS_C0015663" CHECK ("FILE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("LECTURE_NO" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("TITLE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("LAST_UPDATE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("IS_PREVIEW" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("WEEK_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."LECTURE" MODIFY ("FILE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table MESSAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "SYS_C0015886" CHECK ("SENDER_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "SYS_C0015887" CHECK ("RECEIVER_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "SYS_C0015888" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "SYS_C0015891" CHECK ("FILE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" MODIFY ("SENDER_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" MODIFY ("RECEIVER_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" MODIFY ("FILE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table NOTIFICATION
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" ADD CONSTRAINT "NOTIFICATION_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" MODIFY ("USER_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" MODIFY ("FROM_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" MODIFY ("TIME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" MODIFY ("SEEN" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table PERSON
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "PERSON_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013356" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013357" CHECK ("EMAIL" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013358" CHECK ("PASSWORD" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013359" CHECK ("FIRST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013360" CHECK ("LAST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013361" CHECK ("SIGNUP_DATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013362" CHECK ("ABOUT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0013732" CHECK ("DOB" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014509" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014510" CHECK ("EMAIL" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014511" CHECK ("PASSWORD" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014512" CHECK ("FIRST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014513" CHECK ("LAST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014514" CHECK ("DOB" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014515" CHECK ("SIGNUP_DATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014516" CHECK ("ABOUT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014717" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014718" CHECK ("EMAIL" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014719" CHECK ("PASSWORD" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014720" CHECK ("FIRST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014721" CHECK ("LAST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014722" CHECK ("DOB" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014723" CHECK ("SIGNUP_DATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0014724" CHECK ("ABOUT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015673" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015674" CHECK ("EMAIL" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015675" CHECK ("PASSWORD" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015676" CHECK ("FIRST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015677" CHECK ("LAST_NAME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015678" CHECK ("DOB" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015679" CHECK ("SIGNUP_DATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "SYS_C0015680" CHECK ("ABOUT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("EMAIL" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("PASSWORD" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("FIRST_NAME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("LAST_NAME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("DOB" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("SIGNUP_DATE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" MODIFY ("ABOUT" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD UNIQUE ("EMAIL")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PERSON_LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "PERSON_LANGUAGE_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0013364" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0013365" CHECK ("PERSON_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0013366" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014517" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014518" CHECK ("PERSON_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014519" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014725" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014726" CHECK ("PERSON_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0014727" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0015707" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0015708" CHECK ("PERSON_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "SYS_C0015709" CHECK ("LANGUAGE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" MODIFY ("PERSON_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" MODIFY ("LANGUAGE_ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table PURCHASE_HISTORY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "PURCHASE_HISTORY_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0013368" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0013369" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0013370" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0013371" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0013372" CHECK ("COST" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014520" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014521" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014522" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014523" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014524" CHECK ("COST" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014728" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014729" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014730" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014731" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0014732" CHECK ("COST" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0015726" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0015727" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0015728" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0015729" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "SYS_C0015730" CHECK ("COST" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" MODIFY ("STUDENT_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" MODIFY ("TIME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" MODIFY ("COST" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table RATING
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "RATING_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0013374" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0013375" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0013376" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0013377" CHECK ("VALUE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0013378" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014525" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014526" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014527" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014528" CHECK ("VALUE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014529" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014733" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014734" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014735" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014736" CHECK ("VALUE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0014737" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0015747" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0015748" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0015749" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0015750" CHECK ("VALUE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "SYS_C0015751" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."RATING" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."RATING" MODIFY ("STUDENT_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."RATING" MODIFY ("VALUE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."RATING" MODIFY ("TIME" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table REVIEW
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "REVIEW_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0013380" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0013381" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0013382" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0013383" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0013384" CHECK ("TEXT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014530" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014531" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014532" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014533" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014534" CHECK ("TEXT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014738" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014739" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014740" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014741" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0014742" CHECK ("TEXT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0015768" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0015769" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0015770" CHECK ("STUDENT_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0015771" CHECK ("TIME" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "SYS_C0015772" CHECK ("TEXT" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" MODIFY ("STUDENT_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" MODIFY ("TIME" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" MODIFY ("TEXT" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table SLIDER
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."SLIDER" ADD CONSTRAINT "SLD_UNQ" UNIQUE ("ID", "FILES_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("FILES_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Constraints for Table STUDENT
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "STUDENT_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "SYS_C0013386" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "SYS_C0014537" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "SYS_C0014745" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "SYS_C0015785" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."STUDENT" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table TEACHER
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "INSTRUCTOR_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "SYS_C0013343" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "SYS_C0014538" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "SYS_C0014746" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "SYS_C0015789" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."TEACHER" MODIFY ("ID" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table WEEK
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0013388" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0013389" CHECK ("WEEK_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0013390" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0013391" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0013392" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014539" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014540" CHECK ("WEEK_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014541" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014542" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014543" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014747" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014748" CHECK ("WEEK_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014749" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014750" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0014751" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0015802" CHECK ("ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0015803" CHECK ("WEEK_NO" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0015804" CHECK ("TITLE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0015805" CHECK ("LAST_UPDATE" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "SYS_C0015806" CHECK ("COURSE_ID" IS NOT NULL) ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."WEEK" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."WEEK" MODIFY ("WEEK_NO" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."WEEK" MODIFY ("TITLE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."WEEK" MODIFY ("LAST_UPDATE" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."WEEK" MODIFY ("COURSE_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "WEEK_PK" PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1 BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table CATEGORY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "CATEGORY_SUB_CATEGORY" FOREIGN KEY ("PARENT_ID")
	  REFERENCES "COURSEBUCKET"."CATEGORY" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."CATEGORY" ADD CONSTRAINT "CAT_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table COUNTRY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COUNTRY" ADD CONSTRAINT "CON_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table COURSE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "COURSE_CATEGORY" FOREIGN KEY ("CATEGORY_ID")
	  REFERENCES "COURSEBUCKET"."CATEGORY" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "COURSE_COVER" FOREIGN KEY ("COVER_ID")
	  REFERENCES "COURSEBUCKET"."FILES" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE" ADD CONSTRAINT "COURSE_INSTRUCTOR" FOREIGN KEY ("TEACHER_ID")
	  REFERENCES "COURSEBUCKET"."TEACHER" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table COURSE_LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "COURSE_LANGUAGE" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."COURSE_LANGUAGE" ADD CONSTRAINT "COURSE_LANG_ID" FOREIGN KEY ("LANGUAGE_ID")
	  REFERENCES "COURSEBUCKET"."LANGUAGE" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table COURSE_PROPERTIES
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."COURSE_PROPERTIES" ADD CONSTRAINT "COURSE_OUTCOME_ID" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table DESIGNATION
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."DESIGNATION" ADD CONSTRAINT "DES_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table EDUCATIONAL_STATUS
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."EDUCATIONAL_STATUS" ADD CONSTRAINT "EDU_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table FAQ
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "FCI" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."FAQ" ADD CONSTRAINT "FSI" FOREIGN KEY ("STUDENT_ID")
	  REFERENCES "COURSEBUCKET"."STUDENT" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table FILES
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FILES" ADD CONSTRAINT "FIL_KE" FOREIGN KEY ("TYPE")
	  REFERENCES "COURSEBUCKET"."FILE_TYPE" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table FILE_TYPE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."FILE_TYPE" ADD CONSTRAINT "FILE_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."LANGUAGE" ADD CONSTRAINT "LANG_AD" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table LECTURE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."LECTURE" ADD CONSTRAINT "LECTURE_WEEK" FOREIGN KEY ("WEEK_ID")
	  REFERENCES "COURSEBUCKET"."WEEK" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table MESSAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "MESSAGE_CONTENT" FOREIGN KEY ("FILE_ID")
	  REFERENCES "COURSEBUCKET"."FILES" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "MESSAGE_RECEIVER" FOREIGN KEY ("RECEIVER_ID")
	  REFERENCES "COURSEBUCKET"."PERSON" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."MESSAGE" ADD CONSTRAINT "MESSAGE_SENDER" FOREIGN KEY ("SENDER_ID")
	  REFERENCES "COURSEBUCKET"."PERSON" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table NOTIFICATION
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."NOTIFICATION" ADD CONSTRAINT "PER_NOT" FOREIGN KEY ("USER_ID")
	  REFERENCES "COURSEBUCKET"."PERSON" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PERSON
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "PER_CAR" FOREIGN KEY ("CARD_ID")
	  REFERENCES "COURSEBUCKET"."CREDIT_CARD" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "PER_CON" FOREIGN KEY ("COUNTRY_ID")
	  REFERENCES "COURSEBUCKET"."COUNTRY" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON" ADD CONSTRAINT "PER_PHO" FOREIGN KEY ("PHOTO_ID")
	  REFERENCES "COURSEBUCKET"."FILES" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PERSON_LANGUAGE
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "PER_LANG_LANG" FOREIGN KEY ("LANGUAGE_ID")
	  REFERENCES "COURSEBUCKET"."LANGUAGE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PERSON_LANGUAGE" ADD CONSTRAINT "PER_LANG_PER" FOREIGN KEY ("PERSON_ID")
	  REFERENCES "COURSEBUCKET"."PERSON" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table PURCHASE_HISTORY
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "PUR_COUR" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."PURCHASE_HISTORY" ADD CONSTRAINT "PUR_STU" FOREIGN KEY ("STUDENT_ID")
	  REFERENCES "COURSEBUCKET"."STUDENT" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table RATING
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "RAT_COUR" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."RATING" ADD CONSTRAINT "RAT_STU" FOREIGN KEY ("STUDENT_ID")
	  REFERENCES "COURSEBUCKET"."STUDENT" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table REVIEW
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "REV_COUR" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."REVIEW" ADD CONSTRAINT "REV_STU" FOREIGN KEY ("STUDENT_ID")
	  REFERENCES "COURSEBUCKET"."STUDENT" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table SLIDER
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."SLIDER" ADD CONSTRAINT "FK_AD_SL" FOREIGN KEY ("ADMIN_ID")
	  REFERENCES "COURSEBUCKET"."ADMIN" ("ID") ON DELETE CASCADE ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" ADD CONSTRAINT "FK_FL_SL" FOREIGN KEY ("FILES_ID")
	  REFERENCES "COURSEBUCKET"."FILES" ("ID") ON DELETE CASCADE ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table STUDENT
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."STUDENT" ADD CONSTRAINT "STU_EDU" FOREIGN KEY ("EDU_STATUS_ID")
	  REFERENCES "COURSEBUCKET"."EDUCATIONAL_STATUS" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table TEACHER
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."TEACHER" ADD CONSTRAINT "INST_DESIG" FOREIGN KEY ("DESIGNATION_ID")
	  REFERENCES "COURSEBUCKET"."DESIGNATION" ("ID") ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table WEEK
--------------------------------------------------------

  ALTER TABLE "COURSEBUCKET"."WEEK" ADD CONSTRAINT "WEEK_COURSE" FOREIGN KEY ("COURSE_ID")
	  REFERENCES "COURSEBUCKET"."COURSE" ("ID") ENABLE;
