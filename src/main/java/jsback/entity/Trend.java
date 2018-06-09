package jsback.entity;

public class Trend {
    private Integer day;
    private Integer repaired;
    private Integer notRepaired;
    private Integer total;

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getRepaired() {
        return repaired;
    }

    public void setRepaired(Integer repaired) {
        this.repaired = repaired;
    }

    public Integer getNotRepaired() {
        return notRepaired;
    }

    public void setNotRepaired(Integer notRepaired) {
        this.notRepaired = notRepaired;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }
}
