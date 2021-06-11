package com.course.bucket.creditcard;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.course.bucket.database.DB;
import com.course.bucket.tools.ToolKit;

public class CreditCard {
	Integer id;
	String cardNo;
	String nameOnCard;
	Date expireDate;

	public CreditCard() {

	}

	public CreditCard(Integer id) {
		this.id = id;
		if (DB.valueExist("CREDIT_CARD", "ID", id.toString())) {
			ResultSet rs = DB.executeQuery("SELECT * FROM CREDIT_CARD WHERE ID = #", id.toString());
			try {
				if (!rs.next()) {
					rs.close();
					return;
				}

				cardNo = rs.getString("CARD_NO");
				nameOnCard = rs.getString("NAME_ON_CARD");
				expireDate = rs.getTimestamp("EXPIRE_DATE");
				rs.close();
			} catch (SQLException ex) {
				Logger.getLogger(CreditCard.class.getName()).log(Level.SEVERE, null, ex);
			}
		}
	}

	public CreditCard(String email) {
		ResultSet rs = DB.executeQuery("SELECT CARD_ID FROM PERSON WHERE EMAIL = '#'", email);
		Integer id;
		try {
			if (rs.next()) {
				id = rs.getInt("CARD_ID");
				this.setId(id);
				rs = DB.executeQuery("SELECT * FROM CREDIT_CARD WHERE ID = #", id.toString());
				rs.next();
				this.setCardNo(rs.getString("CARD_NO"));
				this.setNameOnCard(rs.getString("NAME_ON_CARD"));
				this.setExpireDate(rs.getDate("EXPIRE_DATE"));
				rs.close();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}

	}

	public CreditCard(Integer id, String cardNo, String nameOnCard, Date expireDate) {
		this.id = id;
		this.cardNo = cardNo;
		this.nameOnCard = nameOnCard;
		this.expireDate = expireDate;
	}

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public String getNameOnCard() {
		return nameOnCard;
	}

	public void setNameOnCard(String nameOnCard) {
		this.nameOnCard = nameOnCard;
	}

	public Date getExpireDate() {
		return expireDate;
	}

	public void setExpireDate(Date expireDate) {
		this.expireDate = expireDate;
	}

	public static void deleteCard(String email) {
		
		ResultSet rs = DB.executeQuery("SELECT CARD_ID FROM PERSON WHERE EMAIL = '#'", email);
		Integer id;
		try {
			if (rs.next()) {
				id = rs.getInt("CARD_ID");
				DB.execute("UPDATE PERSON SET CARD_ID = NULL WHERE EMAIL = '#'", email);
				DB.execute("DELETE FROM CREDIT_CARD WHERE ID = #", id.toString());
				rs.close();
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void insertCreditCard(String email, String cardNo, String nameOnCard, Date expireDate) {
		Integer id = DB.generateId("CREDIT_CARD");
		System.err.println("CreditCard generated Id = "+id);
		DB.execute("INSERT INTO CREDIT_CARD VALUES(#, '#', '#', #)", id.toString(), cardNo, nameOnCard,
				ToolKit.JDateToDDate(expireDate));
		DB.execute("UPDATE  PERSON SET CARD_ID = # WHERE EMAIL = '#'", id.toString(), email);
	}

	public static void changeCreditCard(String email, CreditCard newCard) {
		CreditCard oldCard = new CreditCard(email);
		DB.execute("UPDATE CREDIT_CARD SET CARD_NO = '#' , NAME_ON_CARD = '#' , EXPIRE_DATE = #  WHERE ID = # ",
				newCard.getCardNo(), newCard.getNameOnCard(), ToolKit.JDateToDDate(newCard.getExpireDate()),
				oldCard.getId().toString());

	}
}
