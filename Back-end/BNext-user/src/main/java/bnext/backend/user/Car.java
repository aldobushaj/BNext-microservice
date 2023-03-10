package bnext.backend.user;




import java.io.Serializable;
import java.util.UUID;

public class Car implements Serializable {
    private UUID carId;
    private String name, carModel;
    private String plateNumber;
    private Integer battery, priceHour, priceKm;
    private Boolean availabilityPresent;


    public Car(String name, String carModel, String plateNumber, Integer priceHour, Integer priceKm, Boolean availabilityPresent) {
        this.name = name;
        this.carModel = carModel;
        this.plateNumber = plateNumber;
        this.priceHour = priceHour;
        this.priceKm = priceKm;
        this.availabilityPresent = availabilityPresent;
    }

    public Car(){}
    public Car(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public Car(UUID carId) {
        this.carId = carId;
    }

    public UUID getCarId() {
        return carId;
    }

    public void setCarId(UUID carId) {
        this.carId = carId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }

    public String getPlateNumber() {
        return plateNumber;
    }

    public void setPlateNumber(String plateNumber) {
        this.plateNumber = plateNumber;
    }

    public Integer getBattery() {
        return battery;
    }

    public void setBattery(Integer battery) {
        this.battery = battery;
    }

    public Integer getPriceHour() {
        return priceHour;
    }

    public void setPriceHour(Integer priceHour) {
        this.priceHour = priceHour;
    }

    public Integer getPriceKm() {
        return priceKm;
    }

    public void setPriceKm(Integer priceKm) {
        this.priceKm = priceKm;
    }

    public Boolean getAvailabilityPresent() {
        return availabilityPresent;
    }

    public void setAvailabilityPresent(Boolean availabilityPresent) {
        this.availabilityPresent = availabilityPresent;
    }



    @Override
    public String toString() {
        return "Car{" +
                "id=" + carId +
                ", name='" + name + '\'' +
                ", carModel='" + carModel + '\'' +
                ", extraData='" + plateNumber + '\'' +
                ", battery=" + battery +
                ", priceHour=" + priceHour +
                ", priceKm=" + priceKm +
                ", availabilityPresent=" + availabilityPresent +

                '}';
    }

}
