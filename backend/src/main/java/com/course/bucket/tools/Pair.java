package com.course.bucket.tools;

public class Pair<typeA, typeB> {

	private typeA first = null;
	private typeB second = null;
	
	public Pair() {
	}

	public Pair(typeA first, typeB second) {
		super();
		first = first;
		second = second;
	}

	public typeA getFirst() {
		return first;
	}

	public void setFirst(typeA first) {
		first = first;
	}

	public typeB getSecond() {
		return second;
	}

	public void setSecond(typeB second) {
		second = second;
	}
	
	public boolean isEmpty() {
		if(this.first == null || this.second == null ) {
			return true;
		}
		return false;
	}
	
}