const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./scratch");
const axios = require("axios");

const dataAddress = [
  {
    id: "hochiminh",
    name: "Hồ Chí Minh",
    districts: [
      {
        id: "1",
        name: "Quận 1",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "2",
        name: "Quận 2",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "3",
        name: "Quận 3",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "4",
        name: "Quận 4",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "5",
        name: "Quận 5",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
    ],
  },
  {
    id: "dongnai",
    name: "Đồng Nai",
    districts: [
      {
        id: "1",
        name: "Biên Hòa",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "2",
        name: "Long Khánh",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "3",
        name: "Cẩm Mỹ",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "4",
        name: "Long Thành",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "5",
        name: "Định Quán",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
    ],
  },
  {
    id: "binhduong",
    name: "Bình Dương",
    districts: [
      {
        id: "1",
        name: "Bến Cát",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "2",
        name: "Dầu Tiếng",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "3",
        name: "Dĩ An",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "4",
        name: "Phú Giáo",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "5",
        name: "Tân Uyên",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
    ],
  },
  {
    id: "tayninh",
    name: "Tây Ninh",
    districts: [
      {
        id: "1",
        name: "Tân Biên",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "2",
        name: "Tân Châu",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "3",
        name: "Hòa Thành",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "4",
        name: "Châu Thành",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "5",
        name: "Trảng Bàng",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
    ],
  },
  {
    id: "longan",
    name: "Long An",
    districts: [
      {
        id: "1",
        name: "Bến Lức",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "2",
        name: "Thủ Thừa",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "3",
        name: "Tân Trụ",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "4",
        name: "Thạnh Hóa",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
      {
        id: "5",
        name: "Mộc Hóa",
        wards: [
          {
            id: "1",
            name: "Phường 1",
          },
          ,
          {
            id: "2",
            name: "Phường 2",
          },
          {
            id: "3",
            name: "Phường 3",
          },
          {
            id: "4",
            name: "Phường 4",
          },
          {
            id: "5",
            name: "Phường 5",
          },
        ],
      },
    ],
  },
];

class ManagerController {
  // GET /related-covid/list
  relatedCovidView(req, res, next) {
    // console.log(req);
    const role = localStorage.getItem("role");
    if (req.query.q) {
      require("../db")
        .query(
          'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" WHERE "hoten" LIKE $1;',
          ["%" + req.query.q + "%"]
        )
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/related", {
              authenticated: req.authenticated,
              role,
            });
          } else {
            res.render("manager/related", {
              authenticated: req.authenticated,
              data: data.rows,
              role,
            });
          }
        })
        .catch((err) => console.log(err));
    } else if (req.query.sort && req.query.sort !== "") {
      const queryString =
        req.query.sort === "ASC"
          ? 'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" ORDER BY "hoten" ASC'
          : 'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" ORDER BY "hoten" DESC';
      require("../db")
        .query(queryString)
        .then((data) => {
          console.log(data);
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/related", {
              authenticated: req.authenticated,
              role,
            });
          } else {
            res.render("manager/related", {
              authenticated: req.authenticated,
              data: data.rows,
              role,
            });
          }
        })
        .catch((err) => console.log(err));
    } else {
      require("../db")
        .query(
          'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" ORDER BY "Nguoi_id" ASC'
        )
        .then((data) => {
          // console.log(data);
          if (data.rowCount == 0) {
            console.log("khong co du lieu");
            res.render("manager/related", {
              authenticated: req.authenticated,
              role,
            });
          } else {
            res.render("manager/related", {
              authenticated: req.authenticated,
              data: data.rows,
              role,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }
  // [GET]  /related-covid/list/:id
  detailCovidUser(req, res, next) {
    require("../db")
      .query(
        'SELECT * FROM public."Nguoi" left JOIN public."NoiDieuTri" on "Nguoi".dieutri_id = "NoiDieuTri"."DieuTri_id" where "Nguoi_id" = $1',
        [req.params.id]
      )
      .then((data) => {
        if (data.rowCount == 0) {
          console.log("khong co du lieu");
          res.render("manager/detailUser", {
            authenticated: req.authenticated,
          });
        } else {
          const queryStr = `select * from public."Nguoi" where "Nguoi_id" in
              ( SELECT "nlq_id" 
                FROM public."Nguoi" full JOIN public."NguoiLienQuan" 
                on "Nguoi"."Nguoi_id" = "NguoiLienQuan"."nguoi_id" 
                WHERE "Nguoi"."Nguoi_id" = $1);`;

          require("../db")
            .query(queryStr, [req.params.id])
            .then((lienquan) => {
              if (lienquan.rowCount == 0) {
                console.log("khong co nguoi lien quan");
                res.render("manager/detailUser", {
                  authenticated: req.authenticated,
                  data: data.rows[0],
                });
              } else {
                res.render("manager/detailUser", {
                  authenticated: req.authenticated,
                  data: data.rows[0],
                  lienquan: lienquan.rows,
                });
              }
            });
        }
      });
  }
  // [GET]  /related-covid/list/add
  async addCovidUser(req, res, next) {
    try {
      if (!req.authenticated) {
        res.redirect("/");
      } else {
        require("../db")
          .query('SELECT * FROM public."NoiDieuTri"')
          .then((data) => {
            if (data.rowCount == 0) {
              console.log("khong co du lieu");
              res.render("manager/addCovidUser", {
                authenticated: req.authenticated,
              });
            } else {
              require("../db")
                .query('SELECT * FROM public."Nguoi" ORDER BY "Nguoi_id" ASC')
                .then((nguoi) => {
                  res.render("manager/addCovidUser", {
                    authenticated: req.authenticated,
                    DSnoidieutri: data.rows,
                    DSNguoi: nguoi.rows,
                    maxNguoiId: nguoi.rows[nguoi.rows.length - 1].Nguoi_id,
                    dataAddress,
                    dataDistrict: dataAddress[0].districts,
                    dataWard: dataAddress[0].districts[0].wards,
                  });
                });
            }
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error);
    }
  }
  // [POST]  /related-covid/list/add
  postCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      // console.log(req.body);
      const {
        hoten,
        cccd,
        namsinh,
        // diachi,
        city,
        district,
        ward,
        detail,
        trangthai,
        dieutri_id,
        lichsu,
        maxNguoiId,
        DS_nlq_id,
      } = req.body;
      require("../db")
        .query(
          'INSERT INTO "Nguoi" (hoten, cccd, namsinh, city,district,ward,detail, trangthai, dieutri_id, lichsu) VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10);',
          [
            hoten,
            cccd,
            namsinh,
            city,
            district,
            ward,
            detail,
            trangthai,
            dieutri_id,
            lichsu,
          ]
        )
        .then((data) => {
          if (data.rowCount == 0) {
            console.log("insert k thành công");
            res.render("manager/addCovidUser", {
              authenticated: req.authenticated,
            });
          } else if (DS_nlq_id) {
            let queryStr =
              'INSERT INTO public."NguoiLienQuan" (nguoi_id, nlq_id) VALUES ($1, $2)';
            for (let index = 0; index < DS_nlq_id.length - 1; index++) {
              queryStr = queryStr + `,($1, $${index + 3})`;
            }
            require("../db").query(queryStr, [
              (parseInt(maxNguoiId) + 1).toString(),
              ...DS_nlq_id,
            ]);
            res.redirect("/manager/related-covid/list");
          } else {
            res.redirect("/manager/related-covid/list");
          }
        })
        .catch((err) => console.log(err));
    }
  }
  // [GET] /related-covid/edit/:id
  editCovidUserView(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      if (req.params.id) {
        require("../db")
          .query('SELECT * FROM public."Nguoi" where "Nguoi_id" = $1', [
            req.params.id,
          ])
          .then((data) => {
            require("../db")
              .query('SELECT * FROM public."NoiDieuTri"')
              .then((dieutri) => {
                const DSnoidieutri = dieutri.rows.map((obj) => {
                  return obj.DieuTri_id === data.rows[0].dieutri_id
                    ? {
                        ...obj,
                        selected: true,
                      }
                    : obj;
                });
                require("../db")
                  .query('SELECT * FROM public."Nguoi" ORDER BY "Nguoi_id" ASC')
                  .then((nguoi) => {
                    let queryStr = `select "Nguoi_id" from public."Nguoi" where "Nguoi_id" in
                    (SELECT "nlq_id" 
                    FROM public."Nguoi" 
                      full JOIN public."NguoiLienQuan" 
                      on "Nguoi"."Nguoi_id" = "NguoiLienQuan"."nguoi_id" 
                    where "Nguoi"."Nguoi_id" = $1)`;
                    require("../db")
                      .query(queryStr, [req.params.id])
                      .then((DSnlqId) => {
                        DSnlqId.rows.map((nlq) => {
                          for (let i = 0; i < nguoi.rows.length; i++) {
                            nguoi.rows[i] =
                              nlq.Nguoi_id === nguoi.rows[i].Nguoi_id
                                ? {
                                    ...nguoi.rows[i],
                                    selected: true,
                                  }
                                : nguoi.rows[i];
                          }
                        });

                        res.render("manager/editCovidUser", {
                          authenticated: req.authenticated,
                          user: data.rows[0],
                          DSnoidieutri,
                          DSNguoi: nguoi.rows,
                          dataAddress,
                          dataDistrict: dataAddress[0].districts,
                          dataWard: dataAddress[0].districts[0].wards,
                        });
                      });
                  })
                  .catch((err) => console.log(err));
              });
          });
      } else res.render("manager/related");
    }
  }
  // [PUT] /related-covid/edit/:id
  editCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      const {
        hoten,
        cccd,
        namsinh,
        city,
        district,
        ward,
        detail,
        trangthai,
        dieutri_id,
        DS_nlq_id,
        lichsu,
      } = req.body;
      if (req.params.id) {
        const queryStr = `select "succhua" 
        from public."NoiDieuTri" 
        where "DieuTri_id" = $1 and "succhua" > (	SELECT count(*) 
                  FROM public."Nguoi" left JOIN public."NoiDieuTri" 
                      on "Nguoi"."dieutri_id" = "NoiDieuTri"."DieuTri_id" 
                  where "NoiDieuTri"."DieuTri_id" = $1);`;
        require("../db")
          .query(queryStr, [dieutri_id])
          .then((data) => {
            if (data.rowCount === 0) {
              console.log("không đủ sức chứa");
              res.render("manager/editCovidUser", {
                authenticated: req.authenticated,
                message: "không đủ sức chứa",
                type: "warning",
              });
            } else {
              const queryStr = ` UPDATE public."Nguoi"
              SET "hoten" = $2, "cccd" = $3, "namsinh" = $4, "city" = $5, "district" = $6, "ward" = $7, "detail" = $8, "trangthai" = $9, "dieutri_id" = $10, "lichsu" = $11
              WHERE "Nguoi_id" = $1;`;

              require("../db")
                .query(queryStr, [
                  req.params.id,
                  hoten,
                  cccd,
                  namsinh,
                  city,
                  district,
                  ward,
                  detail,
                  trangthai,
                  dieutri_id,
                  lichsu,
                ])
                .then((data) => {
                  if (DS_nlq_id) {
                    const trangthaiNlq =
                      trangthai !== "F3"
                        ? "F" + (parseInt(trangthai[1]) + 1).toString()
                        : "";
                    let queryStr = `
                  UPDATE public."Nguoi"
                  SET "trangthai" = $1
                  WHERE "Nguoi_id" = $2 `;
                    for (let i = 0; i < DS_nlq_id.length - 1; i++) {
                      queryStr = queryStr + `or "Nguoi_id" = $${i + 3} `;
                    }
                    require("../db")
                      .query(queryStr, [trangthaiNlq, ...DS_nlq_id])
                      .then((data) => {
                        console.log(data.rows);
                        res.redirect("/manager/related-covid/list");
                      });
                  } else {
                    res.redirect("/manager/related-covid/list");
                  }
                })
                .catch((err) => console.log(err));
            }
          });
      } else res.redirect("/manager/related-covid/list");
    }
  }
  // [DELETE] /related-covid/delete/:id
  deleteCovidUser(req, res, next) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      if (req.params.id) {
        const queryStr = `delete from public."Nguoi" where "Nguoi_id" = $1`;
        require("../db")
          .query(queryStr, [req.params.id])
          .then((data) => {
            if (data.rowCount === 0) {
              console.log("xoá không thành công");
              res.redirect("/manager/related-covid/list/");
            } else {
              res.redirect("/manager/related-covid/list/");
            }
          });
      }
    }
  }
  // [GET] /statistic - Thống kê thông tin ................
  statisticInformation(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("staticInformation/staticInfo", {
        authenticated: req.authenticated,
      });
    }
  }

  // [GET] /payment - Quản Lý Thanh Toán
  paymentManagement(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("manager/paymentManagement", {
        authenticated: req.authenticated,
      });
    }
  }

  // [GET] /payment/level - Them han muc thanh toan
  paymentLevelView(req, res) {
    const hanMucThanhToanCu = localStorage.getItem("hanMucThanhToan");
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("manager/editPaymentLevel", {
        authenticated: req.authenticated,
        hanMucThanhToanCu,
      });
    }
  }

  // [[POST] /payment/level - Them han muc thanh toan]]
  paymentLevel(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      localStorage.setItem("hanMucThanhToan", req.body.newhanmuc);
      res.render("manager/editPaymentLevel", {
        authenticated: req.authenticated,
        message: "Thêm hạn mức thành công",
        type: "success",
      });
    }
  }

  // [GET] /payment/list
  paymentList(req, res) {
    if (!req.authenticated) {
      res.redirect("/");
    } else {
      res.render("manager/paymentList", {
        authenticated: req.authenticated,
      });
    }
  }
}

module.exports = new ManagerController();
