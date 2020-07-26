package com.xiot.devmanage.entity;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author lvwenrui
 * @version 1.0
 * 车间
 * @date 2020/6/20 0:19
 */
@Data
public class Workshop implements Serializable {

    private  String name;
    private  String code;
    private List<WorkShopLine> lines;
}
