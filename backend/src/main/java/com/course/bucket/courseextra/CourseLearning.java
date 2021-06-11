package com.course.bucket.courseextra;





import java.util.ArrayList;

public class CourseLearning {
    ArrayList<String> learnings;
    
    public void add(String learning){
        learnings.add(learning);
    }
    
    public void setAt(int i, String learning){
        learnings.set(i, learning);
    }
    
    public String getAt(int i){
        return learnings.get(i);
    }

    public ArrayList<String> getLearnings() {
        return learnings;
    }

    public void setLearnings(ArrayList<String> learnings) {
        this.learnings = learnings;
    }
    
}
