package com.unicampania.ccwebapp.repositories;

import com.unicampania.ccwebapp.model.ListFco;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListFcoRepository extends JpaRepository<ListFco, String> {

    ListFco findByName(String id);

    @Query(value = "select * from listfco", nativeQuery = true)
    List<ListFco> listFcoQuery();

    @Query(value = "SELECT * FROM listfco", nativeQuery = true)
    List<ListFco> listFclassQuery();


}
