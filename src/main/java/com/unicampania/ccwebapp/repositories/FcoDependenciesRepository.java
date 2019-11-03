package com.unicampania.ccwebapp.repositories;


import com.unicampania.ccwebapp.model.FcoDependencies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface FcoDependenciesRepository extends JpaRepository<FcoDependencies, String> {

    @Query(value = "select * from fcodependencies where idf = :id",
            nativeQuery = true)
    List<FcoDependencies> fcodipendenciesQuery(@Param("id") String id);


    @Query(value = "SELECT fcodependencies.* FROM listfco INNER JOIN fcodependencies ON listfco.id = fcodependencies.idf",
            nativeQuery = true)
    List<FcoDependencies> fcodipendenciesshowQuery();
}