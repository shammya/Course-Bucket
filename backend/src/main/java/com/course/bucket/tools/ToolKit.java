package com.course.bucket.tools;



import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;


public class ToolKit {

    public final static double NULL = -99999999.99;

//    public static void moveRow(VBox parent, int idx, int i) {
//        if (idx + i < 0 || idx + i == parent.getChildren().size()) {
//            return;
//        }
//        AnchorPane curBox = (AnchorPane) parent.getChildren().get(idx);
//        AnchorPane toBox = (AnchorPane) parent.getChildren().get(idx + i);
//        parent.getChildren().remove(i == -1 ? curBox : toBox);
//        parent.getChildren().add(idx + (i == -1 ? i : 0), i == -1 ? curBox : toBox);
//    }
//
//    public static <T> void moveRow(ArrayList<T> parent, int idx, int i) {
//        if (idx + i < 0 || idx + i == parent.size()) {
//            return;
//        }
//        T curBox = parent.get(idx);
//        T toBox = parent.get(idx + i);
//        parent.remove(i == -1 ? curBox : toBox);
//        parent.add(idx + (i == -1 ? i : 0), i == -1 ? curBox : toBox);
//    }
//
//    public static void makeDynamicTextArea(TextArea ta) {
//        ta.textProperty().addListener((ov, prevText, currText) -> {
//            // Do this in a Platform.runLater because of Textfield has no padding at first time and so on
//            Platform.runLater(() -> {
//                Text text = new Text(currText);
//                text.setFont(ta.getFont()); // Set the same font, so the size is the same
//                double height = text.getLayoutBounds().getHeight()// This big is the Text in the TextField
//                        + ta.getPadding().getTop() + ta.getPadding().getBottom()// Add the padding of the TextField
//                        + 200d; // Add some spacing
//                ta.setPrefHeight(height); // Set the width
//                ta.positionCaret(ta.getCaretPosition()); // If you remove this line, it flashes a little bit
//            });
//        });
//    }
//
//    public static void openLink(String link) {
//        HostServices hostServices = (HostServices) GLOBAL.stage.getProperties().get("hostServices");
//        hostServices.showDocument(link);
//    }
//
//    public static void openPDF(File file) {
//        HostServices hostServices = (HostServices) GLOBAL.stage.getProperties().get("hostServices");
//        hostServices.showDocument(file.getAbsolutePath());
//    }
//
//    public static File chooseFile(FileType type) {
//        FileChooser fc = new FileChooser();
//        fc.setInitialDirectory(new File(GLOBAL.FILE_CHOOSER_DIRECTORY));
//        switch(type){
//            case VIDEO  :
//                fc.getExtensionFilters().addAll(
//                        new FileChooser.ExtensionFilter("Video files", "*.mp4", "*.3gp")
//                );
//                break;
//            case PDF    :
//                fc.getExtensionFilters().add(
//                        new FileChooser.ExtensionFilter("PDF files", "*.pdf")
//                );
//                break;
//            case PICTURE:
//                fc.getExtensionFilters().addAll(
//                        new FileChooser.ExtensionFilter("Image files", "*.jpeg", "*.jpg", "*.bmp", "*.png", "*.gif")
//                );
//                break;
//        }
//        File file = fc.showOpenDialog(null);
//        if(file != null) GLOBAL.FILE_CHOOSER_DIRECTORY = file.getParent();
//        return file;
//    }
//
//    public static MediaPlayer getMediaPlayer(File file) {
//        return new MediaPlayer(new Media(file.toURI().toString()));
//    }
//
//    private static int tooltipOffset = 10;
//    private static double triangleBase = 12;
//    private static double triangleHeight = Math.sqrt(3) / 2 * triangleBase;
//
//    private static AnchorPane makeLabel(String text) {
//        Label label = new Label(text);
//        label.getStyleClass().add("toolTipLabel");
//        AnchorPane wrapper = new AnchorPane(label);
//        return wrapper;
//    }
//
//    private static Polygon toolTipFinalize(AnchorPane content, AnchorPane contentContainer, AnchorPane mainContainer) {
//        contentContainer.getStylesheets().add(GLOBAL.GLOBAL_LOCATION + "/Global.css");
//        contentContainer.getStyleClass().add("toolTipContainer");
//        contentContainer.setDisable(true);
//        contentContainer.setStyle(""
//                + "-fx-stroke: black;"
//        );
//        Polygon triangle = new Polygon();
//        triangle.getPoints().addAll(
//                0.0, 0.0,
//                triangleBase, 0.0,
//                triangleBase / 2, triangleHeight
//        );
//        triangle.getStyleClass().add("toolTipTriangle");
////        triangle.setStyle(""
////                + "-fx-fill: #ccffff;"
////        );
//        AnchorPane triangleWrapper = new AnchorPane(triangle);
//        VBox box = new VBox(content, triangleWrapper);
//        contentContainer.getChildren().add(box);
//        mainContainer.getChildren().add(contentContainer);
//
//        InnerShadow inShadow = new InnerShadow();
//        inShadow.setRadius(2);
//        DropShadow effect = new DropShadow();
//        effect.setWidth(0);
//        effect.setHeight(0);
//        effect.setOffsetX(0);
//        effect.setOffsetY(0);
//        effect.setRadius(tooltipOffset);
//        effect.setSpread(0.0001);
//        effect.setInput(inShadow);
////        contentContainer.setEffect(effect);
//        contentContainer.getStyleClass().add("shadow");
//        contentContainer.setVisible(false);
//        contentContainer.setDisable(true);
//        return triangle;
//    }
//
//    public static void setUpLocation(FontAwesomeIconView obj, AnchorPane contentContainer, Polygon triangle) {
//        contentContainer.toFront();
//        double posX = obj.localToScene(obj.getBoundsInLocal()).getMinX() - contentContainer.getWidth() / 2 + Double.parseDouble(obj.getSize()) / 2;
//        double posY = obj.localToScene(obj.getBoundsInLocal()).getMinY() - contentContainer.getHeight() - tooltipOffset;
//        setTriangleProperly(posY, triangle);
//        triangle.setLayoutX(posX < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMinX() + Double.parseDouble(obj.getSize()) / 2 - triangleBase / 2 - tooltipOffset : contentContainer.getWidth() / 2 - triangleBase / 2);
//        contentContainer.setLayoutX(posX < tooltipOffset ? tooltipOffset : posX);
//        contentContainer.setLayoutY(posY < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMaxY() + tooltipOffset : posY);
//    }
//
//    private static void setHandler(FontAwesomeIconView obj, AnchorPane contentContainer, Polygon triangle) {
//        obj.setOnScroll((event) -> {
//            setUpLocation(obj, contentContainer, triangle);
//        });
//        obj.setOnMouseEntered(new EventHandler<MouseEvent>() {
//            @Override
//            public void handle(MouseEvent event) {
//                setUpLocation(obj, contentContainer, triangle);
//                contentContainer.setVisible(true);
//                contentContainer.setDisable(false);
//            }
//        });
//        obj.setOnMouseExited(new EventHandler<MouseEvent>() {
//            @Override
//            public void handle(MouseEvent event) {
//                contentContainer.setVisible(false);
//                contentContainer.setDisable(true);
//            }
//        });
//    }
//
//    public static void setTooltip(FontAwesomeIconView obj, String text, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        AnchorPane content = makeLabel(text);
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        obj.toFront();
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    public static void setTooltip(FontAwesomeIconView obj, AnchorPane content, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    public static void setUpLocation(ImageView obj, AnchorPane contentContainer, Polygon triangle) {
//        contentContainer.toFront();
//        double posX = obj.localToScene(obj.getBoundsInLocal()).getMinX() - contentContainer.getWidth() / 2 + obj.getFitWidth() / 2;
//        double posY = obj.localToScene(obj.getBoundsInLocal()).getMinY() - contentContainer.getHeight() - tooltipOffset;
//        setTriangleProperly(posY, triangle);
//        triangle.setLayoutX(posX < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMinX() + obj.getFitWidth() / 2 - triangleBase / 2 - tooltipOffset : contentContainer.getWidth() / 2 - triangleBase / 2);
//        contentContainer.setLayoutX(posX < tooltipOffset ? tooltipOffset : posX);
//        contentContainer.setLayoutY(posY < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMaxY() + tooltipOffset : posY);
//    }
//
//    private static void setHandler(ImageView obj, AnchorPane contentContainer, Polygon triangle) {
//        obj.setOnScroll((event) -> {
//            setUpLocation(obj, contentContainer, triangle);
//        });
//        obj.setOnMouseEntered((MouseEvent event) -> {
//            setUpLocation(obj, contentContainer, triangle);
//            contentContainer.setVisible(true);
//            contentContainer.setDisable(false);
//        });
//        obj.setOnMouseExited((MouseEvent event) -> {
//            contentContainer.setVisible(false);
//            contentContainer.setDisable(true);
//        });
//    }
//
//    public static void setTooltip(ImageView obj, String text, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        AnchorPane content = makeLabel(text);
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        obj.toFront();
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    public static void setTooltip(ImageView obj, AnchorPane content, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    public static void setUpLocation(Label obj, AnchorPane contentContainer, Polygon triangle) {
//        contentContainer.toFront();
//        double posX = obj.localToScene(obj.getBoundsInLocal()).getMinX() - contentContainer.getWidth() / 2 + obj.getWidth() / 2;
//        double posY = obj.localToScene(obj.getBoundsInLocal()).getMinY() - contentContainer.getHeight() - tooltipOffset;
//        setTriangleProperly(posY, triangle);
//        triangle.setLayoutX(posX < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMinX() + obj.getWidth() / 2 - triangleBase / 2 - tooltipOffset : contentContainer.getWidth() / 2 - triangleBase / 2);
//        contentContainer.setLayoutX(posX < tooltipOffset ? tooltipOffset : posX);
//        contentContainer.setLayoutY(posY < tooltipOffset ? obj.localToScene(obj.getBoundsInLocal()).getMaxY() + tooltipOffset : posY);
//    }
//
//    private static void setHandler(Label obj, AnchorPane contentContainer, Polygon triangle) {
//        obj.setOnScroll((event) -> {
//            setUpLocation(obj, contentContainer, triangle);
//        });
//        obj.setOnMouseEntered((MouseEvent event) -> {
//            setUpLocation(obj, contentContainer, triangle);
//            contentContainer.setVisible(true);
//            contentContainer.setDisable(false);
//        });
//        obj.setOnMouseExited(new EventHandler<MouseEvent>() {
//            @Override
//            public void handle(MouseEvent event) {
//                contentContainer.setVisible(false);
//                contentContainer.setDisable(true);
//            }
//        });
//    }
//
//    public static void setTooltip(Label obj, String text, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        AnchorPane content = makeLabel(text);
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        obj.toFront();
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    public static void setTooltip(Label obj, AnchorPane content, AnchorPane mainContainer) {
//        AnchorPane contentContainer = new AnchorPane();
//        Polygon triangle = toolTipFinalize(content, contentContainer, mainContainer);
//        setHandler(obj, contentContainer, triangle);
//    }
//
//    private static void setTriangleProperly(double posY, Polygon triangle) {
//        AnchorPane triangleWrapper = (AnchorPane) triangle.getParent();
//        VBox box = (VBox) triangleWrapper.getParent();
//        if (posY < tooltipOffset) {
//            if (box.getChildren().indexOf(triangleWrapper) == 1) {
//                box.getChildren().remove(triangleWrapper);
//                box.getChildren().add(0, triangleWrapper);
//                triangle.getPoints().clear();
//                triangle.getPoints().addAll(
//                        0.0, 0.0,
//                        triangleBase, 0.0,
//                        triangleBase / 2, -triangleHeight
//                );
//            }
//        } else {
//            if (box.getChildren().indexOf(triangleWrapper) == 0) {
//                box.getChildren().remove(triangleWrapper);
//                box.getChildren().add(triangleWrapper);
//                triangle.getPoints().clear();
//                triangle.getPoints().addAll(
//                        0.0, 0.0,
//                        triangleBase, 0.0,
//                        triangleBase / 2, triangleHeight
//                );
//            }
//        }
//    }
//
//    public static void setAnchor(Node node, double topAnchor, double rightAnchor, double bottomAnchor, double leftAnchor) {
//        if (topAnchor != NULL) {
//            AnchorPane.setTopAnchor(node, topAnchor);
//        }
//        if (topAnchor != NULL) {
//            AnchorPane.setRightAnchor(node, rightAnchor);
//        }
//        if (topAnchor != NULL) {
//            AnchorPane.setBottomAnchor(node, bottomAnchor);
//        }
//        if (topAnchor != NULL) {
//            AnchorPane.setLeftAnchor(node, leftAnchor);
//        }
//    }
//
////    public static String getCurTimeForDB(){
////        DateFormat df = new SimpleDateFormat("dd/MM/yy HH:mm:ss");
////        Date dateobj = new Date();
////        //System.out.println(df.format(dateobj));
////        
////        return "TO_DATE('" + df.format(dateobj) + "', 'dd/MM/yy hh24:mi:ss')";
////    }
////    
////    public static String DateFormatDB(){
////        return "yyyy-mm-dd hh:mm:ss";
////    }
//    /*
//     * Date Related Functions
//     */
    public static String dateFormatDB() {
        return "yyyy-mm-dd hh24:mi:ss";
    }

    public static String dateFormatJAVA() {
        return "yyyy-MM-dd HH:mm:ss";
    }

    public static String getCurTimeDB() {
        DateFormat df = new SimpleDateFormat(dateFormatJAVA());
        Date dateobj = new Date();
        return "TO_DATE('" + df.format(dateobj) + "', '" + dateFormatDB() + "')";
    }

    public static Date getCurTime() {
        return new Date();
    }

    public static String JDateToDDate(Date date) {
        SimpleDateFormat df = new SimpleDateFormat(dateFormatJAVA());
        return "TO_DATE('" + df.format(date) + "', '" + dateFormatDB() + "')";
    }

    public static Date makeDateForJAVA(java.sql.Date date) {
        Date jDate = date;
        return jDate;
    }

    public static Date localDateToDate(LocalDate lDate) {
        Instant instant = Instant.from(lDate.atStartOfDay(ZoneId.systemDefault()));
        return Date.from(instant);
    }
    
    public static LocalDate DateToLocalDate(Date date) {
        return Instant.ofEpochMilli(date.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
    }
    
    public static String makeDateStructured(Date date, String structure){
        DateFormat dateFormat = new SimpleDateFormat(structure);  
        String strDate = dateFormat.format(date).toString();  
        return strDate;
    }
    
    public static String makeDateStructured(LocalDate date, String structure){
        DateFormat dateFormat = new SimpleDateFormat(structure);  
        String strDate = dateFormat.format(date);  
        return strDate;
    }
    
    public static long dateBetween(Date date1, Date date2){
        LocalDate d1 = DateToLocalDate(date1);
        LocalDate d2 = DateToLocalDate(date2);
        Duration diff = Duration.between(d1.atStartOfDay(), d2.atStartOfDay());
        return diff.toDays();
    }

    /*
     * Date Related Function End
     */
//    public static String copyFile(File file, FileType type, Integer id) {
//        String destPath = "";
//        switch (type) {
//            case PICTURE:
//                destPath += GLOBAL.PICTURE_LOCATION + "/Picture_" + id.toString() + "_";
//                break;
//            case VIDEO:
//                destPath += GLOBAL.VIDEO_LOCATION + "/Video_" + id.toString() + "_";
//                break;
//            case PDF:
//                destPath += GLOBAL.PDF_LOCATION + "/PDF_" + id.toString() + "_";
//                break;
//        }
//        destPath += file.getName();
//
////        String destURL = GLOBAL.ROOT_LOCATION + GLOBAL.PICTURE_LOCATION + "/Message_101_" + file.getName();
//        try {
//            Files.copy(file.toPath(), (new File(GLOBAL.ROOT_LOCATION + destPath)).toPath(), StandardCopyOption.REPLACE_EXISTING);
//        } catch (IOException ex) {
//            Logger.getLogger(MessengerController.class.getName()).log(Level.SEVERE, null, ex);
//        }
//        print("File is copied\n" + destPath);
//        return destPath;
//    }

    public static boolean isValidString(String str) {
        char[] ch = str.toCharArray();
        int len = str.length();
        for (int i = 0; i < len; i++) {
            if (ch[i] == '\\' || ch[i] == '\"' || ch[i] == '\'' || ch[i] == ';') {
                return false;
            }
        }
        return true;
    }
    public static boolean isSpaceMiddle(String str)
    {
        char[] ch = str.toCharArray();
        int len = str.length();
        for (int i = 0; i < len; i++) {
            if(ch[i]==' ')
                return true;
        }
        return false;
    }
    
//    public static String makeAbsoluteLocation(String location){
//        return GLOBAL.ROOT_LOCATION + location;
//    }
    
//    public static Person getCurrentPerson(){
//        switch(GLOBAL.ACCOUNT_TYPE){
//            case Teacher: return GLOBAL.TEACHER; 
//            case Student : return GLOBAL.STUDENT;
//            case Admin: return GLOBAL.ADMIN;
//        }
//        return null;
//    }
    
    public static boolean isOnlyCharacter(String s) {
        if(s==null || s.isEmpty()) return true;
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
    
    public static boolean isOnlyNumber(String s) {
        if(s==null || s.isEmpty()) return true;
        for (char c : s.toCharArray()) {
            if (!Character.isDigit(c)) {
                return false;
            }
        }
        return true;
    }
    
    public static String JBoolToDBool(boolean b){
        return (b ? "T" : "F");
    }
    
    public static boolean DBoolToJBool(String b){
        return (b.equals("T") ? true : false);
    }
    
//    public static void showWarning(String text){
//        JOptionPane.showMessageDialog(null, text, "Warning", JOptionPane.WARNING_MESSAGE);
//    }
//    
    public static String DoubleToString(Double value){
        return DoubleToString(value, 2);
    }
    
    public static String DoubleToString(Double value, int precision){
        return String.format(String.format("%." + precision + "f", value), value);
    }
    
    public static void print(Object text){
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.err.println("Error message is showing : ");
        System.err.println(text.toString());
        System.out.println("");
        System.out.println("");
        System.out.println("");
    }

//    public static void removeNode(Node node) {
//        if(node.getParent() != null){
//            Pane parent = (Pane) node.getParent();
//            parent.getChildren().remove(node);
//        }
//    }

//    public static void showNoDataFound(Pane node){
//        ImageView iv = new ImageView(new Image(new File(makeAbsoluteLocation(GLOBAL.PICTURE_LOCATION + "/No Data Found.jpg")).toURI().toString()));
//        iv.setFitWidth(GLOBAL.WIDTH*0.7);
//        iv.setPreserveRatio(true);
//        node.getChildren().clear();
//        node.getChildren().add(iv);
//    }
//
//    public static Image makeImage(Course.Overflow.Files.Files imageFile) {
//        return new Image(new File(ToolKit.makeAbsoluteLocation(imageFile.getContent())).toURI().toString());
//    }
//
//    public static void makeCircularImage(ImageView cl) {
//        Rectangle clip = new Rectangle(cl.getFitWidth(), cl.getFitHeight());
//        clip.setArcWidth(cl.getFitWidth());
//        clip.setArcHeight(cl.getFitWidth());
//        cl.setClip(clip);
//        SnapshotParameters parameters = new SnapshotParameters();
//        parameters.setFill(Color.TRANSPARENT);
//        WritableImage image = cl.snapshot(parameters, null);
//        cl.setClip(null);
//        cl.getStyleClass().add("shadow");
//        cl.setImage(image);
//    }
    
    public static long getDifferenceDays(Date d1, Date d2) {
        long diff = d2.getTime() - d1.getTime();
        return TimeUnit.DAYS.convert(diff, TimeUnit.MILLISECONDS);
    }
    public static LocalDate dateToLocalDate(Date date) {
    	LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    	return localDate;
    }
}