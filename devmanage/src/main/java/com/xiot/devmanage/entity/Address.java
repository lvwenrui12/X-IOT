package com.xiot.devmanage.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @author lvwenrui
 * @version 1.0
 * @date 2020/6/20 0:11
 */
@Data
public class Address implements Serializable {
    private static final long serialVersionUID = -7512919751451834886L;

    /**
     * 详细地址
     */
    private String factoryDetailAddress;
    /**
     * 省
     */
    private String provice;
    /**
     * 省编码
     */
    private String proviceCode;
}
