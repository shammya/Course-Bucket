--------------------------------------------------------
--  File created - Thursday-August-19-2021   
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

   CREATE SEQUENCE  "COURSEBUCKET"."NOTIFICATION_ID"  MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 76 NOCACHE  NOORDER  NOCYCLE ;
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
   ) SEGMENT CREATION DEFERRED 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 NOCOMPRESS LOGGING
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
Insert into COURSEBUCKET.ADMIN (ID) values ('mehedi');
Insert into COURSEBUCKET.ADMIN (ID) values ('shammya');
REM INSERTING into COURSEBUCKET.CATEGORY
SET DEFINE OFF;
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (14,'Ruby',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (5,'Python',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (30,'Architectural Design',10,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (1,'Computer Programming',35,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (2,'C++',1,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (3,'JAVA',1,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (4,'C#',1,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (6,'Development',35,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (7,'Web Development',6,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (8,'Mobile Development',6,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (9,'Game Development',6,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (10,'Design',35,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (11,'Web Design',10,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (12,'Game Design',10,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (13,'3D and Animation',10,null,'mehedi');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (15,'Business',35,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (16,'Entreprenuership',15,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (17,'Communication',15,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (18,'Management',15,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (19,'It & Software',35,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (20,'Network & Security',19,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (21,'Operating System',19,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (22,'Hardware',19,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (23,'Office Productivity',35,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (24,'Excel',23,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (25,'PowerPoint',23,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (26,'Teaching & Academics',35,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (27,'Engineering',26,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (28,'Math',26,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (29,'Science',26,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (31,'C',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (32,'Database',6,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (33,'Data Science',6,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (34,'English',26,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (36,'Kotlin',1,null,'shammya');
Insert into COURSEBUCKET.CATEGORY (ID,NAME,PARENT_ID,PHOTO_ID,ADMIN_ID) values (35,'Category',null,null,'mehedi');
REM INSERTING into COURSEBUCKET.COUNTRY
SET DEFINE OFF;
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (1,'Bangladesh','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (2,'Kuwet','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (3,'Turky','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (5,'Bhutan','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (6,'Afganistan','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (10,'Egypt','mehedi');
Insert into COURSEBUCKET.COUNTRY (ID,NAME,ADMIN_ID) values (12,'Soudi Arabia','mehedi');
REM INSERTING into COURSEBUCKET.COURSE
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (19,'JAVA complete BootCamp 2020','From beginner to Professional','Who this course is for:

This course is perfect for absolute beginners with no previous coding experience, to intermediates looking to sharpen their skills to the expert level.
Those looking to build creative and advanced Java apps for either personal use or for high-paying clients as a self-employed contractor.
Those who love letting their own creative genius shine, whilst getting paid handsome amounts to do so.',100000,99,to_date('06-DEC-20','DD-MON-RR'),'T','abrar',174,3,'Structured Programming like C or C++><Object Oriented Programming Language C++',' java input output>< datatypes in java>< OOP concept>< Datastructures and Algorithms>< GUI designing with JavaFx');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (20,'Node.js tutorial 2020','From beginner to professional','Who this course is for:
Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,95,to_date('06-DEC-20','DD-MON-RR'),'T','abrar',183,7,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor','Grasp how NodeJS works under the hood><Structure a Node application in modules><Use npm and manage node packages><Understand Buffers, Streams, and Pipes');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (21,'Learn JAVA','k','k	kjkjkljlkjkj',120000,50,to_date('06-DEC-20','DD-MON-RR'),'F','mehediT',194,7,'k','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (31,'Raspberry Pi Full Stack Raspbian','A whirlwind tour of full-stack web application development on the Raspberry Pi','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','sabbir',289,21,'Basic Django knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><functions><datastructures><algorithms');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (32,'Arduino Step by Step: Getting Started','The original comprehensive course designed for new Arduino Makers','Who this course is for:

This course is perfect for absolute beginners with no previous coding experience, to intermediates looking to sharpen their skills to the expert level.
Those looking to build creative and advanced Java apps for either personal use or for high-paying clients as a self-employed contractor.
Those who love letting their own creative genius shine, whilst getting paid handsome amounts to do so.',100000,98,to_date('10-DEC-20','DD-MON-RR'),'T','abrar',300,22,'Structured Programming like C or C++><Object Oriented Programming Language C++',' java input output>< datatypes in java>< OOP concept>< Datastructures and Algorithms>< GUI designing with JavaFx');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (38,'Fundamentals of Structural Analysis','Get to grips with civil engineering structural analysis once and for all','Who is this course for:

This course is great for undergraduate engineering students who feel a little lost in their structures lectures. We start from scratch, establishing the basics and build from there.
More advanced engineering students who want a refresher or who didn''t quite grasp the fundamentals first time around would also benefit from this course.
If you''re about to start an engineering program, this course is a great way to get a head start.
If you''re a structures genius already, this course is probably not for you.',1234,0,to_date('10-DEC-20','DD-MON-RR'),'T','mahdi',365,27,'text editor><basic programming knowledge><basic mathematical operations><object oriented programming','Conduct basic calculations to size space launchers to reach orbit.><Understand the need for and different design schools behind reusable space launchers.><Understand critical rocket design parameters and be able to use them.><Understand the physical principles and different technologies behind advanced interstellar propulsion concepts.><Understand the physical principles and different technologies behind electric propulsion.');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (39,'Introduction to Probability and Statistics','A college level first course in Statistics','Who is this course for:

This course is great for undergraduate engineering students who feel a little lost in their structures lectures. We start from scratch, establishing the basics and build from there.
More advanced engineering students who want a refresher or who didn''t quite grasp the fundamentals first time around would also benefit from this course.
If you''re about to start an engineering program, this course is a great way to get a head start.
If you''re a structures genius already, this course is probably not for you.',1234,0,to_date('10-DEC-20','DD-MON-RR'),'T','mahdi',373,28,'text editor><basic programming knowledge><basic mathematical operations><object oriented programming','Conduct basic calculations to size space launchers to reach orbit.><Understand the need for and different design schools behind reusable space launchers.><Understand critical rocket design parameters and be able to use them.><Understand the physical principles and different technologies behind advanced interstellar propulsion concepts.><Understand the physical principles and different technologies behind electric propulsion.');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (40,'Learn Algebra The Easy Way!','Algebra Review - Slope, Graphing Linear Equations, Exponents, Factoring, Solving Quadratic Equations, & Radicals','Who is this course for:

This course is great for undergraduate engineering students who feel a little lost in their structures lectures. We start from scratch, establishing the basics and build from there.
More advanced engineering students who want a refresher or who didn''t quite grasp the fundamentals first time around would also benefit from this course.
If you''re about to start an engineering program, this course is a great way to get a head start.
If you''re a structures genius already, this course is probably not for you.',1234,0,to_date('10-DEC-20','DD-MON-RR'),'T','mahdi',381,28,'text editor><basic programming knowledge><basic mathematical operations><object oriented programming','Conduct basic calculations to size space launchers to reach orbit.><Understand the need for and different design schools behind reusable space launchers.><Understand critical rocket design parameters and be able to use them.><Understand the physical principles and different technologies behind advanced interstellar propulsion concepts.><Understand the physical principles and different technologies behind electric propulsion.');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (14,'css','css','cssclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasda',1234,0,to_date('05-DEC-20','DD-MON-RR'),'F','abrar',159,7,'html','css');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (16,'css','css','cssclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasda',1234,0,to_date('05-DEC-20','DD-MON-RR'),'F','abrar',165,7,'html','css');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (17,'a','aasdf','asdfasdfasdfsdfsadfasdfsadfsadfsadf',123,0,to_date('05-DEC-20','DD-MON-RR'),'F','abrar',168,7,'a','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (18,'a','a','fsdafaaaaaaaaaafsdafaaaaaaaaaafsdafaaaaaaaaaafsdafaaaaaaaaaa',123123,0,to_date('05-DEC-20','DD-MON-RR'),'F','abrar',171,8,'a','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (41,'Learning Autodesk Revit Architecture 2016','Building Information Modeling for Architectural Design','Who is this course for:

This course is great for undergraduate engineering students who feel a little lost in their structures lectures. We start from scratch, establishing the basics and build from there.
More advanced engineering students who want a refresher or who didn''t quite grasp the fundamentals first time around would also benefit from this course.
If you''re about to start an engineering program, this course is a great way to get a head start.
If you''re a structures genius already, this course is probably not for you.',3233,0,to_date('10-DEC-20','DD-MON-RR'),'T','mahdi',389,30,'text editor><basic programming knowledge><basic mathematical operations><object oriented programming','Conduct basic calculations to size space launchers to reach orbit.><Understand the need for and different design schools behind reusable space launchers.><Understand critical rocket design parameters and be able to use them.><Understand the physical principles and different technologies behind advanced interstellar propulsion concepts.><Understand the physical principles and different technologies behind electric propulsion.');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (42,'C Programming For Beginners - Master the C Language','C Programming will increase career options. Become a better dev in other languages by learning C. Pointers explained','What will student learn in this course :

Understand the fundamentals of the C Programming Language
Make yourself more marketable for entry level programming positions
Create your first C Application
Learn one of the most popular, widly used languages in the world
Understand variables and the different data types
Apply for real-time programming positions
Understand the core language that most modern languages are based on
Learn how to write high-quality code',1234,4,to_date('13-DEC-20','DD-MON-RR'),'T','abrar',412,31,'Dev c++ or code blocs IDE><basic mathematical knowledge><boolean logic><loop condition><psudocode','how to code c program from scratch><how to take input and show output><how to use function><array , string and other datastructures');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (11,'Learn JAVA','k','k	kjkjkljlkjkj',120000,98,to_date('28-NOV-20','DD-MON-RR'),'F','mehediT',107,7,'k','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (6,'C# complete course 2020','From beginner to advanced','Who this course is for:
Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,96,to_date('27-NOV-20','DD-MON-RR'),'T','pranto',51,8,'Basic c++ knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming ',null);
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (1,'Learn JAVA','k','k	kjkjkljlkjkj',1000,0,to_date('22-NOV-20','DD-MON-RR'),'F','mehediT',2,7,'k','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (10,'Javafx Gui Design 2020','Building attractive and material gui s for desktop app','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('27-NOV-20','DD-MON-RR'),'T','sakib',96,8,'Basic java fx knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','Grasp how NodeJS works under the hood');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (3,'JAVA complete BootCamp 2020','From beginner to Professional','Who this course is for:

This course is perfect for absolute beginners with no previous coding experience, to intermediates looking to sharpen their skills to the expert level.
Those looking to build creative and advanced Java apps for either personal use or for high-paying clients as a self-employed contractor.
Those who love letting their own creative genius shine, whilst getting paid handsome amounts to do so.',100000,99,to_date('26-NOV-20','DD-MON-RR'),'T','abrar',20,3,'Structured Programming like C or C++><Object Oriented Programming Language C++',' java input output>< datatypes in java>< OOP concept>< Datastructures and Algorithms>< GUI designing with JavaFx');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (7,'Django tutorial 2020','Fullstack web development using Django','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('27-NOV-20','DD-MON-RR'),'T','sabbir',62,7,'Basic Django knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming',null);
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (8,'Android App Development ','Learning android from scratch','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,96,to_date('27-NOV-20','DD-MON-RR'),'T','sabbir',73,8,'Basic Android knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming',null);
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (9,'Blender 3d design and animation Course 2020','Complete tutorial on Blender from novice to expert','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,96,to_date('27-NOV-20','DD-MON-RR'),'T','sakib',85,13,'Basic Blender knowledge (variables, loops, and basic functions)><Basic Autocad knowledge><A text editor><Object Oriented programming',null);
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (2,'HTML complete course 2020','Learning HTML from scratch','in this course i walk you through differnt important branchs in html to make you confident from complete begineer to professional.',5000,0,to_date('26-NOV-20','DD-MON-RR'),'F','mehediT',14,7,'Programming ><Design Pattern','HTML From Sratch><paragraph ><table><design');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (30,'Microsoft Windows Server 2016 Training for Beginners','Install Windows Server 2016, Build a Windows Domain, Domain Controller, Learn DHCP, Install Windows 10, and much more...','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','sabbir',278,21,'Basic Django knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><functions><datastructures><algorithms');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (33,'PowerPoint Presentation Slide Design and Animation','Learn Microsoft PowerPoint from Beginner to Pro and Design Professional Presentation Slides with Attractive Animations','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','pranto',309,25,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><datastructures><algorithms><functions><Standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (34,'Microsoft Excel - Excel from Beginner to Advanced','Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Office 365','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','pranto',320,24,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><datastructures><algorithms><functions><Standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (36,'Autodesk Revit - beginner to an intermediate level','Includes 15 quizzes & a Final Exam. For users of Revit 2016, 2017, 2018, 2019, 2020 & 2021.','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','sakib',342,30,'Basic java fx knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><functions><datastructures><algorithms><standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (37,'Rocket Engineering and Interstellar Space Propulsion','Become a rocket scientist and understand the most advanced space propulsion technologies.','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','sakib',353,27,'Basic java fx knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><functions><datastructures><algorithms><standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (43,'machine learning','machine learning zero to pro','onek kisu shikhano hobe',1200,10,to_date('15-AUG-21','DD-MON-RR'),'F','dd',435,5,'basic math','data science');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (4,'Node.js tutorial 2020','From beginner to professional','Who this course is for:
Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,95,to_date('27-NOV-20','DD-MON-RR'),'T','abrar',29,7,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor','Grasp how NodeJS works under the hood><Structure a Node application in modules><Use npm and manage node packages><Understand Buffers, Streams, and Pipes');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (5,'The Complete C++ tutorial 2020','From beginner to expert','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('27-NOV-20','DD-MON-RR'),'T','pranto',40,2,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming',null);
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (12,'Learn JAVA','k','k	kjkjkljlkjkj',120000,50,to_date('28-NOV-20','DD-MON-RR'),'T','mehediT',110,7,'k','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (13,'Course','Subtitle','AAAAAAAAAAAAAAAAAA',1,0,to_date('28-NOV-20','DD-MON-RR'),'T','mehediT',113,8,'a','aa');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (22,'Learn JAVA','k','k	kjkjkljlkjkj',120000,50,to_date('06-DEC-20','DD-MON-RR'),'F','mehediT',197,7,'k','a');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (23,'Entrepreneurship and Business Life Coach Certification','Entrepreneurship Coach Certification: Coach Entrepreneurs to Quantum Leap Their Business with Real-World MBA Training','Who this course is for:

This course is perfect for absolute beginners with no previous coding experience, to intermediates looking to sharpen their skills to the expert level.
Those looking to build creative and advanced Java apps for either personal use or for high-paying clients as a self-employed contractor.
Those who love letting their own creative genius shine, whilst getting paid handsome amounts to do so.',100000,98,to_date('10-DEC-20','DD-MON-RR'),'T','abrar',205,16,'Structured Programming like C or C++><Object Oriented Programming Language C++',' java input output>< datatypes in java>< OOP concept>< Datastructures and Algorithms>< GUI designing with JavaFx');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (24,'Brilliant Customer Service: How to Impress your Customers!','Enhance your customer support and truly differentiate yourself from your competition!','Who this course is for:

This course is perfect for absolute beginners with no previous coding experience, to intermediates looking to sharpen their skills to the expert level.
Those looking to build creative and advanced Java apps for either personal use or for high-paying clients as a self-employed contractor.
Those who love letting their own creative genius shine, whilst getting paid handsome amounts to do so.',100000,98,to_date('10-DEC-20','DD-MON-RR'),'T','abrar',214,17,'Structured Programming like C or C++><Object Oriented Programming Language C++',' java input output>< datatypes in java>< OOP concept>< Datastructures and Algorithms>< GUI designing with JavaFx');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (26,'[2021] The Complete Management Skills Certification Course','Used at Amazon®, Unilever®, Walmart®, and other top firms. Learn leadership, productivity, communication skills & more!','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','pranto',234,18,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><datastructures><algorithms><functions><Standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (27,'Learn Ethical Hacking From Scratch','Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','pranto',245,20,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><datastructures><algorithms><functions><Standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (28,'The Complete Ethical Hacking Course: Beginner to Advanced!','Learn how to do ethical hacking, penetration testing, web testing, and wifi hacking using kali linux!','
Who this course is for:

Those looking to build a career as a c++ developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','pranto',256,20,'Basic Javascript knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><datastructures><algorithms><functions><Standard template library');
Insert into COURSEBUCKET.COURSE (ID,TITLE,SUBTITLE,DESCRIPTION,PRICE,OFFER,PUBLISH_DATE,IS_APPROVED,TEACHER_ID,COVER_ID,CATEGORY_ID,PREREQUISITES,OUTCOMES) values (29,'Linux Shell Scripting: A Project-Based Approach to Learning','Learn how to shell script through project-based training (Bash Scripting, Bash Programming, Sed, Grep, Awk, and More)','Who this course is for:

Those looking to build a career as a NodeJS developer
Those desiring to become MEAN stack developers
Those who don''t have server technology experience but wish to gain this skill
Those coming from other server technologies (like PHP, ASP.NET, or Ruby on Rails) and want to learn Node
Those who want to only have to write both client and server code in one language: Javascript
Those who want to grasp Express',100000,97,to_date('10-DEC-20','DD-MON-RR'),'T','sabbir',267,21,'Basic Django knowledge (variables, loops, and basic functions)><Basic HTML knowledge><A text editor><Object Oriented programming','input output><functions><datastructures><algorithms');
REM INSERTING into COURSEBUCKET.COURSE_LANGUAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (27,19,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (28,20,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (29,20,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (30,21,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (54,31,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (55,31,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (56,31,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (57,32,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (58,32,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (59,32,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (75,38,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (76,38,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (77,39,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (78,39,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (79,40,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (80,40,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (81,41,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (82,41,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (22,14,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (24,16,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (25,17,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (26,18,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (18,11,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (17,10,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (1,1,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (3,3,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (7,6,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (15,10,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (16,10,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (10,7,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (8,7,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (9,7,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (11,8,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (12,8,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (13,9,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (14,9,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (2,2,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (4,4,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (5,4,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (6,5,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (19,12,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (20,13,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (21,13,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (31,22,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (32,23,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (33,23,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (34,23,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (35,24,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (36,24,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (37,24,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (39,26,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (40,26,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (41,26,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (42,27,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (43,27,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (44,27,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (45,28,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (46,28,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (47,28,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (48,29,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (49,29,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (50,29,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (51,30,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (52,30,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (53,30,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (60,33,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (61,33,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (62,33,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (63,34,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (64,34,4);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (65,34,3);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (83,42,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (69,36,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (70,36,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (71,36,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (72,37,6);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (73,37,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (74,37,1);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (84,42,2);
Insert into COURSEBUCKET.COURSE_LANGUAGE (ID,COURSE_ID,LANGUAGE_ID) values (85,43,2);
REM INSERTING into COURSEBUCKET.COURSE_PROPERTIES
SET DEFINE OFF;
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (56,179,19,'contains PDF',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (57,180,19,'excel sheets',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (58,181,19,'video files',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (59,182,19,' sql files',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (60,187,20,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (61,188,20,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (62,189,20,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (63,190,20,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (64,191,20,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (65,192,20,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (66,196,21,'k',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (112,294,31,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (113,295,31,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (114,296,31,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (115,297,31,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (116,298,31,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (117,299,31,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (118,305,32,'contains PDF',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (119,306,32,'excel sheets',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (120,307,32,'video files',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (121,308,32,' sql files',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (152,368,38,'2.5 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (153,369,38,'10 downloadable resource',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (154,370,38,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (155,371,38,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (156,372,38,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (157,376,39,'2.5 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (158,377,39,'10 downloadable resource',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (159,378,39,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (160,379,39,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (161,380,39,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (162,384,40,'2.5 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (163,385,40,'10 downloadable resource',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (164,386,40,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (165,387,40,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (166,388,40,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (167,392,41,'2.5 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (168,393,41,'10 downloadable resource',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (169,394,41,'Full lifetime access',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (170,395,41,'Access on mobile and TV',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (171,396,41,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (51,161,14,'course',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (53,167,16,'course',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (54,170,17,'a',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (55,173,18,'a',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (48,109,11,'k',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (13,45,5,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (14,46,5,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (15,47,5,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (16,48,5,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (17,49,5,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (18,50,5,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (24,67,7,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (25,68,7,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (26,69,7,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (27,70,7,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (28,71,7,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (29,72,7,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (42,101,10,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (1,5,1,'k',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (43,102,10,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (44,103,10,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (45,104,10,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (46,105,10,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (47,106,10,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (3,25,3,'contains PDF',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (4,26,3,'excel sheets',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (5,27,3,'video files',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (6,28,3,' sql files',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (36,90,9,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (37,91,9,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (38,92,9,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (39,93,9,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (40,94,9,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (41,95,9,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (30,78,8,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (31,79,8,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (32,80,8,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (33,81,8,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (34,82,8,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (35,83,8,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (2,18,2,'HTML beginner to advance',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (7,33,4,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (8,34,4,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (9,35,4,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (10,36,4,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (11,37,4,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (12,38,4,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (19,56,6,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (20,57,6,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (21,58,6,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (22,59,6,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (23,60,6,'Certificate of completion',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (49,112,12,'k',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (50,115,13,'a',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (67,199,22,'k',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (68,210,23,'contains PDF',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (69,211,23,'excel sheets',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (70,212,23,'video files',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (71,213,23,' sql files',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (72,219,24,'contains PDF',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (73,220,24,'excel sheets',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (74,221,24,'video files',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (75,222,24,' sql files',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (82,239,26,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (83,240,26,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (84,241,26,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (85,242,26,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (86,243,26,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (87,244,26,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (88,250,27,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (89,251,27,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (90,252,27,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (91,253,27,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (92,254,27,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (93,255,27,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (94,261,28,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (95,262,28,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (96,263,28,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (97,264,28,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (98,265,28,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (99,266,28,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (100,272,29,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (101,273,29,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (102,274,29,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (103,275,29,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (104,276,29,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (105,277,29,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (106,283,30,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (107,284,30,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (108,285,30,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (109,286,30,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (110,287,30,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (111,288,30,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (122,314,33,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (123,315,33,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (124,316,33,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (125,317,33,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (126,318,33,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (127,319,33,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (128,325,34,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (129,326,34,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (130,327,34,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (131,328,34,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (132,329,34,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (133,330,34,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (172,417,42,'60 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (173,418,42,'229 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (174,419,42,'116 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (175,420,42,'1 coding exercise',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (176,421,42,'Full lifetime access',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (177,422,42,'Access on mobile and TV',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (140,347,36,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (141,348,36,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (142,349,36,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (143,350,36,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (144,351,36,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (145,352,36,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (146,358,37,'13 hours on-demand video',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (147,359,37,'4 articles',2);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (148,360,37,'53 downloadable resources',3);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (149,361,37,'Full lifetime access',4);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (150,362,37,'Access on mobile and TV',5);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (151,363,37,'Certificate of completion',6);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (178,423,42,'Certificate of completion',7);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (179,438,43,'python boss',0);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (180,439,43,'helo',1);
Insert into COURSEBUCKET.COURSE_PROPERTIES (ID,ICON_ID,COURSE_ID,TEXT,POSITION) values (181,440,43,'hi',2);
REM INSERTING into COURSEBUCKET.CREDIT_CARD
SET DEFINE OFF;
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (1,1234567890,'Md. Mehedi Hasan',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (2,1234567890123456,'Jahin',to_date('21-SEP-23','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (4,1111,'shammo',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (5,1211,'moitry',to_date('31-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (3,1212,'Rahim ',to_date('31-JAN-21','DD-MON-RR'));
Insert into COURSEBUCKET.CREDIT_CARD (ID,CARD_NO,NAME_ON_CARD,EXPIRE_DATE) values (6,12345,'asdfsd',to_date('15-FEB-09','DD-MON-RR'));
REM INSERTING into COURSEBUCKET.DESIGNATION
SET DEFINE OFF;
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (1,'Professor','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (2,'Assistant Professor','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (3,'Lecturer','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (4,'Student','mehedi');
Insert into COURSEBUCKET.DESIGNATION (ID,TYPE,ADMIN_ID) values (5,'Diploma','shammya');
REM INSERTING into COURSEBUCKET.EDUCATIONAL_STATUS
SET DEFINE OFF;
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (1,'SSC','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (2,'HSC','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (3,'BSc. (Honors)','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (4,'BSc. (Degree)','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (5,'BSc. in Engineering','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (6,'BBA','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (7,'BA','mehedi');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (8,'MSc','shammya');
Insert into COURSEBUCKET.EDUCATIONAL_STATUS (ID,TYPE,ADMIN_ID) values (9,'Diploma Engineering','shammya');
REM INSERTING into COURSEBUCKET.FAQ
SET DEFINE OFF;
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (8,7,'mehediS','Sir ei course shikhe ForceCode e red hote parbo?',to_date('07-DEC-20','DD-MON-RR'),'na er jonno amar contest programming er course ta kora lagbe',to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (9,7,'mehediS','Course ta amar jonno valo hobe?',to_date('07-DEC-20','DD-MON-RR'),'Ami to tomake chini na, kivbe bolbo?',to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (15,9,'mehediS','sir',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (16,9,'mehediS','how',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (17,9,'mehediS','are',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (18,9,'mehediS','you',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (19,9,'mehediS','apnar',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (20,9,'mehediS','course',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (21,9,'mehediS','ta',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (22,9,'mehediS','onek',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (23,9,'mehediS','valo',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (24,9,'mehediS','hoise',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (25,9,'mehediS','thank ',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (26,9,'mehediS','you',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (10,22,'mehediS','Sir ,apni nijei java paren na.youtube e free te er theke valo video asae.',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (11,22,'mehediS','sir java valo shikhar jonno apnake youtube video link dibo ?
',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (12,22,'mehediS','sir java fx er to kisui bollen na
',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (13,22,'mehediS','sir ,apnar theke valo gui ami e design korte pari
',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (5,2,'mehediS','Notun question',to_date('28-NOV-20','DD-MON-RR'),'Notun answer',to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (1,3,'mehediS','I have no question',to_date('28-NOV-20','DD-MON-RR'),'Ok no problem',to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (2,3,'mehediS','I will question later',to_date('28-NOV-20','DD-MON-RR'),'Ok I will answer later',to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (3,2,'mehediS','Eita k banaise',to_date('28-NOV-20','DD-MON-RR'),'Ami banaisi',to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (4,2,'mehediS','Course ta ki amar basay parcel pathano jabe?',to_date('28-NOV-20','DD-MON-RR'),'Na sir jabena',to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (6,6,'mehediS','apnar ei course ta korle ki google amake job offer dibe?',to_date('02-DEC-20','DD-MON-RR'),'valo kore shikhle diteo pare....',to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (7,6,'mehediS','Sir, ami onno site e apnar ei course free paisi, ekhonki eta kinbo??',to_date('02-DEC-20','DD-MON-RR'),'tomar name admin k report dicchi',to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (14,22,'mehediS','sir ,apni reply diccen na keno .naki apni bot',to_date('09-DEC-20','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (27,1,'kazi','what is the curriculumm',to_date('18-AUG-21','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (28,1,'kazi','abcd',to_date('18-AUG-21','DD-MON-RR'),null,null);
Insert into COURSEBUCKET.FAQ (ID,COURSE_ID,STUDENT_ID,QUESTION,QUESTION_TIME,ANSWER,ANSWER_TIME) values (29,1,'mehediS','avvc',to_date('18-AUG-21','DD-MON-RR'),null,null);
REM INSERTING into COURSEBUCKET.FILES
SET DEFINE OFF;
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (149,9,'Message','ami tarati change kortesi. Please unapprove korben na, ami more jabo tahole...',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (151,9,'Message','kire kemon achos?',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (174,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_174_Picture_20_java.jpg',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (175,4,'how to use i/o statements in java','taking input and showing output',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (176,2,'datatypes explained in java','/Course/Overflow/Files/Video/Video_176_Video_22_java.mp4',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (177,3,'Datastructures and Algorithms described and visualized .','/Course/Overflow/Files/PDF/PDF_177_PDF_23_07-Splay-Trees.pdf',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (178,4,'OOP concept ','oop concept described .',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (179,6,'Properties icon','FILE_PDF_ALT',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (180,6,'Properties icon','FILE_EXCEL_ALT',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (181,6,'Properties icon','VIDEO_CAMERA',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (182,6,'Properties icon','DATABASE',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (183,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_183_Picture_29_nodejs.jpg',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (184,4,'how to use i/o','i/o operations explained',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (185,2,'using datatypes','/Course/Overflow/Files/Video/Video_185_Video_31_blender3d.mp4',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (186,3,'datastructures and algorithms explained','/Course/Overflow/Files/PDF/PDF_186_PDF_32_fibonacci-4up.pdf',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (187,6,'Properties icon','VIDEO_CAMERA',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (188,6,'Properties icon','FILE_ALT',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (189,6,'Properties icon','FILE_WORD_ALT',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (190,6,'Properties icon','LANGUAGE',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (191,6,'Properties icon','DESKTOP',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (192,6,'Properties icon','GRADUATION_CAP',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (193,1,'No Title','/Course/Overflow/Files/Picture/Picture_193_twt.png',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (194,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_194_Picture_110_629302_8a2d_2.jpg',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (195,5,'skdjfslkdjf','dslfjklsdfj',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (196,6,'Properties icon','TROPHY',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (289,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_289_hard2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (290,4,'input and output','how to work with input and output statements',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (291,2,'datatypes detailed explanations','/Course/Overflow/Files/Video/Video_291_Video_280_Video_269_Video_64_python.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (292,3,'Basic and advanced datastructures implementations','/Course/Overflow/Files/PDF/PDF_292_PDF_281_PDF_270_PDF_65_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (293,5,'resource link','www.link.com',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (294,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (295,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (296,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (297,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (298,6,'Properties icon','MOBILE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (299,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (300,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_300_hard1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (301,4,'how to use i/o statements in java','taking input and showing output',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (302,2,'datatypes explained in java','/Course/Overflow/Files/Video/Video_302_Video_207_Video_176_Video_22_java.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (303,3,'Datastructures and Algorithms described and visualized .','/Course/Overflow/Files/PDF/PDF_303_PDF_208_PDF_177_PDF_23_07-Splay-Trees.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (304,4,'OOP concept ','oop concept described .',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (305,6,'Properties icon','FILE_PDF_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (306,6,'Properties icon','FILE_EXCEL_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (307,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (308,6,'Properties icon','DATABASE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (353,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_353_eng2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (354,4,'Introduction to fxml','create fxml files and load it on the window',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (355,2,'Adding functionalities using controller class','/Course/Overflow/Files/Video/Video_355_Video_344_Video_333_Video_98_java.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (356,3,'Performing necessary actions on action event occuring','/Course/Overflow/Files/PDF/PDF_356_PDF_345_PDF_334_PDF_99_routine_january_2020.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (357,5,'www.link.com','10 essential projects to make you expert',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (358,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (359,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (360,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (361,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (362,6,'Properties icon','MOBILE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (363,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (364,1,'No Title','/Course/Overflow/Files/Picture/Picture_364_Person 2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (365,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_365_eng.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (366,4,'input output','this is a text',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (367,2,'this is a video','/Course/Overflow/Files/Video/Video_367_Video_131_My Mother - How Much I Love Her - EXCLUSIVE NASHEED - Muhammad Al Muqit.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (368,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (369,6,'Properties icon','SHARE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (370,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (371,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (372,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (373,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_373_math2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (374,4,'input output','this is a text',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (375,2,'this is a video','/Course/Overflow/Files/Video/Video_375_Video_367_Video_131_My Mother - How Much I Love Her - EXCLUSIVE NASHEED - Muhammad Al Muqit.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (376,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (377,6,'Properties icon','SHARE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (378,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (379,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (380,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (381,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_381_math1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (382,4,'input output','this is a text',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (383,2,'this is a video','/Course/Overflow/Files/Video/Video_383_Video_375_Video_367_Video_131_My Mother - How Much I Love Her - EXCLUSIVE NASHEED - Muhammad Al Muqit.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (384,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (385,6,'Properties icon','SHARE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (386,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (387,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (388,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (389,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_389_archi2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (390,4,'input output','this is a text',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (391,2,'this is a video','/Course/Overflow/Files/Video/Video_391_Video_367_Video_131_My Mother - How Much I Love Her - EXCLUSIVE NASHEED - Muhammad Al Muqit.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (392,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (393,6,'Properties icon','SHARE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (394,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (395,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (396,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (398,1,'No Title','/Course/Overflow/Files/Picture/Picture_398_mehedi.png',to_date('12-DEC-20','DD-MON-RR'),to_date('12-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (154,1,'No Title','/Course/Overflow/Files/Picture/Picture_154_aha.jpg',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (155,1,'No Title','/Course/Overflow/Files/Picture/Picture_155_Coronavirus-PNG-Transparent-HD-Photo.png',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (156,1,'No Title','/Course/Overflow/Files/Picture/Picture_156_aha.jpg',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (157,1,'No Title','/Course/Overflow/Files/Picture/Picture_157_aha.jpg',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (158,1,'No Title','/Course/Overflow/Files/Picture/Picture_158_aha.jpg',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (159,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_159_Coronavirus-PNG-Transparent-HD-Photo.png',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (160,4,'class','classasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasda',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (161,6,'Properties icon','GRADUATION_CAP',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (399,1,'No Title','/Course/Overflow/Files/Picture/Picture_399_mehedi.png',to_date('12-DEC-20','DD-MON-RR'),to_date('12-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (400,1,'No Title','/Course/Overflow/Files/Picture/Picture_400_mehedi.png',to_date('12-DEC-20','DD-MON-RR'),to_date('12-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (397,1,'No Title','/Course/Overflow/Files/Picture/Picture_397_facebook.png',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (165,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_165_Picture_159_Coronavirus-PNG-Transparent-HD-Photo.png',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (166,4,'class','classasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasdaclassasdasda',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (167,6,'Properties icon','GRADUATION_CAP',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (168,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_168_Coronavirus-PNG-Transparent-HD-Photo.png',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (169,4,'a','asdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (170,6,'Properties icon','COMMENTING',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (171,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_171_Coronavirus-PNG-Transparent-HD-Photo.png',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (172,5,'123123123','123123',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (173,6,'Properties icon','GRADUATION_CAP',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (200,9,'Message','tomar information complete na.amra tomake hacker hisebe treat kortesi.',to_date('07-DEC-20','DD-MON-RR'),to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (201,1,'No Title','/Course/Overflow/Files/Picture/Picture_201_fcbk.png',to_date('07-DEC-20','DD-MON-RR'),to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (202,9,'Message','who are you ?',to_date('07-DEC-20','DD-MON-RR'),to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (203,9,'Message','hi guys',to_date('07-DEC-20','DD-MON-RR'),to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (204,1,'Message','/Course/Overflow/Files/Picture/Picture_204_twitter.png',to_date('07-DEC-20','DD-MON-RR'),to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (412,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_412_c.jpg',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (413,4,'this is and article','Skip this quiz and start at the next lesson.

Make sure you don''t skip any lessons.

Tip: Use another display to watch the videos and code along with me on your computer.',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (414,2,'this is a video lecture','/Course/Overflow/Files/Video/Video_414_java.mp4',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (415,3,'this is a PDF','/Course/Overflow/Files/PDF/PDF_415_fibonacci-4up.pdf',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (416,5,'this is a link','www.youtube.com',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (417,6,'Properties icon','VIDEO_CAMERA',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (418,6,'Properties icon','FILE_ALT',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (419,6,'Properties icon','FILE_WORD_ALT',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (410,1,'No Title','/Course/Overflow/Files/Picture/Picture_410_8.jpg',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (411,1,'No Title','/Course/Overflow/Files/Picture/Picture_411_me.jpg',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (420,6,'Properties icon','FILE_EXCEL_ALT',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (421,6,'Properties icon','GROUP',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (422,6,'Properties icon','DESKTOP',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (423,6,'Properties icon','TROPHY',to_date('13-DEC-20','DD-MON-RR'),to_date('13-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (107,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_107_3.jpg',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (108,5,'dslfjklsdfj','skdjfslkdjf',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (109,6,'Properties icon','TROPHY',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (121,9,'Message','Ok I know it.
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (122,9,'Message','lskjfls fklsj fljslf lskdjf lksjflk sjdlkfa fjlksjf lksjf lkjsfjf',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (125,9,'Message','Do you know me??
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (126,9,'Message','Yeah!!!
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (127,9,'Message','Hello sir...
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (128,9,'Message','Hello sir
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (129,9,'Message','Please reply...
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (130,9,'Message','Hello...
',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (45,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (46,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (47,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (48,6,'Properties icon','LANGUAGE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (49,6,'Properties icon','DESKTOP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (50,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (67,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (68,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (69,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (70,6,'Properties icon','GROUP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (71,6,'Properties icon','MOBILE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (72,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (7,5,'link desc','link',to_date('23-NOV-20','DD-MON-RR'),to_date('23-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (2,1,'Course Cover','newidpath2222',to_date('22-NOV-20','DD-MON-RR'),to_date('23-APR-12','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (5,6,'Properties icon','TROPHY',to_date('22-NOV-20','DD-MON-RR'),to_date('22-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (6,5,'skdjfslkdjf','dslfjklsdfj',to_date('23-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (9,1,'No Title','/Course/Overflow/Files/Picture/Picture_9_IMG_6455.JPG',to_date('23-NOV-20','DD-MON-RR'),to_date('23-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (1,1,'No Title','/Course/Overflow/Files/Picture/Picture_1_IMG_7950.JPG',to_date('22-NOV-20','DD-MON-RR'),to_date('22-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (13,1,'No Title','/Course/Overflow/Files/Picture/Picture_13_me.jpg',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (51,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_51_c#.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (52,4,'input output','how to work with input and output',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (53,2,'how to work with datatypes ','/Course/Overflow/Files/Video/Video_53_c#app.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (54,3,'implementation of  basic and advanced datastructures','/Course/Overflow/Files/PDF/PDF_54_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (55,5,'www.link.com','introduction to objct oriented programming',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (96,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_96_java gui.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (97,4,'Introduction to fxml','create fxml files and load it on the window',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (98,2,'Adding functionalities using controller class','/Course/Overflow/Files/Video/Video_98_java.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (99,3,'Performing necessary actions on action event occuring','/Course/Overflow/Files/PDF/PDF_99_routine_january_2020.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (100,5,'www.link.com','10 essential projects to make you expert',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (101,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (102,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (103,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (104,6,'Properties icon','GROUP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (105,6,'Properties icon','MOBILE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (106,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (10,1,'No Title','/Course/Overflow/Files/Picture/Picture_10_twitter.png',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (11,1,'No Title','/Course/Overflow/Files/Picture/Picture_11_1705079.jpg',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (12,1,'No Title','/Course/Overflow/Files/Picture/Picture_12_in.png',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (19,1,'No Title','/Course/Overflow/Files/Picture/Picture_19_player.png',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (20,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_20_java.jpg',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (21,4,'how to use i/o statements in java','taking input and showing output',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (22,2,'datatypes explained in java','/Course/Overflow/Files/Video/Video_22_java.mp4',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (23,3,'Datastructures and Algorithms described and visualized .','/Course/Overflow/Files/PDF/PDF_23_07-Splay-Trees.pdf',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (24,4,'OOP concept ','oop concept described .',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (197,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_197_Picture_110_629302_8a2d_2.jpg',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (198,5,'skdjfslkdjf','dslfjklsdfj',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (199,6,'Properties icon','TROPHY',to_date('06-DEC-20','DD-MON-RR'),to_date('06-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (205,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_205_business1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (206,4,'how to use i/o statements in java','taking input and showing output',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (207,2,'datatypes explained in java','/Course/Overflow/Files/Video/Video_207_Video_176_Video_22_java.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (208,3,'Datastructures and Algorithms described and visualized .','/Course/Overflow/Files/PDF/PDF_208_PDF_177_PDF_23_07-Splay-Trees.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (210,6,'Properties icon','FILE_PDF_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (211,6,'Properties icon','FILE_EXCEL_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (212,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (213,6,'Properties icon','DATABASE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (214,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_214_communication.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (215,4,'how to use i/o statements in java','taking input and showing output',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (216,2,'datatypes explained in java','/Course/Overflow/Files/Video/Video_216_Video_207_Video_176_Video_22_java.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (217,3,'Datastructures and Algorithms described and visualized .','/Course/Overflow/Files/PDF/PDF_217_PDF_208_PDF_177_PDF_23_07-Splay-Trees.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (218,4,'OOP concept ','oop concept described .',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (219,6,'Properties icon','FILE_PDF_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (220,6,'Properties icon','FILE_EXCEL_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (221,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (222,6,'Properties icon','DATABASE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (234,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_234_management.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (235,4,'input and output','using input and output statements in c++ ',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (236,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_236_Video_225_Video_42_c++.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (237,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_237_PDF_226_PDF_43_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (238,5,'www.link.com','here you find the resource',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (239,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (240,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (152,9,'Message','hi admin',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (153,9,'Message','*i am admin',to_date('05-DEC-20','DD-MON-RR'),to_date('05-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (241,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (242,6,'Properties icon','LANGUAGE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (243,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (244,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (245,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_245_ethical1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (246,4,'input and output','using input and output statements in c++ ',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (247,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_247_Video_236_Video_225_Video_42_c++.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (248,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_248_PDF_237_PDF_226_PDF_43_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (249,5,'www.link.com','here you find the resource',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (250,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (251,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (252,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (253,6,'Properties icon','LANGUAGE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (254,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (255,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (256,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_256_ethical2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (257,4,'input and output','using input and output statements in c++ ',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (258,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_258_Video_247_Video_236_Video_225_Video_42_c++.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (259,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_259_PDF_248_PDF_237_PDF_226_PDF_43_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (260,5,'www.link.com','here you find the resource',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (261,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (262,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (263,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (264,6,'Properties icon','LANGUAGE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (265,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (266,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (267,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_267_op1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (268,4,'input and output','how to work with input and output statements',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (269,2,'datatypes detailed explanations','/Course/Overflow/Files/Video/Video_269_Video_64_python.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (270,3,'Basic and advanced datastructures implementations','/Course/Overflow/Files/PDF/PDF_270_PDF_65_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (271,5,'resource link','www.link.com',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (272,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (273,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (274,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (275,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (276,6,'Properties icon','MOBILE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (277,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (278,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_278_op2.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (279,4,'input and output','how to work with input and output statements',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (280,2,'datatypes detailed explanations','/Course/Overflow/Files/Video/Video_280_Video_269_Video_64_python.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (281,3,'Basic and advanced datastructures implementations','/Course/Overflow/Files/PDF/PDF_281_PDF_270_PDF_65_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (282,5,'resource link','www.link.com',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (283,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (284,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (285,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (286,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (287,6,'Properties icon','MOBILE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (288,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (309,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_309_powerpoint.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (310,4,'input and output','using input and output statements in c++ ',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (311,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_311_Video_247_Video_236_Video_225_Video_42_c++.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (312,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_312_PDF_248_PDF_237_PDF_226_PDF_43_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (313,5,'www.link.com','here you find the resource',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (314,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (315,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (316,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (317,6,'Properties icon','LANGUAGE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (318,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (319,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (320,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_320_ex.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (321,4,'input and output','using input and output statements in c++ ',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (322,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_322_Video_311_Video_247_Video_236_Video_225_Video_42_c++.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (323,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_323_PDF_312_PDF_248_PDF_237_PDF_226_PDF_43_fibonacci-4up.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (324,5,'here you find the resource','www.link.com',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (325,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (326,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (327,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (328,6,'Properties icon','LANGUAGE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (329,6,'Properties icon','DESKTOP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (330,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (342,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_342_archi1.jpg',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (343,4,'Introduction to fxml','create fxml files and load it on the window',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (344,2,'Adding functionalities using controller class','/Course/Overflow/Files/Video/Video_344_Video_333_Video_98_java.mp4',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (345,3,'Performing necessary actions on action event occuring','/Course/Overflow/Files/PDF/PDF_345_PDF_334_PDF_99_routine_january_2020.pdf',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (346,5,'www.link.com','10 essential projects to make you expert',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (347,6,'Properties icon','VIDEO_CAMERA',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (348,6,'Properties icon','FILE_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (349,6,'Properties icon','FILE_WORD_ALT',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (350,6,'Properties icon','GROUP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (351,6,'Properties icon','MOBILE',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (352,6,'Properties icon','GRADUATION_CAP',to_date('10-DEC-20','DD-MON-RR'),to_date('10-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (424,1,'Profile Picture','http://localhost:8800/resources/pb/czTtCIUbmlsIeTjErjaFIUSWQQ3Az7opXpvpi7ctureGpUVRSxBL53J6W5Loj3pgzPp1GBBKDZe371',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (425,1,'Profile Picture','http://localhost:8800/resources/pb/CA5O5h62EGjYaTjErjapyi2qOKRMaz09WHgpi7cturewRKrnPXhJqC1cmVG3j3pg4Ycbe1t60meT5a',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (426,1,'Course Cover','http://localhost:8800/resources/pb/dTN9NqtKHLknZTjErjawDlbcIT86NsheNdppi7cturebH9fEDlJXtW1pSUmhp3ngLKIDIKSxjn2r0r',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (427,4,'io operations','{"blocks":[{"key":"d3ei6","text":"in this program we show how to use io operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8vrtq","text":"int main(){","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7tkm5","text":"float a = 0;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aje0t","text":"}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3eglm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (428,2,'{"blocks":[{"key":"8cqup","text":"fthis video demonstrates about data types in python","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/i8KuccaXD0gauJRyFykrZlSlKRSN2uprugVvi5deo943d3AMFLtJgVKh4km3p4uTSOxreRUEev7m',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (429,1,'Course Cover','http://localhost:8800/resources/pb/dTN9NqtKHLknZTjErjawDlbcIT86NsheNdppi7cturebH9fEDlJXtW1pSUmhp3ngLKIDIKSxjn2r0r',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (430,4,'io operations','{"blocks":[{"key":"d3ei6","text":"in this program we show how to use io operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8vrtq","text":"int main(){","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7tkm5","text":"float a = 0;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aje0t","text":"}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3eglm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (431,2,'{"blocks":[{"key":"8cqup","text":"fthis video demonstrates about data types in python","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/i8KuccaXD0gauJRyFykrZlSlKRSN2uprugVvi5deo943d3AMFLtJgVKh4km3p4uTSOxreRUEev7m',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (432,10,'PROPERTY','FaPython',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (433,10,'PROPERTY','FaIcons',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (434,10,'PROPERTY','FaIcons',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (435,1,'Course Cover','http://localhost:8800/resources/pb/dTN9NqtKHLknZTjErjawDlbcIT86NsheNdppi7cturebH9fEDlJXtW1pSUmhp3ngLKIDIKSxjn2r0r',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (436,4,'io operations','{"blocks":[{"key":"d3ei6","text":"in this program we show how to use io operations","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"8vrtq","text":"int main(){","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"7tkm5","text":"float a = 0;","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"aje0t","text":"}","type":"code-block","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"3eglm","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (437,2,'{"blocks":[{"key":"8cqup","text":"fthis video demonstrates about data types in python","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}','http://localhost:8800/resources/pv/i8KuccaXD0gauJRyFykrZlSlKRSN2uprugVvi5deo943d3AMFLtJgVKh4km3p4uTSOxreRUEev7m',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (438,10,'PROPERTY','FaPython',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (439,10,'PROPERTY','FaIcons',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (440,10,'PROPERTY','FaIcons',to_date('15-AUG-21','DD-MON-RR'),to_date('15-AUG-21','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (25,6,'Properties icon','FILE_PDF_ALT',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (26,6,'Properties icon','FILE_EXCEL_ALT',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (27,6,'Properties icon','VIDEO_CAMERA',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (28,6,'Properties icon','DATABASE',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (61,1,'No Title','/Course/Overflow/Files/Picture/Picture_61_profile2.png',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (62,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_62_django.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (63,4,'input and output','how to work with input and output statements',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (64,2,'datatypes detailed explanations','/Course/Overflow/Files/Video/Video_64_python.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (65,3,'Basic and advanced datastructures implementations','/Course/Overflow/Files/PDF/PDF_65_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (66,5,'resource link','www.link.com',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (73,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_73_androidapp.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (74,4,'input output','input and output operations in android.',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (75,2,'datatypes in android development','/Course/Overflow/Files/Video/Video_75_Andriod App Development.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (76,3,'Complete datastructure and algorithm implementation in android also standard template library.','/Course/Overflow/Files/PDF/PDF_76_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (77,5,'www.link.com','object oriented programming in android app development',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (90,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (91,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (92,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (93,6,'Properties icon','GROUP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (94,6,'Properties icon','MOBILE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (95,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (78,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (79,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (80,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (81,6,'Properties icon','GROUP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (82,6,'Properties icon','MOBILE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (83,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (84,1,'No Title','/Course/Overflow/Files/Picture/Picture_84_man.png',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (85,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_85_Blender 3d.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (86,4,'i/o operations','input and output operations in blender 3d design',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (87,2,'designing 3d shapes using blender with 100 special tips.','/Course/Overflow/Files/Video/Video_87_blender3d.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (88,3,'10 basic Animations building from scratch','/Course/Overflow/Files/PDF/PDF_88_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (89,5,'www.link.com','here is the link for 10 essentials projects to make you expert',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (14,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_14_pinterest.png',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (15,4,'HTML INTRODUCTION','This is introduction on html.Good Luck !',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (16,4,'HTML tag ','using html , table, paragraph , header ,footer,style ... How to use them perfectly in html.',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (17,3,'More details on frequently used html tags.','/Course/Overflow/Files/PDF/PDF_17_SkienaTheAlgorithmDesignManual.pdf',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (18,6,'Properties icon','TROPHY',to_date('26-NOV-20','DD-MON-RR'),to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (29,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_29_nodejs.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (30,4,'how to use i/o','i/o operations explained',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (31,2,'using datatypes','/Course/Overflow/Files/Video/Video_31_blender3d.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (32,3,'datastructures and algorithms explained','/Course/Overflow/Files/PDF/PDF_32_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (33,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (34,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (35,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (36,6,'Properties icon','LANGUAGE',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (37,6,'Properties icon','DESKTOP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (38,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (39,1,'No Title','/Course/Overflow/Files/Picture/Picture_39_profile1.png',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (40,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_40_C++.jpg',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (41,4,'input and output','using input and output statements in c++ ',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (42,2,'primary datypes and classes','/Course/Overflow/Files/Video/Video_42_c++.mp4',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (43,3,'Datastructures and Algorithms explained','/Course/Overflow/Files/PDF/PDF_43_fibonacci-4up.pdf',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (44,5,'www.link.com','here you find the resource',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (56,6,'Properties icon','VIDEO_CAMERA',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (57,6,'Properties icon','FILE_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (58,6,'Properties icon','FILE_WORD_ALT',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (59,6,'Properties icon','GROUP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (60,6,'Properties icon','GRADUATION_CAP',to_date('27-NOV-20','DD-MON-RR'),to_date('27-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (110,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_110_629302_8a2d_2.jpg',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (111,5,'skdjfslkdjf','dslfjklsdfj',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (112,6,'Properties icon','TROPHY',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (113,1,'Course Cover','/Course/Overflow/Files/Picture/Picture_113_950390_270f_3.jpg',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (114,2,'aaaaaaaaaaaaaaaaaa','/Course/Overflow/Files/Video/Video_114_My Mother - How Much I Love Her - EXCLUSIVE NASHEED - Muhammad Al Muqit.mp4',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (115,6,'Properties icon','TROPHY',to_date('28-NOV-20','DD-MON-RR'),to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (116,9,'Message','Hi',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (117,9,'Message','Hi',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (118,9,'Message','How are you?',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (119,9,'Message','Fine',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (120,9,'Message','I am new teacher',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (123,9,'Message','Ok I knew it',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (124,1,'Message','/Course/Overflow/Files/Picture/Picture_124_3.jpg',to_date('29-NOV-20','DD-MON-RR'),to_date('29-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (132,9,'Message','ok
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (133,9,'Message','ok
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (134,9,'Message','ok
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (135,9,'Message','2 ok
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (136,9,'Message','ok
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (137,9,'Message','Hello
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (140,9,'Message','AAAAAAAAAAAAAAAAAAA AAAA A A A A A A A A A AAAAAA AAAAAAAAAAAAAAAAAAA AAAA AAAAAAAAA A A A A A A AAAAAAAAAAAAAAAAAAA AAAA AAAAAAAAAAAAAAA   A  A AA AAAA A A A A AAAAAAA AAAA  A A A A A A AA A A 
AAAAA  ',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (131,9,'Message','Hi
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (138,9,'Message','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (139,9,'Message','AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (141,9,'Message','jafklsjdf ksljf 
',to_date('30-NOV-20','DD-MON-RR'),to_date('30-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (142,9,'Message','Hi',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (143,9,'Message','hello sir',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (144,9,'Message','ok',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (145,9,'Message','k apni',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (146,9,'Message','durum durum',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (147,9,'Message','ki mia tumi html course e pinterest er picture diso ken.taratari change koro naile course unapprove hoeye jabe..',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (148,1,'Message','/Course/Overflow/Files/Picture/Picture_148_pinterest.png',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.FILES (ID,TYPE,TITLE,CONTENT,UPLOAD_TIME,LAST_UPDATE) values (150,9,'Message','accha 1 din somoy dicchi...',to_date('02-DEC-20','DD-MON-RR'),to_date('02-DEC-20','DD-MON-RR'));
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
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (1,'Bangla','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (2,'English','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (3,'Arabic','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (4,'Hindi','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (6,'Persian','mehedi');
Insert into COURSEBUCKET.LANGUAGE (ID,NAME,ADMIN_ID) values (7,'Urdu','shammya');
REM INSERTING into COURSEBUCKET.LECTURE
SET DEFINE OFF;
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (44,1,'input and output',to_date('06-DEC-20','DD-MON-RR'),'F',44,175);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (45,1,'datatypes',to_date('06-DEC-20','DD-MON-RR'),'F',45,176);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (46,1,'Datastructures and Algorithms',to_date('06-DEC-20','DD-MON-RR'),'F',46,177);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (47,1,'OOP',to_date('06-DEC-20','DD-MON-RR'),'F',47,178);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (48,1,'input output',to_date('06-DEC-20','DD-MON-RR'),'F',48,184);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (49,1,'datatypes',to_date('06-DEC-20','DD-MON-RR'),'F',49,185);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (50,1,'datastructures and algorithms',to_date('06-DEC-20','DD-MON-RR'),'F',50,186);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (51,1,'Lecture Name',to_date('06-DEC-20','DD-MON-RR'),'F',51,195);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (85,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',85,290);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (86,1,'Datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',86,291);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (87,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',87,292);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (88,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',88,293);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (89,1,'input and output',to_date('10-DEC-20','DD-MON-RR'),'F',89,301);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (90,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',90,302);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (91,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',91,303);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (92,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',92,304);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (113,1,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'F',113,366);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (114,2,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'T',113,367);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (115,1,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'F',114,374);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (116,2,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'T',114,375);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (117,1,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'F',115,382);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (118,2,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'T',115,383);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (119,1,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'F',116,390);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (120,2,'Lecture Name',to_date('10-DEC-20','DD-MON-RR'),'T',116,391);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (39,1,'basic',to_date('05-DEC-20','DD-MON-RR'),'F',39,160);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (41,1,'basic',to_date('05-DEC-20','DD-MON-RR'),'F',41,166);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (42,1,'Lecture Name',to_date('05-DEC-20','DD-MON-RR'),'F',42,169);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (43,1,'Lecture Name',to_date('05-DEC-20','DD-MON-RR'),'F',43,172);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (36,1,'Lecture Name',to_date('28-NOV-20','DD-MON-RR'),'F',36,108);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (16,1,'i/o operations',to_date('27-NOV-20','DD-MON-RR'),'F',16,52);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (1,1,'Lecture Name',to_date('26-NOV-20','DD-MON-RR'),'F',1,6);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (17,1,'datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',17,53);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (18,1,'Datastructures and Algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',18,54);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (19,1,'OOP',to_date('27-NOV-20','DD-MON-RR'),'F',19,55);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (32,1,'Introduction to fxml',to_date('27-NOV-20','DD-MON-RR'),'F',32,97);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (33,1,'Controller class',to_date('27-NOV-20','DD-MON-RR'),'T',33,98);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (34,1,'Action Event',to_date('27-NOV-20','DD-MON-RR'),'F',34,99);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (35,1,'Project',to_date('27-NOV-20','DD-MON-RR'),'F',35,100);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (5,1,'input and output',to_date('27-NOV-20','DD-MON-RR'),'F',5,21);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (6,1,'datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',6,22);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (7,1,'Datastructures and Algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',7,23);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (8,1,'OOP',to_date('27-NOV-20','DD-MON-RR'),'F',8,24);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (20,1,'i/o operations',to_date('27-NOV-20','DD-MON-RR'),'F',20,63);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (21,1,'Datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',21,64);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (22,1,'Datastructures and Algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',22,65);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (23,1,'OOP',to_date('27-NOV-20','DD-MON-RR'),'F',23,66);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (24,1,'i/o operations',to_date('27-NOV-20','DD-MON-RR'),'F',24,74);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (25,1,'datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',25,75);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (26,1,'datastructures and algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',26,76);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (27,1,'OOP',to_date('27-NOV-20','DD-MON-RR'),'F',27,77);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (28,1,'Lecture Name',to_date('27-NOV-20','DD-MON-RR'),'F',28,86);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (29,1,'3d shapes',to_date('27-NOV-20','DD-MON-RR'),'T',29,87);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (30,1,'Animation',to_date('27-NOV-20','DD-MON-RR'),'F',30,88);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (31,1,'Project',to_date('27-NOV-20','DD-MON-RR'),'F',31,89);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (2,1,'Introduction',to_date('26-NOV-20','DD-MON-RR'),'F',2,15);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (3,1,'Lecture 1 ',to_date('26-NOV-20','DD-MON-RR'),'F',3,16);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (4,1,'Lecture 2',to_date('26-NOV-20','DD-MON-RR'),'F',4,17);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (9,1,'input output',to_date('27-NOV-20','DD-MON-RR'),'F',9,30);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (10,1,'datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',10,31);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (11,1,'datastructures and algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',11,32);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (12,1,'i/o operations',to_date('27-NOV-20','DD-MON-RR'),'F',12,41);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (13,1,'datatypes',to_date('27-NOV-20','DD-MON-RR'),'F',13,42);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (14,1,'Datastructures and Algorithms',to_date('27-NOV-20','DD-MON-RR'),'F',14,43);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (15,1,'OOP',to_date('27-NOV-20','DD-MON-RR'),'F',15,44);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (37,1,'Lecture Name',to_date('28-NOV-20','DD-MON-RR'),'F',37,111);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (38,1,'Lecture Name',to_date('28-NOV-20','DD-MON-RR'),'T',38,114);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (52,1,'Lecture Name',to_date('06-DEC-20','DD-MON-RR'),'F',52,198);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (53,1,'input and output',to_date('10-DEC-20','DD-MON-RR'),'F',53,206);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (54,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',54,207);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (55,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',55,208);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (57,1,'input and output',to_date('10-DEC-20','DD-MON-RR'),'F',57,215);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (58,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',58,216);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (59,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',59,217);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (60,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',60,218);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (65,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',65,235);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (66,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',66,236);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (67,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',67,237);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (68,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',68,238);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (69,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',69,246);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (70,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',70,247);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (71,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',71,248);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (72,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',72,249);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (73,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',73,257);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (74,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',74,258);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (75,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',75,259);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (76,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',76,260);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (77,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',77,268);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (78,1,'Datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',78,269);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (79,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',79,270);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (80,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',80,271);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (81,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',81,279);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (82,1,'Datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',82,280);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (83,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',83,281);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (84,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',84,282);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (93,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',93,310);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (94,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',94,311);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (95,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',95,312);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (96,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',96,313);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (97,1,'i/o operations',to_date('10-DEC-20','DD-MON-RR'),'F',97,321);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (98,1,'datatypes',to_date('10-DEC-20','DD-MON-RR'),'F',98,322);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (99,1,'Datastructures and Algorithms',to_date('10-DEC-20','DD-MON-RR'),'F',99,323);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (100,1,'OOP',to_date('10-DEC-20','DD-MON-RR'),'F',100,324);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (121,1,'Lecture 1',to_date('13-DEC-20','DD-MON-RR'),'F',117,413);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (122,1,'Lecture 1',to_date('13-DEC-20','DD-MON-RR'),'F',118,414);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (123,1,'Lecture 1',to_date('13-DEC-20','DD-MON-RR'),'F',119,415);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (124,1,'Lecture 1',to_date('13-DEC-20','DD-MON-RR'),'F',120,416);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (105,1,'Introduction to fxml',to_date('10-DEC-20','DD-MON-RR'),'F',105,343);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (106,1,'Controller class',to_date('10-DEC-20','DD-MON-RR'),'T',106,344);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (107,1,'Action Event',to_date('10-DEC-20','DD-MON-RR'),'F',107,345);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (108,1,'Project',to_date('10-DEC-20','DD-MON-RR'),'F',108,346);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (109,1,'Introduction to fxml',to_date('10-DEC-20','DD-MON-RR'),'F',109,354);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (110,1,'Controller class',to_date('10-DEC-20','DD-MON-RR'),'T',110,355);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (111,1,'Action Event',to_date('10-DEC-20','DD-MON-RR'),'F',111,356);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (112,1,'Project',to_date('10-DEC-20','DD-MON-RR'),'F',112,357);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (125,1,'print a line',to_date('15-AUG-21','DD-MON-RR'),'T',121,436);
Insert into COURSEBUCKET.LECTURE (ID,LECTURE_NO,TITLE,LAST_UPDATE,IS_PREVIEW,WEEK_ID,FILE_ID) values (126,1,'Lecture Title',to_date('15-AUG-21','DD-MON-RR'),'F',122,437);
REM INSERTING into COURSEBUCKET.MESSAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (31,'mehediT','shammya',149);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (33,'mehediT','mehediS',151);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (36,'shammya','aman',200);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (37,'shammya','mariyam',202);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (38,'abrar','mehediS',203);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (39,'abrar','mehediS',204);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (8,'mehediT','mehediS',125);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (9,'mehediS','mehediT',126);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (10,'mehediS','mehediT',127);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (11,'mehediS','abrar',128);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (12,'mehediS','mehediT',129);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (13,'mehediT','mehediS',130);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (1,'mehediT','mehediS',116);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (2,'mehediS','mehediT',117);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (4,'mehediS','mehediT',119);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (3,'mehediT','mehediS',118);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (5,'abrar','mehediS',120);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (6,'mehediS','abrar',123);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (7,'mehediS','mehediT',124);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (19,'mehediS','mehediT',136);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (15,'mehediT','mehediS',132);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (16,'mehediT','mehediS',133);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (17,'mehediT','mehediS',134);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (18,'mehediT','mehediS',135);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (20,'mehediS','abrar',137);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (23,'mehediS','mehediT',140);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (14,'mehediS','mehediT',131);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (21,'mehediS','mehediT',138);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (22,'mehediS','abrar',139);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (24,'mehediS','sakib',142);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (25,'mehediS','abrar',143);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (26,'mehediS','mehediT',144);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (27,'mehediS','sakib',145);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (28,'mehediS','abrar',146);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (29,'shammya','mehediT',147);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (30,'shammya','mehediT',148);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (32,'shammya','mehediT',150);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (34,'shammya','jahin',152);
Insert into COURSEBUCKET.MESSAGE (ID,SENDER_ID,RECEIVER_ID,FILE_ID) values (35,'shammya','jahin',153);
REM INSERTING into COURSEBUCKET.NOTIFICATION
SET DEFINE OFF;
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (13,'sabbir','mehediS',to_date('07-DEC-20','DD-MON-RR'),'T',7,'REVIEW',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (14,'sabbir','mehediS',to_date('07-DEC-20','DD-MON-RR'),'T',7,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (15,'sabbir','mehediS',to_date('07-DEC-20','DD-MON-RR'),'T',7,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (26,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (27,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (28,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (29,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (30,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (31,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (32,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (33,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (34,'sakib','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',9,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (56,'shammya','mahdi',to_date('10-DEC-20','DD-MON-RR'),'F',40,'COURSEUPLOAD',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (57,'shammya','mahdi',to_date('10-DEC-20','DD-MON-RR'),'T',41,'COURSEUPLOAD',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (60,'shammya','rahman',to_date('12-DEC-20','DD-MON-RR'),'F',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (16,'mehediS','sabbir',to_date('07-DEC-20','DD-MON-RR'),'T',7,'FAQANSWER',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (61,'shammya','asif',to_date('12-DEC-20','DD-MON-RR'),'T',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (19,'mehediT','mehediS',to_date('09-DEC-20','DD-MON-RR'),'T',22,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (20,'mehediT','mehediS',to_date('09-DEC-20','DD-MON-RR'),'T',22,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (21,'mehediT','mehediS',to_date('09-DEC-20','DD-MON-RR'),'F',22,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (58,'shammya','a',to_date('10-DEC-20','DD-MON-RR'),'F',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (63,'shammya','kazi',to_date('13-DEC-20','DD-MON-RR'),'F',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (22,'mehediT','mehediS',to_date('09-DEC-20','DD-MON-RR'),'T',22,'FAQQUESTION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (64,'shammya','uzma',to_date('13-DEC-20','DD-MON-RR'),'T',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (59,'shammya','rahim',to_date('12-DEC-20','DD-MON-RR'),'F',null,'REGISTRATION',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (62,'shammya','abrar',to_date('12-DEC-20','DD-MON-RR'),'T',42,'COURSEUPLOAD',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (65,'shammya','abrar',to_date('13-DEC-20','DD-MON-RR'),'T',42,'COURSEUPLOAD',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (69,'mehediT','kazi',to_date('18-AUG-21','DD-MON-RR'),'F',1,'COURSEPURCHASE',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (70,'mehediT','kazi',to_date('18-AUG-21','DD-MON-RR'),'F',1,'RATING',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (71,'mehediT','kazi',to_date('18-AUG-21','DD-MON-RR'),'F',1,'REVIEW',null);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (72,'mehediT','kazi',to_date('18-AUG-21','DD-MON-RR'),'F',1,'FAQQUESTION',27);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (73,'mehediT','mehediS',to_date('18-AUG-21','DD-MON-RR'),'F',1,'FAQQUESTION',29);
Insert into COURSEBUCKET.NOTIFICATION (ID,USER_ID,FROM_ID,TIME,SEEN,COURSE_ID,TYPE,EVENT_ID) values (75,'mehediT','kazi',to_date('18-AUG-21','DD-MON-RR'),'F',1,'FAQQUESTION',28);
REM INSERTING into COURSEBUCKET.PERSON
SET DEFINE OFF;
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('aman','aman','$31$16$L4WgKstTTmhVqKEHV6XR4UQNDRc4BGIqjNCd9yXBZqk','Aman','Hossain',to_date('16-DEC-20','DD-MON-RR'),'a',null,null,to_date('06-DEC-20','DD-MON-RR'),'aman',null,193,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mahdi','mahdi','$31$16$Fqy3qyZom1MIUIfv7Eb6T0MkwAbP7gRC552U7zvMCqc','Mahdi','BUET 3',to_date('03-MAR-98','DD-MON-RR'),'buet',null,null,to_date('10-DEC-20','DD-MON-RR'),'i will crack google coding interview',3,364,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('roy','roy@gmail.com','$31$16$UrSftJkxAygpIsE2hT07lwzRE3D_cGnUsEa0DQs4BA0','Aman','Roy',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,null,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('azad','azad','$31$16$gS5QDxXw60Hp1y4D7jUC5NjlcXrL-nIek6iFhD7ChnU','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,154,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('azaz','azaz','$31$16$4gLAiBBgryoZ5CWVaCstLMzLuNAy_UXI7m5fgcpsjO8','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,155,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('cc','cc','$31$16$HKmUDm5nUmv8Ps1yKcUV2yoPpselw0j-omVq9_FZ1Tg','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,156,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('zz','zz','$31$16$CVM7PPhlvlCf320f1awTXp3bqHyLB0-5Ui0Z6xkp79I','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,157,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('zx','zx','$31$16$cS8iTZoaeofAzo_kZ3Wj6kzNUjxFULYxDh65jfPNDiA','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('05-DEC-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,158,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mariyam','mariyam','$31$16$6yzYnIQDohmFVDeuxtu9hh_X6dG-1I4QphBwpZtyp54','Jakia Sultana','Mariyam',to_date('07-DEC-20','DD-MON-RR'),null,null,null,to_date('07-DEC-20','DD-MON-RR'),'M',null,201,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('a','a','$31$16$iqeBKWRC_lC4o07jiZn1DpisI6gaIzovgbvc6XIShow','a','a',to_date('30-MAY-99','DD-MON-RR'),null,null,null,to_date('10-DEC-20','DD-MON-RR'),'lksajdklfj',null,397,6,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mehediS','66.mehedi@yahoo.com','$31$16$UykGjoMsA-6ZUosMe2cc3KfeVM8miaRUzNmZs15QPBo','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'Bangladesh University of Engineering and Technology','66.mehedi','mehedi66',to_date('23-NOV-20','DD-MON-RR'),'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',1,9,null,'mehedi66','mehedi66');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mehediT','66.mehedi@gmail.com','$31$16$V1Akjlg3HXh1QZD6spGHJ3y7XRh7swlGjBk-izsF6lY','Md. Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),'BUET','66.mehedi','66.mehedi',to_date('22-NOV-20','DD-MON-RR'),'What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',1,1,1,'66.mehedi','mehedi.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('jahin','jahinjihan05@gmail.com','$31$16$kkvEoO5Sui3iYWS9-Y1cgsodv70I1uan3Op85-eHbQA','Jubayer ','Hasan',to_date('08-SEP-03','DD-MON-RR'),'Government Science College','Jubayer Hasan Jahin','Jubayer Hasan Jahin',to_date('26-NOV-20','DD-MON-RR'),'Student',1,13,2,'Jubayer Hasan Jahin','Jahin.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mehedi','mehedi','$31$16$zd9Rpp3Uy-cUlPHouUGlCVsPsu3Weh1qNb2wQCRxEEs','Md Mehedi','Hasan',to_date('30-MAY-99','DD-MON-RR'),null,null,null,to_date('26-NOV-20','DD-MON-RR'),'Md. Mehedi Hasan',2,10,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('shammya','shammya','$2a$10$5BTJ6oAi2RMiO.rPYh4F3ueHoZSDWgj4OwckZKeKdvUnmL52nF2nu','Shammya','Shammya',to_date('27-NOV-20','DD-MON-RR'),null,null,null,to_date('26-NOV-20','DD-MON-RR'),'Pagla',null,11,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('h','h','$31$16$OrJljP_V1oHKCNtWKIeK4AbI3zk_1jRMbpDscoeRH3g','hh','jj',to_date('26-NOV-20','DD-MON-RR'),null,null,null,to_date('26-NOV-20','DD-MON-RR'),'About nai',null,12,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('abrar','a@gmail.com','$31$16$ZHBXgvhCalq95BraZUFVVdB76j9OnT-XT1-Y55wPBAk','Abrar','Fahad',to_date('08-NOV-90','DD-MON-RR'),'BUET','abrar','abrar',to_date('26-NOV-20','DD-MON-RR'),'I like programming',2,19,null,'abrar','abrar.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sabbir','sabbir@gmail.com','$31$16$azrGtDMp8nmruP6I67wrGsxHxiu8422jxEsA89f61zQ','Sabbir','Upobir',to_date('11-DEC-20','DD-MON-RR'),'BUET','sabbir','sabbir',to_date('27-NOV-20','DD-MON-RR'),'I am going to crack ICPC',1,61,null,'sabbir','sabbir.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('sakib','sakib@gmail.com','$31$16$Sy8Ns8c_17BDF6VfG9jTWWBQn32YVFEfR-NrYOSkYi4','Sakibur','Reza',to_date('08-NOV-20','DD-MON-RR'),'BUET','sakib','sakib',to_date('27-NOV-20','DD-MON-RR'),'I love software development and pure business',1,84,null,'sakib','sakib.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('pranto','pranto@gmail.com','$31$16$kw_A4fFohhV-6gn5TH8A-6GoE7OIHVj3FwDf1BYHtD4','pp','Pranto',to_date('27-NOV-20','DD-MON-RR'),'BUET','pranto','pranto',to_date('27-NOV-20','DD-MON-RR'),'I will researh and discover new things',6,39,null,'pranto','pranto.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('rahman','rahman','$31$16$UA-hk1y3udaIPJUmEZtB3F-Gp_dIdEAg9ThsnPcTGrA','Abdur ',' Rahman',to_date('12-DEC-20','DD-MON-RR'),'BUET',null,null,to_date('12-DEC-20','DD-MON-RR'),' i love  programming ',1,399,null,null,'www.rahman.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('asif','asif','$31$16$miaNCYCcIbR1pR81tSD8nEQWddG5vPWVSYrki35reB0','Asif','Ahmed',to_date('12-DEC-20','DD-MON-RR'),'BUET',null,null,to_date('12-DEC-20','DD-MON-RR'),'i love programming',1,400,null,null,'www.asif.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('kazi','kazi','$31$16$-9dstGR3uF9nMJkFF0N4A92tU_KU7ZcLNxeo27Y5do0','kazi wasif amin',' shammo',to_date('01-DEC-20','DD-MON-RR'),'BUET',null,null,to_date('13-DEC-20','DD-MON-RR'),'i love problemsolving,designing GUIs and software development.',1,410,4,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('uzma','uzma','$31$16$6jBd-8ZiKmWy4OsuORqkNghtq6MSwL88oPFfOiS33DU','kazi uzma amin','moitry',to_date('01-DEC-20','DD-MON-RR'),'Home Economics College',null,null,to_date('13-DEC-20','DD-MON-RR'),'i am skilled with adobe photoshop and adobe illustrator',1,411,5,null,'www.moitry.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('rahim','rahim','$31$16$TzxwfWnoqRmFStuBYkX6SVmc0YkSq7qBNGSF4gs9BJg','Mohammed','Rahim',to_date('12-DEC-20','DD-MON-RR'),'BUET',null,null,to_date('12-DEC-20','DD-MON-RR'),'i am passionate about programming',1,398,3,null,'www.rahum.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('adaa','aaa','$31$16$gh7oGLav0cz9NRXI1fKBpOOJ6uboTS20UoZ5SNFWpuA','dam','dam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'gazakhor',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('kisuekta','kisuekta','$31$16$dqrDfQDn26sbStAwTtyJ-s9VkeOwV90F1Cl0MZ9R0w4','sam','sam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'gazakhor',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('a1','a1','$31$16$w1bQaXMWarty9yfbyV-so-ZCHeCLcitSDbWaow2JC48','dam','dam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'gazakhor',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('a2','a2','$31$16$2tfVqPR3k0T7SCSEJDLir1y8mnBxQ-fZ3bg0-zskapo','dam','dam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'gazakhor',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('bossmehedi','boss','$31$16$F77_dhUpOs1ofd35CT9d_LxaaWU_zcTGYTFoiiDmZGg','sam','sam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'gazakhor',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('bb','bb@gmail.com','$2a$10$tM9s4CkHeDuSQufjcKXXSeCcAmIwgswXi9PnnsWLEj4/xfmPr28qW','bb','bb',to_date('01-AUG-21','DD-MON-RR'),'BUET',null,null,to_date('15-AUG-21','DD-MON-RR'),'i am the boss',1,424,null,null,'http://bb.com');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('dd','dd@gmail.com','$2a$10$Z7JU22N/gDrH/g9S5FOdgOD7jpqAQzbREhtn4A6Gg93dADarYy.y6','dd','dd',to_date('01-AUG-21','DD-MON-RR'),'PUET','dd','dddd',to_date('15-AUG-21','DD-MON-RR'),'i am a computer scientist',1,425,null,'ddd',null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('mehedis','mehedis@gmail.com','$2a$10$5oTSHea56pm8Mv0fPDMbuuzumgaW.aND0pA4BHLVvpYltgXxWz7hS','mehedi','shammo',to_date('05-AUG-21','DD-MON-RR'),null,null,null,to_date('05-AUG-21','DD-MON-RR'),'ami kisu pari na',1,null,null,null,null);
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('aminoob','noob','$31$16$7iA_eal7RkUHT68gNC8KdWvR3AXfxAYnZ7N1BYqbuj4','sam','sam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'noobplayer',5,null,null,'youtube','website');
Insert into COURSEBUCKET.PERSON (ID,EMAIL,PASSWORD,FIRST_NAME,LAST_NAME,DOB,INSTITUTION,FB_URL,LINKEDIN_URL,SIGNUP_DATE,ABOUT,COUNTRY_ID,PHOTO_ID,CARD_ID,YOUTUBE_URL,WEBSITE) values ('newteacher','noobteacher','$31$16$UvNerNgxTztd2BklfRT5ugelu96AF6jfOJgKuHUdYE4','sam','sam',to_date('13-MAY-21','DD-MON-RR'),'kisu','fb','linkedin',to_date('13-MAY-21','DD-MON-RR'),'noobplayer',5,null,null,'youtube','website');
REM INSERTING into COURSEBUCKET.PERSON_LANGUAGE
SET DEFINE OFF;
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (20,'roy',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (21,'roy',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (22,'roy',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (38,'mahdi',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (39,'mahdi',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (24,'azad',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (18,'roy',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (19,'roy',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (23,'azad',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (25,'azad',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (26,'azaz',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (27,'azaz',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (28,'azaz',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (29,'cc',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (30,'cc',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (31,'cc',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (32,'zz',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (33,'zz',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (34,'zz',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (35,'zx',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (36,'zx',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (37,'zx',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (41,'rahman',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (42,'asif',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (51,'abrar',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (52,'abrar',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (1,'mehediT',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (2,'mehediT',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (8,'jahin',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (7,'mehedi',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (13,'sabbir',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (14,'sakib',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (15,'sakib',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (16,'sakib',3);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (11,'pranto',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (12,'pranto',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (43,'kazi',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (44,'kazi',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (45,'uzma',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (46,'uzma',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (47,'uzma',4);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (40,'rahim',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (48,'mehediS',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (49,'mehediS',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (50,'mehediS',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (57,'mehedis',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (58,'bb',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (59,'bb',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (53,'a1',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (54,'a1',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (55,'a2',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (56,'a2',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (60,'dd',1);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (61,'dd',2);
Insert into COURSEBUCKET.PERSON_LANGUAGE (ID,PERSON_ID,LANGUAGE_ID) values (62,'dd',6);
REM INSERTING into COURSEBUCKET.PURCHASE_HISTORY
SET DEFINE OFF;
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (1,1,'mehediS',to_date('23-NOV-20','DD-MON-RR'),1000);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (3,1,'jahin',to_date('26-NOV-20','DD-MON-RR'),1000);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (5,3,'mehediS',to_date('26-NOV-20','DD-MON-RR'),1000);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (2,1,'h',to_date('26-NOV-20','DD-MON-RR'),1000);
Insert into COURSEBUCKET.PURCHASE_HISTORY (ID,COURSE_ID,STUDENT_ID,TIME,COST) values (4,2,'jahin',to_date('26-NOV-20','DD-MON-RR'),5000);
REM INSERTING into COURSEBUCKET.RATING
SET DEFINE OFF;
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (6,10,'mehediS',1,to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (7,7,'mehediS',5,to_date('07-DEC-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (1,1,'mehediS',5,to_date('23-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (4,3,'mehediS',5,to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (2,1,'h',1,to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (3,2,'jahin',5,to_date('26-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (5,2,'mehediS',1,to_date('28-NOV-20','DD-MON-RR'));
Insert into COURSEBUCKET.RATING (ID,COURSE_ID,STUDENT_ID,VALUE,TIME) values (8,1,'kazi',4,to_date('18-AUG-21','DD-MON-RR'));
REM INSERTING into COURSEBUCKET.REVIEW
SET DEFINE OFF;
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (6,10,'mehediS',to_date('07-DEC-20','DD-MON-RR'),'Sir, age nije valo moto shikhen taropor onnoder shikhate asen');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (7,7,'mehediS',to_date('07-DEC-20','DD-MON-RR'),'Sir apni contest programming er course upload den');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (1,1,'mehediS',to_date('23-NOV-20','DD-MON-RR'),'Nice course');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (4,3,'mehediS',to_date('26-NOV-20','DD-MON-RR'),'sir price arektu koman');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (2,1,'h',to_date('26-NOV-20','DD-MON-RR'),'Amar taka ferot de...');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (5,2,'mehediS',to_date('28-NOV-20','DD-MON-RR'),'Hudai faltu course');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (8,10,'jahin',to_date('24-APR-12','DD-MON-RR'),'best course in the universe');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (9,1,'jahin',to_date('23-APR-12','DD-MON-RR'),'best course in the world');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (10,2,'jahin',to_date('02-AUG-21','DD-MON-RR'),'best course in the world');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (11,3,'jahin',to_date('02-AUG-21','DD-MON-RR'),'worst course in the world');
Insert into COURSEBUCKET.REVIEW (ID,COURSE_ID,STUDENT_ID,TIME,TEXT) values (12,1,'kazi',to_date('18-AUG-21','DD-MON-RR'),'nice course');
REM INSERTING into COURSEBUCKET.SLIDER
SET DEFINE OFF;
REM INSERTING into COURSEBUCKET.STUDENT
SET DEFINE OFF;
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('aman',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('roy',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('azad',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('azaz',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('cc',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('zz',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('zx',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('a',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('rahman',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('asif',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('mehediS',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('jahin',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('h',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('kazi',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('uzma',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('rahim',2);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('mehedis',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('aminoob',1);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('aa',5);
Insert into COURSEBUCKET.STUDENT (ID,EDU_STATUS_ID) values ('bb',5);
REM INSERTING into COURSEBUCKET.TEACHER
SET DEFINE OFF;
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('mahdi',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('mariyam',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('mehediT',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sabbir',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('abrar',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sakib',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('pranto',2);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('sam',5);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('dd',3);
Insert into COURSEBUCKET.TEACHER (ID,DESIGNATION_ID) values ('newteacher',1);
REM INSERTING into COURSEBUCKET.WEEK
SET DEFINE OFF;
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (44,1,'week 1',to_date('06-DEC-20','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (45,2,'week 2',to_date('06-DEC-20','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (46,3,'week 3 ',to_date('06-DEC-20','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (47,4,'week 4',to_date('06-DEC-20','DD-MON-RR'),19);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (48,1,'week 1',to_date('06-DEC-20','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (49,2,'week 2',to_date('06-DEC-20','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (50,3,'Week 3',to_date('06-DEC-20','DD-MON-RR'),20);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (51,1,'Week name',to_date('06-DEC-20','DD-MON-RR'),21);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (85,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (86,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (87,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (88,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),31);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (89,1,'week 1',to_date('10-DEC-20','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (90,2,'week 2',to_date('10-DEC-20','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (91,3,'week 3 ',to_date('10-DEC-20','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (92,4,'week 4',to_date('10-DEC-20','DD-MON-RR'),32);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (113,1,'Week name',to_date('10-DEC-20','DD-MON-RR'),38);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (114,1,'Week name',to_date('10-DEC-20','DD-MON-RR'),39);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (115,1,'Week name',to_date('10-DEC-20','DD-MON-RR'),40);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (116,1,'Week name',to_date('10-DEC-20','DD-MON-RR'),41);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (39,1,'Week 1',to_date('05-DEC-20','DD-MON-RR'),14);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (41,1,'Week 1',to_date('05-DEC-20','DD-MON-RR'),16);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (42,1,'Week name',to_date('05-DEC-20','DD-MON-RR'),17);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (43,1,'Week name',to_date('05-DEC-20','DD-MON-RR'),18);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (36,1,'Week name',to_date('28-NOV-20','DD-MON-RR'),11);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (16,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (1,1,'Week name',to_date('26-NOV-20','DD-MON-RR'),1);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (17,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (18,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (19,4,'Week 4',to_date('27-NOV-20','DD-MON-RR'),6);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (32,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (33,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (34,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (35,4,'Week 4',to_date('27-NOV-20','DD-MON-RR'),10);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (5,1,'week 1',to_date('27-NOV-20','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (6,2,'week 2',to_date('27-NOV-20','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (7,3,'week 3 ',to_date('27-NOV-20','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (8,4,'week 4',to_date('27-NOV-20','DD-MON-RR'),3);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (20,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (21,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (22,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (23,4,'Week 4',to_date('27-NOV-20','DD-MON-RR'),7);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (24,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (25,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (26,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (27,4,'Week 4',to_date('27-NOV-20','DD-MON-RR'),8);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (28,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (29,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (30,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (31,4,'week 4',to_date('27-NOV-20','DD-MON-RR'),9);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (2,1,'week 1',to_date('26-NOV-20','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (3,2,'Week 2',to_date('26-NOV-20','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (4,3,'Week 3',to_date('26-NOV-20','DD-MON-RR'),2);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (9,1,'week 1',to_date('27-NOV-20','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (10,2,'week 2',to_date('27-NOV-20','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (11,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),4);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (12,1,'Week 1',to_date('27-NOV-20','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (13,2,'Week 2',to_date('27-NOV-20','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (14,3,'Week 3',to_date('27-NOV-20','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (15,4,'Week 4',to_date('27-NOV-20','DD-MON-RR'),5);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (37,1,'Week name',to_date('28-NOV-20','DD-MON-RR'),12);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (38,1,'Week name',to_date('28-NOV-20','DD-MON-RR'),13);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (52,1,'Week name',to_date('06-DEC-20','DD-MON-RR'),22);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (53,1,'week 1',to_date('10-DEC-20','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (54,2,'week 2',to_date('10-DEC-20','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (55,3,'week 3 ',to_date('10-DEC-20','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (56,4,'week 4',to_date('10-DEC-20','DD-MON-RR'),23);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (57,1,'week 1',to_date('10-DEC-20','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (58,2,'week 2',to_date('10-DEC-20','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (59,3,'week 3 ',to_date('10-DEC-20','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (60,4,'week 4',to_date('10-DEC-20','DD-MON-RR'),24);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (65,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (66,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (67,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (68,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),26);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (69,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (70,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (71,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (72,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),27);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (73,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (74,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (75,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (76,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),28);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (77,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (78,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (79,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (80,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),29);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (81,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (82,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (83,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (84,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),30);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (93,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (94,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (95,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (96,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),33);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (97,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (98,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (99,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (100,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),34);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (117,1,'Week 1',to_date('13-DEC-20','DD-MON-RR'),42);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (118,2,'Week 2',to_date('13-DEC-20','DD-MON-RR'),42);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (119,3,'Week 3',to_date('13-DEC-20','DD-MON-RR'),42);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (120,4,'Week 4',to_date('13-DEC-20','DD-MON-RR'),42);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (105,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (106,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (107,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (108,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),36);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (109,1,'Week 1',to_date('10-DEC-20','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (110,2,'Week 2',to_date('10-DEC-20','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (111,3,'Week 3',to_date('10-DEC-20','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (112,4,'Week 4',to_date('10-DEC-20','DD-MON-RR'),37);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (121,1,'basic python',to_date('15-AUG-21','DD-MON-RR'),43);
Insert into COURSEBUCKET.WEEK (ID,WEEK_NO,TITLE,LAST_UPDATE,COURSE_ID) values (122,2,'Week Title',to_date('15-AUG-21','DD-MON-RR'),43);
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
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
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
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
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
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
  TABLESPACE "USERS" ;
--------------------------------------------------------
--  DDL for Index SLD_UNQ
--------------------------------------------------------

  CREATE UNIQUE INDEX "COURSEBUCKET"."SLD_UNQ" ON "COURSEBUCKET"."SLIDER" ("ID", "FILES_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
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
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
  TABLESPACE "USERS"  ENABLE;
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("FILES_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" MODIFY ("ADMIN_ID" NOT NULL ENABLE);
 
  ALTER TABLE "COURSEBUCKET"."SLIDER" ADD PRIMARY KEY ("ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS NOCOMPRESS LOGGING
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
