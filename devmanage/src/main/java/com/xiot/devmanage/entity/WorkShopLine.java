package com.xiot.devmanage.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author lvwenrui
 * @version 1.0
 * 产线
 * @date 2020/6/20 0:23
 */
@Data
public class WorkShopLine implements Serializable {


    private static final long serialVersionUID = -2619576568135450272L;

    private List<Device> devices;
    private  String name;
    private  String code;
}
