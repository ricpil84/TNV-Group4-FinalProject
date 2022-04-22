package com.tnv.loginApp.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


import javax.sql.DataSource;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    DataSource dataSource;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(this.dataSource)
                .usersByUsernameQuery("select username,password,enabled "
                        + "from users "
                        + "where username = ?")
                .authoritiesByUsernameQuery("select username, authority "
                        + "from authorities "
                        + "where username = ?");
                // FIRST RUN CONFIG
                /*.withUser("user")
                .password(passwordEncoder.encode("1234"))
                .roles("USER")
                .and()
                .withUser("admin")
                .password(passwordEncoder.encode("1234"))
                .roles("ADMIN");*/
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // CORS config
        http.cors().and()
                .authorizeRequests()
                .antMatchers("login/*").permitAll()
                //.antMatchers("/*").hasAnyRole("USER")
                //.antMatchers("/*").hasAnyRole("ADMIN")
                //.anyRequest().authenticated()
                //.and().httpBasic();

                //.and().authorizeRequests().anyRequest().permitAll(); // this works
                .and()
         /* http */ // CSRF config
                .csrf().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.GET, "/*")
                .hasAnyRole("USER","ADMIN")
                .antMatchers(HttpMethod.POST, "/*")
                .hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/*")
                .hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/*")
                .hasAnyRole("ADMIN")
                .anyRequest().authenticated()
                .and()
                .httpBasic();
    }

    /*@Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }*/

    @Bean
    PasswordEncoder passwordEncoder() {
        return passwordEncoder;
    }
}
