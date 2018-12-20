package com.dimple.controller;

import com.alibaba.fastjson.JSON;
import com.dimple.bean.Blog;
import com.dimple.service.BlogService;
import com.dimple.service.CategoryService;
import com.dimple.utils.FileOperateUtil;
import com.dimple.utils.QiNiuUtils;
import com.dimple.framework.message.Result;
import com.dimple.framework.message.ResultUtil;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.qiniu.util.StringMap;
import com.sun.org.apache.xpath.internal.operations.Bool;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * @author : Dimple
 * @version : 1.0
 * @class : BlogController
 * @description :
 * @date: 11/20/18 14:27
 */
@Controller
@Api("博客管理接口测试模块")
@Slf4j
public class BlogController {

    @Autowired
    BlogService blogService;
    @Autowired
    FileOperateUtil fileOperateUtil;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/page/editBlog.html")
    public String returnPage(Model model) {
        //添加对应在已发布、草稿箱、垃圾箱的数量
        model.addAttribute("count", blogService.selectCountOfBlogStatus());
        model.addAttribute("categories", categoryService.getAllBlogCategory());
        return "blog/editBlog";
    }

    @GetMapping("/page/blogList.html")
    public String blogListPage(Model model) {
        return "blog/list/blog";
    }

    @GetMapping("/page/blogList/{id}.html")
    public String blogUpdatePage(@PathVariable Integer id, Model model) {
        model.addAttribute("blog", blogService.selectBlogByIdBlobs(id));
        return "blog/list/update";
    }


    @ApiOperation("删除博客")
    @DeleteMapping("/api/blog/{id}")
    @ResponseBody
    public Result deleteBlog(@PathVariable Integer id) {
        int i = blogService.deleteBlog(id);
        return ResultUtil.success(i);
    }

    @ApiOperation("更新博客")
    @PutMapping("/api/blog")
    @ResponseBody
    public Result updateBlog(Blog blog) {
        int i = blogService.updateBlog(blog);
        return ResultUtil.success(i);
    }

    @ApiOperation("设置博客是否推荐")
    @PutMapping("/api/blog/support/{id}/{status}")
    @ResponseBody
    public Result supportBlog(@PathVariable(value = "id") Integer[] ids, @PathVariable Boolean status) {
        int i = blogService.supportBlog(ids, status);
        return ResultUtil.success(i);
    }

    @ApiOperation("设置博客状态为已发布、垃圾箱、草稿箱")
    @PutMapping("/api/blog/status/{id}/{status}")
    @ResponseBody
    public Result changeStatus(@PathVariable(value = "id") Integer[] ids, @PathVariable Integer status) {
        int i = blogService.changeBlogStatus(ids, status);
        return ResultUtil.success();
    }

    @ApiOperation("新增博客")
    @PostMapping("/api/blog")
    @ResponseBody
    public Result insertBlog(Blog blog) {
        int i = blogService.insertBlog(blog);
        return ResultUtil.success(i);
    }

    @ApiOperation("获取博客的列表信息")
    @GetMapping("/api/blog")
    @ResponseBody
    public Result getAllBlog(
            @RequestParam(value = "pageNum", defaultValue = "1") Integer pageNum,
            @RequestParam(value = "pageSize", defaultValue = "10") Integer pageSize,
            @RequestParam(value = "title", defaultValue = "", required = false) String title,
            @RequestParam(value = "status", required = false) Integer status,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "startTime", required = false) Date startTime,
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) @RequestParam(value = "endTime", required = false) Date endTime) {
        PageHelper.startPage(pageNum, pageSize, "create_time desc");
        List<Blog> blogs = blogService.selectAllBlog(title, startTime, endTime, status);
        PageInfo pageInfo = new PageInfo(blogs);
        return ResultUtil.success(pageInfo);
    }


    @PostMapping(value = "/uploadQiNiu")
    @ResponseBody
    public Object uploadQiNiu(@RequestParam("file") MultipartFile file, HttpServletRequest request) {
        File distFile = null;
        if (!file.isEmpty()) {
            try {
                String path = request.getSession().getServletContext().getRealPath("/upload");
                String fileName = UUID.randomUUID().toString().replace("-", "") + file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
                distFile = new File(path + "/" + fileName);
                file.transferTo(distFile);
                StringMap stringMap = QiNiuUtils.upload(fileName, path + "/");
                return stringMap.map();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                distFile.delete();
            }
        }
        return null;
    }


    @ApiOperation("获取博客状态的分类信息")
    @GetMapping("/api/blog/count")
    @ResponseBody
    public Result getBlogStatusCount() {
        Map<String, Integer> map = blogService.selectCountOfBlogStatus();
        return ResultUtil.success(map);
    }

}
