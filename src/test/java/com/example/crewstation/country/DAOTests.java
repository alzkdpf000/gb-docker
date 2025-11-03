package com.example.crewstation.country;


import com.example.crewstation.dto.country.CountryDTO;
import com.example.crewstation.mapper.country.CountryMapper;
import com.example.crewstation.repository.country.CountryDAO;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;


@Slf4j
@SpringBootTest
public class DAOTests {
    @Autowired
    private CountryDAO countryDAO;

    @Test
    public void testfindAll(){
//        테스트 자동화
//        다이어리 작성 / 수정 서비스를 위한 나라 태그 정보 확인을 통해 배포 자동화 단위 테스트 구현
        List<CountryDTO> all = countryDAO.findAll();
        assertThat(all.size()).isEqualTo(190);

    }
}
